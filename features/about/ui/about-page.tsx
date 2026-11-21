import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "../content";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Reveal
      delay={100}
      className="flex flex-col gap-5 text-lg leading-relaxed text-white/70"
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </Reveal>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        id="about-title"
        eyebrow={about.eyebrow}
        title={
          <>
            {about.title.lead}{" "}
            <span className="text-gradient">{about.title.accent}</span>
          </>
        }
        intro={about.intro}
      />

      <section aria-label="OptiDeals in numbers" className="pb-20 lg:pb-28">
        <Container>
          <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {about.facts.map((fact, index) => (
              <Reveal
                key={fact.label}
                delay={index * 90}
                className="glass flex h-full flex-col-reverse justify-end gap-2 px-5 py-8 text-center sm:py-10"
              >
                <dt className="text-sm text-white/60 sm:text-base">{fact.label}</dt>
                <dd className="font-display text-gradient text-[clamp(1.6rem,1rem+2.6vw,3rem)] leading-tight font-extrabold tracking-tight">
                  {"count" in fact && fact.count ? (
                    <CountUp {...fact.count} />
                  ) : (
                    fact.text
                  )}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section
        aria-labelledby="story-title"
        className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
      >
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="story-title"
            eyebrow={about.story.eyebrow}
            title={about.story.title}
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <Prose paragraphs={about.story.paragraphs} />
        </Container>
      </section>

      <section aria-labelledby="journey-title" className="py-20 lg:py-32">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="journey-title"
            eyebrow={about.journey.eyebrow}
            title={about.journey.title}
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <Prose paragraphs={about.journey.paragraphs} />
        </Container>
      </section>

      <section
        aria-labelledby="highlights-title"
        className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
      >
        <Container>
          <SectionHeading
            id="highlights-title"
            eyebrow={about.highlights.eyebrow}
            title={about.highlights.title}
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
            {about.highlights.items.map(({ title, body, icon: Icon }, index) => (
              <Reveal as="li" key={title} delay={index * 100}>
                <article
                  data-spot
                  className="glass glass-hover group h-full p-7 text-center lg:p-9"
                >
                  <span className="bg-gradient-brand ease-out-expo mx-auto flex size-16 items-center justify-center rounded-2xl text-white shadow-[0_12px_30px_-10px_rgb(134_113_255/0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="font-display mt-7 text-xl font-bold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/65">{body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand id="about-cta-title" {...about.cta} />
    </>
  );
}
