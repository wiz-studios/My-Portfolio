import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import Head from "next/head"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Emmanuel  Ronoh | Portfolio",
    template: "%s | Emmanuel  Ronoh",
  },
  description: "Network and IT professional portfolio of Emmanuel  Ronoh",
  keywords: ["Network", "IT", "Cloud Computing", "Cybersecurity", "AWS", "CCNA"],
  authors: [{ name: "Emmanuel  Ronoh" }],
  creator: "Emmanuel  Ronoh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portolio-livid.vercel.app/",
    title: "Emmanuel  Ronoh | Portfolio",
    description: "Network and IT professional portfolio of Emmanuel  Ronoh",
    siteName: "Emmanuel  Ronoh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel  Ronoh - Portfolio",
    description: "Network and IT professional portfolio of Emmanuel  Ronoh",
    creator: "@_wiz001",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <Head>
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

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
