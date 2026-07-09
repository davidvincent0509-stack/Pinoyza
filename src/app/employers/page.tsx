import {
  ArrowRight,
  Check,
  ClipboardList,
  ListChecks,
  Network,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero, SectionHeading, StepItem } from "@/components/Cards";
import { CTASection } from "@/components/Sections";

const benefits = [
  "Pre-screened, qualified candidate leads",
  "AI-powered matching by skills & experience",
  "Reduce hiring costs by up to 40%",
  "Dedicated support for enterprise clients",
  "48-hour average time to first match",
  "Flexible plans — startup to Fortune 500",
];

const employerSteps = [
  {
    icon: ClipboardList,
    title: "Define Your Needs",
    description:
      "Tell us your role requirements, culture fit, and hiring timeline.",
  },
  {
    icon: Network,
    title: "Receive Matched Leads",
    description:
      "Get curated candidate profiles that match your exact criteria.",
  },
  {
    icon: ListChecks,
    title: "Interview & Hire",
    description:
      "Connect directly with candidates and close roles faster.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "14-day trial",
    desc: "Perfect for small teams testing the platform.",
    features: ["Up to 5 matches", "Email support", "Basic analytics"],
  },
  {
    name: "Professional",
    price: "Custom",
    period: "per month",
    desc: "For growing companies with ongoing hiring needs.",
    features: [
      "Unlimited matches",
      "Priority support",
      "Advanced filters",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    desc: "Full-scale workforce solutions for large organizations.",
    features: [
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export const metadata = {
  title: "For Employers",
  description:
    "Hire exceptional talent faster with Pinoyza. AI-powered matching, pre-screened leads, and professional hiring solutions.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        badge="Employer Solutions"
        title="Build your team with confidence"
        subtitle="Access a curated pool of qualified professionals. Pinoyza delivers matched, interview-ready candidates — so you can focus on growing your business."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact" size="lg">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="/employers#pricing"
            variant="ghost-light"
            size="lg"
          >
            View Pricing
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Why employers choose us
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Stop posting. Start hiring.
              </h2>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Smart Match Engine</p>
                    <p className="text-sm text-muted">Powered by Pinoyza AI</p>
                  </div>
                </div>
                {[
                  { name: "Alex Chen", role: "Full Stack Dev", score: 97 },
                  { name: "Maria Santos", role: "Product Manager", score: 95 },
                  { name: "James Wilson", role: "Data Analyst", score: 92 },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="mb-3 flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 last:mb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy">{c.name}</p>
                        <p className="text-xs text-muted">{c.role}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {c.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How it works for employers"
            subtitle="A proven three-step process that delivers results."
          />
          <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:gap-4">
            {employerSteps.map((step, i) => (
              <StepItem
                key={step.title}
                icon={step.icon}
                step={i + 1}
                title={step.title}
                description={step.description}
                showArrow={i < employerSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Plans that scale with you"
            subtitle="From startups to enterprise — flexible pricing for every hiring need."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-xl ${
                  plan.featured
                    ? "border-primary bg-gradient-to-b from-primary-light/50 to-white shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border bg-white hover:border-primary/30"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-navy">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">/ {plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact"
                  variant={plan.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  Contact Sales
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to transform your hiring?"
        subtitle="Partner with Pinoyza to build stronger teams with matched, interview-ready talent."
        primaryHref="/contact"
        primaryLabel="Schedule a Demo"
        secondaryHref="/apply"
        secondaryLabel="Browse Talent"
      />
    </>
  );
}
