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

// ── S-specific character maps ───────────────────────────────────────────

const sWithAcuteMap: Record<string, string> = { S: "\u015A", s: "\u015B" };
const sWithCaronMap: Record<string, string> = { S: "\u0160", s: "\u0161" };
const sWithCedillaMap: Record<string, string> = { S: "\u015E", s: "\u015F" };
const sWithCircumflexMap: Record<string, string> = { S: "\u015C", s: "\u015D" };
const sWithDotAboveMap: Record<string, string> = { S: "\u1E60", s: "\u1E61" };
const sWithDotBelowMap: Record<string, string> = { S: "\u1E62", s: "\u1E63" };
const sWithCommaBelowMap: Record<string, string> = { S: "\u0218", s: "\u0219" };
const sWithHookMap: Record<string, string> = { S: "\uA7C5", s: "\u0282" };
const sWithSwashTailMap: Record<string, string> = { S: "\u2C7E", s: "\u023F" };
const sharpSMap: Record<string, string> = { S: "\u1E9E", s: "\u00DF" };
const sWithAcuteAndDotAboveMap: Record<string, string> = { S: "\u1E64", s: "\u1E65" };
const sWithCaronAndDotAboveMap: Record<string, string> = { S: "\u1E66", s: "\u1E67" };
const sWithDotAboveAndBelowMap: Record<string, string> = { S: "\u1E68", s: "\u1E69" };
const sWithObliqueStrokeMap: Record<string, string> = { S: "\uA7A8", s: "\uA7A9" };
const sWithDiagonalStrokeMap: Record<string, string> = { S: "\uA7CC", s: "\uA7CD" };
const longSMap: Record<string, string> = { S: "S", s: "\u017F" };
const sSuperscriptMap: Record<string, string> = { S: "\u02E2", s: "\u02E2" };
const sSubscriptMap: Record<string, string> = { S: "\u209B", s: "\u209B" };
const sParenthesizedMap: Record<string, string> = { S: "\u{1F122}", s: "\u24AE" };
const sSquaredMap: Record<string, string> = { S: "\u{1F142}", s: "\u{1F142}" };
const sNegativeSquaredMap: Record<string, string> = { S: "\u{1F182}", s: "\u{1F182}" };

// ── B-specific character maps ──────────────────────────────────────────────

const bSuperscriptMap: Record<string, string> = { B: "\u{1D2E}", b: "\u{1D47}" };
const bParenthesizedMap: Record<string, string> = { B: "\u{1F111}", b: "\u249D" };
const bSquaredMap: Record<string, string> = { B: "\u{1F131}", b: "\u{1F151}" };
const bNegativeSquaredMap: Record<string, string> = { B: "\u{1F171}", b: "\u{1F191}" };
const bWithHookMap: Record<string, string> = { B: "\u0181", b: "\u0253" };
const bWithStrokeMap: Record<string, string> = { B: "\u0243", b: "\u0180" };
const bWithDotAboveMap: Record<string, string> = { B: "\u{1E02}", b: "\u{1E03}" };
const bWithDotBelowMap: Record<string, string> = { B: "\u{1E04}", b: "\u{1E05}" };
const bWithLineBelowMap: Record<string, string> = { B: "\u{1E06}", b: "\u{1E07}" };
const bWithTopbarMap: Record<string, string> = { B: "\u0182", b: "\u0183" };
const bWithFlourishMap: Record<string, string> = { B: "\uA796", b: "\uA797" };
const latinBetaMap: Record<string, string> = { B: "\uA7B4", b: "\uA7B5" };
const bWithMiddleTildeMap: Record<string, string> = { B: "B", b: "\u{1D6C}" };

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

// ── 29 B Styles ──────────────────────────────────────────────────────────

