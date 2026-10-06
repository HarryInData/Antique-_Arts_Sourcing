"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, Compass, ShieldCheck, Clock } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/enquiry";

export interface CollectionUnavailableProps {
  categoryName: string;
  categorySlug?: string;
  backHref?: string;
}

export const CollectionUnavailable: FC<CollectionUnavailableProps> = ({
  categoryName,
  backHref = "/collections",
}) => {
  const whatsappMessage = `Hello Antique Arts Sourcing,\n\nI am interested in learning more about the upcoming ${categoryName} collection currently under curation. Please share details on catalog availability and custom sourcing.\n\nThank you.`;
  const whatsappUrl = buildWhatsAppURL(whatsappMessage);

  return (
    <section
      aria-label={`${categoryName} Collection Under Curation`}
      className="relative w-full min-h-[75vh] flex items-center justify-center py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#181816] text-[#F4F1EA] overflow-hidden"
    >
      {/* Background Architectural Ambient Accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#F4F1EA_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#9A7B50]/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#9A7B50]/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column — Editorial Announcement */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9A7B50] animate-pulse" />
              <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50]">
                COLLECTION UPDATE
              </span>
            </div>

            {/* Dynamic Category Highlight */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#ECE7DE]/75 mb-2">
              {categoryName}
            </p>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FFFFFF] leading-[1.08] mb-6">
              COLLECTION UNDER CURATION
            </h1>

            {/* Supporting Text */}
            <p className="font-sans font-light text-sm sm:text-base text-[#D0CBC0] leading-relaxed max-w-xl mb-8">
              We&apos;re carefully curating this collection with our artisan partners. New pieces are being prepared for our global buyers.
            </p>

            {/* Atelier Status Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 pb-8 border-t border-b border-white/10 mb-8">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#9A7B50] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.5625rem] font-sans uppercase tracking-[0.16em] text-[#9A7B50]">Atelier</span>
                  <span className="text-[0.75rem] font-sans text-white/90">Firozabad &amp; Moradabad</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9A7B50] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.5625rem] font-sans uppercase tracking-[0.16em] text-[#9A7B50]">Status</span>
                  <span className="text-[0.75rem] font-sans text-white/90">In Preparation</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#9A7B50] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.5625rem] font-sans uppercase tracking-[0.16em] text-[#9A7B50]">Standard</span>
                  <span className="text-[0.75rem] font-sans text-white/90">Export Certified</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9A7B50] text-[#181816] font-sans font-medium text-xs sm:text-[0.8125rem] tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#b08e5e] hover:shadow-[0_4px_20px_rgba(154,123,80,0.35)] focus:outline-none focus:ring-2 focus:ring-[#9A7B50] focus:ring-offset-2 focus:ring-offset-[#181816]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About This Collection</span>
              </a>

              {/* Secondary CTA */}
              <Link
                href={backHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-[#F4F1EA] font-sans font-medium text-xs sm:text-[0.8125rem] tracking-[0.14em] uppercase transition-all duration-300 hover:border-white/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#181816]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Collections</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Brand Emblem & Atelier Plaque */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg bg-gradient-to-b from-[#24231F] to-[#1C1B18] border border-white/10 p-8 flex flex-col justify-between items-center text-center shadow-2xl">
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#9A7B50]/40" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#9A7B50]/40" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#9A7B50]/40" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#9A7B50]/40" />

              <span className="text-[0.625rem] font-sans font-semibold tracking-[0.25em] uppercase text-[#9A7B50]">
                AUTHENTIC CRAFTSMANSHIP
              </span>

              {/* Central Brand Emblem */}
              <div className="my-auto py-6 flex flex-col items-center">
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src="/images/branding/antique-arts-sourcing-emblem.png"
                    alt="Antique Arts Sourcing Official Emblem"
                    fill
                    className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                    sizes="112px"
                  />
                </div>
                <h3 className="font-serif text-lg text-white font-medium tracking-wide">
                  Antique Arts Sourcing
                </h3>
                <span className="text-[0.6875rem] font-sans text-[#9A7B50] tracking-[0.18em] uppercase mt-1">
                  Atelier Curation Desk
                </span>
              </div>

              {/* Bottom Notice */}
              <div className="w-full pt-4 border-t border-white/10">
                <p className="text-[0.6875rem] font-sans text-white/50 leading-relaxed">
                  B2B wholesale catalogue &amp; bespoke OEM production available upon direct consultation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
