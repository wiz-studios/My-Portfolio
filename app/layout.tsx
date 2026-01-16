import type { Metadata } from "next"
import { Fraunces, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import Head from "next/head"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Emmanuel Ronoh",
      url: "https://ronoh-portfolio-14.vercel.app/",
      jobTitle: "Web Developer and UI/UX Designer",
      sameAs: [
        "https://github.com/wiz-studios",
        "https://www.linkedin.com/in/manuh10801",
      ],
    },
    {
      "@type": "ItemList",
      name: "Selected Projects",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "Japhes Cakes",
            url: "https://japhes-cakes.vercel.app",
            description: "A boutique bakery website highlighting products and custom orders.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "Osumo POS",
            url: "https://osumo-pos.vercel.app",
            description: "A point-of-sale interface with a streamlined sales and inventory flow.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "Chebigen HMS",
            url: "https://chebigen-hms.vercel.app",
            description: "A school management system interface focused on structured data views.",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "Kenya Accountability Tracker",
            url: "https://kenya-accountability-tracker.vercel.app",
            description: "A public-interest dashboard tracking stalled and abandoned projects.",
          },
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ronoh-portfolio-14.vercel.app"),
  title: {
    default: "Emmanuel Ronoh | Portfolio",
    template: "%s | Emmanuel Ronoh",
  },
  description: "Web developer and UI/UX designer portfolio of Emmanuel Ronoh",
  keywords: ["Web Development", "UI/UX", "Frontend", "Next.js", "React", "Design Systems"],
  authors: [{ name: "Emmanuel Ronoh" }],
  creator: "Emmanuel Ronoh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Emmanuel Ronoh | Portfolio",
    description: "Web developer and UI/UX designer portfolio of Emmanuel Ronoh",
    siteName: "Emmanuel Ronoh Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Ronoh portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ronoh - Portfolio",
    description: "Web developer and UI/UX designer portfolio of Emmanuel Ronoh",
    creator: "@_wiz001",
    images: ["/og-image.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <Head>
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      </Head>
      <body className={`font-sans antialiased gradient-bg min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main id="page-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
