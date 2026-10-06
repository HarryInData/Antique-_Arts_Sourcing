// ==========================================================================
// ANTIQUE ARTS SOURCING — FROZEN CATEGORIES ALLOWLIST
// Strict six-category configuration for surgical freeze
// ==========================================================================

export interface FrozenCategoryConfig {
  displayName: string;
  slug: string;
  filterKey: string;
}

/**
 * Exactly and ONLY the six specified frozen categories
 */
export const FROZEN_CATEGORIES: readonly FrozenCategoryConfig[] = [
  {
    displayName: "Antique Collection",
    slug: "antique-collection",
    filterKey: "antique",
  },
  {
    displayName: "Tabletop and Décor",
    slug: "tabletop-decor",
    filterKey: "tabletop",
  },
  {
    displayName: "Kitchenware and Cutlery",
    slug: "kitchenware-cutlery",
    filterKey: "kitchenware",
  },
  {
    displayName: "Bath Accessories",
    slug: "bath-accessories",
    filterKey: "bath",
  },
  {
    displayName: "Storage and Organizer",
    slug: "storage-organiser",
    filterKey: "storage",
  },
  {
    displayName: "Festive Collection",
    slug: "festive-collection",
    filterKey: "festive",
  },
] as const;

const FROZEN_SLUGS = new Set<string>(FROZEN_CATEGORIES.map((c) => c.slug));
const FROZEN_FILTER_KEYS = new Set<string>(FROZEN_CATEGORIES.map((c) => c.filterKey));

/**
 * Check if a route slug corresponds to one of the six frozen categories
 */
export function isFrozenSlug(slug: string): boolean {
  if (!slug) return false;
  return FROZEN_SLUGS.has(slug.toLowerCase().trim());
}

/**
 * Check if a gallery filterKey corresponds to one of the six frozen categories
 */
export function isFrozenFilterKey(key: string): boolean {
  if (!key) return false;
  return FROZEN_FILTER_KEYS.has(key.toLowerCase().trim());
}

/**
 * Resolve frozen category config by slug
 */
export function getFrozenCategoryBySlug(slug: string): FrozenCategoryConfig | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return FROZEN_CATEGORIES.find((c) => c.slug === normalized);
}

/**
 * Resolve frozen category config by filterKey
 */
export function getFrozenCategoryByFilterKey(key: string): FrozenCategoryConfig | undefined {
  if (!key) return undefined;
  const normalized = key.toLowerCase().trim();
  return FROZEN_CATEGORIES.find((c) => c.filterKey === normalized);
}
