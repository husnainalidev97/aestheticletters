// ---------------------------------------------------------------------------
// Number Font Generator — Unicode Number Style Definitions
// 18 genuine Unicode cards + 6 decorative combining-mark cards = 24 total
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

// ── PART 1: Digit Maps ────────────────────────────────────────────────────

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

// ── PART 1: 18 Genuine Unicode Categories ─────────────────────────────────

/** Condition for Roman Numeral cards: only show if input is 1-12 */
function isRomanValid(text: string): boolean {
  const stripped = text.replace(/\s/g, "");
  if (!stripped) return true; // show card when empty (default text)
  const num = parseInt(stripped, 10);
  return !isNaN(num) && num >= 1 && num <= 12 && String(num) === stripped;
}

const numberEmojis: FontCategory = {
  name: "Number Emojis",
  styles: [{ name: "Number Emojis", transform: (t) => applyMap(t, emojiDigitMap) }],
};

const monospaceNumbers: FontCategory = {
  name: "Monospace/Typewriter",
  styles: [{ name: "Monospace/Typewriter", transform: (t) => applyMap(t, monospaceDigitMap) }],
};

const boldNumbers: FontCategory = {
  name: "Bold Numbers",
  styles: [{ name: "Bold Numbers", transform: (t) => applyMap(t, boldDigitMap) }],
};

const doubleStruckNumbers: FontCategory = {
  name: "Double-Struck Numbers",
  styles: [{ name: "Double-Struck Numbers", transform: (t) => applyMap(t, doubleStruckDigitMap) }],
};

const sansSerifNumbers: FontCategory = {
  name: "Sans-Serif Numbers",
  styles: [{ name: "Sans-Serif Numbers", transform: (t) => applyMap(t, sansSerifDigitMap) }],
};

const sansSerifBoldNumbers: FontCategory = {
  name: "Sans-Serif Bold Numbers",
  styles: [{ name: "Sans-Serif Bold Numbers", transform: (t) => applyMap(t, sansSerifBoldDigitMap) }],
};

const wideNumbers: FontCategory = {
  name: "Wide Numbers (Fullwidth)",
  styles: [{ name: "Wide Numbers (Fullwidth)", transform: (t) => applyMap(t, fullwidthDigitMap) }],
};

const superscriptNumbers: FontCategory = {
  name: "Superscript Numbers",
  styles: [{ name: "Superscript Numbers", transform: (t) => applyMap(t, superscriptDigitMap) }],
};

const subscriptNumbers: FontCategory = {
  name: "Subscript Numbers",
  styles: [{ name: "Subscript Numbers", transform: (t) => applyMap(t, subscriptDigitMap) }],
};

const circledNumbers: FontCategory = {
  name: "Circled Numbers",
  styles: [{ name: "Circled Numbers", transform: transformCircled }],
};

const doubleCircledNumbers: FontCategory = {
  name: "Double Circled Numbers",
  styles: [{ name: "Double Circled Numbers", transform: transformDoubleCircled }],
};

const bubbleNumbers: FontCategory = {
  name: "Bubble Numbers",
  styles: [{ name: "Bubble Numbers", transform: transformBubble }],
};

const parenthesizedNumbers: FontCategory = {
  name: "Parenthesized Numbers",
  styles: [{ name: "Parenthesized Numbers", transform: transformParenthesized }],
};

const dottedNumbers: FontCategory = {
  name: "Dotted Numbers (Full Stop)",
  styles: [{ name: "Dotted Numbers (Full Stop)", transform: transformDotted }],
};

const romanNumerals: FontCategory = {
  name: "Roman Numerals",
  condition: isRomanValid,
  styles: [{ name: "Roman Numerals", transform: transformRoman }],
};

const smallRomanNumerals: FontCategory = {
  name: "Small Roman Numerals",
  condition: isRomanValid,
  styles: [{ name: "Small Roman Numerals", transform: transformSmallRoman }],
};

const arabicNumerals: FontCategory = {
  name: "Arabic Numerals",
  styles: [{ name: "Arabic Numerals", transform: (t) => applyMap(t, arabicDigitMap) }],
};

const devanagariNumerals: FontCategory = {
  name: "Devanagari Numerals",
  styles: [{ name: "Devanagari Numerals", transform: (t) => applyMap(t, devanagariDigitMap) }],
};

// ── PART 2: 6 Decorative Categories (combining marks) ─────────────────────

