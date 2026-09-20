"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  centered = false,
  className,
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-[50px] flex flex-col transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        centered ? "text-center items-center" : "items-start",
        className
      )}
    >
      <span className="block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">
        {tag}
      </span>
      <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] font-semibold leading-[1.2] tracking-tight mb-4 text-white">
        {title}
      </h2>
      <div
        className={cn(
          "h-[2px] bg-accent-gold mb-8 transition-all duration-700 delay-200 ease-out",
          isVisible ? "w-[60px]" : "w-0",
          centered ? "mx-auto" : "mr-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-text-gray font-light text-[1.1rem] leading-[1.8] mb-6 transition-all duration-700 delay-300 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            centered ? "max-w-xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
