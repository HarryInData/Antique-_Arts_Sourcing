import React from "react";
import type { Metadata } from "next";
import { CollectionGallery } from "@/components/sections/CollectionGallery";

export const metadata: Metadata = {
  title: "The Collection — Luxury Craftsmanship | Antique Arts Sourcing",
  description:
    "Explore our six core B2B export categories: Antique Collectibles, Luxury Metalwork, Glass & Crystal, Bespoke Furniture, Lighting, and Hospitality Accents.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/collections",
  },
};

export default function CollectionsPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      <CollectionGallery />
    </div>
  );
}
