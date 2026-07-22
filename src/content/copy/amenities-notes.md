# Amenities Page — Notes

The structured draft list itself lives in `src/content/amenities.ts`
(grouped Security & Building Systems / Convenience / Outdoor & Wellness /
Sustainability, per the two-tier building-level vs. shared/exterior pattern
from Phase 0 research), deliberately scaled to a 14-unit, 0.12-acre
building rather than assuming township-scale facilities.

This entire list is a draft starting point — send it to the developer for
confirmation against the actual sanctioned plan before it goes live. Cut
anything that doesn't actually exist; don't let a plausible-sounding
placeholder list become the published amenity claims.

## Notes for whoever runs Phase 4

- Every `needsConfirmation` / `needsScaleCheck` flag in
  `src/content/amenities.ts` needs a real answer before this ships — the
  goal of this draft is to get real prose into the layout early, not to
  lock in unverified claims.
- Keep the RERA disclaimer language (`legalBoilerplate` in
  `src/content/site-config.ts`) on every page that mentions price, per
  standard MahaRERA convention noted in Phase 0.
- If the developer's actual amenity list is longer or shorter than 16
  items, don't pad or trim to hit "15++" — match the real plan.
