// ==========================================================================
// ICON COMPONENTS — Centralized SVG icons used across the application
// ==========================================================================

import { type FC, type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const WhatsAppIcon: FC<IconProps> = ({ className = "w-[18px] h-[18px]", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4 5.6C16.7 3.9 14.5 3 12 3C7 3 3 7 3 12C3 13.6 3.4 15.2 4.2 16.6L2.5 22.8L8.8 21.2C10.2 22 11.7 22.4 13.3 22.4H13.4C18.4 22.4 22.4 18.4 22.4 13.4C22.4 11 21.5 8.8 19.8 7.1L18.4 5.6ZM13.4 20.8H13.3C11.9 20.8 10.6 20.4 9.4 19.7L9.1 19.5L5.4 20.5L6.4 16.9L6.2 16.6C5.4 15.3 5 13.8 5 12.2C5 7.7 8.7 4.1 13.2 4.1C15.4 4.1 17.5 5 19.1 6.6C20.7 8.2 21.5 10.3 21.5 12.5C21.4 17.1 17.8 20.8 13.4 20.8ZM18 14.6C17.7 14.5 16.4 13.8 16.1 13.7C15.9 13.6 15.7 13.6 15.5 13.9C15.3 14.2 14.8 14.8 14.6 15C14.5 15.2 14.3 15.2 14 15.1C13.7 14.9 12.8 14.6 11.7 13.6C10.9 12.9 10.3 12 10.1 11.7C10 11.4 10.1 11.3 10.2 11.1C10.4 11 10.5 10.8 10.7 10.6C10.8 10.4 10.9 10.3 11 10.1C11.1 9.9 11 9.7 11 9.6C10.9 9.5 10.4 8.3 10.2 7.8C10 7.3 9.8 7.3 9.6 7.3H9.1C8.9 7.3 8.6 7.4 8.4 7.6C8.2 7.8 7.6 8.4 7.6 9.6C7.6 10.8 8.5 12 8.6 12.2C8.7 12.4 10.4 15 13.1 16.2C13.8 16.5 14.3 16.7 14.7 16.8C15.4 17 16 17 16.5 16.9C17 16.8 18.1 16.2 18.3 15.6C18.5 15 18.5 14.5 18.4 14.4C18.3 14.7 18.1 14.6 18 14.6Z"
      fill="currentColor"
    />
  </svg>
);

/** Email / Mail icon */
export const MailIcon: FC<IconProps> = ({ className = "w-[18px] h-[18px]", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
    />
  </svg>
);

/** Location / Map Pin icon */
export const MapPinIcon: FC<IconProps> = ({ className = "w-[18px] h-[18px]", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
    />
  </svg>
);

/** Phone icon */
export const PhoneIcon: FC<IconProps> = ({ className = "w-[18px] h-[18px]", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
    />
  </svg>
);

/** Download icon */
export const DownloadIcon: FC<IconProps> = ({ className = "w-[18px] h-[18px]", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2m-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67Z"
    />
  </svg>
);

/** Generic SVG icon from a path string */
export const CustomIcon: FC<IconProps & { d: string }> = ({
  className = "w-[18px] h-[18px]",
  d,
  ...props
}) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d={d} />
  </svg>
);
