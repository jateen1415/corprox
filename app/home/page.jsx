import React from "react";
import { Header } from "@/components/layout/header";
import { HeroBanner } from "@/components/heroBanner";
import { ProductDesign } from "@/components/productDesign";
import { LatestWork } from "@/components/latestWork";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />

      <ProductDesign />
      <LatestWork />
    </div>
  );
}
