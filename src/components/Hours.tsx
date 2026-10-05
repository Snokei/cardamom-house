import type { OpeningHours, Weekday } from "@/types/menu";
import { WEEKDAYS, WEEKDAY_LABELS } from "@/lib/hours";

type HoursProps = {
  hours: OpeningHours;
  today: Weekday;
};

export function Hours({ hours, today }: HoursProps) {
  return (
    <section
      id="hours"
      aria-labelledby="hours-heading"
      className="scroll-mt-24 px-5 py-12 sm:px-8"
    >
      <h2
        id="hours-heading"
        className="font-display text-3xl text-ink sm:text-4xl"
      >
        Hours
      </h2>
      <p className="mt-2 text-sm text-ink-muted">Lisbon time, kitchen last orders fifteen minutes before close.</p>
      <ul className="mt-6 divide-y divide-rule border-y border-rule">
        {WEEKDAYS.map((day) => {
          const value = hours[day];
          const isToday = day === today;
          const isClosed = value.toLowerCase() === "closed";
          return (
            <li
              key={day}
              className={`flex items-baseline justify-between gap-4 px-3 py-3.5 sm:px-4 ${
                isToday ? "bg-amber-wash" : ""
              }`}
            >
              <span
                className={`font-sans text-sm sm:text-base ${
                  isToday ? "font-semibold text-ink" : "text-ink"
                }`}
              >
                {WEEKDAY_LABELS[day]}
                {isToday ? (
                  <span className="ml-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
                    {" "}
                    Today
                  </span>
                ) : null}
              </span>
              <span
                className={`font-sans text-sm tabular-nums sm:text-base ${
                  isClosed ? "italic text-ink-muted" : "text-ink"
                }`}
              >
                {value}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
