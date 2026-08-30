"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { CollectionGallery } from "@/components/sections/CollectionGallery";
import { CraftSection } from "@/components/sections/CraftSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { HouseSection } from "@/components/sections/HouseSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Editorial Hero */}
      <HeroSection />

      {/* Introduction — Objects with History */}
      <EditorialIntro />

      {/* The Collection — 6 Categories */}
      <CollectionGallery />

      {/* Craftsmanship — From Hands to Spaces */}
      <CraftSection />

      {/* Selected Work — Horizontal Gallery */}
      <SelectedWork />

      {/* Custom Manufacturing — OEM / ODM */}
      <ManufacturingSection />

      {/* Objects in Context — Project Gallery */}
      <ProjectsGallery />

      {/* Global Reach — Worldwide Delivery */}
      <GlobalReach />

      {/* The House — Heritage & About */}
      <HouseSection />

      {/* Final CTA — Build Something Worth Remembering */}
      <FinalCTA />
    </>
  );
}
