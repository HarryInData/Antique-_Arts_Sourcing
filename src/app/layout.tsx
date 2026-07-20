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

// Metadata matching original HTML head
export const metadata: Metadata = {
  metadataBase: new URL("https://antiqueartssourcing.com"), // Fallback for social previews
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
  ],
  openGraph: {
    title: "Antique Arts Sourcing | Premium Handcrafted Lighting & Luxury Décor",
    description:
      "A luxury showroom of handcrafted pendant lighting and home décor. Discover the art of illumination.",
    images: [
      {
        url: "/images/branding/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Antique Arts Sourcing Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0F0F0F] text-white font-body overflow-x-hidden leading-relaxed">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
