// ---------------------------------------------------------------------------
// Halloween Font Style Definitions — EXCLUSIVE to /halloween-fonts page
// 10 categories with Google Fonts (shown first) + Unicode-based styles
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Generic Helpers ────────────────────────────────────────────────────────

function buildMap(
  upperStart: number,
  lowerStart: number,
  exc?: Record<string, string>,
): Record<string, string> {
  const m: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    m[String.fromCharCode(65 + i)] = String.fromCodePoint(upperStart + i);
    m[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }
  if (exc) Object.assign(m, exc);
  return m;
}

function apply(text: string, map: Record<string, string>): string {
  return [...text].map((c) => map[c] ?? c).join("");
}

function withCombining(text: string, marks: string[]): string {
  const suffix = marks.join("");
  return [...text]
    .map((c) => (c === " " || c === "\u3000" ? c : c + suffix))
    .join("");
}

const combAbove = [
  "\u0300", "\u0301", "\u0302", "\u0303", "\u0304", "\u0305",
  "\u0306", "\u0307", "\u0308", "\u0309", "\u030A", "\u030B",
  "\u030C", "\u030D", "\u030E", "\u030F", "\u0310", "\u0311",
  "\u0312", "\u0313", "\u0314", "\u0315",
];
const combBelow = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031C", "\u031D",
  "\u031E", "\u031F", "\u0320", "\u0324", "\u0325", "\u0326",
  "\u0329", "\u032A", "\u032B", "\u032C", "\u032D", "\u032E",
  "\u032F", "\u0330", "\u0331", "\u0332", "\u0333",
];

function zalgo(text: string, above: number, below: number, seed = 0): string {
  return [...text]
    .map((c, i) => {
      if (c === " " || c === "\u3000") return c;
      let r = c;
      for (let j = 0; j < above; j++) {
        r += combAbove[(i * 7 + j * 3 + seed) % combAbove.length];
      }
      for (let j = 0; j < below; j++) {
        r += combBelow[(i * 5 + j * 2 + seed) % combBelow.length];
      }
      return r;
    })
    .join("");
}

// ── Character Maps ─────────────────────────────────────────────────────────

const FRAKTUR = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

const BOLD_FRAKTUR = buildMap(0x1d56c, 0x1d586);

const DOUBLE_STRUCK = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});

const BOLD_SERIF = buildMap(0x1d400, 0x1d41a);

const BOLD_ITALIC = buildMap(0x1d468, 0x1d482);

const MATH_ITALIC = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

const MATH_SCRIPT = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

const BOLD_SCRIPT = buildMap(0x1d4d0, 0x1d4ea);

const FULLWIDTH = buildMap(0xff21, 0xff41);

const MONOSPACE = buildMap(0x1d670, 0x1d68a);

const SANS = buildMap(0x1d5a0, 0x1d5ba);

const SANS_BOLD = buildMap(0x1d5d4, 0x1d5ee);

const SANS_ITALIC = buildMap(0x1d608, 0x1d622);

const SANS_BOLD_ITALIC = buildMap(0x1d63c, 0x1d656);

const SMALL_CAPS: Record<string, string> = {
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07",
  f: "\uA730", g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A",
  k: "\u1D0B", l: "\u029F", m: "\u1D0D", n: "\u0274", o: "\u1D0F",
  p: "\u1D18", q: "\u01EB", r: "\u0280", s: "\u0455", t: "\u1D1B",
  u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x", y: "\u028F", z: "\u1D22",
};

// ── Specialized Transform Functions ────────────────────────────────────────

function smallCaps(text: string): string {
  return [...text].map((c) => SMALL_CAPS[c.toLowerCase()] ?? c).join("");
}

function squared(text: string): string {
  return [...text]
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f130 + code - 65);
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f130 + code - 97);
      return c;
    })
    .join("");
}

function negSquared(text: string): string {
  return [...text]
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f170 + code - 65);
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f170 + code - 97);
      return c;
    })
    .join("");
}

