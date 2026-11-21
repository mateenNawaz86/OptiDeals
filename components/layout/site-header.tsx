"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { mainNav, messages, site, whatsappHref } from "@/lib/site";

const cta = { label: "Get a trial", href: whatsappHref(messages.trial) };

/** Ids of the home-page sections the nav links to, e.g. "/#pricing" -> "pricing". */
const sectionIds = mainNav
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.slice(2));

/** The home section currently in the middle of the viewport, for highlighting its nav link. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        }
      },
      // A thin band across the middle of the viewport: one section at a time.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const activeSection = useActiveSection(pathname === "/");

  const isCurrent = (href: string) =>
    href.startsWith("/#") ? activeSection === href.slice(2) : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: Escape closes it, the page behind does not scroll, and
  // growing the window to the desktop layout closes it.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 64rem)");
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "bg-night-950/95 border-white/10 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.9)] backdrop-blur-md"
          : "bg-night-950 border-transparent",
      )}
    >
      <Container className="flex h-(--header-h) items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="rounded-lg"
          onClick={() => setOpen(false)}
        >
          <Logo className="text-[1.4rem]" markClassName="size-9" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full bg-white/5 p-1 inset-ring inset-ring-white/10">
            {mainNav.map((link) => {
              const current = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={
                      current
                        ? link.href.startsWith("/#")
                          ? "location"
                          : "page"
                        : undefined
                    }
                    className={cn(
                      "block rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors duration-300 xl:px-4",
                      current
                        ? "bg-white/12 text-white"
                        : "text-white/65 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={cta.href}
            variant="whatsapp"
            size="sm"
            className="hidden shadow-none sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            {cta.label}
          </ButtonLink>
          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </Container>

      {/* Reading progress. */}
      <div
        aria-hidden="true"
        className="scroll-progress bg-gradient-brand absolute inset-x-0 -bottom-px h-0.5"
      />

      {/* Dims the page behind the open menu; tapping it closes the menu. */}
      {open ? (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full h-dvh bg-black/70 lg:hidden"
        />
      ) : null}

      {/* Overlay panel: sits on top of the page instead of pushing it down. */}
      <nav
        id={menuId}
        aria-label="Mobile"
        hidden={!open}
        className="animate-menu-in bg-night-950 absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto rounded-b-3xl border-t border-b border-white/10 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] lg:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {mainNav.map((link) => {
              const current = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 text-lg font-semibold transition-colors",
                      current
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href={cta.href} variant="whatsapp" className="mt-4 w-full">
            <WhatsAppIcon className="size-5" />
            {cta.label} on WhatsApp
          </ButtonLink>
        </Container>
      </nav>
    </header>
  );
}
