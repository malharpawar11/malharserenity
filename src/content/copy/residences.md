# Residences / Floor Plans Page — Notes

Built in Phase 3. Both 3 BHK configs are shown side by side (not tabs) —
buyers comparing 1088 vs. 1215 sq.ft. want both visible at once. The
config toggle inside the EMI calculator is a separate, narrower control:
it only picks which config's price seeds the calculator's default loan
amount, it does not hide either config from the comparison above it.

## "Same spec, different size" claim

Structured data + claim text live in `src/content/site-config.ts`
(`sameSpecClaim`, `sameSpecClaimNeedsConfirmation`). Sourced from the
Overview draft (`src/content/copy/overview.md`), which already flagged
this as unconfirmed: **"Confirm this is actually true of the real spec
sheet before publishing."** That flag hasn't been resolved — carrying the
claim forward onto this page doesn't resolve it. Needs developer sign-off
before launch.

## Floor plan placeholder

`src/components/ui/floor-plan-placeholder.tsx` — deliberately not a
generic blueprint graphic. A plausible-looking fake floor plan could be
mistaken for the real sanctioned layout, which doesn't exist in this
project yet. Uses an "image unavailable" icon + explicit "Floor plan
coming soon" copy + a disabled download button. Swap in the real
image/PDF via `unitConfigs[].floorPlanImagePlaceholder` /
`floorPlanPdfPlaceholder` in site-config.ts once the developer supplies
sanctioned layouts.

## EMI calculator

Client-side only, standard reducing-balance amortization formula. Inputs:
loan amount (slider, defaults to 85% of the selected config's price —
midpoint of the requested 80–90% range), interest rate (slider, 6–14%,
defaults to 8.75% — midpoint of the requested 8.5–9% range), tenure
(slider, 5–30 years, defaults to 20). Recalculates live, no submit
button.

**Not a loan offer.** The disclaimer sits directly under the calculator
output (not a footnote) per the brief: "Estimated EMI for illustration
only... This is not a loan offer." This is the one part of the site that
could otherwise read as a financial commitment, so it stays visible, not
buried.

## Enquiry CTA

Reuses the same `EnquiryCTA` component as Home (now parameterized —
`heading`, `subhead`, `whatsappMessage`, `showTrustBullets`). The
WhatsApp message is built from the calculator's currently-selected
config, so "pre-filled with the selected config" is satisfied via client
state rather than a query param, consistent with how Home's enquiry flow
works (WhatsApp/email only — the real form arrives in Phase 5).
