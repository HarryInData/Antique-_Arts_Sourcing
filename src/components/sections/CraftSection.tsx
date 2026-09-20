"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "01", title: "Source", desc: "Identify the finest artisan workshops and raw materials across specialized traditional craft clusters." },
  { num: "02", title: "Develop", desc: "Translate reference sketches, CAD drawings, and tech packs into production-ready prototypes." },
  { num: "03", title: "Craft", desc: "Master artisans hand-produce each piece using time-tested metalwork, glass, and joinery techniques." },
  { num: "04", title: "Inspect", desc: "Rigorous multi-stage in-line checks and final pre-shipment AQL quality inspection protocols." },
  { num: "05", title: "Export", desc: "ISPM-15 certified timber crate packaging and seamless international freight coordination to your port." },
];

export const CraftSection: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-[#ECE7DE]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">02 / Process &amp; Quality</span>
          <h2 className="heading-section mb-4">Quality Control &amp; Factory Audits</h2>
          <p className="body-text">
            A transparent, multi-stage sourcing and manufacturing process with AQL inspection designed for international trade standards.
          </p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Workshop Image (6 cols) */}
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src="/products/antique-collectibles/rosewood-chess-set-brass-inlay.webp"
              alt="Artisan craftsmanship — handcrafted brass and woodwork in workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Process Roadmap (6 cols) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[rgba(24,24,22,0.1)]">
            {steps.map((step) => (
              <div key={step.num} className="py-5 first:pt-0 last:pb-0 flex gap-6 items-start">
                <span className="text-[0.75rem] font-sans font-medium tracking-[0.2em] text-[#9A7B50] flex-shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[1.05rem] sm:text-[1.125rem] font-sans font-medium text-[#181816] tracking-[0.06em] uppercase mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[0.875rem] font-sans font-light text-[#6F6A61] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
