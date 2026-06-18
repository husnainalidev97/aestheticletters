// ---------------------------------------------------------------------------
// Sans-Serif Font Style Definitions — EXCLUSIVE to /sans-serif-fonts page
// 7 Unicode categories (22 copy-paste styles)
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

// Negative Squared — U+1F170, uppercase only
const negativeSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const ch = String.fromCodePoint(0x1f170 + i);
  negativeSquaredMap[String.fromCharCode(65 + i)] = ch;
  negativeSquaredMap[String.fromCharCode(97 + i)] = ch;
}

// Monospace — U+1D670/U+1D68A, digits U+1D7F6
const monospaceMap = { ...buildMap(0x1d670, 0x1d68a), ...buildDigitMap(0x1d7f6) };

// Parenthesized — U+249C lowercase only
const parenthesizedMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const ch = String.fromCodePoint(0x249c + i);
  parenthesizedMap[String.fromCharCode(65 + i)] = ch;
  parenthesizedMap[String.fromCharCode(97 + i)] = ch;
}

// -- Unicode Sans-Serif Categories (22 copy-paste styles) -------------------

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
    name: "Mathematical & Monospace",
    styles: [
      { name: "Double Struck", transform: (t) => apply(t, doubleStruckMap) },
      { name: "Monospace", transform: (t) => apply(t, monospaceMap) },
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
    name: "Decorated Sans",
    styles: [
      { name: "Bold Sans Underline", transform: (t) => withCombining(apply(t, boldSansSerifMap), "\u0332") },
      { name: "Italic Sans Strikethrough", transform: (t) => withCombining(apply(t, italicSansSerifMap), "\u0336") },
      { name: "Sans Overline", transform: (t) => withCombining(apply(t, boldSansSerifMap), "\u0305") },
      { name: "Sans Dotted", transform: (t) => withCombining(apply(t, sansSerifMap), "\u0307") },
      { name: "Sans Wavy", transform: (t) => withCombining(apply(t, sansSerifMap), "\u0303") },
    ],
  },
  {
    name: "Enclosed & Shaped",
    styles: [
      { name: "Circled", transform: (t) => apply(t, circledMap) },
      { name: "Negative Circled", transform: (t) => apply(t, negativeCircledMap) },
      { name: "Squared", transform: (t) => apply(t, squaredMap) },
      { name: "Negative Squared", transform: (t) => apply(t, negativeSquaredMap) },
      { name: "Parenthesized", transform: (t) => apply(t, parenthesizedMap) },
    ],
  },
];
