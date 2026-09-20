"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { NAV_LINKS, BRAND_NAME } from "@/data/katachi";

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openBag, bagCount, openSearch, openMobileMenu } = useKatachi();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-500 border-b ${
        isScrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-md border-[#1A1918]/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        {/* Left: Brand Wordmark */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light text-[#1A1918] hover:opacity-80 transition-opacity"
            aria-label={`${BRAND_NAME} Home`}
          >
            {BRAND_NAME}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 ml-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-[#1A1918]/80 hover:text-[#1A1918] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1918] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right-side Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Button */}
          <button
            type="button"
            onClick={openSearch}
            className="p-2 text-[#1A1918] hover:opacity-60 transition-opacity flex items-center gap-2 group"
            aria-label="Search collection"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
            <span className="hidden md:inline text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#1A1918]/70 group-hover:text-[#1A1918]">
              Search
            </span>
          </button>

          {/* Account Button */}
          <button
            type="button"
            onClick={() => {}}
            className="hidden sm:flex items-center p-2 text-[#1A1918] hover:opacity-60 transition-opacity"
            aria-label="Account"
          >
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Bag Button */}
          <button
            type="button"
            onClick={openBag}
            className="p-2 text-[#1A1918] hover:opacity-75 transition-opacity flex items-center gap-2 relative group"
            aria-label={`Shopping bag, ${bagCount} items`}
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              {bagCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#1A1918] text-[#F7F5F0] text-[9px] font-mono flex items-center justify-center font-medium">
                  {bagCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#1A1918]/70 group-hover:text-[#1A1918]">
              Bag
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={openMobileMenu}
            className="lg:hidden p-2 text-[#1A1918] hover:opacity-75 transition-opacity"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
