// ---------------------------------------------------------------------------
// Alphabet Font Styles — verified Unicode codepoints for single-letter pages.
// R page is the first spoke; this data file is the master source for A–Z.
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

export interface AlphabetStyle {
  name: string;
  transform: (text: string) => string;
  /** Optional note about rendering limits (e.g. no lowercase form). */
  note?: string;
  /** If set, render only the uppercase or lowercase form of this style. */
  singleSide?: "upper" | "lower";
}

export interface OtherAlphabetEntry {
  script: string;
  label: string;
  upper: string;
  lower: string | null;
  description: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

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

function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

// ── Character Maps ────────────────────────────────────────────────────────

const boldMap = buildMap(0x1d400, 0x1d41a);
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });
const boldItalicMap = buildMap(0x1d468, 0x1d482);
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211B", e: "\u212F", g: "\u210A", o: "\u2134",
});
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119", Q: "\u211A", R: "\u211D", Z: "\u2124",
});
const sansSerifMap = buildMap(0x1d5a0, 0x1d5ba);
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);
const sansSerifItalicMap = buildMap(0x1d608, 0x1d622);
const monospaceMap = buildMap(0x1d670, 0x1d68a);
const fullwidthMap = buildMap(0xff21, 0xff41, { " ": "\u3000" });
const circledMap = buildMap(0x24b6, 0x24d0);
const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);

const kWithHookMap: Record<string, string> = { K: "\u0198", k: "\u0199" };
const kWithCedillaMap: Record<string, string> = { K: "\u0136", k: "\u0137" };
const parenthesizedMap: Record<string, string> = { K: "\u{1F11A}", k: "\u24A6" };
const squaredMap: Record<string, string> = { K: "\u{1F13A}", k: "\u{1F13A}" };
const negativeSquaredMap: Record<string, string> = { K: "\u{1F17A}", k: "\u{1F17A}" };
const superscriptMap: Record<string, string> = { K: "\u{1D37}", k: "\u{1D4F}" };

// ── E-specific character maps ───────────────────────────────────────────────

const eParenthesizedMap: Record<string, string> = { E: "\u{1F114}", e: "\u24A0" };
const eSquaredMap: Record<string, string> = { E: "\u{1F134}", e: "\u{1F134}" };
const eNegativeSquaredMap: Record<string, string> = { E: "\u{1F174}", e: "\u{1F174}" };
const eSuperscriptMap: Record<string, string> = { E: "\u{1D31}", e: "\u{1D49}" };
const eOpenEMap: Record<string, string> = { E: "\u0190", e: "\u025B" };
const eEulerMap: Record<string, string> = { E: "\u2147", e: "\u2147" };
const eWithOgonekMap: Record<string, string> = { E: "\u0118", e: "\u0119" };

const wSuperscriptMap: Record<string, string> = { W: "\u{1D42}", w: "\u{2B7}" };
const wWithCircumflexMap: Record<string, string> = { W: "\u0174", w: "\u0175" };
const wWithHookMap: Record<string, string> = { W: "\u2C72", w: "\u2C73" };
const wSquaredMap: Record<string, string> = { W: "\u{1F146}", w: "\u{1F146}" };
const wNegativeSquaredMap: Record<string, string> = { W: "\u{1F186}", w: "\u{1F186}" };
const wParenthesizedMap: Record<string, string> = { W: "\u{1F126}", w: "\u24B2" };

const smallCapsMap: Record<string, string> = {
  A: "\u1D00", B: "\u0299", C: "\u1D04", D: "\u1D05", E: "\u1D07", F: "\uA730",
  G: "\u0262", H: "\u029C", I: "\u026A", J: "\u1D0A", K: "\u1D0B", L: "\u029F",
  M: "\u1D0D", N: "\u0274", O: "\u1D0F", P: "\u1D18", Q: "Q", R: "\u0280",
  S: "\uA731", T: "\u1D1B", U: "\u1D1C", V: "\u1D20", W: "\u1D21", X: "x",
  Y: "\u028F", Z: "\u1D22",
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07", f: "\uA730",
  g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A", k: "\u1D0B", l: "\u029F",
  m: "\u1D0D", n: "\u0274", o: "\u1D0F", p: "\u1D18", q: "q", r: "\u0280",
  s: "\uA731", t: "\u1D1B", u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x",
  y: "\u028F", z: "\u1D22",
};

