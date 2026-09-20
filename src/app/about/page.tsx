import React from "react";
import type { Metadata } from "next";
import { HouseSection } from "@/components/sections/HouseSection";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Hammer, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About Antique Arts Sourcing | Luxury Export Sourcing & Craftsmanship",
  description:
    "Antique Arts Sourcing is a premier B2B manufacturer, exporter, and sourcing partner headquartered in Firozabad, Uttar Pradesh. Specializing in handcrafted luxury décor, brass art, lighting, and bespoke OEM manufacturing for international buyers.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/about",
  },
  openGraph: {
    title: "About Antique Arts Sourcing | Luxury Export & Sourcing House",
    description:
      "Premier B2B manufacturer and export sourcing partner. Bridging master artisans with international retail, hospitality, and design buyers.",
    url: "https://antiqueartssourcing.com/about",
    siteName: "Antique Arts Sourcing",
    images: ["/images/branding/antique-arts-sourcing-founders-firozabad.jpg"],
  },
};

const pillars = [
  {
    icon: Hammer,
    title: "Artisan Heritage",
    desc: "Located in the historic glass and craft center of Firozabad, collaborating with multi-generational master metalworkers, glassblowers, and wood carvers.",
  },
  {
    icon: Layers,
    title: "B2B Specialization",
    desc: "Built exclusively for trade buyers — importers, wholesalers, luxury hospitality groups, interior architects, and OEM private-label brands.",
  },
  {
    icon: ShieldCheck,
    title: "AQL Quality Inspection",
    desc: "Multi-point inspection protocols from raw materials to final pre-shipment crate verification to guarantee zero defects at your port.",
  },
  {
    icon: Globe,
    title: "Export Logistics",
    desc: "ISPM-15 compliant timber packaging, certified export documentation, and streamlined freight dispatch to USA, UK, Europe, UAE, Australia, and Canada.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 min-h-screen bg-ivory">
      <div className="container-main mb-12">
        <div className="max-w-3xl border-b border-[rgba(24,24,22,0.1)] pb-10">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-3">
            HERITAGE · CRAFTSMANSHIP · GLOBAL TRADE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181816] mb-6 leading-tight">
            Luxury Home Décor Manufacturer &amp; Sourcing Partner
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed mb-6">
            Antique Arts Sourcing operates at the intersection of traditional artisanal craft heritage and modern international export standards. Headquartered in Firozabad, Uttar Pradesh, we serve as the dedicated manufacturing and sourcing extension for global brands, hospitality procurers, and interior design firms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#181816] hover:text-[#9A7B50] transition-colors"
            >
              <span>Explore Sourcing &amp; OEM Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Core B2B Pillars */}
      <div className="container-main mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[rgba(24,24,22,0.08)] p-6 flex flex-col justify-start"
              >
                <div className="w-10 h-10 bg-[#F4F1EA] flex items-center justify-center mb-4 text-[#9A7B50]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-light text-[#181816] mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-[#6F6A61] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heritage House Section */}
      <HouseSection />
    </div>
  );
}
