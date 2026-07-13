// ---------------------------------------------------------------------------
// Weird Font Generator — 6 strange styles
// Runic Cipher, Halo Marks, Underglow, Cherokee Cipher, Superscript Oddity,
// and Deseret Cipher. Each borrows characters Unicode already ships with.
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

/** Build a case-insensitive letter map: both cases map to the same glyph. */
function buildLookalikeMap(
  entries: Record<string, number>,
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [letter, codePoint] of Object.entries(entries)) {
    const glyph = String.fromCodePoint(codePoint);
    map[letter.toUpperCase()] = glyph;
    map[letter.toLowerCase()] = glyph;
  }
  return map;
}

/** Replace each character using a map; unmapped characters pass through. */
function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

/** Append a combining mark after every non-space character. */
function withCombining(text: string, mark: string): string {
  return [...text].map((c) => (c === " " ? c : c + mark)).join("");
}

// ── Character Maps ──────────────────────────────────────────────────────────

// Runic Cipher — Elder Futhark (Runic block U+16A0–U+16FF).
// 21 of 26 letters covered; C, Q, V, X, Y have no matching rune.
const runicMap = buildLookalikeMap({
  A: 0x16a8, B: 0x16d2, D: 0x16de, E: 0x16d6, F: 0x16a0, G: 0x16b7,
  H: 0x16ba, I: 0x16c1, J: 0x16c3, K: 0x16b2, L: 0x16da, M: 0x16d7,
  N: 0x16be, O: 0x16df, P: 0x16c8, R: 0x16b1, S: 0x16ca, T: 0x16cf,
  U: 0x16a2, W: 0x16b9, Z: 0x16c9,
});

// Cherokee Cipher — Cherokee syllabary lookalikes (U+13A0–U+13F5 block).
// 18 of 26 letters covered; C, F, I, K, N, Q, U, X have no close match.
const cherokeeMap = buildLookalikeMap({
  A: 0x13a0, B: 0x13c8, D: 0x13d3, E: 0x13ac, G: 0x13a6, H: 0x13bb,
  J: 0x13ab, L: 0x13de, M: 0x13b7, O: 0x13be, P: 0x13ae, R: 0x13a1,
  S: 0x13da, T: 0x13a2, V: 0x13c9, W: 0x13b3, Y: 0x13a9, Z: 0x13c3,
});

// Superscript Oddity — modifier letters (Phonetic Extensions).
// 19 of 26 letters covered; C, F, Q, S, X, Y, Z have no superscript form.
const superscriptMap = buildLookalikeMap({
  A: 0x1d2c, B: 0x1d2e, D: 0x1d30, E: 0x1d31, G: 0x1d33, H: 0x1d34,
  I: 0x1d35, J: 0x1d36, K: 0x1d37, L: 0x1d38, M: 0x1d39, N: 0x1d3a,
  O: 0x1d3c, P: 0x1d3e, R: 0x1d3f, T: 0x1d40, U: 0x1d41, V: 0x2c7d,
  W: 0x1d42,
});

// Deseret Cipher — Deseret alphabet (U+10400 block), mapped phonetically.
// 23 of 26 letters covered; C, Q, X carry no sound of their own in English.
const deseretMap = buildLookalikeMap({
  A: 0x10402, B: 0x10412, D: 0x10414, E: 0x10401, F: 0x10419, G: 0x10418,
  H: 0x10410, I: 0x10400, J: 0x10416, K: 0x10417, L: 0x10422, M: 0x10423,
  N: 0x10424, O: 0x10404, P: 0x10411, R: 0x10421, S: 0x1041d, T: 0x10413,
  U: 0x10405, V: 0x1041a, W: 0x1040e, Y: 0x1040f, Z: 0x1041e,
});

// Runic Younger — Viking Age Younger Futhark, fewer runes by design.
// 15 of 26 letters covered.
const runicYoungerMap = buildLookalikeMap({
  A: 0x16c5, B: 0x16d2, F: 0x16a0, H: 0x16bc, I: 0x16c1, K: 0x16b4,
  L: 0x16da, M: 0x16d8, N: 0x16be, O: 0x16ac, R: 0x16b1, S: 0x16cb,
  T: 0x16cf, U: 0x16a2, Y: 0x16e6,
});

// Cherokee Small — Cherokee Supplement block (U+AB70+), lowercase forms,
// same letter selection as Cherokee Capital. 18 of 26 letters covered.
const cherokeeSmallMap = buildLookalikeMap({
  A: 0xab70, B: 0xab98, D: 0xaba3, E: 0xab7c, G: 0xab76, H: 0xab8b,
  J: 0xab7b, L: 0xabae, M: 0xab87, O: 0xab8e, P: 0xab7e, R: 0xab71,
  S: 0xabaa, T: 0xab72, V: 0xab99, W: 0xab83, Y: 0xab79, Z: 0xab93,
});

