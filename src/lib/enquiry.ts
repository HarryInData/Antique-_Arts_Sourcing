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
 * Build a WhatsApp B2B RFQ message.
 */
export function buildConsultationWhatsAppMessage(data: {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  buyerType: string;
  productCategory: string;
  orderVolume: string;
  destinationCountry: string;
  message: string;
}): string {
  return `Hello Antique Arts Sourcing,\n\nI would like to submit a B2B export enquiry.\n\nCompany Details:\n- Company: ${data.companyName}\n- Contact Person: ${data.contactPerson}\n- Email: ${data.email}\n- Phone/WhatsApp: ${data.phone}\n\nRequirement Details:\n- Buyer Type: ${data.buyerType}\n- Product Category: ${data.productCategory}\n- Estimated Order Volume: ${data.orderVolume}\n- Destination Country: ${data.destinationCountry}\n\nProject Brief:\n${data.message}\n\nPlease share your export catalogue and pricing.\n\nThank you.`;
}

/**
 * Build a Gmail compose URL for the B2B RFQ form.
 */
export function buildConsultationEmailURL(data: {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  buyerType: string;
  productCategory: string;
  orderVolume: string;
  destinationCountry: string;
  message: string;
}): string {
  const subject = `B2B Export Enquiry - ${data.companyName} - ${data.productCategory}`;
  const body = `Hello Antique Arts Sourcing,\n\nI would like to submit a B2B export enquiry.\n\nCompany Details:\n- Company: ${data.companyName}\n- Contact Person: ${data.contactPerson}\n- Email: ${data.email}\n- Phone/WhatsApp: ${data.phone}\n\nRequirement Details:\n- Buyer Type: ${data.buyerType}\n- Product Category: ${data.productCategory}\n- Estimated Order Volume: ${data.orderVolume}\n- Destination Country: ${data.destinationCountry}\n\nProject Brief:\n${data.message}\n\nPlease share your export catalogue and pricing.\n\nThank you.`;
  return buildGmailComposeURL(subject, body);
}

