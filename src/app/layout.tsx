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

// ─── SEO Metadata (OG + Twitter Cards + Manifest + Icons) ───
export const metadata: Metadata = {
  metadataBase: new URL("https://antiqueartssourcing.com"),
  title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
  description:
    "Antique Arts Sourcing is a premium luxury lighting and home décor brand. Explore our handcrafted pendant lighting, wire mesh lamps, and table lamps designed to illuminate and elevate your spaces.",
  keywords: [
    "luxury lighting",
    "premium home decor",
    "handcrafted pendant light",
    "wire mesh lamp",
    "Antique Arts Sourcing",
    "table lamp",
    "fruit basket",
    "brass decor exporter India",
    "bespoke lighting manufacturer",
    "architectural lighting supplier",
    "luxury home decor wholesale",
  ],
  openGraph: {
    title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
    description:
      "A luxury showroom of handcrafted pendant lighting and home décor. Discover the art of illumination.",
    url: "https://antiqueartssourcing.com",
    siteName: "Antique Arts Sourcing",
    images: [
      {
        url: "/images/branding/logo.jpeg",
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
    images: ["/images/branding/logo.jpeg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/images/branding/logo.jpeg",
    apple: "/images/branding/logo.jpeg",
  },
  alternates: {
    canonical: "https://antiqueartssourcing.com",
  },
};

// ─── JSON-LD Structured Data (Organization + WebSite + Products) ───
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://antiqueartssourcing.com/#organization",
      "name": "Antique Arts Sourcing",
      "url": "https://antiqueartssourcing.com",
      "logo": "https://antiqueartssourcing.com/images/branding/logo.jpeg",
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
      "sameAs": [],
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
      "@type": "Product",
      "name": "Heritage Brass Compass Collection",
      "image": "https://antiqueartssourcing.com/images/products/antique/antique_2.jpg",
      "description":
        "Handcrafted heritage brass compass collection — premium antique collectible pieces sourced from skilled Indian artisan workshops.",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing",
      },
      "category": "Antique Collectibles",
      "material": "Solid Brass",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization",
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2027-12-31",
        "url": "https://antiqueartssourcing.com/#featured",
        "description": "Contact for wholesale & B2B pricing",
      },
    },
    {
      "@type": "Product",
      "name": "Mesh Pear Tealight Holder",
      "image": "https://antiqueartssourcing.com/images/products/desk_lights/desk_light_1.jpg",
      "description":
        "Artisanal mesh pear tealight holder crafted from woven copper wire — ambient desk & table lighting accent for luxury interiors.",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing",
      },
      "category": "Desk Lights & Decor",
      "material": "Copper Wire Mesh",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization",
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2027-12-31",
        "url": "https://antiqueartssourcing.com/#featured",
        "description": "Contact for wholesale & B2B pricing",
      },
    },
    {
      "@type": "Product",
      "name": "Wire Mesh Pendant Lamp",
      "image": "https://antiqueartssourcing.com/images/products/lamps/lamp_1.jpg",
      "description":
        "Signature handwoven pure copper wire mesh pendant lamp — creates warm ambient shadow patterns for dining areas, hotel lobbies, and architectural installations.",
      "brand": {
        "@type": "Brand",
        "name": "Antique Arts Sourcing",
      },
      "category": "Pendant Lamps",
      "material": "Pure Copper Mesh, Antiqued Brass Socket",
      "manufacturer": {
        "@id": "https://antiqueartssourcing.com/#organization",
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2027-12-31",
        "url": "https://antiqueartssourcing.com/#featured",
        "description": "Contact for wholesale & B2B pricing",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0F0F0F] text-white font-body overflow-x-hidden leading-relaxed">
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
