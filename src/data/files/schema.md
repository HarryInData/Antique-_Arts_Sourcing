# Product Data Schema

This document describes the structure of the JSON dataset used by the Next.js
antique products website. It is intended for developers and AI agents that
need to read, extend, or generate content against this data without
inspecting the raw JSON files manually.

## Files

| File | Description |
|---|---|
| `products.json` | Master array containing every product across all categories, in original sheet order. |
| `categories.json` | Array of category summary objects (one per worksheet/category). |
| `<category-slug>.json` (e.g. `lamps-lightings.json`) | Array of products belonging to a single category. Same product shape as `products.json`, filtered to that category. |

Every product object appears in exactly two places: its category file and
`products.json`. The two copies are kept field-identical.

---

## Product Object

Field order is identical across every product in every file.

| Field | Type | Required | Purpose | Allowed values / format | Example |
|---|---|---|---|---|---|
| `id` | string | yes | Unique identifier for the product. Currently equal to `sku`. | Same format as `sku` | `"AAS-1001"` |
| `sku` | string | yes | Stock keeping unit, the canonical unique product code. Never changes. | `AAS-####` (source system format) | `"AAS-1001"` |
| `category` | string | yes | Human-readable category display name. | Title Case, matches a `name` in `categories.json` | `"Lamps & Lightings"` |
| `categorySlug` | string | yes | URL-safe category identifier, matches `slug` in `categories.json` and the category's filename. | kebab-case | `"lamps-lightings"` |
| `name` | string | no (may be `""`) | Product name/title. | Title Case free text, `""` if unknown | `"Table Lamps"` |
| `slug` | string | yes | Globally unique, URL-safe product identifier. Built as `<slugified-name>-<slugified-sku>`; falls back to just the slugified SKU when `name` is empty. | kebab-case, unique across the entire dataset | `"table-lamps-aas-1001"` |
| `material` | string | no (may be `""`) | Raw material composition. | Free text, comma/`&`-separated when multiple materials, Title Case | `"Glass, Electrical & Fabric"` |
| `finish` | string | no (may be `""`) | Surface finish or color treatment. | Free text, Title Case | `"Outside Silvering & Color"` |
| `dimensions` | string | no (may be `""`) | Physical size. Units are preserved as given in the source. | Free text, upper-case unit tokens (`DIA`, `HT`, `CM`, `MM`) | `"DIA-12, HT-35 CM"` |
| `color` | string | no | Product color, currently unpopulated. | Free text, `""` if unknown | `""` |
| `weight` | number \| null | no | Product weight, currently unpopulated. | Positive number (unit TBD — recommend kilograms) or `null` | `null` |
| `description` | string | no | Long-form marketing description. Intentionally left blank; to be filled by content team or AI later. | Free text, `""` when empty | `""` |
| `shortDescription` | string | no | Short teaser/summary description for listing cards. Intentionally left blank. | Free text, `""` when empty | `""` |
| `stock` | integer \| null | no | Units available. `null` when unknown. | Non-negative integer or `null` | `100` |
| `price` | number \| null | no | Unit price. Always `null` — this is a quote-based business; prices are not published. | Always `null` until a pricing workflow is introduced | `null` |
| `currency` | string | yes | ISO 4217 currency code used if/when a price is ever set. | `"USD"` | `"USD"` |
| `image` | string | yes | Path to the primary product image, keyed by SKU. | `/images/products/<SKU>.webp` | `"/images/products/AAS-1001.webp"` |
| `gallery` | string[] | yes | List of image paths for the product. Contains at least the primary image; may contain additional angles named `<SKU>-1.webp`, `<SKU>-2.webp`, etc. | Array of image path strings | `["/images/products/AAS-1001.webp"]` |
| `featured` | boolean | yes | Whether to highlight this product in "featured" sections. | `true` / `false` | `false` |
| `newArrival` | boolean | yes | Whether to tag this product as a new arrival. | `true` / `false` | `false` |
| `bestSeller` | boolean | yes | Whether to tag this product as a best seller. | `true` / `false` | `false` |
| `isActive` | boolean | yes | Whether the product record is considered complete/publishable. Computed as `true` only when `name`, `material`, and `dimensions` are all non-empty. | `true` / `false` | `true` |
| `tags` | string[] | yes | Free-form tags for search/filtering. Currently always empty; not auto-generated. | Array of strings, may be `[]` | `[]` |
| `seo` | object | yes | SEO metadata container. See below. | Object with `title`, `description` | see below |

### `seo` object

| Field | Type | Purpose | Example |
|---|---|---|---|
| `seo.title` | string | Page `<title>` / meta title override for this product's page. Blank until authored. | `""` |
| `seo.description` | string | Meta description for this product's page. Blank until authored. | `""` |

---

## Category Object (`categories.json`)

| Field | Type | Required | Purpose | Allowed values | Example |
|---|---|---|---|---|---|
| `slug` | string | yes | URL-safe category identifier. Matches `categorySlug` on products and the category's JSON filename. | kebab-case, unique | `"lamps-lightings"` |
| `name` | string | yes | Human-readable category name. | Title Case | `"Lamps & Lightings"` |
| `count` | integer | yes | Number of products in this category (in the corresponding `<slug>.json` file). | Non-negative integer | `30` |
| `isEmpty` | boolean | yes | Convenience flag equal to `count === 0`. Lets UIs hide/disable empty category pages without counting the array. | `true` / `false` | `false` |

---

## Data Rules & Invariants

1. **SKU is the source of truth.** `id` always equals `sku`; both are stable and never regenerated.
2. **Slugs are globally unique** across the entire dataset (not just per category), built from `name` + `sku` so they remain unique even when many products share the same name (e.g. multiple `"Table Lamps"`).
3. **`isActive` is derived, not manually set.** A product is `isActive: true` only if `name`, `material`, and `dimensions` are all non-empty strings. Products imported with only a SKU (no other data) are `isActive: false` and should be hidden from the storefront until enriched, but are never deleted.
4. **Empty categories are preserved**, represented as `[]` in their file and `count: 0, isEmpty: true` in `categories.json`, so the site's category navigation can show "coming soon" states.
5. **No pricing exists yet.** `price` is always `null` and `currency` is always `"USD"`. This is a quote-based business; do not synthesize prices. A future pricing workflow should populate `price` explicitly per SKU.
6. **Images are keyed by SKU**, not by product name, so renaming a product never breaks image paths. `gallery[0]` should generally equal `image`.
7. **Field ordering is identical on every product object** in every file, to make diffs and AI-driven edits predictable.
8. **`description`, `shortDescription`, `tags`, `color`, `weight`, and `seo` fields are intentionally blank placeholders** — no content was auto-generated for them. Downstream tooling (CMS, AI content generation, manual entry) is expected to fill these in later without needing to change the schema.

## Extending the Schema

When adding a new field:
- Add it to every product object in every category file and in `products.json` (keep field order consistent).
- Document it in the table above (type, purpose, allowed values, example).
- Prefer `""`, `null`, `[]`, or `false` as the "unset" default, matching the conventions already used, so existing consumers that don't know about the new field degrade gracefully.
