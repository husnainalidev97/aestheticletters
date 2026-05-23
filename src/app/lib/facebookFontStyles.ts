// ---------------------------------------------------------------------------
// Facebook Font Style Definitions — EXCLUSIVE to /facebook-fonts page
// 5 text-transform categories + 1 symbols card (handled separately)
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Generic Helpers ────────────────────────────────────────────────────────

function buildMap(
  upperStart: number,
  lowerStart: number,
  exc?: Record<string, string>,
): Record<string, string> {
  const m: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    m[String.fromCharCode(65 + i)] = String.fromCodePoint(upperStart + i);
    m[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }
  if (exc) Object.assign(m, exc);
  return m;
}

function buildDigitMap(start: number): Record<string, string> {
  const m: Record<string, string> = {};
  for (let i = 0; i < 10; i++) {
    m[String(i)] = String.fromCodePoint(start + i);
  }
  return m;
}

function apply(text: string, map: Record<string, string>): string {
  return [...text].map((c) => map[c] ?? c).join("");
}

function withCombining(text: string, mark: string): string {
  return [...text].map((c) => c + mark).join("");
}

// ── Character Maps ─────────────────────────────────────────────────────────

// Bold: U+1D400 / U+1D41A, digits U+1D7CE
const BOLD = buildMap(0x1d400, 0x1d41a);
const BOLD_DIGITS = buildDigitMap(0x1d7ce);

// Italic: U+1D434 / U+1D44E, h exception
const ITALIC = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Bold Italic: U+1D468 / U+1D482
const BOLD_ITALIC = buildMap(0x1d468, 0x1d482);

// Sans-Serif Bold: U+1D5D4 / U+1D5EE, digits U+1D7EC
const SS_BOLD = buildMap(0x1d5d4, 0x1d5ee);
const SS_BOLD_DIGITS = buildDigitMap(0x1d7ec);

// Sans-Serif Bold Italic: U+1D63C / U+1D656
const SS_BOLD_ITALIC = buildMap(0x1d63c, 0x1d656);

// Sans-Serif Italic: U+1D608 / U+1D622
const SS_ITALIC = buildMap(0x1d608, 0x1d622);

// Double-Struck: U+1D538 / U+1D552 with exceptions, digits U+1D7D8
const DOUBLE_STRUCK = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115",
  P: "\u2119", Q: "\u211A", R: "\u211D", Z: "\u2124",
});
const DOUBLE_STRUCK_DIGITS = buildDigitMap(0x1d7d8);

// Bubble White: U+24B6 / U+24D0
const BUBBLE_WHITE: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  BUBBLE_WHITE[String.fromCharCode(65 + i)] = String.fromCodePoint(0x24b6 + i);
  BUBBLE_WHITE[String.fromCharCode(97 + i)] = String.fromCodePoint(0x24d0 + i);
}
BUBBLE_WHITE["0"] = "\u24EA";
for (let i = 1; i <= 9; i++) {
  BUBBLE_WHITE[String(i)] = String.fromCodePoint(0x245f + i);
}

// Bubble Black: U+1F150 uppercase, lowercase falls back to Bubble White
const BUBBLE_BLACK: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  BUBBLE_BLACK[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f150 + i);
  BUBBLE_BLACK[String.fromCharCode(97 + i)] = String.fromCodePoint(0x24d0 + i);
}

// Square Black: U+1F170 uppercase
const SQUARE_BLACK: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  SQUARE_BLACK[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f170 + i);
}

// Square White: U+1F130 uppercase
const SQUARE_WHITE: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  SQUARE_WHITE[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f130 + i);
}

// Gothic / Fraktur
const GOTHIC = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111",
  R: "\u211C", Z: "\u2128",
});

// Cursive Script (Math Script)
const CURSIVE_SCRIPT = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Bold Cursive Script: U+1D4D0 / U+1D4EA
const BOLD_CURSIVE = buildMap(0x1d4d0, 0x1d4ea);

// Small Caps
const SMALL_CAPS: Record<string, string> = {
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05",
  e: "\u1D07", f: "\uA730", g: "\u0262", h: "\u029C",
  i: "\u026A", j: "\u1D0A", k: "\u1D0B", l: "\u029F",
  m: "\u1D0D", n: "\u0274", o: "\u1D0F", p: "\u1D18",
  r: "\u0280", s: "\uA731", t: "\u1D1B", u: "\u1D1C",
  v: "\u1D20", w: "\u1D21", y: "\u028F", z: "\u1D22",
};

