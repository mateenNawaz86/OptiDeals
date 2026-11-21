"use client";

import { useEffect } from "react";

/**
 * One document-level listener that feeds the pointer position to whichever `[data-spot]`
 * card is under it, for the "light follows the cursor" hover in globals.css.
 */
export function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-spot]",
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
