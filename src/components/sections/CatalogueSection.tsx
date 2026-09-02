"use client";

import React, { FC } from "react";
import { CatalogueCard } from "../ui/CatalogueCard";
import { catalogues } from "@/data/catalogues";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export const CatalogueSection: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="catalogue"
      className="section-pad relative bg-sand/30 text-center"
    >
      <div className="container-main">
        <div className="mb-12 sm:mb-16">
          <p className="label-brass mb-3">Downloads</p>
          <h2 className="heading-section mb-4">Product Catalogues</h2>
          <p className="body-text max-w-[520px] mx-auto">
            Download our high-resolution product catalogues. Learn about available finishes, custom sizing, and bespoke manufacturing options.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {catalogues.map((catalogue, index) => (
            <div
              key={catalogue.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <CatalogueCard catalogue={catalogue} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
