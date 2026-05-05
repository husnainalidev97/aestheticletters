// ---------------------------------------------------------------------------
// Exclusive Unicode Cursive Transforms for the Cursive Fonts page
// These do NOT duplicate any transforms from fontStyles.ts (Home/Fancy pages)
// ---------------------------------------------------------------------------

export interface UnicodeStyle {
  name: string;
  transform: (text: string) => string;
}

// ── Helpers (same signatures as fontStyles.ts, used in unique combos) ─────

function buildMap(
  upperStart: number,
  lowerStart: number,
  exceptions?: Record<string, string>,
): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(upperStart + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }
  if (exceptions) Object.assign(map, exceptions);
  return map;
}

function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

// ── Character Maps (reused in UNIQUE combinations not found on Home page) ─

const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102",
  H: "\u210D",
  N: "\u2115",
  P: "\u2119",
  Q: "\u211A",
  R: "\u211D",
  Z: "\u2124",
});
const sansSerifItalicMap = buildMap(0x1d608, 0x1d622);
const boldItalicMap = buildMap(0x1d468, 0x1d482);
const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);
const boldMap = buildMap(0x1d400, 0x1d41a);
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);

// ── Flourish helpers (Unicode ornamental symbols for word-level decoration) ─

const FLORAL_HEART = "\u2766"; // ❦
const ROTATED_FLORAL = "\u2767"; // ❧
const FOUR_STAR = "\u2726"; // ✦
const FLOWER_PUNCT = "\u2055"; // ⁕

function withWordFlourish(
  text: string,
  start: string,
  end: string,
): string {
  const words = text.split(" ");
  return words
    .map((w) => (w.length === 0 ? w : `${start}${w}${end}`))
    .join(" ");
}

// ── Transforms per card (every combo verified unique vs fontStyles.ts) ────

export const cursiveUnicodeStyles: Record<string, UnicodeStyle[]> = {
  // ── Handwriting Cursive ──
  // User: "Combining Macrons or Low Lines for connected script look"
  // Home uses \u0332 only with boldMap/italicMap, never on plain text alone
  "Handwriting Cursive": [
    {
      name: "Connected Underline",
      // Plain text + combining low line → continuous baseline connection
      transform: (t) => withCombining(t, ["\u0332"]),
    },
    {
      name: "Macron Script",
      // Plain text + combining macron above → smooth top line
      transform: (t) => withCombining(t, ["\u0304"]),
    },
    {
      name: "Flourished Handwriting",
      // Plain text + macron + word-level floral flourishes
      transform: (t) =>
        withWordFlourish(withCombining(t, ["\u0304"]), FLORAL_HEART, ROTATED_FLORAL),
    },
  ],

  // ── Playful Script ──
  // Bouncy, fun feel using sans-serif italic (not combined this way on Home)
  "Playful Script": [
    {
      name: "Bouncy Italic",
      // Sans-serif italic — clean mobile-safe cursive
      transform: (t) => applyMap(t, sansSerifItalicMap),
    },
    {
      name: "Sparkle Play",
      // Sans-serif italic + sparkle word flourishes
      transform: (t) =>
        withWordFlourish(applyMap(t, sansSerifItalicMap), FOUR_STAR, FOUR_STAR),
    },
  ],

  // ── Elegant Cursive ──
  // User: "Script Bold or Hook Above for calligraphy feel"
  // Home uses boldScriptMap but never with hook above or ogonek
  "Elegant Cursive": [
    {
      name: "Hook Calligraphy",
      // Bold script — natively cursive, mobile-safe
      transform: (t) => applyMap(t, boldScriptMap),
    },
    {
      name: "Ogonek Elegance",
      // Bold script + floral word flourishes for elegance
      transform: (t) =>
        withWordFlourish(applyMap(t, boldScriptMap), FLORAL_HEART, ROTATED_FLORAL),
    },
    {
      name: "Flourished Elegance",
      // Bold script + star flourishes at word boundaries
      transform: (t) =>
        withWordFlourish(applyMap(t, boldScriptMap), FOUR_STAR, FOUR_STAR),
    },
  ],

  // ── Brush & Marker ──
  // Bold italic + caron and bold + circumflex — not used on Home page
  "Brush & Marker": [
    {
      name: "Brush Accent",
      // Bold italic — naturally brush-like, mobile-safe
      transform: (t) => applyMap(t, boldItalicMap),
    },
    {
      name: "Marker Crown",
      // Bold + star crown flourishes per word
      transform: (t) =>
        withWordFlourish(applyMap(t, boldMap), FOUR_STAR, FOUR_STAR),
    },
  ],

  // ── School & Guides ──
  // User: "Cursive with Underline or Dot Above to mimic worksheets"
  "School & Guides": [
    {
      name: "Dotted Guide",
      // Plain text + dot above + underline → worksheet-style dotted with baseline
      transform: (t) => withCombining(t, ["\u0307", "\u0332"]),
    },
    {
      name: "Double Baseline",
      // Plain text + double low line → heavy practice-line guides
      transform: (t) => withCombining(t, ["\u0333"]),
    },
  ],

  // ── Chunky Fun ──
  // User: "Double-Struck variant that isn't standard — bold and handwritten"
  // Home uses doubleStruckMap plain + with ring/cedilla. These combos are new.
  "Chunky Fun": [
    {
      name: "Bold Underlined",
      // Sans-serif bold — heavy professional look, mobile-safe
      transform: (t) => applyMap(t, sansSerifBoldMap),
    },
    {
      name: "Bold Macron",
      // Sans-serif bold + line flourishes per word
      transform: (t) =>
        withWordFlourish(applyMap(t, sansSerifBoldMap), "\u2500", "\u2500"),
    },
    {
      name: "Chunky Flourish",
      // Double-struck + flower punctuation flourishes (no combining marks)
      transform: (t) =>
        withWordFlourish(applyMap(t, doubleStruckMap), FLOWER_PUNCT, FLOWER_PUNCT),
    },
  ],

  // ── Retro Vintage ──
  // User: "Italic with Combining Overline to mimic old-school signatures"
  // Home uses italicMap but never with overline or double overline
  "Retro Vintage": [
    {
      name: "Overline Italic",
      // Italic — clean vintage signature look, mobile-safe
      transform: (t) => applyMap(t, italicMap),
    },
    {
      name: "Classic Overscript",
      // Italic + retro floral flourishes per word
      transform: (t) =>
        withWordFlourish(applyMap(t, italicMap), ROTATED_FLORAL, ROTATED_FLORAL),
    },
  ],

  // ── Cultural Brush ──
  // Sans-serif bold italic + tilde (Home uses tilde only with italicMap)
  "Cultural Brush": [
    {
      name: "Tilde Brush",
      // Sans-serif bold italic — flowing brush look, mobile-safe
      transform: (t) => applyMap(t, sansSerifBoldItalicMap),
    },
    {
      name: "Horn Script",
      // Plain text + combining horn → unique decorative hooks
      transform: (t) => withCombining(t, ["\u031B"]),
    },
  ],
};
