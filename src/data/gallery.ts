import type { GalleryItem, GalleryFilter } from "@/types";

// ==========================================================================
// GALLERY DATA
// ==========================================================================

export const galleryFilters: GalleryFilter[] = [
  { label: "All Items", value: "all" },
  { label: "Pendant Lighting", value: "lighting" },
  { label: "Wire Mesh", value: "wire-mesh" },
  { label: "Table Lamps", value: "table-lamps" },
  { label: "Fruit Baskets & Decor", value: "decor" },
];

export const galleryItems: GalleryItem[] = [
  {
    code: "PL-A1",
    name: "Aurelia Mesh Pendant",
    category: "lighting",
    image: "/images/products/product_1.jpg",
  },
  {
    code: "TL-O2",
    name: "Orion Wire Desk Light",
    category: "table-lamps",
    image: "/images/products/product_2.jpg",
  },
  {
    code: "PL-H3",
    name: "Helios Dome Chandelier",
    category: "lighting",
    image: "/images/products/product_3.jpg",
  },
  {
    code: "WM-C4",
    name: "Crescent Mesh Table Lamp",
    category: "wire-mesh",
    image: "/images/products/product_4.jpg",
  },
  {
    code: "PL-S5",
    name: "Stella Linear Pendant",
    category: "lighting",
    image: "/images/products/product_5.jpg",
  },
  {
    code: "WM-H6",
    name: "Hexagon Copper Cage",
    category: "wire-mesh",
    image: "/images/products/product_6.jpg",
  },
  {
    code: "TL-L7",
    name: "Luna Sphere Ambient Light",
    category: "table-lamps",
    image: "/images/products/product_7.jpg",
  },
  {
    code: "FB-G8",
    name: "Gilded Geometric Basket",
    category: "decor",
    image: "/images/products/product_8.jpg",
  },
];
