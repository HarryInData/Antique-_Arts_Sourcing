"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { WhyCard } from "../ui/WhyCard";
import { whyUsFeatures } from "@/data/whyUs";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
};

export const WhyUsSection: FC = () => {
  return (
    <section
      id="why-us"
      className="section why-us-section py-[120px] relative bg-bg-secondary"
    >
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Quality Commitments"
          title="The Artisan Standard"
          centered
        />

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[60px]">
          {whyUsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
            >
              <WhyCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
