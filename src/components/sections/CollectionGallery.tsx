"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { collections } from "@/data/collections";

export const CollectionGallery: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="collections" className="section-pad bg-white border-t border-b border-[rgba(24,24,22,0.06)]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(24,24,22,0.08)] pb-8">
          <div>
            <span className="eyebrow">01 / Curated Verticals</span>
            <h2 className="heading-section mb-3">Our Product Categories</h2>
            <p className="body-text max-w-xl">
              12 master export verticals catalogued from our Firozabad glass foundries, brass casting workshops, and artisanal metal ateliers.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-[0.75rem] font-sans font-medium tracking-[0.18em] uppercase text-[#9A7B50]">
            Master Catalog · 280+ Pieces
          </div>
        </div>

        {/* 12-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((cat, i) => {
            const isWide = i % 7 === 0 || i % 7 === 6;
            const numStr = String(i + 1).padStart(2, "0");

            return (
              <Link
                key={cat.filterKey}
                href={cat.href || `/gallery?category=${cat.filterKey}`}
                className={`group flex flex-col no-underline ${
                  isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Box */}
                <div
                  className={`relative overflow-hidden bg-[#ECE7DE] mb-5 border border-[rgba(24,24,22,0.08)] ${
                    isWide ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.title} — Handcrafted luxury export décor by Antique Arts Sourcing`}
                    fill
                    sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 bg-[#F4F1EA]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#181816]">
                    Category {numStr}
                  </div>
                </div>

                {/* Text Metadata */}
                <div className="flex flex-col">
                  <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] uppercase text-[#9A7B50] mb-1">
                    Vertical {numStr}
                  </span>
                  <h3 className="heading-sub text-[1.25rem] sm:text-[1.4rem] mb-2 group-hover:text-[#9A7B50] transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-[0.875rem] font-sans font-light text-[#6F6A61] leading-[1.6] max-w-[420px]">
                    {cat.description}
                  </p>
                  <div className="pt-3 mt-2 flex items-center gap-1.5 text-[0.7rem] font-sans font-semibold tracking-[0.16em] uppercase text-[#181816] group-hover:text-[#9A7B50] transition-colors">
                    <span>{cat.href?.startsWith("/category/") ? "Explore Collection" : "View Category Gallery"}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
