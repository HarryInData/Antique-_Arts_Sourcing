"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Check, Sparkles } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { SIGNATURE_PRODUCT } from "@/data/katachi";

export function EditorialProductFeature() {
  const [selectedColor, setSelectedColor] = useState(SIGNATURE_PRODUCT.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const { addToBag } = useKatachi();

  const handleAdd = () => {
    addToBag(SIGNATURE_PRODUCT, quantity, selectedColor);
  };

  return (
    <section className="section-editorial border-t border-[#1A1918]/10 bg-[#F7F5F0]">
      <div className="container-editorial">
        {/* Section Editorial Header */}
        <div className="mb-10 sm:mb-14">
          <span className="micro-label text-[#B86B4D]">MONOGRAPH & SIGNATURE EDITION</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1918] mt-2">
            The Signature Feature
          </h2>
        </div>

        {/* Gallery Catalog Split-Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border border-[#1A1918]/10 bg-[#FAF9F6] p-6 sm:p-10 lg:p-14">
          {/* Left Column: Large Product Image with Gallery Crop */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE5] border border-[#1A1918]/10 group">
              <Image
                src={SIGNATURE_PRODUCT.image}
                alt={SIGNATURE_PRODUCT.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center editorial-zoom"
              />
              <div className="absolute top-4 left-4 bg-[#1A1918] text-[#F7F5F0] px-3 py-1.5 text-[10px] font-sans font-medium tracking-[0.2em] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#E8C2A0]" />
                <span>Made to Order</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-[#F7F5F0]/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans tracking-[0.16em] uppercase text-[#1A1918] border border-[#1A1918]/10">
                Studio Spec: KTC-088
              </div>
            </div>
          </div>

          {/* Right Column: Catalog Metadata & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Title & Price */}
            <div className="space-y-3 pb-6 border-b border-[#1A1918]/10">
              <span className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[#1A1918]/50">
                {SIGNATURE_PRODUCT.category} · Bespoke Joinery
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1918] leading-tight">
                {SIGNATURE_PRODUCT.name}
              </h3>
              <p className="font-serif text-2xl font-light text-[#B86B4D]">
                {SIGNATURE_PRODUCT.priceFormatted}
              </p>
            </div>

            {/* Narrative & Philosophy */}
            <div className="space-y-4 text-xs sm:text-sm font-sans font-light text-[#1A1918]/75 leading-relaxed">
              <p>{SIGNATURE_PRODUCT.description}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-2 text-[11px]">
                <div className="border-l border-[#1A1918]/20 pl-3">
                  <span className="block uppercase tracking-[0.18em] text-[#1A1918]/50 text-[10px]">Dimensions</span>
                  <span className="font-medium text-[#1A1918]">{SIGNATURE_PRODUCT.dimensions}</span>
                </div>
                <div className="border-l border-[#1A1918]/20 pl-3">
                  <span className="block uppercase tracking-[0.18em] text-[#1A1918]/50 text-[10px]">Lead Time</span>
                  <span className="font-medium text-[#1A1918]">{SIGNATURE_PRODUCT.leadTime}</span>
                </div>
              </div>
            </div>

            {/* Material Swatches */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="micro-label">SELECT FINISH</span>
                <span className="text-xs font-sans text-[#1A1918] font-medium">{selectedColor}</span>
              </div>
              <div className="flex items-center gap-3">
                {SIGNATURE_PRODUCT.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-8 h-8 rounded-full transition-all flex items-center justify-center ${
                        isSelected
                          ? "ring-2 ring-[#1A1918] ring-offset-2 ring-offset-[#FAF9F6]"
                          : "opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select color ${color.name}`}
                    >
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Add to Bag */}
            <div className="pt-4 border-t border-[#1A1918]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border border-[#1A1918]/20 bg-[#F7F5F0] px-4 py-3 min-w-[120px]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-[#1A1918] hover:opacity-60 transition-opacity"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-sm font-medium text-[#1A1918]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-[#1A1918] hover:opacity-60 transition-opacity"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3.5 px-8 bg-[#1A1918] text-[#F7F5F0] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#383632] transition-colors text-center"
              >
                Add to bag · ${(SIGNATURE_PRODUCT.price * quantity).toLocaleString()}
              </button>
            </div>

            {/* Footnote */}
            <div className="flex items-center gap-4 text-[10px] font-sans text-[#1A1918]/50 tracking-[0.14em] uppercase pt-1">
              <span>Includes white-glove assembly</span>
              <span>·</span>
              <span>10-year timber warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
