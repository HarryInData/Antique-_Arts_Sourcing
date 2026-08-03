"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { CollectionCard } from "../ui/CollectionCard";
import { collections } from "@/data/collections";

interface CollectionsSectionProps {
  onFilterSelect?: (filterKey: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: i * 0.12,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
};

export const CollectionsSection: FC<CollectionsSectionProps> = ({
  onFilterSelect,
}) => {
  return (
    <section
      id="categories"
      className="section collections-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-secondary"
    >
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Product Categories"
          title="Six Core Product Verticals for International Buyers"
        />

        <div className="collections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.filterKey}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
            >
              <CollectionCard
                collection={collection}
                onFilterClick={onFilterSelect}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
