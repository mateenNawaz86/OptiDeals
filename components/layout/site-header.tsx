"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { mainNav, site } from "@/lib/site";

/** Page links (not in-page anchors) are marked current when their route is open. */
const isCurrent = (pathname: string, href: string) =>
  !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bg-brand sticky top-0 z-50 shadow-[0_1px_0_rgb(255_255_255/0.12),0_6px_20px_-12px_rgb(0_0_0/0.35)]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 xl:px-[72px]">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="rounded-md"
          onClick={() => setOpen(false)}
        >
          <Logo
            className="text-[1.6rem] lg:text-[1.75rem]"
            markClassName="size-9 lg:size-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNav.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[17px] font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white xl:px-4",
                      current && "bg-white/15 text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Main"
        hidden={!open}
        className="border-t border-white/15 lg:hidden"
      >
        <ul className="mx-auto flex max-w-[1440px] flex-col px-5 py-3 sm:px-8">
          {mainNav.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/15",
                    current && "bg-white/15",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
