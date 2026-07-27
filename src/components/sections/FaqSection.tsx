"use client";

import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ChevronDownIcon } from "../icons";

interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is your Minimum Order Quantity (MOQ) for wholesale & custom lighting orders?",
    answer:
      "We support both boutique trade installations and commercial hospitality projects. For our standard handcrafted wire mesh pendant lamps and decorative metalware collections, MOQs typically start at 10 to 20 units per design. Wholesale volume discounts apply for larger project specifications.",
  },
  {
    question: "Do you manufacture bespoke lighting designs, custom wire mesh densities, and custom patinas?",
    answer:
      "Yes, custom manufacturing is our core strength as a Firozabad-based artisan exporter. Architects, interior designers, and hospitality procurement teams can provide custom technical drawings, custom height/diameter dimensions, and specific metallic patinas (antiqued brass, raw copper, matte black, or brushed gold).",
  },
  {
    question: "Which international electrical wiring & safety standards (UL, CE, SAA, BS) do you support?",
    answer:
      "Our handcrafted lighting fixtures and pendant lamp systems are engineered for global export. We can wire, socket, and assemble fixtures to comply with UL (United States/Canada), CE (Europe), SAA (Australia/New Zealand), and BS 7671 (United Kingdom) electrical standards upon request.",
  },
  {
    question: "How do you package fragile luxury lighting and handcrafted metalware for international freight?",
    answer:
      "Every shipment undergoes export-grade protection protocols. Products are secured inside custom high-density molded foam enclosures, multi-ply heavy-duty corrugated inner cartons, moisture-resistant protective wraps, and ISPM-15 certified wooden crate palletization for international sea and air freight.",
  },
  {
    question: "Where are your primary artisan workshops and corporate showroom located?",
    answer:
      "Our central artisan manufacturing facility and international showroom are located in Firozabad (Dholpura Road, Pradeep Nagar), Uttar Pradesh, India—the heart of India's historical glassblowing and architectural metalworking craft heritage.",
  },
  {
    question: "How can architects and trade buyers request product catalogues and wholesale quotations?",
    answer:
      "Trade specifiers can view and download our high-resolution design catalogues directly via our website's Catalogue section or contact our export desk via WhatsApp or Email for immediate B2B pricing and spec sheets.",
  },
];

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section py-[120px] relative bg-bg-secondary border-t border-white/[0.04]">
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Trade & Specifier Guidance"
          title="Bespoke Lighting & Metalware FAQ"
          description="Essential information regarding our handcrafted wire mesh pendant lamps, B2B wholesale policies, custom architectural patina finishes, and international electrical certifications."
          centered
        />

        <div className="faq-wrapper max-w-[880px] mx-auto mt-[50px] space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item rounded-2xl bg-[#161616] border transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.35)] ${
                  isOpen
                    ? "border-accent-gold/40 bg-[#1C1C1C] shadow-[0_8px_30px_rgba(214,168,79,0.08)]"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center gap-5 bg-transparent border-none cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-body text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.55] transition-colors duration-200 ${
                    isOpen ? "text-accent-gold" : "text-white/90 group-hover:text-white"
                  }`}>
                    {item.question}
                  </span>
                  <span
                    className={`faq-icon flex-shrink-0 w-9 h-9 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isOpen
                        ? "rotate-180 bg-accent-gold text-bg-primary border-accent-gold shadow-[0_0_12px_rgba(214,168,79,0.3)]"
                        : "bg-accent-gold/10 border-accent-gold/30 text-accent-gold group-hover:bg-accent-gold/20"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-text-gray font-light text-[0.975rem] sm:text-[1.025rem] leading-[1.8] border-t border-white/[0.04] mt-1 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
