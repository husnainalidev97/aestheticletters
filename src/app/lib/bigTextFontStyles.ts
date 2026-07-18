// ---------------------------------------------------------------------------
// Big Text Generator — 3 Category Cards
// Fullwidth, Bold Sans, Bold Serif. All plain Unicode substitution, same
// pattern as the other generator pages. Pairs with the ScalePreview modal
// that renders the output large in banner / thumbnail / poster frames.
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

/** Wrap each non-space character with prefix and suffix. */
function wrapChars(text: string, prefix: string, suffix: string): string {
  return [...text].map((c) => (c === " " ? c : prefix + c + suffix)).join("");
}

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

/** Frame the whole phrase with a leading and trailing marker (kept large). */
function frame(text: string, prefix: string, suffix: string): string {
  return `${prefix}${text}${suffix}`;
}

// Decoration markers — all verified unused elsewhere on the site.
const ARROW = String.fromCodePoint(0x2b95); // ⮕ rightwards black arrow
const BLOCK = String.fromCodePoint(0x25ae); // ▮ black vertical rectangle
const ALERT = String.fromCodePoint(0x1f6a8); // 🚨
const IMPACT = String.fromCodePoint(0x1f4a5); // 💥
const ANNOUNCE = String.fromCodePoint(0x1f4e2); // 📢
const TARGET = String.fromCodePoint(0x1f3af); // 🎯
const SCALE = String.fromCodePoint(0x1f4c8); // 📈
const EMPHASIS = "\u203c\ufe0f"; // ‼️

/**
 * Big decorated variants applied on top of a large base transform. Every
 * variant keeps the text large — the markers only frame the big Unicode
 * output, so there are no small or tiny styles here.
 */
function bigDecorations(
  prefix: string,
  base: (t: string) => string,
): FontStyle[] {
  return [
    { name: `${prefix} Bold Arrow`, transform: (t) => frame(base(t), `${ARROW}${ARROW} `, ` ${ARROW}${ARROW}`) },
    { name: `${prefix} Block`, transform: (t) => frame(base(t), `${BLOCK} `, ` ${BLOCK}`) },
    { name: `${prefix} Alert`, transform: (t) => frame(base(t), `${ALERT} `, ` ${ALERT}`) },
    { name: `${prefix} Impact`, transform: (t) => frame(base(t), `${IMPACT} `, ` ${IMPACT}`) },
    { name: `${prefix} Announcement`, transform: (t) => frame(base(t), `${ANNOUNCE} `, ` ${ANNOUNCE}`) },
    { name: `${prefix} Target`, transform: (t) => frame(base(t), `${TARGET} `, ` ${TARGET}`) },
    { name: `${prefix} Scale Up`, transform: (t) => frame(base(t), `${SCALE} `, ` ${SCALE}`) },
    { name: `${prefix} Emphasis`, transform: (t) => frame(base(t), "", ` ${EMPHASIS}`) },
  ];
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
const fullwidthBase = (t: string) => applyMap(t, fullwidthMap);
const boldSansBase = (t: string) => applyMaps(t, boldSansMap, boldSansDigitMap);
const boldSerifBase = (t: string) => applyMaps(t, boldSerifMap, boldSerifDigitMap);

// Card 1: Fullwidth — the widest, most "banner-like" spacing.
const fullwidth: FontCategory = {
  name: "Fullwidth",
  styles: [
    { name: "Fullwidth", transform: fullwidthBase },
    { name: "Fullwidth Boxed", transform: (t) => wrapChars(fullwidthBase(t), "[", "]") },
    { name: "Fullwidth Bullet", transform: (t) => withSeparator(fullwidthBase(t), "\u2022") },
    { name: "Fullwidth Lenticular", transform: (t) => wrapChars(fullwidthBase(t), "\u3010", "\u3011") },
    ...bigDecorations("Fullwidth", fullwidthBase),
  ],
};

// Card 2: Bold Sans — clean, heavy, full alphabet + digits.
const boldSans: FontCategory = {
  name: "Bold Sans",
  styles: [
    { name: "Bold Sans", transform: boldSansBase },
    { name: "Bold Sans Boxed", transform: (t) => wrapChars(boldSansBase(t), "[", "]") },
    { name: "Bold Sans Bullet", transform: (t) => withSeparator(boldSansBase(t), "\u2022") },
    { name: "Bold Sans Sparkle", transform: (t) => withSeparator(boldSansBase(t), "\u2727") },
    ...bigDecorations("Bold Sans", boldSansBase),
  ],
};

// Card 3: Bold Serif — classic mathematical bold, full alphabet + digits.
const boldSerif: FontCategory = {
  name: "Bold Serif",
  styles: [
    { name: "Bold Serif", transform: boldSerifBase },
    { name: "Bold Serif Boxed", transform: (t) => wrapChars(boldSerifBase(t), "[", "]") },
    { name: "Bold Serif Bullet", transform: (t) => withSeparator(boldSerifBase(t), "\u2022") },
    { name: "Bold Serif Sparkle", transform: (t) => withSeparator(boldSerifBase(t), "\u2727") },
    ...bigDecorations("Bold Serif", boldSerifBase),
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const bigTextFontCategories: FontCategory[] = [
  fullwidth,
  boldSans,
  boldSerif,
];
