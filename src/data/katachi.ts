import { KatachiProduct, KatachiCollection, KatachiMaterial, KatachiArticle } from "@/types/katachi";

export const BRAND_NAME = "KATACHI";
export const BRAND_TAGLINE = "Objects for considered living";
export const FREE_SHIPPING_THRESHOLD = 2000;

export const NAV_LINKS = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Seating", href: "#collections" },
  { label: "Tables", href: "#collections" },
  { label: "Storage", href: "#collections" },
  { label: "Objects", href: "#collections" },
  { label: "Journal", href: "#journal" },
];

export const COLLECTIONS: KatachiCollection[] = [
  {
    id: "seating",
    title: "Seating",
    category: "Collection 01",
    description: "Low-slung armchairs, architectural benches, and enveloping lounge silhouettes engineered for deep repose.",
    image: "/images/katachi/col-seating.jpg",
    count: "12 Pieces",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "tables",
    title: "Tables",
    category: "Collection 02",
    description: "Solid timber dining surfaces, honed travertine plinths, and coffee tables with sculptural integrity.",
    image: "/images/katachi/col-tables.jpg",
    count: "8 Pieces",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "storage",
    title: "Storage",
    category: "Collection 03",
    description: "Fluted tambour credenzas, modular shelving, and quiet architectural cabinetry with discreet joinery.",
    image: "/images/katachi/col-storage.jpg",
    count: "6 Pieces",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "objects",
    title: "Objects",
    category: "Collection 04",
    description: "Handcrafted unglazed ceramic vessels, cast bronze burners, and carved stone accents for ritual spaces.",
    image: "/images/katachi/col-objects.jpg",
    count: "14 Pieces",
    aspectRatio: "aspect-[3/4]",
  },
];

export const FEATURED_PRODUCTS: KatachiProduct[] = [
  {
    id: "cloud-lounge-chair",
    name: "Cloud Lounge Chair",
    category: "Seating",
    price: 2850,
    priceFormatted: "$2,850",
    image: "/images/katachi/chair.jpg",
    material: "Textured Bouclé & Smoked Oak Base",
    colors: [
      { name: "Warm Ivory", hex: "#F3EFEA" },
      { name: "Oat Oatmeal", hex: "#DED6C7" },
      { name: "Charcoal Wool", hex: "#2A2927" },
    ],
    dimensions: "W 92 × D 98 × H 74 cm",
    description:
      "A generous low-profile armchair sculpted with organic curves and upholstered in custom high-density tactile bouclé. The concealed rotating blackened oak plinth offers an effortless quiet pivot.",
    leadTime: "4–6 weeks",
    inStock: true,
    featured: true,
  },
  {
    id: "modular-oak-bench",
    name: "Modular Oak Bench",
    category: "Seating",
    price: 1950,
    priceFormatted: "$1,950",
    image: "/images/katachi/bench.jpg",
    material: "Solid European White Oak",
    colors: [
      { name: "Natural White Oak", hex: "#CEBA9D" },
      { name: "Smoked Ash", hex: "#594E44" },
      { name: "Charred Black", hex: "#23211F" },
    ],
    dimensions: "W 180 × D 48 × H 42 cm",
    description:
      "Constructed from sustainable kiln-dried white oak utilizing exposed traditional mortise-and-tenon joints. Designed to function interchangeably as entryway seating, dining bench, or low art display.",
    leadTime: "3–4 weeks",
    inStock: true,
    featured: true,
  },
  {
    id: "walnut-dining-table",
    name: "Walnut Dining Table",
    category: "Tables",
    price: 4200,
    priceFormatted: "$4,200",
    image: "/images/katachi/table.jpg",
    material: "Solid American Black Walnut",
    colors: [
      { name: "Oiled Walnut", hex: "#4C3524" },
      { name: "Deep Espresso", hex: "#2E2017" },
    ],
    dimensions: "W 240 × D 105 × H 75 cm",
    description:
      "An architectural dining centerpiece with softly radiused pill-shaped edges and monolithic fluted wood pedestals. Hand-finished with organic botanical oil that enhances the natural sapwood grain over decades.",
    leadTime: "6–8 weeks (Made to Order)",
    inStock: true,
    featured: true,
  },
  {
    id: "sculptural-storage-unit",
    name: "Sculptural Storage Unit",
    category: "Storage",
    price: 3600,
    priceFormatted: "$3,600",
    image: "/images/katachi/storage.jpg",
    material: "Smoked Oak & Brushed Brass Trim",
    colors: [
      { name: "Smoked Oak", hex: "#3D342A" },
      { name: "Bleached Ash", hex: "#D6CEBF" },
    ],
    dimensions: "W 200 × D 46 × H 68 cm",
    description:
      "A quiet statement credenza with rhythmically milled tambour sliding doors and recessed solid brass handles. Houses integrated wire routing, adjustable interior shelving, and velvet-lined cutlery trays.",
    leadTime: "5–7 weeks",
    inStock: true,
    featured: true,
  },
];