function circled(text: string): string {
  return [...text]
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + code - 65);
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + code - 97);
      return c;
    })
    .join("");
}

function negCircled(text: string): string {
  return [...text]
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f150 + code - 65);
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f150 + code - 97);
      return c;
    })
    .join("");
}

const SUPERSCRIPT: Record<string, string> = {
  a: "\u1D43", b: "\u1D47", c: "\u1D9C", d: "\u1D48", e: "\u1D49",
  f: "\u1DA0", g: "\u1D4D", h: "\u02B0", i: "\u2071", j: "\u02B2",
  k: "\u1D4F", l: "\u02E1", m: "\u1D50", n: "\u207F", o: "\u1D52",
  p: "\u1D56", r: "\u02B3", s: "\u02E2", t: "\u1D57",
  u: "\u1D58", v: "\u1D5B", w: "\u02B7", x: "\u02E3", y: "\u02B8",
  z: "\u1DBB",
  A: "\u1D2C", B: "\u1D2E", D: "\u1D30", E: "\u1D31",
  G: "\u1D33", H: "\u1D34", I: "\u1D35", J: "\u1D36",
  K: "\u1D37", L: "\u1D38", M: "\u1D39", N: "\u1D3A",
  O: "\u1D3C", P: "\u1D3E", R: "\u1D3F",
  T: "\u1D40", U: "\u1D41", V: "\u2C7D", W: "\u1D42",
};

function superscript(text: string): string {
  return [...text].map((c) => SUPERSCRIPT[c] ?? c).join("");
}

function regionalIndicator(text: string): string {
  return [...text]
    .map((c) => {
      const code = c.toUpperCase().charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f1e6 + code - 65);
      return c;
    })
    .join("");
}

const FUTHARK: Record<string, string> = {};
const futharkLower: Record<string, string> = {
  a: "\u16A8", b: "\u16D2", c: "\u16B2", d: "\u16DE", e: "\u16D6",
  f: "\u16A0", g: "\u16B7", h: "\u16BA", i: "\u16C1", j: "\u16C3",
  k: "\u16B2", l: "\u16DA", m: "\u16D7", n: "\u16BE", o: "\u16DF",
  p: "\u16C8", q: "\u16B2", r: "\u16B1", s: "\u16CA", t: "\u16CF",
  u: "\u16A2", v: "\u16B9", w: "\u16B9", x: "\u16B2", y: "\u16C7",
  z: "\u16C9",
};
for (let i = 0; i < 26; i++) {
  const lower = String.fromCharCode(97 + i);
  FUTHARK[lower] = futharkLower[lower];
  FUTHARK[String.fromCharCode(65 + i)] = futharkLower[lower];
}

const OGHAM: Record<string, string> = {};
const oghamLower: Record<string, string> = {
  a: "\u1690", b: "\u1681", c: "\u1689", d: "\u1687", e: "\u1693",
  f: "\u1683", g: "\u168C", h: "\u1686", i: "\u1694", j: "\u1694",
  k: "\u1689", l: "\u1682", m: "\u168B", n: "\u1685", o: "\u1691",
  p: "\u169A", q: "\u168A", r: "\u168F", s: "\u1684", t: "\u1688",
  u: "\u1692", v: "\u1683", w: "\u1683", x: "\u1689", y: "\u1694",
  z: "\u168E",
};
for (let i = 0; i < 26; i++) {
  const lower = String.fromCharCode(97 + i);
  OGHAM[lower] = oghamLower[lower];
  OGHAM[String.fromCharCode(65 + i)] = oghamLower[lower];
}

