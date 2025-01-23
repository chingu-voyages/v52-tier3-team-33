import CTA from "./adopt/cta";
import ProcessSteps from "./adopt/process-steps";
import RequirementsCard from "./adopt/requirements-card";

export default function EvaluateInfo(): React.ReactNode {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start bg-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-8 lg:px-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            Solar Panel Evaluation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Learn about our evaluation process and requirements before getting
            started
          </p>
        </div>
        <div className="space-y-12">
          <RequirementsCard />
          <ProcessSteps />
          <CTA />
        </div>
      </div>
    </section>
  );
}
