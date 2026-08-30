import React from "react";
import type { Metadata } from "next";
import { HouseSection } from "@/components/sections/HouseSection";

export const metadata: Metadata = {
  title: "About — The House | Antique Arts Sourcing",
  description:
    "Learn about Antique Arts Sourcing's origin in Firozabad, India. Partnering with 50+ artisan workshops to deliver handcrafted luxury craftsmanship worldwide.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      <HouseSection />
    </div>
  );
}
