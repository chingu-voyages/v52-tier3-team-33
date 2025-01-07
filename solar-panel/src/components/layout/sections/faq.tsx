import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ(): React.ReactNode {
  return (
    <section className="faq main-section" id="faq">
      <h1>Frequently Asked Questions</h1>
      <p>Find answers to common questions about solar evaluation</p>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>How long does the evaluation take?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Typically 1-2 hours depending on property size</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Is there any cost?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No, evaluations are completely free</p>
          </CardContent>
        </Card>
        <Card>
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
