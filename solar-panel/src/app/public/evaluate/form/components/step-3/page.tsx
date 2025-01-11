import CtaContainer from "../adopt/cta";
import HeadContainer from "../adopt/head";

export default function FormStepThree(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer />
      <p>step 3</p>
      <CtaContainer />
    </section>
  );
}
