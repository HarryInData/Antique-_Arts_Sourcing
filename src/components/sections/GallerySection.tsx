"use client";

import React, { FC } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { GalleryItem } from "../ui/GalleryItem";
import { galleryFilters, galleryItems } from "@/data/gallery";
import { useReveal } from "@/hooks/useReveal";
import type { GalleryItem as GalleryItemType } from "@/types";
import { cn } from "@/lib/utils";

interface GallerySectionProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onItemClick: (item: GalleryItemType) => void;
}

export const GallerySection: FC<GallerySectionProps> = ({
  activeFilter,
  onFilterChange,
  onItemClick,
}) => {
  const { ref: filterRef, isVisible: filterVisible } = useReveal();
  
  // Filter items matching active category
  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="section gallery-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">

        <div className="gallery-header-row flex justify-between items-end mb-[50px] flex-wrap gap-[30px]">
          <SectionHeader
            tag="Digital Exhibition"
            title="The Showroom Gallery"
            className="mb-0"
          />

          {/* Filter Navigation */}
          <div
            ref={filterRef}
            className={cn(
              "gallery-filters flex gap-3 flex-wrap transition-all duration-700 delay-300 ease-out",
              filterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => onFilterChange(filter.value)}
                className={`filter-btn font-body uppercase text-[0.8rem] tracking-[0.05em] py-2.5 px-5 rounded-btn border transition-all duration-300 ${activeFilter === filter.value
                    ? "border-accent-gold text-accent-gold bg-accent-glow shadow-[0_0_20px_rgba(214,168,79,0.15)]"
                    : "border-white/10 text-text-gray hover:border-accent-gold hover:text-accent-gold hover:bg-accent-glow"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid [columns:1_100%] sm:[columns:2_200px] md:[columns:3_200px] lg:[columns:4_250px] [column-gap:24px] w-full">
          {filteredItems.map((item) => (
            <div
              key={item.code}
              className="w-full break-inside-avoid mb-6 animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
            >
              <GalleryItem item={item} onClick={onItemClick} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
