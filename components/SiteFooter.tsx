const INQUIRY_EMAIL = "inquiries@billionairesrownyc.com";

// Legal pages served locally on this placeholder (copy from the billionairesrownyc
// platform content/). Fair Housing links the State's own prescribed notice.
const LEGAL_LINKS = [
  { label: "NYS Fair Housing Notice", href: "/fair-housing" },
  { label: "NY Standard Operating Procedures", href: "/standard-operating-procedures" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

/**
 * The compliance footer. Rendered from the root layout so every page carries it
 * — the copy is Charles's approved footer (24 Aug 2026).
 */
export default function SiteFooter() {
  return (
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

      {/* Inline so links wrap between items on narrow screens; each label stays
          whole (nowrap on the anchor). */}
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
  );
}
