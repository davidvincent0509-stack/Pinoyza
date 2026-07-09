import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { sendContactEmail } from "@/lib/emails";
import { formatResendError } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { error } = await sendContactEmail(parsed.data);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: formatResendError(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message =
      err instanceof Error && err.message.includes("RESEND_API_KEY")
        ? "Email is not configured yet."
        : "Something went wrong. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
