import type { OpeningHours, PageState, Weekday } from "@/types/menu";

export const WEEKDAYS: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const WEEKDAY_LABELS: Record<Weekday, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function parsePageState(raw: string | string[] | undefined): PageState {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value === "closed" || value === "special-sold-out") {
    return value;
  }
  return "open";
}

/** Simulated Lisbon clock from the trial brief — no live timezone math. */
export function simulatedClock(state: PageState): {
  weekday: Weekday;
  minutes: number;
  clockLabel: string;
} {
  if (state === "closed") {
    return { weekday: "monday", minutes: 11 * 60 + 30, clockLabel: "Monday 11:30" };
  }
  return { weekday: "tuesday", minutes: 11 * 60 + 30, clockLabel: "Tuesday 11:30" };
}

function parseClockToMinutes(value: string): number | null {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return null;
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    return null;
  }
  return hours * 60 + minutes;
}

export function parseOpeningWindow(
  hoursValue: string,
): { open: number; close: number } | null {
  if (hoursValue.trim().toLowerCase() === "closed") {
    return null;
  }
  const parts = hoursValue.split("–").map((part) => part.trim());
  if (parts.length !== 2) {
    return null;
  }
  const open = parseClockToMinutes(parts[0]);
  const close = parseClockToMinutes(parts[1]);
  if (open === null || close === null) {
    return null;
  }
  return { open, close };
}

export function isOpenNow(
  hours: OpeningHours,
  weekday: Weekday,
  minutes: number,
): boolean {
  const window = parseOpeningWindow(hours[weekday]);
  if (!window) {
    return false;
  }
  return minutes >= window.open && minutes < window.close;
}

function formatMinutes(total: number): string {
  const hours = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (total % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function nextOpeningLabel(
  hours: OpeningHours,
  weekday: Weekday,
  minutes: number,
): string {
  const todayWindow = parseOpeningWindow(hours[weekday]);
  if (todayWindow && minutes < todayWindow.open) {
    return `today at ${formatMinutes(todayWindow.open)}`;
  }

  for (let offset = 1; offset <= WEEKDAYS.length; offset += 1) {
    const index = (WEEKDAYS.indexOf(weekday) + offset) % WEEKDAYS.length;
    const day = WEEKDAYS[index];
    const window = parseOpeningWindow(hours[day]);
    if (window) {
      const when = offset === 1 ? "tomorrow" : WEEKDAY_LABELS[day];
      return `${when} at ${formatMinutes(window.open)}`;
    }
  }

  return "soon";
}
