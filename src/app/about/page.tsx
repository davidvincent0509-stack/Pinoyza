import { Globe, Heart, Target, Users } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Cards";
import { CTASection, StatsBar } from "@/components/Sections";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Pinoyza — the modern workforce platform connecting talent with opportunity.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize access to meaningful employment by connecting every professional with opportunities that match their potential.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Transparency, respect, and integrity guide every decision. We treat job seekers and employers as partners, not products.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description:
      "From career starters to seasoned executives, skilled tradespeople to remote professionals — Pinoyza is built for everyone.",
  },
  {
    icon: Globe,
    title: "Our Vision",
    description:
      "A world where finding work or hiring talent is effortless, equitable, and powered by technology that puts people first.",
  },
];

const timeline = [
  { year: "2024", event: "Pinoyza founded with a mission to modernize job matching" },
  { year: "2024", event: "Launched AI-powered matching engine" },
  { year: "2025", event: "Expanded our professional network nationwide" },
  { year: "2026", event: "Expanded enterprise solutions nationwide" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Building the future of work"
        subtitle="Pinoyza was born from a simple frustration: job searching shouldn't be broken. We're fixing it — one match at a time."
      />

      <StatsBar />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              We believe every person deserves access to real opportunities —
              without fees, without gatekeeping, and without compromising their
              privacy. Pinoyza is the platform we wished existed when we were
              looking for work ourselves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What drives us"
            subtitle="Four pillars that define everything we build."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-accent-light text-primary transition-transform group-hover:scale-110">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our journey" centered />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            {timeline.map((item, i) => (
              <div
                key={item.event}
                className={`relative mb-10 flex items-start gap-6 sm:mb-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 sm:block" />
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-surface p-5 sm:max-w-sm">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <p className="mt-1 text-sm text-slate-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be part of our story"
        subtitle="Whether you're looking for your next role or building your team, Pinoyza is here for you."
        primaryHref="/apply"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
