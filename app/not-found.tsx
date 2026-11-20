import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="text-center">
        <p className="text-gradient-brand text-7xl font-extrabold lg:text-8xl">404</p>
        <h1 className="text-ink mt-4 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted mx-auto mt-3 max-w-md text-lg">
          The page you are looking for doesn’t exist or has moved.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
