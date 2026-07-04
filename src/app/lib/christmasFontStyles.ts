// ---------------------------------------------------------------------------
// Christmas Font Generator — 12 Category Cards with multiple styles each
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

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

/** Wrap text with a prefix and suffix frame. */
function withFrame(text: string, pre: string, suf: string): string {
  return `${pre} ${text}${suf ? ` ${suf}` : ""}`;
}

/** Append combining characters after every non-space character. */
function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

// Deterministic Zalgo
const combAbove = [
  "\u0300", "\u0301", "\u0302", "\u0303", "\u0304", "\u0305",
  "\u0306", "\u0307", "\u0308", "\u0309", "\u030A", "\u030B",
  "\u030C", "\u030D", "\u030E", "\u030F", "\u0310", "\u0311",
  "\u0312", "\u0313", "\u0314",
];
const combBelow = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031C", "\u031D",
  "\u031E", "\u031F", "\u0320", "\u0324", "\u0325", "\u0326",
  "\u0329", "\u032A", "\u032B", "\u032C", "\u032D", "\u032E",
  "\u032F", "\u0330", "\u0331", "\u0332", "\u0333",
];

function zalgo(
  text: string,
  above: number,
  below: number,
  seed = 0,
): string {
  return [...text]
    .map((c, i) => {
      if (c === " " || c === "\u3000") return c;
      let result = c;
      for (let j = 0; j < above; j++) {
        result += combAbove[(i * 7 + j * 3 + seed) % combAbove.length];
      }
      for (let j = 0; j < below; j++) {
        result += combBelow[(i * 5 + j * 2 + seed) % combBelow.length];
      }
      return result;
    })
    .join("");
}

// ── Character Maps ────────────────────────────────────────────────────────

// Bold Serif: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldSerifMap = buildMap(0x1d400, 0x1d41a);
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// Fraktur (regular): U+1D504–U+1D51D (upper), U+1D51E–U+1D537 (lower)
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Double-Struck: U+1D538–U+1D551 (upper with 7 exceptions), U+1D552–U+1D56B (lower)
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});
const doubleStruckDigitMap = buildDigitMap(0x1d7d8);

// Bold Script: U+1D4D0–U+1D4E9 (upper), U+1D4EA–U+1D503 (lower)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Monospace: U+1D670–U+1D689 (upper), U+1D68A–U+1D6A3 (lower)
const monospaceMap = buildMap(0x1d670, 0x1d68a);
const monospaceDigitMap = buildDigitMap(0x1d7f6);

// Small Caps
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

// Enclosed Circle Letters
const circleMap = buildMap(0x24b6, 0x24d0);

// Negative Squared
const negSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  negSquaredMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f170 + i);
  negSquaredMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1f170 + i);
}

// Fullwidth Latin
const fullwidthMap: Record<string, string> = { " ": "\u3000" };
for (let i = 0; i < 26; i++) {
  fullwidthMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0xff21 + i);
  fullwidthMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0xff41 + i);
}
for (let i = 0; i < 10; i++) {
  fullwidthMap[String(i)] = String.fromCodePoint(0xff10 + i);
}

// Upside-Down character map
const upsideDownMap: Record<string, string> = {
  a: "\u0250", b: "q", c: "\u0254", d: "p", e: "\u01DD",
  f: "\u025F", g: "\u0183", h: "\u0265", i: "\u0131", j: "\u027E",
  k: "\u029E", l: "l", m: "\u026F", n: "u", o: "o",
  p: "d", q: "b", r: "\u0279", s: "s", t: "\u0287",
  u: "n", v: "\u028C", w: "\u028D", x: "x", y: "\u028E", z: "z",
  A: "\u2200", B: "\u15FA", C: "\u2183", D: "\u15E1", E: "\u018E",
  F: "\u2132", G: "\u2141", H: "H", I: "I", J: "\u017F",
  K: "\u22CA", L: "\u2142", M: "W", N: "N", O: "O",
  P: "\u0500", Q: "\u038C", R: "\u1D1A", S: "S", T: "\u22A5",
  U: "\u2229", V: "\u039B", W: "M", X: "X", Y: "\u2144", Z: "Z",
  "!": "\u00A1", "?": "\u00BF", ".": "\u02D9", ",": "'",
  "'": ",", "(": ")", ")": "(", "[": "]", "]": "[",
  "{": "}", "}": "{", "<": ">", ">": "<", "_": "\u203E",
};

