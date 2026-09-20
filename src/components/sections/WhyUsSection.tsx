"use client";

import React, { FC } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { WhyCard } from "../ui/WhyCard";
import { whyUsFeatures } from "@/data/whyUs";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export const WhyUsSection: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="solutions"
      className="section why-us-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-secondary"
    >
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Who We Serve"
          title="Tailored Solutions for Every Buyer Profile"
          centered
        />

        <div ref={ref} className="why-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-[50px]">
          {whyUsFeatures.map((feature, index) => (
            <div
              key={feature.title}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              )}
            >
              <WhyCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
