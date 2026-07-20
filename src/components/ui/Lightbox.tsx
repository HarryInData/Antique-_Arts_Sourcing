"use client";

import React, { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnquiryButtonGroup } from "./EnquiryButtonGroup";
import type { GalleryItem } from "@/types";

interface LightboxProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: FC<LightboxProps> = ({
  isOpen,
  activeItem,
  onClose,
}) => {
  // Listen for Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!activeItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/95 z-[2000] flex justify-center items-center backdrop-blur-sm"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-[30px] right-10 text-text-gray text-[2.5rem] font-light hover:text-white transition-fast focus:outline-none"
            aria-label="Close Lightbox"
          >
            &times;
          </button>

          {/* Content Modal Box */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} // Prevent close on modal body click
            className="lightbox-content-box flex flex-col md:flex-row max-w-[900px] w-[90%] max-h-[90vh] md:max-h-[70vh] bg-bg-surface rounded-card overflow-hidden border border-white/5 shadow-2xl overflow-y-auto md:overflow-y-visible"
          >
            {/* Left side: Image */}
            <div className="w-full md:w-3/5 h-[45vh] md:h-auto relative min-h-[300px]">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-2/5 p-10 flex flex-col justify-center bg-bg-surface">
              <span className="lightbox-code text-[0.8rem] text-accent-gold font-semibold tracking-[0.1em] mb-2 uppercase font-body">
                {activeItem.code}
              </span>
              <h3 className="lightbox-name font-heading text-[1.75rem] font-semibold text-white mb-[30px] leading-[1.3]">
                {activeItem.name}
              </h3>
              <EnquiryButtonGroup product={activeItem} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
