import { useState, useEffect } from "react";
import { HERO_FRAME_COUNT, HERO_FRAME_PREFIX, HERO_FRAME_EXTENSION } from "@/constants";
import { zeroPad } from "@/lib/utils";

export function useFramePreloader() {
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const imageElements: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      const currentProgress = (loadedCount / HERO_FRAME_COUNT) * 100;
      setProgress(currentProgress);

      if (loadedCount === HERO_FRAME_COUNT) {
        setIsLoaded(true);
      }
    };

    const handleImageError = (index: number) => {
      console.error(`Failed to load frame ${index}`);
      // Fail-soft: continue counting so progress doesn't stall
      loadedCount++;
      const currentProgress = (loadedCount / HERO_FRAME_COUNT) * 100;
      setProgress(currentProgress);

      if (loadedCount === HERO_FRAME_COUNT) {
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < HERO_FRAME_COUNT; i++) {
      const img = new Image();
      const padded = zeroPad(i);
      img.src = `${HERO_FRAME_PREFIX}${padded}${HERO_FRAME_EXTENSION}`;
      
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(i);

      imageElements.push(img);
    }

    setFrames(imageElements);

    // Clean up
    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  return { progress, isLoaded, frames };
}
