export type DietaryTag = "V" | "GF" | "spicy";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningHours = Record<Weekday, string>;

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  tags: DietaryTag[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export type Restaurant = {
  name: string;
  tagline: string;
  address: string;
  hours: OpeningHours;
  brand_color: string;
  phone: string;
  instagram: string;
};

export type TodaySpecial = {
  item_id: string;
  blurb: string;
};

export type MenuData = {
  restaurant: Restaurant;
  today_special: TodaySpecial;
  categories: MenuCategory[];
};

export type PageState = "open" | "closed" | "special-sold-out";

export type DietaryFilter = "all" | "vegetarian" | "gluten-free";

