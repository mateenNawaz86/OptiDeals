"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { GlobalProvider } from "@/contexts/global-context";
import { TranslationProvider } from "@/contexts/translation-context";
import type { Locale } from "@/lib/dictionary/locales";
import type { Dictionary } from "@/lib/dictionary/types/dictionary";
import { retryUnlessNotFound } from "@/lib/query";

export function Providers({
  children,
  dict,
  locale,
}: {
  children: ReactNode;
  dict: Dictionary;
  locale: Locale;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            retry: retryUnlessNotFound,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider locale={locale}>
        <TranslationProvider dict={dict}>{children}</TranslationProvider>
      </GlobalProvider>
    </QueryClientProvider>
  );
}
