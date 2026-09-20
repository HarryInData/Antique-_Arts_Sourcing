"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const pipeline = [
  { step: "01", label: "Reference" },
  { step: "02", label: "CAD Brief" },
  { step: "03", label: "Prototype" },
  { step: "04", label: "Handcraft" },
  { step: "05", label: "AQL Quality" },
  { step: "06", label: "Export" },
];

export const ManufacturingSection: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-white border-t border-b border-[rgba(24,24,22,0.06)]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">04 / Capabilities</span>
          <h2 className="heading-section mb-4">Custom OEM &amp; Private Label Manufacturing</h2>
          <p className="body-text">
            Comprehensive OEM, ODM, and private-label contract manufacturing for international trade specifiers, retailers, and hospitality projects.
          </p>
        </div>

        {/* 12-Column Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {/* Left: Prototype / Reference (6 cols) */}
          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#ECE7DE]">
            <Image
              src="/products/antique-collectibles/heritage-brass-desk-clock-trio.webp"
              alt="Prototype development and technical specification sample"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 bg-[#F4F1EA]/95 px-4 py-2 border border-[rgba(24,24,22,0.1)]">
              <span className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#181816]">
                Phase 01 · Reference &amp; Prototyping
              </span>
            </div>
          </div>

          {/* Right: Finished Object (6 cols) */}
          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#ECE7DE]">
            <Image
              src="/products/decorative-lighting/mesh-diamond-pendant-shade.webp"
              alt="Finished handcrafted object ready for global export"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 bg-[#F4F1EA]/95 px-4 py-2 border border-[rgba(24,24,22,0.1)]">
              <span className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#181816]">
                Phase 02 · Finished Object
              </span>
            </div>
          </div>
        </div>

        {/* 6-Step Transformation Pipeline */}
        <div className="border-t border-[rgba(24,24,22,0.1)] pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {pipeline.map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] text-[#9A7B50] mb-1">
                  {item.step}
                </span>
                <span className="text-[0.875rem] font-sans font-medium uppercase tracking-[0.12em] text-[#181816]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="body-text mt-8 max-w-[640px]">
            From a single reference sketch to full-scale production. Submit your CAD drawings, tech packs, or material specifications — we manage sampling, production runs, and ISPM-15 certified container exports.
          </p>
        </div>
      </div>
    </section>
  );
};
