import type { Restaurant } from "@/types/menu";
import { instagramHref, phoneHref } from "@/lib/format";

type FooterProps = {
  restaurant: Restaurant;
};

export function SiteFooter({ restaurant }: FooterProps) {
  return (
    <footer className="mt-4 border-t border-rule px-5 py-12 sm:px-8">
      <p className="font-display text-2xl text-ink">{restaurant.name}</p>
      <address className="mt-4 not-italic text-sm leading-relaxed text-ink-muted">
        <p>{restaurant.address}</p>
        <p className="mt-3">
          <a
            className="text-ink underline decoration-brand/50 underline-offset-4 hover:decoration-brand"
            href={phoneHref(restaurant.phone)}
          >
            {restaurant.phone}
          </a>
        </p>
        <p className="mt-2">
          <a
            className="text-ink underline decoration-brand/50 underline-offset-4 hover:decoration-brand"
            href={instagramHref(restaurant.instagram)}
            rel="noopener noreferrer"
            target="_blank"
          >
            {restaurant.instagram}
          </a>
        </p>
      </address>
    </footer>
  );
}
