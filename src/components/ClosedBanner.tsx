type ClosedBannerProps = {
  nextOpen: string;
};

export function ClosedBanner({ nextOpen }: ClosedBannerProps) {
  return (
    <div
      className="mx-5 mb-8 border-l-[3px] border-brand bg-cream-deep px-5 py-4 sm:mx-8"
      role="status"
    >
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand">
        We’re closed today
      </p>
      <p className="mt-1.5 text-base leading-relaxed text-ink">
        Monday is our rest day. The kitchen opens again {nextOpen}. The menu is
        still here if you’d like to plan ahead.
      </p>
    </div>
  );
}
