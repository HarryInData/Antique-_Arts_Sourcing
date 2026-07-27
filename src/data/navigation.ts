import type { NavLink } from "@/types";

// ==========================================================================
// NAVIGATION DATA
// ==========================================================================

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];

export const footerShowroomLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Featured Items", href: "/collections" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
];

export const footerExhibitionLinks: NavLink[] = [
  { label: "Interactive Gallery", href: "/gallery" },
  { label: "Product Catalogues", href: "/catalogue" },
  { label: "Contact Desk", href: "/contact" },
];
