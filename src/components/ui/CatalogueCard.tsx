"use client";

import React, { FC } from "react";
import { Button } from "./Button";
import { DownloadIcon, WhatsAppIcon, MailIcon } from "../icons";
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
    <div className="catalogue-card bg-bg-surface p-12 rounded-card border border-white/[0.02] text-center transition-medium hover:border-accent-gold/15 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      <div className="catalogue-icon-box text-accent-gold w-[60px] h-[60px] mx-auto mb-[30px]">
        <DownloadIcon className="w-full h-full" />
      </div>
      <h3 className="catalogue-card-title font-heading text-[1.45rem] font-semibold text-white mb-2">
        {catalogue.title}
      </h3>
      <p className="catalogue-card-info text-[0.85rem] text-text-muted mb-[30px]">
        {catalogue.info}
      </p>
      
      <div className="catalogue-btn-group flex gap-3 justify-center flex-wrap mt-1 select-none">
        <Button
          href={waURL}
          target="_blank"
          variant="whatsapp"
          className="flex-1 min-w-0 py-3.5 px-5 text-[0.8rem]"
          icon={<WhatsAppIcon className="w-[18px] h-[18px]" />}
        >
          Request on WhatsApp
        </Button>
        <Button
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(catalogue.emailSubject)}&body=${encodeURIComponent(catalogue.emailBody)}`}
          onClick={handleEmailClick}
          variant="email-outline"
          className="flex-1 min-w-0 py-3.5 px-5 text-[0.8rem]"
          icon={<MailIcon className="w-[18px] h-[18px]" />}
        >
          Request via Email
        </Button>
      </div>
    </div>
  );
};
