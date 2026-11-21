import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { email, footerNav, messages, site, whatsapp, whatsappHref } from "@/lib/site";

const linkClassName =
  "hover:text-brand-300 inline-block rounded py-2.5 text-white/70 transition-colors duration-300";

export function SiteFooter() {
  return (
    <footer className="bg-night-900 relative border-t border-white/10">
      <div
        aria-hidden="true"
        className="bg-gradient-brand absolute inset-x-0 -top-px mx-auto h-px max-w-3xl opacity-60"
      />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-10 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="inline-block rounded-lg"
          >
            <Logo className="text-[1.6rem]" markClassName="size-10" />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-white/65">{site.blurb}</p>
          <ButtonLink
            href={whatsappHref(messages.general)}
            variant="whatsapp"
            className="mt-7"
          >
            <WhatsAppIcon className="size-5" />
            {whatsapp.display}
          </ButtonLink>
          <a
            href={email.href}
            className="hover:text-brand-300 mt-4 flex min-h-11 w-fit items-center gap-2.5 rounded break-all text-white/70 transition-colors duration-300"
          >
            <MailIcon className="size-5 shrink-0" />
            {email.address}
          </a>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
              {group.title}
            </h2>
            <ul className="mt-5 flex flex-col gap-0.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>HD, 4K and 8K streaming · 24/7 WhatsApp support</p>
        </Container>
      </div>
    </footer>
  );
}
