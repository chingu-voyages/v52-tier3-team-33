"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";
import {
  FormStepThreeSchema,
  type StepThreeType,
} from "@/utils/schemas/evaluation-form-schema";

export default function StepThreeFormFields(): React.ReactNode {
  const { formData, updateFormData } = useEvaluationFormStore();

  const form = useForm<StepThreeType>({
    resolver: zodResolver(FormStepThreeSchema),
    defaultValues: {
      date: formData.date || new Date(),
      timeSlot: formData.timeSlot || "9:00AM-11:00AM",
      additionalNotes: formData.additionalNotes || "",
    },
  });

  function onSubmit(values: StepThreeType): void {
    updateFormData(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={field.value?.toISOString().split("T")[0]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeSlot"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Time Slots</FormLabel>
              <FormControl>
                <Input placeholder="Select a time slot" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Input placeholder="Any special instructions?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
