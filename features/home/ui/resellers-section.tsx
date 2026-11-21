import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { resellers } from "../content";

export function ResellersSection() {
  return (
    <section
      id="resellers"
      aria-labelledby="resellers-title"
      className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
    >
      <Container>
        <SectionHeading
          id="resellers-title"
          eyebrow={resellers.eyebrow}
          title={resellers.title}
          intro={resellers.intro}
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
          {resellers.items.map(({ title, body, icon: Icon, href }, index) => (
            <Reveal as="li" key={title} delay={index * 100}>
              {/* The whole card is the link. */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-spot
                className="glass glass-hover group flex h-full flex-col p-7 lg:p-9"
              >
                <span className="text-brand-300 flex size-14 items-center justify-center rounded-2xl bg-white/5 inset-ring inset-ring-white/10">
                  <Icon className="size-7" />
                </span>
                <h3 className="font-display mt-7 text-xl font-bold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">{body}</p>
                <span className="text-whatsapp mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold">
                  {resellers.itemCta}
                  <ArrowRightIcon
                    className="ease-out-expo size-4 transition-transform duration-500 group-hover:translate-x-1.5"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
