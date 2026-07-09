import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/employers", label: "For Employers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const jobSeekerLinks = [
  { href: "/apply", label: "Apply Now" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const employerLinks = [
  { href: "/employers", label: "Hire Talent" },
  { href: "/employers#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Sales" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-slate-400">
      {/* CTA band */}
      <div className="border-b border-white/10 bg-navy-mid">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to transform how you hire?
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Join professionals and employers building careers
              through Pinoyza.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3 lg:justify-end">
            <ButtonLink href="/apply" variant="white" size="md">
              Find a Job
            </ButtonLink>
            <ButtonLink href="/employers" variant="outline-light" size="md">
              Hire Talent
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Brand & contact */}
          <div className="lg:col-span-4">
            <Logo
              variant="light"
              layout="stacked"
              showTagline
              size="lg"
              className="items-start text-left"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A trusted workforce consulting firm connecting skilled
              professionals with leading employers.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:info@pinoyza.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@pinoyza.com
              </a>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +1 (667) 766-2575
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                San Francisco, California 94115, US
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterLinkColumn title="Company" links={quickLinks} />
            <FooterLinkColumn title="Job Seekers" links={jobSeekerLinks} />
            <FooterLinkColumn title="Employers" links={employerLinks} />
          </div>

          {/* Newsletter & social */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Get hiring insights and platform updates delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Join
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/pinoyza" },
                { icon: Mail, label: "Email", href: "mailto:info@pinoyza.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary/50 hover:bg-primary/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>© 2024 PINOYZA</p>
          <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <span className="text-slate-600">pinoyza.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
