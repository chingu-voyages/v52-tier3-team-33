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
  FormStepOneSchema,
  type StepOneType,
} from "@/utils/schemas/evaluation-form-schema";

import CtaContainer from "../adopt/form-navigation";

export default function StepOneFormFields(): React.ReactNode {
  const { formData, updateFormData, updateCurrentStep } =
    useEvaluationFormStore();

  const form = useForm<StepOneType>({
    resolver: zodResolver(FormStepOneSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
    },
  });

  function onSubmit(values: StepOneType): void {
    updateFormData(values);
    if (form.formState.isValid) {
      updateCurrentStep(2);
    }
  }

  return (
    <Form {...form}>
      <form
        id="step-1-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                We&apos;ll send confirmation and updates to this email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(000) 000-0000" {...field} />
              </FormControl>
              <FormDescription>
                For scheduling and day-of coordination
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <CtaContainer currentStep={1} canProceed={form.formState.isValid} />
      </form>
    </Form>
  );
}
