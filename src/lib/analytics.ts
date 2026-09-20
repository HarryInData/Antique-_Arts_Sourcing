// Google Analytics 4 Event Dispatcher for Antique Arts Sourcing
// Measurement ID: G-JVMJ6X5FC

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetIdOrEventName: string | Date,
      eventParams?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-JVMJ6X5FCM";

/**
 * Dispatch a custom GA4 event if gtag is available
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      send_to: GA_MEASUREMENT_ID,
      ...params,
    });
  }
}

/**
 * Track B2B RFQ Submissions
 */
export function trackRFQSubmission(data: {
  category?: string;
  itemCode?: string;
  buyerType?: string;
  source?: string;
}) {
  trackEvent("rfq_submission", {
    event_category: "B2B Conversion",
    event_label: data.itemCode || data.category || "General RFQ",
    buyer_type: data.buyerType,
    item_code: data.itemCode,
    category: data.category,
    source: data.source || "rfq_modal",
  });
}

/**
 * Track Contact Form Submissions
 */
export function trackContactFormSubmission(data: {
  inquiryType?: string;
  subject?: string;
}) {
  trackEvent("contact_form_submission", {
    event_category: "B2B Lead",
    event_label: data.inquiryType || data.subject || "Contact Form",
    inquiry_type: data.inquiryType,
  });
}

/**
 * Track WhatsApp Inquiries
 */
export function trackWhatsAppClick(params: {
  location?: string;
  itemCode?: string;
  itemName?: string;
}) {
  trackEvent("whatsapp_click", {
    event_category: "Engagement",
    event_label: params.itemCode ? `WhatsApp: ${params.itemCode}` : "WhatsApp Chat",
    placement: params.location || "general",
    item_code: params.itemCode,
    item_name: params.itemName,
  });
}

/**
 * Track Direct Email Inquiries
 */
export function trackEmailClick(params: {
  location?: string;
  subject?: string;
}) {
  trackEvent("email_click", {
    event_category: "Engagement",
    event_label: params.subject || "Direct Email",
    placement: params.location || "general",
  });
}

/**
 * Track Direct Phone / Call Clicks
 */
export function trackPhoneClick(location?: string) {
  trackEvent("phone_click", {
    event_category: "Engagement",
    event_label: "+91-75037-95101",
    placement: location || "header",
  });
}

/**
 * Track High-Value CTA Clicks (e.g., Download Catalogue, Request Sourcing Quote)
 */
export function trackCTAClick(label: string, location: string) {
  trackEvent("cta_click", {
    event_category: "CTA Navigation",
    event_label: label,
    cta_location: location,
  });
}
