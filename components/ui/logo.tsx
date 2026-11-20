import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * OptiDeals mark: a TV (IPTV) with a play button. `light` is for the gradient header/footer,
 * `color` for white backgrounds.
 */
export function LogoMark({
  variant = "light",
  className,
}: {
  variant?: "light" | "color";
  className?: string;
}) {
  const gradientId = useId();
  const paint = variant === "light" ? "#ffffff" : `url(#${gradientId})`;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      {variant === "color" ? (
        <defs>
          <linearGradient
            id={gradientId}
            x1="4"
            y1="6"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0b8b80" />
            <stop offset="1" stopColor="#6a4ff0" />
          </linearGradient>
        </defs>
      ) : null}
      <path
        d="M17 5.5 24 12l7-6.5"
        stroke={paint}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4.75"
        y="12.75"
        width="38.5"
        height="27.5"
        rx="7.5"
        stroke={paint}
        strokeWidth="3.5"
      />
      <path
        d="M20.5 20.4v11.2c0 1 1.1 1.6 1.9 1.1l9-5.6c.8-.5.8-1.7 0-2.2l-9-5.6c-.8-.5-1.9.1-1.9 1.1Z"
        fill={paint}
      />
      <path d="M17 45h14" stroke={paint} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Mark + "OptiDeals" wordmark. */
export function Logo({
  variant = "light",
  className,
  markClassName,
}: {
  variant?: "light" | "color";
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-2xl tracking-tight",
        variant === "light" ? "text-white" : "text-ink",
        className,
      )}
    >
      <LogoMark variant={variant} className={cn("size-10", markClassName)} />
      <span className="leading-none">
        <span className="font-semibold">Opti</span>
        <span className="font-extrabold">Deals</span>
      </span>
    </span>
  );
}
