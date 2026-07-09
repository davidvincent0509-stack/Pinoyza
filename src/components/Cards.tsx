import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  featured?: boolean;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  featured,
}: FeatureCardProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured
          ? "border-primary/20 bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg shadow-primary/25"
          : "border-border bg-white hover:border-primary/30 hover:shadow-primary/5",
        className
      )}
    >
      {!featured && (
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
      )}
      <div
        className={clsx(
          "relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
          featured
            ? "bg-white/20 text-white"
            : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3
        className={clsx(
          "relative mb-2 text-lg font-bold",
          featured ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "relative text-sm leading-relaxed",
          featured ? "text-blue-100" : "text-muted"
        )}
      >
        {description}
      </p>
    </div>
  );
}

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function AudienceCard({
  icon: Icon,
  title,
  description,
  index,
}: AudienceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg">
      <span className="absolute right-4 top-4 text-5xl font-black text-slate-100 transition-colors group-hover:text-primary/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-accent-light text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="relative mb-2 font-bold text-navy">{title}</h3>
      <p className="relative text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

type StepItemProps = {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  showArrow?: boolean;
};

export function StepItem({
  icon: Icon,
  step,
  title,
  description,
  showArrow = true,
}: StepItemProps) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <div className="relative mb-5">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/30">
          <Icon className="h-8 w-8" />
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-navy text-xs font-bold text-white shadow-md">
          {step}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-muted">{description}</p>
      {showArrow && (
        <div
          className="absolute right-0 top-9 hidden translate-x-1/2 text-primary/30 lg:block"
          aria-hidden
        >
          <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
            <path
              d="M0 10H40M40 10L32 3M40 10L32 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export function SectionBadge({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={clsx(
        "mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest",
        dark
          ? "border border-white/20 bg-white/10 text-white"
          : "border border-primary/20 bg-primary-light text-primary"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <h2
        className={clsx(
          "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-400" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  badge,
  title,
  subtitle,
  children,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id="site-hero" className="relative overflow-hidden bg-mesh pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && <SectionBadge dark>{badge}</SectionBadge>}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