// ── 16 R Styles (master list for A–Z letter pages) ─────────────────────────

export const letterRStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap) },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckMap) },
  { name: "Sans", transform: (t) => applyMap(t, sansSerifMap) },
  { name: "Sans Bold", transform: (t) => applyMap(t, sansSerifBoldMap) },
  { name: "Sans Italic", transform: (t) => applyMap(t, sansSerifItalicMap) },
  { name: "Sans Bold Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
  { name: "Monospace", transform: (t) => applyMap(t, monospaceMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
  { name: "Small Caps", transform: (t) => applyMap(t, smallCapsMap) },
];

// ── 23 E Styles ──────────────────────────────────────────────────────────

export const letterEStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap), note: "Letterlike Symbols block, not Math Alphanumeric" },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckMap) },
  { name: "Bold Fraktur (Gothic)", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Sans-Serif", transform: (t) => applyMap(t, sansSerifMap) },
  { name: "Sans Bold", transform: (t) => applyMap(t, sansSerifBoldMap) },
  { name: "Sans Italic", transform: (t) => applyMap(t, sansSerifItalicMap) },
  { name: "Sans Bold Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
  { name: "Monospace", transform: (t) => applyMap(t, monospaceMap) },
  { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
  { name: "Small Capital", transform: (t) => applyMap(t, smallCapsMap), note: "Same glyph used for both cases" },
  { name: "Superscript/Modifier", transform: (t) => applyMap(t, eSuperscriptMap) },
  { name: "Open E", transform: (t) => applyMap(t, eOpenEMap) },
  { name: "E With Ogonek", transform: (t) => applyMap(t, eWithOgonekMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Squared", transform: (t) => applyMap(t, eSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "Negative Squared", transform: (t) => applyMap(t, eNegativeSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "Parenthesized", transform: (t) => applyMap(t, eParenthesizedMap) },
  { name: "Double-Struck Italic (Euler's Number)", transform: (t) => applyMap(t, eEulerMap), note: "Lowercase only, no Unicode capital equivalent", singleSide: "lower" },
];

// ── 22 K Styles ──────────────────────────────────────────────────────────

export const letterKStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap) },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckMap) },
  { name: "Bold Fraktur (Gothic)", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Sans-Serif", transform: (t) => applyMap(t, sansSerifMap) },
  { name: "Sans Bold", transform: (t) => applyMap(t, sansSerifBoldMap) },
  { name: "Sans Italic", transform: (t) => applyMap(t, sansSerifItalicMap) },
  { name: "Sans Bold Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
  { name: "Monospace", transform: (t) => applyMap(t, monospaceMap) },
  { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
  { name: "Small Capital", transform: (t) => applyMap(t, smallCapsMap) },
  { name: "Superscript/Modifier", transform: (t) => applyMap(t, superscriptMap) },
  { name: "Hook K", transform: (t) => applyMap(t, kWithHookMap) },
  { name: "K With Cedilla", transform: (t) => applyMap(t, kWithCedillaMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Squared", transform: (t) => applyMap(t, squaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Negative Squared", transform: (t) => applyMap(t, negativeSquaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Parenthesized", transform: (t) => applyMap(t, parenthesizedMap) },
];

// ── 22 W Styles ──────────────────────────────────────────────────────────

export const letterWStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap) },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckMap) },
  { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Sans-Serif", transform: (t) => applyMap(t, sansSerifMap) },
  { name: "Sans Bold", transform: (t) => applyMap(t, sansSerifBoldMap) },
  { name: "Sans Italic", transform: (t) => applyMap(t, sansSerifItalicMap) },
  { name: "Sans Bold Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
  { name: "Monospace", transform: (t) => applyMap(t, monospaceMap) },
  { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
  { name: "Small Capital", transform: (t) => applyMap(t, smallCapsMap) },
  { name: "Superscript/Modifier", transform: (t) => applyMap(t, wSuperscriptMap) },
  { name: "W With Circumflex", transform: (t) => applyMap(t, wWithCircumflexMap) },
  { name: "W With Hook", transform: (t) => applyMap(t, wWithHookMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Squared", transform: (t) => applyMap(t, wSquaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Negative Squared", transform: (t) => applyMap(t, wNegativeSquaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Parenthesized", transform: (t) => applyMap(t, wParenthesizedMap) },
];

export function getLetterStyles(letter: string): AlphabetStyle[] {
  const upper = letter.toUpperCase();
  if (upper === "R") return letterRStyles;
  if (upper === "K") return letterKStyles;
  if (upper === "E") return letterEStyles;
  if (upper === "W") return letterWStyles;
  return [];
}

// ── K-specific symbol categories for the generator grids ──────────────────

export interface LetterSymbolCategories {
  capital?: FontCategory[];
  small?: FontCategory[];
}

const kCapitalSymbolCategories: FontCategory[] = [
  { name: "Black Star", styles: [{ name: "", transform: (text) => `★${text}★` }] },
  { name: "White Star", styles: [{ name: "", transform: (text) => `☆${text}☆` }] },
  { name: "Sparkles", styles: [{ name: "", transform: (text) => `✨${text}✨` }] },
  { name: "Heavy Heart", styles: [{ name: "", transform: (text) => `❤${text}❤` }] },
  { name: "Sparkling Heart", styles: [{ name: "", transform: (text) => `💖${text}💖` }] },
  { name: "Cherry Blossom", styles: [{ name: "", transform: (text) => `🌸${text}🌸` }] },
  { name: "Snowflake", styles: [{ name: "", transform: (text) => `❄${text}❄` }] },
  { name: "Fire", styles: [{ name: "", transform: (text) => `🔥${text}🔥` }] },
  { name: "High Voltage", styles: [{ name: "", transform: (text) => `⚡${text}⚡` }] },
  { name: "Gem Stone", styles: [{ name: "", transform: (text) => `💎${text}💎` }] },
  { name: "Crown", styles: [{ name: "", transform: (text) => `👑${text}👑` }] },
  { name: "Butterfly", styles: [{ name: "", transform: (text) => `🦋${text}🦋` }] },
  { name: "White Corner Brackets", styles: [{ name: "", transform: (text) => `『${text}』` }] },
  { name: "Black Lenticular Brackets", styles: [{ name: "", transform: (text) => `【${text}】` }] },
  { name: "Double Angle Quotes", styles: [{ name: "", transform: (text) => `«${text}»` }] },
  { name: "Bullet", styles: [{ name: "", transform: (text) => `•${text}•` }] },
];

const kSmallSymbolCategories: FontCategory[] = [
  { name: "White Four-Pointed Star", styles: [{ name: "", transform: (text) => `✧${text}✧` }] },
  { name: "Eight-Pointed Star", styles: [{ name: "", transform: (text) => `✴${text}✴` }] },
  { name: "Dizzy Symbol", styles: [{ name: "", transform: (text) => `💫${text}💫` }] },
  { name: "Two Hearts", styles: [{ name: "", transform: (text) => `💕${text}💕` }] },
  { name: "White Heart Suit", styles: [{ name: "", transform: (text) => `♡${text}♡` }] },
  { name: "Musical Note", styles: [{ name: "", transform: (text) => `🎵${text}🎵` }] },
  { name: "Skull", styles: [{ name: "", transform: (text) => `💀${text}💀` }] },
  { name: "Middle Dot", styles: [{ name: "", transform: (text) => `·${text}·` }] },
  { name: "Degree Sign", styles: [{ name: "", transform: (text) => `°${text}°` }] },
  { name: "Rightwards/Leftwards Arrow", styles: [{ name: "", transform: (text) => `→${text}←` }] },
  { name: "Mathematical Angle Brackets", styles: [{ name: "", transform: (text) => `⟨${text}⟩` }] },
  { name: "Corner Brackets", styles: [{ name: "", transform: (text) => `「${text}」` }] },
  { name: "White Lenticular Brackets", styles: [{ name: "", transform: (text) => `〖${text}〗` }] },
];

const eCapitalSymbolCategories: FontCategory[] = kCapitalSymbolCategories;
const eSmallSymbolCategories: FontCategory[] = kSmallSymbolCategories;
const wCapitalSymbolCategories: FontCategory[] = kCapitalSymbolCategories;
const wSmallSymbolCategories: FontCategory[] = kSmallSymbolCategories;

export function getLetterSymbolCategories(letter: string): LetterSymbolCategories | null {
  const upper = letter.toUpperCase();
  if (upper === "K") {
    return { capital: kCapitalSymbolCategories, small: kSmallSymbolCategories };
  }
  if (upper === "E") {
    return { capital: eCapitalSymbolCategories, small: eSmallSymbolCategories };
  }
  if (upper === "W") {
    return { capital: wCapitalSymbolCategories, small: wSmallSymbolCategories };
  }
  return null;
}

export const otherAlphabetsR: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic",
    label: "Cyrillic",
    upper: "\u0420",
    lower: "\u0440",
    description: "The Cyrillic letter Er looks like a Latin P but sounds like R.",
  },
  {
    script: "Armenian",
    label: "Armenian",
    upper: "\u054C",
    lower: "\u057C",
    description: "Armenian Ra in upper and lower case forms.",
  },
  {
    script: "Thai",
    label: "Thai",
    upper: "\u0E23",
    lower: "\u0E24",
    description: "Thai Ro Rua and the alternate Ru used for Sanskrit roots.",
  },
  {
    script: "Cherokee",
    label: "Cherokee",
    upper: "\u13A1",
    lower: "\uAB71",
    description: "Cherokee syllabary E visually resembles Latin R, with its small-form complement.",
  },
  {
    script: "Chinese",
    label: "Chinese",
    upper: "\u5C3A",
    lower: null,
    description: "The CJK character 尺 (chǐ) is a visual lookalike, not a phonetic equivalent.",
  },
  {
    script: "Canadian Aboriginal",
    label: "Aboriginal",
    upper: "\u1587",
    lower: null,
    description: "Canadian Aboriginal Syllabics Tlhi, visually confusable with Latin R.",
  },
];

export const otherAlphabetsK: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic",
    label: "Cyrillic",
    upper: "\u041A",
    lower: "\u043A",
    description: "Cyrillic Ka, adapted from Greek centuries after Cyril and Methodius built the alphabet for Slavic liturgy.",
  },
  {
    script: "Greek",
    label: "Greek",
    upper: "\u039A",
    lower: "\u03BA",
    description: "Kappa itself, the direct ancestor of the Latin K.",
  },
  {
    script: "Coptic",
    label: "Coptic",
    upper: "\u2C94",
    lower: "\u2C95",
    description: "Borrowed the same Greek shape for Egypt's Coptic Christian texts.",
  },
  {
    script: "Cherokee",
    label: "Cherokee",
    upper: "\u13E6",
    lower: "\uABB6",
    description: "Represents the syllable tso, unrelated in sound to K despite the shared shape.",
  },
  {
    script: "Old Italic",
    label: "Old Italic",
    upper: "\u{1030A}",
    lower: null,
    description: "The Etruscan letterform that Roman scribes eventually turned into the Latin K used today.",
  },
];

export const otherAlphabetsE: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic",
    label: "Cyrillic",
    upper: "\u0415",
    lower: "\u0435",
    description: "Cyrillic Ye shares an identical shape with Latin E, adapted after Cyril and Methodius built the alphabet for Slavic liturgy.",
  },
  {
    script: "Greek",
    label: "Greek",
    upper: "\u0395",
    lower: "\u03B5",
    description: "Epsilon itself, the direct ancestor behind the Latin E.",
  },
  {
    script: "Coptic",
    label: "Coptic",
    upper: "\u2C88",
    lower: "\u2C89",
    description: "Carried the same Greek shape into Egypt's Coptic Christian texts.",
  },
  {
    script: "Old Italic",
    label: "Old Italic",
    upper: "\u{10304}",
    lower: null,
    description: "The Etruscan letterform that Roman scribes later reshaped into today's Latin E.",
  },
  {
    script: "Runic",
    label: "Runic",
    upper: "\u16D6",
    lower: null,
    description: "The Elder Futhark rune Ehwaz, marking the E sound in early Germanic writing.",
  },
];

export const otherAlphabetsW: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic",
    label: "Cyrillic",
    upper: "\u0460",
    lower: "\u0461",
    description: "Cyrillic Omega appeared in Old Church Slavonic manuscripts; its rounded twin-arch outline is the nearest visual match W has anywhere outside Latin script.",
  },
  {
    script: "Coptic",
    label: "Coptic",
    upper: "\u03E2",
    lower: "\u03E3",
    description: "Coptic Shei was lifted by Egyptian Christian scribes from Demotic writing centuries earlier.",
  },
  {
    script: "W With Hook",
    label: "W With Hook",
    upper: "\u2C72",
    lower: "\u2C73",
    description: "A working letter in the Puguli and Lobiri languages spoken in Burkina Faso today, not decorative at all.",
  },
];
