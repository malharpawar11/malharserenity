/**
 * Single source of truth for project facts.
 *
 * Two kinds of values live here:
 *  1. VERIFIED facts from the ground-truth brief — safe to render as-is.
 *  2. PLACEHOLDER values — structurally wired in but must not be treated as
 *     real. Each is typed `| null` and named `...Placeholder` or carries a
 *     TODO comment. Do not invent a value to fill these; swap them for real
 *     developer-supplied data before launch.
 */

export const project = {
  name: "Malhar Serenity",
  developer: "Malhar Developers (AOP)",
  location: {
    line1: "Samarth Colony, Baner",
    // TODO (dev-facing, unresolved): the ground-truth ground brief states
    // 411045, but Google's geocoding of "Samarth Colony, Baner, Pune"
    // (used by the /location map embed, checked during Phase 4 QA)
    // resolves to 411069. Do not silently pick one — confirm the correct
    // pincode against the actual sanctioned plot address before launch.
    line2: "Pune – 411045",
    microMarket: "Baner / Balewadi, Pune West",
  },
  status: "Under construction",
  possession: "December 2026",
  plotSizeAcres: 0.12,
  totalUnits: 14,
} as const;

export type UnitConfig = {
  id: string;
  type: string;
  carpetAreaSqFt: number;
  bathrooms: number;
  priceINR: string;
  /** Numeric rupee value of priceINR, for EMI-calculator arithmetic only —
   * still the same indicative figure, still carries the same disclaimer. */
  priceValueINR: number;
  /** Path is a placeholder slot — no real floor plan file exists yet. */
  floorPlanImagePlaceholder: string | null;
  floorPlanPdfPlaceholder: string | null;
};

export const unitConfigs: UnitConfig[] = [
  {
    id: "3bhk-1088",
    type: "3 BHK",
    carpetAreaSqFt: 1088,
    bathrooms: 2,
    priceINR: "₹1.40 Cr*",
    priceValueINR: 14_000_000,
    floorPlanImagePlaceholder: null, // TODO: swap in sanctioned floor plan image
    floorPlanPdfPlaceholder: null, // TODO: swap in sanctioned floor plan PDF
  },
  {
    id: "3bhk-1215",
    type: "3 BHK",
    carpetAreaSqFt: 1215,
    bathrooms: 3,
    priceINR: "₹1.60 Cr*",
    priceValueINR: 16_000_000,
    floorPlanImagePlaceholder: null,
    floorPlanPdfPlaceholder: null,
  },
];

/**
 * TODO (developer confirmation needed): both configs are described as the
 * same build/finish spec, differing only in size/bathroom count — not a
 * different quality tier. Sourced from the Overview draft copy
 * (src/content/copy/overview.md), which itself flags this as unconfirmed.
 * Don't drop this disclaimer from the Residences page until it's verified
 * against the real spec sheet.
 */
export const sameSpecClaim =
  "Both layouts are finished to the same specification — the larger plan adds a third bathroom and floor area, not a different tier of build quality.";
export const sameSpecClaimNeedsConfirmation = true;

export const priceDisclaimer =
  "Indicative price, subject to change. Not an offer or contract. Please verify all details independently before making a decision.";

/**
 * Contact & legal placeholders. None of these are real — every value here
 * is either null (nothing to invent) or a structurally-valid but obviously
 * fake placeholder so components can render without conditional-guarding
 * every field. Replace all of these before launch.
 */
export const contactPlaceholders = {
  // TODO: insert real MahaRERA registration number once available.
  reraNumber: null as string | null,
  reraDisclaimerLabel: "RERA No: [PENDING — insert MahaRERA registration number]",
  // TODO: insert real enquiry phone number.
  phoneDisplay: "[PENDING — phone number]",
  phoneHref: null as string | null, // e.g. "tel:+91XXXXXXXXXX"
  // TODO: insert real WhatsApp business number (with country code, no symbols).
  whatsappNumber: null as string | null, // e.g. "91XXXXXXXXXX"
  // TODO: insert real enquiry email.
  email: "[PENDING — email address]",
  // TODO: insert real brochure PDF and remove the placeholder gate in the UI.
  brochurePdfPlaceholder: null as string | null,
} as const;

export function buildWhatsAppLink(message: string): string | null {
  if (!contactPlaceholders.whatsappNumber) return null;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contactPlaceholders.whatsappNumber}?text=${encoded}`;
}

export const legalBoilerplate = {
  notAnOffer:
    "This website does not constitute an offer, acceptance, contract, or agreement of any kind. All prices, specifications, amenities, layouts, and other project details shown here are indicative and subject to change without notice.",
  verifyIndependently:
    "Please verify all project details, including RERA registration, sanctioned plans, and pricing, independently or through your legal/financial advisor, and on the official MahaRERA portal (maharera.maharashtra.gov.in) before making any decision.",
  artisticImpression:
    "Images and renders on this site are artistic impressions and may not reflect the actual product, specifications, or finishes.",
} as const;

/**
 * Geo facts verified during Phase 0 research. Anything not listed here
 * (e.g. an exact distance to the Baner-Pashan Biodiversity Park) could not
 * be independently verified and must stay unquantified in copy.
 */
export const verifiedGeoFacts = {
  banerHillElevationFt: 2224,
  banerHillRank: "3rd-highest point within Pune city limits",
  baneHinjewadiDistanceKm: "~8 km",
  baneHinjewadiDriveTime: "15–20 min normal traffic, 30–40 min peak",
  baneShivajinagarDistanceKm: "8–15 km (sources vary)",
  connectivityRoads: [
    "Baner Road",
    "Baner-Pashan Link Road",
    "Aundh-Baner Link Road",
  ],
} as const;

/**
 * Aggregator-sourced, not independently verified by us — label explicitly
 * as "commonly cited" wherever these render, never as confirmed fact.
 */
export const commonlyCitedLandmarks = {
  schools: [
    "DAV Public School",
    "Orchid School",
    "CM International School",
    "Bharati Vidyapeeth School",
  ],
  hospitals: ["Jupiter Hospital", "Manipal Hospital"],
} as const;
