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
  N: 0x16be, O: 0x16df, P: 0x16c8, R: 0x16b1, S: 0x16cb, T: 0x16cf,
  U: 0x16a2, W: 0x16b9, Z: 0x16c9,
});

// Cherokee Cipher — Cherokee syllabary lookalikes (U+13A0 & U+AB70 blocks).
// 18 of 26 letters covered; C, F, K, N, Q, U, X, Z have no close match.
const cherokeeMap = buildLookalikeMap({
  A: 0x13aa, B: 0x13fc, D: 0xab70, E: 0xab7c, G: 0x13fb, H: 0x13cb,
  I: 0xab96, J: 0x13ab, L: 0x13ee, M: 0x13c7, O: 0x13eb, P: 0x13e2,
  R: 0xab71, S: 0x13ea, T: 0x13a2, V: 0x13c9, W: 0xabc3, Y: 0x13f9,
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
  A: 0x10402, B: 0x10412, D: 0x10414, E: 0x10407, F: 0x10419, G: 0x10418,
  H: 0x10410, I: 0x10406, J: 0x10416, K: 0x10417, L: 0x10422, M: 0x10423,
  N: 0x10424, O: 0x10404, P: 0x10411, R: 0x10421, S: 0x1041d, T: 0x10413,
  U: 0x10405, V: 0x1041a, W: 0x1040e, Y: 0x1040f, Z: 0x1041e,
});

// Combining marks — stacked onto any letter, so every letter is covered.
const RING_ABOVE = "\u030a"; // Halo Marks
const LOW_LINE = "\u0332"; // Underglow

// ── Export ─────────────────────────────────────────────────────────────────

const weirdFonts: FontCategory = {
  name: "Weird Font Styles",
  styles: [
    { name: "Runic Cipher", transform: (t) => applyMap(t, runicMap) },
    { name: "Halo Marks", transform: (t) => withCombining(t, RING_ABOVE) },
    { name: "Underglow", transform: (t) => withCombining(t, LOW_LINE) },
    { name: "Cherokee Cipher", transform: (t) => applyMap(t, cherokeeMap) },
    { name: "Superscript Oddity", transform: (t) => applyMap(t, superscriptMap) },
    { name: "Deseret Cipher", transform: (t) => applyMap(t, deseretMap) },
  ],
};

export const weirdFontCategories: FontCategory[] = [weirdFonts];
