"use client";

import React, { FC } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { footerNavLinks, footerBusinessLinks } from "@/data/navigation";
import { trackEmailClick, trackWhatsAppClick } from "@/lib/analytics";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#24231F] text-white">
      {/* Brass accent hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent opacity-60" />
      <div className="pt-16 pb-12">
      <div className="container-main">
        {/* 12-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block no-underline mb-4 group">
              <span className="text-[1.05rem] tracking-[0.2em] uppercase text-white font-sans font-medium group-hover:text-[#9A7B50] transition-colors duration-300">
                ANTIQUE ARTS SOURCING
              </span>
            </Link>
            <p className="text-white/60 text-[0.875rem] font-sans font-light leading-[1.7] max-w-[360px] mb-4">
              Premier B2B sourcing and manufacturing house connecting artisan craftsmanship with architects, designers, and hospitality brands worldwide.
            </p>
            <p className="text-[0.6875rem] font-sans font-medium tracking-[0.18em] uppercase text-[#9A7B50]">
              Bespoke Manufacturing · Global Export · OEM / ODM
            </p>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/50 font-sans font-semibold mb-5">
              Navigate
            </h4>
            <ul className="list-none space-y-3 p-0 m-0">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 font-sans font-light text-[0.875rem] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Capabilities (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/50 font-sans font-semibold mb-5">
              Business
            </h4>
            <ul className="list-none space-y-3 p-0 m-0">
              {footerBusinessLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 font-sans font-light text-[0.875rem] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/50 font-sans font-semibold mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-white/70 text-[0.875rem] font-sans font-light">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackEmailClick({ location: "footer" })}
                className="hover:text-white transition-colors duration-300"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.phoneFormatted}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ location: "footer" })}
                className="hover:text-white transition-colors duration-300"
              >
                WhatsApp: {siteConfig.contact.phone}
              </a>
              <span className="text-white/50 text-[0.8125rem] leading-[1.6] pt-1">
                {siteConfig.contact.address}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[0.6875rem] font-sans text-white/35 font-light tracking-[0.08em] m-0">
            &copy; {currentYear} Antique Arts Sourcing. All Rights Reserved. Firozabad, India.
          </p>
          <div className="flex items-center gap-4 text-[0.6875rem] font-sans text-white/35 tracking-[0.08em]">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#9A7B50] inline-block" />
              B2B Luxury Export
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#9A7B50] inline-block" />
              ISPM-15 Certified
            </span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};
