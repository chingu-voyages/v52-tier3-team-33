import CtaContainer from "../adopt/cta";
import HeadContainer from "../adopt/head";

export default function FormStepFour(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer />
      <p>step 4</p>
      <CtaContainer />
    </section>
  );
}
