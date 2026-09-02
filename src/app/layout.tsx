import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Configure Cormorant Garamond (Editorial Serif — Headings & Display)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

// Configure Plus Jakarta Sans (Premium UI Sans — Body & UI)
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Also expose Cormorant as brand font
const cormorantBrand = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
  display: "swap",
});

// ─── SEO Metadata ───
export const metadata: Metadata = {
  metadataBase: new URL("https://antiqueartssourcing.com"),
  title: "Antique Arts Sourcing — Luxury Indian Craftsmanship for Global Spaces",
  description:
    "India's premier B2B sourcing house for handcrafted luxury décor, bespoke furniture, glass artistry & architectural lighting. OEM/ODM custom manufacturing for architects, designers & hospitality brands across 20+ countries.",
  openGraph: {
    title: "Antique Arts Sourcing — Luxury Indian Craftsmanship for Global Spaces",
    description:
      "B2B export sourcing for handcrafted luxury décor, antique collectibles, bespoke furniture, and architectural lighting. Custom OEM/ODM manufacturing from Firozabad, India.",
    url: "https://antiqueartssourcing.com",
    siteName: "Antique Arts Sourcing",
    images: [
      {
        url: "/images/hero-editorial.jpg",
        width: 1200,
        height: 630,
        alt: "Antique Arts Sourcing — India's Premier B2B Luxury Sourcing House",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antique Arts Sourcing — Luxury Indian Craftsmanship for Global Spaces",
    description:
      "B2B sourcing house for handcrafted luxury décor, bespoke furniture & architectural lighting. OEM/ODM. 20+ countries. Firozabad, India.",
    images: ["/images/hero-editorial.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/branding/antique-arts-sourcing-emblem.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/branding/antique-arts-sourcing-emblem.png"],
  },
  alternates: {
    canonical: "https://antiqueartssourcing.com",
    languages: {
      "en-US": "https://antiqueartssourcing.com",
      "en-GB": "https://antiqueartssourcing.com",
      "en-IN": "https://antiqueartssourcing.com",
      "x-default": "https://antiqueartssourcing.com",
    },
  },
};

// ─── JSON-LD Structured Data ───
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://antiqueartssourcing.com/#organization",
      "name": "Antique Arts Sourcing",
      "alternateName": "AAS India",
      "url": "https://antiqueartssourcing.com",
      "logo": "https://antiqueartssourcing.com/images/branding/antique-arts-sourcing-logo.jpeg",
      "description":
        "India's premier B2B export sourcing company specialising in handcrafted luxury décor, bespoke furniture, glass artistry, antique collectibles, and architectural decorative lighting for international importers, architects, and hospitality procurement.",
      "foundingLocation": {
        "@type": "Place",
        "name": "Firozabad, Uttar Pradesh, India",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dholpura Road, Pradeep Nagar",
        "addressLocality": "Firozabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "283203",
        "addressCountry": "IN",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-75037-95101",
          "contactType": "B2B Export Sales",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": ["US", "GB", "AE", "AU", "CA", "DE", "FR", "IT", "NL"],
        },
      ],
      "sameAs": [],
      "knowsAbout": [
        "OEM Custom Manufacturing",
        "ODM Private Label Manufacturing",
        "Luxury Home Décor Export",
        "Handcrafted Brass & Copper Artistry",
        "Glass & Crystal Artistry",
        "Bespoke Furniture & Joinery",
        "Architectural Decorative Lighting",
        "Hotel & Hospitality Décor",
        "Antique Collectibles Export",
        "ISPM-15 Export Packaging",
        "Factory Audits & AQL Inspection",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Luxury Décor & Custom Manufacturing Export Catalog",
        "itemListElement": [
          { "@type": "OfferCatalog", "name": "Antique Collectibles" },
          { "@type": "OfferCatalog", "name": "Luxury Metalwork" },
          { "@type": "OfferCatalog", "name": "Glass & Crystal Artistry" },
          { "@type": "OfferCatalog", "name": "Bespoke Furniture & Joinery" },
          { "@type": "OfferCatalog", "name": "Hotel & Hospitality Accents" },
          { "@type": "OfferCatalog", "name": "Architectural Decorative Lighting" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://antiqueartssourcing.com/#website",
      "url": "https://antiqueartssourcing.com",
      "name": "Antique Arts Sourcing — Luxury Indian Craftsmanship for Global Spaces",
      "publisher": {
        "@id": "https://antiqueartssourcing.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What product categories does Antique Arts Sourcing export?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We export six core categories: Antique Collectibles, Luxury Metalwork, Glass & Crystal Artistry, Bespoke Furniture & Joinery, Hotel & Hospitality Accents, and Architectural Decorative Lighting. All products are available for OEM/ODM custom manufacturing.",
          },
        },
        {
          "@type": "Question",
          "name": "What are your OEM and ODM custom manufacturing capabilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer full OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing) services. Buyers can submit CAD drawings, tech packs, or reference designs. We handle prototyping, material sourcing, production, AQL quality inspection, and export-ready ISPM-15 packaging.",
          },
        },
        {
          "@type": "Question",
          "name": "Which countries do you export to and what certifications do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We export to 20+ countries including the USA, UK, Canada, Australia, UAE, Germany, France, Italy, and the Netherlands. Our products can be certified to UL, CE, UKCA, and SAA standards. All shipments use ISPM-15 compliant timber crate packaging.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Minimum Order Quantity (MOQ) for B2B wholesale orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOQs vary by product category and complexity. Standard décor items start from 50–100 units per SKU. Custom OEM/ODM orders are evaluated per-project. We accommodate both boutique trade buyers and large-scale hospitality procurement contracts.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Antique Arts Sourcing ensure quality for international buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every order undergoes multi-stage quality inspection including in-line checks, pre-shipment AQL sampling, and final factory audit. We provide detailed inspection reports with photographs. All products are packed in moisture-resistant, ISPM-15 certified timber crates for safe international freight.",
          },
        },
        {
          "@type": "Question",
          "name": "Can architects and designers submit CAD files for custom manufacturing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Architects, interior designers, and hospitality procurement teams can submit CAD drawings, 3D renders, material specifications, and tech packs directly through our RFQ form. We provide prototyping, sampling, and full-scale production with dedicated project management.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://antiqueartssourcing.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Collection",
          "item": "https://antiqueartssourcing.com/collections",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": "https://antiqueartssourcing.com/about",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://antiqueartssourcing.com/contact",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakartaSans.variable} ${cormorantBrand.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-ivory text-ink font-sans overflow-x-hidden leading-relaxed" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
