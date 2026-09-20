"use client";

/**
 * PillNav - A premium, GSAP-powered pill-shaped navigation component.
 * Features:
 * - Rising circle background animation on hover
 * - Rotating logo animation
 * - Responsive mobile menu with GSAP transitions
 * - Support for Next.js Link and standard anchor tags
 * - Customizable colors, easing, and typography
 */

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  /** Logo icon component, SVG node, or image source URL */
  logo: React.ReactNode | string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Navigation items array */
  items: PillNavItem[];
  /** The current active href for highlighting (defaults to active pathname) */
  activeHref?: string;
  /** Optional extra class names for the nav container */
  className?: string;
  /** GSAP easing function */
  ease?: string;
  /** The base background color of the nav capsule and logo container */
  baseColor?: string;
  /** The color of the pill when not hovered */
  pillColor?: string;
  /** Text color when the pill is hovered */
  hoveredPillTextColor?: string;
  /** Default text color for the pills */
  pillTextColor?: string;
  /** Callback for mobile menu toggle */
  onMobileMenuClick?: () => void;
  /** Whether to play an entrance animation on mount */
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref: propActiveHref,
  className = "",
  ease = "power3.out",
  baseColor = "#181816",
  pillColor = "#F4F1EA",
  hoveredPillTextColor = "#F4F1EA",
  pillTextColor = "#181816",
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const currentPath = usePathname();
  const activeHref = propActiveHref !== undefined ? propActiveHref : currentPath;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoTargetRef = useRef<HTMLDivElement | HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);

  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img
          src={logo}
          alt={logoAlt}
          ref={(el) => {
            logoTargetRef.current = el;
          }}
          className="w-7 h-7 object-contain pointer-events-none select-none"
        />
      );
    }
    return (
      <div
        ref={(el) => {
          logoTargetRef.current = el;
        }}
        className="flex items-center justify-center pointer-events-none select-none"
      >
        {logo}
      </div>
    );
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        if (w === 0 || h === 0) return;

        // Calculate the radius for the expanding circle to cover the pill
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          {
            scale: 1.25,
            xPercent: -50,
            duration: 0.65,
            ease,
            overwrite: "auto",
          },
          0
        );

        if (label) {
          tl.to(
            label,
            {
              y: -(h + 8),
              duration: 0.5,
              ease,
              overwrite: "auto",
            },
            0
          );
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 16), opacity: 0 });
          tl.to(
            hoverLabel,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease,
              overwrite: "auto",
            },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    // Initial load entrance animation
    if (initialLoadAnimation) {
      const logoEl = logoWrapperRef.current;
      const navEl = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0.8, opacity: 0 });
        gsap.to(logoEl, {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.6)",
        });
      }

      if (navEl) {
        const listItems = navEl.querySelectorAll("li");
        gsap.set(listItems, { opacity: 0, y: -10 });
        gsap.to(listItems, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.15,
        });
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      tlRefs.current.forEach((tl) => tl?.kill());
      logoTweenRef.current?.kill();
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.28,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const target = logoTargetRef.current;
    if (!target) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(target, {
      rotate: 360,
      duration: 0.75,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
      onComplete: () => gsap.set(target, { rotate: 0 }),
    });
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);

    const menu = mobileMenuRef.current;
    if (menu) {
      if (nextState) {
        gsap.set(menu, { display: "block", opacity: 0, y: -16 });
        gsap.to(menu, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -16,
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          },
        });
      }
    }
    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href?: string) => !!href && !isExternalLink(href);

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
    "--nav-h": "48px",
    "--logo-size": "44px",
    "--pill-pad-x": "18px",
    "--pill-gap": "6px",
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`relative z-[1000] w-full max-w-4xl mx-auto ${className}`}
      style={cssVars}
    >
      <nav
        className="w-full flex items-center justify-between md:justify-center p-2 sm:p-3 gap-3"
        aria-label="Primary Navigation"
      >
        {/* Logo Section */}
        <div
          ref={logoWrapperRef}
          onMouseEnter={handleLogoEnter}
          className="flex-shrink-0"
        >
          {items.length > 0 && isRouterLink(items[0]?.href) ? (
            <Link
              href={items[0]?.href || "/"}
              className="flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 border border-[rgba(255,255,255,0.08)]"
              style={{
                width: "var(--logo-size)",
                height: "var(--logo-size)",
                background: "var(--base)",
                color: "var(--pill-bg)",
              }}
              aria-label="Home"
            >
              {renderLogo()}
            </Link>
          ) : (
            <a
              href={items[0]?.href || "#"}
              className="flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 border border-[rgba(255,255,255,0.08)]"
              style={{
                width: "var(--logo-size)",
                height: "var(--logo-size)",
                background: "var(--base)",
                color: "var(--pill-bg)",
              }}
              aria-label="Home"
            >
              {renderLogo()}
            </a>
          )}
        </div>

        {/* Desktop Menu Capsule */}
        <div
          ref={navItemsRef}
          className="hidden md:flex items-center rounded-full px-2 shadow-[0_6px_24px_rgba(0,0,0,0.14)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md"
          style={{
            height: "var(--nav-h)",
            background: "var(--base)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-center m-0 p-0 h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg)",
                color: "var(--pill-text)",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: "var(--base)",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-none z-[2] overflow-hidden py-1">
                    <span
                      className={`pill-label relative z-[2] inline-block font-medium tracking-[0.14em] text-[0.72rem] uppercase ${
                        isActive ? "font-semibold" : ""
                      }`}
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center font-medium tracking-[0.14em] text-[0.72rem] uppercase"
                      style={{
                        color: "var(--hover-text)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full z-[4]"
                      style={{ background: "var(--base)" }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center h-[calc(var(--nav-h)-12px)] self-center no-underline rounded-full box-border cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] select-none";

              return (
                <li key={item.href + item.label} role="none" className="flex items-center">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex items-center justify-center rounded-full transition-transform active:scale-90 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[rgba(255,255,255,0.08)] cursor-pointer"
          style={{
            width: "var(--logo-size)",
            height: "var(--logo-size)",
            background: "var(--base)",
            color: "var(--pill-bg)",
          }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-3 right-3 mt-2 rounded-2xl overflow-hidden shadow-2xl z-[999] hidden border border-[rgba(255,255,255,0.1)] backdrop-blur-xl"
        style={{
          background: "var(--base)",
        }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            const content = (
              <span className="flex items-center justify-between">
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B50]" />
                )}
              </span>
            );

            return (
              <li key={item.href + item.label}>
                {isRouterLink(item.href) ? (
                  <Link
                    href={item.href}
                    className={`block py-3 px-5 text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-all ${
                      isActive
                        ? "bg-[#F4F1EA] text-[#181816]"
                        : "text-[#F4F1EA]/80 hover:bg-[#F4F1EA]/10 hover:text-white"
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (mobileMenuRef.current) {
                        mobileMenuRef.current.style.display = "none";
                      }
                    }}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`block py-3 px-5 text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-all ${
                      isActive
                        ? "bg-[#F4F1EA] text-[#181816]"
                        : "text-[#F4F1EA]/80 hover:bg-[#F4F1EA]/10 hover:text-white"
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (mobileMenuRef.current) {
                        mobileMenuRef.current.style.display = "none";
                      }
                    }}
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
