import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CTA(): React.ReactNode {
  return (
    <section
      className="flex max-h-96 min-h-80 w-full flex-col items-center justify-center bg-gray-300"
      id="cta"
    >
      <Card>
        <CardHeader>
          <CardTitle>Ready to Get Started?</CardTitle>
          <CardDescription>
            <p>
              The evaluation process takes approximately 5-10 minutes to
              complete
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/public/evaluate/form">
            <Button variant="default">Start Evaluation Process →</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
