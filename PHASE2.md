# Phase 2 — Haunted civic tour

Built on Phase 1 commit `8d9f6d2`. Welcome and all three onboarding tutorials are preserved, as are the address form, Oʻahu map, four district results, and official registration links. The original WHO/WHAT placeholder branches remain in `app/page.tsx` for later reuse; the immediate two-button branch has been replaced by the tour entrance.

## Flow
Demo address submission → selected map and district results → 1.2-second reveal → 1-second map zoom/vignette → civic hallway. Users can pause to review districts, or return to the map from the hallway. Reduced motion bypasses zoom/mist and door animation. Each door uses a 650ms opening/mist transition; no dragging is required.

Hallway → Washington / Hawaiʻi / Your Community / The Questions → Back to the Hallway. Visited markers survive room changes and return-to-map within the current app session, but are not persisted across reloads.

## Architecture
- `lib/ballot-tour.ts`: BallotDoor, DistrictContext, Office, Candidate, BallotQuestion and typed local data.
- `components/tour/CivicTour.tsx`: room navigation, visited callback, transition cleanup, focus handling.
- `components/tour/CapitolHallway.tsx`: civic-building illustration and four-door layout.
- `components/tour/CivicDoor.tsx`: full-door/handle click target, hover opening and visited state.
- `components/tour/OfficeCard.tsx`: office explainer, district context, fictional candidate cards, expandable profile notice.
- `components/tour/QuestionCard.tsx`: neutral mock question and noninteractive YES/NO explanations.
- `components/tour/useReducedMotion.ts`: system motion preference with change listener.
- `app/page.tsx`: preserves Phase 1 and owns the entrance transition and session visit history.
- `app/globals.css`: Phase 2 styles are appended and scoped to tour classes.

## Demo limits
No geocoding, real election API, database, political preferences, or saved votes. The district context contains only Demo A–D, never a raw address. Candidate A/B names and all three ballot questions are fictional. Office eligibility is illustrative, not a complete matched ballot. Address input is still cleared on submission.

Washington's U.S. House term and absence of a regularly scheduled Hawaiʻi U.S. Senate contest in 2026 were checked against https://elections.hawaii.gov/voting/contest-schedule/. OHA role context was checked against https://www.oha.org/about/. Links are included in the relevant rooms.

## Validation
TypeScript and production build passed. Browser checks covered onboarding-to-address navigation, demo submission and automatic entrance, all four rooms, candidate expansion, every visited marker, district labels A–D, map return/re-entry preserving visits, official registration link, and narrow/mobile plus desktop overflow. Reduced-motion code paths and CSS overrides were inspected; browser testing used the normal-motion system preference.
