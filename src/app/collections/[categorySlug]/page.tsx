import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategories, getProductsByCategory } from "@/lib/catalog";
import { getFrozenCategoryBySlug } from "@/lib/frozenCategories";
import { CollectionUnavailable } from "@/components/ui/CollectionUnavailable";
import type { Metadata } from "next";

const BASE_URL = "https://antiqueartssourcing.com";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategories().find((c) => c.slug === categorySlug);

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Antique Arts Sourcing`,
    description: `Explore our curated B2B export collection of ${category.name.toLowerCase()} — handcrafted in India for architects, designers, and hospitality buyers worldwide.`,
    alternates: { canonical: `${BASE_URL}/collections/${categorySlug}` },
    openGraph: {
      title: `${category.name} | Antique Arts Sourcing`,
      description: `Explore our curated B2B export collection of ${category.name.toLowerCase()}.`,
      url: `${BASE_URL}/collections/${categorySlug}`,
      siteName: "Antique Arts Sourcing",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ categorySlug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = getCategories().find((c) => c.slug === categorySlug);

  if (!category) notFound();

  // If frozen category, render ONLY CollectionUnavailable before mounting product grid
  const frozenConfig = getFrozenCategoryBySlug(category.slug);
  if (frozenConfig) {
    return (
      <div className="pt-24 lg:pt-32 min-h-screen bg-[#181816]">
        <CollectionUnavailable
          categoryName={frozenConfig.displayName}
          categorySlug={category.slug}
          backHref="/collections"
        />
      </div>
    );
  }

  const products = getProductsByCategory(categorySlug);

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
        
        {products.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="font-serif text-3xl mb-4 text-text-primary">
              Curating Collection
            </p>
            <p className="font-sans font-light max-w-md mx-auto mb-8 text-text-muted">
              The {category.name} collection is currently being updated with our latest artisanal pieces.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-sans font-medium tracking-[0.15em] uppercase text-[0.6875rem] border border-black/10 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
            >
              Request Catalog Direct
            </Link>
          </div>
        ) : (
          /* Grid */
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
        )}
      </div>

    </div>
  );
}
