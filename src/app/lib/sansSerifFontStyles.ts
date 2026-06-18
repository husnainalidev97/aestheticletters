// ---------------------------------------------------------------------------
// Sans-Serif Font Style Definitions — EXCLUSIVE to /sans-serif-fonts page
// 2 Unicode categories (10 copy-paste styles) — all genuine sans-serif
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// -- Helpers ----------------------------------------------------------------

function buildMap(
  upperStart: number,
  lowerStart: number,
): Record<string, string> {
  const m: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    m[String.fromCharCode(65 + i)] = String.fromCodePoint(upperStart + i);
    m[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }
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

// Monospace — U+1D670/U+1D68A, digits U+1D7F6
const monospaceMap = { ...buildMap(0x1d670, 0x1d68a), ...buildDigitMap(0x1d7f6) };

// -- Unicode Sans-Serif Categories (10 copy-paste styles) -------------------

export const sansSerifUnicodeCategories: FontCategory[] = [
  {
    name: "Clean Sans-Serif",
    styles: [
      { name: "Sans-Serif", transform: (t) => apply(t, sansSerifMap) },
      { name: "Bold Sans-Serif", transform: (t) => apply(t, boldSansSerifMap) },
      { name: "Italic Sans-Serif", transform: (t) => apply(t, italicSansSerifMap) },
      { name: "Bold Italic Sans-Serif", transform: (t) => apply(t, boldItalicSansSerifMap) },
      { name: "Monospace", transform: (t) => apply(t, monospaceMap) },
    ],
  },
  {
    name: "Decorated Sans-Serif",
    styles: [
      { name: "Sans Underline", transform: (t) => withCombining(apply(t, boldSansSerifMap), "\u0332") },
      { name: "Sans Strikethrough", transform: (t) => withCombining(apply(t, italicSansSerifMap), "\u0336") },
      { name: "Sans Overline", transform: (t) => withCombining(apply(t, boldSansSerifMap), "\u0305") },
      { name: "Sans Dotted", transform: (t) => withCombining(apply(t, sansSerifMap), "\u0307") },
      { name: "Sans Wavy", transform: (t) => withCombining(apply(t, sansSerifMap), "\u0303") },
    ],
  },
];
