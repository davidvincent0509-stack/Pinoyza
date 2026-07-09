import { clsx } from "clsx";

export const BRAND = {
  navy: "#041939",
  cobalt: "#0154C4",
  tagline: "PEOPLE. OPPORTUNITIES. GROWTH.",
} as const;

type LogoMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  context?: "navbar" | "default";
  /** When true, icon bg is matched to the solid/scrolled navbar */
  blendWithNav?: boolean;
};

const sizePx = {
  navbar: { sm: 30, md: 34, lg: 48 },
  default: { sm: 36, md: 40, lg: 56 },
};

export function LogoMark({
  className,
  size = "md",
  context = "default",
  blendWithNav = false,
}: LogoMarkProps) {
  const px = sizePx[context][size];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/mark.svg"
      alt=""
      width={px}
      height={px}
      className={clsx(
        "block shrink-0 border-0 bg-transparent p-0 shadow-none outline-none object-contain",
        context === "navbar" && blendWithNav && "rounded-[22%] bg-white",
        className
      )}
      aria-hidden
    />
  );
}
