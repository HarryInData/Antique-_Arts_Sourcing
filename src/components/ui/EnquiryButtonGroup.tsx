"use client";

import React, { FC, useEffect, useState } from "react";
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
  className?: string;
  isCardOverlay?: boolean;
}

export const EnquiryButtonGroup: FC<EnquiryButtonGroupProps> = ({
  product,
  className,
  isCardOverlay = false,
}) => {
  const [absImageURL, setAbsImageURL] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Resolve relative path to absolute URL
      const url = new URL(product.image, window.location.origin).href;
      setAbsImageURL(url);
    }
  }, [product.image]);

  const waMessage = buildProductWhatsAppMessage(product, absImageURL);
  const waURL = buildWhatsAppURL(waMessage);

  const emailSubject = buildProductEmailSubject(product);
  const emailBody = buildProductEmailBody(product, absImageURL);
  
  // Custom click handler for Gmail Compose fallback
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const gmailURL = buildGmailComposeURL(emailSubject, emailBody);
    window.open(gmailURL, "_blank");
  };

  if (isCardOverlay) {
    return (
      <div className="flex flex-col gap-2.5 items-center">
        <Button
          href={waURL}
          target="_blank"
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

  // Horizontal version for lightbox/other displays if needed
  return (
    <div className="flex flex-col gap-3 w-full">
      <Button
        href={waURL}
        target="_blank"
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
