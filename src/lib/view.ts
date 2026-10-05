import type { MenuCategory, MenuData, MenuItem, PageState, Weekday } from "@/types/menu";
import {
  isOpenNow,
  nextOpeningLabel,
  parsePageState,
  simulatedClock,
} from "@/lib/hours";

export type MenuView = {
  state: PageState;
  weekday: Weekday;
  clockLabel: string;
  isOpen: boolean;
  nextOpen: string;
  specialSoldOut: boolean;
  specialItem: MenuItem | undefined;
};

export function findItem(
  categories: MenuCategory[],
  itemId: string,
): MenuItem | undefined {
  for (const category of categories) {
    const match = category.items.find((item) => item.id === itemId);
    if (match) {
      return match;
    }
  }
  return undefined;
}

export function buildMenuView(
  data: MenuData,
  rawState: string | string[] | undefined,
): MenuView {
  const state = parsePageState(rawState);
  const clock = simulatedClock(state);
  const isOpen = isOpenNow(data.restaurant.hours, clock.weekday, clock.minutes);

  return {
    state,
    weekday: clock.weekday,
    clockLabel: clock.clockLabel,
    isOpen,
    nextOpen: nextOpeningLabel(
      data.restaurant.hours,
      clock.weekday,
      clock.minutes,
    ),
    specialSoldOut: state === "special-sold-out",
    specialItem: findItem(data.categories, data.today_special.item_id),
  };
}
