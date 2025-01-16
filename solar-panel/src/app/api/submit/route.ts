import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { FormEvaluationSchema } from "@/utils/schemas/evaluation-form-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = FormEvaluationSchema.parse(body);

    // Initialize Supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Insert data into evaluation_requests table
    const { data, error } = await supabase
      .from("evaluation_requests")
      .insert([
        {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          street_address: validatedData.streetAddress,
          coordinates: validatedData.coordinates,
          property_type: validatedData.propertyType,
          roof_access: validatedData.roofAccess,
          additional_location: validatedData.additionalLocation,
          appointment_date: validatedData.date,
          time_slot: validatedData.timeSlot,
          additional_notes: validatedData.additionalNotes,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error saving evaluation request:", error);
    return NextResponse.json(
      { error: "Failed to save evaluation request" },
      { status: 500 }
    );
  }
}
