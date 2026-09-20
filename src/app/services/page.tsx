import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Search,
  Cog,
  Sparkles,
  Truck,
  FileCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Sourcing, OEM & Export Manufacturing Services | Antique Arts Sourcing",
  description:
    "End-to-end B2B services: product sourcing, custom OEM/ODM manufacturing, factory audits, AQL quality inspection, ISPM-15 packaging, and export logistics from Firozabad.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/services",
  },
  openGraph: {
    title: "B2B Sourcing, OEM & Export Services | Antique Arts Sourcing",
    description:
      "Premier manufacturing partner for global importers, retailers & hospitality. Product sourcing, OEM/ODM, AQL inspection, and export logistics.",
    url: "https://antiqueartssourcing.com/services",
    siteName: "Antique Arts Sourcing",
    images: ["/images/hero-editorial.jpg"],
  },
};

const serviceItems = [
  {
    id: "product-sourcing",
    icon: Search,
    title: "Product & Vendor Sourcing",
    subtitle: "Connecting Buyers with Verified Artisan Clusters",
    description:
      "We identify, evaluate, and manage premier artisanal workshops across Firozabad, Moradabad, Saharanpur, and Rajasthan. We eliminate intermediary markups and connect international buyers directly with capable, specialized manufacturers.",
    capabilities: [
      "Vendor verification and background checks",
      "Raw material provenance (brass, mouth-blown glass, reclaimed timber)",
      "Price negotiation based on direct manufacturing costs",
      "Sampling and rapid sample dispatch via international courier",
    ],
  },
  {
    id: "oem-manufacturing",
    icon: Cog,
    title: "OEM & Custom Manufacturing",
    subtitle: "Manufacturing to Your Exact Specifications & CAD Drawings",
    description:
      "We turn architectural concept sketches, 3D renderings, and tech packs into finished export products. Our master artisans execute casting, glass-blowing, welding, polishing, and joinery to international tolerances.",
    capabilities: [
      "Technical brief translation and CAD drawing support",
      "Prototyping and iterative pre-production master samples",
      "Custom tooling, mold fabrication, and die making",
      "Bespoke hardware, bespoke glass shades, and custom metalwork",
    ],
  },
  {
    id: "odm-private-label",
    icon: Sparkles,
    title: "ODM & Private Label Development",
    subtitle: "Turnkey Product Collections Ready for Your Brand",
    description:
      "Choose from our library of 280+ proprietary designs and adapt them under your brand. We offer custom branding, debossed emblems, barcode packaging, custom hang tags, and luxury presentation boxing.",
    capabilities: [
      "Custom logo engraving, laser marking, and brass badge casting",
      "Retail-ready packaging, custom inner cartons, and barcodes",
      "Exclusive geographic collections for qualified volume buyers",
      "Seasonal development for spring, autumn, and festive lines",
    ],
  },
  {
    id: "factory-audits",
    icon: Building2,
    title: "Factory Audits & Supplier Due Diligence",
    subtitle: "On-the-Ground Verification Before You Commit",
    description:
      "Before placing production orders, our on-site team conducts thorough factory audits to assess production capacity, machinery condition, worker safety, environmental practices, and quality management systems.",
    capabilities: [
      "Manufacturing capacity and machinery verification",
      "Social compliance, workplace safety, and child-labor-free verification",
      "Financial stability and export track record review",
      "Comprehensive photo and video audit reports within 48 hours",
    ],
  },
  {
    id: "quality-inspection",
    icon: ShieldCheck,
    title: "AQL Quality Inspection & Testing",
    subtitle: "Zero Defects Guaranteed at Your Destination Port",
    description:
      "We implement multi-stage quality control adhering to international ISO 2859-1 (AQL 2.5 / 4.0) sampling standards. Defective pieces are reworked or replaced at the workshop before packing.",
    capabilities: [
      "Initial Production Check (IPC) & In-line Production Check (DUPRO)",
      "Final Random Inspection (FRI) prior to crate sealing",
      "Dimensional tolerances, finish adhesion, and structural drop tests",
      "Full photographic inspection reports signed off prior to bill of lading",
    ],
  },
  {
    id: "export-logistics",
    icon: Truck,
    title: "Export Documentation & International Logistics",
    subtitle: "Seamless Global Freight Coordination from Factory to Port",
    description:
      "We handle all export compliance, customs clearance documentation, Certificate of Origin (COO), and fumigation certificates. All shipments are packed in ISPM-15 compliant heat-treated wooden crates.",
    capabilities: [
      "ISPM-15 certified timber crate packaging with moisture barriers",
      "FOB, CIF, and door-to-door DDP logistics coordination",
      "Complete export documentation: Commercial Invoice, Packing List, BL, COO",
      "Container stuffing supervision and ocean/air freight booking",
    ],
  },
];

