import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Process(): React.ReactNode {
  return (
    <section
      className="flex min-h-[32rem] w-full flex-col items-center justify-center bg-gray-300 py-16"
      id="process"
    >
      <h1 className="text-3xl font-bold">How It Works</h1>
      <p className="text-muted-foreground mt-2 text-lg">
        Simple steps to get your solar evaluation
      </p>
      <div className="mt-8 grid w-full grid-cols-1 place-items-center gap-4 px-4 sm:grid-cols-2 sm:px-8 md:max-w-2xl lg:max-w-none lg:grid-cols-4 lg:px-16">
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
    </section>
  );
}
