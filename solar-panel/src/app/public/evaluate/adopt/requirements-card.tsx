import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RequirementsCard(): React.ReactNode {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-between px-4 py-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-start gap-2">
          <div>📋</div>
          <div>
            <CardTitle>Before You Begin</CardTitle>
            <CardDescription>
              <p>Please make sure you have the following information ready</p>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Fill out our simple evaluation form</p>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start gap-2">
              <div>✓</div>
              <div>
                <CardTitle>Property Information</CardTitle>
                <CardDescription>
                  <p>Your complete property address in Los Angeles</p>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start gap-2">
              <div>✓</div>
              <div>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>
                  <p>Valid email address and phone number</p>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start gap-2">
              <div>✓</div>
              <div>
                <CardTitle>Property Access</CardTitle>
                <CardDescription>
                  <p>Information about property access or restrictions</p>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-start gap-2">
              <div>✓</div>
              <div>
                <CardTitle>Availability</CardTitle>
                <CardDescription>
                  <p>Preferred dates and times for evaluation</p>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
