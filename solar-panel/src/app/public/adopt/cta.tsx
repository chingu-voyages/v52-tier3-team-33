import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CTA(): React.ReactNode {
  return (
    <section
      className="bg-primary flex min-h-64 w-full flex-col items-center justify-center text-white"
      id="cta"
    >
      <h1 className="text-3xl font-bold">Ready to Get Started?</h1>
      <p className="mt-4 text-lg">
        Schedule your free solar panel evaluation today
      </p>
      <Link href="/public/evaluate" className="mt-8">
        <Button variant="secondary" size="lg">
          Request Evaluation
        </Button>
      </Link>
    </section>
  );
}
