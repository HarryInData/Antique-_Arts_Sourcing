"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
};

const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  centered = false,
  className,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn(
        "mb-[50px] flex flex-col",
        centered ? "text-center items-center" : "items-start",
        className
      )}
    >
      <motion.span
        variants={fadeUp}
        className="block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-heading text-[2.75rem] font-semibold leading-[1.2] tracking-tight mb-4 text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={lineReveal}
        className={cn(
          "w-[60px] h-[2px] bg-accent-gold mb-8",
          centered ? "mx-auto" : "mr-auto"
        )}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-text-gray font-light text-[1.1rem] leading-[1.8] mb-6",
            centered ? "max-w-xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
