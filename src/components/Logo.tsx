import Link from "next/link";
import { clsx } from "clsx";
import { LogoMark, BRAND } from "@/components/LogoMark";

type LogoProps = {
  variant?: "light" | "dark";
  layout?: "horizontal" | "stacked";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  context?: "navbar" | "default";
  navTransparent?: boolean;
};

export function Logo({
  variant = "dark",
  layout = "horizontal",
  showTagline = false,
  size = "md",
  className,
  context = "default",
  navTransparent = false,
}: LogoProps) {
  const isLight = variant === "light";
  const isNavbar = context === "navbar";

  const wordmarkClass = clsx(
    "whitespace-nowrap font-bold leading-none",
    layout === "stacked"
      ? "mt-4 text-xl tracking-[0.22em] sm:text-2xl"
      : size === "sm"
        ? "text-sm tracking-[0.16em]"
        : isNavbar
          ? "text-[16px] tracking-[0.18em] sm:text-[17px] sm:tracking-[0.2em]"
          : "text-[17px] tracking-[0.2em] sm:text-lg sm:tracking-[0.22em]",
    isLight ? "text-white" : "text-[#041939]"
  );

  const wordmark = <span className={wordmarkClass}>PINOYZA</span>;

  const tagline = showTagline && (
    <span
      className={clsx(
        "mt-2.5 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.16em] sm:text-[10px]",
        isLight ? "text-slate-400" : "text-slate-500"
      )}
    >
      {BRAND.tagline}
    </span>
  );

  if (layout === "stacked") {
    return (
      <Link
        href="/"
        className={clsx(
          "group inline-flex flex-col bg-transparent",
          className ?? "items-center text-center"
        )}
        aria-label="PINOYZA — Home"
      >
        <LogoMark size="lg" context={context} />
        {wordmark}
        {tagline}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={clsx(
        "group inline-flex min-w-0 items-center bg-transparent p-0",
        isNavbar ? "gap-2.5 sm:gap-3.5" : "gap-3 sm:gap-3.5",
        className
      )}
      aria-label="PINOYZA — Home"
    >
      <LogoMark
        size={size}
        context={context}
        blendWithNav={isNavbar && !navTransparent}
        className="transition-opacity group-hover:opacity-90"
      />
      <span className="shrink-0 self-center">{wordmark}</span>
    </Link>
  );
}
