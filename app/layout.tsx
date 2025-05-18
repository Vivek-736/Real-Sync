import type React from "react"
import "./globals.css"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "RealSync - Real-time Collaboration",
  description: "Edit documents together, see everyone's cursor, and manage permissions seamlessly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-gradient-to-br from-blue-950 to-slate-900">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
