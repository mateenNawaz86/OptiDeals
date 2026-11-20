import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Heading on the design's rounded gradient pill ("Workable apps", "About us", …). */
export function PillHeading({
  as: Tag = "h2",
  id,
  children,
  className,
}: {
  as?: "h1" | "h2";
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "bg-brand-vivid mx-auto flex w-fit min-w-[min(100%,20rem)] items-center justify-center rounded-full px-10 py-5 text-center text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] leading-tight font-bold text-white shadow-sm sm:px-16 sm:py-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Centred section title with an optional intro line. */
export function SectionHeading({
  id,
  title,
  intro,
  tone = "dark",
  className,
}: {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light" | "gradient";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        id={id}
        className={cn(
          "text-[clamp(1.75rem,1.1rem+2vw,2.6rem)] leading-tight font-extrabold tracking-tight text-balance uppercase",
          tone === "light" && "text-white",
          tone === "dark" && "text-ink",
          tone === "gradient" && "text-gradient-brand",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-3 text-lg text-pretty",
            tone === "light" ? "text-white/90" : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
