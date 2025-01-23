import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ(): React.ReactNode {
  return (
    <section
      className="flex min-h-[32rem] w-full flex-col items-center justify-center py-16"
      id="faq"
    >
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Find answers to common questions about solar evaluation
      </p>
      <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 sm:px-8 lg:px-16">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>How long does the evaluation take?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Typically 1-2 hours depending on property size</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Is there any cost?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No, evaluations are completely free</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>What areas do you cover?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>All addresses within Los Angeles city limits</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
