"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { NAV_LINKS, BRAND_NAME } from "@/data/katachi";

export function MobileDrawer() {
  const { isMobileMenuOpen, closeMobileMenu, openSearch } = useKatachi();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  if (!isMobileMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={closeMobileMenu}
    >
      <div
        className="w-[85%] max-w-sm bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-left duration-300 border-r border-[#1A1918]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Wordmark & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1A1918]/10">
            <span className="font-serif text-2xl tracking-[0.2em] font-light text-[#1A1918]">
              {BRAND_NAME}
            </span>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2 text-[#1A1918] hover:opacity-60"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Action */}
          <div className="pt-6 pb-2">
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                openSearch();
              }}
              className="w-full py-3 px-4 bg-[#EFECE5] text-[#1A1918]/70 text-xs font-sans uppercase tracking-[0.16em] flex items-center justify-between"
            >
              <span>Search pieces...</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="block font-serif text-2xl sm:text-3xl font-light text-[#1A1918] hover:text-[#B86B4D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Details */}
        <div className="pt-6 border-t border-[#1A1918]/10 space-y-4">
          <div className="text-xs font-sans text-[#1A1918]/60 space-y-1">
            <p>Customer Concierge: info@katachi-furniture.com</p>
            <p>Currency: USD ($)</p>
          </div>
          <p className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#1A1918]/40">
            KATACHI · OBJECTS FOR CONSIDERED LIVING
          </p>
        </div>
      </div>
    </div>
  );
}
