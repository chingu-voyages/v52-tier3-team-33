"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import HeadContainer from "../adopt/head";
import StepFourFormFields from "./form-fields";

export default function FormStepFour(): React.ReactNode {
  const router = useRouter();
  const { currentStep, formData, resetForm, updateCurrentStep } =
    useEvaluationFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await axios.post("/api/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      setIsSubmitting(false);
      router.push("/public/evaluate/form/success");
    },
    onError: (error: any) => {
      console.error("Submission error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true);
    mutate(formData);
  };

  if (currentStep !== 4) return null;

  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Review and Submit"
        copy="Please review all information before submitting"
      />
      <StepFourFormFields />
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => updateCurrentStep(3)}
          disabled={isSubmitting}
        >
          Return to Form
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Submitting...
            </span>
          ) : (
            "Submit Request"
          )}
        </Button>
      </div>
    </section>
  );
}
