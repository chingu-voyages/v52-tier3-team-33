import { Button } from "@/components/ui/button";

export default function CTA(): React.ReactNode {
  return (
    <section className="cta main-section" id="cta">
      <h1>Ready to Get Started?</h1>
      <p>Schedule your free solar panel evaluation today</p>
      <Button>Request Evaluation</Button>
    </section>
  );
}
