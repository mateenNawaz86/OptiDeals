"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { contactHref } from "@/lib/site";
import { pricing } from "../content";
import {
  DEFAULT_REGION_ID,
  formatPrice,
  getRegion,
  planIncludes,
  plans,
  regions,
  type Plan,
  type RegionId,
} from "../data/pricing";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="text-brand-600 size-5 shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceCard({ plan, currency }: { plan: Plan; currency: string }) {
  const price = formatPrice(plan.price, currency);

  return (
    <li
      className={cn(
        "bg-surface relative flex flex-col overflow-hidden rounded-[21px] border-2 transition-shadow duration-300 hover:shadow-card-hover",
        plan.featured ? "border-accent-600 shadow-card-hover" : "border-line",
      )}
    >
      <div className="bg-brand-vivid relative px-6 py-5 text-center text-white">
        <h3 className="text-3xl font-bold tracking-tight">{pricing.brand}</h3>
        <p className="mt-0.5 text-sm font-medium tracking-[0.2em] uppercase">
          {pricing.offer}
        </p>
        {plan.featured ? (
          <span className="text-brand-700 absolute top-[22px] -right-[46px] w-44 rotate-45 bg-white py-1.5 text-center text-[11px] font-bold tracking-wider uppercase shadow-sm">
            {pricing.ribbon}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col items-center px-6 pt-6 pb-7 text-center">
        <p className="text-ink flex items-start">
          <span className="sr-only">{price.label}</span>
          <span className="mt-2 text-2xl font-medium" aria-hidden="true">
            {price.symbol}
          </span>
          <span
            className="text-6xl leading-none font-semibold tracking-tight"
            aria-hidden="true"
          >
            {price.value}
          </span>
        </p>
        <p className="text-ink mt-2 text-lg font-semibold uppercase">{plan.period}</p>

        <ul className="mt-6 flex flex-col gap-3 text-left text-[15px] font-medium">
          {planIncludes.map((item) => (
            <li key={item} className="text-body flex items-center gap-3">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto w-full pt-7">
          <ButtonLink
            href={contactHref({ service: "subscription", plan: plan.id })}
            className="w-full max-w-[14rem]"
            aria-label={`${pricing.cta}: ${plan.period} plan`}
          >
            {pricing.cta}
          </ButtonLink>
          <p className="text-muted mt-3 text-xs font-medium tracking-wide uppercase">
            {pricing.note}
          </p>
        </div>
      </div>
    </li>
  );
}

export function PricingSection() {
  const [regionId, setRegionId] = useState<RegionId>(DEFAULT_REGION_ID);
  const region = getRegion(regionId);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          id="pricing-title"
          title={pricing.title}
          intro={pricing.intro}
        />

        <fieldset className="mt-8 flex justify-center">
          <legend className="sr-only">{pricing.regionLegend}</legend>
          <div className="bg-surface flex flex-wrap justify-center gap-1.5 rounded-full p-1.5">
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
                <span className="text-body peer-checked:bg-brand-vivid peer-focus-visible:outline-accent-600 block cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition-colors peer-checked:text-white peer-checked:shadow-sm peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 hover:bg-white sm:px-6">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className="sr-only" aria-live="polite">
          Prices shown in {region.currency} for {region.label}.
        </p>

        <ul className="mx-auto mt-10 grid max-w-[1326px] gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <PriceCard key={plan.id} plan={plan} currency={region.currency} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
