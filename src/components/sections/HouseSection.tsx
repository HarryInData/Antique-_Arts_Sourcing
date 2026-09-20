"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export const HouseSection: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-white border-t border-b border-[rgba(24,24,22,0.06)]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">07 / Export Heritage</span>
          <h2 className="heading-section mb-4">Why International Buyers Work With Us</h2>
          <p className="body-text">
            Rooted in Firozabad&apos;s centuries-old artisan traditions, providing reliable manufacturing partnerships, rigorous AQL inspection, and end-to-end export support.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Founders Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#ECE7DE] border border-[rgba(24,24,22,0.08)]">
              <Image
                src="/images/branding/antique-arts-sourcing-founders-firozabad.jpg"
                alt="Antique Arts Sourcing Founding Leadership Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[0.75rem] font-sans tracking-[0.12em] uppercase text-[#6F6A61]">
              <span>Founding Leadership &amp; Sourcing Direction</span>
              <span>Firozabad, UP</span>
            </div>
          </div>

          {/* Editorial Narrative (6 cols) */}
          <div className="lg:col-span-6 pt-2">
            <p className="body-text mb-6">
              Antique Arts Sourcing was founded in Firozabad, Uttar Pradesh — a city with centuries of glass-blowing and metalworking heritage. What began as a local craft workshop has evolved into a dedicated global B2B sourcing house.
            </p>
            <p className="body-text mb-6">
              We collaborate directly with over 50 specialized artisan workshops, each excelling in distinct craft disciplines: hand-forged brass and copper metalwork, mouth-blown crystal, bespoke furniture joinery, and architectural lighting installations.
            </p>
            <p className="body-text mb-10">
              Every collection we source, develop, or manufacture meets rigorous international quality standards. From multi-stage in-line quality audits to ISPM-15 certified timber crate export packaging, we bridge the gap between traditional artisanal craftsmanship and the expectations of global trade buyers.
            </p>

            {/* 4 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-[rgba(24,24,22,0.1)] pt-8">
              {[
                { title: "Heritage Craftsmanship", desc: "Generational artisan techniques preserved." },
                { title: "Direct Workshop Sourcing", desc: "No middle layers; fair artisan trade." },
                { title: "AQL Quality Inspection", desc: "Multi-stage pre-shipment audit protocols." },
                { title: "Global Export Logistics", desc: "ISPM-15 timber crating & freight handling." },
              ].map((val) => (
                <div key={val.title} className="flex flex-col">
                  <span className="text-[0.8125rem] font-sans font-semibold uppercase tracking-[0.1em] text-[#181816] mb-1">
                    {val.title}
                  </span>
                  <span className="text-[0.8125rem] font-sans font-light text-[#6F6A61] leading-[1.5]">
                    {val.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
