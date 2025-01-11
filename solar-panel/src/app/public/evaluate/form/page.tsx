import SafeForLater from "./adopt/safe-for-later";
import StepsCounter from "./adopt/steps-cunter";

export default function EvaluateForm(): React.ReactNode {
  return (
    <section className="flex w-full h-screen flex-col items-center gap-2  bg-gray-100 relative">
      <StepsCounter />
      <SafeForLater />
    </section>
  );
}
