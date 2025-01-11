import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SafeForLater(): React.ReactNode {
  return (
    <section className="flex w-full items-center justify-between gap-2 bg-blue-50 py-4">
      <div>
        <h2>Want to finish later?</h2>
        <p>Save your progress and get a link to continue later</p>
      </div>
      <Link href="/public/evaluate/form">
        <Button variant="outline">Save Progress</Button>
      </Link>
    </section>
  );
}
