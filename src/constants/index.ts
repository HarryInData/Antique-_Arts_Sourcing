// ==========================================================================
// ANTIQUE ARTS SOURCING — APPLICATION CONSTANTS
// ==========================================================================

/** Total number of WebP frames for the hero scroll animation */
export const HERO_FRAME_COUNT = 240;

/** WebP frame filename pattern (zero-padded to 4 digits) */
export const HERO_FRAME_PREFIX = "/frames/frame_";
export const HERO_FRAME_EXTENSION = ".webp";

/** Scroll threshold (px) for navbar background change */
export const NAVBAR_SCROLL_THRESHOLD = 60;

/** Offset (px) added to scroll position for active link detection */
export const ACTIVE_LINK_OFFSET = 150;

/** GSAP ScrollTrigger scrub delay (seconds) for smooth easing */
export const HERO_SCRUB_DELAY = 0.3;

/** Animation durations matching the original CSS design system */
export const ANIMATION = {
  slow: 0.8,
  medium: 0.4,
  fast: 0.2,
  scrollRevealDuration: 1.2,
  scrollRevealEase: [0.25, 1, 0.5, 1] as const,
} as const;

/** Responsive breakpoints matching the original CSS media queries */
export const BREAKPOINTS = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
} as const;

/** Product category options for the B2B RFQ form dropdown */
export const PRODUCT_CATEGORY_OPTIONS = [
  "Antique Collectibles",
  "Luxury Home Décor & Metal Art",
  "Glass & Crystal Artistry",
  "Bespoke Furniture & Joinery",
  "Hotel & Hospitality Accents",
  "Architectural Decorative Lighting",
  "Multiple Categories / Custom Project",
] as const;

/** Buyer type options for the B2B RFQ form dropdown */
export const BUYER_TYPE_OPTIONS = [
  "Importer / Wholesaler",
  "Architect / Interior Designer",
  "Retail Chain / Brand",
  "Hotel / Hospitality Procurement",
  "E-Commerce Brand",
  "Other",
] as const;

/** Order volume options for the B2B RFQ form dropdown */
export const ORDER_VOLUME_OPTIONS = [
  "Sample Order (1–10 pcs)",
  "Small Batch (50–200 pcs)",
  "Medium Volume (200–1,000 pcs)",
  "Large Volume (1,000+ pcs)",
  "Project-Based / Custom",
] as const;

/** Destination country options for the B2B RFQ form dropdown */
export const DESTINATION_COUNTRY_OPTIONS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Germany",
  "France",
  "Netherlands",
  "Italy",
  "Other",
] as const;
