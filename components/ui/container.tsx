import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centres content at the design's 1440px frame with responsive side padding. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[72px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
