"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { CatalogueCard } from "../ui/CatalogueCard";
import { catalogues } from "@/data/catalogues";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.2,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
};

export const CatalogueSection: FC = () => {
  return (
    <section
      id="catalogue"
      className="section catalogue-section py-[120px] relative bg-bg-secondary text-center"
    >
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Browse our Catalogues"
          title="Luxury Design Catalogue"
          description="Download our comprehensive, high-resolution product blueprint catalogues and design collection portfolios. Learn about available colors, custom sizing, and custom designs."
          centered
        />

        <div className="catalogue-box grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[50px]">
          {catalogues.map((catalogue, index) => (
            <motion.div
              key={catalogue.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
            >
              <CatalogueCard catalogue={catalogue} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
