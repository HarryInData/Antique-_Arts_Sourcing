"use client";

import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  progress: number;
  isLoaded: boolean;
}

export const Preloader: FC<PreloaderProps> = ({ progress, isLoaded }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800); // 600ms original delay + safety cushion
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 bg-[#0F0F0F] flex items-center justify-center z-[9999]"
        >
          <div className="text-center w-[90%] max-w-[400px]">
            <h1 className="brand-text text-3xl tracking-[0.42em] mb-[30px] animate-[brandPulse_2.5s_infinite_ease-in-out]">
              ANTIQUE ARTS SOURCING
            </h1>
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-[15px]">
              <motion.div
                className="h-full bg-accent-gold shadow-[0_0_10px_#D6A84F]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
            <p className="text-[0.75rem] tracking-[0.1em] text-text-muted uppercase font-body">
              Preloading luxury assets: {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
