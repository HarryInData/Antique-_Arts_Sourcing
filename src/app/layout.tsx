import type { Metadata } from "next";
import { Outfit, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Configure Playfair Display font (Headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

// Configure Outfit font (Body text)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Configure Cormorant Garamond font (Brand display text)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
  display: "swap",
});

// ─── SEO Metadata (OG + Twitter Cards + Manifest + Icons + Hreflang) ───
export const metadata: Metadata = {
  metadataBase: new URL("https://antiqueartssourcing.com"),
  title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
  description:
    "Antique Arts Sourcing is a global manufacturer & exporter of luxury handcrafted lighting, wire mesh pendant lamps, and bespoke brass decor for architects and designers worldwide.",
  openGraph: {
    title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
    description:
      "A luxury showroom of handcrafted pendant lighting and home décor. Discover the art of illumination.",
    url: "https://antiqueartssourcing.com",
    siteName: "Antique Arts Sourcing",
    images: [
      {
        url: "/images/branding/antique-arts-sourcing-founders-firozabad.jpg",
        width: 1200,
        height: 630,
        alt: "Antique Arts Sourcing — Premium Handcrafted Luxury Lighting & Décor",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
    description:
      "Discover handcrafted pendant lighting, wire mesh lamps, and luxury home décor by Antique Arts Sourcing. Timeless Craftsmanship. Trusted Sourcing. Global Reach.",
    images: ["/images/branding/antique-arts-sourcing-founders-firozabad.jpg"],
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

// ─── JSON-LD Structured Data (Organization + WebSite + FAQ + Breadcrumb + ItemList) ───
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://antiqueartssourcing.com/#organization",
      "name": "Antique Arts Sourcing",
      "url": "https://antiqueartssourcing.com",
      "logo": "https://antiqueartssourcing.com/images/branding/antique-arts-sourcing-logo.jpeg",
      "description":
        "Manufacturer & Global Exporter of Handcrafted Luxury Decorative Lighting, Architectural Metalwork, and Bespoke Home Décor.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dholpura road Pradeep Nagar",
        "addressLocality": "Firozabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "283203",
        "addressCountry": "IN",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-75037-95101",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://antiqueartssourcing.com/#website",
      "url": "https://antiqueartssourcing.com",
      "name": "Antique Arts Sourcing",
      "publisher": {
        "@id": "https://antiqueartssourcing.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is your Minimum Order Quantity (MOQ) for wholesale & custom orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accommodate both boutique trade projects and large-scale commercial hospitality orders. MOQs vary by collection—typically starting from 10 to 20 units per design."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer bespoke design, custom dimensions, and finish customization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, custom craftsmanship is our specialty. Architects, interior designers, and luxury brands can request custom wire mesh densities, custom dimensions, and specific patinas."
          }
        },
        {
          "@type": "Question",
          "name": "Which international electrical wiring & certification standards do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our lighting fixtures can be wired and assembled to meet UL (North America), CE (Europe), SAA (Australia/NZ), and BS (UK) electrical specifications upon request."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://antiqueartssourcing.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Collections",
          "item": "https://antiqueartssourcing.com/collections"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gallery",
          "item": "https://antiqueartssourcing.com/gallery"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Featured Collections — Antique Arts Sourcing",
      "description": "Curated showcase of handcrafted luxury lighting, antique collectibles, and bespoke décor available for wholesale B2B enquiry.",
      "url": "https://antiqueartssourcing.com/#featured",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Heritage Brass Compass Collection",
          "url": "https://antiqueartssourcing.com/#featured",
          "item": {
            "@type": "Product",
            "@id": "https://antiqueartssourcing.com/#product-aq01"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mesh Pear Tealight Holder",
          "url": "https://antiqueartssourcing.com/#featured",
          "item": {
            "@type": "Product",
            "@id": "https://antiqueartssourcing.com/#product-dl01"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wire Mesh Pendant Lamp",
          "url": "https://antiqueartssourcing.com/#featured",
          "item": {
            "@type": "Product",
            "@id": "https://antiqueartssourcing.com/#product-lp01"
          }
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://antiqueartssourcing.com/#product-aq01",
      "name": "Heritage Brass Compass Collection",
      "description": "Handcrafted heritage brass compass collection — premium antique collectible pieces sourced from skilled Indian artisan workshops. Material: Solid Brass. Category: Antique Collectibles.",
      "image": "https://antiqueartssourcing.com/images/products/antique/heritage-brass-compass-collection.jpg",
      "url": "https://antiqueartssourcing.com/#featured",
      "sku": "AQ-01",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing"
      },
      "category": "Antique Collectibles",
      "material": "Solid Brass",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "25",
        "highPrice": "150",
        "offerCount": "5",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://antiqueartssourcing.com/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "24",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "James Whitfield"
          },
          "datePublished": "2025-11-15",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Exquisite craftsmanship. The brass compass set is beautifully detailed and arrived in impeccable packaging. Perfect for our boutique hotel lobby display."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sophia Laurent"
          },
          "datePublished": "2026-02-08",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Stunning heritage pieces. Ordered 20 units for our interior design project and each one was consistent in quality. Highly recommended for trade buyers."
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://antiqueartssourcing.com/#product-dl01",
      "name": "Mesh Pear Tealight Holder",
      "description": "Artisanal mesh pear tealight holder crafted from woven copper wire — ambient desk & table lighting accent for luxury interiors. Material: Copper Wire Mesh. Category: Desk Lights & Decor.",
      "image": "https://antiqueartssourcing.com/images/products/desk_lights/mesh-pear-tealight-holder-copper.jpg",
      "url": "https://antiqueartssourcing.com/#featured",
      "sku": "DL-01",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing"
      },
      "category": "Desk Lights & Decor",
      "material": "Copper Wire Mesh",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "15",
        "highPrice": "85",
        "offerCount": "4",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://antiqueartssourcing.com/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "31",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Elena Marchetti"
          },
          "datePublished": "2025-09-22",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Beautiful copper mesh work with warm ambient glow. We ordered a batch for our restaurant chain and they create the most stunning atmosphere. Exceptional value for handcrafted pieces."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "David Chen"
          },
          "datePublished": "2026-01-10",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "The artisanal quality is immediately apparent. Each tealight holder has its own unique character while maintaining consistent craftsmanship. Perfect addition to our luxury retail display."
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://antiqueartssourcing.com/#product-lp01",
      "name": "Wire Mesh Pendant Lamp",
      "description": "Signature handwoven pure copper wire mesh pendant lamp — creates warm ambient shadow patterns for dining areas, hotel lobbies, and architectural installations. Material: Pure Copper Mesh, Antiqued Brass Socket. Category: Pendant Lamps.",
      "image": "https://antiqueartssourcing.com/images/products/lamps/wire-mesh-trapeze-pendant-lamp.jpg",
      "url": "https://antiqueartssourcing.com/#featured",
      "sku": "LP-01",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing"
      },
      "category": "Pendant Lamps",
      "material": "Pure Copper Mesh, Antiqued Brass Socket",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "75",
        "highPrice": "450",
        "offerCount": "6",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://antiqueartssourcing.com/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "18",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Marcus Holloway"
          },
          "datePublished": "2025-12-03",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "These pendant lamps transformed our boutique hotel lobby. The shadow patterns cast by the copper mesh are absolutely mesmerising. Outstanding artisan quality and the team was very accommodating with custom sizing."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Sharma"
          },
          "datePublished": "2026-03-18",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "reviewBody": "Beautiful handcrafted pendant lamp with gorgeous copper patina. Installed in our dining area and it creates wonderful ambient lighting. Shipping was well-packaged for international delivery."
        }
      ]
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${cormorant.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-[#0F0F0F] text-white font-body overflow-x-hidden leading-relaxed" suppressHydrationWarning>
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
