import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Benefits(): React.ReactNode {
  return (
    <section
      className="flex min-h-[32rem] w-full flex-col items-center justify-center bg-white py-16"
      id="benefits"
    >
      <h1 className="text-3xl font-bold">Why Choose Solar Energy</h1>
      <p className="text-muted-foreground mt-2 text-lg">
        Discover the advantages of switching to solar power
      </p>
      <div className="mt-8 flex w-full flex-wrap justify-center gap-4 px-4 sm:px-8 lg:px-16">
        <Card className="w-full max-w-[300px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <div className="mb-2 text-3xl">💰</div>
            <CardTitle>Save Money</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Reduce your monthly energy bills and increase property value</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[300px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <div className="mb-2 text-3xl">🌍</div>
            <CardTitle>Eco-Friendly</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Reduce your carbon footprint and help protect the environment</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[300px] text-center">
          <CardHeader className="space-y-0 pb-2">
            <div className="mb-2 text-3xl">⚡</div>
            <CardTitle>Energy Independence</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-2">
            <p>Generate your own clean energy and reduce grid dependence</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
