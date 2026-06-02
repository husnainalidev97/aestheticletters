// ---------------------------------------------------------------------------
// Sans-Serif Font Style Definitions — EXCLUSIVE to /sans-serif-fonts page
// 7 Unicode categories (15 copy-paste styles) + 8 Google Font categories (34 fonts)
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// -- Helpers ----------------------------------------------------------------

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

// -- Unicode Character Maps -------------------------------------------------

// Sans-Serif — U+1D5A0/U+1D5BA, digits U+1D7E2
const sansSerifMap = { ...buildMap(0x1d5a0, 0x1d5ba), ...buildDigitMap(0x1d7e2) };

// Bold Sans-Serif — U+1D5D4/U+1D5EE, digits U+1D7EC
const boldSansSerifMap = { ...buildMap(0x1d5d4, 0x1d5ee), ...buildDigitMap(0x1d7ec) };

// Italic Sans-Serif — U+1D608/U+1D622
const italicSansSerifMap = buildMap(0x1d608, 0x1d622);

// Bold Italic Sans-Serif — U+1D63C/U+1D656
const boldItalicSansSerifMap = buildMap(0x1d63c, 0x1d656);

// Script — U+1D49C/U+1D4B6 with exceptions
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Bold Script — U+1D4D0/U+1D4EA
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Double Struck — U+1D538/U+1D552 with exceptions, digits U+1D7D8
const doubleStruckMap = {
  ...buildMap(0x1d538, 0x1d552, {
    C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
    Q: "\u211A", R: "\u211D", Z: "\u2124",
  }),
  ...buildDigitMap(0x1d7d8),
};

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

// Wide — fullwidth U+FF21/U+FF41, digits U+FF10
const wideMap = { ...buildMap(0xff21, 0xff41), ...buildDigitMap(0xff10) };

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

// -- Unicode Sans-Serif Categories (15 copy-paste styles) -------------------

export const sansSerifUnicodeCategories: FontCategory[] = [
  {
    name: "Clean Sans-Serif",
    styles: [
      { name: "Sans-Serif", transform: (t) => apply(t, sansSerifMap) },
      { name: "Bold Sans-Serif", transform: (t) => apply(t, boldSansSerifMap) },
      { name: "Italic Sans-Serif", transform: (t) => apply(t, italicSansSerifMap) },
      { name: "Bold Italic Sans-Serif", transform: (t) => apply(t, boldItalicSansSerifMap) },
    ],
  },
  {
    name: "Script & Calligraphy",
    styles: [
      { name: "Script", transform: (t) => apply(t, scriptMap) },
      { name: "Bold Script", transform: (t) => apply(t, boldScriptMap) },
    ],
  },
  {
    name: "Mathematical & Double Struck",
    styles: [
      { name: "Double Struck", transform: (t) => apply(t, doubleStruckMap) },
    ],
  },
  {
    name: "Small Caps & Width",
    styles: [
      { name: "Small Caps", transform: (t) => apply(t, smallCapsLookup) },
      { name: "Wide Text", transform: (t) => apply(t, wideMap) },
    ],
  },
  {
    name: "Underline & Strikethrough",
    styles: [
      { name: "Bold Sans Underline", transform: (t) => withCombining(apply(t, boldSansSerifMap), "\u0332") },
      { name: "Italic Sans Strikethrough", transform: (t) => withCombining(apply(t, italicSansSerifMap), "\u0336") },
    ],
  },
  {
    name: "Enclosed & Shaped",
    styles: [
      { name: "Circled", transform: (t) => apply(t, circledMap) },
      { name: "Negative Circled", transform: (t) => apply(t, negativeCircledMap) },
      { name: "Squared", transform: (t) => apply(t, squaredMap) },
    ],
  },
];

// -- Google Font Categories (34 sans-serif fonts) ---------------------------

