"use client";

import React, { FC } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export const FinalCTA: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-[#24231F] text-white">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-[760px]">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.22em] uppercase text-[#9A7B50] mb-4 block">
            Start a Project
          </span>

          <h2 className="heading-section text-white mb-6">
            Build Something<br />Worth Remembering.
          </h2>

          <p className="text-[1rem] sm:text-[1.0625rem] font-sans font-light leading-[1.7] text-white/75 max-w-[540px] mb-10">
            From a single reference piece to complete hospitality and architectural collections. Connect directly with our export desk.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-hero-primary">
              Request Catalogue
            </Link>
            <Link href="/contact#rfq-form" className="btn-hero-secondary">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
