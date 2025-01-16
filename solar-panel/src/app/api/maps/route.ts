import { NextResponse } from "next/server";

const HERE_API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  console.log("1. API Route - Query:", query);
  console.log("2. API Route - API Key exists:", !!HERE_API_KEY);

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  if (!HERE_API_KEY) {
    return NextResponse.json(
      { error: "HERE API key is not configured" },
      { status: 500 }
    );
  }

  try {
    // Build the URL with only supported parameters
    const baseUrl = "https://geocode.search.hereapi.com/v1/geocode";
    const params = new URLSearchParams({
      q: `${query} Los Angeles`, // Add Los Angeles to the search query
      apiKey: HERE_API_KEY,
      in: "countryCode:USA", // Only filter by country
      types: "address",
      limit: "10", // Increased limit since we'll filter results
    });

    const url = `${baseUrl}?${params.toString()}`;
    console.log("3. API Route - Requesting URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("4. API Route - HERE API Response:", data);

    if (!response.ok) {
      console.error("HERE API Error:", data);
      return NextResponse.json(
        { error: "HERE API error" },
        { status: response.status }
      );
    }

    // Filter results to only include Los Angeles addresses
    const filteredResults = {
      items:
        data.items
          ?.filter((item: any) => {
            const { address } = item;
            return (
              address.city?.toLowerCase().includes("los angeles") ||
              address.county?.toLowerCase().includes("los angeles")
            );
          })
          .map((item: any) => ({
            id: item.id,
            address: item.address.label,
            coordinates: {
              lat: item.position.lat,
              lng: item.position.lng,
            },
            details: {
              street: item.address.street,
              houseNumber: item.address.houseNumber,
              postalCode: item.address.postalCode,
              city: item.address.city,
              state: item.address.state,
            },
          })) || [],
    };

    console.log("5. API Route - Filtered Results:", filteredResults);
    return NextResponse.json(filteredResults);
  } catch (error) {
    console.error("6. API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch address suggestions" },
      { status: 500 }
    );
  }
}
