"use client";

import React from "react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#191816] text-[#F7F5F0] py-2 px-4 text-center border-b border-[#2C2A26] relative z-40"
    >
      <p className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.24em] uppercase">
        Complimentary delivery on orders over $2,000 · Worldwide White Glove Sourcing
      </p>
    </aside>
  );
}
