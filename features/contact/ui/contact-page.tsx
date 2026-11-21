import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsapp } from "@/lib/site";
import { contact } from "../content";

/** Contact is WhatsApp only: one big chat button, then topic shortcuts with pre-written messages. */
export function ContactPage() {
  return (
    <>
      <PageHero
        id="contact-title"
        eyebrow={contact.eyebrow}
        title={
          <>
            {contact.title.lead}{" "}
            <span className="text-whatsapp">{contact.title.accent}</span>
          </>
        }
        intro={contact.intro}
      >
        <ButtonLink
          href={contact.cta.href}
          variant="whatsapp"
          size="lg"
          className="h-16 px-10 text-lg"
        >
          <WhatsAppIcon className="size-6" />
          {contact.cta.label}
        </ButtonLink>
        <p className="mt-5 text-sm text-white/60">
          {contact.numberLabel}:{" "}
          <a
            href={contact.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            {whatsapp.display}
          </a>
        </p>
      </PageHero>

      <section aria-label="What to expect" className="pb-20 lg:pb-28">
        <Container>
          <dl className="glass mx-auto grid max-w-4xl overflow-hidden text-center sm:grid-cols-3">
            {contact.promises.map((promise) => (
              <div
                key={promise.label}
                className="flex flex-col-reverse gap-1.5 border-white/10 px-5 py-7 not-last:border-b sm:py-9 sm:not-last:border-r sm:not-last:border-b-0"
              >
                <dt className="text-sm text-white/60">{promise.label}</dt>
                <dd className="font-display text-gradient text-3xl font-extrabold tracking-tight">
                  {promise.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section
        aria-labelledby="topics-title"
        className="bg-night-900 border-t border-white/10 py-20 lg:py-32"
      >
        <Container>
          <SectionHeading
            id="topics-title"
            eyebrow={contact.topicsEyebrow}
            title={contact.topicsTitle}
            intro={contact.topicsIntro}
          />
          <ul className="mt-14 flex flex-wrap justify-center gap-5 lg:mt-20 lg:gap-6">
            {contact.topics.map(({ title, body, icon: Icon, href }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={(index % 3) * 90}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-spot
                  className="glass glass-hover group flex h-full items-start gap-5 p-6 lg:p-7"
                >
                  <span className="text-brand-300 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 inset-ring inset-ring-white/10">
                    <Icon className="size-6" />
                  </span>
                  <span className="flex-1">
                    <span className="font-display block text-lg font-bold tracking-tight text-white">
                      {title}
                    </span>
                    <span className="mt-1.5 block leading-relaxed text-white/65">
                      {body}
                    </span>
                    <span className="text-whatsapp mt-4 inline-flex items-center gap-2 text-sm font-bold">
                      {contact.topicCta}
                      <ArrowRightIcon
                        className="ease-out-expo size-4 transition-transform duration-500 group-hover:translate-x-1.5"
                        strokeWidth={2.5}
                      />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
