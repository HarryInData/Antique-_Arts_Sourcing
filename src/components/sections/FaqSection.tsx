"use client";

import React, { FC, useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ChevronDownIcon } from "../icons";

interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What product categories does Antique Arts Sourcing export?",
    answer:
      "We export six core categories: Antique Collectibles (brass compasses, telescopes, heritage artefacts), Luxury Home Décor & Metal Art (wall sculptures, vases, candle holders), Glass & Crystal Artistry (hand-blown vases, mosaic lanterns), Bespoke Furniture & Joinery (console tables, bar cabinets), Hotel & Hospitality Accents (lobby sculptures, room accessories), and Architectural Decorative Lighting (wire mesh pendants, chandeliers). All products are available for OEM/ODM custom manufacturing.",
  },
  {
    question: "What are your OEM and ODM custom manufacturing capabilities?",
    answer:
      "We offer full OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing) services. Buyers can submit CAD drawings, tech packs, or reference designs. We handle prototyping, material sourcing, production, AQL quality inspection, and export-ready ISPM-15 packaging. Typical lead times range from 4–8 weeks depending on order complexity and volume.",
  },
  {
    question: "Which countries do you export to and what certifications do you support?",
    answer:
      "We actively export to 20+ countries including the United States, United Kingdom, Canada, Australia, UAE, Germany, France, Italy, and the Netherlands. Our products can be certified to UL (North America), CE (Europe), UKCA (United Kingdom), and SAA (Australia/NZ) standards. All shipments use ISPM-15 compliant fumigated timber crate packaging.",
  },
  {
    question: "What is the Minimum Order Quantity (MOQ) for B2B wholesale orders?",
    answer:
      "MOQs vary by product category and manufacturing complexity. Standard décor items typically start from 50–100 units per SKU. Custom OEM/ODM orders are evaluated per-project based on tooling, material sourcing, and design specifications. We accommodate both boutique trade buyers and large-scale hospitality procurement contracts.",
  },
  {
    question: "How does Antique Arts Sourcing ensure quality for international buyers?",
    answer:
      "Every order undergoes multi-stage quality inspection including in-line production checks, pre-shipment AQL sampling (Level II, Major/Minor defect classification), and final factory audit. We provide detailed inspection reports with timestamped photographs. All products are packed in moisture-resistant, ISPM-15 certified timber crates for safe international sea and air freight.",
  },
  {
    question: "Can architects and designers submit CAD files for custom manufacturing?",
    answer:
      "Yes. Architects, interior designers, and hospitality procurement teams can submit CAD drawings (.dwg, .dxf), 3D renders, material specifications, and tech packs directly through our RFQ form or via WhatsApp/Email. We provide prototyping, material sampling, finish prototyping, and full-scale production with a dedicated project manager assigned to each commission.",
  },
];

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-secondary border-t border-white/[0.04]">
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="B2B Export Guidance"
          title="Frequently Asked Questions — Trade & Export"
          description="Essential information for international buyers regarding our product categories, OEM/ODM capabilities, quality assurance protocols, and export logistics."
          centered
        />

        <div className="faq-wrapper max-w-[880px] mx-auto mt-[50px] space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item rounded-2xl bg-[#161616] border transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.35)] ${isOpen
                    ? "border-accent-gold/40 bg-[#1C1C1C] shadow-[0_8px_30px_rgba(214,168,79,0.08)]"
                    : "border-white/[0.08] hover:border-white/20"
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center gap-5 bg-transparent border-none cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-body text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.55] transition-colors duration-200 ${isOpen ? "text-accent-gold" : "text-white/90 group-hover:text-white"
                    }`}>
                    {item.question}
                  </span>
                  <span
                    className={`faq-icon flex-shrink-0 w-9 h-9 rounded-full border transition-all duration-300 flex items-center justify-center ${isOpen
                        ? "rotate-180 bg-accent-gold text-bg-primary border-accent-gold shadow-[0_0_12px_rgba(214,168,79,0.3)]"
                        : "bg-accent-gold/10 border-accent-gold/30 text-accent-gold group-hover:bg-accent-gold/20"
                      }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 text-text-gray font-light text-[0.975rem] sm:text-[1.025rem] leading-[1.8] border-t border-white/[0.04] mt-1 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
