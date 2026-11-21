import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faq } from "../content";

function MoreHelp({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-lg font-bold text-white">{faq.moreTitle}</p>
      <p className="mt-1.5 text-white/65">{faq.moreBody}</p>
      <ButtonLink href={faq.more.href} variant="whatsapp" className="mt-6">
        <WhatsAppIcon className="size-5" />
        {faq.more.label}
      </ButtonLink>
    </div>
  );
}

/** Native <details> accordion: works without JavaScript and is keyboard accessible. */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow={faq.eyebrow}
            title={faq.title}
            intro={faq.intro}
            align="left"
          />
          <Reveal delay={120}>
            <MoreHelp className="glass mt-9 hidden p-7 lg:block" />
          </Reveal>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            {faq.items.map((item, index) => (
              <Reveal key={item.question} delay={Math.min(index, 5) * 60}>
                <details className="group glass open:inset-ring-brand-300/30 open:bg-white/[0.07] rounded-2xl open:inset-ring">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-5 py-5 sm:px-7 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-brand-300 group-open:bg-brand-400 group-open:text-night-950 ease-out-expo relative size-9 shrink-0 rounded-full bg-white/8 transition duration-500 group-open:rotate-[135deg]"
                    >
                      <span className="absolute top-1/2 left-1/2 h-0.5 w-3.5 -translate-1/2 rounded-full bg-current" />
                      <span className="absolute top-1/2 left-1/2 h-3.5 w-0.5 -translate-1/2 rounded-full bg-current" />
                    </span>
                  </summary>
                  <p className="px-5 pb-6 leading-relaxed text-white/70 sm:px-7 sm:pb-7">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <MoreHelp className="glass mt-8 p-7 text-center lg:hidden" />
        </div>
      </Container>
    </section>
  );
}
