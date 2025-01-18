"use client";

import Benefits from "@/app/public/adopt/benefits";
import CTA from "@/app/public/adopt/cta";
import FAQ from "@/app/public/adopt/faq";
import Hero from "@/app/public/adopt/hero";
import Process from "@/app/public/adopt/process";

export default function Main(): React.ReactNode {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <Hero />
      <Benefits />
      <Process />
      <FAQ />
      <CTA />
    </div>
  );
}
