import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlayIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, headingClassName } from "@/components/ui/section-heading";
import { shop } from "../content";

export function ShopBanner() {
  return (
    <section aria-labelledby="shop-title" className="py-20 lg:py-32">
      <Container>
        <Reveal>
          <div className="glass ring-gradient grid overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div className="flex min-w-0 flex-col items-start justify-center px-7 py-12 sm:px-12 lg:py-16 lg:pr-10 lg:pl-14">
              <Eyebrow>{shop.eyebrow}</Eyebrow>
              <h2 id="shop-title" className={`${headingClassName} mt-5`}>
                {shop.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-white/65">
                {shop.body}
              </p>
              <div className="mt-9 flex flex-col gap-3 self-stretch sm:flex-row sm:flex-wrap sm:self-auto">
                <ButtonLink href={shop.cta.href} variant="whatsapp">
                  <WhatsAppIcon className="size-5" />
                  {shop.cta.label}
                </ButtonLink>
                <ButtonLink href={shop.video.href} variant="ghost">
                  <PlayIcon className="size-4" />
                  {shop.video.label}
                </ButtonLink>
              </div>
            </div>
            <Image
              src={shop.image.src}
              alt={shop.image.alt}
              width={shop.image.width}
              height={shop.image.height}
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 55vw, 100vw"
              className="h-full max-h-[26rem] w-full object-cover lg:max-h-none"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
