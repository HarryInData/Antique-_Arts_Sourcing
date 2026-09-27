import React, { FC } from "react";
import Image from "next/image";
import type { Category } from "@/types";
import { getCategoryImage } from "@/lib/catalog";

interface CollectionCardProps {
  collection: Category;
  onFilterClick?: (filterKey: string) => void;
}

export const CollectionCard: FC<CollectionCardProps> = ({
  collection,
  onFilterClick,
}) => {
  const handleCardClick = () => {
    if (onFilterClick) {
      onFilterClick(collection.slug);
    }
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const image = getCategoryImage(collection);

  return (
    <div
      onClick={handleCardClick}
      className="collection-card relative h-[360px] sm:h-[420px] rounded-card overflow-hidden flex items-end p-6 sm:p-8 lg:p-10 border border-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(214,168,79,0.12)] cursor-pointer group"
    >
      {/* Background Image wrapper */}
      <div className="absolute inset-0 z-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105">
        <Image
          src={image}
          alt={`${collection.name} — Handcrafted luxury collection`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />
      </div>

      <div className="collection-content relative z-[1] max-w-[400px]">
        <h3 className="collection-title font-heading text-[1.5rem] sm:text-[1.75rem] font-semibold text-white mb-2 leading-[1.25]">
          {collection.name}
        </h3>
        <span className="inline-flex items-center text-accent-gold text-[13px] font-medium tracking-[0.15em] uppercase gap-2 group-hover:text-accent-warm-light transition-colors duration-200">
          Explore Collection
          <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1.5">&rarr;</span>
        </span>
      </div>
    </div>
  );
};
