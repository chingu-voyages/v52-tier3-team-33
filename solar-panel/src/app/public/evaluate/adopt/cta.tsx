import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CTA(): React.ReactNode {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
          <p className="mt-2 text-gray-600">
            The evaluation process takes approximately 5-10 minutes to complete
          </p>
        </CardHeader>
        <CardContent className="pb-8">
          <Link href="/public/evaluate/form">
            <Button variant="default" size="lg" className="px-8">
              Start Evaluation Process →
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
