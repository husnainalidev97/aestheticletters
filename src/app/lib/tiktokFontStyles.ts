// ---------------------------------------------------------------------------
// TikTok Font Generator — 13 verified Unicode styles
// ---------------------------------------------------------------------------

import type { FontCategory, FontStyle } from "./fontStyles";

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

// ── Character Maps ────────────────────────────────────────────────────────

// Bold: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldMap = buildMap(0x1d400, 0x1d41a);
const boldDigitMap = buildDigitMap(0x1d7ce);

// Bold Italic: U+1D468–U+1D481 (upper), U+1D482–U+1D49B (lower)
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Bold Script: U+1D4D0–U+1D4E9 (upper), U+1D4EA–U+1D503 (lower)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Sans-Serif Bold: U+1D5D4–U+1D5ED (upper), U+1D5EE–U+1D607 (lower)
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);
const sansSerifBoldDigitMap = buildDigitMap(0x1d7ec);

// Fullwidth: U+FF21–U+FF3A (upper), U+FF41–U+FF5A (lower), U+FF10–U+FF19 (digits)
const fullwidthMap = buildMap(0xff21, 0xff41, { " ": "\u3000" });
const fullwidthDigitMap = buildDigitMap(0xff10);

// Circled: U+24B6–U+24CF (upper), U+24D0–U+24E9 (lower)
const circledMap = buildMap(0x24b6, 0x24d0);

// Squared (positive): U+1F130–U+1F149 — uppercase only, lowercase maps to same
const squaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const cp = String.fromCodePoint(0x1f130 + i);
  squaredMap[String.fromCharCode(65 + i)] = cp;
  squaredMap[String.fromCharCode(97 + i)] = cp;
}

// Small Caps (manual — not every letter has a distinct Unicode small-cap form)
const smallCapsMap: Record<string, string> = {
  A: "\u1D00", B: "\u0299", C: "\u1D04", D: "\u1D05", E: "\u1D07", F: "\uA730",
  G: "\u0262", H: "\u029C", I: "\u026A", J: "\u1D0A", K: "\u1D0B", L: "\u029F",
  M: "\u1D0D", N: "\u0274", O: "\u1D0F", P: "\u1D18", Q: "Q", R: "\u0280",
  S: "\uA731", T: "\u1D1B", U: "\u1D1C", V: "\u1D20", W: "\u1D21", X: "x",
  Y: "\u028F", Z: "\u1D22",
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07", f: "\uA730",
  g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A", k: "\u1D0B", l: "\u029F",
  m: "\u1D0D", n: "\u0274", o: "\u1D0F", p: "\u1D18", q: "q", r: "\u0280",
  s: "\uA731", t: "\u1D1B", u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x",
  y: "\u028F", z: "\u1D22",
};

// Italic: U+1D434–U+1D44D (upper), U+1D44E–U+1D467 (lower)
// Lowercase h falls back to U+210E (Planck constant)
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Script: U+1D49C–U+1D4B5 (upper), U+1D4B6–U+1D4CF (lower)
// Known gaps filled from Letterlike Symbols block
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131",
  H: "\u210B", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Fraktur: U+1D504–U+1D51D (upper), U+1D51E–U+1D537 (lower)
// Known gaps filled from Black-Letter codepoints
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Double-Struck: U+1D538–U+1D551 (upper), U+1D552–U+1D56B (lower)
// Known uppercase gaps from Letterlike Symbols block
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// ── 13 Verified TikTok Unicode Styles ─────────────────────────────────────

export const tiktokUnicodeStyles: FontStyle[] = [
  { name: "Bold", transform: (t) => applyMaps(t, boldMap, boldDigitMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Sans-Serif Bold", transform: (t) => applyMaps(t, sansSerifBoldMap, sansSerifBoldDigitMap) },
  { name: "Fullwidth", transform: (t) => applyMaps(t, fullwidthMap, fullwidthDigitMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Squared", transform: (t) => applyMap(t, squaredMap) },
  { name: "Small Caps", transform: (t) => applyMap(t, smallCapsMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Double-Struck", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
];

// ── Field-Based Category Cards ──────────────────────────────────────────────

export const tiktokFontCategories: FontCategory[] = [
  {
    name: "Display Name Fonts",
    maxLength: 30,
    maxLengthLabel: "Display Name",
    initialVisibleStyles: 6,
    styles: tiktokUnicodeStyles,
  },
  {
    name: "Bio Fonts",
    maxLength: 80,
    maxLengthLabel: "Bio",
    initialVisibleStyles: 6,
    styles: tiktokUnicodeStyles,
  },
  {
    name: "Caption Fonts",
    maxLength: 2200,
    maxLengthLabel: "Caption",
    initialVisibleStyles: 6,
    styles: tiktokUnicodeStyles,
  },
  {
    name: "Comment Fonts",
    maxLength: 150,
    maxLengthLabel: "Comment",
    initialVisibleStyles: 6,
    styles: tiktokUnicodeStyles,
  },
];

// ── Symbols (New Discoveries + Religious, grouped by Aesthetic Group) ────────

export const TIKTOK_SYMBOL_GROUPS: { name: string; symbols: string[] }[] = [
  {
    name: "Botanical and Vine",
    symbols: [
      "🙐", "🙑", "🙒", "🙓", "🙔", "🙕", "🙖", "🙗",
      "🙘", "🙙", "🙚", "🙛", "🙜", "🙝", "🙞", "🙟",
      "🙠", "🙡", "🙢", "🙣", "🙤", "🙥", "🙦", "🙧",
      "🙰", "🙱", "🙲", "🙳", "🙴", "🙵",
    ],
  },
  {
    name: "Mystical and Alchemical",
    symbols: ["🜀", "🜁", "🜚", "🜥", "🝬"],
  },
  {
    name: "Geometric and Minimal",
    symbols: [
      "🙨", "🙩", "🙪", "🙫", "🙶", "🙷", "🙸", "🙹",
      "🙺", "🙻", "🙼", "🙽", "⭑", "⭒", "⭕", "⬤",
      "⬛", "⬜", "🞄", "🞊", "◊", "◇", "△",
    ],
  },
  {
    name: "Tech and Y2K",
    symbols: ["🙬", "🙭", "🙮", "🙯", "🙾", "🙿", "⌘", "⎕", "⎈", "🂠"],
  },
  {
    name: "Classic and Religious",
    symbols: ["✡", "☧", "☨", "✙", "✛"],
  },
];
