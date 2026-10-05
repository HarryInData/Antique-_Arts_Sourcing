import Link from "next/link";
import Image from "next/image";
import { getCategories, getProductsByCategory } from "@/lib/catalog";
import { CollectionComingSoon } from "@/components/ui/CollectionComingSoon";
import {
  resolveCuratedCategory,
  resolveCategoryDisplayName,
} from "@/lib/curatedCategories";
import type { Metadata } from "next";

const BASE_URL = "https://antiqueartssourcing.com";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const category = getCategories().find((c) => c.slug === categorySlug);
  const categoryName = curated?.name || category?.name || resolveCategoryDisplayName(categorySlug);

  return {
    title: `${categoryName} | Antique Arts Sourcing`,
    description: `Explore our curated B2B export collection of ${categoryName.toLowerCase()} — handcrafted in India for architects, designers, and hospitality buyers worldwide.`,
    alternates: { canonical: `${BASE_URL}/collections/${categorySlug}` },
    openGraph: {
      title: `${categoryName} | Antique Arts Sourcing`,
      description: `Explore our curated B2B export collection of ${categoryName.toLowerCase()}.`,
      url: `${BASE_URL}/collections/${categorySlug}`,
      siteName: "Antique Arts Sourcing",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const catalogSlugs = getCategories().map((c) => ({ categorySlug: c.slug }));
  const curatedSlugs = [
    { categorySlug: "antique-collection" },
    { categorySlug: "tabletop-decor-kitchenware-cutlery" },
    { categorySlug: "tabletop-decor" },
    { categorySlug: "kitchenware-cutlery" },
    { categorySlug: "bath-accessories" },
    { categorySlug: "storage-organizer" },
    { categorySlug: "storage-organiser" },
    { categorySlug: "festive-collection" },
  ];
  return [...catalogSlugs, ...curatedSlugs];
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const category = getCategories().find((c) => c.slug === categorySlug);

  // If this is one of our curated coming-soon categories or empty category
  if (curated || !category || category.isEmpty) {
    const categoryName = curated?.name || category?.name || resolveCategoryDisplayName(categorySlug);
    return (
      <div className="pt-24 lg:pt-28 min-h-screen bg-[#F4F1EA]">
        <CollectionComingSoon
          categoryName={categoryName}
          categorySlug={categorySlug}
          backHref="/#collections"
        />
      </div>
    );
  }

  const products = getProductsByCategory(categorySlug);

  // Fallback to CollectionComingSoon if products array is empty
  if (products.length === 0) {
    return (
      <div className="pt-24 lg:pt-28 min-h-screen bg-[#F4F1EA]">
        <CollectionComingSoon
          categoryName={category.name}
          categorySlug={categorySlug}
          backHref="/#collections"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* ── Editorial Minimalist Header ──────────────────────────── */}
      <div className="pt-32 pb-12 lg:pt-44 lg:pb-20 border-b border-black/5">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col max-w-3xl">
            <nav className="flex items-center gap-2 text-[0.6875rem] font-sans font-medium tracking-[0.2em] uppercase mb-8">
              <Link
                href="/collections"
                className="text-text-muted hover:text-accent-gold transition-colors duration-300"
              >
                Collections
              </Link>
              <span className="text-black/20">/</span>
              <span className="text-text-primary">{category.name}</span>
            </nav>

            <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-text-primary mb-6">
              {category.name}
            </h1>

            <p className="font-sans font-light leading-[1.8] text-[clamp(0.9375rem,2vw,1.1rem)] text-text-muted max-w-2xl mb-12">
              Discover our curated selection of premium {category.name.toLowerCase()}, 
              meticulously handcrafted by master artisans. Available for B2B wholesale 
              and custom hospitality projects globally.
            </p>

            <div className="flex items-center gap-12 border-t border-black/5 pt-8">
              <div>
                <span className="block text-[0.625rem] font-sans font-semibold tracking-[0.2em] uppercase text-text-muted mb-1.5">
                  Total Items
                </span>
                <span className="font-serif text-2xl text-text-primary">
                  {products.length}
                </span>
              </div>
              <div>
                <span className="block text-[0.625rem] font-sans font-semibold tracking-[0.2em] uppercase text-text-muted mb-1.5">
                  Origin
                </span>
                <span className="font-sans font-light text-text-primary">
                  Firozabad, India
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Minimalist Product Grid ───────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/collections/${product.categorySlug}/${product.slug}`}
              className="group flex flex-col"
            >
              {/* Image Container - White background to blend with product photos */}
              <div 
                className="relative w-full aspect-[4/5] mb-5 overflow-hidden bg-white border border-black/[0.03] rounded-[2px]"
              >
                <Image
                  src={product.image || "/images/placeholder.webp"}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Clean Typography */}
              <div className="flex flex-col px-1">
                <span className="font-sans font-semibold tracking-[0.15em] uppercase text-[0.625rem] text-accent-gold mb-1.5">
                  {product.sku}
                </span>
                <h3 className="font-serif text-xl leading-snug text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                  {product.name}
                </h3>
                {product.material && (
                  <p className="font-sans font-light text-[0.8125rem] text-text-muted mt-1 truncate">
                    {product.material}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
