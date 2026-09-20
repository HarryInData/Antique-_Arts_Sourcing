"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, Check } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";

export function QuickLookModal() {
  const { quickLookProduct, closeQuickLook, addToBag } = useKatachi();
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quickLookProduct) {
      setSelectedColor(quickLookProduct.colors[0]?.name || "");
      setQuantity(1);
    }
  }, [quickLookProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuickLook();
    };
    if (quickLookProduct) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [quickLookProduct, closeQuickLook]);

  if (!quickLookProduct) return null;

  const handleAdd = () => {
    addToBag(quickLookProduct, quantity, selectedColor);
    closeQuickLook();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quicklook-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF9F6] border border-[#1A1918]/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuickLook}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F7F5F0]/90 backdrop-blur-md text-[#1A1918] hover:bg-[#1A1918] hover:text-[#F7F5F0] transition-colors border border-[#1A1918]/10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#EFECE5] min-h-[300px]">
            <Image
              src={quickLookProduct.image}
              alt={quickLookProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-[#F7F5F0]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#1A1918] border border-[#1A1918]/10">
              {quickLookProduct.category}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="micro-label text-[#B86B4D]">KATACHI PIECE</span>
                <h3 id="quicklook-title" className="font-serif text-2xl sm:text-3xl font-light text-[#1A1918]">
                  {quickLookProduct.name}
                </h3>
                <p className="font-sans text-lg font-medium text-[#1A1918]">
                  {quickLookProduct.priceFormatted}
                </p>
              </div>

              <p className="text-xs font-sans text-[#1A1918]/70 font-light leading-relaxed">
                {quickLookProduct.description}
              </p>

              <div className="text-[11px] font-sans text-[#1A1918]/60 space-y-1 pt-1">
                <div><strong className="font-medium text-[#1A1918]">Material:</strong> {quickLookProduct.material}</div>
                <div><strong className="font-medium text-[#1A1918]">Dimensions:</strong> {quickLookProduct.dimensions}</div>
                <div><strong className="font-medium text-[#1A1918]">Lead Time:</strong> {quickLookProduct.leadTime}</div>
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-2">
              <span className="micro-label">FINISH: {selectedColor}</span>
              <div className="flex items-center gap-2.5">
                {quickLookProduct.colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`relative w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                        isSelected
                          ? "ring-2 ring-[#1A1918] ring-offset-2 ring-offset-[#FAF9F6]"
                          : "opacity-75 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {isSelected && (
                        <Check className="w-3 h-3 text-white mix-blend-difference" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="pt-3 border-t border-[#1A1918]/10 flex items-center gap-3">
              <div className="flex items-center justify-between border border-[#1A1918]/20 bg-[#F7F5F0] px-3 py-2.5 min-w-[100px]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:opacity-60"
                  aria-label="Decrease"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono text-xs font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:opacity-60"
                  aria-label="Increase"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-6 bg-[#1A1918] text-[#F7F5F0] text-xs font-sans font-medium tracking-[0.18em] uppercase hover:bg-[#34322E] transition-colors text-center"
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
