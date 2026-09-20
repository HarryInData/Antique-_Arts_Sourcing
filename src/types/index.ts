// ==========================================================================
// ANTIQUE ARTS SOURCING — TYPE DEFINITIONS
// ==========================================================================

export interface Product {
  code: string;
  name: string;
  category: string;
  image: string;
  images?: string[];
  fallbackImage?: string;
  material?: string;
  finish?: string;
  dimension?: string;
  stock?: string;
}

export interface Collection {
  title: string;
  description: string;
  image: string;
  filterKey: GalleryCategory;
}

export interface GalleryItem {
  code: string;
  name: string;
  category: GalleryCategory;
  categoryLabel?: string;
  image: string;
  images?: string[];
  fallbackImage?: string;
  material?: string;
  finish?: string;
  dimension?: string;
  stock?: string;
}

export type GalleryCategory =
  | "all"
  | "lamps"
  | "glass-vases"
  | "glass-votives"
  | "nautical"
  | "glass-knobs"
  | "christmas-ornaments"
  | "antique"
  | "tabletop"
  | "kitchenware"
  | "bath"
  | "storage"
  | "festive"
  | "antique-collectibles"
  | "desk-lights"
  | "decorative-lighting"
  | "home-decor"
  | "luxury-home-decor"
  | "glass-crystal"
  | "furniture"
  | "furniture-accessories"
  | "hospitality"
  | "hotel-decor";

export interface GalleryFilter {
  label: string;
  value: GalleryCategory;
}

export interface CatalogueItem {
  title: string;
  info: string;
  whatsappText: string;
  emailSubject: string;
  emailBody: string;
}

export interface WhyUsFeature {
  iconPath: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconPath: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  contact: ContactInfo;
  socials: SocialLink[];
}

export interface LightboxState {
  isOpen: boolean;
  activeItem: GalleryItem | null;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  interest: string;
  message: string;
}
