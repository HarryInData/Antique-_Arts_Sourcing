"use client";

import React, { FC } from "react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "50+", label: "Artisan Workshops" },
  { value: "20+", label: "Countries" },
  { value: "6", label: "Product Verticals" },
  { value: "OEM / ODM", label: "Capabilities" },
];

export const EditorialIntro: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-[#F4F1EA]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Editorial Headline */}
          <div className="lg:col-span-7">
            <span className="eyebrow">The House</span>
            <h2 className="heading-section">
              Objects with History.<br />
              Made for Spaces of Tomorrow.
            </h2>
          </div>

          {/* Right Column (5 cols): Description + Statistics */}
          <div className="lg:col-span-5 pt-2 lg:pt-8">
            <p className="body-text mb-12">
              Antique Arts Sourcing bridges India&apos;s artisan heritage with contemporary global design through sourcing, custom manufacturing and export.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[rgba(24,24,22,0.12)] pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[2.25rem] sm:text-[2.6rem] font-light text-[#181816] leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#6F6A61]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