export const letterBStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap), note: "Letterlike Symbols block, not Math Alphanumeric" },
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
  { name: "Small Capital", transform: (t) => applyMap(t, smallCapsMap), note: "Same glyph used for both cases" },
  { name: "Superscript/Modifier", transform: (t) => applyMap(t, bSuperscriptMap) },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Parenthesized", transform: (t) => applyMap(t, bParenthesizedMap) },
  { name: "Squared", transform: (t) => applyMap(t, bSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "Negative Squared", transform: (t) => applyMap(t, bNegativeSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "B With Hook", transform: (t) => applyMap(t, bWithHookMap) },
  { name: "B With Stroke", transform: (t) => applyMap(t, bWithStrokeMap) },
  { name: "B With Dot Above", transform: (t) => applyMap(t, bWithDotAboveMap) },
  { name: "B With Dot Below", transform: (t) => applyMap(t, bWithDotBelowMap) },
  { name: "B With Line Below", transform: (t) => applyMap(t, bWithLineBelowMap) },
  { name: "B With Topbar", transform: (t) => applyMap(t, bWithTopbarMap) },
  { name: "B With Flourish", transform: (t) => applyMap(t, bWithFlourishMap) },
  { name: "Latin Beta", transform: (t) => applyMap(t, latinBetaMap) },
  { name: "B With Middle Tilde", transform: (t) => applyMap(t, bWithMiddleTildeMap), note: "Lowercase form only; uppercase falls back to Latin B", singleSide: "lower" },
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

// ── 37 S Styles ──────────────────────────────────────────────────────────

export const letterSStyles: AlphabetStyle[] = [
  { name: "Bold", transform: (t) => applyMap(t, boldMap) },
  { name: "Italic", transform: (t) => applyMap(t, italicMap) },
  { name: "Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
  { name: "Script", transform: (t) => applyMap(t, scriptMap) },
  { name: "Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
  { name: "Fraktur", transform: (t) => applyMap(t, frakturMap) },
  { name: "Bold Fraktur", transform: (t) => applyMap(t, boldFrakturMap) },
  { name: "Double-Struck", transform: (t) => applyMap(t, doubleStruckMap) },
  { name: "Sans-Serif", transform: (t) => applyMap(t, sansSerifMap) },
  { name: "Sans Bold", transform: (t) => applyMap(t, sansSerifBoldMap) },
  { name: "Sans Italic", transform: (t) => applyMap(t, sansSerifItalicMap) },
  { name: "Sans Bold Italic", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
  { name: "Monospace", transform: (t) => applyMap(t, monospaceMap) },
  { name: "Fullwidth", transform: (t) => applyMap(t, fullwidthMap) },
  { name: "Small Capital", transform: (t) => applyMap(t, smallCapsMap), note: "Same glyph used for both cases" },
  { name: "Circled", transform: (t) => applyMap(t, circledMap) },
  { name: "Squared", transform: (t) => applyMap(t, sSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "Negative Squared", transform: (t) => applyMap(t, sNegativeSquaredMap), note: "Capital only, no Unicode lowercase equivalent", singleSide: "upper" },
  { name: "Parenthesized", transform: (t) => applyMap(t, sParenthesizedMap) },
  { name: "S With Acute", transform: (t) => applyMap(t, sWithAcuteMap) },
  { name: "S With Caron", transform: (t) => applyMap(t, sWithCaronMap) },
  { name: "S With Cedilla", transform: (t) => applyMap(t, sWithCedillaMap) },
  { name: "S With Circumflex", transform: (t) => applyMap(t, sWithCircumflexMap) },
  { name: "S With Dot Above", transform: (t) => applyMap(t, sWithDotAboveMap) },
  { name: "S With Dot Below", transform: (t) => applyMap(t, sWithDotBelowMap) },
  { name: "S With Comma Below", transform: (t) => applyMap(t, sWithCommaBelowMap) },
  { name: "S With Hook", transform: (t) => applyMap(t, sWithHookMap) },
  { name: "S With Swash Tail", transform: (t) => applyMap(t, sWithSwashTailMap) },
  { name: "Sharp S", transform: (t) => applyMap(t, sharpSMap) },
  { name: "S With Acute + Dot Above", transform: (t) => applyMap(t, sWithAcuteAndDotAboveMap) },
  { name: "S With Caron + Dot Above", transform: (t) => applyMap(t, sWithCaronAndDotAboveMap) },
  { name: "S With Dot Above + Below", transform: (t) => applyMap(t, sWithDotAboveAndBelowMap) },
  { name: "S With Oblique Stroke", transform: (t) => applyMap(t, sWithObliqueStrokeMap) },
  { name: "S With Diagonal Stroke", transform: (t) => applyMap(t, sWithDiagonalStrokeMap) },
  { name: "Long S", transform: (t) => applyMap(t, longSMap), note: "Lowercase long-s form only; uppercase falls back to Latin S", singleSide: "lower" },
  { name: "Superscript/Modifier", transform: (t) => applyMap(t, sSuperscriptMap), note: "Small form used for both cases" },
  { name: "Subscript", transform: (t) => applyMap(t, sSubscriptMap), note: "Small form used for both cases" },
];

export function getLetterStyles(letter: string): AlphabetStyle[] {
  const upper = letter.toUpperCase();
  if (upper === "R") return letterRStyles;
  if (upper === "B") return letterBStyles;
  if (upper === "K") return letterKStyles;
  if (upper === "E") return letterEStyles;
  if (upper === "W") return letterWStyles;
  if (upper === "S") return letterSStyles;
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
const sCapitalSymbolCategories: FontCategory[] = kCapitalSymbolCategories;
const sSmallSymbolCategories: FontCategory[] = kSmallSymbolCategories;
const bCapitalSymbolCategories: FontCategory[] = [
  { name: "Maple Leaf", styles: [{ name: "", transform: (text) => `🍁${text}🍁` }] },
  { name: "Four Leaf Clover", styles: [{ name: "", transform: (text) => `🍀${text}🍀` }] },
  { name: "Rose", styles: [{ name: "", transform: (text) => `🌹${text}🌹` }] },
  { name: "Sunflower", styles: [{ name: "", transform: (text) => `🌻${text}🌻` }] },
  { name: "Mushroom", styles: [{ name: "", transform: (text) => `🍄${text}🍄` }] },
  { name: "Herb", styles: [{ name: "", transform: (text) => `🌿${text}🌿` }] },
  { name: "Leaf Fluttering", styles: [{ name: "", transform: (text) => `🍃${text}🍃` }] },
  { name: "Sun", styles: [{ name: "", transform: (text) => `☀${text}☀` }] },
  { name: "Cloud", styles: [{ name: "", transform: (text) => `☁${text}☁` }] },
  { name: "Crescent Moon", styles: [{ name: "", transform: (text) => `🌙${text}🌙` }] },
  { name: "Rainbow", styles: [{ name: "", transform: (text) => `🌈${text}🌈` }] },
  { name: "Umbrella", styles: [{ name: "", transform: (text) => `☂${text}☂` }] },
  { name: "Snowman", styles: [{ name: "", transform: (text) => `⛄${text}⛄` }] },
  { name: "Coffee", styles: [{ name: "", transform: (text) => `☕${text}☕` }] },
  { name: "Pizza", styles: [{ name: "", transform: (text) => `🍕${text}🍕` }] },
  { name: "Balloon", styles: [{ name: "", transform: (text) => `🎈${text}🎈` }] },
];

const bSmallSymbolCategories: FontCategory[] = [
  { name: "Ribbon", styles: [{ name: "", transform: (text) => `🎀${text}🎀` }] },
  { name: "Comet", styles: [{ name: "", transform: (text) => `☄${text}☄` }] },
  { name: "Pushpin", styles: [{ name: "", transform: (text) => `📍${text}📍` }] },
  { name: "Scissors", styles: [{ name: "", transform: (text) => `✂${text}✂` }] },
  { name: "Envelope", styles: [{ name: "", transform: (text) => `✉${text}✉` }] },
  { name: "Pencil", styles: [{ name: "", transform: (text) => `✏${text}✏` }] },
  { name: "Black Nib", styles: [{ name: "", transform: (text) => `✒${text}✒` }] },
  { name: "Memo", styles: [{ name: "", transform: (text) => `📝${text}📝` }] },
  { name: "Lock", styles: [{ name: "", transform: (text) => `🔒${text}🔒` }] },
  { name: "Key", styles: [{ name: "", transform: (text) => `🔑${text}🔑` }] },
  { name: "Bell", styles: [{ name: "", transform: (text) => `🔔${text}🔔` }] },
  { name: "Anchor", styles: [{ name: "", transform: (text) => `⚓${text}⚓` }] },
  { name: "Atom", styles: [{ name: "", transform: (text) => `⚛${text}⚛` }] },
  { name: "Fullwidth Brackets", styles: [{ name: "", transform: (text) => `［${text}］` }] },
  { name: "Fullwidth Braces", styles: [{ name: "", transform: (text) => `｛${text}｝` }] },
];

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
  if (upper === "S") {
    return { capital: sCapitalSymbolCategories, small: sSmallSymbolCategories };
  }
  if (upper === "B") {
    return { capital: bCapitalSymbolCategories, small: bSmallSymbolCategories };
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

export const otherAlphabetsS: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic",
    label: "Cyrillic",
    upper: "\u0421",
    lower: "\u0441",
    description: "Cyrillic Es, adapted from Greek sigma, now stands for the same S sound in Russian and many Slavic languages.",
  },
  {
    script: "Greek",
    label: "Greek",
    upper: "\u03A3",
    lower: "\u03C3 \u03C2",
    description: "Sigma itself, the direct ancestor of the Latin S.",
  },
  {
    script: "Coptic",
    label: "Coptic",
    upper: "\u2CA4",
    lower: "\u2CA5",
    description: "Kept the Greek sigma shape for Coptic Christian texts in Egypt.",
  },
  {
    script: "Cherokee",
    label: "Cherokee",
    upper: "\u13DA",
    lower: null,
    description: "Represents the syllable du, unrelated in sound to S despite the shared shape.",
  },
  {
    script: "Gothic",
    label: "Gothic",
    upper: "\u{10343}",
    lower: null,
    description: "Called sauil, used in the fourth century Gothic Bible translation by Ulfilas.",
  },
];

export const otherAlphabetsB: OtherAlphabetEntry[] = [
  {
    script: "Cyrillic Ve",
    label: "Cyrillic Ve",
    upper: "\u0412",
    lower: "\u0432",
    description: "Looks exactly like the Latin capital B, yet stands for a completely different sound, /v/ rather than /b/.",
  },
  {
    script: "Cyrillic Be",
    label: "Cyrillic Be",
    upper: "\u0411",
    lower: "\u0431",
    description: "Keeps the actual /b/ sound but wears a different shape, and both Cyrillic letters trace back to the same Greek Beta.",
  },
  {
    script: "B With Hook",
    label: "B With Hook",
    upper: "\u0181",
    lower: "\u0253",
    description: "A real working letter, not decorative, still used in Fula, Hausa, and Giziga across parts of West Africa.",
  },
];
