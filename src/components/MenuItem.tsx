import type { DietaryTag, MenuItem } from "@/types/menu";
import { formatEuro, tagLabel, tagShort } from "@/lib/format";

type MenuItemRowProps = {
  item: MenuItem;
  soldOut: boolean;
};

function TagPill({ tag }: { tag: DietaryTag }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-ink/12 px-2 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted"
      title={tagLabel(tag)}
    >
      {tagShort(tag)}
    </span>
  );
}

export function MenuItemRow({ item, soldOut }: MenuItemRowProps) {
  return (
    <article
      className={`border-b border-rule py-5 last:border-b-0 ${soldOut ? "opacity-50" : ""}`}
      aria-label={soldOut ? `${item.name}, sold out` : undefined}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl leading-snug text-ink sm:text-[1.35rem]">
          {item.name}
        </h3>
        <p className="shrink-0 font-sans text-sm tabular-nums text-ink">
          {formatEuro(item.price)}
        </p>
      </div>
      {item.description ? (
        <p className="mt-1.5 max-w-prose text-[0.95rem] leading-relaxed text-ink-muted">
          {item.description}
        </p>
      ) : null}
      {(item.tags.length > 0 || soldOut) && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {soldOut ? (
            <li>
              <span className="inline-flex items-center rounded-full bg-ink px-2 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cream">
                Sold out
              </span>
            </li>
          ) : null}
          {item.tags.map((tag) => (
            <li key={tag}>
              <TagPill tag={tag} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
