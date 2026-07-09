import { PageHero } from "@/components/Cards";
import { ButtonLink } from "@/components/Button";

const faqs = [
  {
    q: "Is Pinoyza free for job seekers?",
    a: "Yes. Pinoyza is 100% free for job seekers. There are no hidden fees, premium tiers, or paywalls to access opportunities.",
  },
  {
    q: "How long does matching take?",
    a: "Most candidates receive initial employer matches after submitting a complete application. Timelines vary based on role requirements and employer activity.",
  },
  {
    q: "What information do employers see?",
    a: "Employers only see information you provide in your application, and only after you've given explicit consent to share your data.",
  },
  {
    q: "Can I update my application?",
    a: "Yes. Contact us at info@pinoyza.com and our team will help you update your profile at any time.",
  },
  {
    q: "How does employer pricing work?",
    a: "We offer flexible plans from free trials to enterprise contracts. Visit our Employers page or contact sales for a custom quote.",
  },
  {
    q: "Is my data secure?",
    a: "We use industry-standard security practices, including encrypted connections (HTTPS), and we never sell your personal data to third parties.",
  },
];

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHero
        badge="Support"
        title="Frequently asked questions"
        subtitle="Everything you need to know about Pinoyza. Can't find your answer? Contact our team."
      />
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-border bg-white shadow-sm transition-all open:shadow-md"
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold text-navy marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-border px-6 pb-5 pt-4 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-white p-8 text-center">
            <p className="font-semibold text-navy">Still have questions?</p>
            <p className="mt-1 text-sm text-muted">
              Our support team is happy to help.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <ButtonLink href="/contact" size="sm">
                Contact Us
              </ButtonLink>
              <ButtonLink href="/apply" variant="outline" size="sm">
                Apply Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
