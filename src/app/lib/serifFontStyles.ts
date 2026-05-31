// ---------------------------------------------------------------------------
// Serif Font Style Definitions — EXCLUSIVE to /serif-fonts page
// Categories and styles will be populated with user-provided content.
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

function wrap(text: string, left: string, right: string): string {
  return `${left} ${text} ${right}`;
}

function separateWords(text: string, sep: string): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return `${sep} ${text} ${sep}`;
  return words.join(` ${sep} `);
}

function applyAndWrap(text: string, map: Record<string, string>, left: string, right: string): string {
  return wrap(apply(text, map), left, right);
}

function applyAndSeparate(text: string, map: Record<string, string>, sep: string): string {
  return separateWords(apply(text, map), sep);
}

// ── Character Maps ─────────────────────────────────────────────────────────
// Placeholder: will be populated with user-provided unicode character maps

// Bold: U+1D400 / U+1D41A, digits U+1D7CE
const boldMap = { ...buildMap(0x1d400, 0x1d41a), ...buildDigitMap(0x1d7ce) };
// Italic: U+1D434 / U+1D44E (h=U+210E)
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });
// Bold Italic: U+1D468 / U+1D482
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// ── Serif Font Categories ──────────────────────────────────────────────────
// Placeholder categories — will be replaced with user-provided content

export const serifFontCategories: FontCategory[] = [
  {
    name: "Classic Serif",
    styles: [
      { name: "Bold Serif", transform: (t) => apply(t, boldMap) },
      { name: "Italic Serif", transform: (t) => apply(t, italicMap) },
      { name: "Bold Italic Serif", transform: (t) => apply(t, boldItalicMap) },
    ],
  },
];

// Suppress lint warnings for helpers that will be used once categories are populated
void withCombining;
void wrap;
void separateWords;
void applyAndWrap;
void applyAndSeparate;
