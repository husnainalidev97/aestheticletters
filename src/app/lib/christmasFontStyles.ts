// ---------------------------------------------------------------------------
// Christmas Font Generator — 5 Category Cards
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

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

/** Wrap text with a prefix and suffix frame. */
function withFrame(text: string, pre: string, suf: string): string {
  return `${pre} ${text}${suf ? ` ${suf}` : ""}`;
}

// ── Character Maps ────────────────────────────────────────────────────────

// Fraktur (regular): U+1D504–U+1D51D (upper), U+1D51E–U+1D537 (lower)
// Gaps: C, H, I, R, Z filled from Letterlike Symbols block
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Bold Serif: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldSerifMap = buildMap(0x1d400, 0x1d41a);
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// Bold Sans-Serif: U+1D5D4–U+1D5ED (upper), U+1D5EE–U+1D607 (lower)
const boldSansMap = buildMap(0x1d5d4, 0x1d5ee);
const boldSansDigitMap = buildDigitMap(0x1d7ec);

// Mathematical Script (cursive): U+1D49C–U+1D4B5 (upper), U+1D4B6–U+1D4CF (lower)
// Gaps: B, E, F, H, I, L, M, R (caps) + e, g, o (lower) filled from Letterlike Symbols
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131",
  H: "\u210B", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// ── 5 Category Cards ──────────────────────────────────────────────────────

// Card 1: Old English Christmas — Fraktur with gap-filling for C, H, I, R, Z
const oldEnglishChristmas: FontCategory = {
  name: "Old English Christmas",
  styles: [
    { name: "Old English Christmas", transform: (t) => applyMap(t, frakturMap) },
    { name: "Old English Snowflake", transform: (t) => withSeparator(applyMap(t, frakturMap), "\u2744") },
    { name: "Old English Star", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2B50", "\u2B50") },
    { name: "Old English Holly", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2767", "\u2767") },
    { name: "Old English Tree", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Old English Bell", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Old English Gift", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Old English Sparkle", transform: (t) => withSeparator(applyMap(t, frakturMap), "\u2726") },
    { name: "Old English Corner", transform: (t) => withFrame(applyMap(t, frakturMap), "\u300E", "\u300F") },
    { name: "Old English Ribbon", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Old English Filigree", transform: (t) => withFrame(applyMap(t, frakturMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Old English Angle", transform: (t) => withFrame(applyMap(t, frakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 2: Bold Old English — Bold Fraktur, no gaps
const boldOldEnglish: FontCategory = {
  name: "Bold Old English",
  styles: [
    { name: "Bold Old English", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Bold Old English Snowflake", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2744") },
    { name: "Bold Old English Star", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2B50", "\u2B50") },
    { name: "Bold Old English Holly", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2767", "\u2767") },
    { name: "Bold Old English Tree", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Bold Old English Bell", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Bold Old English Gift", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Bold Old English Sparkle", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2726") },
    { name: "Bold Old English Corner", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u300E", "\u300F") },
    { name: "Bold Old English Ribbon", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Bold Old English Crown", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u265B", "\u265B") },
    { name: "Bold Old English Angle", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 3: Christmas Bold — Standard bold serif alphabet
const christmasBold: FontCategory = {
  name: "Christmas Bold",
  styles: [
    { name: "Christmas Bold", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Christmas Bold Snowflake", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2744") },
    { name: "Christmas Bold Star", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2B50", "\u2B50") },
    { name: "Christmas Bold Holly", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2767", "\u2767") },
    { name: "Christmas Bold Tree", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Christmas Bold Bell", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Christmas Bold Gift", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Christmas Bold Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2726") },
    { name: "Christmas Bold Lenticular", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u3010", "\u3011") },
    { name: "Christmas Bold Corner", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u300C", "\u300D") },
    { name: "Christmas Bold Ribbon", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Christmas Bold Angle", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 4: Festive Sans — Bold sans-serif for a modern holiday look
const festiveSans: FontCategory = {
  name: "Festive Sans",
  styles: [
    { name: "Festive Sans", transform: (t) => applyMaps(t, boldSansMap, boldSansDigitMap) },
    { name: "Festive Sans Snowflake", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2744") },
    { name: "Festive Sans Star", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2B50", "\u2B50") },
    { name: "Festive Sans Holly", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2767", "\u2767") },
    { name: "Festive Sans Tree", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Festive Sans Bell", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Festive Sans Gift", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Festive Sans Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2726") },
    { name: "Festive Sans Lenticular", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u3010", "\u3011") },
    { name: "Festive Sans Corner", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u300C", "\u300D") },
    { name: "Festive Sans Ribbon", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Festive Sans Angle", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 5: Holiday Script — Flowing script with gap-filling for B, E, F, H, I, L, M, R + e, g, o
const holidayScript: FontCategory = {
  name: "Holiday Script",
  styles: [
    { name: "Holiday Script", transform: (t) => applyMap(t, scriptMap) },
    { name: "Holiday Script Snowflake", transform: (t) => withSeparator(applyMap(t, scriptMap), "\u2744") },
    { name: "Holiday Script Star", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2B50", "\u2B50") },
    { name: "Holiday Script Holly", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2767", "\u2767") },
    { name: "Holiday Script Tree", transform: (t) => withFrame(applyMap(t, scriptMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Holiday Script Bell", transform: (t) => withFrame(applyMap(t, scriptMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Holiday Script Gift", transform: (t) => withFrame(applyMap(t, scriptMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Holiday Script Sparkle", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2727\uFF65\uFF9F", "\uFF9F\uFF65\u2727") },
    { name: "Holiday Script Heart", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2661", "\u2661") },
    { name: "Holiday Script Flower", transform: (t) => withFrame(applyMap(t, scriptMap), "\u273F", "\u273F") },
    { name: "Holiday Script Ribbon", transform: (t) => withFrame(applyMap(t, scriptMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Holiday Script Angle", transform: (t) => withFrame(applyMap(t, scriptMap), "\u00AB", "\u00BB") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const christmasFontCategories: FontCategory[] = [
  oldEnglishChristmas,
  boldOldEnglish,
  christmasBold,
  festiveSans,
  holidayScript,
];
