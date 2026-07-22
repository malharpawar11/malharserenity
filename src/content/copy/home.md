# Home Page — Draft Copy

Working draft, meant to replace placeholder text in Phase 2. Flagged items
still need developer sign-off before publishing.

## Hero

- Eyebrow: Samarth Colony, Baner, Pune
- Headline (H1): **Fourteen homes. One hillside.**
- Subhead: Malhar Serenity is a boutique address of 3 BHK residences on
  Baner's high ground — built small on purpose, so every home keeps its
  view, its quiet, and its distance from the next door.

Stat badges (IBM Plex Mono treatment, per design plan):

- 14 — Residences
- 0.12 ac — Boutique plot
- 1088–1215 sq.ft — 3 BHK carpet area
- Dec 2026 — Possession
- ₹1.40 Cr* — Starting price

Asterisk footnote on every price mention (standard site-wide): "Indicative
price, subject to change. Not an offer or contract. Please verify all
details independently before making a decision." (see
`priceDisclaimer` in `src/content/site-config.ts`)

- Primary CTA: Enquire Now → opens form / opens WhatsApp
- Secondary CTA: Download Brochure — TODO: swap in real PDF once developer
  supplies one, don't fabricate a brochure. Gate on
  `contactPlaceholders.brochurePdfPlaceholder`.

## Section: "Built small, on purpose"

> Most new addresses in Baner are measured in towers. Malhar Serenity is
> measured in doors — fourteen of them. That's the whole idea: a plot small
> enough that nothing about it needed to be loud. Fewer neighbours. Less
> shared everything. A building that sits into the hillside instead of
> announcing itself from it.

This section is the honest reframe of the small plot size (0.12 acres) as
the actual pitch rather than something to minimize. Keep this section
visually calm — it's a values statement, not a stat block.

## Section: Residences (teaser → links to /residences)

Section title: **Two floor plans. Both built the same way.**

| | 3 BHK · 1088 sq.ft | 3 BHK · 1215 sq.ft |
|---|---|---|
| Bath | 2 | 3 |
| Starting at | ₹1.40 Cr* | ₹1.60 Cr* |

CTA: Compare Floor Plans →

## Section: Amenities (teaser → links to /amenities)

Section title: TBD ("...anything a home this size actually needs" — draft
was garbled here, needs a clean line before build).

Teaser copy should pull from the amenity items marked as most
"confirmed-fit" once the developer signs off the list in
`src/content/amenities.ts` — don't tease amenities that wouldn't plausibly
fit a 0.12-acre footprint (i.e. skip anything flagged `needsScaleCheck`
until confirmed).

CTA: View All Amenities →

## Section: Location (teaser → links to /location)

Section title: **On the high ground in Baner**

> Baner Hill rises just beyond the neighbourhood — Pune's third-highest
> point, and one of the few stretches of open green left this close to the
> IT corridor. Malhar Serenity sits at the edge of that quiet, with
> Hinjewadi roughly twenty minutes away and the rest of Pune West reachable
> along Baner Road and the Aundh-Baner link.

Deliberately no invented exact distance to the biodiversity park — Phase 0
research couldn't verify one, so this stays at "just beyond," not a number.

CTA: Explore the Neighbourhood →

## Section: Enquiry CTA (closing section, before footer)

Section title: **Ask us anything before you decide**

> No pressure, no scripted follow-up calls. Tell us what you want to know —
> floor plans, payment schedule, site visit timing — and we'll answer
> directly.

Trust bullets (reassurance-bullet pattern, adapted from
beaverdevelopment.org's contact section):

- MahaRERA registration: [PENDING — insert number]
- Site visits by appointment
- Direct answers, no call-centre routing — **confirm this is actually true
  operationally before publishing; don't promise a service model the
  developer doesn't run.**
