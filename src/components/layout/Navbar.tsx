"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { mainNavLinks } from "@/data/navigation";

export const Navbar: FC = () => {
  const isScrolled = useScrollPosition();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLightNav = isScrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 select-none ${
          isLightNav || isMenuOpen
            ? "py-4 bg-[#F4F1EA]/92 backdrop-blur-[16px] border-b border-[rgba(24,24,22,0.1)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-main flex justify-between items-center">
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center no-underline flex-shrink-0 group">
            <span
              className={`text-[0.95rem] sm:text-[1.05rem] tracking-[0.2em] uppercase whitespace-nowrap font-sans font-medium transition-colors duration-300 ${
                isLightNav ? "text-[#181816]" : "text-white"
              } group-hover:text-[#9A7B50]`}
            >
              ANTIQUE ARTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={`relative text-[0.7rem] font-medium tracking-[0.18em] uppercase py-1.5 transition-colors duration-300 no-underline ${
                    isLightNav
                      ? isActive
                        ? "text-[#181816] font-semibold"
                        : "text-[#6F6A61] hover:text-[#181816]"
                      : isActive
                        ? "text-white font-semibold"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Request Catalogue CTA */}
            <Link
              href="/contact"
              className={`text-[0.7rem] font-semibold tracking-[0.16em] uppercase px-6 py-2.5 transition-all duration-300 border ${
                isLightNav
                  ? "border-[#181816] text-[#181816] hover:bg-[#181816] hover:text-[#F4F1EA]"
                  : "border-white/60 text-white hover:bg-white hover:text-[#181816]"
              }`}
            >
              Request Catalogue
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[1100]"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block w-full h-[1.5px] transition-all duration-300 origin-left ${
                  isMenuOpen
                    ? "rotate-45 translate-x-0.5 bg-[#181816]"
                    : isLightNav
                      ? "bg-[#181816]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block w-full h-[1.5px] transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0"
                    : isLightNav
                      ? "bg-[#181816] opacity-100"
                      : "bg-white opacity-100"
                }`}
              />
              <span
                className={`block w-full h-[1.5px] transition-all duration-300 origin-left ${
                  isMenuOpen
                    ? "-rotate-45 translate-x-0.5 bg-[#181816]"
                    : isLightNav
                      ? "bg-[#181816]"
                      : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-[#181816]/30 z-[998] md:hidden backdrop-blur-sm"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 w-[82%] max-w-[340px] h-screen bg-[#F4F1EA] border-l border-[rgba(24,24,22,0.12)] shadow-2xl flex flex-col justify-center px-10 gap-8 z-[999]"
            >
              <div className="flex flex-col gap-6">
                {mainNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-[0.85rem] uppercase font-medium tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? "text-[#9A7B50] font-semibold" : "text-[#181816] hover:text-[#9A7B50]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-[rgba(24,24,22,0.1)]">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center text-[0.7rem]"
                >
                  Request Catalogue
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
