import type { DietaryTag } from "@/types/menu";

const euroFormatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export function formatEuro(price: number): string {
  return euroFormatter.format(price);
}

export function tagLabel(tag: DietaryTag): string {
  switch (tag) {
    case "V":
      return "Vegetarian";
    case "GF":
      return "Gluten-free";
    case "spicy":
      return "Spicy";
  }
}

export function tagShort(tag: DietaryTag): string {
  switch (tag) {
    case "V":
      return "V";
    case "GF":
      return "GF";
    case "spicy":
      return "Spicy";
  }
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function instagramHref(handle: string): string {
  const username = handle.replace(/^@/, "");
  return `https://www.instagram.com/${username}/`;
}
