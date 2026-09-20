import type { Product } from "@/types";

// ==========================================================================
// FEATURED PRODUCTS DATA
// ==========================================================================

export const featuredProducts: Product[] = [
  {
    code: "AQ-01",
    name: "Kelvin & Hughes London 1917 Sextant",
    category: "Antique Collectibles",
    image: "/products/antique-collectibles/kelvin-hughes-1917-brass-sextant.webp",
    fallbackImage: "/products/antique-collectibles/fallback.webp",
  },
  {
    code: "GC-01",
    name: "Hand-Blown Marbled Amethyst Vase",
    category: "Glass & Crystal Artistry",
    image: "/products/glass-crystal/handblown-marbled-amethyst-vase.webp",
    fallbackImage: "/products/glass-crystal/fallback.webp",
  },
  {
    code: "DL-01",
    name: "Mesh Pear Tealight Holder",
    category: "Desk Lights & Decor",
    image: "/products/decorative-lighting/mesh-pear-tealight-holder-copper.webp",
    fallbackImage: "/products/decorative-lighting/fallback.webp",
  },
  {
    code: "LP-01",
    name: "Tiered Mesh Bell Pendant Chandelier",
    category: "Pendant Lamps",
    image: "/products/decorative-lighting/tiered-mesh-bell-pendant-chandelier.webp",
    fallbackImage: "/products/decorative-lighting/fallback.webp",
  },
];