// Monospace: U+1D670 / U+1D68A, digits U+1D7F6
const MONOSPACE = buildMap(0x1d670, 0x1d68a);
const MONOSPACE_DIGITS = buildDigitMap(0x1d7f6);

// Fullwidth: U+FF21 / U+FF41, digits U+FF10
const FULLWIDTH: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  FULLWIDTH[String.fromCharCode(65 + i)] = String.fromCodePoint(0xff21 + i);
  FULLWIDTH[String.fromCharCode(97 + i)] = String.fromCodePoint(0xff41 + i);
}
for (let i = 0; i < 10; i++) {
  FULLWIDTH[String(i)] = String.fromCodePoint(0xff10 + i);
}
FULLWIDTH[" "] = "\u3000";

// Small Text (Superscript)
const SUPERSCRIPT: Record<string, string> = {
  a: "\u1D43", b: "\u1D47", c: "\u1D9C", d: "\u1D48",
  e: "\u1D49", f: "\u1DA0", g: "\u1D4D", h: "\u02B0",
  i: "\u2071", j: "\u02B2", k: "\u1D4F", l: "\u02E1",
  m: "\u1D50", n: "\u207F", o: "\u1D52", p: "\u1D56",
  r: "\u02B3", s: "\u02E2", t: "\u1D57", u: "\u1D58",
  v: "\u1D5B", w: "\u02B7", x: "\u02E3", y: "\u02B8",
  z: "\u1DBB",
  "0": "\u2070", "1": "\u00B9", "2": "\u00B2", "3": "\u00B3",
  "4": "\u2074", "5": "\u2075", "6": "\u2076", "7": "\u2077",
  "8": "\u2078", "9": "\u2079",
};

// Bold Gothic (Bold Fraktur): U+1D56C / U+1D586
const BOLD_GOTHIC = buildMap(0x1d56c, 0x1d586);

// Upside Down maps
const UPSIDE_DOWN_LOWER: Record<string, string> = {
  a: "\u0250", b: "q", c: "\u0254", d: "p", e: "\u01DD",
  f: "\u025F", g: "\u0183", h: "\u0265", i: "\u1D09",
  j: "\u027E", k: "\u029E", l: "l", m: "\u026F", n: "u",
  o: "o", p: "d", q: "b", r: "\u0279", s: "s", t: "\u0287",
  u: "n", v: "\u028C", w: "\u028D", x: "x", y: "\u028E", z: "z",
};
const UPSIDE_DOWN_UPPER: Record<string, string> = {
  A: "\u2200", B: "\uD801\uDC12", C: "\u0186", D: "\u25D6",
  E: "\u018E", F: "\u2132", G: "\u05E4", H: "H", I: "I",
  J: "\u017F", K: "\u22CA", L: "\u2142", M: "W", N: "N",
  O: "O", P: "\u0500", Q: "\u038C", R: "\u1D1A", S: "S",
  T: "\u22A5", U: "\u2229", V: "\u039B", W: "M", X: "X",
  Y: "\u2144", Z: "Z",
};
const UPSIDE_DOWN_DIGITS: Record<string, string> = {
  "0": "0", "1": "\u0196", "2": "\u1105", "3": "\u0190",
  "4": "\u3123", "5": "\u03DB", "6": "9", "7": "L", "8": "8", "9": "6",
};

function upsideDown(text: string): string {
  const map: Record<string, string> = {
    ...UPSIDE_DOWN_LOWER,
    ...UPSIDE_DOWN_UPPER,
    ...UPSIDE_DOWN_DIGITS,
  };
  const substituted = [...text].map((c) => map[c] ?? c);
  return substituted.reverse().join("");
}

function mirrorText(text: string): string {
  return [...text].reverse().join("");
}

function wideSpacedBold(text: string): string {
  const ssb = { ...SS_BOLD, ...SS_BOLD_DIGITS };
  const converted = [...text].map((c) => ssb[c] ?? c);
  return converted.join(" ").replace(/  +/g, "  ");
}

