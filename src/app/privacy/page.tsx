import Link from "next/link";
import { PageHero } from "@/components/Cards";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how PINOYZA collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    body: `Pinoyza ("PINOYZA," "we," "us," or "our") operates pinoyza.com and related workforce matching services. This Privacy Policy explains what information we collect, how we use it, whom we share it with, and the choices available to you.

By using our website or submitting an application, you acknowledge that you have read this policy.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you provide directly, including:

• Identity and contact details (name, email, phone number, location)
• Application and profile information (employment status, job preferences, skills, income range, gender if provided)
• Communications you send to us (contact forms, support requests)
• Consent records related to sharing your profile with employers

We may also collect limited technical data automatically, such as browser type, device information, IP address, and pages visited, to operate and improve the platform.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use personal information to:

• Review and process job seeker applications
• Match candidates with relevant employer opportunities
• Communicate with you about your application or account
• Respond to inquiries and provide customer support
• Improve our services, security, and user experience
• Comply with legal obligations and enforce our Terms of Service`,
  },
  {
    title: "4. How We Share Information",
    body: `We do not sell your personal information.

We may share information only in these circumstances:

• With employers you authorize, after you provide explicit consent during the application process
• With service providers who help us operate the platform (hosting, email, analytics), under confidentiality obligations
• When required by law, regulation, legal process, or governmental request
• To protect the rights, safety, and security of PINOYZA, our users, or others

Employers receiving candidate information must use it solely for legitimate hiring purposes.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain personal information for as long as needed to provide our services, fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.

You may request deletion of your application data by contacting privacy@pinoyza.com. Some information may be retained where required by law or for legitimate business purposes.`,
  },
  {
    title: "6. Your Rights and Choices",
    body: `Depending on your location, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your information, subject to legal exceptions
• Withdraw consent for employer data sharing
• Opt out of marketing communications

To exercise these rights, email privacy@pinoyza.com. We will respond within a reasonable timeframe.`,
  },
  {
    title: "7. Cookies and Similar Technologies",
    body: `We may use cookies and similar technologies to remember preferences, maintain session state, and understand how visitors use our site. You can control cookies through your browser settings. Disabling cookies may affect certain site functionality.`,
  },
  {
    title: "8. Security",
    body: `We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information, including encrypted connections (HTTPS) for data transmitted through our website.

No method of transmission or storage is completely secure. While we work to protect your data, we cannot guarantee absolute security.`,
  },
  {
    title: "9. International Users",
    body: `If you access our services from outside the United States, your information may be processed and stored in the U.S. or other countries where we or our service providers operate. By using our services, you consent to such transfer subject to applicable law.`,
  },
  {
    title: "10. Children's Privacy",
    body: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe a minor has provided us information, contact privacy@pinoyza.com and we will take appropriate steps to delete it.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Material changes may be communicated through the website or by email where appropriate. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Us",
    body: `For privacy questions or requests:

Email: privacy@pinoyza.com
General inquiries: info@pinoyza.com
Mail: Pinoyza, Inc., San Francisco, California 94115, US`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero badge="Legal" title="Privacy Policy" />
      <div className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted">Last updated: July 2026</p>
          <div className="mt-8 space-y-8 text-muted">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-navy">{section.title}</h2>
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="mt-10 inline-block text-sm font-semibold text-primary hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
