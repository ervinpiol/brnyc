import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fair Housing Notice — Billionaires Row NYC",
  description: "Billionaires Row NYC's fair housing commitment and the New York State Fair Housing Notice.",
};

// NY DOS standardized Fair Housing Notice — the State's prescribed form, served
// from the State's own copy so it cannot go stale against a version held here.
const NYS_FAIR_HOUSING_NOTICE_URL = "https://dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf";

export default function FairHousingPage() {
  return (
    <main className="disclosure" aria-labelledby="disclosure-title">
      <div className="disclosure__topline">
        <Link className="brand-link" href="/" aria-label="Billionaires Row NYC — home">
          <img src="/images/monogram.svg" alt="" aria-hidden="true" />
          <span>BILLIONAIRES ROW NYC</span>
        </Link>
      </div>

      <h1 className="disclosure__title" id="disclosure-title">
        Fair Housing Notice
      </h1>

      {/* Verbatim from the broker's approved Terms and Conditions (platform
          lib/compliance.ts, FAIR_HOUSING_NOTICE). */}
      <p className="disclosure__paragraph">
        Billionaires Row NYC is committed to complying with the federal Fair Housing Act and
        all applicable state and local fair housing and anti-discrimination laws. Nothing on
        this site should be construed as expressing or implying any preference, limitation, or
        discrimination based on race, color, religion, sex, disability, familial status,
        national origin, or any other characteristic protected under applicable law. Listings
        are advertised on an Equal Housing Opportunity basis.
      </p>

      <h2 className="disclosure__heading">New York State Fair Housing Notice</h2>

      <p className="disclosure__paragraph">
        New York State real estate law requires that licensees make the New York State
        Department of State&rsquo;s standardized Fair Housing Notice available to consumers.
        You can read the State&rsquo;s prescribed notice here:{" "}
        <a href={NYS_FAIR_HOUSING_NOTICE_URL} target="_blank" rel="noopener noreferrer">
          NYS Fair Housing Notice (PDF)
        </a>
        .
      </p>

      <p className="disclosure__paragraph">Equal Housing Opportunity.</p>
    </main>
  );
}
