"use client";

import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

import { getFeaturedProducts, getCategories } from "@/lib/catalog";

// Fetch up to 8 featured products dynamically
const products = getFeaturedProducts().slice(0, 8);
const categoriesData = getCategories();

const works = products.map((p, index) => {
  const cat = categoriesData.find(c => c.slug === p.categorySlug);
  return {
    num: String(index + 1).padStart(2, "0"),
    category: cat?.name || p.category,
    name: p.name,
    image: p.image || "/images/placeholder.webp",
  };
});

export const SelectedWork: FC = () => {
  const { ref, isVisible } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.getBoundingClientRect().width ?? 420;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const newIndex = dir === "right"
      ? Math.min(activeIndex + 1, works.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    container.scrollTo({ left: newIndex * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="section-pad bg-[#F4F1EA]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Section Header with Controls (Aligned to container-main) */}
        <div className="container-main flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="eyebrow">03 / Portfolio</span>
            <h2 className="heading-section mb-4">Selected Work</h2>
            <p className="body-text">
              Curated objects demonstrating craftsmanship across brass, glass, lighting, and timber.
            </p>
          </div>

          {/* Desktop Pagination + Arrow Controls */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <span className="text-[0.75rem] font-sans font-medium tracking-[0.16em] text-[#6F6A61]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={activeIndex === 0}
                className="w-12 h-12 border border-[rgba(24,24,22,0.18)] flex items-center justify-center text-[#181816] hover:bg-[#181816] hover:text-[#F4F1EA] disabled:opacity-25 transition-all duration-300 disabled:pointer-events-none"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={activeIndex === works.length - 1}
                className="w-12 h-12 border border-[rgba(24,24,22,0.18)] flex items-center justify-center text-[#181816] hover:bg-[#181816] hover:text-[#F4F1EA] disabled:opacity-25 transition-all duration-300 disabled:pointer-events-none"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery on Desktop */}
        <div
          ref={scrollRef}
          className="hidden md:flex horizontal-scroll gap-6 pl-[max(20px,calc((100vw-1320px)/2+20px))] pr-12 pb-4"
        >
          {works.map((work) => (
            <div
              key={work.num}
              className="flex-shrink-0 w-[420px] lg:w-[480px] group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  sizes="480px"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] text-[#9A7B50] mt-0.5">
                  {work.num}
                </span>
                <div>
                  <p className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#6F6A61] mb-1">
                    {work.category}
                  </p>
                  <h3 className="heading-sub text-[1.15rem]">
                    {work.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Stacked Cards */}
        <div className="md:hidden container-main flex flex-col gap-8">
          {works.map((work) => (
            <div key={work.num} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] text-[#9A7B50] mt-0.5">
                  {work.num}
                </span>
                <div>
                  <p className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#6F6A61] mb-1">
                    {work.category}
                  </p>
                  <h3 className="heading-sub text-[1.15rem]">
                    {work.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
