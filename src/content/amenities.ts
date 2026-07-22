/**
 * DRAFT amenity list — not developer-confirmed. Every item needs sign-off
 * against the actual sanctioned plan before publishing. Do not add, pad, or
 * round the count to hit a marketing number; match the real plan once
 * supplied. See src/content/copy/amenities-notes.md for full context.
 */

export type Amenity = {
  name: string;
  /** True if this needs a scale-check against the real 0.12-acre footprint. */
  needsScaleCheck?: boolean;
  /** True if this needs operational/factual confirmation before publishing. */
  needsConfirmation: boolean;
};

export type AmenityCategory = {
  category: string;
  items: Amenity[];
};

export const amenityCategories: AmenityCategory[] = [
  {
    category: "Security & Building Systems",
    items: [
      { name: "CCTV surveillance at entry and common areas", needsConfirmation: true },
      { name: "Video door phone per unit", needsConfirmation: true },
      { name: "24-hour security personnel", needsConfirmation: true },
      { name: "Fire detection & firefighting system", needsConfirmation: true },
      { name: "Power backup for common areas & lifts", needsConfirmation: true },
      { name: "High-speed passenger elevator", needsConfirmation: true },
    ],
  },
  {
    category: "Convenience",
    items: [
      { name: "Covered/reserved parking (confirm ratio per unit)", needsConfirmation: true },
      { name: "Visitor parking", needsConfirmation: true },
      { name: "Rainwater harvesting", needsConfirmation: true },
      { name: "Structured waste segregation & disposal", needsConfirmation: true },
      { name: "Intercom facility", needsConfirmation: true },
    ],
  },
  {
    category: "Outdoor & Wellness",
    items: [
      { name: "Landscaped entrance / podium greenery", needsScaleCheck: true, needsConfirmation: true },
      { name: "Small terrace/deck seating area", needsScaleCheck: true, needsConfirmation: true },
      { name: "Individual balconies on every unit", needsScaleCheck: true, needsConfirmation: true },
    ],
  },
  {
    category: "Sustainability",
    items: [
      { name: "Solar-assisted common-area lighting", needsConfirmation: true },
      { name: "EV charging provision", needsConfirmation: true },
    ],
  },
];
