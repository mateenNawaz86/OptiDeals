import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * OptiDeals mark: an "O" drawn as a broadcast ring around a play button, with a live dot
 * in the gap. Keep app/icon.svg in step with this drawing.
 */
export function LogoMark({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="2"
          y1="2"
          x2="46"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#17dbc7" />
          <stop offset="0.6" stopColor="#8671ff" />
          <stop offset="1" stopColor="#ff6ab0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${gradientId})`} />
      <circle
        cx="24"
        cy="24"
        r="12"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeDasharray="60.4 15"
        transform="rotate(-9.5 24 24)"
      />
      <circle cx="32.5" cy="15.5" r="2.5" fill="#fff" />
      <path
        d="M20.6 19.4v9.2a1 1 0 0 0 1.52.86l7.6-4.6a1 1 0 0 0 0-1.72l-7.6-4.6a1 1 0 0 0-1.52.86Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Mark + "OptiDeals" wordmark, for dark backgrounds. */
export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-2xl tracking-tight text-white",
        className,
      )}
    >
      <LogoMark className={cn("size-9", markClassName)} />
      <span className="leading-none font-bold">
        Opti<span className="text-gradient">Deals</span>
      </span>
    </span>
  );
}
