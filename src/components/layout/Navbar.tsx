"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../icons";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/data/siteConfig";
import { mainNavLinks } from "@/data/navigation";
import { ACTIVE_LINK_OFFSET } from "@/constants";
import { buildWhatsAppURL } from "@/lib/enquiry";

export const Navbar: FC = () => {
  const isScrolled = useScrollPosition();
  const [activeId, setActiveId] = useState<string>("hero-section");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Monitor scroll to update active navigation hash link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + ACTIVE_LINK_OFFSET;
      
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (id && scrollPos >= top && scrollPos < top + height) {
          setActiveId(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waURL = buildWhatsAppURL("Hello Antique Arts Sourcing, I am interested in your luxury lighting products.");

  return (
    <>
      <header
        className={`navbar fixed top-0 left-0 w-full z-1000 transition-[padding,background-color,border-color,backdrop-filter] duration-400 select-none ${
          isScrolled || isMenuOpen
            ? "py-4 bg-[#0F0F0F]/85 backdrop-blur-[20px] border-b border-white/[0.05]"
            : "py-6 bg-transparent"
        } ${isMenuOpen ? "menu-open" : ""}`}
      >
        <div className="nav-container flex justify-between items-center w-full max-w-container mx-auto px-6">
          
          {/* Brand Logo */}
          <a href="#" className="logo flex items-center gap-3 no-underline flex-shrink-0">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/branding/logo.jpeg"
                alt="Antique Arts Sourcing Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="brand-text text-[1.25rem] tracking-[0.18em] whitespace-nowrap">
              {siteConfig.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu hidden md:flex gap-8">
            {mainNavLinks.map((link) => {
              const hash = link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link relative text-xs font-normal tracking-[0.1em] uppercase py-1.5 transition-fast no-underline ${
                    activeId === hash
                      ? "text-white after:w-full"
                      : "text-text-gray hover:text-white after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:height-[1px] after:bg-accent-gold after:transition-[width] after:duration-400`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action & Mobile Hamburger */}
          <div className="nav-actions flex items-center gap-4">
            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-nav-toggle md:hidden bg-transparent border-none cursor-pointer p-2.5 z-1100 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block w-full h-[2px] bg-white transition-transform duration-200 origin-left ${
                    isMenuOpen ? "rotate-45 translate-x-1" : ""
                  }`}
                />
                <span
                  className={`block w-full h-[2px] bg-white transition-opacity duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-full h-[2px] bg-white transition-transform duration-200 origin-left ${
                    isMenuOpen ? "-rotate-45 translate-x-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-[998] md:hidden backdrop-blur-sm"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on drawer body click
              className="fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-bg-surface border-l border-white/5 shadow-2xl flex flex-col justify-center items-center gap-[30px] z-[999]"
            >
              {mainNavLinks.map((link) => {
                const hash = link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm uppercase font-normal tracking-[0.1em] transition-fast py-1.5 ${
                      activeId === hash
                        ? "text-accent-gold"
                        : "text-text-gray hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