// Subscript — Latin subscript block; only 12 of 26 letters exist in Unicode.
const subscriptMap = buildLookalikeMap({
  A: 0x2090, E: 0x2091, H: 0x2095, K: 0x2096, L: 0x2097, M: 0x2098,
  N: 0x2099, O: 0x2092, P: 0x209a, S: 0x209b, T: 0x209c, X: 0x2093,
});

// Deseret Short Vowel — same consonants as the base Deseret map; only the
// vowels A, E, I, O, U swap to their short-vowel codepoints. 23 of 26.
const deseretShortMap = buildLookalikeMap({
  A: 0x10408, B: 0x10412, D: 0x10414, E: 0x10407, F: 0x10419, G: 0x10418,
  H: 0x10410, I: 0x10406, J: 0x10416, K: 0x10417, L: 0x10422, M: 0x10423,
  N: 0x10424, O: 0x1040a, P: 0x10411, R: 0x10421, S: 0x1041d, T: 0x10413,
  U: 0x1040b, V: 0x1041a, W: 0x1040e, Y: 0x1040f, Z: 0x1041e,
});

// Combining marks — stacked onto any letter, so every letter is covered.
const RING_ABOVE = "\u030a"; // Halo Ring
const CIRCUMFLEX = "\u0302"; // Halo Circumflex
const LOW_LINE = "\u0332"; // Underglow Line
const DOT_BELOW = "\u0323"; // Underglow Dot

// Wrap styled text with a weird symbol on both sides.
function withBookend(styled: string, symbol: string): string {
  return `${symbol} ${styled} ${symbol}`;
}

// ── Export ─────────────────────────────────────────────────────────────────

// The 6 established cards, each holding its nested variants (22 total).
// The first style in each card is the base variant that drives the on-page
// examples; "Marked" variants add a symbol bookend to the base output.
export const weirdFontCategories: FontCategory[] = [
  {
    name: "Runic Cipher",
    styles: [
      { name: "Runic Elder", transform: (t) => applyMap(t, runicMap) },
      { name: "Runic Elder Marked", transform: (t) => withBookend(applyMap(t, runicMap), "\u2234") },
      { name: "Runic Younger", transform: (t) => applyMap(t, runicYoungerMap) },
      { name: "Runic Younger Marked", transform: (t) => withBookend(applyMap(t, runicYoungerMap), "\u26a0") },
    ],
  },
  {
    name: "Halo Marks",
    styles: [
      { name: "Halo Ring", transform: (t) => withCombining(t, RING_ABOVE) },
      { name: "Halo Ring Marked", transform: (t) => withBookend(withCombining(t, RING_ABOVE), "\u2297") },
      { name: "Halo Circumflex", transform: (t) => withCombining(t, CIRCUMFLEX) },
    ],
  },
  {
    name: "Underglow",
    styles: [
      { name: "Underglow Line", transform: (t) => withCombining(t, LOW_LINE) },
      { name: "Underglow Line Marked", transform: (t) => withBookend(withCombining(t, LOW_LINE), "\u2235") },
      { name: "Underglow Dot", transform: (t) => withCombining(t, DOT_BELOW) },
    ],
  },
  {
    name: "Cherokee Cipher",
    styles: [
      { name: "Cherokee Capital", transform: (t) => applyMap(t, cherokeeMap) },
      { name: "Cherokee Capital Marked", transform: (t) => withBookend(applyMap(t, cherokeeMap), "\u22c8") },
      { name: "Cherokee Small", transform: (t) => applyMap(t, cherokeeSmallMap) },
      { name: "Cherokee Small Marked", transform: (t) => withBookend(applyMap(t, cherokeeSmallMap), "\u232c") },
    ],
  },
  {
    name: "Superscript Oddity",
    styles: [
      { name: "Superscript", transform: (t) => applyMap(t, superscriptMap) },
      { name: "Superscript Marked", transform: (t) => withBookend(applyMap(t, superscriptMap), "\u03df") },
      { name: "Subscript", transform: (t) => applyMap(t, subscriptMap) },
      { name: "Subscript Marked", transform: (t) => withBookend(applyMap(t, subscriptMap), "\u2697") },
    ],
  },
  {
    name: "Deseret Cipher",
    styles: [
      { name: "Deseret Long Vowel", transform: (t) => applyMap(t, deseretMap) },
      { name: "Deseret Long Vowel Marked", transform: (t) => withBookend(applyMap(t, deseretMap), "\u260d") },
      { name: "Deseret Short Vowel", transform: (t) => applyMap(t, deseretShortMap) },
      { name: "Deseret Short Vowel Marked", transform: (t) => withBookend(applyMap(t, deseretShortMap), "\u27c1") },
    ],
  },
];
