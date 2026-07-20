import type { SiteConfig } from "@/types";

// ==========================================================================
// ANTIQUE ARTS SOURCING — SITE CONFIGURATION
// ==========================================================================

export const siteConfig: SiteConfig = {
  brandName: "ANTIQUE ARTS SOURCING",
  tagline: "Premium Handcrafted Lighting & Luxury Décor",

  contact: {
    phone: "+91 75037 95101",
    phoneFormatted: "917503795101",
    email: "info@antiquearts.com",
    address:
      "Dholpura road Pradeep Nagar, Firozabad-283203, U.P, India",
  },

  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com",
      iconPath:
        "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m10.9 2.125a.875.875 0 1 1 0 1.75a.875.875 0 0 1 0-1.75M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z",
    },
    {
      label: "Pinterest",
      href: "https://pinterest.com",
      iconPath:
        "M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.79-.17-2 .03-2.87c.18-.78 1.17-5 1.17-5s-.3-.6-.3-1.5c0-1.4.8-2.45 1.84-2.45c.86 0 1.28.65 1.28 1.43c0 .87-.56 2.18-.84 3.39c-.24 1 .5 1.82 1.48 1.82c1.78 0 3.14-1.87 3.14-4.57c0-2.39-1.72-4.06-4.17-4.06c-2.85 0-4.52 2.13-4.52 4.33c0 .86.33 1.78.74 2.28c.08.1.09.19.07.28c-.08.33-.25 1-.29 1.16c-.05.21-.17.26-.39.16c-1.46-.68-2.37-2.82-2.37-4.54c0-3.69 2.69-7.09 7.74-7.09c4.07 0 7.23 2.9 7.23 6.77c0 4.04-2.54 7.29-6.07 7.29c-1.19 0-2.3-.62-2.68-1.34c0 0-.59 2.24-.73 2.78c-.26.99-.98 2.23-1.46 3.02Z",
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      iconPath:
        "M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.9 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z",
    },
  ],
};

/** Google Maps embed URL for the showroom location */
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Dholpura%20road%20Pradeep%20Nagar%20Firozabad%20283203%20UP%20India&t=&z=14&ie=UTF8&iwloc=&output=embed";
