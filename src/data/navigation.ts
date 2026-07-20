import type { NavLink } from "@/types";

// ==========================================================================
// NAVIGATION DATA
// ==========================================================================

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#hero-section" },
  { label: "Featured", href: "#featured" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Contact", href: "#contact" },
];

export const footerShowroomLinks: NavLink[] = [
  { label: "Home", href: "#hero-section" },
  { label: "Featured Items", href: "#featured" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
];

export const footerExhibitionLinks: NavLink[] = [
  { label: "Interactive Gallery", href: "#gallery" },
  { label: "Product Catalogues", href: "#catalogue" },
  { label: "The Quality Standard", href: "#why-us" },
  { label: "Contact Desk", href: "#contact" },
];
