/**
 * DRAFT amenity list — not developer-confirmed. Every item needs sign-off
 * against the actual sanctioned plan before publishing. Do not add, pad, or
 * round the count to hit a marketing number; match the real plan once
 * supplied. See src/content/copy/amenities-notes.md for full context.
 *
 * `status: "unconfirmed"` (items 15-16, Sustainability) means something
 * stronger than the general "pending confirmation" banner that applies to
 * this whole page: it's not just unconfirmed in scope/quantity, it's not
 * confirmed to exist at all. Render those with a distinct badge, not just
 * folded into the same list styling as everything else.
 */

export type Amenity = {
  name: string;
  description: string;
  /** Lucide icon name, looked up in the amenities page component. */
  icon: string;
  status: "pending" | "unconfirmed";
  /** True if this needs a scale-check against the real 0.12-acre footprint. */
  needsScaleCheck?: boolean;
};

export type AmenityCategory = {
  category: string;
  items: Amenity[];
};

export const amenityCategories: AmenityCategory[] = [
  {
    category: "Security & Building Systems",
    items: [
      {
        name: "CCTV surveillance at entry and common areas",
        description: "Cameras covering the main entrance and shared spaces.",
        icon: "Camera",
        status: "pending",
      },
      {
        name: "Video door phone per unit",
        description: "See who's at the door before you open it.",
        icon: "Video",
        status: "pending",
      },
      {
        name: "24-hour security personnel",
        description: "On-site security around the clock.",
        icon: "ShieldCheck",
        status: "pending",
      },
      {
        name: "Fire detection & firefighting system",
        description: "Detection and firefighting equipment across common areas.",
        icon: "Flame",
        status: "pending",
      },
      {
        name: "Power backup for common areas & lifts",
        description: "Common areas and the lift stay powered through an outage.",
        icon: "Zap",
        status: "pending",
      },
      {
        name: "High-speed passenger elevator",
        description: "A passenger lift serving all floors.",
        icon: "ArrowUpDown",
        status: "pending",
      },
    ],
  },
  {
    category: "Convenience",
    items: [
      {
        name: "Covered/reserved parking",
        description: "Reserved parking; exact ratio per unit still to be confirmed.",
        icon: "Car",
        status: "pending",
      },
      {
        name: "Visitor parking",
        description: "A separate allocation for guests.",
        icon: "UserCheck",
        status: "pending",
      },
      {
        name: "Rainwater harvesting",
        description: "Captures and reuses rainwater on-site.",
        icon: "Droplets",
        status: "pending",
      },
      {
        name: "Structured waste segregation & disposal",
        description: "Organized collection and segregation for waste.",
        icon: "Recycle",
        status: "pending",
      },
      {
        name: "Intercom facility",
        description: "In-unit intercom connected to the building line.",
        icon: "Phone",
        status: "pending",
      },
    ],
  },
  {
    category: "Outdoor & Wellness",
    items: [
      {
        name: "Landscaped entrance / podium greenery",
        description: "Planted greenery at the entrance and podium level.",
        icon: "Trees",
        status: "pending",
        needsScaleCheck: true,
      },
      {
        name: "Small terrace/deck seating area",
        description: "A shared outdoor seating spot.",
        icon: "Armchair",
        status: "pending",
        needsScaleCheck: true,
      },
      {
        name: "Individual balconies on every unit",
        description: "Every residence includes its own balcony.",
        icon: "DoorOpen",
        status: "pending",
        needsScaleCheck: true,
      },
    ],
  },
  {
    category: "Sustainability",
    items: [
      {
        name: "Solar-assisted common-area lighting",
        description: "Not yet confirmed whether common-area lighting will be solar-assisted.",
        icon: "Sun",
        status: "unconfirmed",
      },
      {
        name: "EV charging provision",
        description: "Not yet confirmed whether EV charging points will be provided.",
        icon: "PlugZap",
        status: "unconfirmed",
      },
    ],
  },
];
