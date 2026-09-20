export interface KatachiProduct {
  id: string;
  name: string;
  category: "Seating" | "Tables" | "Storage" | "Objects";
  price: number;
  priceFormatted: string;
  image: string;
  material: string;
  colors: { name: string; hex: string }[];
  dimensions: string;
  description: string;
  leadTime: string;
  inStock: boolean;
  featured?: boolean;
}

export interface KatachiCollection {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  count: string;
  aspectRatio: string;
}

export interface KatachiMaterial {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  provenance: string;
  swatchColor: string;
  accentColor: string;
}

export interface KatachiArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface BagItem {
  product: KatachiProduct;
  quantity: number;
  selectedColor: string;
}
