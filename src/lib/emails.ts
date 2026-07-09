import type { ApplicationInput } from "@/lib/applications";
import {
  createResendClient,
  getContactNotificationEmail,
  getResendFromEmail,
} from "@/lib/resend";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const resend = createResendClient();

  return resend.emails.send({
    from: getResendFromEmail(),
    to: getContactNotificationEmail(),
    replyTo: input.email,
    subject: `[Pinoyza Contact] ${input.subject}`,
    html: `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
    `,
  });
}

export async function sendApplicationEmail(data: ApplicationInput) {
  const resend = createResendClient();
  const fullName = `${data.firstName} ${data.lastName}`;

  return resend.emails.send({
    from: getResendFromEmail(),
    to: getContactNotificationEmail(),
    replyTo: data.email,
    subject: `[Pinoyza] New application — ${fullName}`,
    html: `
      <h2>New job application</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Location:</strong> ${escapeHtml(data.location)}</p>
      <p><strong>Age:</strong> ${escapeHtml(data.age)}</p>
      <p><strong>Gender:</strong> ${escapeHtml(data.gender)}</p>
      <p><strong>Monthly income:</strong> ${escapeHtml(data.monthlyIncome)}</p>
      <p><strong>Employment status:</strong> ${escapeHtml(data.employmentStatus)}</p>
      <p><strong>Looking for:</strong> ${escapeHtml(data.lookingFor)}</p>
      <p><strong>Preferred job type:</strong> ${escapeHtml(data.preferredJobType)}</p>
      ${
        data.additionalInfo
          ? `<p><strong>Additional info:</strong></p><p>${escapeHtml(data.additionalInfo).replace(/\n/g, "<br />")}</p>`
          : ""
      }
    `,
  });
}
