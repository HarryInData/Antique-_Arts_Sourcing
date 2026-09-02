"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { getCategories, getCategoryImage } from "@/lib/catalog";

export const CollectionGallery: FC = () => {
  const { ref, isVisible } = useReveal();
  const categories = getCategories().filter(c => !c.isEmpty);

  return (
    <section className="section-pad bg-white border-t border-b border-[rgba(24,24,22,0.06)]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Consistent Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">01 / The Collection</span>
          <h2 className="heading-section mb-4">The Collection</h2>
          <p className="body-text">
            Objects shaped by Indian craftsmanship and curated for contemporary architectural spaces.
          </p>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const num = (i + 1).toString().padStart(2, "0");
            const image = getCategoryImage(cat);
            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className={`group flex flex-col no-underline ${
                  i === 0 || i === 5 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Box with Fixed Aspect Ratio */}
                <div className={`relative overflow-hidden bg-[#ECE7DE] mb-5 ${
                  i === 0 || i === 5 ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/5]"
                }`}>
                  <Image
                    src={image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                    sizes={i === 0 || i === 5 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>

                {/* Text Below Image */}
                <div className="flex flex-col">
                  <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] uppercase text-[#9A7B50] mb-1">
                    {num}
                  </span>
                  <h3 className="heading-sub text-[1.25rem] sm:text-[1.4rem] mb-2 group-hover:text-[#9A7B50] transition-colors duration-300">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
