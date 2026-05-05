// ---------------------------------------------------------------------------
// Unicode Font Style Definitions
// 10 categories × 10–15 styles = 111 total transforms
// ---------------------------------------------------------------------------

export interface FontStyle {
  name: string;
  transform: (text: string) => string;
  fontFamily?: string;
}

export interface FontCategory {
  name: string;
  styles: FontStyle[];
}

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

/** Replace each character using a map; unmapped characters pass through. */
function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

/** Append combining characters after every non-space character. */
function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

/** Wrap text with a prefix and suffix frame. */
function withFrame(text: string, pre: string, suf: string): string {
  return `${pre} ${text}${suf ? ` ${suf}` : ""}`;
}

// Deterministic Zalgo: uses character index as seed for consistent output.
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

// Mathematical Script (cursive)
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131",
  H: "\u210B", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Mathematical Bold Script
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Mathematical Fraktur
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Mathematical Bold Fraktur
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Mathematical Double-Struck
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});

// Fullwidth Latin (wide vaporwave characters)
const fullwidthMap = buildMap(0xff21, 0xff41, { " ": "\u3000" });

// Mathematical Monospace
const monospaceMap = buildMap(0x1d670, 0x1d68a);

// Mathematical Bold
const boldMap = buildMap(0x1d400, 0x1d41a);

// Mathematical Italic
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Mathematical Bold Italic
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Sans-Serif variants
const sansSerifMap = buildMap(0x1d5a0, 0x1d5ba);
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);
const sansSerifItalicMap = buildMap(0x1d608, 0x1d622);
// Sans-Serif Bold Italic map retained for potential future use
// const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);

// Enclosed Circle Letters
const circleMap = buildMap(0x24b6, 0x24d0);

// Negative Squared Latin Capital Letters
const negSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const cp = String.fromCodePoint(0x1f170 + i);
  negSquaredMap[String.fromCharCode(65 + i)] = cp;
  negSquaredMap[String.fromCharCode(97 + i)] = cp;
}

// Squared Latin Capital Letters
const squaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const cp = String.fromCodePoint(0x1f130 + i);
  squaredMap[String.fromCharCode(65 + i)] = cp;
  squaredMap[String.fromCharCode(97 + i)] = cp;
}

// Small Caps (manual — not all letters have Unicode small-cap forms)
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

// Superscript (manual — using modifier letters)
const superscriptMap: Record<string, string> = {
  A: "\u1D2C", B: "\u1D2E", C: "\u1D9C", D: "\u1D30", E: "\u1D31", F: "\u1DA0",
  G: "\u1D33", H: "\u1D34", I: "\u1D35", J: "\u1D36", K: "\u1D37", L: "\u1D38",
  M: "\u1D39", N: "\u1D3A", O: "\u1D3C", P: "\u1D3E", Q: "Q", R: "\u1D3F",
  S: "\u02E2", T: "\u1D40", U: "\u1D41", V: "\u2C7D", W: "\u1D42", X: "\u02E3",
  Y: "\u02B8", Z: "\u1DBB",
  a: "\u1D43", b: "\u1D47", c: "\u1D9C", d: "\u1D48", e: "\u1D49", f: "\u1DA0",
  g: "\u1D4D", h: "\u02B0", i: "\u2071", j: "\u02B2", k: "\u1D4F", l: "\u02E1",
  m: "\u1D50", n: "\u207F", o: "\u1D52", p: "\u1D56", q: "q", r: "\u02B3",
  s: "\u02E2", t: "\u1D57", u: "\u1D58", v: "\u1D5B", w: "\u02B7", x: "\u02E3",
  y: "\u02B8", z: "\u1DBB",
};

// Y2K currency-style character replacements
const y2kCurrencyMap: Record<string, string> = {
  A: "\u20B3", a: "\u20B3", E: "\u0246", e: "\u0246",
  S: "\u20B4", s: "\u20B4", T: "\u20AE", t: "\u20AE",
  H: "\u2C67", h: "\u2C67", F: "\u20A3", f: "\u20A3",
  O: "\u00D8", o: "\u00D8", N: "\u20A6", n: "\u20A6",
};

// ── Category: Soft Aesthetic (15 styles) ──────────────────────────────────

