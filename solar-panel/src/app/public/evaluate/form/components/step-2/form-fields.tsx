"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AddressSearch from "@/components/ui/address-search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/dropdown-select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";
import {
  FormStepTwoSchema,
  type StepTwoType,
} from "@/utils/schemas/evaluation-form-schema";

import CtaContainer from "../adopt/form-navigation";

export default function StepTwoFormFields(): React.ReactNode {
  const { formData, updateFormData, updateCurrentStep } =
    useEvaluationFormStore();

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
    if (form.formState.isValid) {
      updateCurrentStep(3);
    }
  }

  return (
    <Form {...form}>
      <form
        id="step-2-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <AddressSearch
                  value={field.value}
                  onChange={(value, coordinates) => {
                    field.onChange(value);
                    if (coordinates) {
                      updateFormData({
                        ...formData,
                        coordinates: {
                          lat: coordinates.lat,
                          lng: coordinates.lng,
                        },
                      });
                    }
                  }}
                />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  {field.value || "Select Property Type"}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Single Family">SingleFamily</SelectItem>
                  <SelectItem value="Multi Family">MultiFamily</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  {field.value || "Select Roof Access"}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy Access">Easy Access</SelectItem>
                  <SelectItem value="Limited Access">Limited Access</SelectItem>
                  <SelectItem value="Needs Special Equipment">
                    Needs Special Equipment
                  </SelectItem>
                </SelectContent>
              </Select>
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
                <Textarea
                  placeholder="Any special instructions for accessing the property..."
                  className="min-h-24"
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
        <CtaContainer currentStep={2} canProceed={form.formState.isValid} />
      </form>
    </Form>
  );
}
