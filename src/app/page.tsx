import { ClosedBanner } from "@/components/ClosedBanner";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { MenuBoard } from "@/components/MenuBoard";
import { SiteFooter } from "@/components/SiteFooter";
import { TodaysSpecial } from "@/components/TodaysSpecial";
import { menu } from "@/data/menu";
import { buildMenuView } from "@/lib/view";

type HomeProps = {
  searchParams: Promise<{ state?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const view = buildMenuView(menu, params.state);
  const soldOutItemId = view.specialSoldOut
    ? menu.today_special.item_id
    : null;

  return (
    <div className="enter mx-auto min-h-screen max-w-3xl">
      <Hero
        restaurant={menu.restaurant}
        isOpen={view.isOpen}
        clockLabel={view.clockLabel}
      />
      {view.isOpen ? null : <ClosedBanner nextOpen={view.nextOpen} />}
      <TodaysSpecial
        special={menu.today_special}
        item={view.specialItem}
        soldOut={view.specialSoldOut}
      />
      <MenuBoard categories={menu.categories} soldOutItemId={soldOutItemId} />
      <Hours hours={menu.restaurant.hours} today={view.weekday} />
      <SiteFooter restaurant={menu.restaurant} />
    </div>
  );
}
