import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Benefits(): React.ReactNode {
  return (
    <section
      className="flex max-h-96 min-h-80 w-full flex-col items-center justify-center"
      id="benefits"
    >
      <h1>Why Choose Solar Energy</h1>
      <p>Discover the advantages of switching to solar power</p>
      <div className="flex gap-6">
        {/* TODO: Add images to cards */}
        <Card>
          <div>💰</div>
          {/* <img src="/images/benefits/save-money.png" alt="Save Money" /> */}
          <CardHeader>
            <CardTitle>Save Money</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Reduce your monthly energy bills and increase property value</p>
          </CardContent>
        </Card>
        <Card>
          <div>🌍</div>
          {/* <img src="/images/benefits/save-money.png" alt="Save Money" /> */}
          <CardHeader>
            <CardTitle>Eco-Friendly</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Reduce your carbon footprint and help protect the environment</p>
          </CardContent>
        </Card>
        <Card>
          <div>⚡</div>
          {/* <img src="/images/benefits/save-money.png" alt="Save Money" /> */}
          <CardHeader>
            <CardTitle>Energy Independence</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Generate your own clean energy and reduce grid dependence</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