export const SIGNATURE_PRODUCT: KatachiProduct = {
  id: "kyoto-architectural-armchair",
  name: "Kyoto Architectural Armchair",
  category: "Seating",
  price: 3400,
  priceFormatted: "$3,400",
  image: "/images/katachi/signature.jpg",
  material: "Muted Terracotta Linen & Solid American Walnut",
  colors: [
    { name: "Terracotta Linen", hex: "#B85E42" },
    { name: "Warm Bouclé", hex: "#E8E2D5" },
    { name: "Sage Flax", hex: "#7B8673" },
    { name: "Noir Velvet", hex: "#222120" },
  ],
  dimensions: "W 84 × D 92 × H 76 cm · Seat Height 40 cm",
  description:
    "An ode to structural honesty. The Kyoto armchair features a cantilevered solid walnut frame with visible butterfly tenon joints and deep-pocket feather-down cushions upholstered in heavy Belgian flax linen. Made entirely to order in our craft studio.",
  leadTime: "6–8 weeks delivery",
  inStock: true,
  featured: true,
};

export const MATERIALS: KatachiMaterial[] = [
  {
    id: "solid-oak",
    name: "Solid European Oak",
    subtitle: "Sustainably harvested timber",
    description:
      "Felled from certified managed forests in northern Europe. Seasoned over 18 months and finished with matte organic plant wax to preserve the honest open-pore grain.",
    provenance: "Bavaria, Germany",
    swatchColor: "#D1C3A5",
    accentColor: "#8E7D5D",
  },
  {
    id: "american-walnut",
    name: "American Black Walnut",
    subtitle: "Rich tonal heartwood",
    description:
      "Selected for rich chocolate nuances, gentle purple undertones, and dramatic cathedral graining. Deepens into warm honey reflections through natural exposure to light.",
    provenance: "Pennsylvania, USA",
    swatchColor: "#523B2B",
    accentColor: "#3B281B",
  },
  {
    id: "belgian-linen",
    name: "Heavy Belgian Flax",
    subtitle: "Stonewashed master weaving",
    description:
      "Woven on traditional looms in West Flanders. Breathable, hypoallergenic, and naturally durable with an effortlessly relaxed drape that softens with age.",
    provenance: "Flanders, Belgium",
    swatchColor: "#C27A60",
    accentColor: "#9A5B45",
  },
  {
    id: "tactile-boucle",
    name: "Tactile Wool Bouclé",
    subtitle: "Sensory loop yarn",
    description:
      "A high-weight blend of certified merino wool and textured cotton slub. Yields an irregular dimensional fleece surface that responds beautifully to gentle daylight.",
    provenance: "Biella, Italy",
    swatchColor: "#EAE5DA",
    accentColor: "#B5AFA2",
  },
  {
    id: "brushed-steel",
    name: "Brushed Raw Steel & Brass",
    subtitle: "Hand-grained architectural metalwork",
    description:
      "Precision-machined structural metals finished by hand with 320-grit directional satin brushwork, left unlacquered to develop an authentic living patina.",
    provenance: "Kyoto, Japan",
    swatchColor: "#96948F",
    accentColor: "#5F5D58",
  },
  {
    id: "natural-stone",
    name: "Honed Roman Travertine",
    subtitle: "Porous sedimentary limestone",
    description:
      "Quarried from historic thermal spring deposits. Each slab features unique rhythmic cavernous banding and velvety honed matte surfaces that stay cool to the touch.",
    provenance: "Tivoli, Italy",
    swatchColor: "#DDD6C7",
    accentColor: "#9F9481",
  },
];

export const JOURNAL_ARTICLES: KatachiArticle[] = [
  {
    id: "quiet-architecture-of-comfort",
    title: "The quiet architecture of comfort",
    category: "Spatial Philosophy",
    date: "Autumn / Equinox 2026",
    readTime: "6 min read",
    excerpt:
      "How proportion, low horizontal lines, and acoustic negative space create homes that restore mental clarity in an increasingly loud world.",
    image: "/images/katachi/journal-1.jpg",
  },
  {
    id: "why-natural-materials-matter",
    title: "Why natural materials matter",
    category: "Material Honesty",
    date: "Studio Dispatch",
    readTime: "4 min read",
    excerpt:
      "An exploration of tactile memory: why synthetic surfaces degrade our sensory connection to living spaces, while solid wood, wool, and raw stone deepen it.",
    image: "/images/katachi/journal-2.jpg",
  },
  {
    id: "inside-a-slower-home",
    title: "Inside a slower home",
    category: "Living Rituals",
    date: "Case Study",
    readTime: "8 min read",
    excerpt:
      "Step inside architect Kengo Mori’s personal coastal retreat, where morning sunlight choreographs daily rituals around four sculptural furniture elements.",
    image: "/images/katachi/journal-3.jpg",
  },
];

export const POPULAR_SEARCHES = [
  "Cloud Lounge Chair",
  "Walnut Dining",
  "Bouclé Armchair",
  "Modular Bench",
  "Storage Unit",
  "Travertine Stone",
  "Ceramic Vessels",
];
