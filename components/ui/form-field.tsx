import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Label above a control, with an optional error below it (linked via aria-describedby). */
export function FormField({
  id,
  label,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-ink text-base font-medium sm:text-[17px]">
        {label}
        {required ? (
          <span className="text-brand-700 ml-0.5" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Shared look of inputs, selects and textareas. */
export const controlClassName =
  "rounded-field w-full border-2 border-black/10 bg-white px-3 text-base text-ink transition-colors placeholder:text-placeholder hover:border-black/20 focus:border-brand-600 focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-brand-100 aria-invalid:border-red-500 aria-invalid:focus:ring-red-100";
