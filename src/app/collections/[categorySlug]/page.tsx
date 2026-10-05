import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategories, getProductsByCategory } from "@/lib/catalog";
import {
  isCuratedCategory,
  resolveCuratedCategory,
  resolveCategoryDisplayName,
  getCuratedCategoryStaticParams,
} from "@/lib/curatedCategories";
import { CollectionComingSoon } from "@/components/ui/CollectionComingSoon";
import type { Metadata } from "next";

const BASE_URL = "https://antiqueartssourcing.com";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const catalogCat = getCategories().find((c) => c.slug === categorySlug);
  const name = curated?.name || catalogCat?.name || resolveCategoryDisplayName(categorySlug);

  return {
    title: `${name} | Antique Arts Sourcing`,
    description: `Explore our curated B2B export collection of ${name.toLowerCase()} — handcrafted in India for architects, designers, and hospitality buyers worldwide.`,
    alternates: { canonical: `${BASE_URL}/collections/${categorySlug}` },
    openGraph: {
      title: `${name} | Antique Arts Sourcing`,
      description: `Explore our curated B2B export collection of ${name.toLowerCase()}.`,
      url: `${BASE_URL}/collections/${categorySlug}`,
      siteName: "Antique Arts Sourcing",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const catalogParams = getCategories().map((c) => ({ categorySlug: c.slug }));
  const curatedParams = getCuratedCategoryStaticParams();
  const merged = new Map<string, { categorySlug: string }>();
  for (const p of [...catalogParams, ...curatedParams]) {
    merged.set(p.categorySlug, p);
  }
  return Array.from(merged.values());
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const catalogCat = getCategories().find((c) => c.slug === categorySlug);

  // If curated category or unknown category without catalog entry
  if (curated || isCuratedCategory(categorySlug)) {
    const name = curated?.name || resolveCategoryDisplayName(categorySlug);
    return (
      <CollectionComingSoon
        categoryName={name}
        categorySlug={categorySlug}
        eyebrow={curated?.eyebrow}
        description={curated?.description}
        backHref="/#collections"
      />
    );
  }

  if (!catalogCat) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);

  // If catalog category is empty
  if (catalogCat.isEmpty || products.length === 0) {
    return (
      <CollectionComingSoon
        categoryName={catalogCat.name}
        categorySlug={categorySlug}
        eyebrow="ARTISAN SOURCING PREVIEW"
        description={`We are carefully curating ${catalogCat.name.toLowerCase()} with our master artisan partners. New export samples and technical specifications are being prepared for our global trade buyers.`}
        backHref="/#collections"
      />
    );
  }

  // Active product catalog for categories with live inventory
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Editorial Header */}
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
              <span className="text-text-primary">{catalogCat.name}</span>
            </nav>

            <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-text-primary mb-6">
              {catalogCat.name}
            </h1>

            <p className="font-sans font-light leading-[1.8] text-[clamp(0.9375rem,2vw,1.1rem)] text-text-muted max-w-2xl mb-12">
              Discover our curated selection of premium {catalogCat.name.toLowerCase()}, 
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

      {/* Product Grid */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/collections/${product.categorySlug}/${product.slug}`}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] mb-5 overflow-hidden bg-white border border-black/[0.03] rounded-[2px]">
                <Image
                  src={product.image || "/images/placeholder.webp"}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500 pointer-events-none" />
              </div>

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
