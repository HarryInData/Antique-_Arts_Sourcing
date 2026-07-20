import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <div className={cn("absolute bottom-10 left-[8%] flex items-center gap-3 z-[3] pointer-events-none transition-opacity duration-300", className)}>
      <span className="text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
        Scroll to reveal craftsmanship
      </span>
      <div className="w-[18px] h-[28px] border-[1.5px] border-text-muted rounded-[12px] relative">
        <div className="w-[2px] h-[6px] bg-accent-gold absolute top-1.5 left-1/2 -translate-x-1/2 rounded-[99px] animate-[scrollMouseAnim_1.8s_infinite_ease-in-out]" />
      </div>
    </div>
  );
};
