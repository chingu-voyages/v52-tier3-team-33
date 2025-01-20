"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TrackingSchema = z.object({
  requestId: z
    .string()
    .min(1, { message: "Request ID is required" })
    .regex(/^EVL-\d{4}-\d{3}$/, {
      message: "Invalid request ID format (e.g., EVL-2024-001)",
    }),
});

type TrackingFormValues = z.infer<typeof TrackingSchema>;

export default function TrackRequestPage(): React.ReactNode {
  const [isLoading, setIsLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState<string | null>(null);

  const form = useForm<TrackingFormValues>({
    resolver: zodResolver(TrackingSchema),
    defaultValues: {
      requestId: "",
    },
  });

  async function onSubmit(data: TrackingFormValues) {
    setIsLoading(true);
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      setRequestStatus("pending");
    } catch (error) {
      console.error("Failed to fetch status:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Track Your Request</CardTitle>
          <CardDescription>
            Enter your evaluation request ID to check its status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="requestId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Request ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="EVL-2024-001"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Checking...
                  </span>
                ) : (
                  "Check Status"
                )}
              </Button>
            </form>
          </Form>

          {/* Development Helper */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-4">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Development Test ID:
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Request ID: EVL-2024-001</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 w-full text-xs"
                onClick={() => {
                  form.setValue("requestId", "EVL-2024-001");
                }}
              >
                Fill Test Request ID
              </Button>
            </div>
          )}

          {requestStatus && (
            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold">Request Status</h3>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                  Pending Review
                </span>
                <span className="text-sm text-gray-600">
                  Your request is being reviewed by our team
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
