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

/** Interest options for the consultation form dropdown */
export const INTEREST_OPTIONS = [
  "Pendant Lighting",
  "Wire Mesh Lamps",
  "Table Lamps",
  "Fruit Baskets & Accessories",
  "Custom Architectural Design",
] as const;
