"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="bg-[#1A1918] text-[#F7F5F0] py-20 sm:py-28 border-t border-[#2C2A26]">
      <div className="container-editorial max-w-4xl text-center space-y-8">
        <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C87A5B]">
          CORRESPONDENCE
        </span>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F5F0] tracking-tight">
            A considered note, occasionally.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#F7F5F0]/60 font-light leading-relaxed">
            We write sparingly. Receive seasonal collection debuts, monographs from our timber workshop, and private invitations to design exhibitions.
          </p>
        </div>

        {/* Compact Form */}
        <div className="max-w-md mx-auto pt-2">
          {isSubscribed ? (
            <div className="p-4 border border-[#3E3C36] bg-[#22211E] text-center space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.16em] uppercase text-[#F7F5F0]">
                <Check className="w-4 h-4 text-[#C87A5B]" />
                <span>Thank you for subscribing</span>
              </div>
              <p className="text-[11px] text-[#F7F5F0]/50 font-light">
                A welcome dispatch has been sent to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex items-center border border-[#3E3C36] bg-[#242320] focus-within:border-[#F7F5F0]/50 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  aria-label="Email address for newsletter"
                  className="w-full bg-transparent px-4 py-3.5 text-xs font-sans text-[#F7F5F0] placeholder-[#F7F5F0]/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#F7F5F0] text-[#1A1918] hover:bg-[#E2DDD3] transition-colors text-xs font-sans font-medium tracking-[0.18em] uppercase flex items-center gap-2 shrink-0"
                  aria-label="Submit newsletter subscription"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] font-sans text-[#F7F5F0]/40 tracking-[0.08em] font-light">
                We respect your inbox. Unsubscribe at any time. Read our Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
