// ---------------------------------------------------------------------------
// Preppy Font Generator — 5 aesthetic buckets, 23 style cards
// Mapping derived from Preppy_Fonts_Card_Mapping.xlsx
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

/** Join each character of every word with a separator (spaces preserved). */
function joinChars(text: string, sep: string): string {
  return text
    .split(" ")
    .map((word) => [...word].join(sep))
    .join(" ");
}

/** Wrap styled text with an emoji on both sides. */
function wrap(emoji: string, inner: string): string {
  return `${emoji} ${inner} ${emoji}`;
}

// ── Character Maps ──────────────────────────────────────────────────────────

// Bold Serif: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldSerifMap = buildMap(0x1d400, 0x1d41a);
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// Italic Serif: U+1D434 (upper), U+1D44E (lower); lowercase h borrows U+210E
const italicSerifMap = buildMap(0x1d434, 0x1d44e, { h: "\u210e" });

// Bold Italic Serif: U+1D468 (upper), U+1D482 (lower)
const boldItalicSerifMap = buildMap(0x1d468, 0x1d482);

// Bold Sans-Serif: U+1D5D4 (upper), U+1D5EE (lower)
const boldSansMap = buildMap(0x1d5d4, 0x1d5ee);
const boldSansDigitMap = buildDigitMap(0x1d7ec);

// Sans-Serif Italic: U+1D608 (upper), U+1D622 (lower)
const sansItalicMap = buildMap(0x1d608, 0x1d622);

// Bold Script: U+1D4D0 (upper), U+1D4EA (lower)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Cursive/Mathematical Script: U+1D49C (upper), U+1D4B6 (lower)
// 11 letters borrow from the Letterlike Symbols block.
const cursiveScriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212c", E: "\u2130", F: "\u2131", H: "\u210b", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211b",
  e: "\u212f", g: "\u210a", o: "\u2134",
});

// Monospace: U+1D670 (upper), U+1D68A (lower)
const monospaceMap = buildMap(0x1d670, 0x1d68a);
const monospaceDigitMap = buildDigitMap(0x1d7f6);

// Double-Struck: U+1D538 (upper, 7 exceptions), U+1D552 (lower)
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210d", N: "\u2115", P: "\u2119",
  Q: "\u211a", R: "\u211d", Z: "\u2124",
});
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// Small Caps (Q and X have no true small-cap glyph — fall back to lowercase)
const smallCapsMap: Record<string, string> = {
  A: "\u1d00", B: "\u0299", C: "\u1d04", D: "\u1d05", E: "\u1d07", F: "\ua730",
  G: "\u0262", H: "\u029c", I: "\u026a", J: "\u1d0a", K: "\u1d0b", L: "\u029f",
  M: "\u1d0d", N: "\u0274", O: "\u1d0f", P: "\u1d18", Q: "q", R: "\u0280",
  S: "\ua731", T: "\u1d1b", U: "\u1d1c", V: "\u1d20", W: "\u1d21", X: "x",
  Y: "\u028f", Z: "\u1d22",
  a: "\u1d00", b: "\u0299", c: "\u1d04", d: "\u1d05", e: "\u1d07", f: "\ua730",
  g: "\u0262", h: "\u029c", i: "\u026a", j: "\u1d0a", k: "\u1d0b", l: "\u029f",
  m: "\u1d0d", n: "\u0274", o: "\u1d0f", p: "\u1d18", q: "q", r: "\u0280",
  s: "\ua731", t: "\u1d1b", u: "\u1d1c", v: "\u1d20", w: "\u1d21", x: "x",
  y: "\u028f", z: "\u1d22",
};

// Circled (Enclosed Alphanumerics): U+24B6 (upper), U+24D0 (lower)
const circleMap = buildMap(0x24b6, 0x24d0);
const circledDigitMap: Record<string, string> = { "0": "\u24ea" };
for (let i = 1; i <= 9; i++) {
  circledDigitMap[String(i)] = String.fromCodePoint(0x2460 + (i - 1));
}

// Fullwidth Latin: U+FF21 (upper), U+FF41 (lower), U+FF10 (digits)
const fullwidthMap: Record<string, string> = { " ": "\u3000" };
for (let i = 0; i < 26; i++) {
  fullwidthMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0xff21 + i);
  fullwidthMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0xff41 + i);
}
for (let i = 0; i < 10; i++) {
  fullwidthMap[String(i)] = String.fromCodePoint(0xff10 + i);
}

