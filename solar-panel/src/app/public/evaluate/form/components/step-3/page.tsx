"use client";

import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";
import StepThreeFormFields from "./form-fields";

export default function FormStepThree(): React.ReactNode {
  const { currentStep, isStepValid } = useEvaluationFormStore();

  if (currentStep !== 3) return null;

  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Schedule Evaluation"
        copy="Choose your preferred date and time"
      />
      <StepThreeFormFields />
      <CtaContainer currentStep={3} canProceed={isStepValid(3)} />
    </section>
  );
}
