"use client";

import Benefits from "@/components/layout/sections/benefits";
import CTA from "@/components/layout/sections/cta";
import FAQ from "@/components/layout/sections/faq";
import Hero from "@/components/layout/sections/hero";
import Process from "@/components/layout/sections/process";
// import SectionSecondaryNavigation from "@/components/layout/sections/section-secondary-navigation";

export default function Main(): React.ReactNode {
  return (
    <div className="main">
      <Hero />
      {/* <SectionSecondaryNavigation /> */}
      <Benefits />
      <Process />
      <FAQ />
      <CTA />
    </div>
  );
}
