"use client";

import React, { FC } from "react";
import { Button } from "./Button";
import { WhatsAppIcon, MailIcon } from "../icons";
import {
  buildWhatsAppURL,
  buildGmailComposeURL,
  buildProductWhatsAppMessage,
  buildProductEmailSubject,
  buildProductEmailBody,
} from "@/lib/enquiry";
import { siteConfig } from "@/data/siteConfig";
import type { Product, GalleryItem } from "@/types";

interface EnquiryButtonGroupProps {
  product: Product | GalleryItem;
  isCardOverlay?: boolean;
}

export const EnquiryButtonGroup: FC<EnquiryButtonGroupProps> = ({
  product,
  isCardOverlay = false,
}) => {
  // Derive absolute image URL at click-time via the click handler — no useEffect needed.
  const getAbsImageURL = () =>
    typeof window !== "undefined"
      ? new URL(product.image, window.location.origin).href
      : product.image;

  const waMessage = buildProductWhatsAppMessage(product);
  const waURL = buildWhatsAppURL(waMessage);
  const emailSubject = buildProductEmailSubject(product);
  const emailBody = buildProductEmailBody(product);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const absImg = getAbsImageURL();
    const body = buildProductEmailBody(product, absImg);
    const gmailURL = buildGmailComposeURL(emailSubject, body);
    window.open(gmailURL, "_blank");
  };

  const handleWaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const absImg = getAbsImageURL();
    const msg = buildProductWhatsAppMessage(product, absImg);
    window.open(buildWhatsAppURL(msg), "_blank");
  };

  if (isCardOverlay) {
    return (
      <div className="flex flex-col gap-2.5 items-center">
        <Button
          href={waURL}
          target="_blank"
          onClick={handleWaClick}
          variant="card-enquiry-wa"
          icon={<WhatsAppIcon className="w-[18px] h-[18px]" />}
        >
          WhatsApp
        </Button>
        <Button
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
          onClick={handleEmailClick}
          variant="card-enquiry-email"
          icon={<MailIcon className="w-[18px] h-[18px]" />}
        >
          Email
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <Button
        href={waURL}
        target="_blank"
        onClick={handleWaClick}
        variant="whatsapp"
        icon={<WhatsAppIcon className="w-[18px] h-[18px]" />}
        isBlock
      >
        WhatsApp
      </Button>
      <Button
        href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
        onClick={handleEmailClick}
        variant="email-outline"
        icon={<MailIcon className="w-[18px] h-[18px]" />}
        isBlock
      >
        Email
      </Button>
    </div>
  );
};
