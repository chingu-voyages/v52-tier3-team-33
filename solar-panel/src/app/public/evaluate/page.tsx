import CTA from "./adopt/cta";
import ProcessSteps from "./adopt/process-steps";
import RequirementsCard from "./adopt/requirements-card";

export default function EvaluateInfo(): React.ReactNode {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start bg-gray-300">
      <RequirementsCard />
      <ProcessSteps />
      <CTA />
    </section>
  );
}
