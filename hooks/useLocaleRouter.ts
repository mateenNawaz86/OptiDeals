"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/global-context";
import { setLocaleCookie } from "@/lib/dictionary/locale-cookie";
import type { Locale } from "@/lib/dictionary/locales";
import { stripLocale, withLocale } from "@/lib/nav/locale-path";

/** `push`/`replace` for app paths, prefixed with the active locale, plus `switchLocale`. */
export function useLocaleRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useGlobalContext();

  const push = useCallback(
    (path: string) => router.push(withLocale(locale, path)),
    [router, locale],
  );
  const replace = useCallback(
    (path: string) => router.replace(withLocale(locale, path)),
    [router, locale],
  );
  /** Same page in another locale; remembered for unprefixed URLs. */
  const switchLocale = useCallback(
    (next: Locale) => {
      setLocaleCookie(next);
      router.replace(withLocale(next, stripLocale(pathname)) + window.location.search);
    },
    [router, pathname],
  );

  return { locale, push, replace, switchLocale };
}
