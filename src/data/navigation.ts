import type { NavLink } from "@/types";

// ==========================================================================
// NAVIGATION DATA — Luxury B2B Sourcing House
// ==========================================================================

export const mainNavLinks: NavLink[] = [
  { label: "Collection", href: "/collections" },
  { label: "Capabilities", href: "/about" },
  { label: "Projects", href: "/gallery" },
  { label: "About", href: "/about" },
];

export const footerNavLinks: NavLink[] = [
  { label: "Collection", href: "/collections" },
  { label: "Capabilities", href: "/about" },
  { label: "Projects", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerBusinessLinks: NavLink[] = [
  { label: "B2B Sourcing", href: "/contact" },
  { label: "OEM / ODM", href: "/contact" },
  { label: "Custom Manufacturing", href: "/contact" },
  { label: "Global Export", href: "/contact" },
];

// Keep old exports for backward compatibility during migration
export const footerShowroomLinks = footerNavLinks;
export const footerExhibitionLinks = footerBusinessLinks;
