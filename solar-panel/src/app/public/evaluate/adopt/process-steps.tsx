import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProcessSteps(): React.ReactNode {
  return (
    <section className="flex w-full max-w-full flex-col items-center justify-between px-4 py-2">
      <h1>Request Process</h1>
      <div className="flex gap-6">
        <Card>
          <CardHeader>
            <CardTitle>1</CardTitle>
            <CardTitle>Submit Request</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Fill out evaluation form</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>2</CardTitle>
            <CardTitle>Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Request verification</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>3</CardTitle>
            <CardTitle>Confirmation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Schedule confirmed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>4</CardTitle>
            <CardTitle>Evaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>On-site assessment</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
