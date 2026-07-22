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
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
