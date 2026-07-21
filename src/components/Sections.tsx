import Image from "next/image";
import { ArrowRight, Building2, Globe2, MapPin, Star } from "lucide-react";

const stats = [
  { value: "Free", label: "For job seekers" },
  { value: "Verified", label: "Employer network" },
  { value: "Secure", label: "Data protection" },
  { value: "Fast", label: "Application review" },
];

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 mx-4 sm:mx-6 lg:mx-auto lg:max-w-5xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-2xl shadow-slate-900/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white px-6 py-8 text-center sm:px-8"
          >
            <p className="text-3xl font-extrabold text-gradient sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const companyFacts = [
  {
    icon: Building2,
    label: "Founded",
    value: "2024",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
  },
  {
    icon: Globe2,
    label: "Industry",
    value: "Staffing & Recruiting",
  },
  {
    icon: MapPin,
    label: "Markets served",
    value: "United States",
  },
];

export function CompanyFactsBar() {
  return (
    <section className="relative z-10 -mt-8 mx-4 sm:mx-6 lg:mx-auto lg:max-w-5xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl lg:grid-cols-4">
        {companyFacts.map((fact) => (
          <div key={fact.label} className="bg-white px-5 py-6 sm:px-6">
            <fact.icon className="mb-3 h-5 w-5 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {fact.label}
            </p>
            <p className="mt-1 text-sm font-bold text-navy sm:text-base">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Pinoyza completely changed our hiring process. We filled three roles in under two weeks with candidates who were genuinely qualified.",
    name: "Sarah Mitchell",
    role: "HR Director, TechFlow",
    rating: 5,
    image: "/testimonials/sarah-mitchell.jpg",
  },
  {
    quote:
      "I was skeptical at first, but within days I had multiple employers reaching out. The platform is professional and actually delivers.",
    name: "Marcus Rivera",
    role: "Software Developer",
    rating: 5,
    image: "/testimonials/marcus-rivera.jpg",
  },
  {
    quote:
      "The quality of leads is unmatched. Every candidate profile we receive is relevant, pre-screened, and ready to interview.",
    name: "Jennifer Park",
    role: "Talent Lead, Nexus Corp",
    rating: 5,
    image: "/testimonials/jennifer-park.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Loved by job seekers & employers
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-2 ring-white"
                />
                <div>
                  <p className="text-sm font-bold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-mesh px-8 py-16 text-center sm:px-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-navy shadow-xl transition-all hover:bg-slate-50 hover:shadow-2xl"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              {secondaryHref && secondaryLabel && (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  {secondaryLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
