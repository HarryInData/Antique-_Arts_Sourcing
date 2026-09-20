import React from "react";
import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";

export const metadata: Metadata = {
  title: "Export Product Gallery & Catalog | Antique Arts Sourcing",
  description:
    "Browse 280+ handcrafted decorative objects, lighting, brass collectibles, and luxury home accents. Filter by category, view technical specs, and request wholesale RFQs.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/gallery",
  },
  openGraph: {
    title: "Commercial Export Portfolio & Product Gallery | Antique Arts Sourcing",
    description:
      "Explore 12 categories of luxury handcrafted décor: lighting, glass vases, nautical antiques, brassware, and bespoke tabletop accessories.",
    url: "https://antiqueartssourcing.com/gallery",
    siteName: "Antique Arts Sourcing",
    images: ["/images/hero-editorial.jpg"],
  },
};

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Antique Arts Sourcing Commercial Export Portfolio & Gallery",
  "description":
    "Comprehensive catalog of 280+ handcrafted luxury home décor, lighting, and antique collectibles for international B2B buyers.",
  "url": "https://antiqueartssourcing.com/gallery",
  "provider": {
    "@type": "Organization",
    "name": "Antique Arts Sourcing",
    "url": "https://antiqueartssourcing.com",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-36 pb-20 min-h-screen bg-[#F4F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <div className="container-main">
        {/* Page Header */}
        <div className="mb-12 border-b border-[rgba(24,24,22,0.1)] pb-8">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-2">
            MASTER EXPORT CATALOGUE · 12 CATEGORIES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181816] mb-4">
            Commercial Export Portfolio &amp; Product Gallery
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#6F6A61] font-light max-w-2xl leading-relaxed">
            All handcrafted objects curated category-wise from our Firozabad glassworks and metal ateliers. Inspect specifications, dimensions, and submit requests for wholesale or custom OEM fabrication.
          </p>
        </div>

        {/* Interactive Master Portfolio Gallery */}
        <PortfolioGallery />
      </div>
    </div>
  );
}
