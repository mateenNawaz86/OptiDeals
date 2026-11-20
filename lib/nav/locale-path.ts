import { isLocale } from "@/lib/dictionary/locales";

/** Strips a leading /<locale> segment so nav hrefs can be compared. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments.shift();
  return "/" + segments.join("/");
}

/** Prefixes an app path with a locale. */
export function withLocale(locale: string, href: string): string {
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}
