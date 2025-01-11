import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function FormNavigation(): React.ReactNode {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <p>Step 1 of 4</p>
      <div className="flex items-center justify-center gap-2">
        <Link href="/">
          <Button variant="outline">Back</Button>
        </Link>
        <Link href="/">
          <Button variant="default">Next Step</Button>
        </Link>
      </div>
    </div>
  );
}
