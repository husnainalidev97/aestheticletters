// ---------------------------------------------------------------------------
// Number Font Generator — 12 Category Cards with multiple styles each
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

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

/** Append combining characters after every non-space character. */
function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

/** Wrap each non-space character with prefix and suffix. */
function wrapChars(text: string, prefix: string, suffix: string): string {
  return [...text].map((c) => (c === " " ? c : prefix + c + suffix)).join("");
}

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

// ── Digit Maps ────────────────────────────────────────────────────────────

// Number Emojis (digit + U+FE0F + U+20E3)
const emojiDigitMap: Record<string, string> = {};
for (let i = 0; i < 10; i++) {
  emojiDigitMap[String(i)] = String(i) + "\uFE0F\u20E3";
}

// Monospace/Typewriter: U+1D7F6–U+1D7FF
const monospaceDigitMap = buildDigitMap(0x1d7f6);

// Bold Numbers: U+1D7CE–U+1D7D7
const boldDigitMap = buildDigitMap(0x1d7ce);

// Double-Struck Numbers: U+1D7D8–U+1D7E1
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// Sans-Serif Numbers: U+1D7E2–U+1D7EB
const sansSerifDigitMap = buildDigitMap(0x1d7e2);

// Sans-Serif Bold Numbers: U+1D7EC–U+1D7F5
const sansSerifBoldDigitMap = buildDigitMap(0x1d7ec);

// Wide Numbers (Fullwidth): U+FF10–U+FF19
const fullwidthDigitMap = buildDigitMap(0xff10);

// Superscript Numbers: non-uniform mapping
const superscriptDigitMap: Record<string, string> = {
  "0": "\u2070",
  "1": "\u00B9",
  "2": "\u00B2",
  "3": "\u00B3",
  "4": "\u2074",
  "5": "\u2075",
  "6": "\u2076",
  "7": "\u2077",
  "8": "\u2078",
  "9": "\u2079",
};

// Subscript Numbers: U+2080–U+2089
const subscriptDigitMap = buildDigitMap(0x2080);

// Circled Numbers: U+24EA (zero), U+2460–U+2468 (1-9), extends to U+2473 (20)
const circledSingleMap: Record<number, string> = { 0: "\u24EA" };
for (let i = 1; i <= 20; i++) {
  circledSingleMap[i] = String.fromCodePoint(0x245f + i);
}
const circledDigitMap: Record<string, string> = {
  "0": "\u24EA",
  "1": "\u2460",
  "2": "\u2461",
  "3": "\u2462",
  "4": "\u2463",
  "5": "\u2464",
  "6": "\u2465",
  "7": "\u2466",
  "8": "\u2467",
  "9": "\u2468",
};

function transformCircled(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 0 && num <= 20 && String(num) === stripped) {
    return circledSingleMap[num];
  }
  return applyMap(text, circledDigitMap);
}

// Double Circled Numbers: U+24F5–U+24FD (1-9), extends to U+24FE (10)
const doubleCircledSingleMap: Record<number, string> = {};
for (let i = 1; i <= 10; i++) {
  doubleCircledSingleMap[i] = String.fromCodePoint(0x24f4 + i);
}
const doubleCircledDigitMap: Record<string, string> = {
  "1": "\u24F5",
  "2": "\u24F6",
  "3": "\u24F7",
  "4": "\u24F8",
  "5": "\u24F9",
  "6": "\u24FA",
  "7": "\u24FB",
  "8": "\u24FC",
  "9": "\u24FD",
};

function transformDoubleCircled(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 1 && num <= 10 && String(num) === stripped) {
    return doubleCircledSingleMap[num];
  }
  return applyMap(text, doubleCircledDigitMap);
}

// Bubble Numbers: U+24FF (zero), U+2776–U+277E (1-9), extends to U+2789 (10)
const bubbleSingleMap: Record<number, string> = { 0: "\u24FF" };
for (let i = 1; i <= 10; i++) {
  bubbleSingleMap[i] = String.fromCodePoint(0x2775 + i);
}
const bubbleDigitMap: Record<string, string> = {
  "0": "\u24FF",
  "1": "\u2776",
  "2": "\u2777",
  "3": "\u2778",
  "4": "\u2779",
  "5": "\u277A",
  "6": "\u277B",
  "7": "\u277C",
  "8": "\u277D",
  "9": "\u277E",
};

function transformBubble(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 0 && num <= 10 && String(num) === stripped) {
    return bubbleSingleMap[num];
  }
  return applyMap(text, bubbleDigitMap);
}

