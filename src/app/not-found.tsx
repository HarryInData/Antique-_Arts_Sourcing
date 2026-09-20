import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Antique Arts Sourcing",
  description:
    "The requested page could not be located. Explore our luxury handcrafted décor collections, export services, or get in touch with our sourcing team.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-24 bg-ivory text-ink">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-accent font-medium">
          404 Error — Resource Not Found
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-ink tracking-tight">
          Page Not Located
        </h1>

        <p className="font-body text-base sm:text-lg text-muted max-w-lg mx-auto font-light leading-relaxed">
          The page or product category you are looking for may have been moved, renamed, or updated. Please navigate through our curated export collections or contact our trade desk.
        </p>

        {/* Quick B2B Navigation Hub */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
          <Link
            href="/collections"
            className="p-4 rounded-sm border border-border bg-white/50 hover:bg-white hover:border-accent transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-ink font-medium text-sm">
              <span>View Collections</span>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <p className="text-xs text-muted mt-1 font-light">
              12 export verticals &amp; 280+ handcrafted masterworks
            </p>
          </Link>

          <Link
            href="/gallery"
            className="p-4 rounded-sm border border-border bg-white/50 hover:bg-white hover:border-accent transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-ink font-medium text-sm">
              <span>Portfolio Gallery</span>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <p className="text-xs text-muted mt-1 font-light">
              Catalog specifications, dimensions &amp; RFQ
            </p>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-sm border border-border bg-white/50 hover:bg-white hover:border-accent transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-ink font-medium text-sm">
              <span>B2B Services</span>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <p className="text-xs text-muted mt-1 font-light">
              OEM/ODM, factory audits &amp; export logistics
            </p>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-sm border border-border bg-white/50 hover:bg-white hover:border-accent transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-ink font-medium text-sm">
              <span>Contact Trade Desk</span>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <p className="text-xs text-muted mt-1 font-light">
              Request quotation &amp; discuss custom requirements
            </p>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
