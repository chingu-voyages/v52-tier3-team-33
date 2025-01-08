import { Button } from "@/components/ui/button";

export default function Hero(): React.ReactNode {
  return (
    <div className="flex max-h-96 min-h-80 w-full flex-col items-center justify-center bg-gray-300 bg-[url('../../public/img/hero-img.png')] bg-cover bg-center">
      <h1>Free Solar Panel Evaluation</h1>
      <p>
        Get a professional assessment of your property&apos;s solar potential
        from city-approved specialists
      </p>
      <Button>Request an Evaluation</Button>
    </div>
  );
}
