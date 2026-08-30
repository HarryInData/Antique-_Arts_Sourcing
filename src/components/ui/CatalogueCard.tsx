"use client";

import React, { FC } from "react";
import { buildWhatsAppURL, buildGmailComposeURL } from "@/lib/enquiry";
import { siteConfig } from "@/data/siteConfig";
import type { CatalogueItem } from "@/types";

interface CatalogueCardProps {
  catalogue: CatalogueItem;
}

export const CatalogueCard: FC<CatalogueCardProps> = ({ catalogue }) => {
  const waURL = buildWhatsAppURL(catalogue.whatsappText);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const gmailURL = buildGmailComposeURL(catalogue.emailSubject, catalogue.emailBody);
    window.open(gmailURL, "_blank");
  };

  return (
    <div className="bg-white border border-sand p-8 sm:p-10 text-center transition-all duration-300 hover:border-brass/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between h-full">
      <div>
        <h3 className="font-serif text-[1.15rem] font-light text-ink mb-2 leading-[1.3]">
          {catalogue.title}
        </h3>
        <p className="text-[0.8rem] text-muted mb-8 leading-[1.6] font-light">
          {catalogue.info}
        </p>
      </div>

      <div className="flex gap-3 justify-center flex-wrap mt-1 select-none">
        <a
          href={waURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 py-3 px-4 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-[#25D366] text-white hover:bg-[#1ebe5b] transition-all duration-300 text-center"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(catalogue.emailSubject)}&body=${encodeURIComponent(catalogue.emailBody)}`}
          onClick={handleEmailClick}
          className="flex-1 min-w-0 py-3 px-4 text-[0.65rem] font-semibold tracking-[0.12em] uppercase border border-ink text-ink hover:bg-ink hover:text-ivory transition-all duration-300 text-center"
        >
          Email
        </a>
      </div>
    </div>
  );
};
