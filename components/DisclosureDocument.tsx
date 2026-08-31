import Link from "next/link";

/**
 * Renders one of the broker's legal disclosures from content/.
 *
 * The text is held as data, not JSX: it is legal copy that must match the
 * broker's document word for word. The JSON files are copied verbatim from the
 * billionairesrownyc platform repo (content/), so updating a policy is a matter
 * of replacing a file rather than editing markup.
 *
 * Simplified for the placeholder: the topline links home only — the platform's
 * full SiteNav points at routes (listings, guide, map) that do not exist here.
 */

export type DisclosureBlock = {
  kind: "heading" | "paragraph" | "bullet";
  text: string;
};

type Node =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] };

export default function DisclosureDocument({
  title,
  blocks,
}: {
  title: string;
  blocks: DisclosureBlock[];
}) {
  return (
    <main className="disclosure" aria-labelledby="disclosure-title">
      <div className="disclosure__topline">
        <Link className="brand-link" href="/" aria-label="Billionaires Row NYC — home">
          <span>BILLIONAIRES ROW NYC</span>
        </Link>
      </div>

      <h1 className="disclosure__title" id="disclosure-title">
        {title}
      </h1>

      {/* Consecutive bullets are grouped into one list so the document reads as
          a list rather than a run of orphaned single-item lists. */}
      {group(blocks).map((node, index) =>
        node.kind === "list" ? (
          <ul className="disclosure__list" key={index}>
            {node.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : node.kind === "heading" ? (
          <h2 className="disclosure__heading" key={index}>
            {node.text}
          </h2>
        ) : (
          <p className="disclosure__paragraph" key={index}>
            {node.text}
          </p>
        ),
      )}
    </main>
  );
}

function group(blocks: DisclosureBlock[]): Node[] {
  const nodes: Node[] = [];

  for (const block of blocks) {
    if (block.kind !== "bullet") {
      nodes.push({ kind: block.kind, text: block.text });
      continue;
    }

    const previous = nodes[nodes.length - 1];
    if (previous?.kind === "list") {
      previous.items.push(block.text);
    } else {
      nodes.push({ kind: "list", items: [block.text] });
    }
  }

  return nodes;
}
