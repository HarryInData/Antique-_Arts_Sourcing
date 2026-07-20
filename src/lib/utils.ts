import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind conflict resolution.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Zero-pad a number to a specified length.
 * Used for hero frame filenames: frame_0000.webp
 */
export function zeroPad(num: number, length: number = 4): string {
  return String(num).padStart(length, "0");
}
