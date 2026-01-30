import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { Disclaimer } from "@/components/Disclaimer"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Water Meter Calculator UK | Free Water Usage & Savings Calculator 2026",
    template: "%s | Water Meter Calculator UK"
  },
  description: "Free UK water meter calculator to estimate if switching to a water meter will save you money. Calculate your water usage, compare metered vs unmetered bills, and discover potential savings for your household.",
  keywords: [
    "water meter calculator",
    "water meter calculator uk",
    "water meter reading calculator uk",
    "water metre calculator",
    "water usage calculator uk",
    "water bill calculator",
    "water bill calculator uk",
    "should i get a water meter",
    "water meter savings calculator",
    "metered water calculator",
    "unmetered water calculator",
    "water consumption calculator",
    "water meter worth it calculator",
    "uk water meter calculator"
  ],
  authors: [{ name: "Water Meter Calculator UK" }],
  creator: "Water Meter Calculator UK",
  publisher: "Water Meter Calculator UK",
  metadataBase: new URL("https://watermetercalculator.quest"),
  alternates: {
    canonical: "https://watermetercalculator.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://watermetercalculator.quest",
    siteName: "Water Meter Calculator UK",
    title: "Water Meter Calculator UK | Free Water Usage & Savings Calculator",
    description: "Free UK water meter calculator. Calculate if switching to a water meter will save you money. Compare metered vs unmetered bills for your household.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Meter Calculator UK | Free Water Savings Calculator",
    description: "Free UK water meter calculator. Calculate if a water meter will save you money based on your household size and usage.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Water Meter Calculator UK",
    capable: true,
    statusBarStyle: "black-translucent",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://watermetercalculator.quest/#website",
  name: "Water Meter Calculator UK",
  alternateName: ["Water Usage Calculator", "Water Bill Calculator", "Water Savings Calculator"],
  url: "https://watermetercalculator.quest",
  description: "Free UK water meter calculator to help households decide if switching to a water meter will save money. Compare metered vs unmetered water bills.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    "@id": "https://watermetercalculator.quest/#organization",
    name: "Water Meter Calculator UK",
    url: "https://watermetercalculator.quest",
    logo: {
      "@type": "ImageObject",
      "@id": "https://watermetercalculator.quest/#logo",
      url: "https://watermetercalculator.quest/icon.svg",
      contentUrl: "https://watermetercalculator.quest/icon.svg",
      width: 512,
      height: 512,
      caption: "Water Meter Calculator UK"
    }
  }
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://watermetercalculator.quest/#app",
  name: "Water Meter Calculator UK",
  alternateName: ["Water Usage Calculator", "Water Bill Calculator", "Metered Water Calculator"],
  description: "Free online water meter calculator for UK households. Calculate if switching to a water meter will save you money. Compare metered vs unmetered bills based on your household size and water usage.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP"
  },
  featureList: [
    "Water meter savings calculator",
    "Metered vs unmetered comparison",
    "Household water usage estimator",
    "Regional water company rates",
    "Water bill calculator",
    "Usage breakdown by activity",
    "Annual savings projection",
    "Water efficiency tips"
  ]
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Water Meter Calculator",
      item: "https://watermetercalculator.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Water Meter Calculator" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Providers>
          <Disclaimer />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  )
}
