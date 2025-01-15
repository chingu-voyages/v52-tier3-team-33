import { NextResponse } from "next/server";

const HERE_API_KEY = process.env.HERE_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?` + 
      `q=${encodeURIComponent(query)}` +
      `&apiKey=${HERE_API_KEY}` +
      `&in=city:Los Angeles` +
      `&in=countryCode:USA` +
      `&types=address` +
      `&limit=5`
    );
    const data = await response.json();
    
    const filteredResults = {
      ...data,
      items: data.items
        ?.filter((item: any) => 
          item.address?.city?.toLowerCase().includes('los angeles')
        )
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
            district: item.address.district,
            city: item.address.city,
            state: item.address.state,
          }
        }))
    };

    return NextResponse.json(filteredResults);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch address suggestions" },
      { status: 500 }
    );
  }
}