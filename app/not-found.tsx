import { Aurora } from "@/components/ui/aurora";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="relative isolate overflow-hidden"
    >
      <Aurora />
      <Container className="py-28 text-center lg:py-40">
        <p className="font-display text-gradient animate-fade-up text-8xl font-extrabold tracking-tighter lg:text-9xl">
          404
        </p>
        <h1
          id="not-found-title"
          className="font-display animate-fade-up mt-4 text-3xl font-bold tracking-tight [animation-delay:80ms]"
        >
          Page not found
        </h1>
        <p className="animate-fade-up mx-auto mt-3 max-w-md text-lg text-white/70 [animation-delay:160ms]">
          The page you are looking for doesn’t exist or has moved.
        </p>
        <div className="animate-fade-up mt-9 flex flex-col justify-center gap-3 [animation-delay:240ms] sm:flex-row sm:gap-4">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/#pricing" size="lg" variant="ghost">
            View plans
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
