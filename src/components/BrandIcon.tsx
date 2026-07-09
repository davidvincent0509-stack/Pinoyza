import { clsx } from "clsx";

type BrandIconProps = {
  size?: number;
  variant?: "default" | "on-white";
  className?: string;
};

export function BrandIcon({
  size = 40,
  variant = "default",
  className,
}: BrandIconProps) {
  const src =
    variant === "on-white" ? "/brand/mark-white.svg" : "/brand/mark.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={clsx("block object-contain", className)}
      aria-hidden
    />
  );
}
