import type React from "react";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "RealSync - Real-time Collaboration",
  description:
    "Edit documents together, see everyone's cursor, and manage permissions seamlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          colorBackground: "#000000",
        },
      }}
    >
      <html
        lang="en"
        suppressHydrationWarning
        className="bg-gradient-to-br from-blue-950 to-slate-900"
      >
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Provider>
              {children}
            </Provider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}