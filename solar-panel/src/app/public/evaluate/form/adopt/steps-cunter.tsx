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
          className={`rounded-full border-2 ${
            isStepValid(1)
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-gray-300 bg-white"
          } ${currentStep === 1 ? "border-primary" : ""} px-4 py-2`}
        >
          1
        </p>
        <p>Personal Info</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 ${
            isStepValid(2)
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-gray-300 bg-white"
          } ${currentStep === 2 ? "border-primary" : ""} px-4 py-2`}
        >
          2
        </p>
        <p>Location</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 ${
            isStepValid(3)
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-gray-300 bg-white"
          } ${currentStep === 3 ? "border-primary" : ""} px-4 py-2`}
        >
          3
        </p>
        <p>Schedule</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={`rounded-full border-2 ${
            isStepValid(4)
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-gray-300 bg-white"
          } ${currentStep === 4 ? "border-primary" : ""} px-4 py-2`}
        >
          4
        </p>
        <p>Confirmation</p>
      </div>
    </section>
  );
}
