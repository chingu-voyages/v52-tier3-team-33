import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Process(): React.ReactNode {
  return (
    <section className="process main-section" id="process">
      <h1>How It Works</h1>
      <p>Simple steps to get your solar evaluation</p>
      <div className="flex gap-6">
        <Card>
          <CardHeader>
            <CardTitle>1</CardTitle>
            <CardTitle>Request</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Fill out our simple evaluation form</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>2</CardTitle>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Choose your preferred evaluation time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>3</CardTitle>
            <CardTitle>Evaluate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get professional assessment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>4</CardTitle>
            <CardTitle>Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Receive detailed recommendations</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
