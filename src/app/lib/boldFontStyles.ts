// ---------------------------------------------------------------------------
// Bold Font Generator — 9 Category Cards with multiple bold styles each
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

/** Build a letter map from contiguous Unicode offsets with optional overrides. */
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

/** Build a digit map (0-9) from a contiguous Unicode block. */
function buildDigitMap(startCodePoint: number): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 10; i++) {
    map[String(i)] = String.fromCodePoint(startCodePoint + i);
  }
  return map;
}

/** Replace each character using a map; unmapped characters pass through. */
function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

/** Apply multiple maps (merged) to text. */
function applyMaps(text: string, ...maps: Record<string, string>[]): string {
  const merged: Record<string, string> = {};
  for (const m of maps) Object.assign(merged, m);
  return applyMap(text, merged);
}

/** Append combining characters after every non-space character. */
function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

/** Wrap each non-space character with prefix and suffix. */
function wrapChars(text: string, prefix: string, suffix: string): string {
  return [...text].map((c) => (c === " " ? c : prefix + c + suffix)).join("");
}

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

// ── Character Maps ────────────────────────────────────────────────────────

// Mathematical Bold (letters): U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldMap = buildMap(0x1d400, 0x1d41a);

// Mathematical Bold digits: U+1D7CE–U+1D7D7
const boldDigitMap = buildDigitMap(0x1d7ce);

// Sans-Serif Bold (letters): U+1D5D4–U+1D5ED (upper), U+1D5EE–U+1D607 (lower)
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);

// Sans-Serif Bold digits: U+1D7EC–U+1D7F5
const sansSerifBoldDigitMap = buildDigitMap(0x1d7ec);

// Mathematical Bold Italic: U+1D468–U+1D481 (upper), U+1D482–U+1D49B (lower)
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Mathematical Bold Script: U+1D4D0–U+1D4E9 (upper), U+1D4EA–U+1D503 (lower)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Mathematical Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Mathematical Double-Struck: U+1D538–U+1D551 (upper), U+1D552–U+1D56B (lower)
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});

// Double-Struck digits: U+1D7D8–U+1D7E1
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// Sans-Serif Bold Italic: U+1D63C–U+1D655 (upper), U+1D656–U+1D66F (lower)
const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);

// Fullwidth Latin: U+FF21–U+FF3A (upper), U+FF41–U+FF5A (lower)
const fullwidthMap = buildMap(0xff21, 0xff41, { " ": "\u3000" });

// Fullwidth digits: U+FF10–U+FF19
const fullwidthDigitMap = buildDigitMap(0xff10);

// Negative Squared Latin Capital Letters: U+1F170–U+1F189
const negSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  negSquaredMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f170 + i);
  negSquaredMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1f170 + i);
}

// ── 9 Category Cards ──────────────────────────────────────────────────────

