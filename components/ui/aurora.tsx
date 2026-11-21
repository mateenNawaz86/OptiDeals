import { cn } from "@/lib/cn";

/**
 * Decorative background for dark bands: colour light over a dot grid.
 * Phones and tablets get one static gradient (`bg-aurora`, no extra layers to animate);
 * large screens get three slow-drifting orbs. The orbs are radial gradients rather than
 * blurred shapes, which keeps painting cheap.
 * The parent needs `relative isolate overflow-hidden`.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "max-lg:bg-aurora pointer-events-none absolute inset-0 -z-10",
        className,
      )}
    >
      <div className="bg-dots absolute inset-0" />
      <div className="animate-drift absolute -top-72 right-[-22%] hidden size-[56rem] bg-[radial-gradient(closest-side,rgb(134_113_255/0.34),transparent)] lg:block" />
      <div className="animate-drift absolute top-[-16rem] left-[-26%] hidden size-[52rem] bg-[radial-gradient(closest-side,rgb(23_219_199/0.28),transparent)] [animation-delay:-6s] [animation-direction:alternate-reverse] lg:block" />
      <div className="animate-drift absolute top-[18%] left-[22%] hidden size-[40rem] bg-[radial-gradient(closest-side,rgb(255_106_176/0.14),transparent)] [animation-delay:-11s] lg:block" />
    </div>
  );
}
