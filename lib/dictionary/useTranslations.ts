"use client";

import { useContext } from "react";
import { TranslationContext } from "@/contexts/translation-context";
import { deepGet } from "./utils";

export type TranslationValues = Record<string, unknown> | unknown[];

export type TranslateFn = (key?: string, values?: TranslationValues) => string;

/**
 * Builds a translate function for a dictionary.
 * - `t("common.save")` → looked-up string, or the key itself when missing.
 * - `t("x.y", { name })` replaces `{{name}}`.
 * - `t("x.y", [a, b])` or `t("x.y:a:b")` replaces `{0}`, `{1}`.
 */
export const getDictionaryTranslation =
  (dict: unknown): TranslateFn =>
  (key, values) => {
    if (!key) return "";
    if (key.includes(":")) {
      const [messageKey, ...inline] = key.split(":");
      key = messageKey;
      values = inline;
    }
    const translation = deepGet(dict, key);
    if (typeof translation !== "string") return key;

    if (Array.isArray(values)) {
      return values.reduce<string>(
        (acc, v, i) => acc.replaceAll(`{${i}}`, String(v)),
        translation,
      );
    }
    if (values) {
      return Object.entries(values).reduce(
        (acc, [k, v]) => acc.replaceAll(`{{${k}}}`, String(v)),
        translation,
      );
    }
    return translation;
  };

export function useTranslations(): TranslateFn {
  const dict = useContext(TranslationContext);
  if (!dict)
    throw new Error("useTranslations must be used within a TranslationProvider");
  return getDictionaryTranslation(dict);
}
