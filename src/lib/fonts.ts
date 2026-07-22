import localFont from "next/font/local";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";

/**
 * Body / UI text. General Sans, self-hosted from Fontshare (Indian Type
 * Foundry, free commercial license — see src/fonts/GeneralSans-License).
 */
export const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Variable.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Display / headline face. Low-contrast soft serif — deliberately not the
 * high-contrast serif+cream combination we're avoiding as an AI-site cliché.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

/**
 * Data accent face for specs, prices, dates, stat badges only — not for
 * running text.
 */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
