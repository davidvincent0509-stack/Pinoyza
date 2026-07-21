import { NextResponse } from "next/server";
import { applicationSchema, toApplicationRow } from "@/lib/applications";
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

    const supabase = createSupabaseAdmin();
    const { error } = await supabase
      .from("applications")
      .insert(toApplicationRow(parsed.data));

    if (error) {
      console.error("Supabase insert error:", error);

      if (error.message === "Invalid API key") {
        return NextResponse.json(
          {
            error:
              process.env.NODE_ENV === "development"
                ? "Supabase API key is invalid. Check SUPABASE_SERVICE_ROLE_KEY."
                : "Failed to save application. Please try again.",
          },
          { status: 500 }
        );
      }

      if (error.code === "42501") {
        return NextResponse.json(
          {
            error:
              process.env.NODE_ENV === "development"
                ? "Supabase permission denied. Grant insert on applications for service_role."
                : "Failed to save application. Please try again.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: "Failed to save application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Application API error:", err);
    const message =
      err instanceof Error && err.message.includes("Missing Supabase")
        ? "Server is not configured for submissions yet."
        : err instanceof Error && err.message.includes("Invalid Supabase key")
          ? err.message
          : "Something went wrong. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
