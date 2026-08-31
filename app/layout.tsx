import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

// Billionaires Row NYC platform fonts: Playfair Display (serif headline),
// Inter (body), JetBrains Mono (labels).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billionaires Row NYC",
  description: "A private intelligence platform for Manhattan's most coveted addresses — access by invitation.",
  // brnyc.com = THE VAULT: no-index by design (also enforced via X-Robots-Tag
  // header in next.config.ts and public/robots.txt).
  robots: { index: false, follow: false },
  // Favicon = the platform monogram, matching billionairesrownyc.com.
  icons: { icon: "/images/monogram.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0e172a", // Deep Slate
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {/* Flex column so the footer sits at the bottom on short pages. */}
        <div className="site-shell">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
