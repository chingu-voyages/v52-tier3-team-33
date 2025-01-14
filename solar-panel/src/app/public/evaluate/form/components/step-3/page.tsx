import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";
import StepThreeFormFields from "./form-fields";

export default function FormStepThree(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Schedule Evaluation"
        copy="Choose your preferred date and time"
      />
      <StepThreeFormFields />
      <CtaContainer />
    </section>
  );
}
