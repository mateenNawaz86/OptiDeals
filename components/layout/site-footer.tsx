import Link from "next/link";
import { ArrowRightIcon } from "@/components/assets/svgs/components";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-10 lg:py-16">
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="inline-block rounded-md"
          >
            <Logo
              className="gap-3.5 text-[clamp(2.25rem,1.8rem+1.2vw,3rem)]"
              markClassName="size-16 lg:size-20"
            />
          </Link>
          <p className="mt-5 max-w-sm text-base text-white/85">{site.description}</p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-xl font-semibold tracking-wide uppercase">
              {group.title}
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-4 rounded-md text-base font-semibold text-white/90 transition-colors hover:text-white"
                  >
                    <ArrowRightIcon className="h-4 w-2 shrink-0 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href="/terms" className="rounded hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="rounded hover:text-white">
              Privacy
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
