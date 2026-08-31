const INQUIRY_EMAIL = "inquiries@billionairesrownyc.com";
const REQUEST_MAILTO = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
  "Billionaires Row NYC — Request Access",
)}`;

export default function Home() {
  // TODO(GHL): set NEXT_PUBLIC_GHL_FORM_URL (GHL hosted-form share URL) to swap
  // the mailto CTA for the embedded form. The marketing-consent checkbox must be
  // configured IN GHL: separate, optional, UNCHECKED — inquiry must be possible
  // without consenting to marketing (Charles, 24 Aug 2026). See README.
  const ghlFormUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL;

  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-6 py-[12vh]">
      {/* 57th Street skyline behind the teaser — same asset the platform hero uses. */}
      <picture className="home-hero__bg" aria-hidden="true">
        <source media="(max-width: 720px)" srcSet="/images/hero-mobile.svg" />
        <img src="/images/hero-desktop.svg" alt="" />
      </picture>
      <div className="home-hero__wash" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-xl text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-copper">
          By Invitation · Manhattan
        </p>

        <div className="mx-auto my-6 h-px w-14 bg-copper/70" aria-hidden="true" />

        <h1 className="font-serif text-[clamp(2.5rem,6.5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ivory-bright">
          The Row, behind closed doors.
        </h1>

        <p className="mx-auto mt-6 max-w-[34em] text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed text-muted">
          A private intelligence platform for Manhattan&rsquo;s most coveted addresses
          &mdash; access by invitation. Request yours.
        </p>

        {/* ── Lead capture ─────────────────────────────────────────────────
            GHL hosted form when NEXT_PUBLIC_GHL_FORM_URL is set; otherwise a
            mailto fallback so the page is never dead. */}
        <div className="mt-9">
          {ghlFormUrl ? (
            <iframe
              src={ghlFormUrl}
              title="Request Access — Billionaires Row NYC"
              className="mx-auto block h-[520px] w-full max-w-md border-0"
              loading="lazy"
            />
          ) : (
            <a
              href={REQUEST_MAILTO}
              className="inline-block rounded-md bg-copper px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-graphite transition-colors hover:bg-ivory-bright"
            >
              Request Access
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
