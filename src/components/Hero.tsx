import type { Restaurant } from "@/types/menu";

type HeroProps = {
  restaurant: Restaurant;
  isOpen: boolean;
  clockLabel: string;
};

export function Hero({ restaurant, isOpen, clockLabel }: HeroProps) {
  return (
    <header className="px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand">
        Lisbon · since 2021
      </p>
      <h1 className="font-display mt-4 max-w-xl text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
        {restaurant.name}
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl">
        {restaurant.tagline}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <p
          className={
            isOpen
              ? "inline-flex items-center rounded-full bg-brand px-3.5 py-1.5 font-sans text-sm font-semibold text-cream"
              : "inline-flex items-center rounded-full border border-ink/20 bg-cream-deep px-3.5 py-1.5 font-sans text-sm font-semibold text-ink-muted"
          }
        >
          <span
            className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${isOpen ? "bg-cream" : "bg-ink-muted"}`}
            aria-hidden
          />
          {isOpen ? "Open now" : "Closed today"}
        </p>
        <p className="font-sans text-sm text-ink-muted">Showing {clockLabel}</p>
      </div>
    </header>
  );
}
