// ---------------------------------------------------------------------------
// Big Text Generator — 3 Category Cards
// Fullwidth, Bold Sans, Bold Serif. All plain Unicode substitution, same
// pattern as the other generator pages. Pairs with the ScalePreview modal
// that renders the output large in banner / thumbnail / poster frames.
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

/** Wrap each non-space character with prefix and suffix. */
function wrapChars(text: string, prefix: string, suffix: string): string {
  return [...text].map((c) => (c === " " ? c : prefix + c + suffix)).join("");
}

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

// ── Character Maps ────────────────────────────────────────────────────────

// Fullwidth Latin: U+FF21 (upper), U+FF41 (lower), U+FF10 (digits), U+3000 (space)
const fullwidthMap: Record<string, string> = { " ": "\u3000" };
for (let i = 0; i < 26; i++) {
  fullwidthMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0xff21 + i);
  fullwidthMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0xff41 + i);
}
for (let i = 0; i < 10; i++) {
  fullwidthMap[String(i)] = String.fromCodePoint(0xff10 + i);
}

// Bold Sans: U+1D5D4 (upper), U+1D5EE (lower); digits U+1D7EC–U+1D7F5
const boldSansMap = buildMap(0x1d5d4, 0x1d5ee);
const boldSansDigitMap = buildDigitMap(0x1d7ec);

// Bold Serif: U+1D400 (upper), U+1D41A (lower); digits U+1D7CE–U+1D7D7
const boldSerifMap = buildMap(0x1d400, 0x1d41a);
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// ── 3 Category Cards ────────────────────────────────────────────────────────

// Card 1: Fullwidth — the widest, most "banner-like" spacing.
const fullwidth: FontCategory = {
  name: "Fullwidth",
  styles: [
    { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
    { name: "Fullwidth Boxed", transform: (t) => wrapChars(applyMap(t, fullwidthMap), "[", "]") },
    { name: "Fullwidth Bullet", transform: (t) => withSeparator(applyMap(t, fullwidthMap), "\u2022") },
    { name: "Fullwidth Arrow", transform: (t) => withSeparator(applyMap(t, fullwidthMap), "\u2192") },
    { name: "Fullwidth Lenticular", transform: (t) => wrapChars(applyMap(t, fullwidthMap), "\u3010", "\u3011") },
  ],
};

// Card 2: Bold Sans — clean, heavy, full alphabet + digits.
const boldSans: FontCategory = {
  name: "Bold Sans",
  styles: [
    { name: "Bold Sans", transform: (t) => applyMaps(t, boldSansMap, boldSansDigitMap) },
    { name: "Bold Sans Boxed", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "[", "]") },
    { name: "Bold Sans Bullet", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2022") },
    { name: "Bold Sans Arrow", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2192") },
    { name: "Bold Sans Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2727") },
  ],
};

// Card 3: Bold Serif — classic mathematical bold, full alphabet + digits.
const boldSerif: FontCategory = {
  name: "Bold Serif",
  styles: [
    { name: "Bold Serif", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Bold Serif Boxed", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "[", "]") },
    { name: "Bold Serif Bullet", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2022") },
    { name: "Bold Serif Arrow", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2192") },
    { name: "Bold Serif Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2727") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const bigTextFontCategories: FontCategory[] = [
  fullwidth,
  boldSans,
  boldSerif,
];
