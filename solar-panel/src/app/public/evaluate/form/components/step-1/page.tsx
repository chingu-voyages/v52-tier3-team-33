import CtaContainer from "../adopt/cta";
import HeadContainer from "../adopt/head";

export default function FormStepOne(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer />
      <p>step 1</p>
      <CtaContainer />
    </section>
  );
}