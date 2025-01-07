import { Button } from "@/components/ui/button";

export default function Hero(): React.ReactNode {
  return (
    <div className="hero main-section">
      <h1>Free Solar Panel Evaluation</h1>
      <p>
        Get a professional assessment of your property&apos;s solar potential
        from city-approved specialists
      </p>
      <Button>Request an Evaluation</Button>
    </div>
  );
}
