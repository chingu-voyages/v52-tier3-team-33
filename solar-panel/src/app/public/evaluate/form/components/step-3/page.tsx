"use client";

import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import HeadContainer from "../adopt/head";
import StepThreeFormFields from "./form-fields";

export default function FormStepThree(): React.ReactNode {
  const { currentStep } = useEvaluationFormStore();

  if (currentStep !== 3) return null;

  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Schedule Evaluation"
        copy="Choose your preferred date and time"
      />
      <StepThreeFormFields />
    </section>
  );
}
