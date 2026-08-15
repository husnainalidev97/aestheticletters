// ---------------------------------------------------------------------------
// Alphabet Font Styles — verified Unicode codepoints for single-letter pages.
// R page is the first spoke; this data file is the master source for A–Z.
// ---------------------------------------------------------------------------

export interface AlphabetStyle {
  name: string;
  transform: (text: string) => string;
  /** Optional note about rendering limits (e.g. no lowercase form). */
  note?: string;
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
const parenthesizedMap: Record<string, string> = { K: "\u{1F11A}", k: "\u24A6" };
const squaredMap: Record<string, string> = { K: "\u{1F13A}", k: "\u{1F13A}" };
const negativeCircledMap: Record<string, string> = { K: "\u{1F15A}", k: "\u{1F15A}" };
const negativeSquaredMap: Record<string, string> = { K: "\u{1F17A}", k: "\u{1F17A}" };
const turnedKMap: Record<string, string> = { K: "\u029E", k: "\u029E" };

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

// ── 22 K Styles ──────────────────────────────────────────────────────────

export const letterKStyles: AlphabetStyle[] = [
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
  { name: "K with Hook", transform: (t) => applyMap(t, kWithHookMap) },
  { name: "Parenthesized", transform: (t) => applyMap(t, parenthesizedMap) },
  { name: "Squared", transform: (t) => applyMap(t, squaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Negative Circled", transform: (t) => applyMap(t, negativeCircledMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Negative Squared", transform: (t) => applyMap(t, negativeSquaredMap), note: "No lowercase form exists; uppercase shape is used for both." },
  { name: "Turned K", transform: (t) => applyMap(t, turnedKMap), note: "This phonetic lowercase has no uppercase form; same shape is used for both." },
];

export function getLetterStyles(letter: string): AlphabetStyle[] {
  const upper = letter.toUpperCase();
  if (upper === "R") return letterRStyles;
  if (upper === "K") return letterKStyles;
  return [];
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
