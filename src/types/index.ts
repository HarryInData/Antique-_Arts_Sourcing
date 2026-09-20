// ==========================================================================
// ANTIQUE ARTS SOURCING — TYPE DEFINITIONS
// ==========================================================================

export interface ProductSEO {
  title?: string;
  description?: string;
}

export interface Product {
  id?: string;
  code?: string;
  sku?: string;
  category: string;
  categorySlug?: string;
  name: string;
  slug?: string;
  material?: string;
  finish?: string;
  dimensions?: string;
  dimension?: string;
  color?: string;
  weight?: number | null;
  description?: string;
  shortDescription?: string;
  stock?: number | string | null;
  price?: number | null;
  currency?: string;
  image: string;
  images?: string[];
  fallbackImage?: string;
  gallery?: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  isActive?: boolean;
  tags?: string[];
  seo?: ProductSEO;
}

export interface Category {
  slug: string;
  name: string;
  count: number;
  isEmpty: boolean;
  coverImage?: string;
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
