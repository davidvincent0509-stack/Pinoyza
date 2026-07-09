import { Resend } from "resend";

export function createResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY in environment variables.");
  }

  return new Resend(apiKey);
}

export function getResendFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
}

export function getContactNotificationEmail() {
  return process.env.CONTACT_NOTIFICATION_EMAIL ?? "info@pinoyza.com";
}
