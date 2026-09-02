import { Product, Category } from "@/types";
import productsData from "@/data/files/products.json";
import categoriesData from "@/data/files/categories.json";

// Type assertions to ensure the imported JSON matches our interfaces
const allProducts = productsData as Product[];
const allCategories = categoriesData as Category[];

/**
 * Returns all active products in the catalogue.
 * A product is active if `isActive` is true.
 */
export function getAllProducts(): Product[] {
  return allProducts.filter((p) => p.isActive);
}

/**
 * Returns a specific product by its globally unique slug.
 * Ensures the product is active.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug && p.isActive);
}

/**
 * Returns all active products belonging to a specific category.
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug && p.isActive);
}

/**
 * Returns all featured, active products.
 */
export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.featured && p.isActive);
}

/**
 * Returns all categories.
 */
export function getCategories(): Category[] {
  return allCategories;
}

/**
 * Helper to get a representational image for a category.
 * If the category has a coverImage defined, it uses that.
 * Otherwise, it finds the first active product in that category and uses its image.
 * Falls back to placeholder if nothing is found.
 */
export function getCategoryImage(category: Category): string {
  if (category.coverImage) {
    return category.coverImage;
  }
  const firstProduct = allProducts.find((p) => p.categorySlug === category.slug && p.isActive);
  return firstProduct?.image || "/images/placeholder.webp";
}
