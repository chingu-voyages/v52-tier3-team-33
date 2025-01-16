import { z } from "zod";

export const FormStepOneSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .min(10, { message: "Phone must be at least 10 characters" }),
});

export const FormStepTwoSchema = z.object({
  streetAddress: z
    .string()
    .min(1, { message: "Street address is required" })
    .min(5, { message: "Street address must be at least 5 characters" }),
  coordinates: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
  propertyType: z.enum(["Single Family", "Multi Family", "Commercial"], {
    message: "Please select a property type",
  }),
  roofAccess: z.enum(
    ["Easy Access", "Limited Access", "Needs Special Equipment"],
    {
      message: "Please select a roof access type",
    }
  ),
  additionalLocation: z
    .string()
    .max(160, { message: "Additional location info: max 160 characters" })
    .optional(),
});

export const FormStepThreeSchema = z.object({
  date: z.date(),
  timeSlot: z.enum(
    [
      "9:00AM-11:00AM",
      "11:00AM-1:00PM",
      "1:00PM-3:00PM",
      "3:00PM-5:00PM",
      "5:00PM-7:00PM",
    ],
    {
      message: "Please select a time slot",
    }
  ),
  additionalNotes: z
    .string()
    .max(160, { message: "Additional notes: max 160 characters" })
    .optional(),
});

export const FormEvaluationSchema = z.object({
  ...FormStepOneSchema.shape,
  ...FormStepTwoSchema.shape,
  ...FormStepThreeSchema.shape,
});

export type StepOneType = z.infer<typeof FormStepOneSchema>;
export type StepTwoType = z.infer<typeof FormStepTwoSchema>;
export type StepThreeType = z.infer<typeof FormStepThreeSchema>;
export type FormEvaluationType = z.infer<typeof FormEvaluationSchema>;
