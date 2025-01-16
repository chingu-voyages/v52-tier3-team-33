import { NextResponse } from "next/server";

const HERE_API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

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
    const baseUrl = "https://geocode.search.hereapi.com/v1/geocode";
    const params = new URLSearchParams({
      q: `${query} Los Angeles`,
      apiKey: HERE_API_KEY,
      in: "countryCode:USA",
      types: "address",
      limit: "10",
    });

    const url = `${baseUrl}?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "HERE API error" },
        { status: response.status }
      );
    }

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

    return NextResponse.json(filteredResults);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch address suggestions" },
      { status: 500 }
    );
  }
}
