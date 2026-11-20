import "server-only";

import type { Dictionary } from "./types/dictionary";
import { DEFAULT_LOCALE, Locale } from "./locales";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  [Locale.DE]: () => import("@/dictionaries/de.json").then((mod) => mod.default),
  [Locale.EN]: () => import("@/dictionaries/en.json").then((mod) => mod.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE])();
