import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RequirementsCard(): React.ReactNode {
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Property Location</h3>
            <p className="text-sm text-gray-600">
              Must be within Los Angeles city limits
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Property Type</h3>
            <p className="text-sm text-gray-600">
              Residential, commercial, or industrial buildings
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Ownership</h3>
            <p className="text-sm text-gray-600">
              Must be property owner or have owner&apos;s authorization
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Roof Condition</h3>
            <p className="text-sm text-gray-600">
              Roof should be in good condition and less than 15 years old
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Shading</h3>
            <p className="text-sm text-gray-600">
              Minimal shade coverage during peak sunlight hours
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Documentation</h3>
            <p className="text-sm text-gray-600">
              Recent utility bills and property documents
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
