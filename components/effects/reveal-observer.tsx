"use client";

import { useEffect } from "react";

/**
 * The one observer behind every <Reveal>: shows `.reveal` elements as they enter the
 * viewport. A MutationObserver picks up elements added later (route changes).
 */
export function RevealObserver() {
  useEffect(() => {
    const show = (element: Element) => element.setAttribute("data-visible", "true");

    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          intersection.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const watch = (root: ParentNode) => {
      for (const element of root.querySelectorAll(".reveal:not([data-visible])")) {
        intersection.observe(element);
      }
    };
    watch(document);

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(".reveal:not([data-visible])")) intersection.observe(node);
          watch(node);
        }
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
