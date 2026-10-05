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
    eyebrow: "HERITAGE REPRODUCTIONS · BRASSWARE",
    description:
      "Curated heritage brass sundials, armillary spheres, celestial globes, astrolabes, and vintage timepieces with authentic heirloom character.",
    alternateSlugs: ["antique", "antique-collectibles", "antiques"],
  },
  {
    slug: "tabletop-decor-kitchenware-cutlery",
    name: "Tabletop, Décor, Kitchenware & Cutlery",
    eyebrow: "HOSPITALITY ACCENTS · HAMMERED METAL",
    description:
      "Hand-hammered brass centerpiece urns, artisanal cutlery sets, wine coolers, and decorative tableware engineered for luxury hospitality and considered living.",
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
    eyebrow: "BATHWARE HARDWARE · SOLID CAST BRASS",
    description:
      "Bespoke solid cast brass lotion dispensers, vanity soap dishes, towel trays, and hotel bathroom hardware tailored for luxury suites.",
    alternateSlugs: ["bath", "bathware", "bath-accessory"],
  },
  {
    slug: "storage-organizer",
    name: "Storage & Organizer",
    eyebrow: "DESK & VITRINE · PRECISION BRASS JOINERY",
    description:
      "Glass vitrine display boxes with brass soldering, tiered desk organisers, and velvet-lined presentation caddies.",
    alternateSlugs: ["storage-organiser", "storage", "organizer", "organiser"],
  },
  {
    slug: "festive-collection",
    name: "Festive Collection",
    eyebrow: "CELEBRATORY ACCENTS · ARTISANAL LIGHTING",
    description:
      "Handcrafted brass diya lanterns, hanging bell garlands, and bespoke celebratory accents for international festive seasons.",
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