const UPSIDE_DOWN: Record<string, string> = {
  a: "\u0250", b: "q", c: "\u0254", d: "p", e: "\u01DD",
  f: "\u025F", g: "\u0183", h: "\u0265", i: "\u0131", j: "\u027E",
  k: "\u029E", l: "l", m: "\u026F", n: "u", o: "o",
  p: "d", q: "b", r: "\u0279", s: "s", t: "\u0287",
  u: "n", v: "\u028C", w: "\u028D", x: "x", y: "\u028E", z: "z",
  A: "\u2200", B: "B", C: "\u2183", D: "D", E: "\u018E",
  F: "\u2132", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "\u2142", M: "W", N: "N", O: "O",
  P: "P", Q: "Q", R: "R", S: "S", T: "\u22A5",
  U: "\u2229", V: "\u039B", W: "M", X: "X", Y: "\u2144", Z: "Z",
};

function upsideDown(text: string): string {
  return [...text]
    .reverse()
    .map((c) => UPSIDE_DOWN[c] ?? c)
    .join("");
}

function reverseMirror(text: string): string {
  return "\u202E" + text;
}

// ── 1: Graveyard Gothic ───────────────────────────────────────────────────

const graveyardGothic: FontCategory = {
  name: "Graveyard Gothic",
  styles: [
    // Google Fonts
    { name: "Mystery Quest", transform: (t) => t, fontFamily: "'Mystery Quest', cursive" },
    { name: "Grenze Gotisch", transform: (t) => t, fontFamily: "'Grenze Gotisch', serif" },
    { name: "Ruslan Display", transform: (t) => t, fontFamily: "'Ruslan Display', cursive" },
    { name: "New Rocker", transform: (t) => t, fontFamily: "'New Rocker', cursive" },
    { name: "Road Rage", transform: (t) => t, fontFamily: "'Road Rage', cursive" },
    // Unicode styles
    { name: "Gothic Fraktur", transform: (t) => apply(t, FRAKTUR) },
    { name: "Bold Gothic Fraktur", transform: (t) => apply(t, BOLD_FRAKTUR) },
    { name: "Double Struck Hollow", transform: (t) => apply(t, DOUBLE_STRUCK) },
    { name: "Bold Serif Heavy", transform: (t) => apply(t, BOLD_SERIF) },
    { name: "Bold Italic Serif", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Fullwidth Gothic", transform: (t) => apply(t, FULLWIDTH) },
    { name: "Squared Block", transform: (t) => squared(t) },
    { name: "Negative Squared", transform: (t) => negSquared(t) },
    { name: "Small Caps Gothic", transform: (t) => smallCaps(t) },
    { name: "Enclosed Circled", transform: (t) => circled(t) },
  ],
};

// ── 2: Blood Drip ─────────────────────────────────────────────────────────

const bloodDrip: FontCategory = {
  name: "Blood Drip",
  styles: [
    // Google Fonts
    { name: "Eater", transform: (t) => t, fontFamily: "'Eater', cursive" },
    { name: "Rubik Wet Paint", transform: (t) => t, fontFamily: "'Rubik Wet Paint', cursive" },
    { name: "Nosifer", transform: (t) => t, fontFamily: "'Nosifer', cursive" },
    { name: "Rubik Puddles", transform: (t) => t, fontFamily: "'Rubik Puddles', cursive" },
    // Unicode styles
    { name: "Blood Drip Light", transform: (t) => withCombining(t, ["\u0322", "\u0323"]) },
    { name: "Blood Drip Medium", transform: (t) => withCombining(t, ["\u0324", "\u0325", "\u0326"]) },
    { name: "Blood Drip Heavy", transform: (t) => withCombining(t, ["\u0329", "\u032A", "\u032B"]) },
    { name: "Gore Overflow", transform: (t) => zalgo(t, 0, 7, 5) },
    { name: "Zalgo Full Chaos", transform: (t) => zalgo(t, 5, 5, 11) },
    { name: "Tilde Blood", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Cross Slash", transform: (t) => withCombining(t, ["\u0338"]) },
    { name: "Strikethrough Gore", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Double Underline Drip", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Macron Drip", transform: (t) => withCombining(t, ["\u0331"]) },
  ],
};

// ── 3: Cursed Script ──────────────────────────────────────────────────────

const cursedScript: FontCategory = {
  name: "Cursed Script",
  styles: [
    // Google Fonts
    { name: "Rubik Distressed", transform: (t) => t, fontFamily: "'Rubik Distressed', cursive" },
    { name: "Rubik Beastly", transform: (t) => t, fontFamily: "'Rubik Beastly', cursive" },
    { name: "Stick", transform: (t) => t, fontFamily: "'Stick', sans-serif" },
    // Unicode styles
    { name: "Zalgo Light", transform: (t) => zalgo(t, 2, 0, 0) },
    { name: "Zalgo Medium", transform: (t) => zalgo(t, 3, 2, 3) },
    { name: "Zalgo Heavy", transform: (t) => zalgo(t, 7, 7, 7) },
    { name: "Zalgo God", transform: (t) => zalgo(t, 11, 11, 13) },
    { name: "Glitch Strikethrough", transform: (t) => withCombining(t, ["\u0335"]) },
    { name: "Crossed Out Cursed", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "X Mark Cursed", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Circle Void", transform: (t) => withCombining(t, ["\u20DD"]) },
    { name: "Upside Down", transform: (t) => upsideDown(t) },
    { name: "Reverse Mirror", transform: (t) => reverseMirror(t) },
  ],
};

// ── 4: Pumpkin Hollow ─────────────────────────────────────────────────────

const pumpkinHollow: FontCategory = {
  name: "Pumpkin Hollow",
  styles: [
    // Google Fonts
    { name: "Creepster", transform: (t) => t, fontFamily: "'Creepster', cursive" },
    { name: "Emilys Candy", transform: (t) => t, fontFamily: "'Emilys Candy', cursive" },
    { name: "Henny Penny", transform: (t) => t, fontFamily: "'Henny Penny', cursive" },
    { name: "Jolly Lodger", transform: (t) => t, fontFamily: "'Jolly Lodger', cursive" },
    { name: "Irish Grover", transform: (t) => t, fontFamily: "'Irish Grover', cursive" },
    // Unicode styles
    { name: "Bubble Circle", transform: (t) => circled(t) },
    { name: "Candy Square", transform: (t) => squared(t) },
    { name: "Negative Circle Candy", transform: (t) => negCircled(t) },
    { name: "Fullwidth Fun", transform: (t) => apply(t, FULLWIDTH) },
    { name: "Superscript Tiny", transform: (t) => superscript(t) },
    { name: "Regional Indicator", transform: (t) => regionalIndicator(t) },
    { name: "Small Caps Cute", transform: (t) => smallCaps(t) },
    { name: "Mathematical Sans", transform: (t) => apply(t, SANS) },
    { name: "Bold Sans Pumpkin", transform: (t) => apply(t, SANS_BOLD) },
    { name: "Dot Above Sparkle", transform: (t) => withCombining(t, ["\u0307"]) },
  ],
};

// ── 5: Ghost Whisper ──────────────────────────────────────────────────────

const ghostWhisper: FontCategory = {
  name: "Ghost Whisper",
  styles: [
    // Google Fonts
    { name: "Flavors", transform: (t) => t, fontFamily: "'Flavors', cursive" },
    { name: "Are You Serious", transform: (t) => t, fontFamily: "'Are You Serious', cursive" },
    { name: "Shadows Into Light", transform: (t) => t, fontFamily: "'Shadows Into Light', cursive" },
    // Unicode styles
    { name: "Small Caps Whisper", transform: (t) => smallCaps(t) },
    { name: "Ring Above Float", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Dot Phantom", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Breve Crescent", transform: (t) => withCombining(t, ["\u0306"]) },
    { name: "Tilde Wisp", transform: (t) => withCombining(t, ["\u0303"]) },
    { name: "Macron Float", transform: (t) => withCombining(t, ["\u0304"]) },
    { name: "Acute Accent Ghost", transform: (t) => withCombining(t, ["\u0301"]) },
    { name: "Overline Ghost", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Superscript Wisp", transform: (t) => superscript(t) },
    { name: "Sans Serif Thin Ghost", transform: (t) => apply(t, SANS_ITALIC) },
  ],
};

// ── 6: Witch Spell ────────────────────────────────────────────────────────

const witchSpell: FontCategory = {
  name: "Witch Spell",
  styles: [
    // Google Fonts
    { name: "Rubik Gemstones", transform: (t) => t, fontFamily: "'Rubik Gemstones', cursive" },
    { name: "Ceviche One", transform: (t) => t, fontFamily: "'Ceviche One', cursive" },
    { name: "Tillana", transform: (t) => t, fontFamily: "'Tillana', cursive" },
    { name: "Bahiana", transform: (t) => t, fontFamily: "'Bahiana', cursive" },
    // Unicode styles
    { name: "Witch Script", transform: (t) => apply(t, MATH_SCRIPT) },
    { name: "Bold Witch Script", transform: (t) => apply(t, BOLD_SCRIPT) },
    { name: "Italic Spell", transform: (t) => apply(t, MATH_ITALIC) },
    { name: "Bold Italic Spell", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Double Struck Rune", transform: (t) => apply(t, DOUBLE_STRUCK) },
    { name: "Monospace Rune", transform: (t) => apply(t, MONOSPACE) },
    { name: "Sans Bold Witch", transform: (t) => apply(t, SANS_BOLD) },
    { name: "Sans Italic Spell", transform: (t) => apply(t, SANS_ITALIC) },
    { name: "Circumflex Crown", transform: (t) => withCombining(t, ["\u0302"]) },
    { name: "Star Occult", transform: (t) => withCombining(t, ["\u20F0"]) },
  ],
};

// ── 7: Skull Gothic ──────────────────────────────────────────────────────

const skullGothic: FontCategory = {
  name: "Skull Gothic",
  styles: [
    // Google Fonts
    { name: "Butcherman", transform: (t) => t, fontFamily: "'Butcherman', cursive" },
    { name: "Asset", transform: (t) => t, fontFamily: "'Asset', cursive" },
    { name: "Rubik Burned", transform: (t) => t, fontFamily: "'Rubik Burned', cursive" },
    { name: "Bangers", transform: (t) => t, fontFamily: "'Bangers', cursive" },
    // Unicode styles
    { name: "Bold Serif Skull", transform: (t) => apply(t, BOLD_SERIF) },
    { name: "Bold Fraktur Dark", transform: (t) => apply(t, BOLD_FRAKTUR) },
    { name: "X Bone Overlay", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Vertical Strike", transform: (t) => withCombining(t, ["\u0329"]) },
    { name: "Double Below Decay", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Bold Italic Dark", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Sans Bold Heavy", transform: (t) => apply(t, SANS_BOLD_ITALIC) },
    { name: "Negative Squared Dark", transform: (t) => negSquared(t) },
    { name: "Tilde Decay", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Bridge Below Bone", transform: (t) => withCombining(t, ["\u032A"]) },
  ],
};

// ── 8: Moonlight Cursive ──────────────────────────────────────────────────

const moonlightCursive: FontCategory = {
  name: "Moonlight Cursive",
  styles: [
    // Google Fonts
    { name: "Meddon", transform: (t) => t, fontFamily: "'Meddon', cursive" },
    { name: "Purple Purse", transform: (t) => t, fontFamily: "'Purple Purse', cursive" },
    // Unicode styles
    { name: "Moonlight Script", transform: (t) => apply(t, MATH_SCRIPT) },
    { name: "Bold Moon Script", transform: (t) => apply(t, BOLD_SCRIPT) },
    { name: "Italic Moon", transform: (t) => apply(t, MATH_ITALIC) },
    { name: "Bold Italic Moon", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Sans Italic Moon", transform: (t) => apply(t, SANS_ITALIC) },
    { name: "Sans Bold Italic Moon", transform: (t) => apply(t, SANS_BOLD_ITALIC) },
    { name: "Double Struck Elegant", transform: (t) => apply(t, DOUBLE_STRUCK) },
    { name: "Macron Moon", transform: (t) => withCombining(t, ["\u0304"]) },
    { name: "Breve Moon Arc", transform: (t) => withCombining(t, ["\u0306"]) },
    { name: "Overline Silver", transform: (t) => withCombining(t, ["\u0305"]) },
  ],
};

// ── 9: Dark Ritual ────────────────────────────────────────────────────────

const darkRitual: FontCategory = {
  name: "Dark Ritual",
  styles: [
    // Google Fonts
    { name: "Kablammo", transform: (t) => t, fontFamily: "'Kablammo', cursive" },
    { name: "Trade Winds", transform: (t) => t, fontFamily: "'Trade Winds', cursive" },
    { name: "Underdog", transform: (t) => t, fontFamily: "'Underdog', cursive" },
    { name: "Sancreek", transform: (t) => t, fontFamily: "'Sancreek', cursive" },
    { name: "Manufacturing Consent", transform: (t) => t, fontFamily: "'Manufacturing Consent', cursive" },
    // Unicode styles
    { name: "Elder Futhark Runes", transform: (t) => apply(t, FUTHARK) },
    { name: "Ogham Celtic", transform: (t) => apply(t, OGHAM) },
    { name: "Bold Fraktur Ritual", transform: (t) => apply(t, BOLD_FRAKTUR) },
    { name: "Gothic Fraktur Ancient", transform: (t) => apply(t, FRAKTUR) },
    { name: "Fullwidth Ritual", transform: (t) => apply(t, FULLWIDTH) },
    { name: "Negative Squared Seal", transform: (t) => negSquared(t) },
    { name: "Double Struck Hollow Stone", transform: (t) => apply(t, DOUBLE_STRUCK) },
    { name: "Combining Below Ritual", transform: (t) => withCombining(t, ["\u0316", "\u0317"]) },
    { name: "Circumflex Crown Ritual", transform: (t) => withCombining(t, ["\u0302"]) },
    { name: "Turned Rotated", transform: (t) => upsideDown(t) },
  ],
};

// ── 10: Bat Wing ──────────────────────────────────────────────────────────

const batWing: FontCategory = {
  name: "Bat Wing",
  styles: [
    // Google Fonts
    { name: "Barriecito", transform: (t) => t, fontFamily: "'Barriecito', cursive" },
    { name: "Barrio", transform: (t) => t, fontFamily: "'Barrio', cursive" },
    { name: "Asimovian", transform: (t) => t, fontFamily: "'Asimovian', cursive" },
    // Unicode styles
    { name: "Fraktur Fang", transform: (t) => apply(t, FRAKTUR) },
    { name: "Small Caps Vampire", transform: (t) => smallCaps(t) },
    { name: "Overline Fang", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Macron Fang", transform: (t) => withCombining(t, ["\u0331"]) },
    { name: "Circumflex Fang", transform: (t) => withCombining(t, ["\u0302"]) },
    { name: "Acute Fang Strike", transform: (t) => withCombining(t, ["\u0301"]) },
    { name: "Double Struck Hollow Fang", transform: (t) => apply(t, DOUBLE_STRUCK) },
    { name: "Bold Italic Vampire", transform: (t) => apply(t, BOLD_ITALIC) },
    { name: "Enclosed Circle Fang", transform: (t) => circled(t) },
    { name: "Vertical Line Fang", transform: (t) => withCombining(t, ["\u030D"]) },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const halloweenFontCategories: FontCategory[] = [
  graveyardGothic,
  bloodDrip,
  cursedScript,
  pumpkinHollow,
  ghostWhisper,
  witchSpell,
  skullGothic,
  moonlightCursive,
  darkRitual,
  batWing,
];
