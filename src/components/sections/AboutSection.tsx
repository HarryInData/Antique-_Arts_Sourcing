"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const paragraphStyle =
  "text-text-gray font-light text-[1.05rem] lg:text-[1.1rem] leading-[1.8] mb-5 transition-all duration-700 ease-out";

export const AboutSection: FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();
  const { ref: statsRef, isVisible: statsVisible } = useReveal();

  return (
    <section id="about" className="section about-section py-[80px] sm:py-[100px] lg:py-[120px] relative bg-bg-primary overflow-hidden">
      <div className="container max-w-container mx-auto px-6">
        
        {/* ====================================================================
           PART 1: FOUNDERS' STORY & BRAND PHILOSOPHY (Balanced 2-Column Grid)
           ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">

          {/* Left Column: Brand Story Narrative */}
          <div
            ref={leftRef}
            className="about-info"
          >
            <span className={cn("block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3 transition-all duration-700 ease-out delay-100", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              Artisan Heritage
            </span>
            <h2
              className={cn("font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight mb-4 text-white transition-all duration-700 ease-out delay-150", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
            >
              Trusted Export Craftsmanship From <span className="text-accent-gold">Firozabad</span>
            </h2>

            <p
              className={cn("font-heading text-[1.05rem] lg:text-[1.15rem] font-medium text-text-gray tracking-wide mb-5 transition-all duration-700 ease-out delay-200", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
            >
              Timeless Craftsmanship. <span className="text-accent-gold">Trusted Sourcing.</span>
            </p>

            <div className={cn("h-[2px] bg-accent-gold mb-7 transition-all duration-700 ease-out delay-300", leftVisible ? "w-[60px]" : "w-0")} />

            <p className={cn(paragraphStyle, "delay-300", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              Every handcrafted piece carries more than beauty—it carries history, culture, and the dedicated hands of the master artisans who created it.
            </p>

            <p className={cn(paragraphStyle, "delay-[400ms]", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              <strong className="text-white font-medium">Antique Arts Sourcing</strong> was founded with a simple, enduring vision: to bridge traditional Indian artisan workshops with international importers, architects, and hospitality procurement teams.
            </p>

            <p className={cn("text-accent-gold font-medium text-[1.2rem] leading-[1.8] mb-5 italic font-heading transition-all duration-700 ease-out delay-[500ms]", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              &ldquo;We don&apos;t simply export products—we build lasting partnerships and bring enduring craftsmanship from skilled hands to inspiring spaces around the world.&rdquo;
            </p>

            <p className={cn(paragraphStyle, "delay-[600ms]", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              Across generations, skilled artisans in metalwork, glassblowing, joinery, and architectural lighting have preserved traditional techniques. We partner directly with 50+ verified workshops to curate distinctive collections of premium decorative pieces, architectural accents, and bespoke OEM/ODM creations.
            </p>

            <div className={cn("mt-6 pt-6 border-t border-white/[0.08] transition-all duration-700 ease-out delay-[700ms]", leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
              <p className="font-heading text-[1.15rem] lg:text-[1.25rem] font-semibold tracking-[0.06em] text-white">
                Timeless Craftsmanship. <span className="text-accent-gold">Trusted Sourcing.</span> Global Reach.
              </p>
            </div>
          </div>

          {/* Right Column: Founders Image Card */}
          <div
            ref={rightRef}
            className={cn("relative w-full transition-all duration-1000 ease-out", rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}
          >
            {/* Ambient background glow */}
            <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(255,211,122,0.15)_0%,rgba(15,15,15,0)_70%)] pointer-events-none z-0 rounded-3xl" />

            <div className="relative z-[1] bg-bg-secondary border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              {/* Header Badge — Brand Name Only */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/branding/antique-arts-sourcing-emblem.png"
                    alt="Antique Arts Sourcing Emblem"
                    fill
                    sizes="28px"
                    className="object-contain"
                  />
                </div>
                <p className="font-heading text-white text-[0.95rem] font-semibold tracking-[0.14em] uppercase">
                  Antique Arts Sourcing
                </p>
              </div>

              {/* Image Frame */}
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-black border border-white/5">
                <Image
                  src="/images/branding/antique-arts-sourcing-founders-firozabad.jpg"
                  alt="Antique Arts Sourcing Founding Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_30%] transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-[2]" />
                <div className="absolute bottom-0 inset-x-0 z-[3] p-5">
                  <p className="font-heading text-white text-[1.25rem] font-semibold tracking-[0.06em]">
                    Our Founders
                  </p>
                  <p className="text-text-gray text-[0.85rem] font-light">
                    Directing export operations &amp; master artisan partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* ====================================================================
           PART 2: SOURCING METRICS BANNER (Full-Width 4-Column Bar)
           ==================================================================== */}
        <div
          ref={statsRef}
          className={cn("my-10 sm:my-12 lg:my-16 p-6 sm:p-8 lg:p-10 bg-bg-secondary rounded-2xl border border-white/[0.06] shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out", statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            <div className="flex flex-col items-center text-center p-2">
              <span className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-accent-gold font-semibold leading-none mb-2">
                20+
              </span>
              <span className="text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                Countries Served
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-accent-gold font-semibold leading-none mb-2">
                6
              </span>
              <span className="text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                Product Verticals
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-accent-gold font-semibold leading-none mb-2">
                50+
              </span>
              <span className="text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                Artisan Workshops
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-accent-gold font-semibold leading-none mb-2">
                100%
              </span>
              <span className="text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                Handcrafted Assurance
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
