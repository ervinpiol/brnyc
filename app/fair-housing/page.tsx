import type { Metadata } from "next";
import blocks from "@/content/fair-housing-notice.json";
import DisclosureDocument, { type DisclosureBlock } from "@/components/DisclosureDocument";

export const metadata: Metadata = {
  title: "Fair Housing Notice — Billionaires Row NYC",
  description:
    "New York State Housing and Anti-Discrimination Notice — the protected characteristics, examples of violations, and how to file a complaint.",
};

export default function FairHousingPage() {
  return (
    <DisclosureDocument
      title="NYS Housing and Anti-Discrimination Notice"
      blocks={blocks as DisclosureBlock[]}
    />
  );
}
