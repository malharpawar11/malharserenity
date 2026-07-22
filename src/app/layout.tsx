import type { Metadata } from "next";
import { generalSans, fraunces, plexMono } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malhar Serenity | Boutique 3 BHK Residences in Baner, Pune",
  description:
    "Fourteen homes on Baner's high ground. A boutique address of 3 BHK residences by Malhar Developers, on a 0.12-acre plot near Baner Hill. Possession December 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${fraunces.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-canopy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-mist"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
