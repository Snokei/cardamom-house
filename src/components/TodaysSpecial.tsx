import type { MenuItem, TodaySpecial } from "@/types/menu";
import { formatEuro } from "@/lib/format";

type TodaysSpecialProps = {
  special: TodaySpecial;
  item: MenuItem | undefined;
  soldOut: boolean;
};

export function TodaysSpecial({ special, item, soldOut }: TodaysSpecialProps) {
  return (
    <aside
      className="mx-5 mb-10 border-t-[3px] border-brand bg-amber-wash px-5 py-6 sm:mx-8 sm:px-7 sm:py-8"
      aria-labelledby="todays-special-heading"
    >
      <p
        id="todays-special-heading"
        className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand"
      >
        Today’s special
      </p>
      {soldOut ? (
        <>
          <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
            {item?.name ?? "Today’s special"} is sold out
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            We served the last plate of Saffron French Toast. The rest of brunch
            is still on — shakshuka, hash, and plenty of coffee.
          </p>
        </>
      ) : (
        <>
          <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
            {item?.name ?? "Chef’s pick"}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            {special.blurb}
          </p>
          {item ? (
            <p className="mt-4 font-sans text-sm font-medium text-ink">
              {formatEuro(item.price)}
            </p>
          ) : null}
        </>
      )}
    </aside>
  );
}
