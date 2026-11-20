/** Single source of truth for supported locales — proxy, layouts and hooks read from here. */
export enum Locale {
  DE = "de",
  EN = "en",
}

export const LOCALES: readonly Locale[] = [Locale.DE, Locale.EN];

export const DEFAULT_LOCALE = Locale.DE;

/** Cookie remembering the user's last locale; read by `proxy.ts`. */
export const LOCALE_COOKIE = "userLocale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (LOCALES as readonly string[]).includes(value);
