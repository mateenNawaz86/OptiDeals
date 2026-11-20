"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/dictionary/locales";

export type GlobalContextType = {
  /** Active locale — always the `[locale]` URL segment. */
  locale: Locale;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return <GlobalContext.Provider value={{ locale }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobalContext must be used within a GlobalProvider");
  return ctx;
}
