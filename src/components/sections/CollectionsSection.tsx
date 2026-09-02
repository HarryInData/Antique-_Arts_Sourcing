"use client";

import React, { FC } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { CollectionCard } from "../ui/CollectionCard";
import { getCategories } from "@/lib/catalog";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface CollectionsSectionProps {
  onFilterSelect?: (filterKey: string) => void;
}

export const CollectionsSection: FC<CollectionsSectionProps> = ({
  onFilterSelect,
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="categories"
      className="section collections-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-secondary"
    >
      <div className="container max-w-container mx-auto px-6">
        <SectionHeader
          tag="Product Categories"
          title="Six Core Product Verticals for International Buyers"
        />

        <div ref={ref} className="collections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {getCategories().filter(c => !c.isEmpty).map((collection, index) => (
            <div
              key={collection.slug}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              )}
            >
              <CollectionCard
                collection={collection}
                onFilterClick={onFilterSelect}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
