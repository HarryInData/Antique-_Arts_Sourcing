import { useState } from "react";
import type { GalleryCategory } from "@/types";

export function useGalleryFilter() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const selectFilter = (category: string) => {
    setActiveFilter(category);
    
    // Automatically smooth scroll to gallery if link is clicked
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeFilter,
    selectFilter,
  };
}