const faqs = [
  {
    q: "How does the product sourcing process work with Antique Arts Sourcing?",
    a: "You provide your product reference, target specifications, or bill of materials. We identify suitable artisan workshops from our verified network, obtain preliminary costing, develop prototypes for your approval, and manage production with on-site quality control.",
  },
  {
    q: "Can you manufacture custom designs under OEM contracts?",
    a: "Yes. Over 60% of our production is custom OEM work. We regularly sign Non-Disclosure Agreements (NDAs) and manufacture from buyer CAD drawings, technical specs, and finish samples.",
  },
  {
    q: "What quality inspection standards do you follow?",
    a: "We adhere to ISO 2859-1 / ANSI/ASQ Z1.4 sampling plans, typically applying Level II sampling with AQL 2.5 for major defects and AQL 4.0 for minor defects. Comprehensive reports with high-resolution imagery are shared before container dispatch.",
  },
  {
    q: "What packaging standards do you use for fragile glass and heavy metal art?",
    a: "All items are packed with high-density EPE foam, multi-wall corrugated cartons, and heat-treated wooden crates compliant with ISPM-15 international phytosanitary standards.",
  },
  {
    q: "Which international markets do you export to?",
    a: "Our primary export destinations include the United States, United Kingdom, European Union (Germany, France, Netherlands, Italy, Spain), United Arab Emirates, Australia, and Canada.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "B2B Product Sourcing & OEM Manufacturing",
      "provider": {
        "@type": "Organization",
        "name": "Antique Arts Sourcing",
        "url": "https://antiqueartssourcing.com",
      },
      "areaServed": ["US", "GB", "EU", "AE", "AU", "CA"],
      "serviceType": [
        "Product Sourcing",
        "OEM Manufacturing",
        "ODM Private Label",
        "Factory Audits",
        "AQL Quality Inspection",
        "Export Documentation & Logistics",
      ],
      "description":
        "End-to-end B2B sourcing, custom manufacturing, quality inspection, and international export logistics for handcrafted luxury home decor and furniture.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-20 min-h-screen bg-[#F4F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Page Header */}
      <div className="container-main mb-16">
        <div className="max-w-3xl border-b border-[rgba(24,24,22,0.1)] pb-10">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-3">
            B2B EXPORT CAPABILITIES · FACTORY TO GLOBAL PORTS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181816] mb-6 leading-tight">
            B2B Sourcing, OEM Manufacturing &amp; Export Services
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
            Antique Arts Sourcing provides international trade buyers, interior designers, and hospitality brands with an end-to-end manufacturing and sourcing infrastructure — from raw material provenance to ocean container dispatch.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-main mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white border border-[rgba(24,24,22,0.08)] p-8 flex flex-col justify-between hover:border-[#9A7B50] transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#F4F1EA] flex items-center justify-center mb-6 group-hover:bg-[#9A7B50] group-hover:text-white transition-colors text-[#181816]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#9A7B50] uppercase block mb-1">
                    0{idx + 1} / Service Vertical
                  </span>
                  <h2 className="font-serif text-2xl font-light text-[#181816] mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-xs font-sans text-[#9A7B50] font-medium tracking-wide uppercase mb-4">
                    {svc.subtitle}
                  </p>
                  <p className="text-xs font-sans text-[#6F6A61] leading-relaxed mb-6 font-light">
                    {svc.description}
                  </p>

                  <div className="border-t border-[rgba(24,24,22,0.06)] pt-4 space-y-2 mb-6">
                    {svc.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs font-sans text-[#181816]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B50] shrink-0 mt-0.5" />
                        <span className="font-light">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(24,24,22,0.06)]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.14em] uppercase text-[#181816] hover:text-[#9A7B50] transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internal Navigation / Cross-Link Banner */}
      <div className="container-main mb-20">
        <div className="bg-[#181816] text-[#F4F1EA] p-8 sm:p-12 border border-[rgba(24,24,22,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#9A7B50] block mb-2">
              Ready to Explore Products?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-3">
              Explore Our 12 Master Export Collections
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F1EA]/70 font-light leading-relaxed">
              Browse 280+ catalogued pieces across lighting, glass artistry, brass decor, and bespoke furniture with complete specifications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="py-3 px-6 bg-[#9A7B50] text-white text-xs font-sans font-medium tracking-[0.18em] uppercase hover:bg-[#85673E] transition-colors"
            >
              View Collections
            </Link>
            <Link
              href="/gallery"
              className="py-3 px-6 border border-[#F4F1EA]/30 text-[#F4F1EA] text-xs font-sans font-medium tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
            >
              Portfolio Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-main">
        <div className="max-w-3xl mb-12">
          <span className="text-[0.6875rem] font-sans font-medium tracking-[0.25em] uppercase text-[#9A7B50] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
            International Trade &amp; Sourcing FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[rgba(24,24,22,0.08)] p-6 flex flex-col justify-start"
            >
              <h3 className="font-sans text-sm font-medium text-[#181816] mb-3">
                {faq.q}
              </h3>
              <p className="font-sans text-xs text-[#6F6A61] leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
