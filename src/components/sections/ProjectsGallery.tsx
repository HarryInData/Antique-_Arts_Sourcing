"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    image: "/products/decorative-lighting/matte-black-dome-mesh-pendant.webp",
    context: "Fine-Dining Restaurant",
    location: "London, UK",
  },
  {
    image: "/products/decorative-lighting/industrial-wire-drop-light.webp",
    context: "Boutique Hotel Lobby",
    location: "Dubai, UAE",
  },
  {
    image: "/products/decorative-lighting/hexagonal-wire-frame-accent-light.webp",
    context: "Private Residence",
    location: "New York, USA",
  },
  {
    image: "/products/decorative-lighting/brushed-gold-table-accent-light.webp",
    context: "Heritage Resort Suite",
    location: "Jaipur, India",
  },
];

export const ProjectsGallery: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-[#ECE7DE]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">05 / Spaces</span>
          <h2 className="heading-section mb-4">Objects in Context</h2>
          <p className="body-text">
            Architectural photography showcasing bespoke pieces installed in luxury hospitality, fine-dining, and residential interiors.
          </p>
        </div>

        {/* 12-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white mb-4">
                <Image
                  src={proj.image}
                  alt={`${proj.context} — ${proj.location}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="heading-sub text-[1.15rem]">
                  {proj.context}
                </h3>
                <span className="text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-[#6F6A61]">
                  {proj.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
