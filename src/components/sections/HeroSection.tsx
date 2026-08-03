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
        <div className="hero-slides absolute left-[6%] sm:left-[8%] top-0 w-[88%] sm:w-[84%] md:w-[44%] lg:w-[38%] h-screen flex items-center z-[3] pointer-events-none">
          <div className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] max-h-[550px] -translate-y-[10px]">
            {/* Slide 1 — Primary B2B Value Proposition */}
            <div
              id="slide-1"
              className="absolute inset-0 flex flex-col justify-center opacity-100 translate-y-0 scale-100 blur-0 transition-[opacity,transform,filter] duration-800 pointer-events-auto w-full"
            >
              <div className="max-w-[520px]">
                <span className="subtitle-tag">India&apos;s Premier B2B Export Sourcing Partner</span>
                <h1 className="hero-title text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.15] mb-4 sm:mb-5 text-white font-heading">
                  Global Luxury Décor &amp; Custom Manufacturing <span className="highlight">Export Partner</span>
                </h1>
                <p className="hero-desc text-[0.925rem] sm:text-[0.975rem] md:text-[1.025rem] leading-[1.75] text-text-gray mb-5 sm:mb-6 font-light">
                  From handcrafted brass artistry and glass décor to bespoke furniture and architectural lighting — we source, manufacture, and export premium Indian craftsmanship to importers, architects, and hospitality brands across 20+ countries.
                </p>
                <div className="flex gap-3 sm:gap-4 flex-wrap pointer-events-auto mb-5 sm:mb-6">
                  <Button href="/contact" variant="primary">
                    Request Export Catalogue &amp; RFQ
                  </Button>
                  <Button href="/contact#rfq-form" variant="secondary">
                    Submit CAD Brief
                  </Button>
                </div>
                {/* Trust Badge Bar */}
                <div className="hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.12em] text-text-gray font-medium pointer-events-auto">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold inline-block" />
                    ISO-Compliant Processes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold inline-block" />
                    AQL Quality Inspection
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold inline-block" />
                    ISPM-15 Packaging
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold inline-block" />
                    20+ Countries
                  </span>
                </div>
              </div>
            </div>

            {/* Slide 2 — OEM & ODM Manufacturing */}
            <div
              id="slide-2"
              className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-[60px] scale-[0.97] blur-[15px] transition-[opacity,transform,filter] duration-800 pointer-events-none w-full"
            >
              <div className="max-w-[480px]">
                <span className="subtitle-tag">OEM &amp; ODM Manufacturing</span>
                <h2 className="hero-title text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.15] mb-4 sm:mb-5 text-white font-heading">
                  Custom Manufacturing, <span className="highlight">Your Brand</span>
                </h2>
                <p className="hero-desc text-[0.925rem] sm:text-[0.975rem] md:text-[1.025rem] leading-[1.75] text-text-gray mb-6 sm:mb-7 font-light">
                  Full-service OEM and ODM capabilities. Submit your designs, tech packs, or CAD drawings — we prototype, manufacture, and deliver to your exact specifications with AQL quality assurance.
                </p>
                <div className="flex gap-4 flex-wrap pointer-events-auto">
                  <Button href="/contact#rfq-form" variant="primary">
                    Start Custom Project
                  </Button>
                </div>
              </div>
            </div>

            {/* Slide 3 — Export Infrastructure */}
            <div
              id="slide-3"
              className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-[60px] scale-[0.97] blur-[15px] transition-[opacity,transform,filter] duration-800 pointer-events-none w-full"
            >
              <div className="max-w-[480px]">
                <span className="subtitle-tag">Trusted Export Infrastructure</span>
                <h2 className="hero-title text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.15] mb-4 sm:mb-5 text-white font-heading">
                  Precision Sourcing, <span className="highlight">Global Delivery</span>
                </h2>
                <p className="hero-desc text-[0.925rem] sm:text-[0.975rem] md:text-[1.025rem] leading-[1.75] text-text-gray mb-6 sm:mb-7 font-light">
                  ISPM-15 certified packaging. UL/CE/UKCA compliance. Factory audits and pre-shipment AQL inspection. End-to-end export documentation and logistics coordination to your port of destination.
                </p>
                <div className="flex gap-4 flex-wrap pointer-events-auto">
                  <Button href="/contact" variant="primary">
                    Talk to Sourcing Expert
                  </Button>
                </div>
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
