import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & B2B Sourcing Consultations | Antique Arts Sourcing",
  description:
    "Schedule a custom lighting or decor sourcing consultation with Antique Arts Sourcing. Reach our showroom in Firozabad, India via WhatsApp or Email.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-36 min-h-screen bg-ivory">
      <ContactSection />
    </div>
  );
}
