"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/katachi";

export function JournalSection() {
  return (
    <section id="journal" className="section-editorial border-t border-[#1A1918]/10 bg-[#F7F5F0]">
      <div className="container-editorial">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#1A1918]/10 pb-6">
          <div className="space-y-2">
            <span className="micro-label">THE KATACHI JOURNAL</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1918]">
              Notes on living.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#1A1918]/60 mt-4 md:mt-0 max-w-xs font-light">
            Essays on spatial harmony, material permanence, and contemporary domesticity.
          </p>
        </div>

        {/* 3 Publication Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between cursor-pointer space-y-5"
            >
              {/* Publication Image Crop */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8DF] border border-[#1A1918]/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center editorial-zoom"
                />
                <div className="absolute top-3 left-3 bg-[#F7F5F0]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#1A1918] border border-[#1A1918]/10">
                  {article.category}
                </div>
              </div>

              {/* Publication Metadata */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10px] font-sans text-[#1A1918]/50 tracking-[0.16em] uppercase">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1918] group-hover:text-[#B86B4D] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-sans text-xs text-[#1A1918]/70 font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A1918]/10 flex items-center justify-between">
                  <span className="text-xs font-sans font-medium tracking-[0.18em] uppercase text-[#1A1918] group-hover:text-[#B86B4D] transition-colors inline-flex items-center gap-1">
                    Read story
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
