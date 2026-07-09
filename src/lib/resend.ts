import { Resend } from "resend";

type ResendError = {
  message?: string;
  statusCode?: number | null;
};

export function createResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY in environment variables.");
  }

  if (!apiKey.startsWith("re_")) {
    throw new Error(
      "Invalid RESEND_API_KEY format. Use a key from resend.com/api-keys (starts with re_)."
    );
  }

  return new Resend(apiKey);
}

export function getResendFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
}

export function getContactNotificationEmail() {
  return (
    process.env.CONTACT_NOTIFICATION_EMAIL ?? "davidvincent0509@gmail.com"
  );
}

export function formatResendError(error: ResendError | null) {
  if (!error) {
    return "Failed to send message. Please try again.";
  }

  if (error.message === "API key is invalid") {
    return process.env.NODE_ENV === "development"
      ? "Resend API key is invalid. Create a new key at resend.com/api-keys and update RESEND_API_KEY."
      : "Failed to send message. Please try again.";
  }

  if (
    error.message?.includes("only send testing emails") ||
    error.message?.includes("verify a domain")
  ) {
    return process.env.NODE_ENV === "development"
      ? "With onboarding@resend.dev, set CONTACT_NOTIFICATION_EMAIL to the email on your Resend account."
      : "Failed to send message. Please try again.";
  }

  return "Failed to send message. Please try again.";
}
