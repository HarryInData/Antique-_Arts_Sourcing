import React from "react";
import type { Metadata } from "next";
import { CatalogueSection } from "@/components/sections/CatalogueSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Download B2B Product Catalogues & Tech Packs | Antique Arts Sourcing",
  description:
    "Download high-resolution product catalogues, finish specifiers, and technical blueprints for handcrafted luxury lighting, brass art, and home decor from India.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/catalogue",
  },
  openGraph: {
    title: "Download B2B Product Catalogues | Antique Arts Sourcing",
    description:
      "High-resolution collection catalogues, finishes, and technical specs for architects, interior designers, and trade buyers.",
    url: "https://antiqueartssourcing.com/catalogue",
    siteName: "Antique Arts Sourcing",
    images: ["/images/hero-editorial.jpg"],
  },
};

export default function CataloguePage() {
  return (
    <div className="pt-36 pb-12 min-h-screen bg-ivory">
      <div className="container-main mb-8">
        <div className="max-w-3xl border-b border-[rgba(24,24,22,0.1)] pb-8">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-2">
            TRADE RESOURCES · ARCHITECTURAL BLUEPRINTS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181816] mb-4 leading-tight">
            Commercial Product Catalogues &amp; Spec Sheets
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#6F6A61] font-light leading-relaxed mb-6">
            Detailed dimensions, material formulations, finish palettes, and export carton dimensions for trade specifiers and international procurement managers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#181816] hover:text-[#9A7B50] transition-colors"
            >
              <span>Explore Live 280+ Item Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      <CatalogueSection />
    </div>
  );
}
