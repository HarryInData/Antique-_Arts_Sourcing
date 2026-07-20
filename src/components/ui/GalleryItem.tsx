import React, { FC } from "react";
import Image from "next/image";
import type { GalleryItem as GalleryItemType } from "@/types";

interface GalleryItemProps {
  item: GalleryItemType;
  onClick: (item: GalleryItemType) => void;
}

export const GalleryItem: FC<GalleryItemProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="gallery-item inline-block w-full mb-6 rounded-image overflow-hidden border border-white/[0.03] bg-bg-surface transition-all duration-400 ease-in-out cursor-pointer group"
    >
      <div className="gallery-img-box relative w-full overflow-hidden">
        {/* Next.js Image with intrinsic layout (auto height matching masonry) */}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-800 ease-out group-hover:scale-[1.04]"
        />
        
        {/* Hover details overlay */}
        <div className="gallery-item-hover absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(15,15,15,0.85))] flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out z-[2]">
          <span className="gallery-code text-[0.75rem] text-accent-gold font-semibold tracking-[0.05em] mb-1">
            {item.code}
          </span>
          <h4 className="gallery-name text-[1.1rem] font-semibold text-white mb-0">
            {item.name}
          </h4>
          
          <button className="btn-gallery-zoom absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-[5px] text-white border-none flex items-center justify-center text-lg transition-fast group-hover:bg-accent-gold group-hover:text-bg-primary z-[3]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
