"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe2,
  Layers,
  Sparkles,
  Compass,
} from "lucide-react";
import { buildWhatsAppURL } from "@/lib/enquiry";
import { trackWhatsAppClick } from "@/lib/analytics";

export interface CollectionComingSoonProps {
  categoryName: string;
  categorySlug?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  secondaryMessage?: string;
  backHref?: string;
  artworkSrc?: string;
}

export const CollectionComingSoon: FC<CollectionComingSoonProps> = ({
  categoryName,
  categorySlug,
  eyebrow = "ARTISAN SOURCING PREVIEW",
  heading,
  description = "We are carefully curating this collection with our master artisan partners across Firozabad and Moradabad. Private line-sheets, CAD drawings, and export samples are being prepared for international trade buyers.",
  secondaryMessage = "Please check back soon or contact our export desk directly for priority line-sheet access.",
  backHref = "/#collections",
  artworkSrc = "/images/artwork/collection-curation-artwork.jpg",
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const displayCategory = categoryName || "Curated Collection";

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setFeedbackMessage("Please provide a valid corporate or business email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          category: displayCategory,
          categorySlug: categorySlug || "",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(data.message || "Thank you! We will notify you the moment this collection is unveiled.");
        setEmail("");
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Unable to save your request. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("Network error. Please try again or reach out directly via WhatsApp.");
    }
  };

  const whatsappMessage = `Hello Antique Arts Sourcing,\n\nI would like to enquire about the upcoming "${displayCategory}" collection.\n\nPlease share catalog line-sheets, technical specifications, and expected export availability.`;
  const whatsappUrl = buildWhatsAppURL(whatsappMessage);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between bg-[#F8F6F1] text-[#181816] overflow-hidden pt-32 sm:pt-40 pb-20 border-b border-[rgba(24,24,22,0.08)]">
      
      {/* Subtle Architectural Drafting Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(24,24,22,0.03) 0, rgba(24,24,22,0.03) 1px, transparent 0, transparent 48px)",
        }}
      />

      {/* Decorative Gold Accent Hairlines at Viewport Edges */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9A7B50]/60 to-transparent" />
      <div className="absolute inset-x-8 top-20 bottom-20 pointer-events-none border border-[rgba(154,123,80,0.08)] -z-0 hidden 2xl:block" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Top Breadcrumb & Status Row */}
        <div className="w-full flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-[rgba(24,24,22,0.08)]">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2.5 text-[0.72rem] font-sans font-medium tracking-[0.22em] uppercase text-[#6F6A61] hover:text-[#9A7B50] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 text-[#9A7B50]" />
            <span>Back to Collections</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9A7B50] animate-pulse" />
            <span className="text-[0.625rem] font-sans font-semibold tracking-[0.24em] uppercase px-3 py-1.5 bg-[#ECE7DE] text-[#9A7B50] border border-[rgba(154,123,80,0.25)]">
              Trade Preview · Export Catalog
            </span>
          </div>
        </div>

        {/* Spacious 2-Column Editorial Grid (Desktop) / Clean Flow (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: Clear Typography, Category Identity, Content & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Single Refined Editorial Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#9A7B50]" />
              <span className="text-[0.72rem] font-sans font-semibold tracking-[0.24em] uppercase text-[#9A7B50]">
                {eyebrow}
              </span>
            </div>

            {/* Main Heading — Spacious Serif with Generous Line-Height and Letter-Spacing */}
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] font-normal text-[#181816] tracking-[0.015em] leading-[1.18] mb-6">
              {heading ? (
                heading
              ) : (
                <>
                  <span className="block">{displayCategory}</span>
                  <span className="block font-serif italic text-[clamp(1.75rem,3.2vw,2.75rem)] text-[#9A7B50] font-light mt-1.5">
                    Collection Under Curation
                  </span>
                </>
              )}
            </h1>

            {/* Primary Description — Relaxed Leading, No Congestion */}
            <p className="font-sans font-light text-base sm:text-[1.0625rem] text-[#4A453E] leading-[1.85] max-w-xl mb-4">
              {description}
            </p>

            {/* Secondary Sourcing Note */}
            {secondaryMessage && (
              <p className="font-sans font-light text-sm text-[#7C766D] leading-[1.75] max-w-lg mb-8">
                {secondaryMessage}
              </p>
            )}

            {/* Mobile Visual Insertion */}
            <div className="block lg:hidden w-full mb-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE7DE] border border-[rgba(24,24,22,0.1)] shadow-lg">
                <Image
                  src={artworkSrc}
                  alt={`${displayCategory} — Artisanal curation by Antique Arts Sourcing`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Action CTA Buttons — Ample Spacing and Distinction */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA — WhatsApp Enquiry */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    location: "coming_soon",
                    itemName: displayCategory,
                    itemCode: categorySlug,
                  })
                }
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#181816] hover:bg-[#9A7B50] text-[#F4F1EA] text-[0.75rem] font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#9A7B50]" />
                <span>Enquire About This Collection</span>
              </a>

              {/* Secondary CTA — Back to Collections */}
              <Link
                href={backHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border border-[rgba(24,24,22,0.18)] hover:border-[#181816] text-[#181816] text-[0.75rem] font-sans font-medium tracking-[0.16em] uppercase transition-colors duration-300 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>Browse All Collections</span>
              </Link>
            </div>

            {/* Priority Trade Catalog Notification — Airy and Minimalist */}
            <div className="w-full max-w-xl pt-6 border-t border-[rgba(24,24,22,0.12)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase text-[#181816]">
                  <Clock className="w-3.5 h-3.5 text-[#9A7B50]" />
                  <span>Priority Catalog Release Alert</span>
                </div>
                <span className="text-[0.625rem] font-sans font-semibold tracking-[0.18em] uppercase text-[#9A7B50]">
                  B2B Trade Desk
                </span>
              </div>

              <form onSubmit={handleNotifySubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    placeholder="Enter corporate or business email..."
                    required
                    className="flex-1 px-4 py-3 bg-white border border-[rgba(24,24,22,0.15)] text-[0.84rem] font-sans text-[#181816] placeholder:text-[#6F6A61]/70 focus:outline-none focus:border-[#9A7B50] focus:ring-1 focus:ring-[#9A7B50] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 bg-[#9A7B50] hover:bg-[#86683e] text-white text-[0.75rem] font-sans font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 cursor-pointer shadow-xs"
                  >
                    {status === "loading" ? (
                      <span>Saving...</span>
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <div className="p-3 bg-[#F4F8F4] border border-[#2E7D32]/20 text-[#1B5E20] text-xs font-sans flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2E7D32]" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-[#FDF2F2] border border-[#D32F2F]/20 text-[#C62828] text-xs font-sans">
                    {feedbackMessage}
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* RIGHT COLUMN: Tall Elegant Artwork — Perfectly Balances Left Column Height */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
            <div className="relative w-full aspect-[4/5] bg-[#ECE7DE] border border-[rgba(24,24,22,0.12)] shadow-xl overflow-hidden group">
              <Image
                src={artworkSrc}
                alt={`${displayCategory} — Artisanal curation by Antique Arts Sourcing`}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 1280px) 40vw, 520px"
                priority
              />
              
              {/* Subtle Atelier Tag Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#181816]/90 via-[#181816]/40 to-transparent p-6 text-white flex items-end justify-between">
                <div>
                  <span className="block text-[0.625rem] font-sans font-semibold tracking-[0.25em] uppercase text-[#9A7B50] mb-1">
                    Artisan Workshop · Plate AAS-CUR-04
                  </span>
                  <span className="text-[0.875rem] font-serif font-light text-[#F4F1EA]">
                    Curation in Progress · Firozabad & Moradabad
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md text-[0.625rem] font-sans tracking-[0.2em] uppercase">
                  <Sparkles className="w-3 h-3 text-[#9A7B50]" />
                  <span>Trade Only</span>
                </div>
              </div>
            </div>

            {/* Sub-artwork Technical Line */}
            <div className="w-full mt-3 flex items-center justify-between text-[0.72rem] font-sans font-light text-[#6F6A61] px-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9A7B50]" />
                <span>Verified Handcrafted Export Quality</span>
              </span>
              <span className="font-mono text-[0.65rem] tracking-wider text-[#9A7B50]">AAS / CURATION</span>
            </div>
          </div>

        </div>

        {/* Technical & Trade Specifications Grid (4 Perfectly Symmetrical Columns) */}
        <div className="w-full pt-14 mt-16 sm:mt-20 border-t border-[rgba(24,24,22,0.12)]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[0.7rem] font-sans font-semibold tracking-[0.22em] uppercase text-[#9A7B50]">
              <Compass className="w-3.5 h-3.5 text-[#9A7B50]" />
              <span>Trade & Sourcing Specifications</span>
            </div>
            <span className="text-[0.65rem] font-sans tracking-[0.18em] uppercase text-[#6F6A61]">
              Verified B2B Export Facility
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            
            {/* Spec 1 */}
            <div className="p-6 bg-white border border-[rgba(24,24,22,0.08)] shadow-[0_2px_8px_rgba(24,24,22,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-sans font-semibold tracking-[0.22em] uppercase text-[#9A7B50] mb-3">
                  <span>01 / Ateliers</span>
                  <Globe2 className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-sans text-[0.9375rem] font-medium text-[#181816] mb-1.5">
                  Firozabad & Moradabad
                </h4>
                <p className="font-sans text-[0.8rem] font-light text-[#6F6A61] leading-relaxed">
                  Mouth-blown art glass, solid brass foundry casting, and hand-spun metalwork.
                </p>
              </div>
            </div>

            {/* Spec 2 */}
            <div className="p-6 bg-white border border-[rgba(24,24,22,0.08)] shadow-[0_2px_8px_rgba(24,24,22,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-sans font-semibold tracking-[0.22em] uppercase text-[#9A7B50] mb-3">
                  <span>02 / Metallurgy</span>
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-sans text-[0.9375rem] font-medium text-[#181816] mb-1.5">
                  Solid Cast Brass & Metal
                </h4>
                <p className="font-sans text-[0.8rem] font-light text-[#6F6A61] leading-relaxed">
                  Hammered antique patina, brushed gold, unlacquered brass, and clear luster.
                </p>
              </div>
            </div>

            {/* Spec 3 */}
            <div className="p-6 bg-white border border-[rgba(24,24,22,0.08)] shadow-[0_2px_8px_rgba(24,24,22,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-sans font-semibold tracking-[0.22em] uppercase text-[#9A7B50] mb-3">
                  <span>03 / Compliance</span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-sans text-[0.9375rem] font-medium text-[#181816] mb-1.5">
                  AQL 2.5 & Drop Tested
                </h4>
                <p className="font-sans text-[0.8rem] font-light text-[#6F6A61] leading-relaxed">
                  100% pre-shipment inspections with ISPM-15 export-certified seaworthy crates.
                </p>
              </div>
            </div>

            {/* Spec 4 */}
            <div className="p-6 bg-white border border-[rgba(24,24,22,0.08)] shadow-[0_2px_8px_rgba(24,24,22,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-sans font-semibold tracking-[0.22em] uppercase text-[#9A7B50] mb-3">
                  <span>04 / Terms</span>
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-sans text-[0.9375rem] font-medium text-[#181816] mb-1.5">
                  OEM / ODM & Wholesale
                </h4>
                <p className="font-sans text-[0.8rem] font-light text-[#6F6A61] leading-relaxed">
                  Custom tooling from CAD sketches, bespoke private labeling, and FOB/CIF dispatch.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
