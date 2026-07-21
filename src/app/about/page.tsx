import Image from "next/image";
import { Globe, Heart, MapPin, Target, Users } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Cards";
import { CTASection, StatsBar } from "@/components/Sections";

export const metadata = {
  title: "About Us",
  description:
    "Meet the Pinoyza team and learn how we connect professionals with trusted employers across the United States.",
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

const leadership = [
  {
    name: "Maria Santos",
    role: "Founder & CEO",
    bio: "Former staffing executive focused on building fair, technology-driven pathways to work for professionals nationwide.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "James Chen",
    role: "Head of Talent Operations",
    bio: "Leads candidate screening, profile review, and the matching process that connects applicants with the right employers.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "Angela Reyes",
    role: "Director of Employer Partnerships",
    bio: "Builds relationships with hiring teams and helps companies find qualified talent faster through Pinoyza.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "Michael Torres",
    role: "Candidate Experience Lead",
    bio: "Ensures every applicant receives clear communication, support, and a professional experience from apply to match.",
    image:
      "https://images.unsplash.com/photo-1519085368739-7c1060d0376e?w=600&h=600&fit=crop&crop=faces",
  },
];

const culturePhotos = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop",
    alt: "Pinoyza team collaborating in a meeting",
    caption: "Collaborative hiring strategy sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop",
    alt: "Modern Pinoyza workspace",
    caption: "Remote-first team with a San Francisco hub",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop",
    alt: "Team members working together",
    caption: "People-first approach to workforce matching",
  },
];

const timeline = [
  { year: "2024", event: "Pinoyza founded with a mission to modernize job matching" },
  { year: "2024", event: "Launched our professional application and matching platform" },
  { year: "2025", event: "Expanded employer partnerships across the United States" },
  { year: "2026", event: "Growing our team and enterprise hiring solutions nationwide" },
];

const highlights = [
  "San Francisco headquarters with a remote-first team",
  "Dedicated staff reviewing every application by hand",
  "Built for both job seekers and hiring employers",
  "Privacy-first platform with secure data handling",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Building the future of work"
        subtitle="Pinoyza is a workforce platform founded in 2024 — connecting skilled professionals with employers through a process that is free, transparent, and human."
      />

      <StatsBar />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                  alt="Pinoyza team working together"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-white p-5 shadow-lg sm:block">
                <p className="text-sm font-bold text-navy">Founded 2024</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  San Francisco, California
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Who we are
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                A real team behind every match
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We started Pinoyza because job searching felt impersonal —
                endless forms, no feedback, and little trust on either side.
                Today our team reviews applications, supports candidates, and
                works directly with employers to create better hiring outcomes.
              </p>
              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet our leadership"
            subtitle="The people guiding Pinoyza's mission to connect talent with opportunity."
            centered
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Life at Pinoyza"
            subtitle="A professional, people-centered culture focused on meaningful work."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {culturePhotos.map((photo) => (
              <figure
                key={photo.caption}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What drives us"
            subtitle="Four pillars that define everything we build."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our journey" centered />
          <div className="relative mt-12">
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
