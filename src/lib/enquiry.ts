import { siteConfig } from "@/data/siteConfig";
import type { Product, GalleryItem } from "@/types";

// ==========================================================================
// ENQUIRY URL BUILDERS
// ==========================================================================

/**
 * Build a WhatsApp deep link URL.
 */
export function buildWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.phoneFormatted}?text=${encoded}`;
}

/**
 * Build a Gmail compose URL (opens Gmail in browser — no desktop email client needed).
 */
export function buildGmailComposeURL(
  subject: string,
  body: string,
  to: string = siteConfig.contact.email
): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Build a WhatsApp product enquiry message.
 */
export function buildProductWhatsAppMessage(
  product: Product | GalleryItem,
  imageURL?: string
): string {
  let msg = `Hello Antique Arts Sourcing,\n\nI am interested in learning more about the following product:\n- Product Name: ${product.name}\n- Product Code: ${product.code}`;
  if (imageURL) {
    msg += `\n- Product Image: ${imageURL}`;
  }
  msg += `\n\nPlease share details on pricing, dimensions and custom finishes.\n\nThank you.`;
  return msg;
}

/**
 * Build an email subject for a product enquiry.
 */
export function buildProductEmailSubject(
  product: Product | GalleryItem
): string {
  return `Enquiry - ${product.name} (${product.code})`;
}

/**
 * Build an email body for a product enquiry.
 */
export function buildProductEmailBody(
  product: Product | GalleryItem,
  imageURL?: string
): string {
  let body = `Hello Antique Arts Sourcing,\n\nI am interested in learning more about the following product:\n- Product Name: ${product.name}\n- Product Code: ${product.code}`;
  if (imageURL) {
    body += `\n- Product Image: ${imageURL}`;
  }
  body += `\n\nPlease share details on pricing, dimensions and custom finishes.\n\nThank you.`;
  return body;
}

/**
 * Build a WhatsApp consultation form message.
 */
export function buildConsultationWhatsAppMessage(data: {
  name: string;
  phone: string;
  interest: string;
  message: string;
}): string {
  return `Hello Antique Arts Sourcing,\n\nI would like to request a lighting consultation.\n\nHere are my details:\n- Name: ${data.name}\n- Contact Number: ${data.phone}\n- Category of Interest: ${data.interest}\n- Project Details: ${data.message}\n\nPlease contact me at your earliest convenience.\n\nThank you.`;
}

/**
 * Build a Gmail compose URL for the consultation form.
 */
export function buildConsultationEmailURL(data: {
  name: string;
  phone: string;
  interest: string;
  message: string;
}): string {
  const subject = `Consultation Request - ${data.interest}`;
  const body = `Hello Antique Arts Sourcing,\n\nI would like to request a lighting consultation.\n\nHere are my details:\n- Name: ${data.name}\n- Contact Number: ${data.phone}\n- Category of Interest: ${data.interest}\n- Project Details: ${data.message}\n\nPlease contact me at your earliest convenience.\n\nThank you.`;
  return buildGmailComposeURL(subject, body);
}
