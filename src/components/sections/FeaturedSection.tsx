"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";

// B2B Capability data — 4 core export services
const capabilities = [
  {
    iconPath: "M22 7V16.15Q22 16.15 22 16.15H20V8.4L12.45 13H11.55L2 7.04L12 1L22 7M12 11.85L21.03 6L12 3.04L2.97 6L12 11.85Z",
    title: "Custom Manufacturing (OEM)",
    description:
      "Submit your product designs, tech packs, or reference samples. Our artisan network manufactures to your exact material, finish, and dimensional specifications. Full prototyping-to-production pipeline.",
  },
  {
    iconPath: "M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58Z",
    title: "Private Label (ODM)",
    description:
      "Select from our existing design library and apply your branding, packaging, and finish specifications. Ideal for retail chains, e-commerce brands, and hospitality procurement teams launching curated décor lines.",
  },
  {
    iconPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
    title: "Factory Audits & AQL Inspection",
    description:
      "Every production run undergoes multi-stage quality control: in-line inspection, pre-shipment AQL sampling (Level II, Major/Minor defect classification), and photo-documented audit reports delivered to your inbox.",
  },
  {
    iconPath: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2v1.93m6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39Z",
    title: "Export Documentation & Logistics",
    description:
      "Complete export documentation including commercial invoices, packing lists, certificates of origin, and Bill of Lading coordination. ISPM-15 certified timber crate packaging for sea and air freight worldwide.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
};

export const FeaturedSection: FC = () => {
  return (
    <section id="capabilities" className="section featured-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="B2B Services"
          title="End-to-End Export Sourcing Capabilities"
          description="From custom OEM manufacturing and private label development to factory-floor quality audits and international logistics — a single sourcing partner for your entire supply chain."
          centered
        />

        <div className="featured-grid grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[60px]">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
            >
              <div className="bg-bg-secondary border border-white/[0.05] rounded-2xl p-8 lg:p-10 h-full transition-all duration-300 hover:border-accent-gold/30 hover:shadow-[0_8px_30px_rgba(214,168,79,0.08)] group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-accent-gold"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={cap.iconPath} />
                  </svg>
                </div>
                {/* H3 — Keyword-rich capability title */}
                <h3 className="font-heading text-[1.35rem] font-semibold text-white mb-4 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-text-gray font-light text-[0.975rem] leading-[1.8]">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
