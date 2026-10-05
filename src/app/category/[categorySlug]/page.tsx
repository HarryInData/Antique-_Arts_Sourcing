import React from "react";
import type { Metadata } from "next";
import { CollectionComingSoon } from "@/components/ui/CollectionComingSoon";
import {
  resolveCuratedCategory,
  resolveCategoryDisplayName,
  getCuratedCategoryStaticParams,
} from "@/lib/curatedCategories";
import { getCategories } from "@/lib/catalog";

const BASE_URL = "https://antiqueartssourcing.com";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const catalogCategory = getCategories().find((c) => c.slug === categorySlug);
  const categoryName = curated?.name || catalogCategory?.name || resolveCategoryDisplayName(categorySlug);

  return {
    title: `${categoryName} | Antique Arts Sourcing`,
    description: `The ${categoryName} collection is currently under curation with our artisan partners in India. Preparing handcrafted luxury pieces for global B2B buyers.`,
    alternates: {
      canonical: `${BASE_URL}/category/${categorySlug}`,
    },
    openGraph: {
      title: `${categoryName} | Antique Arts Sourcing`,
      description: `Explore the ${categoryName} collection — handcrafted luxury export pieces currently under curation.`,
      url: `${BASE_URL}/category/${categorySlug}`,
      siteName: "Antique Arts Sourcing",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const params = getCuratedCategoryStaticParams();
  return params;
}

export default async function DynamicCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
  const catalogCategory = getCategories().find((c) => c.slug === categorySlug);
  const categoryName = curated?.name || catalogCategory?.name || resolveCategoryDisplayName(categorySlug);

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
