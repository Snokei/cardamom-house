# Cardamom House

Public menu page for a fictional Lisbon brunch café. Built as the Kwill frontend trial: one typography-led page, no backend, three reviewable URL states.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Review states

The café clock is simulated (Lisbon, from the brief) so reviewers always see the same three cases:

| URL | What you should see |
| --- | --- |
| [`/?state=open`](/?state=open) (default) | Tuesday 11:30, open, Saffron French Toast as today’s special |
| [`/?state=closed`](/?state=closed) | Monday, closed banner, next opening Tuesday 08:00 |
| [`/?state=special-sold-out`](/?state=special-sold-out) | Open, special callout updates, French Toast dimmed with a sold-out pill |

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Google fonts: Fraunces (display) and Source Sans 3 (UI/body)

Menu copy lives in `src/data/menu.json`. Hours and sold-out behaviour are derived in `src/lib/hours.ts` and `src/lib/view.ts`.

## Trade-offs

- **No food photos.** Type, paper colour, and amber `#B45309` carry the brand. Photos would compete with the menu on a phone pavement-read, and stock brunch images tend to look generic.
- **Hard-coded Tuesday 11:30 / Monday**, not the visitor’s real clock. The brief allows this; it keeps the three states deterministic for review.
- **Sticky nav as horizontal chips** on every breakpoint. A desktop sidebar would fight the single-column “menu card” layout.

## What I would build next

- A dietary filter (vegetarian / gluten-free) once the core page is signed off
- Real opening-hours from Europe/Lisbon if they ever want “open now” for customers, not reviewers
- A print sheet already exists via `@media print`; I would test it on an actual café printer next

## Loom talking points

1. **Proud of:** treating `#B45309` as a system (open badge, special rule, active nav, hours “today”) instead of a single highlight box.
2. **Revisit with another half-day:** a slightly richer special treatment and real device testing of sticky-nav offset.
3. **Question I wished was answered up front:** whether they want live timezone “open now” or a frozen demo clock for the pairing session.
