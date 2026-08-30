"use client";

import React, { FC } from "react";
import { useReveal } from "@/hooks/useReveal";

const destinations = [
  { name: "USA", x: "22%", y: "36%" },
  { name: "UK", x: "47%", y: "28%" },
  { name: "Europe", x: "53%", y: "32%" },
  { name: "UAE", x: "61%", y: "44%" },
  { name: "Australia", x: "83%", y: "72%" },
  { name: "Canada", x: "20%", y: "26%" },
];

const indiaPos = { x: "67%", y: "48%" };

export const GlobalReach: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-[#F4F1EA]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">06 / Global Reach</span>
          <h2 className="heading-section mb-4">
            Crafted in India.<br />Delivered Worldwide.
          </h2>
          <p className="body-text">
            Export logistics infrastructure serving design firms, importers, and hospitality chains across 20+ countries.
          </p>
        </div>

        {/* Minimal Architectural Map Container */}
        <div className="relative w-full aspect-[2.1/1] max-h-[420px] bg-white border border-[rgba(24,24,22,0.1)] mb-12 sm:mb-16 overflow-hidden">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-[1px] bg-[#181816]"
                style={{ top: `${20 + i * 15}%` }}
              />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-[1px] bg-[#181816]"
                style={{ left: `${14 + i * 12}%` }}
              />
            ))}
          </div>

          {/* India Origin Point */}
          <div
            className="absolute z-10"
            style={{ left: indiaPos.x, top: indiaPos.y, transform: "translate(-50%, -50%)" }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#9A7B50] relative">
              <div className="absolute inset-0 rounded-full bg-[#9A7B50]/30 animate-ping" />
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.625rem] font-sans font-semibold tracking-[0.18em] uppercase text-[#9A7B50] whitespace-nowrap">
              India (Origin)
            </span>
          </div>

          {/* Destination Markers + Connecting Lines */}
          {destinations.map((dest) => (
            <React.Fragment key={dest.name}>
              {/* Subtle Dashed Vector Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <line
                  x1={indiaPos.x}
                  y1={indiaPos.y}
                  x2={dest.x}
                  y2={dest.y}
                  stroke="#9A7B50"
                  strokeWidth="0.75"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                />
              </svg>
              {/* Destination Point */}
              <div
                className="absolute z-10"
                style={{ left: dest.x, top: dest.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#181816]" />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[0.5625rem] font-sans font-medium tracking-[0.14em] uppercase text-[#6F6A61] whitespace-nowrap">
                  {dest.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Global Export Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[rgba(24,24,22,0.1)] pt-10">
          {[
            { value: "20+", label: "Countries Served" },
            { value: "6", label: "Product Verticals" },
            { value: "ISPM-15", label: "Certified Packaging" },
            { value: "AQL 2.5", label: "Inspection Standards" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="font-serif text-[1.75rem] sm:text-[2.2rem] font-light text-[#181816] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#6F6A61]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
