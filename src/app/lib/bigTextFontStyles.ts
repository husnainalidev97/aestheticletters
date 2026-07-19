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

// Base transforms — the three large font families every style builds on.
// Input is uppercased first: capital letters read as bigger, which is the
// expected look for "big text".
const fullwidthBase = (t: string) => applyMap(t.toUpperCase(), fullwidthMap);
const boldSansBase = (t: string) => applyMaps(t.toUpperCase(), boldSansMap, boldSansDigitMap);
const boldSerifBase = (t: string) => applyMaps(t.toUpperCase(), boldSerifMap, boldSerifDigitMap);

// Card 1: Fullwidth — the widest, most "banner-like" spacing.
const fullwidth: FontCategory = {
  name: "Fullwidth",
  styles: [{ name: "Fullwidth", transform: fullwidthBase }],
};

// Card 2: Bold Sans — clean, heavy, full alphabet + digits.
const boldSans: FontCategory = {
  name: "Bold Sans",
  styles: [{ name: "Bold Sans", transform: boldSansBase }],
};

// Card 3: Bold Serif — classic mathematical bold, full alphabet + digits.
const boldSerif: FontCategory = {
  name: "Bold Serif",
  styles: [{ name: "Bold Serif", transform: boldSerifBase }],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const bigTextFontCategories: FontCategory[] = [
  fullwidth,
  boldSans,
  boldSerif,
];

// ── Popular Combos ──────────────────────────────────────────────────────────
// Pre-wrapped pairings of the same 3 styles + the same symbol set. Rendered as
// their own named cards; not affected by the "Wrap with a symbol" toggle.

const ALERT = String.fromCodePoint(0x1f6a8); // 🚨
const IMPACT = String.fromCodePoint(0x1f4a5); // 💥
const ANNOUNCEMENT = String.fromCodePoint(0x1f4e2); // 📢
const TARGET = String.fromCodePoint(0x1f3af); // 🎯
const SCALE_UP = String.fromCodePoint(0x1f4c8); // 📈
const EMPHASIS = "\u203c\ufe0f"; // ‼️

/** Wrap a base transform's output symmetrically with a symbol. */
const combo = (base: (t: string) => string, symbol: string) => (t: string) =>
  `${symbol} ${base(t)} ${symbol}`;

const makeCombo = (name: string, base: (t: string) => string, symbol: string): FontCategory => ({
  name,
  styles: [{ name, transform: combo(base, symbol) }],
});

export const bigTextComboCategories: FontCategory[] = [
  makeCombo("Fullwidth · Alert", fullwidthBase, ALERT),
  makeCombo("Fullwidth · Scale Up", fullwidthBase, SCALE_UP),
  makeCombo("Bold Sans · Impact", boldSansBase, IMPACT),
  makeCombo("Bold Sans · Target", boldSansBase, TARGET),
  makeCombo("Bold Serif · Announcement", boldSerifBase, ANNOUNCEMENT),
  makeCombo("Bold Serif · Emphasis", boldSerifBase, EMPHASIS),
];

/**
 * Optional symbol wrappers for the Big Text picker. Each wraps the generated
 * text symmetrically (same symbol on both sides). All verified unused
 * elsewhere on the site. `symbol` is what gets inserted; `label` names it.
 */
export interface WrapSymbol {
  label: string;
  symbol: string;
}

export const bigTextWrapSymbols: WrapSymbol[] = [
  { label: "Alert", symbol: String.fromCodePoint(0x1f6a8) }, // 🚨
  { label: "Impact", symbol: String.fromCodePoint(0x1f4a5) }, // 💥
  { label: "Announcement", symbol: String.fromCodePoint(0x1f4e2) }, // 📢
  { label: "Target", symbol: String.fromCodePoint(0x1f3af) }, // 🎯
  { label: "Scale Up", symbol: String.fromCodePoint(0x1f4c8) }, // 📈
  { label: "Bold Arrow", symbol: String.fromCodePoint(0x2b95) }, // ⮕
  { label: "Block Frame", symbol: String.fromCodePoint(0x25ae) }, // ▮
  { label: "Emphasis", symbol: "\u203c\ufe0f" }, // ‼️
];