// ── Card 1: Fonts for Facebook Posts ───────────────────────────────────────

const postsCard: FontCategory = {
  name: "Fonts for Posts",
  styles: [
    { name: "Bold", transform: (t) => apply(t, { ...BOLD, ...BOLD_DIGITS }) },
    { name: "Italic", transform: (t) => apply(t, ITALIC) },
    { name: "Bold Italic", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Sans-Serif Bold", transform: (t) => apply(t, { ...SS_BOLD, ...SS_BOLD_DIGITS }) },
    { name: "Sans-Serif Bold Italic", transform: (t) => apply(t, SS_BOLD_ITALIC) },
    { name: "Sans-Serif Italic", transform: (t) => apply(t, SS_ITALIC) },
    { name: "Double-Struck", transform: (t) => apply(t, { ...DOUBLE_STRUCK, ...DOUBLE_STRUCK_DIGITS }) },
  ],
};

// ── Card 2: Facebook Comment Fonts ─────────────────────────────────────────

const commentCard: FontCategory = {
  name: "Comment Fonts",
  styles: [
    { name: "Bubble Text (White)", transform: (t) => apply(t, BUBBLE_WHITE) },
    { name: "Bubble Text (Black)", transform: (t) => apply(t, BUBBLE_BLACK) },
    { name: "Square Text (Black)", transform: (t) => apply(t, SQUARE_BLACK) },
    { name: "Square Text (White)", transform: (t) => apply(t, SQUARE_WHITE) },
    { name: "Strikethrough", transform: (t) => withCombining(t, "\u0336") },
    { name: "Underline", transform: (t) => withCombining(t, "\u0332") },
    { name: "Gothic", transform: (t) => apply(t, GOTHIC) },
  ],
};

// ── Card 3: Facebook Bio Fonts ─────────────────────────────────────────────

const bioCard: FontCategory = {
  name: "Bio Fonts",
  styles: [
    { name: "Cursive Script", transform: (t) => apply(t, CURSIVE_SCRIPT) },
    { name: "Bold Cursive Script", transform: (t) => apply(t, BOLD_CURSIVE) },
    { name: "Small Caps", transform: (t) => apply(t, SMALL_CAPS) },
    { name: "Italic", transform: (t) => apply(t, ITALIC) },
    { name: "Bold", transform: (t) => apply(t, { ...BOLD, ...BOLD_DIGITS }) },
    { name: "Monospace", transform: (t) => apply(t, { ...MONOSPACE, ...MONOSPACE_DIGITS }) },
  ],
};

// ── Card 4: Facebook Caption Fonts ─────────────────────────────────────────

const captionCard: FontCategory = {
  name: "Caption Fonts",
  styles: [
    { name: "Cursive Script", transform: (t) => apply(t, CURSIVE_SCRIPT) },
    { name: "Bold Italic", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Italic", transform: (t) => apply(t, ITALIC) },
    { name: "Fullwidth", transform: (t) => apply(t, FULLWIDTH) },
    { name: "Small Text", transform: (t) => apply(t, SUPERSCRIPT) },
    { name: "Sans-Serif Bold", transform: (t) => apply(t, { ...SS_BOLD, ...SS_BOLD_DIGITS }) },
  ],
};

// ── Card 5: Creative FB Fonts ──────────────────────────────────────────────

const creativeCard: FontCategory = {
  name: "Fancy FB Fonts",
  styles: [
    { name: "Bold Script", transform: (t) => apply(t, BOLD_CURSIVE) },
    { name: "Bold Gothic", transform: (t) => apply(t, BOLD_GOTHIC) },
    { name: "Outline", transform: (t) => apply(t, { ...DOUBLE_STRUCK, ...DOUBLE_STRUCK_DIGITS }) },
    { name: "Upside Down", transform: upsideDown },
    { name: "Mirror Text", transform: mirrorText },
    { name: "Monospace", transform: (t) => apply(t, { ...MONOSPACE, ...MONOSPACE_DIGITS }) },
    { name: "Wide Spaced Bold", transform: wideSpacedBold },
  ],
};

// ── Export ──────────────────────────────────────────────────────────────────

export const facebookFontCategories: FontCategory[] = [
  postsCard,
  commentCard,
  bioCard,
  captionCard,
  creativeCard,
];
