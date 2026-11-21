"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { messages, whatsappHref } from "@/lib/site";
import { pricing } from "../content";
import {
  DEFAULT_REGION_ID,
  savingPercent,
  formatPrice,
  getRegion,
  planIncludes,
  premiumIncludes,
  premiumPlans,
  standardPlans,
  regions,
  type Currency,
  type Plan,
  type RegionId,
} from "../data/pricing";

function PriceCard({ plan, currency }: { plan: Plan; currency: Currency }) {
  const price = formatPrice(plan.prices[currency], currency);
  const saving = savingPercent(plan, currency);
  const { featured } = plan;
  const premium = plan.tier === "8k";
  const includes = premium
    ? premiumIncludes
    : plan.devices
      ? [`${plan.devices} devices at the same time`, ...planIncludes]
      : planIncludes;

  return (
    <article
      data-spot
      className={cn(
        "glass glass-hover flex h-full flex-col p-7 sm:p-8",
        featured &&
          "ring-gradient bg-[linear-gradient(180deg,rgb(134_113_255/0.22),rgb(23_219_199/0.06))] shadow-[0_40px_90px_-40px_rgb(134_113_255/0.7)]",
      )}
    >
      {featured ? (
        <span className="bg-gold text-night-950 absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold tracking-wider whitespace-nowrap uppercase shadow-[0_10px_30px_-8px_rgb(255_194_75/0.8)]">
          {premium ? pricing.premium.ribbon : pricing.ribbon}
        </span>
      ) : null}

      <p className="text-brand-300 text-xs font-bold tracking-[0.16em] uppercase">
        {premium ? pricing.premium.brand : pricing.brand}
      </p>
      <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white">
        {plan.period}
      </h3>

      <p className="mt-6 flex items-start text-white">
        <span className="sr-only">{price.label}</span>
        <span className="mt-2 text-2xl font-bold text-white/70" aria-hidden="true">
          {price.symbol}
        </span>
        <span
          className="font-display text-7xl leading-none font-extrabold tracking-[-0.04em]"
          aria-hidden="true"
        >
          {price.value}
        </span>
      </p>
      <p className="mt-3 text-sm font-medium text-white/60">
        {saving ? (
          <>
            <span className="text-brand-300 font-bold">Save {saving}%</span>{" "}
            {premium ? pricing.premium.saving : pricing.saving}
          </>
        ) : premium ? (
          pricing.premium.oneOff
        ) : plan.devices ? (
          pricing.multiDevice
        ) : (
          pricing.oneOff
        )}
      </p>

      <ul className="mt-7 flex flex-col gap-3.5 border-t border-white/10 pt-7 text-[15px] text-white/80">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="bg-brand-400/15 text-brand-300 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon strokeWidth={3} className="size-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <ButtonLink
          href={whatsappHref(messages.plan(plan.period, price.label))}
          variant={featured ? "whatsapp" : "ghost"}
          className="w-full"
          aria-label={`${pricing.cta}: ${plan.period} plan`}
        >
          <WhatsAppIcon className={cn("size-5", !featured && "text-whatsapp")} />
          {pricing.cta}
        </ButtonLink>
      </div>
    </article>
  );
}

export function PricingSection() {
  const [regionId, setRegionId] = useState<RegionId>(DEFAULT_REGION_ID);
  const region = getRegion(regionId);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative isolate overflow-hidden py-20 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(closest-side,rgb(134_113_255/0.2),transparent)] absolute top-[12%] left-1/2 -z-10 h-[70rem] w-[90rem] -translate-x-1/2"
      />
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          intro={pricing.intro}
        />

        <Reveal delay={100}>
          <fieldset className="mt-10 flex justify-center">
            <legend className="sr-only">{pricing.regionLegend}</legend>
            <div className="flex flex-wrap justify-center gap-1 rounded-3xl bg-white/5 p-1.5 inset-ring inset-ring-white/10 sm:rounded-full">
              {regions.map((option) => (
                <label key={option.id} className="relative">
                  <input
                    type="radio"
                    name="region"
                    value={option.id}
                    checked={option.id === regionId}
                    onChange={() => setRegionId(option.id)}
                    className="peer sr-only"
                  />
                  <span className="peer-checked:bg-brand-400 peer-checked:text-night-950 peer-focus-visible:outline-brand-300 block cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold text-white/70 transition-colors duration-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 hover:text-white sm:px-6">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </Reveal>
        <p className="sr-only" aria-live="polite">
          Prices shown in {region.currency} for {region.label}.
        </p>

        <ul className="mt-14 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {standardPlans.map((plan, index) => (
            <Reveal as="li" key={plan.id} delay={(index % 3) * 90}>
              <PriceCard plan={plan} currency={region.currency} />
            </Reveal>
          ))}
        </ul>

        <div id="pricing-8k" className="mt-24 lg:mt-32">
          <SectionHeading
            eyebrow={pricing.premium.eyebrow}
            title={<span className="text-gradient">{pricing.premium.title}</span>}
            intro={pricing.premium.intro}
          />
          <ul className="mx-auto mt-14 grid max-w-4xl gap-x-6 gap-y-9 sm:grid-cols-2">
            {premiumPlans.map((plan, index) => (
              <Reveal as="li" key={plan.id} delay={index * 90}>
                <PriceCard plan={plan} currency={region.currency} />
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-white/65">
          {pricing.note}{" "}
          <a
            href={pricing.noteCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-300 font-bold underline decoration-2 underline-offset-4 hover:text-white"
          >
            {pricing.noteCta.label}
          </a>
        </p>
      </Container>
    </section>
  );
}
