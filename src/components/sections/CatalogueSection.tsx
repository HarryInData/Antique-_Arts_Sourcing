"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { CatalogueCard } from "../ui/CatalogueCard";
import { catalogues } from "@/data/catalogues";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
};

export const CatalogueSection: FC = () => {
  return (
    <section
      id="catalogue"
      className="section-pad relative bg-sand/30 text-center"
    >
      <div className="container-main">
        <div className="mb-12 sm:mb-16">
          <p className="label-brass mb-3">Downloads</p>
          <h2 className="heading-section mb-4">Product Catalogues</h2>
          <p className="body-text max-w-[520px] mx-auto">
            Download our high-resolution product catalogues. Learn about available finishes, custom sizing, and bespoke manufacturing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
