import type { NavLink } from "@/types";

// ==========================================================================
// NAVIGATION DATA — Antique Arts Sourcing Portfolio
// ==========================================================================

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collections" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collections" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerBusinessLinks: NavLink[] = [
  { label: "B2B Sourcing Services", href: "/services#product-sourcing" },
  { label: "OEM / ODM Manufacturing", href: "/services#oem-manufacturing" },
  { label: "AQL Quality Inspection", href: "/services#quality-inspection" },
  { label: "Export Logistics & Crating", href: "/services#export-logistics" },
  { label: "Request a Quote", href: "/contact" },
];

export const footerShowroomLinks = footerNavLinks;
export const footerExhibitionLinks = footerBusinessLinks;
