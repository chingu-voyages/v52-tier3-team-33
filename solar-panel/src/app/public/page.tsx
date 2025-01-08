"use client";

import Benefits from "@/app/public/adopt/benefits";
import CTA from "@/app/public/adopt/cta";
import FAQ from "@/app/public/adopt/faq";
import Hero from "@/app/public/adopt/hero";
import Process from "@/app/public/adopt/process";
// import SectionSecondaryNavigation from "@/components/layout/sections/section-secondary-navigation";

export default function Main(): React.ReactNode {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start pt-[64px]">
      <Hero />
      {/* TODO: Add SectionSecondaryNavigation if needed */}
      {/* <SectionSecondaryNavigation /> */}
      <Benefits />
      <Process />
      <FAQ />
      <CTA />
    </div>
  );
}
