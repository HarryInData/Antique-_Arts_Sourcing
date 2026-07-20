"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ANIMATION } from "@/constants";

const paragraphStyle =
  "text-text-gray font-light text-[1.05rem] leading-[1.8] mb-6";

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
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export const AboutSection: FC = () => {
  return (
    <section id="about" className="section about-section py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-[52%_48%] gap-[60px] items-center">
          
          {/* Left Column - Our Story */}
          <motion.div
            className="about-info"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3"
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-[2.75rem] font-semibold leading-[1.2] tracking-tight mb-4 text-white"
            >
              Timeless Craftsmanship.{" "}
              <span className="text-accent-gold">Trusted Sourcing.</span>
            </motion.h2>

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

            <motion.p variants={fadeUp} className="text-accent-gold font-medium text-[1.15rem] leading-[1.8] mb-6 italic font-heading">
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
              <p className="font-heading text-[1.2rem] font-semibold tracking-[0.08em] text-white">
                Timeless Craftsmanship. <span className="text-accent-gold">Trusted Sourcing.</span> Global Reach.
              </p>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} className="craft-metrics flex gap-10 mt-10">
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.5rem] text-accent-gold font-semibold leading-none mb-1.5">
                  100%
                </span>
                <span className="metric-lbl text-[0.75rem] uppercase tracking-[0.15em] text-text-gray">
                  Handcrafted
                </span>
              </div>
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.5rem] text-accent-gold font-semibold leading-none mb-1.5">
                  50+
                </span>
                <span className="metric-lbl text-[0.75rem] uppercase tracking-[0.15em] text-text-gray">
                  Artisan Partners
                </span>
              </div>
              <div className="metric flex flex-col">
                <span className="metric-num font-heading text-[2.5rem] text-accent-gold font-semibold leading-none mb-1.5">
                  20+
                </span>
                <span className="metric-lbl text-[0.75rem] uppercase tracking-[0.15em] text-text-gray">
                  Countries Served
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Showcase */}
          <motion.div
            className="about-img-box relative rounded-image"
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
            <div className="relative z-[1] w-full aspect-[4/5] rounded-image overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/products/product_6.jpg"
                alt="Handcrafted artisan decorative piece"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
