# Ballots & Booze — prototype blueprint

## Intent
Help first-time and overwhelmed Hawaii voters understand the structure of a ballot, without recommending candidates or positions. Used at an in-person civic education event.

## Journey
Welcome → Who (people and offices) → What (questions and amendments) → How (four voting steps) → Address and illustrative Oahu map → Demo district results → Who/What coming-next screens.

Tutorial cards support horizontal touch swipes and explicit back/next controls. No bottom navigation. Official voter registration and ballot lookup open separately.

## Implemented scope
React, TypeScript, Tailwind; mobile-first vintage horror title cards; keyboard focus management; reduced-motion support; four independent district layers; registration link. Map coastline derived from Honolulu County geometry in https://github.com/plotly/datasets/blob/master/geojson-counties-fips.json. Colored overlays and district labels are invented and expressly marked as demo data.

## Privacy
No analytics, accounts, address geocoding, or browser persistence added. Address is held in React memory, cleared on submission, and not included in URLs or requests. All inputs yield the same demo. Official government services have their own privacy policies.

## Next release
Choose and verify an address-to-district data source; replace illustrative overlays with current official boundaries; model election-specific contests independently from legislative bills; add neutral explanations and per-record source/freshness metadata. Avoid showing candidates or measures as a matched ballot until district and election matching are verified.

## Components
app/page.tsx: onboarding and screen orchestration.
components/ballot/DistrictMap.tsx: map visualization.
lib/civic.ts: district metadata and official links.
lib/oahu.ts: simplified coastline.
app/globals.css: visual system and responsive styles.

## Validation
TypeScript and production build; manual clickable flow review. Live ballot lookup and candidate information intentionally not implemented.

## Phase 2 extension
The district reveal now leads into a four-door civic tour with office explainers, fictional candidates and mock questions. See [PHASE2.md](PHASE2.md) for the current implementation, model, and validation. The original Phase 1 scope above is retained as the baseline record.
