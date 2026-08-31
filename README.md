# brnyc.com — placeholder

Pre-launch teaser + lead-capture holding page for **brnyc.com**. Its own repo,
own deploy — separate from `billionairesrownyc.com` (the public IDX site) and
from `internal-Trestle-UI` (the internal CMA tool).

## Domain architecture (per Charles's BRNYC-Domain-Architecture-Map, 6 Aug 2026)

- **billionairesrownyc.com** — THE FRONT DOOR, public / **indexed**: IDX listings,
  Editorial & SEO, lead capture. Where organic / PR / referral traffic lands.
- **THE GATE** — request access → qualify → invite.
- **brnyc.com** — THE VAULT, gated / **no-index**: the premium platform (The Row
  Report, Tower dossiers, Owner intel). Monetized via brokerage commissions +
  subscription (The Row Report).
- **billionairesrow.nyc** — 301 redirect → billionairesrownyc.com.

This repo is the **interim placeholder** on brnyc.com: a teaser that holds the
vault domain (no-index, by design) and captures interest until the gated
platform is built.

- **Teaser** to make people curious — **no live statistics** (accurate stats only
  appear on the real platform once live; the placeholder must not show inaccurate
  numbers).
- **Lead capture** → contact info into **GHL** (for auto-followup workflows).

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**
  (`@tailwindcss/postcss`) · **pnpm 10**
- **Theme:** the Billionaires Row NYC platform design system — Deep Slate
  `#0e172a` ground, Muted Gold `#c5a059` accent, Soft White `#f8fafc` ink
  (tokens in [`app/globals.css`](app/globals.css)). Fonts via
  `next/font/google`: Playfair Display (headline), Inter (body), JetBrains Mono
  (labels). The teaser adopts the platform's palette/type/accent only, not its
  full component set.
- Deploy target: **Vercel** (the page prerenders as static).
- No Radix / tRPC / Drizzle / DB — a teaser needs none of it.

```bash
pnpm install
pnpm dev        # http://localhost:3000  (this repo's launch config uses 3100)
pnpm build      # production build
pnpm start      # serve the production build
```

## No-index (brnyc.com is no-index by design)

Enforced in three places — keep all three:

1. `robots: { index: false, follow: false }` metadata in [`app/layout.tsx`](app/layout.tsx).
2. `X-Robots-Tag: noindex, nofollow` response header in [`next.config.ts`](next.config.ts).
3. [`public/robots.txt`](public/robots.txt) — `Disallow: /`.

## Legal pages

Served **locally** on this placeholder (not redirected to billionairesrownyc.com):

| Route | Source |
| --- | --- |
| `/privacy` | `content/privacy-policy.json` |
| `/terms` | `content/terms-and-conditions.json` |
| `/standard-operating-procedures` | `content/standard-operating-procedures.json` |
| `/accessibility` | `content/accessibility.json` |
| `/fair-housing` | `content/fair-housing-notice.json` (NYS Housing & Anti-Discrimination Notice, Rev. 02/25) |

- The five `content/*.json` files are copied **verbatim** from the
  billionairesrownyc platform repo (`content/`), rendered by
  [`components/DisclosureDocument.tsx`](components/DisclosureDocument.tsx). To
  update a policy, replace the JSON file (re-copy from the platform repo) — do
  not hand-edit legal copy.
- `/fair-housing` renders the full **NYS Housing and Anti-Discrimination Notice**
  (the State's standardized form, Rev. 02/25), same content the platform serves.
- All legal pages inherit the site-wide **no-index** (they are interim copies on
  the no-index vault domain; the canonical indexed copies live on
  billionairesrownyc.com).

## System pages

- **Footer** — the compliance footer ([`components/SiteFooter.tsx`](components/SiteFooter.tsx))
  renders on **every** page via the root layout.
- **404** — [`app/not-found.tsx`](app/not-found.tsx); **route error** —
  [`app/error.tsx`](app/error.tsx); **root-layout error** —
  [`app/global-error.tsx`](app/global-error.tsx). Ported from the platform's
  `.failure` styling, retargeted to home + request-access (no listings/map here).
- **Favicon** — the platform monogram (`public/images/monogram.svg`), set via
  `metadata.icons` in [`app/layout.tsx`](app/layout.tsx), matching
  billionairesrownyc.com. The inner-page top-left logo is the same monogram +
  wordmark lockup, in white (brass on hover).

## Wire the lead form (GHL)

The page ships with a `mailto:` fallback so it is never dead. To embed the GHL
hosted form instead, set one env var — no code change:

1. Build a hosted form in GHL, copy its **share URL**.
2. Set `NEXT_PUBLIC_GHL_FORM_URL` (see [`.env.example`](.env.example)) — locally
   in `.env.local`, on Vercel in Project → Settings → Environment Variables.
3. Redeploy. When the var is set, [`app/page.tsx`](app/page.tsx) renders the form
   in an `<iframe>` in place of the mailto CTA.
4. **Configure the marketing-consent checkbox IN GHL: separate, optional,
   UNCHECKED.** Inquiry must be possible WITHOUT consenting to marketing (Charles's
   compliance instructions, 24 Aug 2026). Record consent + timestamp + originating
   form on the GHL side.

## Open items — confirm with Charles before go-live

- **Phone** — using `(833) 749-1480` (his 30 Aug 2026 update; "now answered by
  Executive Losers"). The 24 Aug footer said `(855) 480-1115`, and the platform's
  `lib/compliance.ts` still shows `(855) 480-1115`. **Confirm which is public** and
  align both sites.
- **License number** — **omitted on purpose.** `10351214445` is 11 digits (NY = 10)
  and unconfirmed; no listings are shown, so no license display is required on a
  stub. Add once confirmed.
- **Trade name** — the licensed entity is **FRITSCHLER, CHARLES**. Do **not**
  describe "Billionaires Row NYC" as the licensed brokerage (trade name not yet
  NYS-approved).
- **Legal pages** are now served locally (see **Legal pages** above), copied
  from the platform `content/`. Keep them in sync when the platform's disclosures
  change. When brnyc.com becomes the gated vault, decide whether these stay here
  or link to the canonical copies on billionairesrownyc.com.
- **Forwarding** — brnyc.com currently 301s to billionairesrownyc.com. That
  forwarding must be removed so this placeholder serves (Charles, 30 Aug 2026).
  DNS is Charles's action.

## Copy / footer source

Broker identity + footer copy is from Charles's approved "IDX website compliance"
email (24 Aug 2026). Brand spelling standardized to **"Billionaires Row NYC"**
(no apostrophe) per his 30 Aug 2026 ruling.
