/**
 * No real photography or renders exist for this project yet. `slots` is
 * just how many "coming soon" placeholder tiles to render per category —
 * not a commitment to a final photo count. Swap in real images/renders
 * here once the developer supplies them; the grid and lightbox are wired
 * to accept that without a rebuild.
 */

export type GalleryCategory = {
  name: string;
  slots: number;
};

export const galleryCategories: GalleryCategory[] = [
  { name: "Exterior", slots: 4 },
  { name: "Interior", slots: 4 },
  { name: "Amenities", slots: 3 },
  { name: "Site & Views", slots: 3 },
];
