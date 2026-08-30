"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection: FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen bg-[#24231F] overflow-hidden flex items-end"
    >
      {/* Hero Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-editorial.jpg"
          alt="Handcrafted Indian decorative object inside contemporary architectural interior"
          fill
          priority
          className="object-cover object-center"
          style={{ animation: "heroZoom 20s ease-in-out forwards" }}
          sizes="100vw"
        />
        {/* Controlled Gradient Overlay: Enhances text legibility on bottom-left without darkening the overall architecture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/85 via-[#181816]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181816]/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content (Aligned to container-main) */}
      <div className="relative z-10 w-full pb-16 sm:pb-20 lg:pb-24 pt-36">
        <div className="container-main">
          {/* Eyebrow */}
          <p className="text-[0.6875rem] sm:text-[0.75rem] font-sans font-medium tracking-[0.25em] uppercase text-white/70 mb-4 sm:mb-5">
            India, Sourced with Intent.
          </p>

          {/* Main Headline */}
          <h1 className="heading-hero text-white mb-6 sm:mb-8">
            Luxury Objects.<br />
            Crafted for Global Spaces.
          </h1>

          {/* Supporting Text */}
          <p className="text-[0.95rem] sm:text-[1.0625rem] font-sans font-light leading-[1.7] text-white/80 max-w-[560px] mb-8 sm:mb-10">
            Antique Arts Sourcing connects India&apos;s finest craftsmanship with architects, designers, hospitality groups and global buyers.
          </p>

          {/* CTAs sharing exact baseline */}
          <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
            <Link href="/collections" className="btn-hero-primary">
              Explore Collection
            </Link>
            <Link href="/contact" className="btn-hero-secondary">
              Start a Project
            </Link>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.65rem] sm:text-[0.7rem] font-sans font-medium tracking-[0.2em] uppercase text-white/50 border-t border-white/10 pt-6 max-w-[640px]">
            <span>Firozabad · India</span>
            <span>·</span>
            <span>Global Sourcing · OEM / ODM</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 sm:right-12 z-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[0.6rem] font-sans tracking-[0.2em] uppercase text-white/40 rotate-90 origin-right translate-x-2">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden mt-6">
          <div className="w-full h-3 bg-white/60 absolute top-0 animate-[scrollIndicator_2s_infinite_ease-in-out]" />
        </div>
      </div>
    </section>
  );
};
