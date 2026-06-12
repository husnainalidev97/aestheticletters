// ---------------------------------------------------------------------------
// Serif Font Style Definitions — EXCLUSIVE to /serif-fonts page
// 7 Unicode categories (15 copy-paste styles) + 8 Google Font categories (34 fonts)
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

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
  return [...text].map((c) => (c === " " ? c : c + mark)).join("");
}

// ── Unicode Character Maps ─────────────────────────────────────────────────

// Bold Serif — U+1D400/U+1D41A, digits U+1D7CE
const boldSerifMap = { ...buildMap(0x1d400, 0x1d41a), ...buildDigitMap(0x1d7ce) };

// Italic Serif — U+1D434/U+1D44E (h=U+210E)
const italicSerifMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Bold Italic Serif — U+1D468/U+1D482
const boldItalicSerifMap = buildMap(0x1d468, 0x1d482);

// Script Serif — U+1D49C/U+1D4B6 with exceptions
const scriptSerifMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Bold Script Serif — U+1D4D0/U+1D4EA
const boldScriptSerifMap = buildMap(0x1d4d0, 0x1d4ea);

// Double Struck — U+1D538/U+1D552 with exceptions, digits U+1D7D8
const doubleStruckMap = {
  ...buildMap(0x1d538, 0x1d552, {
    C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
    Q: "\u211A", R: "\u211D", Z: "\u2124",
  }),
  ...buildDigitMap(0x1d7d8),
};

// Fraktur — U+1D504/U+1D51E with exceptions
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Bold Fraktur — U+1D56C/U+1D586
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Small Caps — individual lookup
const smallCapsLookup: Record<string, string> = {
  A: "\u1D00", B: "\u0299", C: "\u1D04", D: "\u1D05", E: "\u1D07",
  F: "\uA730", G: "\u0262", H: "\u029C", I: "\u026A", J: "\u1D0A",
  K: "\u1D0B", L: "\u029F", M: "\u1D0D", N: "\u0274", O: "\u1D0F",
  P: "\u1D18", Q: "Q", R: "\u0280", S: "\uA731", T: "\u1D1B",
  U: "\u1D1C", V: "\u1D20", W: "\u1D21", X: "x", Y: "\u028F", Z: "\u1D22",
};
for (let i = 0; i < 26; i++) {
  const lower = String.fromCharCode(97 + i);
  const upper = String.fromCharCode(65 + i);
  smallCapsLookup[lower] = smallCapsLookup[upper];
}

// Wide Serif — fullwidth U+FF21/U+FF41, digits U+FF10
const wideSerifMap = { ...buildMap(0xff21, 0xff41), ...buildDigitMap(0xff10) };

// Circled — U+24B6/U+24D0, digits special
const circledMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  circledMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x24b6 + i);
  circledMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x24d0 + i);
}
circledMap["0"] = "\u24EA";
for (let i = 1; i <= 9; i++) {
  circledMap[String(i)] = String.fromCodePoint(0x2460 + i - 1);
}

// Negative Circled — U+1F150, uppercase only
const negativeCircledMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const ch = String.fromCodePoint(0x1f150 + i);
  negativeCircledMap[String.fromCharCode(65 + i)] = ch;
  negativeCircledMap[String.fromCharCode(97 + i)] = ch;
}

// Squared — U+1F130, uppercase only
const squaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const ch = String.fromCodePoint(0x1f130 + i);
  squaredMap[String.fromCharCode(65 + i)] = ch;
  squaredMap[String.fromCharCode(97 + i)] = ch;
}

// ── Unicode Serif Categories (15 copy-paste styles) ────────────────────────

export const serifUnicodeCategories: FontCategory[] = [
  {
    name: "Classic Serif",
    styles: [
      { name: "Bold Serif", transform: (t) => apply(t, boldSerifMap) },
      { name: "Italic Serif", transform: (t) => apply(t, italicSerifMap) },
      { name: "Bold Italic Serif", transform: (t) => apply(t, boldItalicSerifMap) },
    ],
  },
  {
    name: "Elegant & Cursive",
    styles: [
      { name: "Script Serif", transform: (t) => apply(t, scriptSerifMap) },
      { name: "Bold Script Serif", transform: (t) => apply(t, boldScriptSerifMap) },
    ],
  },
  {
    name: "Gothic Serif",
    styles: [
      { name: "Fraktur", transform: (t) => apply(t, frakturMap) },
      { name: "Bold Fraktur", transform: (t) => apply(t, boldFrakturMap) },
    ],
  },
  {
    name: "Double Struck",
    styles: [
      { name: "Double Struck", transform: (t) => apply(t, doubleStruckMap) },
    ],
  },
  {
    name: "Small Caps",
    styles: [
      { name: "Small Caps", transform: (t) => apply(t, smallCapsLookup) },
      { name: "Wide Serif", transform: (t) => apply(t, wideSerifMap) },
    ],
  },
  {
    name: "Strikethrough Styles",
    styles: [
      { name: "Bold Serif Underline", transform: (t) => withCombining(apply(t, boldSerifMap), "\u0332") },
      { name: "Italic Serif Strikethrough", transform: (t) => withCombining(apply(t, italicSerifMap), "\u0336") },
    ],
  },
  {
    name: "Boxed & Circled",
    styles: [
      { name: "Circled", transform: (t) => apply(t, circledMap) },
      { name: "Negative Circled", transform: (t) => apply(t, negativeCircledMap) },
      { name: "Squared", transform: (t) => apply(t, squaredMap) },
    ],
  },
];

