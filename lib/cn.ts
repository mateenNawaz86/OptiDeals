import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Knows the project's `rounded-field` radius.
const twMerge = extendTailwindMerge({ extend: { theme: { radius: ["field"] } } });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
