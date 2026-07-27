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
    image: "/images/products/antique/heritage-brass-desk-clock-trio.jpg",
  },
  {
    code: "AQ-02",
    name: "Heritage Brass Compass Collection",
    category: "antique",
    image: "/images/products/antique/heritage-brass-compass-collection.jpg",
  },
  {
    code: "AQ-03",
    name: "Rosewood Chess Set with Case",
    category: "antique",
    image: "/images/products/antique/rosewood-chess-set-brass-inlay.jpg",
  },
  {
    code: "AQ-04",
    name: "Rosewood Playing Card Box",
    category: "antique",
    image: "/images/products/antique/rosewood-playing-card-box-brass.jpg",
  },
  {
    code: "AQ-05",
    name: "Vintage Brass Spyglass Telescope",
    category: "antique",
    image: "/images/products/antique/vintage-brass-spyglass-telescope.jpg",
  },

  // ── Desk Lights & Decor ───────────────────────────────────────────────
  {
    code: "DL-01",
    name: "Mesh Pear Tealight Holder",
    category: "desk-lights",
    image: "/images/products/desk_lights/mesh-pear-tealight-holder-copper.jpg",
  },
  {
    code: "DL-02",
    name: "Black Mesh Barrel Pendant",
    category: "desk-lights",
    image: "/images/products/desk_lights/black-mesh-barrel-pendant-lamp.jpg",
  },
  {
    code: "DL-03",
    name: "Mesh Diamond Pendant Shade",
    category: "desk-lights",
    image: "/images/products/desk_lights/mesh-diamond-pendant-shade.jpg",
  },
  {
    code: "DL-04",
    name: "Geometric Wire Cage Light",
    category: "desk-lights",
    image: "/images/products/desk_lights/geometric-wire-cage-accent-light.jpg",
  },
  {
    code: "DL-05",
    name: "Mini Wire Mesh Desk Lamp",
    category: "desk-lights",
    image: "/images/products/desk_lights/mini-wire-mesh-desk-lamp.jpg",
  },
  {
    code: "DL-06",
    name: "Copper Mesh Globe Pendant",
    category: "desk-lights",
    image: "/images/products/desk_lights/copper-mesh-globe-pendant-light.jpg",
  },
  {
    code: "DL-07",
    name: "Industrial Wire Drop Light",
    category: "desk-lights",
    image: "/images/products/desk_lights/industrial-wire-drop-light.jpg",
  },
  {
    code: "DL-08",
    name: "Brushed Gold Table Accent",
    category: "desk-lights",
    image: "/images/products/desk_lights/brushed-gold-table-accent-light.jpg",
  },

  // ── Pendant Lamps ─────────────────────────────────────────────────────
  {
    code: "LP-01",
    name: "Wire Mesh Trapeze Pendant",
    category: "lamps",
    image: "/images/products/lamps/wire-mesh-trapeze-pendant-lamp.jpg",
  },
  {
    code: "LP-02",
    name: "Gold Mesh Cone Pendant",
    category: "lamps",
    image: "/images/products/lamps/gold-mesh-cone-pendant-light.jpg",
  },
  {
    code: "LP-03",
    name: "Dual Tone Mesh Pendant Set",
    category: "lamps",
    image: "/images/products/lamps/dual-tone-copper-mesh-pendant-set.jpg",
  },
  {
    code: "LP-04",
    name: "Tiered Mesh Bell Pendant",
    category: "lamps",
    image: "/images/products/lamps/tiered-mesh-bell-pendant-chandelier.jpg",
  },
  {
    code: "LP-05",
    name: "Matte Black Dome Pendant",
    category: "lamps",
    image: "/images/products/lamps/matte-black-dome-mesh-pendant.jpg",
  },
  {
    code: "LP-06",
    name: "Brass Layered Cage Pendant",
    category: "lamps",
    image: "/images/products/lamps/brass-layered-cage-pendant-light.jpg",
  },
  {
    code: "LP-07",
    name: "Hexagonal Wire Frame Light",
    category: "lamps",
    image: "/images/products/lamps/hexagonal-wire-frame-accent-light.jpg",
  },
  {
    code: "LP-08",
    name: "Industrial Mesh Lantern",
    category: "lamps",
    image: "/images/products/lamps/industrial-mesh-lantern-pendant.jpg",
  },
];
