"use client";

import React from "react";
import { Preloader } from "@/components/layout/Preloader";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CatalogueSection } from "@/components/sections/CatalogueSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Lightbox } from "@/components/ui/Lightbox";

import { useFramePreloader } from "@/hooks/useFramePreloader";
import { useGalleryFilter } from "@/hooks/useGalleryFilter";
import { useLightbox } from "@/hooks/useLightbox";

export default function Home() {
  const { progress, isLoaded, frames } = useFramePreloader();
  const { activeFilter, selectFilter } = useGalleryFilter();
  const { isOpen, activeItem, openLightbox, closeLightbox } = useLightbox();

  return (
    <>
      {/* Luxury Preloader */}
      <Preloader progress={progress} isLoaded={isLoaded} />

      {/* Scroll-Based Hero Canvas Animation Section */}
      <HeroSection frames={frames} isLoaded={isLoaded} />

      {/* Featured Showcase Section */}
      <FeaturedSection />

      {/* Curated Collections Section */}
      <CollectionsSection onFilterSelect={selectFilter} />

      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us Section */}
      <WhyUsSection />

      {/* Gallery Section */}
      <GallerySection
        activeFilter={activeFilter}
        onFilterChange={selectFilter}
        onItemClick={openLightbox}
      />

      {/* Catalogue Preview Section */}
      <CatalogueSection />

      {/* Contact & Consultation Enquiry Form */}
      <ContactSection />

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={isOpen}
        activeItem={activeItem}
        onClose={closeLightbox}
      />
    </>
  );
}
