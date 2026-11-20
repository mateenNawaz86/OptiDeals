import { clsx, type ClassValue } from "clsx";
import { cn } from "@/lib/cn";

/**
 * Merges override classes onto defaults. Prefix an override with `!!` to drop a
 * default class entirely, e.g. `combineClasses("p-4 border", "!!border")`.
 */
export const combineClasses = (
  defaultClasses: string,
  ...overrides: ClassValue[]
): string => {
  const className = clsx(overrides);
  if (!className) return defaultClasses;

  const custom = className.split(/\s+/).filter(Boolean);
  const removed = new Set(
    custom.filter((name) => name.startsWith("!!")).map((name) => name.slice(2)),
  );
  const defaults = defaultClasses
    .split(/\s+/)
    .filter((name) => name && !removed.has(name));

  return cn(
    defaults,
    custom.filter((name) => !name.startsWith("!!")),
  );
};
