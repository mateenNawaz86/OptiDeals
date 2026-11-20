"use client";

import { createContext, useEffect, type ReactNode } from "react";
import type { Dictionary } from "@/lib/dictionary/types/dictionary";
import { getDictionaryTranslation } from "@/lib/dictionary/useTranslations";

export const TranslationContext = createContext<Dictionary | null>(null);

export function TranslationProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: ReactNode;
}) {
  // Keeps `globalThis.translate` usable from non-React code; falls back to the key.
  useEffect(() => {
    globalThis.translate = getDictionaryTranslation(dict);
    return () => {
      globalThis.translate = (key) => key ?? "";
    };
  }, [dict]);

  return (
    <TranslationContext.Provider value={dict}>{children}</TranslationContext.Provider>
  );
}
