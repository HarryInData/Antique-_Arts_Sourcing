"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EnquiryButtonGroup } from "./EnquiryButtonGroup";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } }}
      className="featured-card bg-bg-surface rounded-card overflow-hidden border border-white/[0.03] transition-all duration-500 hover:border-accent-gold/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(214,168,79,0.08)] group"
    >
      <div className="featured-img-wrapper relative w-full pt-[120%] overflow-hidden bg-black/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="featured-img absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="featured-overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[3px] transition-opacity duration-400 ease-out">
          <EnquiryButtonGroup product={product} isCardOverlay />
        </div>
      </div>
      <div className="featured-info p-6">
        <span className="product-code block text-[0.75rem] color-accent-gold font-semibold tracking-[0.05em] mb-2 text-accent-gold">
          {product.code}
        </span>
        <h3 className="product-name font-heading text-xl text-white mb-2 font-semibold">
          {product.name}
        </h3>
        <p className="product-category text-[0.85rem] text-text-muted font-light mb-0">
          {product.category}
        </p>
      </div>
    </motion.div>
  );
};
