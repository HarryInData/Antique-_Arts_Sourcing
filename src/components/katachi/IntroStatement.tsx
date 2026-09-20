"use client";

import React from "react";

export function IntroStatement() {
  return (
    <section className="py-20 sm:py-32 border-y border-[#1A1918]/10 bg-[#FAF9F6]">
      <div className="container-editorial max-w-5xl text-center space-y-6">
        <p className="micro-label text-[#B86B4D]">FORM & INTENTION</p>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1A1918] leading-[1.12] tracking-tight">
          “Furniture with presence, <br className="hidden sm:inline" />
          made to live with.”
        </h2>
        <div className="pt-4 max-w-2xl mx-auto">
          <p className="font-sans text-sm sm:text-base text-[#1A1918]/70 leading-relaxed font-light">
            We reject the transient cycles of disposable design. Every KATACHI piece begins with
            structural necessity, continues through the hands of master timber artisans, and culminates in a quiet, sculptural balance that settles into your space.
          </p>
        </div>
      </div>
    </section>
  );
}
