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

// Card 2: Number Emojis
const numberEmojis: FontCategory = {
  name: "Number Emojis",
  styles: [
    { name: "Keycap Emojis", transform: (t) => applyMap(t, emojiDigitMap) },
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
    { name: "Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Slashed Text", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Tilde Overlay", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Overline", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Double Overline", transform: (t) => withCombining(t, ["\u033F"]) },
    { name: "Top-Bottom Lines", transform: (t) => withCombining(t, ["\u0332", "\u0305"]) },
    { name: "Strike + Underline", transform: (t) => withCombining(t, ["\u0336", "\u0332"]) },
  ],
};

// Card 6: Wrapped Fonts (surrounding/framing characters per digit)
const wrappedFonts: FontCategory = {
  name: "Wrapped Fonts",
  styles: [
    { name: "Angle Wrap", transform: (t) => wrapChars(t, "\u27E8", "\u27E9") },
    { name: "Double Angle", transform: (t) => wrapChars(t, "\u300A", "\u300B") },
    { name: "Floor Bracket", transform: (t) => wrapChars(t, "\u230A", "\u230B") },
    { name: "Ceil Bracket", transform: (t) => wrapChars(t, "\u2308", "\u2309") },
    { name: "Tortoise Shell", transform: (t) => wrapChars(t, "\u3014", "\u3015") },
    { name: "White Corner", transform: (t) => wrapChars(t, "\u300E", "\u300F") },
    { name: "Lens Bracket", transform: (t) => wrapChars(t, "\u2983", "\u2984") },
    { name: "Half Bracket", transform: (t) => wrapChars(t, "\u2E22", "\u2E23") },
  ],
};

// Card 7: Overtext Styles (combining marks above characters)
const overtextStyles: FontCategory = {
  name: "Overtext Styles",
  styles: [
    { name: "Dot Above", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Diaeresis", transform: (t) => withCombining(t, ["\u0308"]) },
    { name: "Acute Accent", transform: (t) => withCombining(t, ["\u0301"]) },
    { name: "Tilde Above", transform: (t) => withCombining(t, ["\u0303"]) },
    { name: "Caron", transform: (t) => withCombining(t, ["\u030C"]) },
    { name: "Circumflex", transform: (t) => withCombining(t, ["\u0302"]) },
    { name: "Double Acute", transform: (t) => withCombining(t, ["\u030B"]) },
    { name: "Ring + Tilde", transform: (t) => withCombining(t, ["\u030A", "\u0303"]) },
  ],
};

// Card 8: Symbolic Numbers (marks below/around characters)
const symbolicNumbers: FontCategory = {
  name: "Symbolic Numbers",
  styles: [
    { name: "Ring Above", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Breve Below", transform: (t) => withCombining(t, ["\u032E"]) },
    { name: "Tilde Below", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Cedilla", transform: (t) => withCombining(t, ["\u0327"]) },
    { name: "Ogonek", transform: (t) => withCombining(t, ["\u0328"]) },
    { name: "Dot Below", transform: (t) => withCombining(t, ["\u0323"]) },
    { name: "Ring + Tilde Below", transform: (t) => withCombining(t, ["\u030A", "\u0330"]) },
    { name: "Breve + Dot Below", transform: (t) => withCombining(t, ["\u032E", "\u0323"]) },
  ],
};

// Card 9: Framed Numbers (boxed/framed with surrounding characters)
const framedNumbers: FontCategory = {
  name: "Framed Numbers",
  styles: [
    { name: "Pipe Frame", transform: (t) => wrapChars(t, "\u2502", "\u2502") },
    { name: "Heavy Frame", transform: (t) => wrapChars(t, "\u2503", "\u2503") },
    { name: "Corner Frame", transform: (t) => wrapChars(t, "\u250C", "\u2510") },
    { name: "Round Frame", transform: (t) => wrapChars(t, "\u256D", "\u256E") },
    { name: "Double Pipe", transform: (t) => wrapChars(t, "\u2551", "\u2551") },
    { name: "Bracket Frame", transform: (t) => wrapChars(t, "\u2045", "\u2046") },
    { name: "Full Box", transform: (t) => wrapChars(t, "\u2503", "\u2503") },
  ],
};

// Card 10: Decorated Numbers (decorative combining marks)
const decoratedNumbers: FontCategory = {
  name: "Decorated Numbers",
  styles: [
    { name: "Star Accent", transform: (t) => withCombining(t, ["\u20F0"]) },
    { name: "Sparkle Accent", transform: (t) => withCombining(t, ["\u0489"]) },
    { name: "Flower Accent", transform: (t) => withCombining(t, ["\u0488"]) },
    { name: "Dot Cluster", transform: (t) => withCombining(t, ["\u0324"]) },
    { name: "X Above", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Bridge Above", transform: (t) => withCombining(t, ["\u0346"]) },
    { name: "Star + Ring", transform: (t) => withCombining(t, ["\u20F0", "\u030A"]) },
    { name: "Sparkle + Dot", transform: (t) => withCombining(t, ["\u0489", "\u0324"]) },
  ],
};

// Card 11: Mixed Number Styles (varied combining mark combinations)
const mixedNumberStyles: FontCategory = {
  name: "Mixed Number Styles",
  styles: [
    { name: "Hook Above", transform: (t) => withCombining(t, ["\u0309"]) },
    { name: "Horn", transform: (t) => withCombining(t, ["\u031B"]) },
    { name: "Comma Above", transform: (t) => withCombining(t, ["\u0313"]) },
    { name: "Turned Comma", transform: (t) => withCombining(t, ["\u0312"]) },
    { name: "Macron Below", transform: (t) => withCombining(t, ["\u0331"]) },
    { name: "Grave Accent", transform: (t) => withCombining(t, ["\u0300"]) },
    { name: "Hook + Dot", transform: (t) => withCombining(t, ["\u0309", "\u0323"]) },
    { name: "Comma + Cedilla", transform: (t) => withCombining(t, ["\u0313", "\u0327"]) },
  ],
};

// Card 12: Block Numbers (block/geometric characters around digits)
const blockNumbers: FontCategory = {
  name: "Block Numbers",
  styles: [
    { name: "Solid Block", transform: (t) => wrapChars(t, "\u2588", "\u2588") },
    { name: "Medium Shade", transform: (t) => wrapChars(t, "\u2592", "\u2592") },
    { name: "Light Shade", transform: (t) => wrapChars(t, "\u2591", "\u2591") },
    { name: "Dark Shade", transform: (t) => wrapChars(t, "\u2593", "\u2593") },
    { name: "Black Square", transform: (t) => wrapChars(t, "\u25A0", "\u25A0") },
    { name: "Black Diamond", transform: (t) => wrapChars(t, "\u25C6", "\u25C6") },
    { name: "Black Circle", transform: (t) => wrapChars(t, "\u25CF", "\u25CF") },
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
