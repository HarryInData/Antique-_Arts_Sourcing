import type { GalleryItem, GalleryFilter } from "@/types";

// ==========================================================================
// GALLERY DATA
// ==========================================================================

export const galleryFilters: GalleryFilter[] = [
  { label: "All Items", value: "all" },
  { label: "Antique Collectibles", value: "antique" },
  { label: "Desk Lights & Decor", value: "desk-lights" },
  { label: "Pendant Lamps", value: "lamps" },
];

export const galleryItems: GalleryItem[] = [
  // ── Antique Collectibles ──────────────────────────────────────────────
  {
    code: "AQ-01",
    name: "Heritage Brass Desk Clock Trio",
    category: "antique",
    image: "/images/products/AAS-0001.webp",
  },
  {
    code: "AQ-02",
    name: "Heritage Brass Compass Collection",
    category: "antique",
    image: "/images/products/AAS-0002.webp",
  },
  {
    code: "AQ-03",
    name: "Rosewood Chess Set with Case",
    category: "antique",
    image: "/images/products/AAS-0003.webp",
  },
  {
    code: "AQ-04",
    name: "Rosewood Playing Card Box",
    category: "antique",
    image: "/images/products/AAS-0004.webp",
  },
  {
    code: "AQ-05",
    name: "Vintage Brass Spyglass Telescope",
    category: "antique",
    image: "/images/products/AAS-0005.webp",
  },

  // ── Desk Lights & Decor ───────────────────────────────────────────────
  {
    code: "DL-01",
    name: "Mesh Pear Tealight Holder",
    category: "desk-lights",
    image: "/images/products/AAS-0006.webp",
  },
  {
    code: "DL-02",
    name: "Black Mesh Barrel Pendant",
    category: "desk-lights",
    image: "/images/products/AAS-0007.webp",
  },
  {
    code: "DL-03",
    name: "Mesh Diamond Pendant Shade",
    category: "desk-lights",
    image: "/images/products/AAS-0008.webp",
  },
  {
    code: "DL-04",
    name: "Geometric Wire Cage Light",
    category: "desk-lights",
    image: "/images/products/AAS-0009.webp",
  },
  {
    code: "DL-05",
    name: "Mini Wire Mesh Desk Lamp",
    category: "desk-lights",
    image: "/images/products/AAS-0010.webp",
  },
  {
    code: "DL-06",
    name: "Copper Mesh Globe Pendant",
    category: "desk-lights",
    image: "/images/products/AAS-0011.webp",
  },
  {
    code: "DL-07",
    name: "Industrial Wire Drop Light",
    category: "desk-lights",
    image: "/images/products/AAS-0012.webp",
  },
  {
    code: "DL-08",
    name: "Brushed Gold Table Accent",
    category: "desk-lights",
    image: "/images/products/AAS-0013.webp",
  },

  // ── Pendant Lamps ─────────────────────────────────────────────────────
  {
    code: "LP-01",
    name: "Wire Mesh Trapeze Pendant",
    category: "lamps",
    image: "/images/products/AAS-0014.webp",
  },
  {
    code: "LP-02",
    name: "Gold Mesh Cone Pendant",
    category: "lamps",
    image: "/images/products/AAS-0015.webp",
  },
  {
    code: "LP-03",
    name: "Dual Tone Mesh Pendant Set",
    category: "lamps",
    image: "/images/products/AAS-0016.webp",
  },
  {
    code: "LP-04",
    name: "Tiered Mesh Bell Pendant",
    category: "lamps",
    image: "/images/products/AAS-0017.webp",
  },
  {
    code: "LP-05",
    name: "Matte Black Dome Pendant",
    category: "lamps",
    image: "/images/products/AAS-0018.webp",
  },
  {
    code: "LP-06",
    name: "Brass Layered Cage Pendant",
    category: "lamps",
    image: "/images/products/AAS-0019.webp",
  },
  {
    code: "LP-07",
    name: "Hexagonal Wire Frame Light",
    category: "lamps",
    image: "/images/products/AAS-0020.webp",
  },
  {
    code: "LP-08",
    name: "Industrial Mesh Lantern",
    category: "lamps",
    image: "/images/products/AAS-0021.webp",
  },
];
