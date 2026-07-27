"use client";

import React from "react";
import { GallerySection } from "@/components/sections/GallerySection";
import { Lightbox } from "@/components/ui/Lightbox";
import { useGalleryFilter } from "@/hooks/useGalleryFilter";
import { useLightbox } from "@/hooks/useLightbox";

export default function GalleryPage() {
  const { activeFilter, selectFilter } = useGalleryFilter();
  const { isOpen, activeItem, openLightbox, closeLightbox } = useLightbox();

  return (
    <div className="pt-24 min-h-screen bg-[#0F0F0F]">
      <GallerySection
        activeFilter={activeFilter}
        onFilterChange={selectFilter}
        onItemClick={openLightbox}
      />
      <Lightbox
        isOpen={isOpen}
        activeItem={activeItem}
        onClose={closeLightbox}
      />
    </div>
  );
}
