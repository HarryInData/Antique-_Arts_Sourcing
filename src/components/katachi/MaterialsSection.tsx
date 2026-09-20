"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MATERIALS } from "@/data/katachi";

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0].id);

  return (
    <section id="materials" className="section-editorial border-t border-[#1A1918]/10 bg-[#FAF9F6]">
      <div className="container-editorial">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <span className="micro-label text-[#B86B4D]">RAW & HONEST ESSENCE</span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] leading-[1.1]">
            “Made from materials that age beautifully.”
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#1A1918]/70 max-w-xl font-light leading-relaxed">
            We partner exclusively with sustainable European forestry, Italian wool mills, and historic travertine quarries. Every surface develops character through human touch.
          </p>
        </div>

        {/* Material Feature Card & Tactile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Tactile Material Photography Preview */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#ECE8DF] border border-[#1A1918]/10 group">
            <Image
              src="/images/katachi/journal-2.jpg"
              alt="Tactile materials close-up"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center editorial-zoom"
            />
            <div className="absolute bottom-4 left-4 bg-[#F7F5F0]/90 backdrop-blur-md px-4 py-2 border border-[#1A1918]/10 text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1918]">
              Tactile Archive Specimen · 06 Materials
            </div>
          </div>

          {/* Right Column: 6 Material Panels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {MATERIALS.map((mat) => {
              const isActive = activeMaterial === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat.id)}
                  className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#F7F5F0] border-[#1A1918] shadow-sm"
                      : "bg-[#FFFFFF] border-[#1A1918]/10 hover:border-[#1A1918]/30"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {/* Swatch indicator */}
                      <span
                        className="w-4 h-4 rounded-full border border-black/15"
                        style={{ backgroundColor: mat.swatchColor }}
                      />
                      <span className="text-[10px] font-sans font-medium tracking-[0.16em] uppercase text-[#1A1918]/50">
                        {mat.provenance}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1918]">
                      {mat.name}
                    </h3>

                    <p className="font-sans text-[11px] sm:text-xs text-[#1A1918]/70 font-light leading-relaxed">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1A1918]/5 text-[10px] font-sans uppercase tracking-[0.16em] text-[#B86B4D] font-medium">
                    {mat.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
