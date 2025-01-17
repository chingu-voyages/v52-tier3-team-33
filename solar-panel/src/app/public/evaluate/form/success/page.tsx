"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

export default function FormSuccess(): React.ReactNode {
  const router = useRouter();
  const { resetForm } = useEvaluationFormStore();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-emerald-500">
            Request Submitted Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Thank you for submitting your solar evaluation request.
            </p>
            <p>
              We will review your information and contact you shortly to confirm
              your appointment.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">What happens next?</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
              <li>Review of your request (1-2 business days)</li>
              <li>Appointment confirmation via email</li>
              <li>On-site evaluation at scheduled time</li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button variant="default">Return to Home</Button>
            </Link>
            <Link href="/public/evaluate">
              <Button variant="outline">New Evaluation</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