const softAesthetic: FontCategory = {
  name: "Soft Aesthetic",
  styles: [
    { name: "Dreamy Script", transform: (t) => applyMap(t, scriptMap) },
    { name: "Elegant Cursive", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Petit Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Whisper Text", transform: (t) => applyMap(t, superscriptMap) },
    { name: "Soft Italic", transform: (t) => applyMap(t, italicMap) },
    { name: "Gentle Bold", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Dotted Dream", transform: (t) => t, fontFamily: "'Mr Bedfort', cursive" },
    { name: "Breeze Script", transform: (t) => t, fontFamily: "'Norican', sans-serif" },
    { name: "Ringed Whisper", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u030A"]) },
    { name: "Tilde Flow", transform: (t) => t, fontFamily: "'Ballet', cursive" },
    // +5 Pastel styles with small caps + floral symbols
    { name: "Petal Caps", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u273F", "\u273F") },
    { name: "Blossom Script", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2740", "\u2740") },
    { name: "Rose Italic", transform: (t) => withFrame(applyMap(t, italicMap), "\u2741", "\u2741") },
    { name: "Lily Whisper", transform: (t) => withFrame(applyMap(t, superscriptMap), "\u0A94", "\u0A94") },
    { name: "Daisy Dream", transform: (t) => t, fontFamily: "'Jim Nightshade', cursive" },
  ],
};

// ── Category: Dark Aesthetic ──────────────────────────────────────────────

const darkAesthetic: FontCategory = {
  name: "Dark Aesthetic",
  styles: [
    { name: "Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Light Corruption", transform: (t) => zalgo(t, 1, 0, 0) },
    { name: "Medium Glitch", transform: (t) => zalgo(t, 2, 1, 2) },
    { name: "Heavy Corruption", transform: (t) => zalgo(t, 3, 2, 4) },
    { name: "Extreme Chaos", transform: (t) => zalgo(t, 5, 4, 6) },
    { name: "Crossed Dark", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Tilde Overlay", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Slashed Text", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Dark Slash", transform: (t) => withCombining(t, ["\u0338"]) },
    { name: "Double Strike", transform: (t) => withCombining(t, ["\u0336", "\u0334"]) },
  ],
};

// ── Category: Gothic (13 styles) ─────────────────────────────────────────

const gothic: FontCategory = {
  name: "Gothic",
  styles: [
    { name: "Old English", transform: (t) => applyMap(t, frakturMap) },
    { name: "Medieval Bold", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Royal Double", transform: (t) => applyMap(t, doubleStruckMap) },
    { name: "Ornate Fraktur", transform: (t) => withFrame(applyMap(t, frakturMap), "\u17C1", "\u17C2") },
    { name: "Dark Medieval", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u0F12", "\u0F12") },
    { name: "Sacred Gothic", transform: (t) => withFrame(applyMap(t, frakturMap), "\u262C", "\u262C") },
    { name: "Noble Script", transform: (t) => withFrame(applyMap(t, doubleStruckMap), "\u300E", "\u300F") },
    { name: "Aged Fraktur", transform: (t) => t, fontFamily: "'Mea Culpa', cursive" },
    { name: "Bold Gothic Frame", transform: (t) => withFrame(applyMap(t, boldMap), "\u2694", "\u2694") },
    { name: "Ancient Runes", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u16ED", "\u16ED") },
    // +3 Dark/Heavy styles with daggers and crosses
    { name: "Dagger Cross", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2020\u2021", "\u2021\u2020") },
    { name: "Iron Cross", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2719\u271B", "\u271B\u2719") },
    { name: "Death\u2019s Gate", transform: (t) => t, fontFamily: "'Pinyon Script', cursive" },
  ],
};

// ── Category: Vaporwave (12 styles) ───────────────────────────────────────

const vaporwave: FontCategory = {
  name: "Vaporwave",
  styles: [
    { name: "Wide Text", transform: (t) => applyMap(t, fullwidthMap) },
    { name: "Terminal", transform: (t) => applyMap(t, monospaceMap) },
    { name: "Neon Bold", transform: (t) => applyMap(t, boldMap) },
    { name: "Retro Bold Italic", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Classic Italic", transform: (t) => applyMap(t, italicMap) },
    { name: "Pixel Fade", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2591\u2592\u2593", "\u2593\u2592\u2591") },
    { name: "Dense Block", transform: (t) => withFrame(applyMap(t, monospaceMap), "\u2593\u2593\u2593", "\u2593\u2593\u2593") },
    { name: "Solid Neon", transform: (t) => withFrame(applyMap(t, boldMap), "\u2588\u2593\u2592\u2591", "\u2591\u2592\u2593\u2588") },
    { name: "Scan Line", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2584\u2580\u2584\u2580", "\u2580\u2584\u2580\u2584") },
    { name: "Retro Wave", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\u300E", "\u300F") },
    // +2 Wide styles with glitch borders
    { name: "Corrupt Terminal", transform: (t) => t, fontFamily: "'MuseoModerno', sans-serif" },
    { name: "Digital Haze", transform: (t) => t, fontFamily: "'Gelasio', serif" },
  ],
};

// ── Category: Glitch ──────────────────────────────────────────────────────

const glitch: FontCategory = {
  name: "Glitch",
  styles: [
    { name: "Micro Glitch", transform: (t) => zalgo(t, 1, 1, 0) },
    { name: "Static Noise", transform: (t) => zalgo(t, 2, 0, 1) },
    { name: "Signal Loss", transform: (t) => zalgo(t, 0, 2, 2) },
    { name: "Corrupted Feed", transform: (t) => zalgo(t, 2, 2, 3) },
    { name: "Data Decay", transform: (t) => zalgo(t, 3, 1, 5) },
    { name: "System Error", transform: (t) => zalgo(t, 1, 3, 7) },
    { name: "Matrix Break", transform: (t) => zalgo(t, 3, 3, 9) },
    { name: "Virus Mode", transform: (t) => zalgo(t, 4, 2, 11) },
    { name: "Total Meltdown", transform: (t) => zalgo(t, 4, 4, 13) },
    { name: "Digital Apocalypse", transform: (t) => zalgo(t, 6, 5, 15) },
  ],
};

// ── Category: Kawaii ──────────────────────────────────────────────────────

const kawaii: FontCategory = {
  name: "Kawaii",
  styles: [
    { name: "Bubble Letters", transform: (t) => applyMap(t, circleMap) },
    { name: "Filled Blocks", transform: (t) => applyMap(t, negSquaredMap) },
    { name: "Square Blocks", transform: (t) => applyMap(t, squaredMap) },
    { name: "Cute Cursive", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2661", "\u2661") },
    { name: "Heart Bubbles", transform: (t) => withFrame(applyMap(t, circleMap), "\u2661", "\u2661") },
    { name: "Flower Text", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u273F", "\u273F") },
    { name: "Sparkle Text", transform: (t) => withFrame(applyMap(t, sansSerifBoldMap), "\u02DA\u2727", "\u2727\u02DA") },
    { name: "Cozy Wrap", transform: (t) => withFrame(applyMap(t, boldMap), "\uA4F0", "\uA4F1") },
    { name: "Tiny Sweet", transform: (t) => withFrame(applyMap(t, superscriptMap), "\u2665", "\u2665") },
    { name: "Kawaii Wave", transform: (t) => withFrame(applyMap(t, sansSerifItalicMap), "\u30FD(\u2661\u203F\u2661)\u30CE", "") },
  ],
};

// ── Category: Cottagecore ─────────────────────────────────────────────────

const cottagecore: FontCategory = {
  name: "Cottagecore",
  styles: [
    { name: "Garden Script", transform: (t) => withFrame(applyMap(t, scriptMap), "\u273F", "\u273F") },
    { name: "Wildflower Bold", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2740", "\u2740") },
    { name: "Vintage Type", transform: (t) => t, fontFamily: "'Charm', cursive" },
    { name: "Rustic Caps", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u0F04", "\u0F04") },
    { name: "Pearl Script", transform: (t) => t, fontFamily: "'Cookie', cursive" },
    { name: "Botanical", transform: (t) => withFrame(applyMap(t, sansSerifMap), "\uA754", "\uA754") },
    { name: "Meadow Bold", transform: (t) => withFrame(applyMap(t, boldMap), "\u2741", "\u2741") },
    { name: "Old Letter", transform: (t) => t, fontFamily: "'Meie Script', cursive" },
    { name: "Pressed Flower", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u273E", "\u273E") },
    { name: "Cottage Garden", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\uD83C\uDF3F", "\uD83C\uDF3F") },
  ],
};

// ── Category: Y2K ─────────────────────────────────────────────────────────

const y2k: FontCategory = {
  name: "Y2K",
  styles: [
    { name: "Currency Style", transform: (t) => applyMap(t, y2kCurrencyMap) },
    { name: "Star Burst", transform: (t) => withFrame(t, "\u2605\u5F61", "\u5F61\u2605") },
    { name: "Ornate Frame", transform: (t) => withFrame(t, "\uA9C1\u0F12", "\u0F12\uA9C2") },
    { name: "Battle Frame", transform: (t) => withFrame(t, "\u2550\u2550\u2550", "\u2550\u2550\u2550") },
    { name: "Kawaii Y2K", transform: (t) => withFrame(t, "\u30FD(\u2661\u203F\u2661)\u30CE", "") },
    { name: "Royal Bracket", transform: (t) => withFrame(t, "\u300E", "\u300F") },
    { name: "Cyber Box", transform: (t) => withFrame(t, "\u3010", "\u3011") },
    { name: "Arrow Strike", transform: (t) => withFrame(t, "\u27B7", "\u27A4") },
    { name: "Diamond Edge", transform: (t) => withFrame(t, "\u25C6\u2500\u2500", "\u2500\u2500\u25C6") },
    {
      name: "Mixed Y2K",
      transform: (t) => withFrame(applyMap(t, y2kCurrencyMap), "\u2605", "\u2605"),
    },
  ],
};

// ── Category: Layered (NEW – 10 styles) ───────────────────────────────────

const layered: FontCategory = {
  name: "Layered",
  styles: [
    {
      name: "Sparkle Bold",
      transform: (t) => t,
      fontFamily: "'Miss Fajardose', cursive",
    },
    {
      name: "Sparkle Sans",
      transform: (t) => t,
      fontFamily: "'Stalemate', cursive",
    },
    {
      name: "Glitch Ultra",
      transform: (t) => t,
      fontFamily: "'Alumni Sans Pinstripe', sans-serif",
    },
    {
      name: "Glitch Ultra Heavy",
      transform: (t) => t,
      fontFamily: "'Poiret One', cursive",
    },
    {
      name: "Glitch Italic",
      transform: (t) => t,
      fontFamily: "'Montserrat Alternates', sans-serif",
    },
    {
      name: "Shadow Bold",
      transform: (t) => t,
      fontFamily: "'Exo 2', sans-serif",
    },
    {
      name: "Shadow Italic",
      transform: (t) => t,
      fontFamily: "'Rasa', serif",
    },
    {
      name: "Neon Glow",
      transform: (t) => t,
      fontFamily: "'Unica One', cursive",
    },
    {
      name: "Crystal Layer",
      transform: (t) => t,
      fontFamily: "'Martel', serif",
    },
  ],
};

// ── Category: Text Decorators (NEW – 10 styles) ──────────────────────────

const textDecorators: FontCategory = {
  name: "Text Decorators",
  styles: [
    {
      name: "Sparkle Wrap",
      transform: (t) => withFrame(t, "\u2727\uFF65\uFF9F: *\u2727\uFF65\uFF9F:*", "*:\uFF65\uFF9F\u2727*:\uFF65\uFF9F\u2727"),
    },
    {
      name: "Arrow Point",
      transform: (t) => `\u2570\u2508\u27A4 ${t}`,
    },
    {
      name: "Star Flash",
      transform: (t) => withFrame(t, "\u30DF\u2605", "\u2605\u5F61"),
    },
    {
      name: "Triangle Edge",
      transform: (t) => withFrame(t, "|\u25BC", "\u25B2|"),
    },
    {
      name: "Ornate Line",
      transform: (t) => withFrame(t, "\u2550\u2550\u2550 \u2218\u25E6", "\u25E6\u2218 \u2550\u2550\u2550"),
    },
    {
      name: "Vine Wrap",
      transform: (t) => withFrame(t, "\u22B1\u273F\u22B0", "\u22B1\u273F\u22B0"),
    },
    {
      name: "Wave Bar",
      transform: (t) => withFrame(t, "\u2584\u2580\u2584\u2580", "\u2580\u2584\u2580\u2584"),
    },
    {
      name: "Diamond Chain",
      transform: (t) => withFrame(t, "\u25C7\u2500\u25C7", "\u25C7\u2500\u25C7"),
    },
    {
      name: "Lightning Bolt",
      transform: (t) => withFrame(t, "\u26A1", "\u26A1"),
    },
    {
      name: "Gothic Gate",
      transform: (t) => withFrame(t, "\uA9C1 \u0F12", "\u0F12 \uA9C2"),
    },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

// Priority 1 — rendered on first paint (4 cards, ~45 variations)
// Priority 2 — deferred until "Explore More Styles" click
export const fontCategories: FontCategory[] = [
  // ── Priority 1 ──
  cottagecore,
  y2k,
  softAesthetic,
  darkAesthetic,
  // ── Priority 2 ──
  gothic,
  layered,
  textDecorators,
  kawaii,
  glitch,
  vaporwave,
];
