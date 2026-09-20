# Missing Product Images Report

Generated from `Master_file-_AAS.xlsx`.

**Total product SKUs in workbook:** 180
**Images successfully extracted:** 158
**SKUs with no embedded image:** 22

All 22 missing SKUs are in the **LAMPS & LIGHTINGS** sheet, rows that only
contain a SKU with no other product data (name/material/finish/dimensions
were also blank for these rows in the source workbook) — these correspond
to the `isActive: false` products already flagged in `lamps-lightings.json`.

## Missing SKUs

| SKU | Sheet |
|---|---|
| AAS-1009 | LAMPS & LIGHTINGS |
| AAS-1010 | LAMPS & LIGHTINGS |
| AAS-1011 | LAMPS & LIGHTINGS |
| AAS-1012 | LAMPS & LIGHTINGS |
| AAS-1013 | LAMPS & LIGHTINGS |
| AAS-1014 | LAMPS & LIGHTINGS |
| AAS-1015 | LAMPS & LIGHTINGS |
| AAS-1016 | LAMPS & LIGHTINGS |
| AAS-1017 | LAMPS & LIGHTINGS |
| AAS-1018 | LAMPS & LIGHTINGS |
| AAS-1019 | LAMPS & LIGHTINGS |
| AAS-1020 | LAMPS & LIGHTINGS |
| AAS-1021 | LAMPS & LIGHTINGS |
| AAS-1022 | LAMPS & LIGHTINGS |
| AAS-1023 | LAMPS & LIGHTINGS |
| AAS-1024 | LAMPS & LIGHTINGS |
| AAS-1025 | LAMPS & LIGHTINGS |
| AAS-1026 | LAMPS & LIGHTINGS |
| AAS-1027 | LAMPS & LIGHTINGS |
| AAS-1028 | LAMPS & LIGHTINGS |
| AAS-1029 | LAMPS & LIGHTINGS |
| AAS-1030 | LAMPS & LIGHTINGS |

## Notes

- A single sheet-level banner/logo image (anchored at row 0, column A) exists
  on every worksheet and was intentionally excluded — it is not a product
  photo, so it is not exported as a SKU file.
- No embedded image was found anchored to more than one product row, and no
  image was anchored to a row without a readable SKU, so no manual
  disambiguation was required.
- `/mnt/user-data/outputs/images/products/<SKU>.webp` now exists for all 158
  SKUs that had a source image. The JSON files still reference
  `/images/products/<SKU>.webp` for every SKU (including the 22 above) —
  those paths will 404 until images are supplied for those SKUs.