// ── Google Font Categories (34 serif fonts) ────────────────────────────────

export const serifFontCategories: FontCategory[] = [
  {
    name: "Transitional",
    styles: [
      { name: "Lora", transform: (t) => t, fontFamily: "'Lora', serif" },
      { name: "Libre Baskerville", transform: (t) => t, fontFamily: "'Libre Baskerville', serif" },
      { name: "Merriweather", transform: (t) => t, fontFamily: "'Merriweather', serif" },
      { name: "Source Serif 4", transform: (t) => t, fontFamily: "'Source Serif 4', serif" },
      { name: "Crimson Pro", transform: (t) => t, fontFamily: "'Crimson Pro', serif" },
    ],
  },
  {
    name: "Old Style",
    styles: [
      { name: "EB Garamond", transform: (t) => t, fontFamily: "'EB Garamond', serif" },
      { name: "Cormorant Garamond", transform: (t) => t, fontFamily: "'Cormorant Garamond', serif" },
      { name: "Cardo", transform: (t) => t, fontFamily: "'Cardo', serif" },
      { name: "Fraunces", transform: (t) => t, fontFamily: "'Fraunces', serif" },
      { name: "Spectral", transform: (t) => t, fontFamily: "'Spectral', serif" },
    ],
  },
  {
    name: "Slab",
    styles: [
      { name: "Roboto Slab", transform: (t) => t, fontFamily: "'Roboto Slab', serif" },
      { name: "Bitter", transform: (t) => t, fontFamily: "'Bitter', serif" },
      { name: "Zilla Slab", transform: (t) => t, fontFamily: "'Zilla Slab', serif" },
      { name: "Crete Round", transform: (t) => t, fontFamily: "'Crete Round', serif" },
      { name: "Josefin Slab", transform: (t) => t, fontFamily: "'Josefin Slab', serif" },
    ],
  },
  {
    name: "Modern",
    styles: [
      { name: "Old Standard TT", transform: (t) => t, fontFamily: "'Old Standard TT', serif" },
      { name: "GFS Didot", transform: (t) => t, fontFamily: "'GFS Didot', serif" },
      { name: "Oranienbaum", transform: (t) => t, fontFamily: "'Oranienbaum', serif" },
      { name: "Italiana", transform: (t) => t, fontFamily: "'Italiana', serif" },
    ],
  },
  {
    name: "Humanist",
    styles: [
      { name: "Faustina", transform: (t) => t, fontFamily: "'Faustina', serif" },
      { name: "Noto Serif", transform: (t) => t, fontFamily: "'Noto Serif', serif" },
      { name: "Gentium Plus", transform: (t) => t, fontFamily: "'Gentium Plus', serif" },
      { name: "Tinos", transform: (t) => t, fontFamily: "'Tinos', serif" },
    ],
  },
  {
    name: "Scotch",
    styles: [
      { name: "Bodoni Moda", transform: (t) => t, fontFamily: "'Bodoni Moda', serif" },
      { name: "DM Serif Display", transform: (t) => t, fontFamily: "'DM Serif Display', serif" },
      { name: "DM Serif Text", transform: (t) => t, fontFamily: "'DM Serif Text', serif" },
    ],
  },
  {
    name: "Didone",
    styles: [
      { name: "Playfair Display", transform: (t) => t, fontFamily: "'Playfair Display', serif" },
      { name: "Cormorant", transform: (t) => t, fontFamily: "'Cormorant', serif" },
      { name: "Gloock", transform: (t) => t, fontFamily: "'Gloock', serif" },
      { name: "Yeseva One", transform: (t) => t, fontFamily: "'Yeseva One', serif" },
    ],
  },
  {
    name: "Fatface",
    styles: [
      { name: "Abril Fatface", transform: (t) => t, fontFamily: "'Abril Fatface', serif" },
      { name: "Rozha One", transform: (t) => t, fontFamily: "'Rozha One', serif" },
      { name: "Righteous", transform: (t) => t, fontFamily: "'Righteous', serif" },
      { name: "Ultra", transform: (t) => t, fontFamily: "'Ultra', serif" },
    ],
  },
];