// Parenthesized Numbers: U+2474–U+247C (1-9), extends to U+2487 (20)
const parenthesizedSingleMap: Record<number, string> = {};
for (let i = 1; i <= 20; i++) {
  parenthesizedSingleMap[i] = String.fromCodePoint(0x2473 + i);
}
const parenthesizedDigitMap: Record<string, string> = {
  "1": "\u2474",
  "2": "\u2475",
  "3": "\u2476",
  "4": "\u2477",
  "5": "\u2478",
  "6": "\u2479",
  "7": "\u247A",
  "8": "\u247B",
  "9": "\u247C",
};

function transformParenthesized(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 1 && num <= 20 && String(num) === stripped) {
    return parenthesizedSingleMap[num];
  }
  return applyMap(text, parenthesizedDigitMap);
}

// Dotted Numbers (Full Stop): U+2488–U+2490 (1-9), extends to U+249B (20)
const dottedSingleMap: Record<number, string> = {};
for (let i = 1; i <= 20; i++) {
  dottedSingleMap[i] = String.fromCodePoint(0x2487 + i);
}
const dottedDigitMap: Record<string, string> = {
  "1": "\u2488",
  "2": "\u2489",
  "3": "\u248A",
  "4": "\u248B",
  "5": "\u248C",
  "6": "\u248D",
  "7": "\u248E",
  "8": "\u248F",
  "9": "\u2490",
};

function transformDotted(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 1 && num <= 20 && String(num) === stripped) {
    return dottedSingleMap[num];
  }
  return applyMap(text, dottedDigitMap);
}

// Roman Numerals: U+2160–U+216B (1-12)
const romanMap: Record<number, string> = {};
for (let i = 1; i <= 12; i++) {
  romanMap[i] = String.fromCodePoint(0x215f + i);
}

function transformRoman(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 1 && num <= 12 && String(num) === stripped) {
    return romanMap[num];
  }
  return text;
}

// Small Roman Numerals: U+2170–U+217B (1-12)
const smallRomanMap: Record<number, string> = {};
for (let i = 1; i <= 12; i++) {
  smallRomanMap[i] = String.fromCodePoint(0x216f + i);
}

function transformSmallRoman(text: string): string {
  const stripped = text.replace(/\s/g, "");
  const num = parseInt(stripped, 10);
  if (!isNaN(num) && num >= 1 && num <= 12 && String(num) === stripped) {
    return smallRomanMap[num];
  }
  return text;
}

// Arabic Numerals: U+0660–U+0669
const arabicDigitMap = buildDigitMap(0x0660);

// Devanagari Numerals: U+0966–U+096F
const devanagariDigitMap = buildDigitMap(0x0966);

// Upside Down Numbers
const upsideDownDigitMap: Record<string, string> = {
  "0": "0",
  "1": "\u21C2",
  "2": "\u1614",
  "3": "\u0190",
  "4": "\u07C8",
  "5": "\u100C",
  "6": "9",
  "7": "\u3125",
  "8": "8",
  "9": "6",
};

// Mirror Numbers
const mirrorDigitMap: Record<string, string> = {
  "0": "0",
  "1": "\u0B67",
  "2": "\u01A7",
  "3": "\u0510",
  "4": "\u10BE",
  "5": "\u091F",
  "6": "\u03BC",
  "7": "\u0662",
  "8": "8",
  "9": "\u16DA",
};

// ── 12 Category Cards ─────────────────────────────────────────────────────

// Card 1: Number Font Styles (core mathematical Unicode digit styles)
const numberFontStyles: FontCategory = {
  name: "Number Font Styles",
  styles: [
    { name: "Bold", transform: (t) => applyMap(t, boldDigitMap) },
    { name: "Sans-Serif Bold", transform: (t) => applyMap(t, sansSerifBoldDigitMap) },
    { name: "Sans-Serif", transform: (t) => applyMap(t, sansSerifDigitMap) },
    { name: "Monospace", transform: (t) => applyMap(t, monospaceDigitMap) },
    { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckDigitMap) },
    { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthDigitMap) },
    { name: "Arabic Numerals", transform: (t) => applyMap(t, arabicDigitMap) },
    { name: "Devanagari Numerals", transform: (t) => applyMap(t, devanagariDigitMap) },
  ],
};

// Card 2: Number Emojis (keycap + fun transformations)
const numberEmojis: FontCategory = {
  name: "Number Emojis",
  styles: [
    { name: "Keycap Emojis", transform: (t) => applyMap(t, emojiDigitMap) },
    { name: "Upside Down", transform: (t) => applyMap(t, upsideDownDigitMap) },
    { name: "Flip Reverse", transform: (t) => [...applyMap(t, upsideDownDigitMap)].reverse().join("") },
    { name: "Mirror Text", transform: (t) => [...applyMap(t, mirrorDigitMap)].reverse().join("") },
    { name: "Reversed Text", transform: (t) => [...t].reverse().join("") },
  ],
};

