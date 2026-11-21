import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { youtube } from "@/lib/site";
import { video } from "../content";

export function VideoSection() {
  return (
    <section
      id="video"
      aria-labelledby="video-title"
      className="bg-night-900 relative isolate overflow-hidden border-y border-white/10 py-20 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(closest-side,rgb(23_219_199/0.14),transparent)] absolute top-[8%] left-1/2 -z-10 h-[60rem] w-[90rem] -translate-x-1/2"
      />
      <Container>
        <SectionHeading
          id="video-title"
          eyebrow={video.eyebrow}
          title={video.title}
          intro={video.intro}
        />

        <Reveal className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
          <div
            aria-hidden="true"
            className="bg-[radial-gradient(closest-side,rgb(134_113_255/0.4),rgb(23_219_199/0.12)_60%,transparent)] absolute -inset-x-16 -top-10 -bottom-24 -z-10"
          />
          <div className="ring-gradient shadow-panel relative rounded-[1.25rem] sm:rounded-[1.75rem]">
            <YouTubeEmbed id={video.featured.id} title={video.featured.title} />
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-wrap items-end justify-between gap-4 lg:mt-20">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">
            {video.guidesTitle}
          </h3>
          <a
            href={youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-300 group inline-flex min-h-11 items-center gap-2 text-sm font-bold hover:text-white"
          >
            {video.channelCta}
            <ArrowRightIcon
              className="ease-out-expo size-4 transition-transform duration-500 group-hover:translate-x-1.5"
              strokeWidth={2.5}
            />
          </a>
        </Reveal>

        <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {video.guides.map((guide, index) => (
            <Reveal as="li" key={guide.id} delay={index * 100}>
              <a
                href={`https://www.youtube.com/watch?v=${guide.id}`}
                target="_blank"
                rel="noopener noreferrer"
                data-spot
                className="glass glass-hover group flex h-full flex-col overflow-hidden"
              >
                <span className="relative block aspect-video overflow-hidden">
                  <Image
                    src={`https://i.ytimg.com/vi/${guide.id}/sddefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="ease-out-expo object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="text-night-950 absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-white/95 shadow-xl">
                    <PlayIcon className="size-4" />
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-md bg-black/75 px-2 py-0.5 text-xs font-bold text-white">
                    {guide.length}
                  </span>
                </span>
                <span className="font-display block p-5 text-base leading-snug font-semibold text-white sm:p-6">
                  {guide.title}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
