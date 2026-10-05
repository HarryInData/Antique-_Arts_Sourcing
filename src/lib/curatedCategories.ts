// ==========================================================================
// ANTIQUE ARTS SOURCING — CURATED CATEGORIES DEFINITIONS
// Master data for categories currently under artisan curation
// ==========================================================================

export interface CuratedCategoryInfo {
  slug: string;
  name: string;
  eyebrow?: string;
  description: string;
  alternateSlugs: string[];
}

export const CURATED_CATEGORIES: CuratedCategoryInfo[] = [
  {
    slug: "antique-collection",
    name: "Antique Collection",
    eyebrow: "HERITAGE CURATION",
    description:
      "We are currently cataloging rare antique collectibles, authentic astrolabes, armillary spheres, and vintage maritime artifacts with master restorers across northern India.",
    alternateSlugs: ["antique", "antique-collectibles", "antiques"],
  },
  {
    slug: "tabletop-decor-kitchenware-cutlery",
    name: "Tabletop, Décor, Kitchenware & Cutlery",
    eyebrow: "HOSPITALITY & LIVING",
    description:
      "Our ateliers are curating an exclusive B2B line of hand-forged brass cutlery, hammered centerpiece bowls, wine urns, and artisanal tableware for luxury dining and hospitality projects.",
    alternateSlugs: [
      "tabletop-decor",
      "kitchenware-cutlery",
      "tabletop",
      "kitchenware",
      "tabletop-kitchenware",
      "tabletop-decor-kitchenware",
      "tabletop-and-decor",
      "kitchenware-and-cutlery",
    ],
  },
  {
    slug: "bath-accessories",
    name: "Bath Accessories",
    eyebrow: "BESPOKE HARDWARE",
    description:
      "We are crafting solid cast brass, hand-beaten copper, and ribbed glass bathroom accessory suites tailored for boutique hotels and luxury residential residences.",
    alternateSlugs: ["bath", "bathware", "bath-accessory"],
  },
  {
    slug: "storage-organizer",
    name: "Storage & Organizer",
    eyebrow: "ARTISANAL ACCENTS",
    description:
      "Our craftsmen are finalizing brass vitrines, heirloom jewelry chests, and faceted glass storage cases designed for discerning global department stores and boutiques.",
    alternateSlugs: [
      "storage-organiser",
      "storage",
      "organizer",
      "organiser",
      "storage-and-organizer",
      "storage-and-organiser",
    ],
  },
  {
    slug: "festive-collection",
    name: "Festive Collection",
    eyebrow: "SEASONAL HEIRLOOMS",
    description:
      "Handblown mercury glass ornaments, hammered brass diya lamps, and celestial festive décor are being prepared for international seasonal sourcing and trade buyers.",
    alternateSlugs: ["festive", "festive-decor"],
  },
];

/**
 * Check if a given slug or identifier matches any of the curated categories
 */
export function isCuratedCategory(slug: string): boolean {
  if (!slug) return false;
  const normalized = slug.toLowerCase().trim();
  return CURATED_CATEGORIES.some(
    (c) => c.slug === normalized || c.alternateSlugs.includes(normalized)
  );
}

/**
 * Resolve category information from any slug or alias
 */
export function resolveCuratedCategory(slug: string): CuratedCategoryInfo | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  const found = CURATED_CATEGORIES.find(
    (c) => c.slug === normalized || c.alternateSlugs.includes(normalized)
  );
  return found || null;
}

/**
 * Resolve display name for any category slug (with fallback to title case)
 */
export function resolveCategoryDisplayName(slug: string): string {
  const curated = resolveCuratedCategory(slug);
  if (curated) return curated.name;

  // Title-case fallback if arbitrary slug
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Static params for Next.js dynamic routes
 */
export function getCuratedCategoryStaticParams() {
  const params: { categorySlug: string }[] = [];
  for (const cat of CURATED_CATEGORIES) {
    params.push({ categorySlug: cat.slug });
    for (const alt of cat.alternateSlugs) {
      params.push({ categorySlug: alt });
    }
  }
  return params;
}
