"use client";

import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import HeadContainer from "../adopt/head";
import StepOneFormFields from "./form-fields";

export default function FormStepOne(): React.ReactNode {
  const { currentStep } = useEvaluationFormStore();

  if (currentStep !== 1) return null;

  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Personal Information"
        copy="Please provide your contact details"
      />
      <StepOneFormFields />
    </section>
  );
}