export const sansSerifFontCategories: FontCategory[] = [
  {
    name: "Geometric",
    styles: [
      { name: "Poppins", transform: (t) => t, fontFamily: "'Poppins', sans-serif" },
      { name: "Montserrat", transform: (t) => t, fontFamily: "'Montserrat', sans-serif" },
      { name: "Raleway", transform: (t) => t, fontFamily: "'Raleway', sans-serif" },
      { name: "Comfortaa", transform: (t) => t, fontFamily: "'Comfortaa', sans-serif" },
      { name: "Josefin Sans", transform: (t) => t, fontFamily: "'Josefin Sans', sans-serif" },
    ],
  },
  {
    name: "Grotesque",
    styles: [
      { name: "Roboto", transform: (t) => t, fontFamily: "'Roboto', sans-serif" },
      { name: "Open Sans", transform: (t) => t, fontFamily: "'Open Sans', sans-serif" },
      { name: "Lato", transform: (t) => t, fontFamily: "'Lato', sans-serif" },
      { name: "Inter", transform: (t) => t, fontFamily: "'Inter', sans-serif" },
    ],
  },
  {
    name: "Humanist",
    styles: [
      { name: "Nunito", transform: (t) => t, fontFamily: "'Nunito', sans-serif" },
      { name: "Source Sans 3", transform: (t) => t, fontFamily: "'Source Sans 3', sans-serif" },
      { name: "PT Sans", transform: (t) => t, fontFamily: "'PT Sans', sans-serif" },
      { name: "Cabin", transform: (t) => t, fontFamily: "'Cabin', sans-serif" },
    ],
  },
  {
    name: "Neo-Grotesque",
    styles: [
      { name: "DM Sans", transform: (t) => t, fontFamily: "'DM Sans', sans-serif" },
      { name: "Work Sans", transform: (t) => t, fontFamily: "'Work Sans', sans-serif" },
      { name: "Barlow", transform: (t) => t, fontFamily: "'Barlow', sans-serif" },
      { name: "Outfit", transform: (t) => t, fontFamily: "'Outfit', sans-serif" },
      { name: "Manrope", transform: (t) => t, fontFamily: "'Manrope', sans-serif" },
    ],
  },
  {
    name: "Rounded",
    styles: [
      { name: "Quicksand", transform: (t) => t, fontFamily: "'Quicksand', sans-serif" },
      { name: "Varela Round", transform: (t) => t, fontFamily: "'Varela Round', sans-serif" },
      { name: "Rubik", transform: (t) => t, fontFamily: "'Rubik', sans-serif" },
      { name: "Nunito Sans", transform: (t) => t, fontFamily: "'Nunito Sans', sans-serif" },
    ],
  },
  {
    name: "Display",
    styles: [
      { name: "Oswald", transform: (t) => t, fontFamily: "'Oswald', sans-serif" },
      { name: "Bebas Neue", transform: (t) => t, fontFamily: "'Bebas Neue', sans-serif" },
      { name: "Anton", transform: (t) => t, fontFamily: "'Anton', sans-serif" },
      { name: "Kanit", transform: (t) => t, fontFamily: "'Kanit', sans-serif" },
    ],
  },
  {
    name: "Minimalist",
    styles: [
      { name: "IBM Plex Sans", transform: (t) => t, fontFamily: "'IBM Plex Sans', sans-serif" },
      { name: "Figtree", transform: (t) => t, fontFamily: "'Figtree', sans-serif" },
      { name: "Albert Sans", transform: (t) => t, fontFamily: "'Albert Sans', sans-serif" },
      { name: "Sora", transform: (t) => t, fontFamily: "'Sora', sans-serif" },
    ],
  },
  {
    name: "Condensed",
    styles: [
      { name: "Roboto Condensed", transform: (t) => t, fontFamily: "'Roboto Condensed', sans-serif" },
      { name: "Barlow Condensed", transform: (t) => t, fontFamily: "'Barlow Condensed', sans-serif" },
      { name: "Saira Condensed", transform: (t) => t, fontFamily: "'Saira Condensed', sans-serif" },
      { name: "Pathway Gothic One", transform: (t) => t, fontFamily: "'Pathway Gothic One', sans-serif" },
    ],
  },
];
