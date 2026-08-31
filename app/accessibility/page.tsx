import type { Metadata } from "next";
import blocks from "@/content/accessibility.json";
import DisclosureDocument, { type DisclosureBlock } from "@/components/DisclosureDocument";

export const metadata: Metadata = {
  title: "Accessibility — Billionaires Row NYC",
  description: "Billionaires Row NYC's commitment to an accessible website (WCAG 2.1 AA).",
};

export default function AccessibilityPage() {
  return <DisclosureDocument title="Accessibility" blocks={blocks as DisclosureBlock[]} />;
}
