const INQUIRY_EMAIL = "inquiries@billionairesrownyc.com";
const REQUEST_MAILTO = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
  "Billionaires Row NYC — Request Access",
)}`;

// Legal pages served locally on this placeholder (copy from the billionairesrownyc
// platform content/). Fair Housing links the State's own prescribed notice.
const LEGAL_LINKS = [
  { label: "NYS Fair Housing Notice", href: "/fair-housing" },
  { label: "NY Standard Operating Procedures", href: "/standard-operating-procedures" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Home() {
  // TODO(GHL): set NEXT_PUBLIC_GHL_FORM_URL (GHL hosted-form share URL) to swap
  // the mailto CTA for the embedded form. The marketing-consent checkbox must be
  // configured IN GHL: separate, optional, UNCHECKED — inquiry must be possible
  // without consenting to marketing (Charles, 24 Aug 2026). See README.
  const ghlFormUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL;

  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex flex-1 items-center justify-center px-6 py-[12vh]">
        <div className="w-full max-w-xl text-center">
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

      <footer className="border-t border-line px-6 pb-9 pt-7 text-center font-sans text-[0.78rem] leading-[1.7] text-muted">
        <div className="mb-2.5 text-[0.72rem] uppercase tracking-[0.18em] text-ivory">
          Billionaires Row NYC
        </div>
        {/* Licensed entity is FRITSCHLER, CHARLES — not the trade name. */}
        <div className="text-ivory">FRITSCHLER, CHARLES</div>
        <div>Licensed New York Real Estate Broker</div>
        <div>106 Pinehurst Avenue, Suite A66, New York, NY 10033</div>
        <div>
          (833) 749-1480 &nbsp;|&nbsp;{" "}
          <a href={`mailto:${INQUIRY_EMAIL}`} className="text-copper hover:underline underline-offset-4">
            {INQUIRY_EMAIL}
          </a>
        </div>

        {/* Inline so links wrap between items on narrow screens; each label
            stays whole (nowrap on the anchor). */}
        <nav className="my-3" aria-label="Legal">
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <span aria-hidden="true" className="text-line"> | </span>}
              <a href={link.href} className="whitespace-nowrap text-copper hover:underline underline-offset-4">
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="mt-3">Equal Housing Opportunity</div>
        <div>&copy; 2026 Charles Fritschler. All rights reserved.</div>
      </footer>
    </div>
  );
}
