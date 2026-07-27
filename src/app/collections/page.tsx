import React from "react";
import type { Metadata } from "next";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";

export const metadata: Metadata = {
  title: "Handcrafted Lighting & Decor Collections | Antique Arts Sourcing",
  description:
    "Explore our signature collections of handwoven copper wire mesh pendant lamps, artisanal desk lighting, and heritage brass decor pieces. Custom B2B manufacturing available.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/collections",
  },
};

export default function CollectionsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0F0F0F]">
      <CollectionsSection />
      <FeaturedSection />
    </div>
  );
}
