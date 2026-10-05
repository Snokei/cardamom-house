import type { MenuCategory } from "@/types/menu";
import { MenuItemRow } from "@/components/MenuItem";

type MenuSectionProps = {
  category: MenuCategory;
  soldOutItemId: string | null;
};

export function MenuSection({ category, soldOutItemId }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="scroll-mt-24 px-5 py-10 sm:scroll-mt-28 sm:px-8"
    >
      <div className="mb-6 border-b border-rule pb-4">
        <h2
          id={`${category.id}-heading`}
          className="font-display text-3xl text-ink sm:text-4xl"
        >
          {category.name}
        </h2>
        {category.description ? (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {category.description}
          </p>
        ) : null}
      </div>
      <div>
        {category.items.map((item) => (
          <MenuItemRow
            key={item.id}
            item={item}
            soldOut={soldOutItemId === item.id}
          />
        ))}
      </div>
    </section>
  );
}
