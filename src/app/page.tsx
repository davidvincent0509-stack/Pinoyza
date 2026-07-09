import {
  ArrowRight,
  BadgeDollarSign,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Search,
  Send,
  Shield,
  UserCheck,
  UserMinus,
  UserPlus,
  Zap,
} from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { ButtonLink } from "@/components/Button";
import {
  AudienceCard,
  FeatureCard,
  SectionBadge,
  SectionHeading,
  StepItem,
} from "@/components/Cards";
import { CTASection, StatsBar, Testimonials } from "@/components/Sections";

const features = [
  {
    icon: BadgeDollarSign,
    title: "100% Free for Talent",
    description:
      "No hidden fees, no premium tiers. Job seekers access the full platform at zero cost.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Industry-standard encryption and a vetted employer network. Your data is handled with care.",
  },
  {
    icon: Briefcase,
    title: "Curated Opportunities",
    description:
      "Access vetted roles across tech, healthcare, logistics, and professional services.",
  },
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description:
      "Smart algorithms pair your profile with employers actively seeking your skills.",
  },
];

const audiences = [
  {
    icon: UserMinus,
    title: "Career Changers",
    description:
      "Transitioning industries? We match you with roles that value transferable skills.",
  },
  {
    icon: UserCheck,
    title: "Employed Professionals",
    description:
      "Explore better opportunities discreetly while maintaining your current position.",
  },
  {
    icon: GraduationCap,
    title: "New Graduates",
    description:
      "Launch your career with entry-level roles, internships, and graduate programs.",
  },
  {
    icon: UserPlus,
    title: "Skilled Workers",
    description:
      "From trades to specialists — every skill level finds opportunity on Pinoyza.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="site-hero" className="relative min-h-[92vh] overflow-hidden bg-mesh pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-navy" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
          <div>
            <SectionBadge dark>Workforce Platform · Est. 2024</SectionBadge>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              The modern way to{" "}
              <span className="text-gradient">connect talent</span> with
              opportunity
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Pinoyza is a professional workforce platform trusted by employers
              and job seekers alike. Submit once, get matched with verified
              opportunities — free, fast, and secure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/apply" size="lg">
                Get Matched Now
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/employers" variant="outline-light" size="lg">
                I&apos;m Hiring
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                "No fees for job seekers",
                "Vetted employers only",
                "Streamlined application process",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="animate-float relative z-10 rounded-2xl glass p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400">pinoyza.com/dashboard</span>
              </div>
              <div className="space-y-3">
                {[
                  { role: "Senior Developer", company: "TechFlow", match: "Strong" },
                  { role: "Project Manager", company: "Nexus Corp", match: "94%" },
                  { role: "UX Designer", company: "Vertex", match: "91%" },
                ].map((job) => (
                  <div
                    key={job.role}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{job.role}</p>
                      <p className="text-xs text-slate-400">{job.company}</p>
                    </div>
                    <span className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-bold text-accent">
                      {job.match} match
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-float-delay absolute -bottom-6 -left-8 z-20 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm">
                  <BrandIcon size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">New match found!</p>
                  <p className="text-xs text-muted">3 employers interested</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 z-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-8 right-8 z-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Features - Bento grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Why Pinoyza
            </p>
            <SectionHeading
              title="Built for professionals who expect more"
              subtitle="We combine technology, trust, and human expertise to deliver a hiring experience that actually works."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-dot-pattern bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Talent at every stage"
            subtitle="Whether you're starting out or leading teams, Pinoyza has a path for your career journey."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, i) => (
              <AudienceCard key={audience.title} {...audience} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Process
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Three steps to your next role
              </h2>
              <p className="mt-4 text-lg text-muted">
                Our streamlined process removes the friction from job searching.
                No endless applications — just real matches.
              </p>
              <div className="mt-8">
                <ButtonLink href="/apply">
                  Start Your Application
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-col gap-12 sm:flex-row lg:flex-col xl:flex-row">
              <StepItem
                icon={ClipboardList}
                step={1}
                title="Submit Your Profile"
                description="Complete a professional application in under 5 minutes."
              />
              <StepItem
                icon={Search}
                step={2}
                title="Get Smart-Matched"
                description="Our engine pairs you with employers seeking your exact profile."
              />
              <StepItem
                icon={Send}
                step={3}
                title="Receive Offers"
                description="Employers reach out directly. Interview and land your role."
                showArrow={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* For employers teaser */}
      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Built for teams" },
                  { icon: Shield, label: "Security-first" },
                  { icon: Zap, label: "Streamlined matching" },
                  { icon: Briefcase, label: "Growing network" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
                  >
                    <item.icon className="mb-3 h-8 w-8 text-primary" />
                    <span className="text-sm font-semibold text-navy">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionBadge>For Employers</SectionBadge>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Hire exceptional talent, faster
              </h2>
              <p className="mt-4 text-lg text-muted">
                Stop sifting through unqualified applicants. Pinoyza delivers
                pre-screened, matched candidates directly to your inbox.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Quality leads matched to your requirements",
                  "Designed to reduce time-to-hire",
                  "Flexible plans for startups to enterprise",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/employers" size="lg">
                  Explore Employer Solutions
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection
        title="Your next opportunity is one click away"
        subtitle="Start your application today. It's free to apply and takes just a few minutes."
        primaryHref="/apply"
        primaryLabel="Apply Now — It's Free"
        secondaryHref="/employers"
        secondaryLabel="Hire Talent"
      />
    </>
  );
}
