"use client";

import React, { FC } from "react";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { CircularGallery } from "@/components/ui/CircularGallery";

const portfolioItems = [
  {
    image: "/products/antique-collectibles/kelvin-hughes-1917-brass-sextant.webp",
    text: "1917 Kelvin & Hughes Sextant",
  },
  {
    image: "/products/decorative-lighting/tiered-mesh-bell-pendant-chandelier.webp",
    text: "Tiered Mesh Bell Chandelier",
  },
  {
    image: "/products/glass-crystal/handblown-marbled-amethyst-vase.webp",
    text: "Hand-Blown Amethyst Vase",
  },
  {
    image: "/products/luxury-home-decor/verdigris-patina-copper-amphora.webp",
    text: "Verdigris Copper Amphora",
  },
  {
    image: "/products/antique-collectibles/marine-anchor-pocket-watch-collection.webp",
    text: "Marine Anchor Pocket Watch",
  },
  {
    image: "/products/antique-collectibles/chrome-diver-helmet-desk-clock.webp",
    text: "Vintage Diver Helmet Clock",
  },
  {
    image: "/products/decorative-lighting/brass-layered-cage-pendant-light.webp",
    text: "Layered Cage Brass Pendant",
  },
  {
    image: "/products/decorative-lighting/copper-mesh-globe-pendant-light.webp",
    text: "Copper Mesh Globe Pendant",
  },
];

export const SelectedWork: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="portfolio" className="section-pad bg-[#F4F1EA] overflow-hidden">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="container-main flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="eyebrow">01 / Portfolio</span>
            <h2 className="heading-section mb-3">Selected Commercial Works</h2>
            <p className="body-text max-w-2xl">
              A curated WebGL exhibition of master artisan pieces across cast brass, mouth-blown crystal, architectural lighting, and hand-patinated copper.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#181816] hover:text-[#9A7B50] transition-colors"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Circular Gallery WebGL Showcase */}
        <div className="container-main">
          <div className="w-full h-[520px] sm:h-[600px] lg:h-[680px] relative rounded-[28px] overflow-hidden bg-[#ECE7DE]/60 border border-[rgba(24,24,22,0.08)] shadow-[0_20px_50px_rgba(24,24,22,0.04)]">
            <CircularGallery
              items={portfolioItems}
              bend={2.6}
              textColor="#181816"
              borderRadius={0.06}
              font="600 20px 'Inter', sans-serif"
              scrollSpeed={2.2}
              scrollEase={0.045}
            />

            {/* Subtle Overlay Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[rgba(24,24,22,0.08)] text-[0.7rem] font-sans font-medium uppercase tracking-[0.16em] text-[#6F6A61] shadow-sm">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#9A7B50]" />
              <span>Drag or scroll to rotate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
