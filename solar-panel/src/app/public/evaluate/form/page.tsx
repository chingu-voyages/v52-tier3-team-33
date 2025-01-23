"use client";

import { Card } from "@/components/ui/card";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

// import SafeForLater from "./adopt/safe-for-later";
import StepsCounter from "./adopt/steps-cunter";
import FormStepOne from "./components/step-1/page";
import FormStepTwo from "./components/step-2/page";
import FormStepThree from "./components/step-3/page";
import FormStepFour from "./components/step-4/page";

export default function EvaluateForm(): React.ReactNode {
  const { currentStep } = useEvaluationFormStore();

  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StepsCounter currentStep={currentStep} />
        <Card className="mx-auto my-8 max-w-3xl p-6">
          <FormStepOne />
          <FormStepTwo />
          <FormStepThree />
          <FormStepFour />
        </Card>
        {/* <SafeForLater /> */}
      </div>
    </section>
  );
}
