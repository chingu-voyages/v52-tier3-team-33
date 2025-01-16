"use client";

import { Card } from "@/components/ui/card";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

import SafeForLater from "./adopt/safe-for-later";
import StepsCounter from "./adopt/steps-cunter";
import FormStepOne from "./components/step-1/page";
import FormStepTwo from "./components/step-2/page";
import FormStepThree from "./components/step-3/page";
import FormStepFour from "./components/step-4/page";

export default function EvaluateForm(): React.ReactNode {
  const { currentStep } = useEvaluationFormStore();

  return (
    <section className="flex size-full flex-col items-center justify-between gap-4 bg-gray-100">
      <StepsCounter currentStep={currentStep} />
      <Card className="flex w-3/4 flex-col gap-4 p-4">
        <FormStepOne />
        <FormStepTwo />
        <FormStepThree />
        <FormStepFour />
      </Card>
      <SafeForLater />
    </section>
  );
}
