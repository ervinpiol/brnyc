import type { Metadata } from "next";
import blocks from "@/content/terms-and-conditions.json";
import DisclosureDocument, { type DisclosureBlock } from "@/components/DisclosureDocument";

export const metadata: Metadata = {
  title: "Terms & Conditions — Billionaires Row NYC",
  description: "The terms and conditions governing use of Billionaires Row NYC.",
};

export default function TermsPage() {
  return <DisclosureDocument title="Terms & Conditions" blocks={blocks as DisclosureBlock[]} />;
}
