import React from "react";
import type { Metadata } from "next";
import { CollectionGallery } from "@/components/sections/CollectionGallery";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Handcrafted Home Décor & Export Collections | Antique Arts Sourcing",
  description:
    "Explore 12 curated B2B export verticals: Decorative Lighting, Glass Vases, Nautical Antiques, Brass Decor, Tableware, and Custom Furniture. Wholesale & OEM export.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/collections",
  },
  openGraph: {
    title: "12 Curated Export Collections | Antique Arts Sourcing",
    description:
      "Handcrafted home décor, brass metal art, lighting, and antique collectibles for international trade buyers and interior designers.",
    url: "https://antiqueartssourcing.com/collections",
    siteName: "Antique Arts Sourcing",
    images: ["/images/hero-editorial.jpg"],
  },
};

export default function CollectionsPage() {
  return (
    <div className="pt-36 pb-12 min-h-screen bg-[#F4F1EA]">
      {/* Header with SEO-targeted H1 */}
      <div className="container-main mb-8">
        <div className="max-w-3xl border-b border-[rgba(24,24,22,0.1)] pb-8">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-2">
            12 MASTER EXPORT VERTICALS · HANDCRAFTED ARTISTRY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181816] mb-4 leading-tight">
            Handcrafted Home Décor &amp; Export Collections
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#6F6A61] font-light leading-relaxed mb-6">
            Curated categories manufactured across our Firozabad glassworks, brass casting foundries, and artisanal metal ateliers. Built for international importers, retailers, and hospitality procurement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#181816] hover:text-[#9A7B50] transition-colors"
            >
              <span>Inspect All 280+ Pieces in Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <CollectionGallery />
    </div>
  );
}
