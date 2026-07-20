import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "whatsapp"
  | "email-outline"
  | "card-enquiry"
  | "card-enquiry-wa"
  | "card-enquiry-email"
  | "text"
  | "gallery-zoom";

interface BaseProps {
  variant?: ButtonVariant;
  isBlock?: boolean;
  icon?: React.ReactNode;
}

type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ClickProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = LinkProps | ClickProps;

export const Button: FC<ButtonProps> = (props) => {
  const { variant = "primary", isBlock = false, icon, className, children, ...rest } = props;

  const baseStyles = "inline-flex items-center justify-center font-body leading-none transition-medium focus:outline-none cursor-pointer";
  
  const variants = {
    primary: "px-9 py-4 rounded-btn text-sm font-medium tracking-widest uppercase bg-accent-gold text-bg-primary hover:bg-accent-warm-light hover:-translate-y-0.5 hover:shadow-[0_10px_25px_var(--accent-glow-strong)]",
    secondary: "px-9 py-4 rounded-btn text-sm font-medium tracking-widest uppercase bg-transparent border border-white/20 text-white hover:border-accent-gold hover:text-accent-gold hover:-translate-y-0.5 hover:shadow-[0_10px_25px_var(--accent-glow)]",
    accent: "px-[22px] py-2.5 rounded-btn text-xs font-medium tracking-widest uppercase bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-primary hover:shadow-[0_5px_15px_var(--accent-glow-strong)]",
    whatsapp: "px-9 py-4 rounded-btn text-sm font-medium tracking-widest uppercase bg-[#25D366] text-white hover:bg-[#1ebe5b] hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)]",
    "email-outline": "px-9 py-4 rounded-btn text-sm font-medium tracking-widest uppercase bg-transparent border border-white/15 text-text-gray hover:border-accent-gold hover:text-accent-gold hover:shadow-[0_10px_25px_var(--accent-glow)]",
    "card-enquiry": "rounded-btn px-6 py-3 text-[11px] font-medium tracking-widest uppercase bg-white text-bg-primary hover:bg-accent-gold hover:text-bg-primary hover:shadow-[0_5px_15px_var(--accent-glow-strong)]",
    "card-enquiry-wa": "rounded-btn px-6 py-3 text-[11px] font-medium tracking-widest uppercase bg-[#25D366] text-white hover:bg-[#1ebe5b] hover:shadow-[0_5px_20px_rgba(37,211,102,0.35)]",
    "card-enquiry-email": "rounded-btn px-6 py-3 text-[11px] font-medium tracking-widest uppercase bg-white/90 text-bg-primary hover:bg-accent-gold hover:text-bg-primary hover:shadow-[0_5px_15px_var(--accent-glow-strong)]",
    text: "inline-flex items-center text-accent-gold text-[13px] font-medium tracking-widest uppercase gap-2 hover:text-accent-warm-light group",
    "gallery-zoom": "absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-[5px] text-white border-none flex items-center justify-center text-lg hover:bg-accent-gold hover:text-bg-primary transition-fast",
  };

  const blockStyle = isBlock ? "flex w-full" : "";
  const buttonClass = cn(baseStyles, variants[variant], blockStyle, className);

  const content = (
    <>
      {icon && <span className={cn("flex items-center justify-center flex-shrink-0", variant !== "gallery-zoom" && "mr-2")}>{icon}</span>}
      <span className="flex items-center justify-center">{children}</span>
      {variant === "text" && (
        <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1.5 ml-2">&rarr;</span>
      )}
    </>
  );

  if (props.href) {
    const { href, ...linkRest } = props as LinkProps;
    return (
      <a href={href} className={buttonClass} {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const { ...buttonRest } = props as ClickProps;
  return (
    <button className={buttonClass} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};
