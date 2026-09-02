import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/lib/catalog";
import { EnquiryButtonGroup } from "@/components/ui/EnquiryButtonGroup";
import type { Metadata } from "next";

const BASE_URL = "https://antiqueartssourcing.com";

interface Props {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug, categorySlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) return { title: "Product Not Found" };

  const title = product.seo.title || `${product.name} | Antique Arts Sourcing`;
  const description =
    product.seo.description ||
    product.shortDescription ||
    `${product.name} — handcrafted in India for B2B export.`;
  const canonical = `${BASE_URL}/collections/${categorySlug}/${productSlug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Antique Arts Sourcing",
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({
    categorySlug: p.categorySlug,
    productSlug: p.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { productSlug, categorySlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product || product.categorySlug !== categorySlug) notFound();

  const specs = [
    product.material && { label: "Material", value: product.material },
    product.finish && { label: "Finish", value: product.finish },
    product.dimensions && { label: "Dimensions", value: product.dimensions },
    product.color && { label: "Colour", value: product.color },
    product.weight !== null && { label: "Weight", value: `${product.weight} kg` },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">

      {/* ── Breadcrumb & Top Padding ─────────────────────────────── */}
      <div className="pt-28 pb-8 lg:pt-36">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2.5 text-[0.625rem] font-sans font-semibold tracking-[0.2em] uppercase">
            <Link
              href="/collections"
              className="text-text-muted hover:text-accent-gold transition-colors duration-300"
            >
              Collections
            </Link>
            <span className="text-black/20">/</span>
            <Link
              href={`/collections/${product.categorySlug}`}
              className="text-text-muted hover:text-accent-gold transition-colors duration-300"
            >
              {product.category}
            </Link>
            <span className="text-black/20">/</span>
            <span className="text-text-primary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Main Content Grid ───────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">

          {/* Left — Image Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            {/* Main image — Pure white background for cutout isolation */}
            <div className="relative w-full aspect-[4/5] bg-white border border-black/[0.04] rounded-[2px] overflow-hidden">
              <Image
                src={product.image || "/images/placeholder.webp"}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>

            {/* Thumbnail strip */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {product.gallery.slice(0, 5).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-white border border-black/[0.04] rounded-[2px] overflow-hidden"
                  >
                    <Image
                      src={img || "/images/placeholder.webp"}
                      alt={`${product.name} — view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="10vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — Product Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col lg:pt-8">

            <span className="font-sans font-semibold tracking-[0.2em] uppercase text-[0.625rem] text-accent-gold mb-3">
              {product.sku}
            </span>
            
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-text-primary mb-8">
              {product.name}
            </h1>

            {/* Subtle separator */}
            <div className="w-8 h-px bg-accent-gold/40 mb-8" />

            {/* Description */}
            {(product.description || product.shortDescription) && (
              <p className="font-sans font-light leading-[1.8] text-[0.9375rem] text-text-muted mb-10">
                {product.description || product.shortDescription}
              </p>
            )}

            {/* Specs — Minimalist Editorial Table */}
            {specs.length > 0 && (
              <div className="mb-12 border-t border-black/[0.04]">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 border-b border-black/[0.04]"
                  >
                    <span className="w-32 flex-shrink-0 font-sans font-semibold tracking-[0.15em] uppercase text-[0.625rem] text-text-muted">
                      {spec.label}
                    </span>
                    <span className="font-sans font-light text-[0.875rem] text-text-primary">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Trade Request CTA */}
            <div className="bg-white border border-black/[0.04] p-6 lg:p-8 rounded-[2px] mb-8 shadow-sm">
              <h3 className="font-serif text-xl text-text-primary mb-2">Request Trade Pricing</h3>
              <p className="font-sans font-light text-[0.8125rem] text-text-muted leading-[1.6] mb-6">
                B2B wholesale pricing available. Minimum order quantities apply. 
                <span className="text-accent-gold font-medium ml-1">OEM / ODM manufacturing</span> on request.
              </p>
              <EnquiryButtonGroup product={product} />
            </div>

            {/* Back link */}
            <Link
              href={`/collections/${product.categorySlug}`}
              className="inline-flex items-center gap-3 font-sans font-medium tracking-[0.15em] uppercase text-[0.625rem] text-text-muted hover:text-accent-gold transition-colors duration-300 mt-auto"
            >
              <span className="w-4 h-px bg-current" />
              Back to {product.category}
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
