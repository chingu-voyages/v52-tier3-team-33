import CtaContainer from "../adopt/form-navigation";
import HeadContainer from "../adopt/head";

export default function FormStepOne(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Personal Information"
        copy="Please provide your contact details"
      />
      <p>step 1</p>
      <CtaContainer />
    </section>
  );
}
