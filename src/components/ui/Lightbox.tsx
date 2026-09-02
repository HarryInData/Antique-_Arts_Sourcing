"use client";

import type { FC } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { EnquiryButtonGroup } from "./EnquiryButtonGroup";
import type { GalleryItem } from "@/types";

interface LightboxProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: FC<LightboxProps> = ({ isOpen, activeItem, onClose }) => {
  // Keyboard close — this is a legitimate external-system effect (DOM event listener)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // CSS-driven visibility via opacity/pointer-events — no mounted state needed
  if (!activeItem) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-[#0A0A0A]/95 z-[2000] flex justify-center items-center backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-[30px] right-10 text-text-gray text-[2.5rem] font-light hover:text-white transition-fast focus:outline-none"
        aria-label="Close Lightbox"
      >
        &times;
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`lightbox-content-box flex flex-col md:flex-row max-w-[900px] w-[90%] max-h-[90vh] md:max-h-[70vh] bg-bg-surface rounded-card overflow-hidden border border-white/5 shadow-2xl overflow-y-auto md:overflow-y-visible transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="w-full md:w-3/5 h-[45vh] md:h-auto relative min-h-[300px]">
          <Image
            src={activeItem.image || "/images/placeholder.webp"}
            alt={activeItem.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        <div className="w-full md:w-2/5 p-10 flex flex-col justify-center bg-bg-surface">
          <span className="lightbox-code text-[0.8rem] text-accent-gold font-semibold tracking-[0.1em] mb-2 uppercase font-body">
            {activeItem.code}
          </span>
          <h3 className="lightbox-name font-heading text-[1.75rem] font-semibold text-white mb-[30px] leading-[1.3]">
            {activeItem.name}
          </h3>
          <EnquiryButtonGroup product={activeItem} />
        </div>
      </div>
    </div>
  );
};
