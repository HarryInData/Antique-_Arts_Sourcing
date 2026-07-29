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
          "image": "https://antiqueartssourcing.com/images/products/antique/heritage-brass-compass-collection.jpg",
          "description":
            "Handcrafted heritage brass compass collection — premium antique collectible pieces sourced from skilled Indian artisan workshops. Material: Solid Brass. Category: Antique Collectibles."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mesh Pear Tealight Holder",
          "url": "https://antiqueartssourcing.com/#featured",
          "image": "https://antiqueartssourcing.com/images/products/desk_lights/mesh-pear-tealight-holder-copper.jpg",
          "description":
            "Artisanal mesh pear tealight holder crafted from woven copper wire — ambient desk & table lighting accent for luxury interiors. Material: Copper Wire Mesh. Category: Desk Lights & Decor."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wire Mesh Pendant Lamp",
          "url": "https://antiqueartssourcing.com/#featured",
          "image": "https://antiqueartssourcing.com/images/products/lamps/wire-mesh-trapeze-pendant-lamp.jpg",
          "description":
            "Signature handwoven pure copper wire mesh pendant lamp — creates warm ambient shadow patterns for dining areas, hotel lobbies, and architectural installations. Material: Pure Copper Mesh, Antiqued Brass Socket. Category: Pendant Lamps."
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
