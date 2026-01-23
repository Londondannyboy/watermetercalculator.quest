import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Water Meter Calculator - Calculate Your Water Meter Savings",
  description: "Should you switch to a water meter? Calculate your potential savings with our free water meter calculator for UK households.",
  keywords: ["water meter calculator", "water meter savings", "switch to water meter", "water meter cost", "metered water bills"],
  openGraph: {
    title: "Water Meter Calculator - Calculate Your Water Meter Savings",
    description: "Should you switch to a water meter? Calculate your potential savings with our free water meter calculator for UK households.",
    url: "https://watermetercalculator.quest",
    siteName: "Water Meter Calculator",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Meter Calculator - Calculate Your Water Meter Savings",
    description: "Should you switch to a water meter? Calculate your potential savings with our free water meter calculator for UK households.",
  },
  alternates: { canonical: "https://watermetercalculator.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Water Meter Calculator",
              url: "https://watermetercalculator.quest",
              description: "Should you switch to a water meter? Calculate your potential savings with our free water meter calculator for UK households.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
