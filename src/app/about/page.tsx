import React from "react";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export const metadata: Metadata = {
  title: "About Our Craftsmanship & Founders | Antique Arts Sourcing",
  description:
    "Learn about Antique Arts Sourcing's origin in Firozabad, India. Partnering with 50+ artisan workshops to deliver handcrafted luxury lighting and metalware worldwide.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0F0F0F]">
      <AboutSection />
      <WhyUsSection />
    </div>
  );
}
