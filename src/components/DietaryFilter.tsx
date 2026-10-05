"use client";

import type { DietaryFilter as DietaryFilterValue } from "@/types/menu";

const OPTIONS: { value: DietaryFilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "gluten-free", label: "Gluten-free" },
];

type DietaryFilterProps = {
  value: DietaryFilterValue;
  onChange: (value: DietaryFilterValue) => void;
};

export function DietaryFilter({ value, onChange }: DietaryFilterProps) {
  return (
    <div className="px-5 pb-4 sm:px-8 print:hidden">
      <p
        id="dietary-filter-label"
        className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-muted"
      >
        Dietary filter
      </p>
      <div
        role="group"
        aria-labelledby="dietary-filter-label"
        className="mt-2 flex flex-wrap gap-1.5"
      >
        {OPTIONS.map((option) => {
          const isActive = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "inline-flex min-h-10 items-center rounded-full bg-brand px-4 py-2 font-sans text-sm font-semibold text-cream"
                  : "inline-flex min-h-10 items-center rounded-full border border-rule bg-cream px-4 py-2 font-sans text-sm font-medium text-ink-muted hover:border-brand/40 hover:text-ink"
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