// Squared Latin: U+1F130 (uppercase only — no lowercase exists in Unicode)
const squaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const glyph = String.fromCodePoint(0x1f130 + i);
  squaredMap[String.fromCharCode(65 + i)] = glyph;
  squaredMap[String.fromCharCode(97 + i)] = glyph;
}

// ── Style Transforms ──────────────────────────────────────────────────────

const boldSerif = (t: string) => applyMaps(t, boldSerifMap, boldSerifDigitMap);
const boldSans = (t: string) => applyMaps(t, boldSansMap, boldSansDigitMap);
const monospace = (t: string) => applyMaps(t, monospaceMap, monospaceDigitMap);
const circled = (t: string) => applyMaps(t, circleMap, circledDigitMap);
const smallCaps = (t: string) => applyMap(t, smallCapsMap);
const cursiveScript = (t: string) => applyMap(t, cursiveScriptMap);

// ── Category Cards ──────────────────────────────────────────────────────────

const oldMoney: FontCategory = {
  name: "Old Money / Classic Preppy",
  styles: [
    { name: "Country Club Bold", transform: (t) => wrap("\u26f3", boldSerif(t)) },
    { name: "Yacht Club Italic", transform: (t) => wrap("\u26f5", applyMap(t, italicSerifMap)) },
    { name: "Heritage Bold Italic", transform: (t) => wrap("\uD83C\uDFBE", applyMap(t, boldItalicSerifMap)) },
    { name: "Regatta Bold", transform: (t) => wrap("\uD83E\uDD42", boldSerif(t)) },
    { name: "Monogram Caps", transform: (t) => joinChars(smallCaps(t), "\u00b7") },
  ],
};

const coquette: FontCategory = {
  name: "Coquette / Soft Girl",
  styles: [
    { name: "Ballet Script", transform: (t) => wrap("\uD83C\uDF80", cursiveScript(t)) },
    { name: "Lace Bold Script", transform: (t) => wrap("\uD83E\uDE70", applyMap(t, boldScriptMap)) },
    { name: "Rosette Circle", transform: (t) => wrap("\uD83E\uDD0D", circled(t)) },
    { name: "Charm Bubble", transform: (t) => wrap("\uD83E\uDE77", circled(t)) },
    { name: "Whisper Joiner", transform: (t) => joinChars(cursiveScript(t), " ") },
  ],
};

const cleanGirl: FontCategory = {
  name: "Clean Girl Aesthetic",
  styles: [
    { name: "Slick Sans", transform: (t) => boldSans(t) },
    { name: "Quiet Caps", transform: (t) => smallCaps(t) },
    { name: "Minimal Mono", transform: (t) => monospace(t) },
    { name: "Soft Sans Italic", transform: (t) => applyMap(t, sansItalicMap) },
  ],
};

const starGirl: FontCategory = {
  name: "Star Girl Aesthetic",
  styles: [
    { name: "Bubble Pop", transform: (t) => wrap("\u26a1", circled(t)) },
    { name: "Cosmic Bubble", transform: (t) => wrap("\u2b50", circled(t)) },
    { name: "Retro Wide", transform: (t) => wrap("\u2728", applyMap(t, fullwidthMap)) },
    { name: "Chrome Block", transform: (t) => wrap("\uD83D\uDC06", applyMap(t, squaredMap)) },
    { name: "Chrome Outline", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
  ],
};

const forGuys: FontCategory = {
  name: "Preppy Fonts for Guys",
  styles: [
    { name: "Varsity Bold", transform: (t) => wrap("\uD83C\uDFC9", boldSans(t)) },
    { name: "Captain Serif", transform: (t) => wrap("\u2693", boldSerif(t)) },
    { name: "Team Caps", transform: (t) => wrap("\uD83E\uDDE2", smallCaps(t)) },
    { name: "Locker Room Mono", transform: (t) => joinChars(monospace(t), "-") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const preppyFontCategories: FontCategory[] = [
  oldMoney,
  coquette,
  cleanGirl,
  starGirl,
  forGuys,
];
