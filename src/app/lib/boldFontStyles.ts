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

// Bold Serif: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldSerifMap = buildMap(0x1d400, 0x1d41a);

// Bold Serif digits: U+1D7CE–U+1D7D7
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// Bold Sans: U+1D5D4–U+1D5ED (upper), U+1D5EE–U+1D607 (lower)
const boldSansMap = buildMap(0x1d5d4, 0x1d5ee);

// Bold Sans digits: U+1D7EC–U+1D7F5
const boldSansDigitMap = buildDigitMap(0x1d7ec);

// Bold Italic: U+1D468–U+1D481 (upper), U+1D482–U+1D49B (lower)
// Digits: NOT SUPPORTED — no Unicode block exists
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Bold Italic Sans: U+1D63C–U+1D655 (upper), U+1D656–U+1D66F (lower)
// Digits: NOT SUPPORTED — no Unicode block exists
const boldItalicSansMap = buildMap(0x1d63c, 0x1d656);

// Bold Script: U+1D4D0–U+1D4E9 (upper), U+1D4EA–U+1D503 (lower)
// Digits: NOT SUPPORTED — no Unicode block exists
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
// Digits: NOT SUPPORTED — no Unicode block exists
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Double-Struck: U+1D538–U+1D551 (upper with 7 exceptions), U+1D552–U+1D56B (lower)
// Exceptions: C=U+2102, H=U+210D, N=U+2115, P=U+2119, Q=U+211A, R=U+211D, Z=U+2124
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});

// Double-Struck digits: U+1D7D8–U+1D7E1
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// Negative Circled: U+1F150–U+1F169 (uppercase only, lowercase maps to same)
// Digits 1-9: U+2776–U+277E, Digit 0: U+24EA
const negCircledMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  negCircledMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f150 + i);
  negCircledMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1f150 + i);
}
const negCircledDigitMap: Record<string, string> = {
  "0": "\u24EA",
  "1": "\u2776",
  "2": "\u2777",
  "3": "\u2778",
  "4": "\u2779",
  "5": "\u277A",
  "6": "\u277B",
  "7": "\u277C",
  "8": "\u277D",
  "9": "\u277E",
};

// Negative Squared: U+1F170–U+1F189 (uppercase only, lowercase maps to same)
// Digits: NOT SUPPORTED at all
const negSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  negSquaredMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f170 + i);
  negSquaredMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1f170 + i);
}

// ── 9 Category Cards ──────────────────────────────────────────────────────

