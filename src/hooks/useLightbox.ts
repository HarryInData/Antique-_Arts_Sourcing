import { useState, useEffect } from "react";
import type { GalleryItem } from "@/types";

export function useLightbox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return {
    isOpen,
    activeItem,
    openLightbox,
    closeLightbox,
  };
}