// Card 3: Circled Numbers (all enclosed/shaped number styles)
const circledNumbers: FontCategory = {
  name: "Circled Numbers",
  styles: [
    { name: "Circled", transform: transformCircled },
    { name: "Double Circled", transform: transformDoubleCircled },
    { name: "Black Bubble", transform: transformBubble },
    { name: "Parenthesized", transform: transformParenthesized },
    { name: "Full Stop", transform: transformDotted },
  ],
};

// Card 4: Script Numbers (super/subscript + Roman numerals)
const scriptNumbers: FontCategory = {
  name: "Script Numbers",
  styles: [
    { name: "Superscript", transform: (t) => applyMap(t, superscriptDigitMap) },
    { name: "Subscript", transform: (t) => applyMap(t, subscriptDigitMap) },
    { name: "Roman Numerals", transform: transformRoman },
    { name: "Lowercase Roman", transform: transformSmallRoman },
  ],
};

// Card 5: Line Fonts (combining mark lines)
const lineFonts: FontCategory = {
  name: "Line Fonts",
  styles: [
    { name: "Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Double Macron", transform: (t) => withCombining(t, ["\u035F"]) },
    { name: "Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Slashed Text", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Tilde Overlay", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Overline", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Double Overline", transform: (t) => withCombining(t, ["\u033F"]) },
    { name: "Top-Bottom Lines", transform: (t) => withCombining(t, ["\u0332", "\u0305"]) },
  ],
};

// Card 6: Wrapped Fonts (creative symbol pairs wrapping each digit)
const wrappedFonts: FontCategory = {
  name: "Wrapped Fonts",
  styles: [
    { name: "Petal Wrap", transform: (t) => wrapChars(t, "\u22B0", "\u22B1") },
    { name: "Balanced Curve", transform: (t) => wrapChars(t, "\u29FC", "\u29FD") },
    { name: "Math Edge", transform: (t) => wrapChars(t, "\u2320", "\u2321") },
    { name: "Arrow Script", transform: (t) => wrapChars(t, "\u27B9", "\u27B7") },
    { name: "Crescent Box", transform: (t) => wrapChars(t, "\u263E", "\u263D") },
    { name: "Fine Edges", transform: (t) => wrapChars(t, "\u2991", "\u2992") },
    { name: "Soft Curl", transform: (t) => wrapChars(t, "\u2570", "\u256F") },
  ],
};

// Card 7: Overtext Styles (combining marks above — competitor-quality names)
const overtextStyles: FontCategory = {
  name: "Overtext Styles",
  styles: [
    { name: "Crown Script", transform: (t) => withCombining(t, ["\u035B"]) },
    { name: "Floating Marks", transform: (t) => withCombining(t, ["\u0309"]) },
    { name: "Accent Edge", transform: (t) => withCombining(t, ["\u0302"]) },
    { name: "Text Tide", transform: (t) => withCombining(t, ["\u0303"]) },
    { name: "Light Pulse", transform: (t) => withCombining(t, ["\u0306"]) },
    { name: "Spiral Text", transform: (t) => withCombining(t, ["\u034C"]) },
    { name: "Crowned Rings", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Double Accent", transform: (t) => withCombining(t, ["\u030B"]) },
    { name: "Top Dot", transform: (t) => withCombining(t, ["\u0307"]) },
  ],
};

// Card 8: Symbolic Numbers (marks below/around + separator combos)
const symbolicNumbers: FontCategory = {
  name: "Symbolic Numbers",
  styles: [
    { name: "Dotted Rings", transform: (t) => {
      const suffix = "\u030A";
      const sep = "\u2AF6";
      return [...t].map((c) => (c === " " ? c : c + suffix + sep)).join("");
    }},
    { name: "Dual Edges", transform: (t) => withCombining(t, ["\u0353", "\u033D"]) },
    { name: "Guided Marks", transform: (t) => withCombining(t, ["\u034E"]) },
    { name: "Flow Underline", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Breve Below", transform: (t) => withCombining(t, ["\u035C"]) },
    { name: "Vertical Tilde", transform: (t) => withCombining(t, ["\u033E"]) },
  ],
};

// Card 9: Framed Numbers (block-style framing with brackets and box-drawing)
const framedNumbers: FontCategory = {
  name: "Framed Numbers",
  styles: [
    { name: "Boxed", transform: (t) => wrapChars(t, "[", "]") },
    { name: "U Brackets", transform: (t) => wrapChars(t, "\u2E26", "\u2E27") },
    { name: "Triple Line", transform: (t) => wrapChars(t, "\u269E", "\u269F") },
    { name: "Triple Brackets", transform: (t) => wrapChars(t, "\u2AF7", "\u2AF8") },
    { name: "Looped Frame", transform: (t) => wrapChars(t, "\u23B0", "\u23B1") },
    { name: "Arc", transform: (t) => wrapChars(t, "\u2993", "\u2994") },
    { name: "Box Letter", transform: (t) => wrapChars(t, "\u3010", "\u3011") },
    { name: "Soft Corner", transform: (t) => wrapChars(t, "\u256D", "\u256E") },
    { name: "Square Corner", transform: (t) => wrapChars(t, "\u250C", "\u2510") },
    { name: "Twin Pillar", transform: (t) => wrapChars(t, "\u2551", "\u2551") },
  ],
};

// Card 10: Decorated Numbers (decorative symbol borders)
const decoratedNumbers: FontCategory = {
  name: "Decorated Numbers",
  styles: [
    { name: "Flower Border", transform: (t) => wrapChars(t, "\u2740", "\u2740") },
    { name: "Star Border", transform: (t) => wrapChars(t, "\u2605", "\u2605") },
    { name: "Shine Line", transform: (t) => wrapChars(t, "\u2726", "\u2726") },
    { name: "Spark Line", transform: (t) => wrapChars(t, "\u2727", "\u2727") },
    { name: "Crown Border", transform: (t) => wrapChars(t, "\u2655", "\u2655") },
    { name: "Star Frame", transform: (t) => wrapChars(t, "\u2606", "\u2606") },
    { name: "Glitter Edge", transform: (t) => wrapChars(t, "\u2735", "\u2735") },
    { name: "Simple Border", transform: (t) => wrapChars(t, "\u2500", "\u2500") },
    { name: "Quote Style", transform: (t) => wrapChars(t, "\u275D", "\u275E") },
    { name: "Flower Frame", transform: (t) => wrapChars(t, "\u273F", "\u273F") },
    { name: "Diamond Edge", transform: (t) => wrapChars(t, "\u2756", "\u2756") },
    { name: "Heart Border", transform: (t) => wrapChars(t, "\u2765", "\u2765") },
  ],
};

// Card 11: Mixed Number Styles (dynamic separators and motion-style transforms)
const mixedNumberStyles: FontCategory = {
  name: "Mixed Number Styles",
  styles: [
    { name: "Streamline Text", transform: (t) => withSeparator(t, "\u2307") },
    { name: "Smiling Line", transform: (t) => withSeparator(t, "\u203F") },
    { name: "Shockwave Text", transform: (t) => withSeparator(t, "\u21AF") },
    { name: "Decor Dot", transform: (t) => withSeparator(t, "\u203B") },
    { name: "Ocean Crest", transform: (t) => withSeparator(t, "\u0DF4") },
    { name: "Mirror Frame", transform: (t) => wrapChars(t, "\u21DC", "\u21DD") },
    { name: "Gem Cut", transform: (t) => wrapChars(t, "\u29DB", "\u29DA") },
    { name: "Wavy Line", transform: (t) => withSeparator(t, "\u223C") },
    { name: "Flow Chain", transform: (t) => withSeparator(t, "\u22B6") },
  ],
};

// Card 12: Block Numbers (heavy block-style wrapping)
const blockNumbers: FontCategory = {
  name: "Block Numbers",
  styles: [
    { name: "Boxed Bold", transform: (t) => {
      return [...t].map((c) => (c === " " ? c : "[" + c + "\u0332\u0305" + "]")).join("");
    }},
    { name: "Pointed Arch", transform: (t) => {
      return [...t].map((c) => (c === " " ? c : "\u29FC" + c + "\u032B" + "\u29FD")).join("");
    }},
    { name: "Curve Overlay", transform: (t) => withCombining(t, ["\u032E", "\u0311"]) },
    { name: "Heavy Frame", transform: (t) => wrapChars(t, "\u2590", "\u258C") },
    { name: "Solid Block", transform: (t) => wrapChars(t, "\u2588", "\u2588") },
    { name: "Dark Shade", transform: (t) => wrapChars(t, "\u2593", "\u2593") },
    { name: "Medium Shade", transform: (t) => wrapChars(t, "\u2592", "\u2592") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const numberFontCategories: FontCategory[] = [
  numberFontStyles,
  numberEmojis,
  circledNumbers,
  scriptNumbers,
  lineFonts,
  wrappedFonts,
  overtextStyles,
  symbolicNumbers,
  framedNumbers,
  decoratedNumbers,
  mixedNumberStyles,
  blockNumbers,
];
