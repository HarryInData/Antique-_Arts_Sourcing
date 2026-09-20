"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { FEATURED_PRODUCTS, POPULAR_SEARCHES, SIGNATURE_PRODUCT } from "@/data/katachi";

export function SearchOverlay() {
  const { isSearchOpen, closeSearch, openQuickLook } = useKatachi();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const allProducts = [...FEATURED_PRODUCTS, SIGNATURE_PRODUCT];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const filtered = query.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#FAF9F6]/98 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="container-editorial py-8 sm:py-12 min-h-full flex flex-col justify-between">
        <div>
          {/* Top Bar with Close */}
          <div className="flex items-center justify-between border-b border-[#1A1918]/10 pb-6">
            <span className="micro-label">CATALOG SEARCH</span>
            <button
              type="button"
              onClick={closeSearch}
              className="p-2 text-[#1A1918] hover:opacity-60 transition-opacity flex items-center gap-2"
              aria-label="Close search"
            >
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.16em]">
                Close (ESC)
              </span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Input */}
          <div className="py-8 sm:py-12 border-b border-[#1A1918]/15">
            <div className="flex items-center gap-4 max-w-4xl">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#1A1918]/40 stroke-[1.2]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by piece, wood, finish or category..."
                className="w-full bg-transparent font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#1A1918] placeholder-[#1A1918]/25 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-2 text-[#1A1918]/50 hover:text-[#1A1918]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Suggestions or Live Results */}
          {query.trim() === "" ? (
            <div className="py-10 space-y-6">
              <span className="micro-label">POPULAR QUERIES</span>
              <div className="flex flex-wrap gap-2.5">
                {POPULAR_SEARCHES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setQuery(item)}
                    className="px-4 py-2 bg-[#F0EDE6] hover:bg-[#E5E0D5] text-[#1A1918] text-xs font-sans tracking-[0.12em] uppercase transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-10">
              <div className="flex items-center justify-between mb-8">
                <span className="micro-label">MATCHING PIECES ({filtered.length})</span>
              </div>

              {filtered.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <p className="font-serif text-2xl font-light text-[#1A1918]">No matches found for “{query}”</p>
                  <p className="font-sans text-xs text-[#1A1918]/60 font-light">
                    Try searching for “Lounge”, “Walnut”, “Bench”, or “Bouclé”.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        openQuickLook(item);
                        closeSearch();
                      }}
                      className="group cursor-pointer border border-[#1A1918]/10 bg-[#F7F5F0] overflow-hidden"
                    >
                      <div className="relative aspect-square w-full bg-[#ECE8DF]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover object-center editorial-zoom"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-lg font-light text-[#1A1918] group-hover:text-[#B86B4D] transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-xs font-sans font-medium text-[#1A1918]">
                            {item.priceFormatted}
                          </span>
                        </div>
                        <p className="text-[11px] font-sans text-[#1A1918]/60 font-light truncate">
                          {item.material}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Helper */}
        <div className="pt-8 border-t border-[#1A1918]/10 flex items-center justify-between text-[11px] font-sans text-[#1A1918]/50">
          <span>Press ESC to exit search</span>
          <span>KATACHI Studio Catalog 2026</span>
        </div>
      </div>
    </div>
  );
}
