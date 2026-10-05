import { notFound } from "next/navigation";
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
  const name = curated?.name || resolveCategoryDisplayName(categorySlug);

  return {
    title: `${name} | Antique Arts Sourcing`,
    description: `The ${name} collection is currently being curated with our artisan partners. Enquire for priority catalog access.`,
    alternates: { canonical: `${BASE_URL}/category/${categorySlug}` },
    openGraph: {
      title: `${name} | Antique Arts Sourcing`,
      description: `The ${name} collection is currently being curated with our artisan partners.`,
      url: `${BASE_URL}/category/${categorySlug}`,
      siteName: "Antique Arts Sourcing",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return getCuratedCategoryStaticParams();
}

export default async function DynamicCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const curated = resolveCuratedCategory(categorySlug);
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
