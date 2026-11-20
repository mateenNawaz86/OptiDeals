import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PillHeading, SectionHeading } from "@/components/ui/section-heading";
import { about } from "../content";

function StoryCard({
  lead,
  paragraphs,
  labelledBy,
}: {
  lead: string;
  paragraphs: string[];
  labelledBy: string;
}) {
  return (
    <article
      aria-labelledby={labelledBy}
      className="shadow-panel mx-auto mt-8 max-w-[1100px] rounded-[27px] bg-white px-6 py-8 sm:px-10 sm:py-10 lg:mt-10 lg:px-20 lg:py-14"
    >
      <p className="text-ink text-xl leading-snug font-bold text-balance sm:text-2xl lg:text-[1.75rem]">
        {lead}
      </p>
      <div className="text-body mt-5 flex flex-col gap-5 text-lg leading-relaxed lg:text-[1.3125rem] lg:leading-[1.7]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="py-12 lg:py-16">
        <Container>
          <PillHeading as="h1" id="about-title" className="lg:min-w-[30rem]">
            {about.title}
          </PillHeading>
          <StoryCard
            lead={about.story.lead}
            paragraphs={about.story.paragraphs}
            labelledBy="about-title"
          />

          <PillHeading id="journey-title" className="mt-14 lg:mt-20 lg:min-w-[36rem]">
            {about.journey.title}
          </PillHeading>
          <StoryCard
            lead={about.journey.lead}
            paragraphs={about.journey.paragraphs}
            labelledBy="journey-title"
          />
        </Container>
      </section>

      <section aria-labelledby="highlights-title" className="bg-brand py-16 lg:py-24">
        <Container>
          <SectionHeading
            id="highlights-title"
            title={about.highlights.title}
            tone="light"
          />
          <ul className="mt-12 grid gap-12 text-center text-white sm:grid-cols-3 lg:mt-16">
            {about.highlights.items.map(({ title, body, icon: Icon }) => (
              <li key={title} className="flex flex-col items-center">
                <Icon className="h-20 w-20 lg:h-[6.5rem] lg:w-[6.5rem]" />
                <h3 className="mt-6 text-3xl font-light lg:text-[2.75rem]">{title}</h3>
                <p className="mt-2 text-lg text-white/90 lg:text-xl">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="about-cta-title" className="py-16 lg:py-20">
        <Container className="text-center">
          <h2
            id="about-cta-title"
            className="text-ink text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-extrabold tracking-tight"
          >
            {about.cta.title}
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-xl text-lg">{about.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={about.cta.primary.href} size="lg">
              {about.cta.primary.label}
            </ButtonLink>
            <ButtonLink href={about.cta.secondary.href} size="lg" variant="outline">
              {about.cta.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
