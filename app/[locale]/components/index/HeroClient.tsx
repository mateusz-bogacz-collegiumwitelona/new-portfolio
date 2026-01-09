"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./indexHero"), { ssr: false });

export default function HeroClient() {
  return <HeroSection />;
}
