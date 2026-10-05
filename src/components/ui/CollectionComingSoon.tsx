"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, Check, Sparkles, AlertCircle, Loader2 } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/enquiry";
import { trackWhatsAppClick, trackCTAClick, trackEvent } from "@/lib/analytics";

export interface CollectionComingSoonProps {
  categoryName: string;
  categorySlug?: string;
  ctaDestination?: string;
  backHref?: string;
}

export const CollectionComingSoon: FC<CollectionComingSoonProps> = ({
  categoryName,
  categorySlug = "",
  ctaDestination,
  backHref = "/#collections",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const storageKey = `aas_subscribed_${categorySlug || categoryName.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;

  // Check if user already subscribed in this browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setIsSuccess(true);
        setSubscribedEmail(saved);
      }
    } catch {
      // localStorage may be restricted in private mode
    }
  }, [storageKey]);

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          category: categoryName,
          categorySlug,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setSubscribedEmail(trimmed);
        try {
          localStorage.setItem(storageKey, trimmed);
        } catch {
          // Ignore storage errors
        }
        trackEvent("email_notification_signup", {
          category: categoryName,
          email: trimmed,
        });
        trackCTAClick("Notify Me", "coming_soon_email_form");
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp CTA link
  const inquiryMessage = `Hello Antique Arts Sourcing,\n\nI am inquiring about the "${categoryName}" collection currently under curation.\n\nPlease share updates, catalogue specifications, and notification when available for B2B export.\n\nThank you.`;
  const whatsappUrl = ctaDestination || buildWhatsAppURL(inquiryMessage);

  const handleEnquireClick = () => {
    trackWhatsAppClick({
      location: "coming_soon_page",
      itemName: `${categoryName} (${categorySlug || "curation"})`,
    });
    trackCTAClick(`Enquire - ${categoryName}`, "coming_soon_primary_cta");
  };

  const handleBackClick = () => {
    trackCTAClick("Back to Collections", "coming_soon_secondary_cta");
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F1EA] text-[#181816] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#9A7B50]/10 via-[#ECE7DE]/50 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container-main max-w-3xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav 
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2.5 text-[0.6875rem] font-sans font-medium tracking-[0.22em] uppercase text-[#6F6A61] mb-8 sm:mb-10"
        >
          <Link
            href={backHref}
            onClick={handleBackClick}
            className="hover:text-[#9A7B50] transition-colors duration-200"
          >
            Collections
          </Link>
          <span className="text-[#181816]/25">/</span>
          <span className="text-[#9A7B50] font-semibold">{categoryName}</span>
        </nav>

        {/* Coming Soon Feature Card with Deep Ocean Teal Canvas (matching reference design) */}
        <div className="bg-[#0B3B4F] text-white rounded-lg shadow-2xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden border border-[#0B3B4F]/50">
          
          {/* Subtle top ambient glow */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" 
          />

          {/* Dynamic Category Pill Badge */}
          <div className="mb-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[0.6875rem] sm:text-[0.75rem] font-sans font-medium tracking-[0.2em] uppercase text-amber-200">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {categoryName}
            </span>
          </div>

          {/* Golden Egg Cracking Illustration (Exact visual motif from user reference) */}
          <div className="relative mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/coming-soon-egg-transparent.png"
                alt="Coming Soon — Collection Under Curation"
                fill
                priority
                className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </div>

          {/* Coming Soon Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none mb-4">
            Coming Soon
          </h1>

          {/* Subtitle / Promise from Reference */}
          <p className="font-sans text-sm sm:text-base text-white/85 font-light max-w-md mx-auto mb-8 leading-relaxed">
            Get ready! Something really cool is coming!
          </p>

          <p className="font-sans text-xs sm:text-sm text-white/60 font-light max-w-lg mx-auto mb-8 leading-relaxed">
            We are curating bespoke export pieces for our global trade buyers. Leave your email below to receive instant launch notification and private catalog preview.
          </p>

          {/* Functional Email Notification Form */}
          <div className="max-w-md mx-auto mb-10 relative z-10">
            {isSuccess ? (
              <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-sm p-4 text-left sm:text-center transition-all animate-in fade-in">
                <div className="flex items-center justify-center gap-2 text-emerald-300 font-sans text-xs sm:text-sm font-medium tracking-wide mb-1">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>You’re on the launch priority list!</span>
                </div>
                <p className="text-[11px] font-sans text-emerald-200/80 font-light">
                  We will notify <strong className="text-white font-medium">{subscribedEmail}</strong> the moment the {categoryName} collection goes live.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail("");
                  }}
                  className="mt-2 text-[10px] uppercase tracking-wider text-white/60 hover:text-white underline font-sans"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-3" noValidate>
                <div className="flex flex-col sm:flex-row items-stretch border border-white/40 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20 transition-all rounded-sm overflow-hidden bg-white/5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Your Email"
                    required
                    aria-label={`Enter your email to get notified about ${categoryName}`}
                    className="w-full bg-transparent px-4 py-3 sm:py-3.5 text-sm font-sans text-white placeholder-white/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 sm:py-3.5 bg-white text-[#0B3B4F] hover:bg-amber-100 transition-colors font-sans text-xs font-semibold tracking-[0.14em] uppercase shrink-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <span>Notify Me</span>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-xs font-sans text-rose-300 flex items-center justify-center gap-1.5 text-left pt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </p>
                )}

                <p className="text-[10px] font-sans text-white/40 tracking-wider uppercase">
                  B2B Trade Updates Only · No Spam · Unsubscribe Anytime
                </p>
              </form>
            )}
          </div>

          {/* Action CTAs (WhatsApp & Back to Collections) */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEnquireClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#9A7B50] hover:bg-[#b08d5c] text-white transition-all text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-sm shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire About This Collection</span>
            </a>

            <Link
              href={backHref}
              onClick={handleBackClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-sans font-semibold tracking-[0.16em] uppercase border border-white/20 rounded-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collections</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
