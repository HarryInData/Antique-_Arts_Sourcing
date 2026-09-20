"use client";

import React, { FC, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { galleryItems, galleryFilters } from "@/data/gallery";
import { GalleryItem, GalleryCategory } from "@/types";
import { Search, X, Eye, FileText, CheckCircle2, MessageSquare } from "lucide-react";
import { trackRFQSubmission, trackWhatsAppClick } from "@/lib/analytics";

export const PortfolioGalleryContent: FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as GalleryCategory) || "all";

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isQuoteSent, setIsQuoteSent] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") as GalleryCategory;
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Handle escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeItem]);

  // Filtered items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.code.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        (item.material && item.material.toLowerCase().includes(q)) ||
        (item.finish && item.finish.toLowerCase().includes(q)) ||
        (item.categoryLabel && item.categoryLabel.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryItems.length };
    for (const item of galleryItems) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="w-full">
      {/* Search & Filter Header Bar */}
      <div className="mb-10 space-y-6">
        {/* Search Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[rgba(24,24,22,0.1)] pb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#6F6A61] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by SKU, item, material..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[rgba(24,24,22,0.15)] text-xs font-sans text-[#181816] placeholder-[#6F6A61]/60 focus:outline-none focus:border-[#9A7B50]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6F6A61] hover:text-[#181816]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-[0.75rem] font-sans text-[#6F6A61] tracking-[0.14em] uppercase self-end sm:self-center">
            Showing <strong className="text-[#181816] font-semibold">{filteredItems.length}</strong> of{" "}
            {galleryItems.length} Artifacts
          </div>
        </div>

        {/* Category Pills (Horizontal scrolling on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {galleryFilters.map((filter) => {
            const isActive = activeCategory === filter.value;
            const count = categoryCounts[filter.value] || 0;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                className={`px-4 py-2 text-[0.7rem] font-sans font-medium tracking-[0.14em] uppercase whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#181816] text-[#F4F1EA] border-[#181816] shadow-sm"
                    : "bg-white text-[#6F6A61] border-[rgba(24,24,22,0.12)] hover:border-[#181816] hover:text-[#181816]"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[0.625rem] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-[#F4F1EA] text-[#6F6A61]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Products */}
      {filteredItems.length === 0 ? (
        <div className="py-24 text-center space-y-4 bg-white border border-[rgba(24,24,22,0.08)] p-8">
          <p className="font-serif text-2xl font-light text-[#181816]">No pieces found matching your criteria</p>
          <p className="font-sans text-xs text-[#6F6A61] max-w-sm mx-auto">
            Try resetting your search query or selecting a different category from our master catalog.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 bg-[#181816] text-white text-xs font-sans uppercase tracking-[0.16em]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.code}
              onClick={() => {
                setActiveItem(item);
                setIsQuoteSent(false);
              }}
              className="group bg-white border border-[rgba(24,24,22,0.08)] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-[#9A7B50] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-square w-full bg-[#ECE7DE] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />

                {/* SKU badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#F4F1EA]/95 backdrop-blur-md px-2 py-1 border border-[rgba(24,24,22,0.1)] text-[9px] font-mono font-medium tracking-[0.1em] text-[#181816]">
                  {item.code}
                </div>

                {/* Quick inspect hover icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#181816] text-white text-[10px] font-sans tracking-[0.16em] uppercase px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3 h-3" />
                    Inspect Piece
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="space-y-1 mb-3">
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-[#9A7B50] block truncate">
                    {item.categoryLabel || item.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-light text-[#181816] leading-tight group-hover:text-[#9A7B50] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-sans text-[#6F6A61] font-light truncate">
                    {item.material}
                  </p>
                </div>

                <div className="pt-2 border-t border-[rgba(24,24,22,0.06)] flex items-center justify-between text-[10px] font-sans text-[#6F6A61]">
                  <span className="truncate max-w-[140px]">{item.finish}</span>
                  <span className="text-[#9A7B50] font-medium tracking-[0.1em] uppercase shrink-0">
                    B2B OEM
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal / Lightbox Detail View */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FAF9F6] border border-[rgba(24,24,22,0.15)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#F4F1EA] text-[#181816] hover:bg-[#181816] hover:text-white transition-colors border border-[rgba(24,24,22,0.1)]"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto md:h-full bg-[#ECE7DE] min-h-[320px]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#F4F1EA]/95 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-[0.12em] uppercase text-[#181816] border border-[rgba(24,24,22,0.1)] font-semibold">
                  {activeItem.code}
                </div>
              </div>

              {/* Spec sheet */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#9A7B50] block mb-1">
                      {activeItem.categoryLabel || activeItem.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#181816]">
                      {activeItem.name}
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-xs font-sans divide-y divide-[rgba(24,24,22,0.06)] border-y border-[rgba(24,24,22,0.08)] py-3">
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#6F6A61] uppercase tracking-[0.14em] text-[10px]">SKU Code</span>
                      <span className="font-mono font-medium text-[#181816]">{activeItem.code}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#6F6A61] uppercase tracking-[0.14em] text-[10px]">Material</span>
                      <span className="font-medium text-[#181816] text-right max-w-[180px]">{activeItem.material}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#6F6A61] uppercase tracking-[0.14em] text-[10px]">Finish / Color</span>
                      <span className="font-medium text-[#181816] text-right max-w-[180px]">{activeItem.finish}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#6F6A61] uppercase tracking-[0.14em] text-[10px]">Dimension</span>
                      <span className="font-medium text-[#181816]">{activeItem.dimension}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#6F6A61] uppercase tracking-[0.14em] text-[10px]">Export MOQ</span>
                      <span className="font-medium text-[#181816]">50 – 100 Units (Flexible)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {isQuoteSent ? (
                    <div className="p-3 bg-[#EAE5DA] text-[#181816] text-xs font-sans flex items-center gap-2 border border-[rgba(24,24,22,0.1)]">
                      <CheckCircle2 className="w-4 h-4 text-[#7B8576]" />
                      <span>RFQ recorded for {activeItem.code}. Our concierge will email you within 24h.</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setIsQuoteSent(true);
                        trackRFQSubmission({
                          category: activeItem.category,
                          itemCode: activeItem.code,
                          source: "gallery_lightbox_modal",
                        });
                      }}
                      className="w-full py-3.5 px-6 bg-[#181816] text-[#F4F1EA] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#34322E] transition-colors flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Request B2B Quote &amp; Tech Pack</span>
                    </button>
                  )}

                  <a
                    href={`https://wa.me/917503795101?text=${encodeURIComponent(
                      `Hello Antique Arts Sourcing,\n\nI am inquiring about SKU: ${activeItem.code} (${activeItem.name}). Please share wholesale pricing, technical specifications, and export availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackWhatsAppClick({
                        location: "gallery_modal",
                        itemCode: activeItem.code,
                        itemName: activeItem.name,
                      });
                    }}
                    className="w-full py-3 px-6 bg-[#25D366]/10 text-[#1B803E] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-sans font-medium tracking-[0.14em] uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp Desk</span>
                  </a>

                  <p className="text-[10px] font-sans text-[#6F6A61] text-center tracking-[0.08em]">
                    Custom CAD designs &amp; OEM manufacturing available for this vertical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const PortfolioGallery: FC = () => {
  return (
    <React.Suspense fallback={<div className="py-20 text-center font-sans text-xs">Loading master portfolio...</div>}>
      <PortfolioGalleryContent />
    </React.Suspense>
  );
};
