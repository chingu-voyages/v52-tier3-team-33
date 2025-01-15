"use client";

import { Button } from "@/components/ui/button";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

interface Props {
  currentStep: number;
  canProceed: boolean;
}

export default function FormNavigation({
  currentStep,
  canProceed,
}: Props): React.ReactNode {
  const { updateCurrentStep } = useEvaluationFormStore();

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <p>Step {currentStep} of 4</p>
      <div className="flex items-center justify-center gap-2">
        {currentStep > 1 && (
          <Button
            variant="outline"
            onClick={() => updateCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
        )}
        {currentStep < 4 && (
          <Button
            variant="default"
            disabled={!canProceed}
            onClick={() => updateCurrentStep(currentStep + 1)}
          >
            Next Step
          </Button>
        )}
      </div>
    </div>
  );
}
