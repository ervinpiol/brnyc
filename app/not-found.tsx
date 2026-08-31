import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found — Billionaires Row NYC",
  robots: { index: false, follow: false },
};

const REQUEST_MAILTO = `mailto:inquiries@billionairesrownyc.com?subject=${encodeURIComponent(
  "Billionaires Row NYC — Request Access",
)}`;

export default function NotFound() {
  return (
    <main className="failure" aria-labelledby="not-found-title">
      <p className="failure__eyebrow">404 — Not found</p>
      <h1 id="not-found-title">
        This page is not <em>here.</em>
      </h1>
      <p className="failure__copy">
        The link may have aged, or the page has not been published yet.
        Billionaires Row NYC is a private platform, by invitation.
      </p>

      <div className="failure__actions">
        <Link className="failure__primary" href="/">
          Return home
        </Link>
        <a href={REQUEST_MAILTO}>
          Request access <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}
