import { Aurora } from "@/components/ui/aurora";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon, PlayIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { hero } from "../content";

const posters = [
  "from-brand-400 to-[#0b5e8a]",
  "from-accent-500 to-[#3a1d8f]",
  "from-pink to-[#7a1d5c]",
  "from-gold to-[#a3471a]",
  "from-[#4cc9f0] to-[#28347f]",
  "from-[#9ef01a] to-[#0d6b4f]",
];

/**
 * Decorative streaming-app mock-up drawn in CSS: no image to download, so it never delays
 * the LCP. Shapes only, no real channel or title names.
 */
function PlayerMockup() {
  return (
    <div
      aria-hidden="true"
      className="animate-fade-up relative mx-auto mt-16 w-full max-w-5xl [animation-delay:480ms] [perspective:2000px] lg:mt-20"
    >
      <div className="bg-[radial-gradient(closest-side,rgb(134_113_255/0.4),rgb(23_219_199/0.12)_60%,transparent)] absolute -inset-x-16 -top-10 -bottom-24 -z-10" />

      <div className="bg-night-900 shadow-panel overflow-hidden rounded-[1.25rem] inset-ring inset-ring-white/15 sm:rounded-[1.75rem] lg:[transform:rotateX(8deg)] lg:[transform-origin:50%_100%]">
        {/* Window bar */}
        <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex gap-1 text-[11px] font-semibold sm:text-xs">
            {hero.tabs.map((tab, index) => (
              <span
                key={tab}
                className={cn(
                  "rounded-full px-2.5 py-1 sm:px-3",
                  index === 0 ? "bg-white/12 text-white" : "text-white/50",
                )}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 p-3 sm:gap-4 sm:p-4 md:grid-cols-[13rem_minmax(0,1fr)]">
          {/* Channel list */}
          <div className="hidden flex-col gap-2 md:flex">
            {posters.map((poster, index) => (
              <div
                key={poster}
                className={cn(
                  "flex items-center gap-3 rounded-xl p-2.5",
                  index === 0
                    ? "bg-white/10 inset-ring inset-ring-white/10"
                    : "bg-white/[0.03]",
                )}
              >
                <span
                  className={cn("size-9 shrink-0 rounded-lg bg-linear-to-br", poster)}
                />
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="h-2 w-4/5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1/2 rounded-full bg-white/10" />
                </span>
                {index === 0 ? (
                  <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Now playing */}
            <div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-[linear-gradient(120deg,#0d9e90_0%,#4433c9_50%,#b1307c_100%)] sm:rounded-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgb(255_255_255/0.35),transparent_45%)]" />
              <div className="from-night-950/70 absolute inset-0 bg-linear-to-t to-transparent" />
              <div className="absolute top-3 left-3 flex gap-2 text-[10px] font-bold tracking-wider text-white sm:top-4 sm:left-4 sm:text-[11px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1">
                  <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
                  LIVE
                </span>
                <span className="rounded-full bg-black/55 px-2.5 py-1">8K UHD</span>
              </div>
              <span className="text-night-950 absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-white shadow-2xl sm:size-16">
                <PlayIcon className="size-5 sm:size-7" />
              </span>
              <div className="absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-5">
                <div className="h-2 w-2/5 rounded-full bg-white/70" />
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/25">
                  <div className="bg-brand-300 h-full w-3/5 rounded-full" />
                </div>
              </div>
            </div>

            {/* Poster row */}
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
              {posters.map((poster, index) => (
                <span
                  key={poster}
                  className={cn(
                    "aspect-[3/4] rounded-lg bg-linear-to-br opacity-90 sm:rounded-xl",
                    poster,
                    index > 3 && "hidden sm:block",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="motion-safe:animate-float bg-night-800 absolute top-16 -right-3 hidden rounded-2xl px-4 py-3 shadow-2xl inset-ring inset-ring-white/15 sm:block lg:-right-10">
        <p className="font-display text-gradient text-2xl leading-none font-extrabold">
          31K+
        </p>
        <p className="mt-1 text-xs font-medium text-white/65">live channels</p>
      </div>
      <div className="motion-safe:animate-float bg-night-800 absolute bottom-10 -left-3 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl inset-ring inset-ring-white/15 [animation-delay:-3.5s] sm:flex lg:-left-10">
        <span className="bg-brand-400/15 text-brand-300 flex size-9 items-center justify-center rounded-full">
          <CheckIcon className="size-4" strokeWidth={2.5} />
        </span>
        <p className="text-sm leading-tight font-bold">
          99.9% uptime
          <span className="block text-xs font-medium text-white/60">fast servers</span>
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Aurora />
      <Container className="pt-16 pb-16 text-center sm:pt-20 lg:pt-28 lg:pb-24">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1
          id="hero-title"
          className="font-display mx-auto mt-7 max-w-5xl text-[clamp(2.5rem,1.2rem+5.6vw,5.5rem)] leading-[1.02] font-extrabold tracking-[-0.04em] text-balance"
        >
          <span className="text-gradient">{hero.title.lead}</span> {hero.title.rest}
        </h1>
        <p className="animate-fade-up mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/70 [animation-delay:160ms] sm:text-xl">
          {hero.body}
        </p>
        <div className="animate-fade-up mt-9 flex flex-col justify-center gap-3 [animation-delay:240ms] sm:flex-row sm:gap-4">
          <ButtonLink href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} size="lg" variant="ghost">
            <WhatsAppIcon className="text-whatsapp size-5" />
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
        <ul className="animate-fade-up mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/75 [animation-delay:320ms]">
          {hero.points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <CheckIcon className="text-brand-300 size-4" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>

        <PlayerMockup />

        <dl className="glass animate-fade-up mt-16 grid grid-cols-2 overflow-hidden text-center [animation-delay:600ms] lg:mt-20 lg:grid-cols-4">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse gap-1.5 border-white/10 px-4 py-7 not-last:border-r max-lg:nth-2:border-r-0 max-lg:nth-[-n+2]:border-b sm:py-9"
            >
              <dt className="text-sm text-white/60 sm:text-base">{stat.label}</dt>
              <dd className="font-display text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
