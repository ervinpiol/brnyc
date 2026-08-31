"use client";

/**
 * Last resort: an error thrown by the root layout itself. This replaces the
 * whole document, so it renders its own html/body and cannot rely on globals.css
 * or the fonts (which may be what failed). Palette is inline; type falls back to
 * system fonts. Plain and legible is the whole requirement.
 */
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#0e172a",
          color: "#f8fafc",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "32rem" }}>
          <p
            style={{
              margin: "0 0 1rem",
              color: "#c5a059",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Billionaires Row NYC
          </p>
          <h1 style={{ margin: "0 0 1rem", fontSize: "1.6rem", fontWeight: 400 }}>
            The site is temporarily unavailable.
          </h1>
          <p style={{ margin: "0 0 1.6rem", color: "rgba(248, 250, 252, 0.7)", lineHeight: 1.6 }}>
            Please try again shortly.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.4rem",
              border: "1px solid rgba(197, 160, 89, 0.62)",
              borderRadius: "0.375rem",
              color: "#c5a059",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Reload
          </a>
          {error.digest ? (
            <p style={{ marginTop: "1.6rem", color: "rgba(248, 250, 252, 0.45)", fontSize: "0.7rem" }}>
              Reference {error.digest}
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