// Card 1: Core Bold Styles (the primary bold transformations)
const coreBoldStyles: FontCategory = {
  name: "Core Bold Styles",
  styles: [
    { name: "Bold Serif", transform: (t) => applyMaps(t, boldMap, boldDigitMap) },
    { name: "Bold Sans", transform: (t) => applyMaps(t, sansSerifBoldMap, sansSerifBoldDigitMap) },
    { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Bold Sans Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
    { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Double-Struck Bold", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
    { name: "Fullwidth Bold", transform: (t) => applyMaps(t, fullwidthMap, fullwidthDigitMap) },
    { name: "Squared Bold", transform: (t) => applyMap(t, negSquaredMap) },
  ],
};

// Card 2: Bold with Lines (combining mark line decorations on bold text)
const boldWithLines: FontCategory = {
  name: "Bold with Lines",
  styles: [
    { name: "Bold Underline", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0332"]) },
    { name: "Bold Double Underline", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0333"]) },
    { name: "Bold Strikethrough", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0336"]) },
    { name: "Bold Overline", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0305"]) },
    { name: "Bold Slash", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0337"]) },
    { name: "Sans Bold Underline", transform: (t) => withCombining(applyMaps(t, sansSerifBoldMap, sansSerifBoldDigitMap), ["\u0332"]) },
    { name: "Sans Bold Strikethrough", transform: (t) => withCombining(applyMaps(t, sansSerifBoldMap, sansSerifBoldDigitMap), ["\u0336"]) },
    { name: "Bold Top-Bottom Lines", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0332", "\u0305"]) },
    { name: "Bold Tilde Overlay", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0334"]) },
  ],
};

// Card 3: Bold Decorative (bold text with decorative frames)
const boldDecorative: FontCategory = {
  name: "Bold Decorative",
  styles: [
    { name: "Bold Star Border", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2605", "\u2605") },
    { name: "Bold Diamond Edge", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2756", "\u2756") },
    { name: "Bold Heart Border", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2765", "\u2765") },
    { name: "Bold Flower Frame", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u273F", "\u273F") },
    { name: "Bold Crown Border", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2655", "\u2655") },
    { name: "Bold Snowflake", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2744", "\u2744") },
    { name: "Bold Sparkle", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2726", "\u2726") },
    { name: "Bold Glitter", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2727", "\u2727") },
    { name: "Bold Compass", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2724", "\u2724") },
    { name: "Bold Clover", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2618", "\u2618") },
  ],
};

// Card 4: Bold Framed (bold text with bracket/box frames)
const boldFramed: FontCategory = {
  name: "Bold Framed",
  styles: [
    { name: "Bold Boxed", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "[", "]") },
    { name: "Bold U Brackets", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2E26", "\u2E27") },
    { name: "Bold Box Letter", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u3010", "\u3011") },
    { name: "Bold Soft Corner", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u256D", "\u256E") },
    { name: "Bold Square Corner", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u250C", "\u2510") },
    { name: "Bold Twin Pillar", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2551", "\u2551") },
    { name: "Bold Heavy Frame", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2590", "\u258C") },
    { name: "Bold Double Box", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2560", "\u2563") },
    { name: "Bold Arc", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2993", "\u2994") },
  ],
};

// Card 5: Bold Gothic (bold fraktur variations with decorative elements)
const boldGothic: FontCategory = {
  name: "Bold Gothic",
  styles: [
    { name: "Gothic Bold", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Gothic Dagger", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2020", "\u2020") },
    { name: "Gothic Cross", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2719", "\u2719") },
    { name: "Gothic Star", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2726", "\u2726") },
    { name: "Gothic Iron", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2694", "\u2694") },
    { name: "Gothic Rune", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u16ED", "\u16ED") },
    { name: "Gothic Skull", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2620", "\u2620") },
    { name: "Gothic Flame", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2739", "\u2739") },
  ],
};

// Card 6: Bold Script Styles (bold script/cursive variations)
const boldScriptStyles: FontCategory = {
  name: "Bold Script Styles",
  styles: [
    { name: "Script Bold", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Script Bold Underline", transform: (t) => withCombining(applyMap(t, boldScriptMap), ["\u0332"]) },
    { name: "Script Bold Star", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2726", "\u2726") },
    { name: "Script Bold Heart", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2765", "\u2765") },
    { name: "Script Bold Flower", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2740", "\u2740") },
    { name: "Script Bold Wave", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u223C") },
    { name: "Script Bold Dot", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2022") },
    { name: "Script Bold Arrow", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2192") },
  ],
};

// Card 7: Bold Overtext (bold text with combining marks above)
const boldOvertext: FontCategory = {
  name: "Bold Overtext",
  styles: [
    { name: "Bold Crown", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u035B"]) },
    { name: "Bold Accent", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0302"]) },
    { name: "Bold Wave Top", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0303"]) },
    { name: "Bold Ring Top", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u030A"]) },
    { name: "Bold Dot Top", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0307"]) },
    { name: "Bold Double Accent", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u030B"]) },
    { name: "Bold Breve", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0306"]) },
    { name: "Bold Hook Above", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u0309"]) },
    { name: "Bold Spiral", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u034C"]) },
  ],
};

// Card 8: Bold Separators (bold text with separator symbols between characters)
const boldSeparators: FontCategory = {
  name: "Bold Separators",
  styles: [
    { name: "Bold Bullet", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u2022") },
    { name: "Bold Arrow", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u2192") },
    { name: "Bold Lightning", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u26A1") },
    { name: "Bold Wave", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u223C") },
    { name: "Bold Smile", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u203F") },
    { name: "Bold Star Sep", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u2605") },
    { name: "Bold Diamond Sep", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u25C6") },
    { name: "Bold Dot Sep", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u00B7") },
    { name: "Bold Chain", transform: (t) => withSeparator(applyMaps(t, boldMap, boldDigitMap), "\u22B6") },
  ],
};

// Card 9: Bold Block Styles (bold with heavy block-style wrapping)
const boldBlockStyles: FontCategory = {
  name: "Bold Block Styles",
  styles: [
    { name: "Solid Block Bold", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2588", "\u2588") },
    { name: "Dark Shade Bold", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2593", "\u2593") },
    { name: "Medium Shade Bold", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2592", "\u2592") },
    { name: "Light Shade Bold", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u2591", "\u2591") },
    { name: "Bold Pointed Arch", transform: (t) => {
      const bText = applyMaps(t, boldMap, boldDigitMap);
      return [...bText].map((c) => (c === " " ? c : "\u29FC" + c + "\u29FD")).join("");
    }},
    { name: "Bold Looped", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u23B0", "\u23B1") },
    { name: "Bold Triple Line", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u269E", "\u269F") },
    { name: "Bold Petal Wrap", transform: (t) => wrapChars(applyMaps(t, boldMap, boldDigitMap), "\u22B0", "\u22B1") },
    { name: "Bold Curve Overlay", transform: (t) => withCombining(applyMaps(t, boldMap, boldDigitMap), ["\u032E", "\u0311"]) },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const boldFontCategories: FontCategory[] = [
  coreBoldStyles,
  boldWithLines,
  boldGothic,
  boldScriptStyles,
  boldDecorative,
  boldFramed,
  boldOvertext,
  boldSeparators,
  boldBlockStyles,
];
