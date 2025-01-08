import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CTA(): React.ReactNode {
  return (
    <section
      className="flex max-h-96 min-h-80 w-full flex-col items-center justify-center bg-gray-300"
      id="cta"
    >
      <h1>Ready to Get Started?</h1>
      <p>Schedule your free solar panel evaluation today</p>
      <Link href="/public/evaluate">
        <Button variant="default" size="lg">
          Request Evaluation
        </Button>
      </Link>
    </section>
  );
}