"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-16 lg:pb-28">
      <div className="container-editorial">
        {/* Top Editorial Metadata Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-[#1A1918]/10 mb-8 gap-3">
          <span className="micro-label">ISSUE NO. 04 · CONTEMPORARY FORM</span>
          <div className="flex items-center gap-6 text-[11px] font-sans text-[#1A1918]/60 tracking-[0.16em] uppercase">
            <span>ARCHITECTURAL JOINERY</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">HONEST MATERIALS</span>
          </div>
        </div>

        {/* Hero Grid / Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left / Headline Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pb-6 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#B86B4D]">
                KATACHI ESSENTIALS
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1A1918] leading-[1.05] tracking-[-0.01em]">
                Objects for considered living.
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#1A1918]/70 max-w-md leading-relaxed font-light">
                Sculptural furniture designed with mathematical proportion, tactile honesty,
                and quiet presence. Created to elevate daily rituals and age with grace.
              </p>
            </div>

            <div className="pt-8 lg:pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1918] text-[#F7F5F0] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#34322E] transition-all group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#materials"
                className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.18em] uppercase text-[#1A1918]/80 hover:text-[#1A1918] py-3 px-2 border-b border-[#1A1918]/30 hover:border-[#1A1918] transition-colors"
              >
                <span>Material Philosophy</span>
                <ArrowDownRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right / Editorial Hero Image Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden bg-[#ECE8DF] border border-[#1A1918]/10 group">
              <Image
                src="/images/katachi/hero.jpg"
                alt="Architectural sunlit living space with KATACHI sculptural furniture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center editorial-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#F7F5F0]/90 backdrop-blur-md px-4 py-2 border border-[#1A1918]/10 text-[10px] sm:text-[11px] font-sans tracking-[0.18em] uppercase text-[#1A1918]">
                Studio Series No. 01 · 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
