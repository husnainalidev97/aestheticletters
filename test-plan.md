# Test Plan — PR #14 Explore More Aesthetic Styles section

## What changed
Added a new "Explore More Aesthetic Styles" section on `/instagram-fonts` between the "IG Bio & Username Examples" grid section and the FAQ section, containing two pill-style links to `/cursive-fonts` and `/fancy-fonts`. Second commit restyled the chips from a dark grey headline-font button to a near-white surface chip with soft `editorial-shadow`, `rounded-xl`, body font (Manrope), and dark `text-on-surface` — per user feedback.

Relevant source: `src/app/instagram-fonts/page.tsx:608-628`

## Primary test flow (desktop)
1. Open `http://localhost:3000/instagram-fonts` and scroll to the bottom of the main content.
2. Locate the "Explore More Aesthetic Styles" heading between the IG Bio & Username Examples section and the "Frequently Asked Questions" heading.

### Assertions
- **A1 — Section placement**: Heading "Explore More Aesthetic Styles" is visible directly above the "Frequently Asked Questions" heading, with clear vertical gap between them (not cramped). Pass = visible heading, gap ≥ ~40 px. Fail = missing heading or heading appears inside/after FAQ.
- **A2 — Chip surface color**: Both chip backgrounds are a near-white / very light grey (matches the `bg-surface-container-lowest` token used by result font boxes). Fail = chips render as dark grey with white text like the previous commit.
- **A3 — Chip text**: Chip labels read "Cursive Font Generator" and "Fancy Text Generator" in dark (near-black / deep navy) text in the body font (Manrope). Fail = text is white, or visibly in Space Grotesk (headline font) — headline weights would look tighter/geometric vs Manrope body.
- **A4 — Corners and shadow**: Chips have soft rounded corners (`rounded-xl` ≈ 12px radius, not fully pill-shaped, not sharp rectangles) and a subtle ambient drop shadow below each chip. Fail = no shadow or hard geometric edges.
- **A5 — Centered, horizontal**: The two chips sit on a single horizontal row, centered beneath the heading. Fail = chips left-aligned, stacked vertically on desktop, or off-center.
- **A6 — Navigation**: Clicking "Cursive Font Generator" navigates to `/cursive-fonts`. Clicking browser back and then "Fancy Text Generator" navigates to `/fancy-fonts`.
- **A7 — Hover state**: Hovering a chip changes its visual state subtly (background tint or text color shift) without jumpy layout changes. Pass = color change observed. Fail = no change, or chip grows/jumps.

## Mobile responsive check
Resize browser to ~400px width. Chips must wrap onto separate lines (stacked) and remain centered. Fail = horizontal scrollbar appears, or chips overflow the viewport.

## Out of scope
- FAQ accordion behavior (unchanged)
- Other unaffected pages
- SEO / metadata (unchanged)
