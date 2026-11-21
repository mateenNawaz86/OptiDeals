import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Marks its children to fade and slide in the first time they scroll into view.
 * This is plain markup: one shared observer (components/effects/reveal-observer.tsx) flips
 * `data-visible` on every `.reveal` element, so the page does not pay for a component per
 * animated block. Content is in the HTML either way; without JavaScript a <noscript> rule
 * in the layout keeps `.reveal` elements visible.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  /** Milliseconds; use for staggering siblings. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
