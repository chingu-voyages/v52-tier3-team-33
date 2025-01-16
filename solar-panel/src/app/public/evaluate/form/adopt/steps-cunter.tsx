"use client";

import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

interface Props {
  currentStep: number;
}

export default function StepsCounter({ currentStep }: Props): React.ReactNode {
  const { isStepValid } = useEvaluationFormStore();

  return (
    <section className="flex w-full items-center justify-evenly gap-2 py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 border-gray-300 bg-white px-4 py-2 ${
            currentStep === 1 ? "border-primary" : ""
          } ${isStepValid(1) ? "border-emerald-500 bg-emerald-500 text-white" : ""}`}
        >
          1
        </p>
        <p>Personal Info</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 border-gray-300 bg-white px-4 py-2 ${
            currentStep === 2 ? "border-primary" : ""
          } ${isStepValid(2) ? "border-emerald-500 bg-emerald-500 text-white" : ""}`}
        >
          2
        </p>
        <p>Location</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 border-gray-300 bg-white px-4 py-2 ${
            currentStep === 3 ? "border-primary" : ""
          } ${isStepValid(3) ? "border-emerald-500 bg-emerald-500 text-white" : ""}`}
        >
          3
        </p>
        <p>Schedule</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 border-gray-300 bg-white px-4 py-2 ${
            currentStep === 4 ? "border-primary" : ""
          } ${isStepValid(4) ? "border-emerald-500 bg-emerald-500 text-white" : ""}`}
        >
          4
        </p>
        <p>Confirmation</p>
      </div>
    </section>
  );
}
