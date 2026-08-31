# brnyc.com — placeholder

Pre-launch teaser + lead-capture holding page for **brnyc.com**. Separate site
from the `billionairesrownyc.com` public IDX site and from `internal-Trestle-UI`
(the internal CMA tool). Own repo, own deploy.

## Domain architecture (per Charles's BRNYC-Domain-Architecture-Map, 6 Aug 2026)

- **billionairesrownyc.com** — THE FRONT DOOR, public / **indexed**: IDX listings,
  Editorial & SEO, Lead capture. Where organic / PR / referral traffic lands.
- **THE GATE** — request access → qualify → invite.
- **brnyc.com** — THE VAULT, gated / **no-index**: the premium platform (The Row
  Report, Tower dossiers, Owner intel). Monetized via brokerage commissions
  ($20M+ transactions) + subscription (The Row Report).
- **billionairesrow.nyc** — 301 redirect → billionairesrownyc.com (supporting asset).
- **you@brnyc.com** — email domain.

This repo is the **interim placeholder** on brnyc.com: a teaser that holds the
vault domain (no-index, by design) and captures interest until the gated
platform is built.

## What it is (per Charles, "websites" email, 6 Aug 2026)

- **Teaser** to make people curious — no live statistics (accurate stats only
  appear on the real platform once live; the placeholder must not show
  inaccurate numbers).
- **Lead capture** → contact info into **GHL** (ideal, for auto-followup
  workflows) or a Google Sheet (minimum).
- brnyc.com currently forwards to billionairesrownyc.com; Charles asked to
  **remove that forwarding** and serve this placeholder instead (30 Aug 2026).

## Stack

Single static `index.html`, inline CSS, no build, no backend, no secrets.
Deploy as static on Vercel / Cloudflare Pages / Netlify. `noindex` + `robots.txt`
keep it out of search until launch.

## Wire the lead form (GHL)

`index.html` ships with a `mailto:` fallback so the page is never dead. To
capture into GHL:

1. Build a hosted form in GHL, copy its **share URL**.
2. In `index.html`, uncomment the `<iframe>` slot, paste the URL, delete the
   `mailto` CTA.
3. Configure the marketing-consent checkbox **in GHL** as separate / optional /
   **unchecked** (required — Charles's compliance instructions, 24 Aug 2026,
   §5). Record consent + timestamp + originating form.

## Before go-live — confirm with Charles

- **Phone** — using `(833) 749-1480` (his 30 Aug update; "now answered by
  Executive Losers"). The 24 Aug footer said `(855) 480-1115`. Confirm which is
  public.
- **License number** — omitted here on purpose. `10351214445` is 11 digits (NY =
  10) and is unconfirmed; no listings are shown so no license display is required
  on a stub. Add once confirmed.
- **Legal links** point at `billionairesrownyc.com/*` — correct per the
  architecture (legal pages live on the public front door).
- **Forwarding** — brnyc.com currently 301s to billionairesrownyc.com. Remove
  that and serve this placeholder (Charles, 30 Aug 2026).

## Footer source

Broker identity/footer copy is from Charles's approved "IDX website compliance"
email (24 Aug 2026). Brand spelling standardized to "Billionaires Row NYC" (no
apostrophe) per his 30 Aug ruling.
