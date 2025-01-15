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

  const { currentStep, updateCurrentStep, formData, resetForm } =
    useEvaluationFormStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: typeof formData) => {
      return axios.post("/api/evaluation-requests", data);
    },
    onSuccess: () => {
      resetForm();
      router.push("/public/evaluate/form/success");
    },
    onError: () => {
      setIsSubmitting(false);
    },
  });

  if (currentStep !== 4) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    mutate(formData);
  };
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
        <Button
          variant="default"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </section>
  );
}