// Card 1: Bold Serif
const boldSerif: FontCategory = {
  name: "Bold Serif",
  styles: [
    { name: "Bold Serif", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Bold Serif Underline", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0332"]) },
    { name: "Bold Serif Strikethrough", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0336"]) },
    { name: "Bold Serif Overline", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0305"]) },
    { name: "Bold Serif Top-Bottom", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0332", "\u0305"]) },
    { name: "Bold Serif Boxed", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "[", "]") },
    { name: "Bold Serif Star", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2726", "\u2726") },
    { name: "Bold Serif Diamond", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u25C6", "\u25C6") },
    { name: "Bold Serif Bullet", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2022") },
  ],
};

// Card 2: Bold Sans
const boldSans: FontCategory = {
  name: "Bold Sans",
  styles: [
    { name: "Bold Sans", transform: (t) => applyMaps(t, boldSansMap, boldSansDigitMap) },
    { name: "Bold Sans Underline", transform: (t) => withCombining(applyMaps(t, boldSansMap, boldSansDigitMap), ["\u0332"]) },
    { name: "Bold Sans Strikethrough", transform: (t) => withCombining(applyMaps(t, boldSansMap, boldSansDigitMap), ["\u0336"]) },
    { name: "Bold Sans Overline", transform: (t) => withCombining(applyMaps(t, boldSansMap, boldSansDigitMap), ["\u0305"]) },
    { name: "Bold Sans Top-Bottom", transform: (t) => withCombining(applyMaps(t, boldSansMap, boldSansDigitMap), ["\u0332", "\u0305"]) },
    { name: "Bold Sans Boxed", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "[", "]") },
    { name: "Bold Sans Star", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2726", "\u2726") },
    { name: "Bold Sans Diamond", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "\u25C6", "\u25C6") },
    { name: "Bold Sans Bullet", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2022") },
  ],
};

// Card 3: Bold Italic
const boldItalic: FontCategory = {
  name: "Bold Italic",
  styles: [
    { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Bold Italic Underline", transform: (t) => withCombining(applyMap(t, boldItalicMap), ["\u0332"]) },
    { name: "Bold Italic Strikethrough", transform: (t) => withCombining(applyMap(t, boldItalicMap), ["\u0336"]) },
    { name: "Bold Italic Overline", transform: (t) => withCombining(applyMap(t, boldItalicMap), ["\u0305"]) },
    { name: "Bold Italic Top-Bottom", transform: (t) => withCombining(applyMap(t, boldItalicMap), ["\u0332", "\u0305"]) },
    { name: "Bold Italic Boxed", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "[", "]") },
    { name: "Bold Italic Star", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "\u2726", "\u2726") },
    { name: "Bold Italic Diamond", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "\u25C6", "\u25C6") },
    { name: "Bold Italic Bullet", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2022") },
  ],
};

// Card 4: Bold Italic Sans
const boldItalicSans: FontCategory = {
  name: "Bold Italic Sans",
  styles: [
    { name: "Bold Italic Sans", transform: (t) => applyMap(t, boldItalicSansMap) },
    { name: "Bold Italic Sans Underline", transform: (t) => withCombining(applyMap(t, boldItalicSansMap), ["\u0332"]) },
    { name: "Bold Italic Sans Strikethrough", transform: (t) => withCombining(applyMap(t, boldItalicSansMap), ["\u0336"]) },
    { name: "Bold Italic Sans Overline", transform: (t) => withCombining(applyMap(t, boldItalicSansMap), ["\u0305"]) },
    { name: "Bold Italic Sans Top-Bottom", transform: (t) => withCombining(applyMap(t, boldItalicSansMap), ["\u0332", "\u0305"]) },
    { name: "Bold Italic Sans Boxed", transform: (t) => wrapChars(applyMap(t, boldItalicSansMap), "[", "]") },
    { name: "Bold Italic Sans Star", transform: (t) => wrapChars(applyMap(t, boldItalicSansMap), "\u2726", "\u2726") },
    { name: "Bold Italic Sans Diamond", transform: (t) => wrapChars(applyMap(t, boldItalicSansMap), "\u25C6", "\u25C6") },
    { name: "Bold Italic Sans Bullet", transform: (t) => withSeparator(applyMap(t, boldItalicSansMap), "\u2022") },
  ],
};

// Card 5: Bold Script
const boldScript: FontCategory = {
  name: "Bold Script",
  styles: [
    { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Bold Script Underline", transform: (t) => withCombining(applyMap(t, boldScriptMap), ["\u0332"]) },
    { name: "Bold Script Strikethrough", transform: (t) => withCombining(applyMap(t, boldScriptMap), ["\u0336"]) },
    { name: "Bold Script Heart", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2765", "\u2765") },
    { name: "Bold Script Flower", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2740", "\u2740") },
    { name: "Bold Script Star", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u2726", "\u2726") },
    { name: "Bold Script Boxed", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "[", "]") },
    { name: "Bold Script Wave", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u223C") },
    { name: "Bold Script Arrow", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2192") },
  ],
};

// Card 6: Bold Fraktur
const boldFraktur: FontCategory = {
  name: "Bold Fraktur",
  styles: [
    { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Bold Fraktur Underline", transform: (t) => withCombining(applyMap(t, boldFrakturMap), ["\u0332"]) },
    { name: "Bold Fraktur Dagger", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2020", "\u2020") },
    { name: "Bold Fraktur Cross", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2719", "\u2719") },
    { name: "Bold Fraktur Star", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2726", "\u2726") },
    { name: "Bold Fraktur Iron", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2694", "\u2694") },
    { name: "Bold Fraktur Skull", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2620", "\u2620") },
    { name: "Bold Fraktur Boxed", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "[", "]") },
    { name: "Bold Fraktur Flame", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2739", "\u2739") },
  ],
};

// Card 7: Double-Struck
const doubleStruck: FontCategory = {
  name: "Double-Struck",
  styles: [
    { name: "Double-Struck", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
    { name: "Double-Struck Underline", transform: (t) => withCombining(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), ["\u0332"]) },
    { name: "Double-Struck Strikethrough", transform: (t) => withCombining(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), ["\u0336"]) },
    { name: "Double-Struck Overline", transform: (t) => withCombining(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), ["\u0305"]) },
    { name: "Double-Struck Boxed", transform: (t) => wrapChars(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "[", "]") },
    { name: "Double-Struck Star", transform: (t) => wrapChars(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2726", "\u2726") },
    { name: "Double-Struck Diamond", transform: (t) => wrapChars(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u25C6", "\u25C6") },
    { name: "Double-Struck Bullet", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2022") },
    { name: "Double-Struck Angle", transform: (t) => wrapChars(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 8: Negative Circled
const negativeCircled: FontCategory = {
  name: "Negative Circled",
  styles: [
    { name: "Negative Circled", transform: (t) => applyMaps(t, negCircledMap, negCircledDigitMap) },
    { name: "Negative Circled Underline", transform: (t) => withCombining(applyMaps(t, negCircledMap, negCircledDigitMap), ["\u0332"]) },
    { name: "Negative Circled Star", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2726", "\u2726") },
    { name: "Negative Circled Diamond", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "\u25C6", "\u25C6") },
    { name: "Negative Circled Boxed", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "[", "]") },
    { name: "Negative Circled Bullet", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2022") },
    { name: "Negative Circled Lightning", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u26A1") },
    { name: "Negative Circled Arrow", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2192") },
    { name: "Negative Circled Angle", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 9: Negative Squared
const negativeSquared: FontCategory = {
  name: "Negative Squared",
  styles: [
    { name: "Negative Squared", transform: (t) => applyMap(t, negSquaredMap) },
    { name: "Negative Squared Underline", transform: (t) => withCombining(applyMap(t, negSquaredMap), ["\u0332"]) },
    { name: "Negative Squared Star", transform: (t) => wrapChars(applyMap(t, negSquaredMap), "\u2726", "\u2726") },
    { name: "Negative Squared Diamond", transform: (t) => wrapChars(applyMap(t, negSquaredMap), "\u25C6", "\u25C6") },
    { name: "Negative Squared Boxed", transform: (t) => wrapChars(applyMap(t, negSquaredMap), "[", "]") },
    { name: "Negative Squared Bullet", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u2022") },
    { name: "Negative Squared Lightning", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u26A1") },
    { name: "Negative Squared Arrow", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u2192") },
    { name: "Negative Squared Angle", transform: (t) => wrapChars(applyMap(t, negSquaredMap), "\u00AB", "\u00BB") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const boldFontCategories: FontCategory[] = [
  boldSerif,
  boldSans,
  boldItalic,
  boldItalicSans,
  boldScript,
  boldFraktur,
  doubleStruck,
  negativeCircled,
  negativeSquared,
];
