"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ANIMATION } from "@/constants";

const paragraphStyle =
  "text-text-gray font-light text-[1.125rem] leading-[1.85] mb-6";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
};

export const AboutSection: FC = () => {
  return (
    <section id="about" className="section about-section py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-[52%_48%] gap-[40px] lg:gap-[60px] items-start">
          
          {/* Left Column - Our Story Text */}
          <motion.div
            className="about-info"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            {/* Main Heading - Our Story */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight mb-3 text-white"
            >
              Our <span className="text-accent-gold">Story</span>
            </motion.h2>

            {/* Subtitle - Timeless Craftsmanship. Trusted Sourcing. */}
            <motion.p
              variants={fadeUp}
              className="font-heading text-[1.35rem] lg:text-[1.5rem] font-medium text-text-gray tracking-wide mb-6"
            >
              Timeless Craftsmanship. <span className="text-accent-gold">Trusted Sourcing.</span>
            </motion.p>

            <motion.div variants={fadeUp} className="w-[60px] h-[2px] bg-accent-gold mb-8" />

            <motion.p variants={fadeUp} className={paragraphStyle}>
              Every handcrafted piece carries more than beauty—it carries history, culture, and the hands of the artisans who created it.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              <strong className="text-white font-medium">Antique Arts Sourcing</strong> was founded with a simple vision: to connect timeless craftsmanship with the modern world.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              Across generations, skilled artisans have preserved traditional techniques in metalwork, wood carving, stone sculpture, decorative accessories, and luxury home décor. Yet many of these exceptional creations never reach the global audience they deserve.
            </motion.p>

            <motion.p variants={fadeUp} className="text-accent-gold font-medium text-[1.25rem] leading-[1.8] mb-7 italic font-heading">
              We bridge that gap.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              We partner with trusted manufacturers, workshops, and artisan communities to curate distinctive collections of premium decorative pieces, architectural accents, heritage-inspired designs, and bespoke creations for international buyers. Every product is carefully sourced with attention to quality, authenticity, craftsmanship, and ethical business practices.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              To us, sourcing is more than procurement—it&apos;s the art of discovering remarkable craftsmanship and delivering it with reliability and transparency.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              Our mission is to become a trusted global sourcing partner for designers, retailers, wholesalers, hospitality projects, and luxury brands seeking timeless décor with uncompromising quality.
            </motion.p>

            <motion.p variants={fadeUp} className={paragraphStyle}>
              At <strong className="text-white font-medium">Antique Arts Sourcing</strong>, we don&apos;t simply export products—we build lasting partnerships and bring enduring craftsmanship from skilled hands to inspiring spaces around the world.
            </motion.p>

            {/* Tagline */}
            <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-white/[0.06]">
              <p className="font-heading text-[1.25rem] lg:text-[1.35rem] font-semibold tracking-[0.08em] text-white">
                Timeless Craftsmanship. <span className="text-accent-gold">Trusted Sourcing.</span> Global Reach.
              </p>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} className="craft-metrics flex gap-10 mt-10">
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.75rem] text-accent-gold font-semibold leading-none mb-1.5">
                  100%
                </span>
                <span className="metric-lbl text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                  Handcrafted
                </span>
              </div>
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.75rem] text-accent-gold font-semibold leading-none mb-1.5">
                  50+
                </span>
                <span className="metric-lbl text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                  Artisan Partners
                </span>
              </div>
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.75rem] text-accent-gold font-semibold leading-none mb-1.5">
                  20+
                </span>
                <span className="metric-lbl text-[0.8rem] uppercase tracking-[0.15em] text-text-gray font-medium">
                  Countries Served
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Founders Image (sticky, follows scroll) */}
          <motion.div
            className="about-img-box relative lg:sticky lg:top-[100px] lg:self-start w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: ANIMATION.scrollRevealDuration,
              ease: ANIMATION.scrollRevealEase,
            }}
          >
            {/* Ambient background glow */}
            <div className="about-glow absolute -inset-[10%] bg-[radial-gradient(circle,rgba(255,211,122,0.15)_0%,rgba(15,15,15,0)_70%)] pointer-events-none z-0" />
            
            {/* Logo + Brand name above image */}
            <div className="relative z-[1] flex items-center gap-3.5 mb-4">
              <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden border border-accent-gold/40 shadow-sm">
                <Image
                  src="/images/branding/antique-arts-sourcing-logo.jpeg"
                  alt="Antique Arts Sourcing logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <p className="font-heading text-white text-[1.05rem] font-bold tracking-[0.12em] uppercase">
                Antique Arts Sourcing
              </p>
            </div>

            {/* Image container — responsive height on mobile, calc on desktop */}
            <div className="relative z-[1] w-full min-h-[380px] h-[450px] lg:h-[calc(100vh-260px)] rounded-image overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-black">
              <Image
                src="/images/branding/antique-arts-sourcing-founders-firozabad.jpg"
                alt="Antique Arts Sourcing founding team — three founders standing together"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain object-center"
              />
              {/* Subtle gradient overlay at the bottom for the caption */}
              <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[2]" />
              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 z-[3] p-6 lg:p-8">
                <p className="font-heading text-white text-[1.35rem] font-semibold tracking-[0.08em]">
                  Our Founders
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
