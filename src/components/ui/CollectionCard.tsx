"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import type { Collection } from "@/types";

interface CollectionCardProps {
  collection: Collection;
  onFilterClick?: (filterKey: string) => void;
}

export const CollectionCard: FC<CollectionCardProps> = ({
  collection,
  onFilterClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onFilterClick) {
      onFilterClick(collection.filterKey);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } }}
      onClick={() => {
        const cta = document.getElementById(`cta-${collection.filterKey}`);
        if (cta) cta.click();
      }}
      className="collection-card relative h-[420px] rounded-card overflow-hidden flex items-end p-10 border border-white/[0.02] transition-all duration-500 hover:border-accent-gold/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(214,168,79,0.1)] cursor-pointer group"
    >
      {/* Background Image wrapper */}
      <div className="absolute inset-0 z-0 transition-transform duration-[1.2s] ease-out group-hover:scale-110">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.85))] group-hover:bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9))] transition-all duration-500" />
      </div>

      <div className="collection-content relative z-[1] max-w-[400px]">
        <h3 className="collection-title font-heading text-[1.85rem] font-semibold text-white mb-3">
          {collection.title}
        </h3>
        <p className="collection-desc text-text-gray font-light text-[0.95rem] mb-5">
          {collection.description}
        </p>
        <Button
          id={`cta-${collection.filterKey}`}
          href="#gallery"
          variant="text"
          onClick={handleClick}
        >
          Explore Collection
        </Button>
      </div>
    </motion.div>
  );
};