function reverseUpsideDown(text: string): string {
  return [...text].reverse().map((c) => upsideDownMap[c] ?? c).join("");
}

// ── 12 Category Cards ─────────────────────────────────────────────────────
// Christmas-themed naming with festive decorators:
// Snowflake ❄, Star ⭐, Holly ❧, Tree 🎄, Bell 🔔, Candy Cane,
// Ribbon 🎀, Gift 🎁, Ornament, Sparkle ✦

// Card 1: Merry Bold
const merryBold: FontCategory = {
  name: "Merry Bold",
  styles: [
    { name: "Merry Bold", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Merry Bold Snowflake", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2744") },
    { name: "Merry Bold Star", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2B50", "\u2B50") },
    { name: "Merry Bold Holly", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2767", "\u2767") },
    { name: "Merry Bold Tree", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Merry Bold Bell", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Merry Bold Gift", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Merry Bold Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2726") },
    { name: "Merry Bold Lenticular", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u3010", "\u3011") },
    { name: "Merry Bold Corner", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u300C", "\u300D") },
    { name: "Merry Bold Ribbon", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Merry Bold Angle", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 2: Frosty Gothic
const frostyGothic: FontCategory = {
  name: "Frosty Gothic",
  styles: [
    { name: "Frosty Gothic", transform: (t) => applyMap(t, frakturMap) },
    { name: "Frosty Gothic Snowflake", transform: (t) => withSeparator(applyMap(t, frakturMap), "\u2744") },
    { name: "Frosty Gothic Star", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2B50", "\u2B50") },
    { name: "Frosty Gothic Holly", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2767", "\u2767") },
    { name: "Frosty Gothic Tree", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Frosty Gothic Bell", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Frosty Gothic Filigree", transform: (t) => withFrame(applyMap(t, frakturMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Frosty Gothic Crown", transform: (t) => withFrame(applyMap(t, frakturMap), "\u265B", "\u265B") },
    { name: "Frosty Gothic Corner", transform: (t) => withFrame(applyMap(t, frakturMap), "\u300E", "\u300F") },
    { name: "Frosty Gothic Sparkle", transform: (t) => withSeparator(applyMap(t, frakturMap), "\u2726") },
    { name: "Frosty Gothic Gift", transform: (t) => withFrame(applyMap(t, frakturMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Frosty Gothic Angle", transform: (t) => withFrame(applyMap(t, frakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 3: Winter Gothic
const winterGothic: FontCategory = {
  name: "Winter Gothic",
  styles: [
    { name: "Winter Gothic", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Winter Gothic Snowflake", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2744") },
    { name: "Winter Gothic Star", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2B50", "\u2B50") },
    { name: "Winter Gothic Holly", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2767", "\u2767") },
    { name: "Winter Gothic Tree", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Winter Gothic Filigree", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Winter Gothic Bell", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Winter Gothic Crown", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u265B", "\u265B") },
    { name: "Winter Gothic Corner", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u300E", "\u300F") },
    { name: "Winter Gothic Sparkle", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2726") },
    { name: "Winter Gothic Ribbon", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Winter Gothic Angle", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 4: Ornament Outline
const ornamentOutline: FontCategory = {
  name: "Ornament Outline",
  styles: [
    { name: "Ornament Outline", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
    { name: "Ornament Outline Snowflake", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2744") },
    { name: "Ornament Outline Star", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2B50", "\u2B50") },
    { name: "Ornament Outline Holly", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2767", "\u2767") },
    { name: "Ornament Outline Tree", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Ornament Outline Filigree", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Ornament Outline Lenticular", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u3010", "\u3011") },
    { name: "Ornament Outline Corner", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u300C", "\u300D") },
    { name: "Ornament Outline Sparkle", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2726") },
    { name: "Ornament Outline Bell", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Ornament Outline Gift", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Ornament Outline Angle", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 5: Christmas Script
const christmasScript: FontCategory = {
  name: "Christmas Script",
  styles: [
    { name: "Christmas Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Christmas Script Snowflake", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2744") },
    { name: "Christmas Script Star", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2B50", "\u2B50") },
    { name: "Christmas Script Holly", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2767", "\u2767") },
    { name: "Christmas Script Tree", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Christmas Script Heart", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2661", "\u2661") },
    { name: "Christmas Script Flower", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u273F", "\u273F") },
    { name: "Christmas Script Sparkle", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2727\uFF65\uFF9F", "\uFF9F\uFF65\u2727") },
    { name: "Christmas Script Bell", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Christmas Script Corner", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u300C", "\u300D") },
    { name: "Christmas Script Ribbon", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Christmas Script Angle", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u00AB", "\u00BB") },
  ],
};

// Card 6: Elf Mono
const elfMono: FontCategory = {
  name: "Elf Mono",
  styles: [
    { name: "Elf Mono", transform: (t) => applyMaps(t, monospaceMap, monospaceDigitMap) },
    { name: "Elf Mono Snowflake", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2744") },
    { name: "Elf Mono Star", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2B50", "\u2B50") },
    { name: "Elf Mono Tree", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Elf Mono Lenticular", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u3010", "\u3011") },
    { name: "Elf Mono Bracket", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "[", "]") },
    { name: "Elf Mono Corner", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u300C", "\u300D") },
    { name: "Elf Mono Bell", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Elf Mono Sparkle", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2726") },
    { name: "Elf Mono Gift", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Elf Mono Dot", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u30FB") },
    { name: "Elf Mono Angle", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 7: Jingle Caps
const jingleCaps: FontCategory = {
  name: "Jingle Caps",
  styles: [
    { name: "Jingle Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Jingle Caps Snowflake", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2744") },
    { name: "Jingle Caps Star", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u2B50", "\u2B50") },
    { name: "Jingle Caps Holly", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u2767", "\u2767") },
    { name: "Jingle Caps Tree", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Jingle Caps Corner", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u300C", "\u300D") },
    { name: "Jingle Caps Sparkle", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u2727\uFF65", "\uFF65\u2727") },
    { name: "Jingle Caps Bell", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Jingle Caps Dot", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u30FB") },
    { name: "Jingle Caps Ringed", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u030A"]) },
    { name: "Jingle Caps Ribbon", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Jingle Caps Angle", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u00AB", "\u00BB") },
  ],
};

// Card 8: Bauble Bubble
const baubleBubble: FontCategory = {
  name: "Bauble Bubble",
  styles: [
    { name: "Bauble Bubble", transform: (t) => applyMap(t, circleMap) },
    { name: "Bauble Bubble Snowflake", transform: (t) => withSeparator(applyMap(t, circleMap), "\u2744") },
    { name: "Bauble Bubble Star", transform: (t) => withFrame(applyMap(t, circleMap), "\u2B50", "\u2B50") },
    { name: "Bauble Bubble Holly", transform: (t) => withFrame(applyMap(t, circleMap), "\u2767", "\u2767") },
    { name: "Bauble Bubble Tree", transform: (t) => withFrame(applyMap(t, circleMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Bauble Bubble Heart", transform: (t) => withFrame(applyMap(t, circleMap), "\u2661", "\u2661") },
    { name: "Bauble Bubble Corner", transform: (t) => withFrame(applyMap(t, circleMap), "\u300C", "\u300D") },
    { name: "Bauble Bubble Sparkle", transform: (t) => withSeparator(applyMap(t, circleMap), "\u2726") },
    { name: "Bauble Bubble Bell", transform: (t) => withFrame(applyMap(t, circleMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Bauble Bubble Dot", transform: (t) => withSeparator(applyMap(t, circleMap), "\u30FB") },
    { name: "Bauble Bubble Gift", transform: (t) => withFrame(applyMap(t, circleMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Bauble Bubble Angle", transform: (t) => withFrame(applyMap(t, circleMap), "\u00AB", "\u00BB") },
  ],
};

// Card 9: Gift Box
const giftBox: FontCategory = {
  name: "Gift Box",
  styles: [
    { name: "Gift Box", transform: (t) => applyMap(t, negSquaredMap) },
    { name: "Gift Box Snowflake", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u2744") },
    { name: "Gift Box Star", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2B50", "\u2B50") },
    { name: "Gift Box Holly", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2767", "\u2767") },
    { name: "Gift Box Tree", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Gift Box Filigree", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Gift Box Lenticular", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u3010", "\u3011") },
    { name: "Gift Box Corner", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u300C", "\u300D") },
    { name: "Gift Box Sparkle", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u2726") },
    { name: "Gift Box Bell", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Gift Box Ribbon", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Gift Box Angle", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u00AB", "\u00BB") },
  ],
};

// Card 10: Noel Wide
const noelWide: FontCategory = {
  name: "Noel Wide",
  styles: [
    { name: "Noel Wide", transform: (t) => applyMap(t, fullwidthMap) },
    { name: "Noel Wide Snowflake", transform: (t) => withSeparator(applyMap(t, fullwidthMap), "\u2744") },
    { name: "Noel Wide Star", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2B50", "\u2B50") },
    { name: "Noel Wide Holly", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2767", "\u2767") },
    { name: "Noel Wide Tree", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Noel Wide Filigree", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Noel Wide Lenticular", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u3010", "\u3011") },
    { name: "Noel Wide Corner", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u300C", "\u300D") },
    { name: "Noel Wide Sparkle", transform: (t) => withSeparator(applyMap(t, fullwidthMap), "\u2726") },
    { name: "Noel Wide Bell", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Noel Wide Gift", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Noel Wide Angle", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u00AB", "\u00BB") },
  ],
};

// Card 11: Upside Down Stocking
const upsideDownStocking: FontCategory = {
  name: "Upside Down Stocking",
  styles: [
    { name: "Upside Down Stocking", transform: (t) => reverseUpsideDown(t) },
    { name: "Upside Down Snowflake", transform: (t) => withSeparator(reverseUpsideDown(t), "\u2744") },
    { name: "Upside Down Star", transform: (t) => withFrame(reverseUpsideDown(t), "\u2B50", "\u2B50") },
    { name: "Upside Down Holly", transform: (t) => withFrame(reverseUpsideDown(t), "\u2767", "\u2767") },
    { name: "Upside Down Tree", transform: (t) => withFrame(reverseUpsideDown(t), "\uD83C\uDF84", "\uD83C\uDF84") },
    { name: "Upside Down Filigree", transform: (t) => withFrame(reverseUpsideDown(t), "\u{A9C1}", "\u{A9C2}") },
    { name: "Upside Down Corner", transform: (t) => withFrame(reverseUpsideDown(t), "\u300C", "\u300D") },
    { name: "Upside Down Strike", transform: (t) => withCombining(reverseUpsideDown(t), ["\u0336"]) },
    { name: "Upside Down Bell", transform: (t) => withFrame(reverseUpsideDown(t), "\uD83D\uDD14", "\uD83D\uDD14") },
    { name: "Upside Down Sparkle", transform: (t) => withSeparator(reverseUpsideDown(t), "\u2726") },
    { name: "Upside Down Dot", transform: (t) => withSeparator(reverseUpsideDown(t), "\u30FB") },
    { name: "Upside Down Angle", transform: (t) => withFrame(reverseUpsideDown(t), "\u00AB", "\u00BB") },
  ],
};

// Card 12: Snow Glitch
const snowGlitch: FontCategory = {
  name: "Snow Glitch",
  styles: [
    { name: "Snow Glitch Light", transform: (t) => zalgo(t, 1, 1, 0) },
    { name: "Snow Glitch Medium", transform: (t) => zalgo(t, 2, 1, 2) },
    { name: "Snow Glitch Heavy", transform: (t) => zalgo(t, 3, 2, 4) },
    { name: "Snow Glitch Blizzard", transform: (t) => zalgo(t, 4, 3, 6) },
    { name: "Snow Glitch Avalanche", transform: (t) => zalgo(t, 5, 4, 8) },
    { name: "Snow Glitch Whiteout", transform: (t) => zalgo(t, 6, 5, 10) },
    { name: "Snow Glitch Frost", transform: (t) => zalgo(t, 3, 3, 12) },
    { name: "Snow Glitch Icicle", transform: (t) => zalgo(t, 2, 0, 14) },
    { name: "Snow Glitch Flurry", transform: (t) => zalgo(t, 0, 3, 16) },
    { name: "Snow Glitch Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Snow Glitch Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Snow Glitch Crosshatch", transform: (t) => withCombining(t, ["\u0337"]) },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const christmasFontCategories: FontCategory[] = [
  merryBold,
  frostyGothic,
  winterGothic,
  ornamentOutline,
  christmasScript,
  elfMono,
  jingleCaps,
  baubleBubble,
  giftBox,
  noelWide,
  upsideDownStocking,
  snowGlitch,
];
