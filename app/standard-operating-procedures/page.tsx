import type { Metadata } from "next";
import blocks from "@/content/standard-operating-procedures.json";
import DisclosureDocument, { type DisclosureBlock } from "@/components/DisclosureDocument";

export const metadata: Metadata = {
  title: "Standard Operating Procedures — Billionaires Row NYC",
  description: "Standard operating procedures for prospective homebuyers (NY DOS).",
};

export default function StandardOperatingProceduresPage() {
  return <DisclosureDocument title="Standard Operating Procedures" blocks={blocks as DisclosureBlock[]} />;
}
