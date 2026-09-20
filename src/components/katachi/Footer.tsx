"use client";

import React from "react";
import Link from "next/link";
import { BRAND_NAME } from "@/data/katachi";

export function Footer() {
  return (
    <footer className="bg-[#F7F5F0] border-t border-[#1A1918]/10 pt-20 pb-12 text-[#1A1918]">
      <div className="container-editorial">
        {/* Top Tier: Wordmark & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1918]/10">
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-light text-[#1A1918] inline-block"
            >
              {BRAND_NAME}
            </Link>
            <p className="font-sans text-xs sm:text-sm text-[#1A1918]/70 max-w-sm font-light leading-relaxed">
              Contemporary furniture and architectural objects conceived through mathematical proportion, tactile honesty, and Japanese-Scandinavian quietude.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1918]/40">
                STUDIO & SHOWROOM · TOKYO · COPENHAGEN
              </span>
            </div>
          </div>

          {/* 4 Multi-Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Shop */}
            <div className="space-y-4">
              <h4 className="micro-label text-[#1A1918]">SHOP</h4>
              <ul className="space-y-2.5 text-xs font-sans font-light text-[#1A1918]/75">
                <li><a href="#collections" className="hover:text-[#1A1918] transition-colors">Seating</a></li>
                <li><a href="#collections" className="hover:text-[#1A1918] transition-colors">Dining & Low Tables</a></li>
                <li><a href="#collections" className="hover:text-[#1A1918] transition-colors">Storage & Credenzas</a></li>
                <li><a href="#collections" className="hover:text-[#1A1918] transition-colors">Sculptural Objects</a></li>
                <li><a href="#featured" className="hover:text-[#1A1918] transition-colors">New Releases</a></li>
              </ul>
            </div>

            {/* Column 2: About */}
            <div className="space-y-4">
              <h4 className="micro-label text-[#1A1918]">ABOUT</h4>
              <ul className="space-y-2.5 text-xs font-sans font-light text-[#1A1918]/75">
                <li><a href="#materials" className="hover:text-[#1A1918] transition-colors">Material Manifesto</a></li>
                <li><a href="#journal" className="hover:text-[#1A1918] transition-colors">The Studio</a></li>
                <li><a href="#journal" className="hover:text-[#1A1918] transition-colors">Craft Artisans</a></li>
                <li><a href="#journal" className="hover:text-[#1A1918] transition-colors">Sustainability Code</a></li>
                <li><a href="#journal" className="hover:text-[#1A1918] transition-colors">Press Inquiries</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-4">
              <h4 className="micro-label text-[#1A1918]">SUPPORT</h4>
              <ul className="space-y-2.5 text-xs font-sans font-light text-[#1A1918]/75">
                <li><a href="#support" className="hover:text-[#1A1918] transition-colors">Shipping & Freight</a></li>
                <li><a href="#support" className="hover:text-[#1A1918] transition-colors">Returns & Guarantee</a></li>
                <li><a href="#support" className="hover:text-[#1A1918] transition-colors">Timber & Linen Care</a></li>
                <li><a href="#support" className="hover:text-[#1A1918] transition-colors">Trade & Architecture</a></li>
                <li><a href="#support" className="hover:text-[#1A1918] transition-colors">Contact Concierge</a></li>
              </ul>
            </div>

            {/* Column 4: Follow */}
            <div className="space-y-4">
              <h4 className="micro-label text-[#1A1918]">FOLLOW</h4>
              <ul className="space-y-2.5 text-xs font-sans font-light text-[#1A1918]/75">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1918] transition-colors">Instagram</a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1918] transition-colors">Pinterest</a></li>
                <li><a href="https://are.na" target="_blank" rel="noreferrer" className="hover:text-[#1A1918] transition-colors">Are.na</a></li>
                <li><a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1918] transition-colors">Studio Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#1A1918]/50 tracking-[0.08em] gap-4">
          <p>© 2026 {BRAND_NAME} Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#1A1918] cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#1A1918] cursor-pointer transition-colors">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-[#1A1918] cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
