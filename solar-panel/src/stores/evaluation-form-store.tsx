import { create } from "zustand";

import type { FormEvaluationType } from "../utils/schemas/evaluation-form-schema";

interface EvaluationFormState {
  formData: Partial<FormEvaluationType>;
  currentStep: number;

  updateFormData: (data: Partial<FormEvaluationType>) => void;
  updateCurrentStep: (step: number) => void;
  resetForm: () => void;

  isSubmitted: boolean;
  updateIsSubmitted: (status: boolean) => void;

  isStepValid: (step: number) => boolean;
  updateIsStepValid: (step: number, status: boolean) => void;
}

export const useEvaluationFormStore = create<EvaluationFormState>()(
  (set, get) => ({
    formData: {},
    currentStep: 1,
    isSubmitted: false,

    updateFormData: (data) => {
      set((state) => {
        const newFormData = {
          ...state.formData,
          ...data,
        };
        return { formData: newFormData };
      });
    },

    updateCurrentStep: (step) => set({ currentStep: step }),

    resetForm: () =>
      set({
        formData: {},
        currentStep: 1,
        isSubmitted: false,
      }),

    updateIsSubmitted: (status) => set({ isSubmitted: status }),

    isStepValid: (step) => {
      const { formData } = get();

      switch (step) {
        case 1:
          return !!(
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone
          );
        case 2:
          return !!(
            formData.streetAddress &&
            formData.propertyType &&
            formData.roofAccess
          );
        case 3:
          return !!(formData.date && formData.timeSlot);
        default:
          return false;
      }
    },

    updateIsStepValid(step, status) {
      set((state) => ({
        ...state,
        isStepValid: (stepToCheck: number) => {
          if (stepToCheck === step) {
            return status;
          }
          return state.isStepValid(stepToCheck);
        },
      }));
    },
  })
);
