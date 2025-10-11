import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ConditionalAnalytics } from "@/components/conditional-analytics"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Verticalia",
  description: "Track your plant's growth over time.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>
          {children}
          <ConditionalAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
