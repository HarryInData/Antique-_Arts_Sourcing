import type { NavLink } from "@/types";

// ==========================================================================
// NAVIGATION DATA — B2B Export Portal
// ==========================================================================

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Product Categories", href: "/collections" },
  { label: "About Us", href: "/about" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Export Catalogue", href: "/catalogue" },
  { label: "Request Quote", href: "/contact" },
];

export const footerShowroomLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Product Categories", href: "/collections" },
  { label: "Export Services", href: "/about" },
  { label: "About Us", href: "/about" },
];

export const footerExhibitionLinks: NavLink[] = [
  { label: "Project Gallery", href: "/gallery" },
  { label: "Export Catalogues", href: "/catalogue" },
  { label: "Request a Quote", href: "/contact" },
];
