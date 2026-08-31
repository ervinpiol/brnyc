"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * What a visitor sees when a route throws. Next's default is an unstyled
 * "Application error" page; this keeps the failure on-brand. The error itself
 * is never shown — only its digest, the key that ties it to the server log.
 */
export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error", error.digest ?? error.message);
  }, [error]);

  return (
    <main className="failure" aria-labelledby="failure-title">
      <p className="failure__eyebrow">Something went wrong</p>
      <h1 id="failure-title">
        This page did not <em>load.</em>
      </h1>
      <p className="failure__copy">
        The fault is ours, not yours. Try again, or return home.
      </p>

      <div className="failure__actions">
        <button type="button" onClick={reset}>
          Try again
        </button>
        <Link href="/">
          Return home <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {error.digest ? (
        <p className="failure__digest">
          Reference <strong>{error.digest}</strong>
        </p>
      ) : null}
    </main>
  );
}
