import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProcessSteps(): React.ReactNode {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <h2 className="text-center text-2xl font-bold">Evaluation Process</h2>
      <div className="grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="w-full max-w-[250px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-xl">1</CardTitle>
            <CardTitle>Request</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Fill out our simple evaluation form</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[250px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-xl">2</CardTitle>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Choose your preferred evaluation time</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[250px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-xl">3</CardTitle>
            <CardTitle>Evaluate</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Get professional assessment</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[250px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-xl">4</CardTitle>
            <CardTitle>Review</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Receive detailed recommendations</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
