import { CategoryNav } from "@/components/CategoryNav";
import { ClosedBanner } from "@/components/ClosedBanner";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { MenuSection } from "@/components/MenuSection";
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
      <CategoryNav categories={menu.categories} />
      <main id="menu">
        {menu.categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            soldOutItemId={soldOutItemId}
          />
        ))}
      </main>
      <Hours hours={menu.restaurant.hours} today={view.weekday} />
      <SiteFooter restaurant={menu.restaurant} />
    </div>
  );
}
