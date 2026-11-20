import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "./locales";

/** Client-side: remembers the chosen locale for the next visit to an unprefixed URL. */
export function setLocaleCookie(locale: Locale) {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax${secure}`;
}
