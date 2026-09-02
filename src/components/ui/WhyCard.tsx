import React, { FC } from "react";
import { CustomIcon } from "../icons";
import type { WhyUsFeature } from "@/types";

interface WhyCardProps {
  feature: WhyUsFeature;
}

export const WhyCard: FC<WhyCardProps> = ({ feature }) => {
  return (
    <div className="why-card group bg-bg-surface p-10 rounded-card border border-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-gold/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(214,168,79,0.06)]">
      <div className="why-icon-box text-accent-gold w-[50px] h-[50px] mb-6 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
        <CustomIcon d={feature.iconPath} className="w-full h-full" />
      </div>
      <h3 className="why-title font-heading text-[1.35rem] font-semibold text-white mb-4">
        {feature.title}
      </h3>
      <p className="why-desc text-text-gray font-light text-[0.95rem] leading-[1.7] mb-0">
        {feature.description}
      </p>
    </div>
  );
};
