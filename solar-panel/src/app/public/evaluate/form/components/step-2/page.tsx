"use client";

import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";
import StepTwoFormFields from "./form-fields";

export default function FormStepOne(): React.ReactNode {
  const { currentStep, isStepValid } = useEvaluationFormStore();

  if (currentStep !== 2) return null;

  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Property Location"
        copy="Tell us about your property"
      />
      <StepTwoFormFields />
      <CtaContainer currentStep={2} canProceed={isStepValid(2)} />
    </section>
  );
}
