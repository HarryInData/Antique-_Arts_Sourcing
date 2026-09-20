"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/data/katachi";

export function FeaturedCollections() {
  return (
    <section id="collections" className="section-editorial">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#1A1918]/10 pb-6">
          <div className="space-y-2">
            <span className="micro-label">CURATED DISCIPLINES</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1918]">
              Featured Collections
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#1A1918]/60 mt-4 md:mt-0 max-w-xs font-light">
            Architectural furniture organized by everyday functional discipline.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {COLLECTIONS.map((col, idx) => {
            // Asymmetric layout logic for magazine feel:
            // Item 0: 7 cols
            // Item 1: 5 cols
            // Item 2: 5 cols
            // Item 3: 7 cols
            const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";

            return (
              <div
                key={col.id}
                className={`${colSpan} group flex flex-col justify-between cursor-pointer`}
              >
                {/* Image Container with editorial zoom & subtle dark overlay */}
                <div className={`relative w-full ${col.aspectRatio} overflow-hidden bg-[#ECE7DE] border border-[#1A1918]/10`}>
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center editorial-zoom"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#F7F5F0]/90 backdrop-blur-md px-3 py-1.5 border border-[#1A1918]/10 text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#1A1918]">
                    {col.category}
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="pt-6 pb-2 border-b border-[#1A1918]/10 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1918] group-hover:text-[#B86B4D] transition-colors">
                        {col.title}
                      </h3>
                      <span className="text-[11px] font-sans tracking-[0.14em] uppercase text-[#1A1918]/40">
                        ({col.count})
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#1A1918]/70 max-w-md font-light leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <a
                    href="#featured"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-[0.18em] uppercase text-[#1A1918] group-hover:text-[#B86B4D] transition-colors whitespace-nowrap pt-1"
                  >
                    <span>View collection</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
