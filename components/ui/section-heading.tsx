import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

/** Small pill label above a heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-brand-300 inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-bold tracking-[0.16em] uppercase inset-ring inset-ring-white/10",
        className,
      )}
    >
      <span aria-hidden="true" className="bg-brand-400 size-1.5 rounded-full" />
      {children}
    </p>
  );
}

export const headingClassName =
  "font-display text-[clamp(1.85rem,1.2rem+2.4vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-white";

/** Section title with an optional eyebrow and intro line; fades in on scroll. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={cn(headingClassName, eyebrow && "mt-5")}>
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/65",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
