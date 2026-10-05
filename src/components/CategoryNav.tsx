"use client";

import { useMemo } from "react";
import type { MenuCategory } from "@/types/menu";
import { useActiveSection } from "@/hooks/useActiveSection";

type CategoryNavProps = {
  categories: MenuCategory[];
};

export function CategoryNav({ categories }: CategoryNavProps) {
  const ids = useMemo(
    () => categories.map((category) => category.id),
    [categories],
  );
  const activeId = useActiveSection(ids);

  return (
    <nav
      aria-label="Menu sections"
      className="sticky top-0 z-20 border-b border-rule bg-cream/95 backdrop-blur-sm print:hidden"
    >
      <ul className="flex gap-1 overflow-x-auto px-4 py-3 sm:justify-center sm:px-8">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                className={
                  isActive
                    ? "inline-flex min-h-11 items-center rounded-full bg-brand px-4 py-2 font-sans text-sm font-semibold text-cream"
                    : "inline-flex min-h-11 items-center rounded-full px-4 py-2 font-sans text-sm font-medium text-ink-muted hover:text-ink"
                }
                aria-current={isActive ? "true" : undefined}
              >
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
