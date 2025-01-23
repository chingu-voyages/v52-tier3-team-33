import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero(): React.ReactNode {
  return (
    <div className="flex min-h-[32rem] w-full flex-col items-center justify-center bg-[url('../../public/img/hero-img.png')] bg-cover bg-center text-white">
      <h1 className="text-4xl font-bold">Free Solar Panel Evaluation</h1>
      <p className="mt-4 max-w-2xl text-center text-lg">
        Get a professional assessment of your property&apos;s solar potential
        from city-approved specialists
      </p>
      <Link href="/public/evaluate" className="mt-8">
        <Button variant="default" size="lg">
          Request an Evaluation
        </Button>
      </Link>
    </div>
  );
}
