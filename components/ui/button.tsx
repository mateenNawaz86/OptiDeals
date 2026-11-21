import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/**
 * primary: bright teal, the main on-site call to action.
 * whatsapp: WhatsApp green, for every link that opens a chat.
 * ghost: quiet secondary.
 */
type Variant = "primary" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-400 text-night-950 shadow-glow hover:bg-brand-300",
  whatsapp: "bg-whatsapp text-night-950 shadow-whatsapp hover:brightness-110",
  ghost:
    "bg-white/5 text-white inset-ring inset-ring-white/15 hover:bg-white/10 hover:inset-ring-white/30",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(
    "ease-out-expo inline-flex items-center justify-center gap-2.5 rounded-full font-bold whitespace-nowrap transition-[transform,filter,box-shadow,background-color] duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );
}

/** Internal links use the Next router; absolute URLs (WhatsApp) open in a new tab. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  ...props
}: Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  const classes = buttonClassName({ variant, size, className });

  return href.startsWith("http") ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...props}
    />
  ) : (
    <Link href={href} className={classes} {...props} />
  );
}
