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
      `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(query)}&apiKey=${HERE_API_KEY}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch address suggestions" },
      { status: 500 }
    );
  }
}