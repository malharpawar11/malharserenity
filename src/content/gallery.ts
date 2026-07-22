/**
 * One real architectural render exists (Exterior). Everything else is
 * still a "coming soon" placeholder — `slots` is how many placeholder
 * tiles to render for categories (or the remainder of a category) with
 * no real image yet, not a commitment to a final photo count.
 */

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryCategory = {
  name: string;
  /** Real images for this category, filled first. */
  images?: GalleryImage[];
  /** How many additional "coming soon" placeholder tiles to render. */
  placeholderSlots: number;
};

export const galleryCategories: GalleryCategory[] = [
  {
    name: "Exterior",
    images: [
      {
        src: "/images/serenity-exterior-dusk.jpg",
        alt: "Malhar Serenity, architectural render of the brick-and-glass facade at dusk",
      },
    ],
    placeholderSlots: 3,
  },
  { name: "Interior", placeholderSlots: 4 },
  { name: "Amenities", placeholderSlots: 3 },
  { name: "Site & Views", placeholderSlots: 3 },
];
