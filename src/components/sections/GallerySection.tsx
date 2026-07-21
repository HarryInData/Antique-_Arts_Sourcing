"use client";

import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { GalleryItem } from "../ui/GalleryItem";
import { galleryFilters, galleryItems } from "@/data/gallery";
import type { GalleryItem as GalleryItemType } from "@/types";

interface GallerySectionProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onItemClick: (item: GalleryItemType) => void;
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: -20,
    transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
  },
};

export const GallerySection: FC<GallerySectionProps> = ({
  activeFilter,
  onFilterChange,
  onItemClick,
}) => {
  // Filter items matching active category
  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="section gallery-section py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        
        <div className="gallery-header-row flex justify-between items-end mb-[50px] flex-wrap gap-[30px]">
          <SectionHeader
            tag="Digital Exhibition"
            title="The Showroom Gallery"
            className="mb-0"
          />

          {/* Filter Navigation */}
          <motion.div
            className="gallery-filters flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => onFilterChange(filter.value)}
                className={`filter-btn font-body uppercase text-[0.8rem] tracking-[0.05em] py-2.5 px-5 rounded-btn border transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "border-accent-gold text-accent-gold bg-accent-glow shadow-[0_0_20px_rgba(214,168,79,0.15)]"
                    : "border-white/10 text-text-gray hover:border-accent-gold hover:text-accent-gold hover:bg-accent-glow"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid [columns:1_100%] sm:[columns:2_200px] md:[columns:3_200px] lg:[columns:4_250px] [column-gap:24px] w-full">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.code}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full break-inside-avoid"
              >
                <GalleryItem item={item} onClick={onItemClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};
