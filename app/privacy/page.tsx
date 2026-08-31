import type { Metadata } from "next";
import blocks from "@/content/privacy-policy.json";
import DisclosureDocument, { type DisclosureBlock } from "@/components/DisclosureDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Billionaires Row NYC",
  description: "How Billionaires Row NYC collects, uses, discloses, and protects personal information.",
};

export default function PrivacyPage() {
  return <DisclosureDocument title="Privacy Policy" blocks={blocks as DisclosureBlock[]} />;
}
