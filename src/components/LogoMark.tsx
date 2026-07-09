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
  /** Dark hero navbar — use white-backed mark */
  onDark?: boolean;
};

const sizePx = {
  navbar: { sm: 30, md: 34, lg: 48 },
  default: { sm: 36, md: 40, lg: 56 },
};

export function LogoMark({
  className,
  size = "md",
  context = "default",
  onDark = false,
}: LogoMarkProps) {
  const px = sizePx[context][size];
  const src = onDark ? "/brand/mark-white.svg" : "/brand/mark.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={px}
      height={px}
      className={clsx(
        "block shrink-0 border-0 bg-transparent p-0 shadow-none outline-none object-contain",
        className
      )}
      aria-hidden
    />
  );
}
