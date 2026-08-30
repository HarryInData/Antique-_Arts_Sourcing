import React from "react";
import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { SelectedWork } from "@/components/sections/SelectedWork";

export const metadata: Metadata = {
  title: "Projects — Objects in Context | Antique Arts Sourcing",
  description:
    "Explore Antique Arts Sourcing products integrated into luxury hotels, restaurants, and architectural residences worldwide.",
  alternates: {
    canonical: "https://antiqueartssourcing.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      <SelectedWork />
      <ProjectsGallery />
    </div>
  );
}
