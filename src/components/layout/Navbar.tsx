"use client";

import React, { FC } from "react";
import { PillNav } from "@/components/ui/PillNav";
import { mainNavLinks } from "@/data/navigation";

export const Navbar: FC = () => {
  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-[1000] px-3 sm:px-6 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full flex justify-center">
        <PillNav
          logo="/images/branding/antique-arts-sourcing-emblem.png"
          logoAlt="Antique Arts Sourcing"
          items={mainNavLinks}
          baseColor="#181816"
          pillColor="#F4F1EA"
          pillTextColor="#181816"
          hoveredPillTextColor="#FFFFFF"
        />
      </div>
    </header>
  );
};