const lineFonts: FontCategory = {
  name: "Line Fonts",
  styles: [
    { name: "Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Overline", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Double Overline", transform: (t) => withCombining(t, ["\u033F"]) },
    { name: "Slashed Text", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Underline + Overline", transform: (t) => withCombining(t, ["\u0332", "\u0305"]) },
    { name: "Double Under + Over", transform: (t) => withCombining(t, ["\u0333", "\u033F"]) },
    { name: "Strike + Underline", transform: (t) => withCombining(t, ["\u0336", "\u0332"]) },
  ],
};

const framedNumbers: FontCategory = {
  name: "Framed Numbers",
  styles: [
    { name: "Boxed", transform: (t) => `\u2503${[...t].join("\u2503")}\u2503` },
    { name: "Squared", transform: (t) => `\u250F${[...t].join("")}\u2513` },
    { name: "Double Bracket", transform: (t) => `\u300A${t}\u300B` },
    { name: "Rounded Frame", transform: (t) => `\u2570${t}\u256F` },
    { name: "Box + Overline", transform: (t) => `\u2503${withCombining(t, ["\u0305"])}\u2503` },
    { name: "Bracket + Underline", transform: (t) => `\u300A${withCombining(t, ["\u0332"])}\u300B` },
  ],
};

const decoratedNumbers: FontCategory = {
  name: "Decorated Numbers",
  styles: [
    { name: "Star Accent", transform: (t) => withCombining(t, ["\u20F0"]) },
    { name: "Sparkle Accent", transform: (t) => withCombining(t, ["\u0489"]) },
    { name: "Flower Accent", transform: (t) => withCombining(t, ["\u0488"]) },
    { name: "Glow Line", transform: (t) => withCombining(t, ["\u0359"]) },
    { name: "Dot Cluster", transform: (t) => withCombining(t, ["\u0324"]) },
    { name: "Ring Accent", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Star + Ring", transform: (t) => withCombining(t, ["\u20F0", "\u030A"]) },
    { name: "Sparkle + Dot", transform: (t) => withCombining(t, ["\u0489", "\u0324"]) },
  ],
};

const symbolicNumbers: FontCategory = {
  name: "Symbolic Numbers",
  styles: [
    { name: "Ring Above", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Breve Below", transform: (t) => withCombining(t, ["\u032E"]) },
    { name: "Tilde Below", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Dual Marks", transform: (t) => withCombining(t, ["\u030A", "\u0330"]) },
    { name: "Asterisk Below", transform: (t) => withCombining(t, ["\u0359"]) },
    { name: "Ring + Breve", transform: (t) => withCombining(t, ["\u030A", "\u032E"]) },
  ],
};

const cuteNumbers: FontCategory = {
  name: "Cute Numbers",
  styles: [
    { name: "Heart Accent", transform: (t) => withCombining(t, ["\u0363"]) },
    { name: "Bow Accent", transform: (t) => withCombining(t, ["\u0312"]) },
    { name: "Star Variant", transform: (t) => withCombining(t, ["\u030B"]) },
    { name: "Paw Mark", transform: (t) => withCombining(t, ["\u0325"]) },
    { name: "Soft Dot", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Heart + Dot", transform: (t) => withCombining(t, ["\u0363", "\u0307"]) },
  ],
};

const blockNumbers: FontCategory = {
  name: "Block Numbers",
  styles: [
    { name: "Solid Block", transform: (t) => `\u2588${t}\u2588` },
    { name: "Heavy Block", transform: (t) => `\u2593${t}\u2593` },
    { name: "Outlined Block", transform: (t) => `\u2591${t}\u2591` },
    { name: "Squared Block", transform: (t) => `\u25A0${t}\u25A0` },
    { name: "Block + Overline", transform: (t) => `\u2588${withCombining(t, ["\u0305"])}\u2588` },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const numberFontCategories: FontCategory[] = [
  // Part 1: 18 genuine Unicode cards
  numberEmojis,
  monospaceNumbers,
  boldNumbers,
  doubleStruckNumbers,
  sansSerifNumbers,
  sansSerifBoldNumbers,
  wideNumbers,
  superscriptNumbers,
  subscriptNumbers,
  circledNumbers,
  doubleCircledNumbers,
  bubbleNumbers,
  parenthesizedNumbers,
  dottedNumbers,
  romanNumerals,
  smallRomanNumerals,
  arabicNumerals,
  devanagariNumerals,
  // Part 2: 6 decorative cards
  lineFonts,
  framedNumbers,
  decoratedNumbers,
  symbolicNumbers,
  cuteNumbers,
  blockNumbers,
];
