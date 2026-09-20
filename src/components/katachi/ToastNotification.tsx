"use client";

import React from "react";
import { Check } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";

export function ToastNotification() {
  const { toastMessage } = useKatachi();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 bg-[#1A1918] text-[#F7F5F0] px-5 py-3.5 shadow-2xl border border-[#3A3833] flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="w-4 h-4 rounded-full bg-[#B86B4D] flex items-center justify-center text-white shrink-0">
        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
      </div>
      <p className="text-xs font-sans font-medium tracking-[0.06em] text-[#F7F5F0]">
        {toastMessage}
      </p>
    </aside>
  );
}
