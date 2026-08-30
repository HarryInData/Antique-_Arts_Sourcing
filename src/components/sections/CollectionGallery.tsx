"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const categories = [
  {
    num: "01",
    title: "Antique Collectibles",
    desc: "Heritage brass compasses, telescopes, sundials, and chess sets for hotel lobby displays and luxury retail.",
    image: "/images/products/antique/heritage-brass-compass-collection.jpg",
    href: "/collections",
  },
  {
    num: "02",
    title: "Luxury Metalwork",
    desc: "Hand-forged wall sculptures, brass candle holders, copper vases, and decorative trays for design showrooms.",
    image: "/images/products/desk_lights/mesh-pear-tealight-holder-copper.jpg",
    href: "/collections",
  },
  {
    num: "03",
    title: "Glass & Crystal",
    desc: "Hand-blown coloured glass vases, crystal bowls, and mosaic lanterns from Firozabad's artisan clusters.",
    image: "/images/products/antique/rosewood-chess-set-brass-inlay.jpg",
    href: "/collections",
  },
  {
    num: "04",
    title: "Bespoke Furniture",
    desc: "Console tables, accent chairs, and bar cabinets in sheesham, mango wood, and reclaimed timber.",
    image: "/images/products/antique/vintage-brass-spyglass-telescope.jpg",
    href: "/collections",
  },
  {
    num: "05",
    title: "Lighting",
    desc: "Wire mesh pendants, industrial chandeliers, and lantern sconces — handcrafted architectural lighting.",
    image: "/images/products/lamps/tiered-mesh-bell-pendant-chandelier.jpg",
    href: "/collections",
  },
  {
    num: "06",
    title: "Hospitality Accents",
    desc: "Lobby sculptures, room accent pieces, and restaurant décor for procurement managers and FF&E specifiers.",
    image: "/images/products/lamps/brass-layered-cage-pendant-light.jpg",
    href: "/collections",
  },
];

export const CollectionGallery: FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="section-pad bg-white border-t border-b border-[rgba(24,24,22,0.06)]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-main reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Consistent Standard Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">01 / The Collection</span>
          <h2 className="heading-section mb-4">The Collection</h2>
          <p className="body-text">
            Objects shaped by Indian craftsmanship and curated for contemporary architectural spaces.
          </p>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.num}
              href={cat.href}
              className={`group flex flex-col no-underline ${
                i === 0 || i === 5 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              {/* Image Box with Fixed Aspect Ratio */}
              <div className={`relative overflow-hidden bg-[#ECE7DE] mb-5 ${
                i === 0 || i === 5 ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/5]"
              }`}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  sizes={i === 0 || i === 5 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>

              {/* Text Below Image */}
              <div className="flex flex-col">
                <span className="text-[0.6875rem] font-sans font-medium tracking-[0.2em] uppercase text-[#9A7B50] mb-1">
                  {cat.num}
                </span>
                <h3 className="heading-sub text-[1.25rem] sm:text-[1.4rem] mb-2 group-hover:text-[#9A7B50] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-[0.875rem] font-sans font-light text-[#6F6A61] leading-[1.6] max-w-[420px]">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
