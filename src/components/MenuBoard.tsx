"use client";

import { useMemo, useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { DietaryFilter } from "@/components/DietaryFilter";
import { MenuSection } from "@/components/MenuSection";
import type { DietaryFilter as DietaryFilterValue, MenuCategory } from "@/types/menu";

type MenuBoardProps = {
  categories: MenuCategory[];
  soldOutItemId: string | null;
};

function itemMatchesFilter(
  tags: MenuCategory["items"][number]["tags"],
  filter: DietaryFilterValue,
): boolean {
  if (filter === "all") {
    return true;
  }
  if (filter === "vegetarian") {
    return tags.includes("V");
  }
  return tags.includes("GF");
}

export function MenuBoard({ categories, soldOutItemId }: MenuBoardProps) {
  const [filter, setFilter] = useState<DietaryFilterValue>("all");

  const visibleCategories = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          itemMatchesFilter(item.tags, filter),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, filter]);

  return (
    <>
      <DietaryFilter value={filter} onChange={setFilter} />
      {visibleCategories.length > 0 ? (
        <>
          <CategoryNav categories={visibleCategories} />
          <main id="menu">
            {visibleCategories.map((category) => (
              <MenuSection
                key={category.id}
                category={category}
                soldOutItemId={soldOutItemId}
              />
            ))}
          </main>
        </>
      ) : (
        <main id="menu" className="px-5 py-10 sm:px-8">
          <p className="text-base text-ink-muted" role="status">
            No dishes match this filter. Try All, or switch dietary preference.
          </p>
        </main>
      )}
    </>
  );
}
