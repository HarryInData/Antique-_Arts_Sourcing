import React, { FC } from "react";
import Image from "next/image";
import { CustomIcon } from "../icons";
import { siteConfig } from "@/data/siteConfig";
import { footerShowroomLinks, footerExhibitionLinks } from "@/data/navigation";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-[#080808] py-20 border-t border-white/[0.02] text-left">
      <div className="container max-w-container mx-auto px-6">
        
        {/* Grid Structure */}
        <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.2fr] gap-[50px] mb-[60px]">
          
          {/* Brand Column */}
          <div className="footer-col-brand">
            <a href="#" className="logo flex items-center gap-3 no-underline mb-6 flex-shrink-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/images/branding/logo.jpeg"
                  alt="Antique Arts Sourcing Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="brand-text text-[1.25rem] tracking-[0.18em] whitespace-nowrap">
                {siteConfig.brandName}
              </span>
            </a>
            <p className="footer-brand-desc text-text-muted text-[0.95rem] leading-[1.7] font-light">
              Curating premium lighting systems and handcrafted home metalware accessories designed to elevate modern environments.
            </p>
          </div>

          {/* Links Column 1: Showroom */}
          <div className="footer-col-links">
            <h4 className="footer-title font-body text-[0.85rem] uppercase tracking-[0.15em] text-white font-semibold mb-6">
              Showroom
            </h4>
            <ul className="footer-list list-none space-y-3 p-0 m-0">
              {footerShowroomLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link text-text-gray font-light text-[0.9rem] hover:text-accent-gold hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Exhibitions */}
          <div className="footer-col-links">
            <h4 className="footer-title font-body text-[0.85rem] uppercase tracking-[0.15em] text-white font-semibold mb-6">
              Exhibitions
            </h4>
            <ul className="footer-list list-none space-y-3 p-0 m-0">
              {footerExhibitionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link text-text-gray font-light text-[0.9rem] hover:text-accent-gold hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections Column */}
          <div className="footer-col-social">
            <h4 className="footer-title font-body text-[0.85rem] uppercase tracking-[0.15em] text-white font-semibold mb-6">
              Connect
            </h4>
            <div className="footer-social-row flex gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn w-[44px] h-[44px] rounded-full border border-white/[0.08] flex justify-center items-center text-text-gray hover:text-accent-gold hover:border-accent-gold hover:bg-accent-glow transition-fast"
                  aria-label={social.label}
                >
                  <CustomIcon d={social.iconPath} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="footer-bottom text-center pt-10 border-t border-white/[0.03]">
          <p className="text-[0.8rem] text-text-muted m-0 font-light font-body">
            &copy; {currentYear} {siteConfig.brandName} Showroom. All Rights Reserved. Crafted for Exquisite Homes.
          </p>
        </div>

      </div>
    </footer>
  );
};
