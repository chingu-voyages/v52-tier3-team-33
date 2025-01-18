import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();

    const supabase = createRouteHandlerClient({ cookies });

    const appointmentDate = new Date(body.date);
    const formattedDate = appointmentDate.toISOString().split("T")[0];

    const coordinates = body.coordinates
      ? `{"lat": ${body.coordinates.lat}, "lng": ${body.coordinates.lng}}`
      : null;

    const insertData = {
      first_name: String(body.firstName),
      last_name: String(body.lastName),
      email: String(body.email),
      phone: String(body.phone).replace(/\D/g, ""),
      street_address: String(body.streetAddress).replace(/'/g, "''"),
      property_type: String(body.propertyType),
      roof_access: String(body.roofAccess),
      appointment_date: formattedDate,
      time_slot: String(body.timeSlot),
      status: "pending",
      coordinates,
      additional_location: body.additionalLocation
        ? String(body.additionalLocation).replace(/'/g, "''")
        : null,
      additional_notes: body.additionalNotes
        ? String(body.additionalNotes).replace(/'/g, "''")
        : null,
    };

    const { error: testError } = await supabase
      .from("evaluation_requests")
      .select()
      .limit(1);

    if (testError) {
      return NextResponse.json(
        { error: "Database configuration error", details: testError.message },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("evaluation_requests")
      .insert([insertData])
      .select();

    if (error) {
      return NextResponse.json(
        {
          error: "Failed to save request",
          details: error.message,
          data: insertData,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Evaluation request submitted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: String(error) },
      { status: 500 }
    );
  }
}
