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
import {
  RadioGroupButtonItem,
  RadioGroupButtons,
} from "@/components/ui/radio-buttons";
import { Textarea } from "@/components/ui/textarea";
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
                <RadioGroupButtons
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-2 md:grid-cols-3"
                >
                  <RadioGroupButtonItem value="9:00AM-11:00AM">
                    9:00AM-11:00AM
                  </RadioGroupButtonItem>
                  <RadioGroupButtonItem value="11:00AM-1:00PM">
                    11:00AM-1:00PM
                  </RadioGroupButtonItem>
                  <RadioGroupButtonItem value="1:00PM-3:00PM">
                    1:00PM-3:00PM
                  </RadioGroupButtonItem>
                  <RadioGroupButtonItem value="3:00PM-5:00PM">
                    3:00PM-5:00PM
                  </RadioGroupButtonItem>
                  <RadioGroupButtonItem value="5:00PM-7:00PM">
                    5:00PM-7:00PM
                  </RadioGroupButtonItem>
                </RadioGroupButtons>
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
                <Textarea
                  placeholder="Any special instructions?"
                  className="min-h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
