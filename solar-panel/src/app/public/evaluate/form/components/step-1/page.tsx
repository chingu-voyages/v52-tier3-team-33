import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";
import StepOneFormFields from "./form-fields";

export default function FormStepOne(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Personal Information"
        copy="Please provide your contact details"
      />
      <StepOneFormFields />
      <CtaContainer />
    </section>
  );
}
