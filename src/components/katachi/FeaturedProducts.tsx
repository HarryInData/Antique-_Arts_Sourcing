"use client";

import React from "react";
import Image from "next/image";
import { Plus, Eye } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { FEATURED_PRODUCTS } from "@/data/katachi";
import { KatachiProduct } from "@/types/katachi";

export function FeaturedProducts() {
  const { openQuickLook, addToBag } = useKatachi();

  return (
    <section id="featured" className="section-editorial bg-[#FAF9F6] border-t border-[#1A1918]/10">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 border-b border-[#1A1918]/10 pb-6">
          <div className="space-y-2">
            <span className="micro-label">SEASONAL ARCHIVE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1918]">
              Selected pieces.
            </h2>
          </div>
          <div className="text-[12px] font-sans text-[#1A1918]/60 tracking-[0.16em] uppercase mt-4 sm:mt-0 font-light">
            EDITION 01 · 4 ICONIC DESIGNS
          </div>
        </div>

        {/* 4 Minimal Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-[#F7F5F0] border border-[#1A1918]/10 overflow-hidden relative"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full bg-[#EFECE5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center editorial-zoom"
                />

                {/* Micro Category Tag */}
                <div className="absolute top-3 left-3 bg-[#F7F5F0]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#1A1918] border border-[#1A1918]/10">
                  {product.category}
                </div>

                {/* Quick Action Overlay (reveals on hover) */}
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={() => openQuickLook(product)}
                    className="flex-1 py-2.5 px-3 bg-[#F7F5F0]/95 backdrop-blur-md text-[#1A1918] text-[10px] font-sans font-medium tracking-[0.18em] uppercase border border-[#1A1918]/20 hover:bg-[#1A1918] hover:text-[#F7F5F0] transition-colors flex items-center justify-center gap-1.5"
                    aria-label={`Quick look ${product.name}`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Quick look</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => addToBag(product)}
                    className="p-2.5 bg-[#1A1918] text-[#F7F5F0] hover:bg-[#34322E] transition-colors"
                    aria-label={`Add ${product.name} to bag`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Product Metadata Details */}
              <div className="p-5 flex flex-col justify-between flex-1 border-t border-[#1A1918]/10">
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-light text-[#1A1918] group-hover:text-[#B86B4D] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-sans text-xs font-medium text-[#1A1918]">
                      {product.priceFormatted}
                    </span>
                  </div>

                  <p className="text-[11px] font-sans text-[#1A1918]/60 font-light truncate">
                    {product.material}
                  </p>
                </div>

                {/* Color Swatches & Details */}
                <div className="pt-4 mt-3 border-t border-[#1A1918]/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {product.colors.map((c) => (
                      <span
                        key={c.name}
                        title={c.name}
                        className="w-3 h-3 rounded-full border border-black/20"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#1A1918]/50">
                    {product.leadTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
