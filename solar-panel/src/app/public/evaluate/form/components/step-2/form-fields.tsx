"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";
import {
  FormStepTwoSchema,
  type StepTwoType,
} from "@/utils/schemas/evaluation-form-schema";

export default function StepTwoFormFields(): React.ReactNode {
  const { formData, updateFormData } = useEvaluationFormStore();

  const form = useForm<StepTwoType>({
    resolver: zodResolver(FormStepTwoSchema),
    defaultValues: {
      streetAddress: formData.streetAddress || "",
      propertyType: formData.propertyType || "Single Family",
      roofAccess: formData.roofAccess || "Easy Access",
      additionalLocation: formData.additionalLocation || "",
    },
  });

  function onSubmit(values: StepTwoType): void {
    updateFormData(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Start typing to search..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roofAccess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roof Access</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Property Details</FormLabel>
              <FormControl>
                <Input
                  placeholder="Any special instructions for accessing the property..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Include details about parking, gate codes, or other access
                information
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
