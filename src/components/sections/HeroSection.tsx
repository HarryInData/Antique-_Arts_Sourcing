"use client";

import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollIndicator } from "../ui/ScrollIndicator";
import { Button } from "../ui/Button";
import { HERO_FRAME_COUNT } from "@/constants";

interface HeroSectionProps {
  frames: HTMLImageElement[];
  isLoaded: boolean;
}

export const HeroSection: FC<HeroSectionProps> = ({ frames, isLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track context for clean GSAP animation teardown
  const gsapCtxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!isLoaded || frames.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameObj = { frame: 0 };

    const drawFrame = (index: number) => {
      const img = frames[index];
      if (!img || img.naturalWidth === 0) return;

      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const canvasWidth = rect.width;
      const canvasHeight = rect.height;

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth: number;
      let drawHeight: number;
      let drawX: number;
      let drawY: number;

      // We use standard "cover" drawing so that the frames cover the entire viewport
      if (imgRatio < canvasRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        drawX = 0;
        drawY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      drawFrame(Math.floor(frameObj.frame));
    };

    // Initialize initial canvas draw
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Set up GSAP scroll triggers inside context
    const ctxGSAP = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          pin: pinnedRef.current,
          invalidateOnRefresh: true,
        },
      });

      // Frame rotation timeline linkage
      tl.to(
        frameObj,
        {
          frame: HERO_FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          duration: 0.95,
          onUpdate: () => {
            drawFrame(Math.floor(frameObj.frame));
          },
        },
        0
      );

      // Slide 1 Out
      tl.to(
        "#slide-1",
        {
          opacity: 0,
          y: -50,
          filter: "blur(10px)",
          pointerEvents: "none",
          duration: 0.2,
        },
        0.05
      );

      // Slide 2 In & Out
      tl.fromTo(
        "#slide-2",
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto",
          duration: 0.15,
        },
        0.3
      ).to(
        "#slide-2",
        {
          opacity: 0,
          y: -50,
          filter: "blur(10px)",
          pointerEvents: "none",
          duration: 0.15,
        },
        0.55
      );

      // Slide 3 In & Out
      tl.fromTo(
        "#slide-3",
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto",
          duration: 0.15,
        },
        0.65
      ).to(
        "#slide-3",
        {
          opacity: 0,
          y: -50,
          filter: "blur(10px)",
          pointerEvents: "none",
          duration: 0.1,
        },
        0.85
      );

      // Canvas scale and fade exit
      tl.to(
        canvas,
        {
          scale: 0.75,
          y: -100,
          opacity: 0,
          duration: 0.15,
          ease: "power1.inOut",
        },
        0.85
      );
    });

    gsapCtxRef.current = ctxGSAP;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
      }
    };
  }, [isLoaded, frames]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full h-[350vh] bg-bg-primary"
    >
      <div
        ref={pinnedRef}
        className="relative w-full h-screen overflow-hidden flex items-center bg-[radial-gradient(circle_at_50%_50%,#1c1c1c_0%,#0F0F0F_80%)]"
      >
        {/* Background radial glow */}
        <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,211,122,0.15)_0%,rgba(15,15,15,0)_70%)] pointer-events-none animate-[subtleFloat_10s_infinite_ease-in-out_alternate] z-0" />

        {/* Canvas wrapper */}
        <div className="canvas-wrapper absolute inset-0 w-full h-screen flex items-center justify-center z-[1] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_right,rgba(15,15,15,0.9)_0%,rgba(15,15,15,0.5)_45%,rgba(15,15,15,0.1)_100%)] after:pointer-events-none after:z-[2]">
          <canvas
            ref={canvasRef}
            id="hero-canvas"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Floating text slides */}
        <div className="hero-slides absolute left-[8%] top-0 w-[84%] md:w-[38%] h-screen flex items-center z-[3] pointer-events-none">
          <div className="relative w-full h-[550px] -translate-y-[15px]">
            {/* Slide 1 */}
            <div
              id="slide-1"
              className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-[60px] scale-[0.97] blur-[15px] transition-[opacity,transform,filter] duration-800 pointer-events-none w-full active"
              style={{ opacity: 1, transform: "translateY(0px) scale(1)", filter: "blur(0px)" }}
            >
              <div className="max-w-[480px]">
                <span className="subtitle-tag">Exquisite Craftsmanship</span>
                <h1 className="hero-title text-5xl font-semibold leading-[1.15] mb-6 text-white font-heading">
                  Illuminate Your World With <span className="highlight">Elegance</span>
                </h1>
                <p className="hero-desc text-[1.1rem] leading-[1.8] text-text-gray mb-9 font-light">
                  Bespoke handcrafted lighting and luxury decorative items. Meticulously designed for spaces that demand the extraordinary.
                </p>
                <div className="flex gap-4 flex-wrap pointer-events-auto">
                  <Button href="#collections" variant="primary">
                    Explore Collections
                  </Button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              id="slide-2"
              className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-[60px] scale-[0.97] blur-[15px] transition-[opacity,transform,filter] duration-800 pointer-events-none w-full"
            >
              <div className="max-w-[480px]">
                <span className="subtitle-tag">Artisanal Details</span>
                <h2 className="hero-title text-5xl font-semibold leading-[1.15] mb-6 text-white font-heading">
                  Handwoven <span className="highlight">Mesh</span> Designs
                </h2>
                <p className="hero-desc text-[1.1rem] leading-[1.8] text-text-gray mb-9 font-light">
                  Notice the organic, fluid weave patterns. Every wire is bent, welded, and refined by local artisans, diffusing light into a soft golden pattern.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              id="slide-3"
              className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-[60px] scale-[0.97] blur-[15px] transition-[opacity,transform,filter] duration-800 pointer-events-none w-full"
            >
              <div className="max-w-[480px]">
                <span className="subtitle-tag">Sensory Atmosphere</span>
                <h2 className="hero-title text-5xl font-semibold leading-[1.15] mb-6 text-white font-heading">
                  A Symphony of <span className="highlight">Shadows</span>
                </h2>
                <p className="hero-desc text-[1.1rem] leading-[1.8] text-text-gray mb-9 font-light">
                  Our lighting products are engineered to do more than light a room—they create ambient textures, forming mesmerizing architectural shadows on your walls.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};
