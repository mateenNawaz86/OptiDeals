"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function readStoredTheme(): Theme | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function useTheme() {
  // Always starts as "light" on both server and first client render — the
  // inline script in app/layout.tsx applies the real theme class to <html>
  // before paint (avoiding a flash), and this effect syncs React's state to
  // match afterward. Reading localStorage/matchMedia here directly would
  // make the initial client render diverge from the server render and
  // trigger a hydration mismatch.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored =
      readStoredTheme() ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    // One-time sync from browser-only state (localStorage/matchMedia) into
    // React state on mount — this can't be read during the render that
    // produces the initial (SSR-matching) paint, so it has to happen here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(stored);
  }, []);

  // Skips the mount run: at that point `theme` is still the placeholder
  // "light", while <html> already carries the correct class from the inline
  // script. Writing here would strip it (dark flashing to light) and
  // overwrite the stored value before the sync effect above corrects it.
  const isApplied = useRef(false);

  useEffect(() => {
    if (!isApplied.current) {
      isApplied.current = true;
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme, toggleTheme };
}
