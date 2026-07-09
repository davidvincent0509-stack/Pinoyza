import { NextResponse } from "next/server";
import { applicationSchema, toApplicationRow } from "@/lib/applications";
import { sendApplicationEmail } from "@/lib/emails";
import { createSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid application data.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    let savedToDatabase = false;

    try {
      const supabase = createSupabaseAdmin();
      const { error } = await supabase
        .from("applications")
        .insert(toApplicationRow(parsed.data));

      if (error) {
        console.error("Supabase insert error:", error);
      } else {
        savedToDatabase = true;
      }
    } catch (err) {
      console.error("Supabase client error:", err);
    }

    const { error: emailError } = await sendApplicationEmail(parsed.data);

    if (emailError) {
      console.error("Application email error:", emailError);
    }

    if (savedToDatabase || !emailError) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Failed to save application. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Application API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
