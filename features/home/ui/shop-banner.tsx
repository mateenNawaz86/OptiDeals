import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { shop } from "../content";

export function ShopBanner() {
  return (
    <section aria-labelledby="shop-title" className="mx-auto w-full max-w-[1440px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[1440/759]">
        <Image
          src={shop.image.src}
          alt={shop.image.alt}
          fill
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
        <h2 id="shop-title" className="sr-only">
          {shop.title}
        </h2>
        <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-10">
          <ButtonLink
            href={shop.cta.href}
            size="lg"
            className="shadow-lg sm:h-16 sm:px-12 sm:text-xl"
          >
            {shop.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
