import React from "react";
import type { Metadata } from "next";
import { CatalogueSection } from "@/components/sections/CatalogueSection";

export const metadata: Metadata = {
  title: "Download B2B Product Catalogues | Antique Arts Sourcing",
  description:
    "Download high-resolution product blueprints and luxury lighting collection catalogues for architects, interior designers, and trade buyers.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/catalogue",
  },
};

export default function CataloguePage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      <CatalogueSection />
    </div>
  );
}
