import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Large rounded checkbox from the contact form design. */
export function Checkbox({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span className={cn("relative inline-flex size-8 shrink-0 sm:size-10", className)}>
      <input
        type="checkbox"
        className="peer rounded-field checked:bg-brand-600 checked:border-brand-600 focus:ring-brand-100 size-full cursor-pointer appearance-none border-2 border-black/15 bg-white transition-colors hover:border-black/30 focus:ring-4 focus:outline-none aria-invalid:border-red-500"
        {...props}
      />
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto hidden size-5 text-white peer-checked:block sm:size-6"
      >
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
