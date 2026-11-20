import type { TranslateFn } from "@/lib/dictionary/useTranslations";

declare global {
  /** Set by TranslationProvider, for non-React code (labels, formatters). Prefer `useTranslations`. */
  var translate: TranslateFn;
}

export {};
