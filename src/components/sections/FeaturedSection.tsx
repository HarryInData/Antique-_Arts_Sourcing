"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ProductCard } from "../ui/ProductCard";
import { featuredProducts } from "@/data/products";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92, rotateX: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export const FeaturedSection: FC = () => {
  return (
    <section id="featured" className="section featured-section py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Exhibition Pieces"
          title="The Showroom Spotlight"
          description="Step inside our gallery. These selected items highlight our signature aesthetics: blending copper mesh, brushed gold, and fine geometry."
          centered
        />
        
        <div
          className="featured-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]"
          style={{ perspective: "1200px" }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.code}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
