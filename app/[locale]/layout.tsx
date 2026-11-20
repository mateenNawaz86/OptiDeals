import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary/dictionary";
import { isLocale, LOCALES } from "@/lib/dictionary/locales";
import { combineClasses } from "@/utils/utils";
import { Providers } from "../providers";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opti Deals",
  description: "Opti Deals frontend",
};

// Runs before paint so the stored theme applies without a flash.
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

/** Only the known locales exist; anything else under `/[locale]` is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// The root layout lives here (not in app/layout.tsx) so <html lang> comes from the
// URL without reading cookies, which would make every page dynamic.
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={combineClasses("h-full antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex h-full flex-col">
        <Providers dict={dict} locale={locale}>
          {children}
        </Providers>
        <div id="modal-root" />
      </body>
    </html>
  );
}
