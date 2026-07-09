import Link from "next/link";
import { PageHero } from "@/components/Cards";

export const metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using PINOYZA workforce matching services.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    body: `These Terms of Service ("Terms") govern your access to and use of pinoyza.com and related services operated by Pinoyza ("PINOYZA," "we," "us," or "our").

By accessing or using our platform, you agree to these Terms and our Privacy Policy. If you do not agree, do not use our services.`,
  },
  {
    title: "2. Eligibility",
    body: `You must be at least 18 years old to use PINOYZA. By using the platform, you represent that you meet this requirement and that the information you provide is accurate and complete.

Employers must have authority to bind their organization to these Terms.`,
  },
  {
    title: "3. Service Description",
    body: `PINOYZA is a workforce matching platform that connects job seekers with employers. We facilitate introductions and profile sharing but do not guarantee interviews, offers, or employment outcomes.

PINOYZA is not an employer, staffing agency of record, or legal representative for any party unless explicitly stated in a separate written agreement.`,
  },
  {
    title: "4. Job Seeker Applications",
    body: `When you submit an application, you agree to:

• Provide truthful and current information
• Grant PINOYZA permission to review your application for matching purposes
• Provide explicit consent before we share your profile with employers
• Use the platform only for legitimate job-seeking purposes

You may withdraw consent for employer sharing by contacting info@pinoyza.com.`,
  },
  {
    title: "5. Employer Terms",
    body: `Employers using PINOYZA agree to:

• Use candidate information solely for legitimate hiring and recruitment
• Comply with applicable employment, privacy, and anti-discrimination laws
• Not resell, misuse, or retain candidate data beyond permitted hiring purposes
• Maintain confidentiality of candidate information received through the platform

PINOYZA may suspend or terminate employer access for violations of these Terms.`,
  },
  {
    title: "6. Acceptable Use",
    body: `You may not:

• Submit false, misleading, or fraudulent information
• Harass, discriminate against, or misuse other users' data
• Attempt to gain unauthorized access to our systems
• Scrape, copy, or commercially exploit platform content without permission
• Use the service for any unlawful purpose

We reserve the right to remove content and suspend accounts that violate these rules.`,
  },
  {
    title: "7. Intellectual Property",
    body: `All content on pinoyza.com — including text, graphics, logos, and software — is owned by PINOYZA or its licensors and protected by intellectual property laws.

You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: "8. Privacy",
    body: `Your use of PINOYZA is also governed by our Privacy Policy, which describes how we collect and handle personal information. By using the platform, you consent to our data practices as described therein.`,
  },
  {
    title: "9. Disclaimers",
    body: `PINOYZA is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.

We do not warrant that the platform will be uninterrupted, error-free, or that matches will result in employment.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `To the maximum extent permitted by law, PINOYZA and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.

Our total liability for any claim shall not exceed the amount you paid to PINOYZA in the twelve months preceding the claim, or one hundred U.S. dollars ($100), whichever is greater.`,
  },
  {
    title: "11. Indemnification",
    body: `You agree to indemnify and hold harmless PINOYZA from claims, damages, and expenses arising from your use of the platform, your violation of these Terms, or your violation of any third-party rights.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California, unless otherwise required by applicable law.`,
  },
  {
    title: "13. Changes to Terms",
    body: `We may modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Continued use of PINOYZA after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "14. Contact",
    body: `Questions about these Terms:

Email: info@pinoyza.com
Mail: Pinoyza, Inc., San Francisco, California 94115, US`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero badge="Legal" title="Terms of Service" />
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
