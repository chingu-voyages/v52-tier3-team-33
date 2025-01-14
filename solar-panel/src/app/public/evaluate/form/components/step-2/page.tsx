import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";
import StepTwoFormFields from "./form-fields";

export default function FormStepOne(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Property Location"
        copy="Tell us about your property"
      />
      <StepTwoFormFields />
      <CtaContainer />
    </section>
  );
}
