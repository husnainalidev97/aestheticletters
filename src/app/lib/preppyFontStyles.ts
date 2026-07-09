// ---------------------------------------------------------------------------
// Preppy Font Generator — 12 Category Cards with multiple styles each
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
// Each card uses the most popular decorators from research:
// Filigree ꧁꧂, Lenticular 【】, Egyptian 𓆩𓆪, Korean ꒰꒱, Corner 「」,
// Sparkle ✦, Swords ⚔, Crown 👑, Stars ⋆, Dot ・, Hearts ♡

// Card 1: Bold Preppy
const boldPreppy: FontCategory = {
  name: "Bold Preppy",
  styles: [
    { name: "Bold Preppy", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Bold Preppy Filigree", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Bold Preppy Lenticular", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u3010", "\u3011") },
    { name: "Bold Preppy Egyptian", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u{13169}", "\u{1316A}") },
    { name: "Bold Preppy Korean", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\uD218", "\uD219") },
    { name: "Bold Preppy Corner", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u300C", "\u300D") },
    { name: "Bold Preppy Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2726") },
    { name: "Bold Preppy Swords", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2694", "\u2694") },
    { name: "Bold Preppy Star", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Bold Preppy Dot", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u30FB") },
    { name: "Bold Preppy Lightning", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u26A1") },
    { name: "Bold Preppy Angle", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 2: Gamer Gothic
const gamerGothic: FontCategory = {
  name: "Gamer Gothic",
  styles: [
    { name: "Gamer Gothic", transform: (t) => applyMap(t, frakturMap) },
    { name: "Gamer Gothic Filigree", transform: (t) => withFrame(applyMap(t, frakturMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Gamer Gothic Lenticular", transform: (t) => withFrame(applyMap(t, frakturMap), "\u3010", "\u3011") },
    { name: "Gamer Gothic Egyptian", transform: (t) => withFrame(applyMap(t, frakturMap), "\u{13169}", "\u{1316A}") },
    { name: "Gamer Gothic Swords", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2694", "\u2694") },
    { name: "Gamer Gothic Dagger", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2020\u2021", "\u2021\u2020") },
    { name: "Gamer Gothic Rune", transform: (t) => withFrame(applyMap(t, frakturMap), "\u16ED", "\u16ED") },
    { name: "Gamer Gothic Crown", transform: (t) => withFrame(applyMap(t, frakturMap), "\u265B", "\u265B") },
    { name: "Gamer Gothic Corner", transform: (t) => withFrame(applyMap(t, frakturMap), "\u300E", "\u300F") },
    { name: "Gamer Gothic Sparkle", transform: (t) => withSeparator(applyMap(t, frakturMap), "\u2726") },
    { name: "Gamer Gothic Skull", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2620", "\u2620") },
    { name: "Gamer Gothic Angle", transform: (t) => withFrame(applyMap(t, frakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 3: Heavy Gothic
const heavyGothic: FontCategory = {
  name: "Heavy Gothic",
  styles: [
    { name: "Heavy Gothic", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Heavy Gothic Filigree", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Heavy Gothic Lenticular", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u3010", "\u3011") },
    { name: "Heavy Gothic Egyptian", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u{13169}", "\u{1316A}") },
    { name: "Heavy Gothic Cross", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2719\u271B", "\u271B\u2719") },
    { name: "Heavy Gothic Swords", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2694", "\u2694") },
    { name: "Heavy Gothic Skull", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2620", "\u2620") },
    { name: "Heavy Gothic Crown", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u265B", "\u265B") },
    { name: "Heavy Gothic Rune", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u16ED", "\u16ED") },
    { name: "Heavy Gothic Corner", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u300E", "\u300F") },
    { name: "Heavy Gothic Sparkle", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2726") },
    { name: "Heavy Gothic Angle", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u00AB", "\u00BB") },
  ],
};

// Card 4: Server Outline
const serverOutline: FontCategory = {
  name: "Server Outline",
  styles: [
    { name: "Server Outline", transform: (t) => applyMaps(t, doubleStruckMap, doubleStruckDigitMap) },
    { name: "Server Outline Filigree", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Server Outline Lenticular", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u3010", "\u3011") },
    { name: "Server Outline Egyptian", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u{13169}", "\u{1316A}") },
    { name: "Server Outline Korean", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\uD218", "\uD219") },
    { name: "Server Outline Corner", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u300C", "\u300D") },
    { name: "Server Outline Sparkle", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u2726") },
    { name: "Server Outline Star", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Server Outline Diamond", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u25C6\u2500\u2500", "\u2500\u2500\u25C6") },
    { name: "Server Outline Dot", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u30FB") },
    { name: "Server Outline Lightning", transform: (t) => withSeparator(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u26A1") },
    { name: "Server Outline Angle", transform: (t) => withFrame(applyMaps(t, doubleStruckMap, doubleStruckDigitMap), "\u00AB", "\u00BB") },
  ],
};

// Card 5: Preppy Script
const preppyScript: FontCategory = {
  name: "Preppy Script",
  styles: [
    { name: "Preppy Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Preppy Script Filigree", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Preppy Script Lenticular", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u3010", "\u3011") },
    { name: "Preppy Script Korean", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uD218", "\uD219") },
    { name: "Preppy Script Heart", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2661", "\u2661") },
    { name: "Preppy Script Flower", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u273F", "\u273F") },
    { name: "Preppy Script Sparkle", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2727\uFF65\uFF9F", "\uFF9F\uFF65\u2727") },
    { name: "Preppy Script Wave", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u223C") },
    { name: "Preppy Script Star", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Preppy Script Corner", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u300C", "\u300D") },
    { name: "Preppy Script Pearl", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u22B9\u2032\u02DA", "\u02DA\u2032\u22B9") },
    { name: "Preppy Script Angle", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u00AB", "\u00BB") },
  ],
};

// Card 6: Mono Tag
const monoTag: FontCategory = {
  name: "Mono Tag",
  styles: [
    { name: "Mono Tag", transform: (t) => applyMaps(t, monospaceMap, monospaceDigitMap) },
    { name: "Mono Tag Filigree", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Mono Tag Lenticular", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u3010", "\u3011") },
    { name: "Mono Tag Terminal", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), ">_", "") },
    { name: "Mono Tag Bracket", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "[", "]") },
    { name: "Mono Tag Corner", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u300C", "\u300D") },
    { name: "Mono Tag Pipe", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2502", "\u2502") },
    { name: "Mono Tag Block", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2593\u2592\u2591", "\u2591\u2592\u2593") },
    { name: "Mono Tag Sparkle", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2726") },
    { name: "Mono Tag Arrow", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2570\u2508\u27A4", "") },
    { name: "Mono Tag Dot", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u30FB") },
    { name: "Mono Tag Diamond", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u25C7\u2500", "\u2500\u25C7") },
  ],
};

// Card 7: Tiny Caps
const tinyCaps: FontCategory = {
  name: "Tiny Caps",
  styles: [
    { name: "Tiny Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Tiny Caps Filigree", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Tiny Caps Lenticular", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u3010", "\u3011") },
    { name: "Tiny Caps Korean", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\uD218", "\uD219") },
    { name: "Tiny Caps Corner", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u300C", "\u300D") },
    { name: "Tiny Caps Sparkle", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u2727\uFF65", "\uFF65\u2727") },
    { name: "Tiny Caps Star", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Tiny Caps Dot", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u30FB") },
    { name: "Tiny Caps Ringed", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u030A"]) },
    { name: "Tiny Caps Tibetan", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u0F3C", "\u0F3D") },
    { name: "Tiny Caps Flower", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u273F", "\u273F") },
    { name: "Tiny Caps Angle", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u00AB", "\u00BB") },
  ],
};

// Card 8: Bubble Tag
const bubbleTag: FontCategory = {
  name: "Bubble Tag",
  styles: [
    { name: "Bubble Tag", transform: (t) => applyMap(t, circleMap) },
    { name: "Bubble Tag Filigree", transform: (t) => withFrame(applyMap(t, circleMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Bubble Tag Lenticular", transform: (t) => withFrame(applyMap(t, circleMap), "\u3010", "\u3011") },
    { name: "Bubble Tag Korean", transform: (t) => withFrame(applyMap(t, circleMap), "\uD218", "\uD219") },
    { name: "Bubble Tag Heart", transform: (t) => withFrame(applyMap(t, circleMap), "\u2661", "\u2661") },
    { name: "Bubble Tag Corner", transform: (t) => withFrame(applyMap(t, circleMap), "\u300C", "\u300D") },
    { name: "Bubble Tag Sparkle", transform: (t) => withSeparator(applyMap(t, circleMap), "\u2726") },
    { name: "Bubble Tag Star", transform: (t) => withFrame(applyMap(t, circleMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Bubble Tag Dot", transform: (t) => withSeparator(applyMap(t, circleMap), "\u30FB") },
    { name: "Bubble Tag Lightning", transform: (t) => withSeparator(applyMap(t, circleMap), "\u26A1") },
    { name: "Bubble Tag Flower", transform: (t) => withFrame(applyMap(t, circleMap), "\u2740", "\u2740") },
    { name: "Bubble Tag Angle", transform: (t) => withFrame(applyMap(t, circleMap), "\u00AB", "\u00BB") },
  ],
};

// Card 9: Boxed Tag
const boxedTag: FontCategory = {
  name: "Boxed Tag",
  styles: [
    { name: "Boxed Tag", transform: (t) => applyMap(t, negSquaredMap) },
    { name: "Boxed Tag Filigree", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Boxed Tag Lenticular", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u3010", "\u3011") },
    { name: "Boxed Tag Egyptian", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u{13169}", "\u{1316A}") },
    { name: "Boxed Tag Swords", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2694", "\u2694") },
    { name: "Boxed Tag Corner", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u300C", "\u300D") },
    { name: "Boxed Tag Sparkle", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u2726") },
    { name: "Boxed Tag Lightning", transform: (t) => withSeparator(applyMap(t, negSquaredMap), "\u26A1") },
    { name: "Boxed Tag Crown", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u265B", "\u265B") },
    { name: "Boxed Tag Block", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2588\u2593\u2592", "\u2592\u2593\u2588") },
    { name: "Boxed Tag Diamond", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u25C6\u2500\u2500", "\u2500\u2500\u25C6") },
    { name: "Boxed Tag Angle", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u00AB", "\u00BB") },
  ],
};

// Card 10: Wide Tag
const wideTag: FontCategory = {
  name: "Wide Tag",
  styles: [
    { name: "Wide Tag", transform: (t) => applyMap(t, fullwidthMap) },
    { name: "Wide Tag Filigree", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u{A9C1}", "\u{A9C2}") },
    { name: "Wide Tag Lenticular", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u3010", "\u3011") },
    { name: "Wide Tag Neon", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2591\u2592\u2593", "\u2593\u2592\u2591") },
    { name: "Wide Tag Block", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2588\u2593\u2592\u2591", "\u2591\u2592\u2593\u2588") },
    { name: "Wide Tag Scan", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2584\u2580\u2584\u2580", "\u2580\u2584\u2580\u2584") },
    { name: "Wide Tag Corner", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u300C", "\u300D") },
    { name: "Wide Tag Korean", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\uD218", "\uD219") },
    { name: "Wide Tag Sparkle", transform: (t) => withSeparator(applyMap(t, fullwidthMap), "\u2726") },
    { name: "Wide Tag Star", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Wide Tag Diamond", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u25C6\u2500\u2500", "\u2500\u2500\u25C6") },
    { name: "Wide Tag Angle", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u00AB", "\u00BB") },
  ],
};

// Card 11: Flipped Tag
const flippedTag: FontCategory = {
  name: "Flipped Tag",
  styles: [
    { name: "Flipped Tag", transform: (t) => reverseUpsideDown(t) },
    { name: "Flipped Tag Filigree", transform: (t) => withFrame(reverseUpsideDown(t), "\u{A9C1}", "\u{A9C2}") },
    { name: "Flipped Tag Lenticular", transform: (t) => withFrame(reverseUpsideDown(t), "\u3010", "\u3011") },
    { name: "Flipped Tag Egyptian", transform: (t) => withFrame(reverseUpsideDown(t), "\u{13169}", "\u{1316A}") },
    { name: "Flipped Tag Corner", transform: (t) => withFrame(reverseUpsideDown(t), "\u300C", "\u300D") },
    { name: "Flipped Tag Korean", transform: (t) => withFrame(reverseUpsideDown(t), "\uD218", "\uD219") },
    { name: "Flipped Tag Sparkle", transform: (t) => withSeparator(reverseUpsideDown(t), "\u2726") },
    { name: "Flipped Tag Strike", transform: (t) => withCombining(reverseUpsideDown(t), ["\u0336"]) },
    { name: "Flipped Tag Star", transform: (t) => withFrame(reverseUpsideDown(t), "\u22C6\u2729", "\u2729\u22C6") },
    { name: "Flipped Tag Skull", transform: (t) => withFrame(reverseUpsideDown(t), "\u2620", "\u2620") },
    { name: "Flipped Tag Dot", transform: (t) => withSeparator(reverseUpsideDown(t), "\u30FB") },
    { name: "Flipped Tag Angle", transform: (t) => withFrame(reverseUpsideDown(t), "\u00AB", "\u00BB") },
  ],
};

// Card 12: Glitch Tag
const glitchTag: FontCategory = {
  name: "Glitch Tag",
  styles: [
    { name: "Glitch Tag Light", transform: (t) => zalgo(t, 1, 1, 0) },
    { name: "Glitch Tag Medium", transform: (t) => zalgo(t, 2, 1, 2) },
    { name: "Glitch Tag Heavy", transform: (t) => zalgo(t, 3, 2, 4) },
    { name: "Glitch Tag Extreme", transform: (t) => zalgo(t, 4, 3, 6) },
    { name: "Glitch Tag Chaos", transform: (t) => zalgo(t, 5, 4, 8) },
    { name: "Glitch Tag Meltdown", transform: (t) => zalgo(t, 6, 5, 10) },
    { name: "Glitch Tag Corrupt", transform: (t) => zalgo(t, 3, 3, 12) },
    { name: "Glitch Tag Static", transform: (t) => zalgo(t, 2, 0, 14) },
    { name: "Glitch Tag Void", transform: (t) => zalgo(t, 0, 3, 16) },
    { name: "Glitch Tag Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Glitch Tag Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Glitch Tag Crosshatch", transform: (t) => withCombining(t, ["\u0337"]) },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const preppyFontCategories: FontCategory[] = [
  boldPreppy,
  gamerGothic,
  heavyGothic,
  serverOutline,
  preppyScript,
  monoTag,
  tinyCaps,
  bubbleTag,
  boxedTag,
  wideTag,
  flippedTag,
  glitchTag,
];
