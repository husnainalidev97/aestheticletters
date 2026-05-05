// ---------------------------------------------------------------------------
// Fancy Font Style Definitions — EXCLUSIVE to /fancy-fonts page
// 12 categories × 10 styles = 120 total transforms
// Zero overlap with home page transforms (src/app/lib/fontStyles.ts)
// Uses rare Unicode blocks and unique combining-character combos
// ---------------------------------------------------------------------------

export interface FancyFontStyle {
  name: string;
  transform: (text: string) => string;
  fontFamily?: string;
}

export interface FancyFontCategory {
  name: string;
  styles: FancyFontStyle[];
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

function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " || c === "\u3000" ? c : c + suffix)).join("");
}

function withFrame(text: string, pre: string, suf: string): string {
  return `${pre} ${text}${suf ? ` ${suf}` : ""}`;
}

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

// Math Bold Script (calligraphy)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Math Bold Italic
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Math Script (cursive)
const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131",
  H: "\u210B", I: "\u2110", L: "\u2112",
  M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Math Bold
const boldMap = buildMap(0x1d400, 0x1d41a);

// Math Italic
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Math Fraktur (Gothic)
const frakturMap = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

// Math Bold Fraktur
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Math Double-Struck (Hollow)
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119",
  Q: "\u211A", R: "\u211D", Z: "\u2124",
});

// Fullwidth Latin
const fullwidthMap = buildMap(0xff21, 0xff41, { " ": "\u3000" });

// Math Monospace
const monospaceMap = buildMap(0x1d670, 0x1d68a);

// Sans-Serif Bold Italic
const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);

// Enclosed Circle
const circleMap = buildMap(0x24b6, 0x24d0);

// Negative Squared
const negSquaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const cp = String.fromCodePoint(0x1f170 + i);
  negSquaredMap[String.fromCharCode(65 + i)] = cp;
  negSquaredMap[String.fromCharCode(97 + i)] = cp;
}

// Squared
const squaredMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  const cp = String.fromCodePoint(0x1f130 + i);
  squaredMap[String.fromCharCode(65 + i)] = cp;
  squaredMap[String.fromCharCode(97 + i)] = cp;
}

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

// Superscript (modifier letters)
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

// ── NEW Maps (exclusive to Fancy Fonts page) ──────────────────────────────

// Subscript (partial — only letters with Unicode subscript forms)
const subscriptMap: Record<string, string> = {
  a: "\u2090", e: "\u2091", h: "\u2095", i: "\u1D62", j: "\u2C7C",
  k: "\u2096", l: "\u2097", m: "\u2098", n: "\u2099", o: "\u2092",
  p: "\u209A", r: "\u1D63", s: "\u209B", t: "\u209C", u: "\u1D64",
  v: "\u1D65", x: "\u2093",
  A: "\u2090", E: "\u2091", H: "\u2095", I: "\u1D62", J: "\u2C7C",
  K: "\u2096", L: "\u2097", M: "\u2098", N: "\u2099", O: "\u2092",
  P: "\u209A", R: "\u1D63", S: "\u209B", T: "\u209C", U: "\u1D64",
  V: "\u1D65", X: "\u2093",
};

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

// Parenthesized letters
const parenthesizedMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  parenthesizedMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x249c + i);
  parenthesizedMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x249c + i);
}

// ── Transform Helpers ─────────────────────────────────────────────────────

function reverseUpsideDown(text: string): string {
  return [...text].reverse().map((c) => upsideDownMap[c] ?? c).join("");
}

function mirrorOnly(text: string): string {
  return [...text].reverse().join("");
}

// ── 1. Bold Artistic Styles (10) ──────────────────────────────────────────

const boldArtisticStyles: FancyFontCategory = {
  name: "Bold Artistic Styles",
  styles: [
    { name: "Royal Calligraphy", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Italic Artisan", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Dotted Calligraphy", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u00B7", "\u00B7"), fontFamily: "'Georgia', serif" },
    { name: "Ringed Bold Art", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\u25CB", "\u25CB"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Underlined Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2500", "\u2500"), fontFamily: "'Georgia', serif" },
    { name: "Tilde Artisan", transform: (t) => withFrame(applyMap(t, boldItalicMap), "~", "~"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Double-Dot Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), ":", ":"), fontFamily: "'Georgia', serif" },
    { name: "Macron Bold Art", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\u2014", "\u2014"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Framed Calligraphy", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2766", "\u2766") },
    { name: "Luxe Italic Art", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\u269C", "\u269C") },
    { name: "Lobster", transform: (t) => t, fontFamily: "'Lobster', cursive" },
    { name: "Monsieur La Doulaise", transform: (t) => t, fontFamily: "'Monsieur La Doulaise', cursive" },
    { name: "League Script", transform: (t) => t, fontFamily: "'League Script', cursive" },
  ],
};

// ── 2. Fancy Line Effects (10) ────────────────────────────────────────────

const fancyLineEffects: FancyFontCategory = {
  name: "Fancy Line Effects",
  styles: [
    { name: "Classic Strike", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Slash Overlay", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Long Slash", transform: (t) => withCombining(t, ["\u0338"]) },
    { name: "Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Overline", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Tilde Mid-Line", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "X-Cross Overlay", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Underline Accent", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Strike + Underline", transform: (t) => withCombining(t, ["\u0336", "\u0332"]) },
    { name: "Zalgo Lite", transform: (t) => zalgo(t, 1, 1, 42) },
    { name: "Fleur De Leah", transform: (t) => t, fontFamily: "'Fleur De Leah', cursive" },
    { name: "Style Script", transform: (t) => t, fontFamily: "'Style Script', cursive" },
  ],
};

// ── 3. Monospace & Typewriter (10) ────────────────────────────────────────

const monospaceTypewriter: FancyFontCategory = {
  name: "Monospace & Typewriter",
  styles: [
    { name: "Hollow Letters", transform: (t) => applyMap(t, doubleStruckMap) },
    { name: "Wide Vaporwave", transform: (t) => applyMap(t, fullwidthMap) },
    { name: "Terminal Code", transform: (t) => applyMap(t, monospaceMap) },
    { name: "Bracket Code", transform: (t) => withFrame(applyMap(t, monospaceMap), "\u300C", "\u300D") },
    { name: "Pipe Frame", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2503", "\u2503") },
    { name: "Hollow Dotted", transform: (t) => withFrame(applyMap(t, doubleStruckMap), "\u2022", "\u2022"), fontFamily: "'Georgia', serif" },
    { name: "Retro Terminal", transform: (t) => withFrame(applyMap(t, monospaceMap), "\u25B6", "\u25C0") },
    { name: "Corner Frame", transform: (t) => withFrame(applyMap(t, doubleStruckMap), "\u250F\u2501", "\u2501\u2513") },
    { name: "Parenthesized", transform: (t) => applyMap(t, parenthesizedMap) },
    { name: "Grey Qo", transform: (t) => t, fontFamily: "'Grey Qo', cursive" },
  ],
};

// ── 4. Symbol-Enhanced Fonts (10) ─────────────────────────────────────────

const symbolEnhanced: FancyFontCategory = {
  name: "Symbol\u2011Enhanced Fonts",
  styles: [
    { name: "Javanese Ornate", transform: (t) => withFrame(t, "\uA9B4\uA9B5", "\uA9B5\uA9B4") },
    { name: "Egyptian Wings", transform: (t) => withFrame(t, "\uD80C\uDE29", "\uD80C\uDE2A") },
    { name: "Tibetan Sacred", transform: (t) => withFrame(t, "\u0F12\u0F3C", "\u0F3D\u0F12") },
    { name: "Cross Emblem", transform: (t) => withFrame(t, "\u2725", "\u2725") },
    { name: "Fleur-de-lis", transform: (t) => withFrame(t, "\u269C", "\u269C") },
    { name: "Star Burst", transform: (t) => withFrame(t, "\u2726\u2727", "\u2727\u2726") },
    { name: "Diamond Frame", transform: (t) => withFrame(t, "\u2756", "\u2756") },
    { name: "Lotus Wrap", transform: (t) => withFrame(t, "\u2740\u2741", "\u2741\u2740") },
    { name: "Sword & Shield", transform: (t) => withFrame(t, "\u2694\uFE0F", "\u2694\uFE0F") },
    { name: "Royal Scepter", transform: (t) => withFrame(t, "\u2654\u2500\u2500", "\u2500\u2500\u2654") },
    { name: "Neonderthaw", transform: (t) => t, fontFamily: "'Neonderthaw', cursive" },
    { name: "Dynalight", transform: (t) => t, fontFamily: "'Dynalight', cursive" },
  ],
};

// ── 5. Dynamic Text Styles (10) ───────────────────────────────────────────

const dynamicTextStyles: FancyFontCategory = {
  name: "Dynamic Text Styles",
  styles: [
    { name: "Bold Italic Rush", transform: (t) => applyMap(t, sansSerifBoldItalicMap) },
    { name: "Glitch Light", transform: (t) => zalgo(t, 1, 0, 50) },
    { name: "Glitch Medium", transform: (t) => zalgo(t, 2, 1, 55) },
    { name: "Corrupt Bold", transform: (t) => withFrame(applyMap(t, boldMap), "\u2593", "\u2593"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Shattered Italic", transform: (t) => withFrame(applyMap(t, italicMap), "\u25AA", "\u25AA"), fontFamily: "'Georgia', serif" },
    { name: "Neon Slash", transform: (t) => withFrame(applyMap(t, sansSerifBoldItalicMap), "/", "/"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Static Italic", transform: (t) => withFrame(applyMap(t, boldItalicMap), "\u25B8", "\u25C2"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Energy Bold", transform: (t) => withFrame(applyMap(t, boldMap), "\u26A1", "\u26A1") },
    { name: "Pulse Strike", transform: (t) => withFrame(applyMap(t, sansSerifBoldItalicMap), "\u00BB", "\u00AB"), fontFamily: "'Segoe UI', sans-serif" },
    { name: "Chaos Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u203B", "\u203B"), fontFamily: "'Georgia', serif" },
    { name: "WindSong", transform: (t) => t, fontFamily: "'WindSong', cursive" },
    { name: "Galada", transform: (t) => t, fontFamily: "'Galada', cursive" },
  ],
};

// ── 6. Block & Frame Fonts (10) ───────────────────────────────────────────

const blockFrameFonts: FancyFontCategory = {
  name: "Block & Frame Fonts",
  styles: [
    { name: "Negative Block", transform: (t) => applyMap(t, negSquaredMap) },
    { name: "Squared Caps", transform: (t) => applyMap(t, squaredMap) },
    { name: "Circle Enclosed", transform: (t) => applyMap(t, circleMap) },
    { name: "Gothic Box", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2588", "\u2588") },
    { name: "Heavy Frame", transform: (t) => withFrame(applyMap(t, boldMap), "\u2503\u2501\u2501", "\u2501\u2501\u2503") },
    { name: "Pixel Brick", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2591\u2592\u2593", "\u2593\u2592\u2591") },
    { name: "Double Box", transform: (t) => withFrame(applyMap(t, squaredMap), "\u2554\u2550", "\u2550\u2557") },
    { name: "Block + Strike", transform: (t) => withFrame(applyMap(t, negSquaredMap), "\u2502", "\u2502"), fontFamily: "'Courier New', monospace" },
    { name: "Shadowed Block", transform: (t) => withFrame(applyMap(t, fullwidthMap), "\u2584\u2588", "\u2588\u2584") },
    { name: "Inverse Gothic", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2503", "\u2503") },
    { name: "Passions Conflict", transform: (t) => t, fontFamily: "'Passions Conflict', cursive" },
    { name: "Lugrasimo", transform: (t) => t, fontFamily: "'Lugrasimo', cursive" },
  ],
};

// ── 7. Ornate & Beautiful Fonts (10) ──────────────────────────────────────

const ornateBeautiful: FancyFontCategory = {
  name: "Ornate & Beautiful Fonts",
  styles: [
    { name: "Classic Fraktur", transform: (t) => applyMap(t, frakturMap) },
    { name: "Bold Gothic", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Aged Fraktur", transform: (t) => t, fontFamily: "'Mea Culpa', cursive" },
    { name: "Noble Script", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2766", "\u2767") },
    { name: "Vintage Italic", transform: (t) => withFrame(applyMap(t, italicMap), "\u25C6", "\u25C6"), fontFamily: "'Georgia', serif" },
    { name: "Crown Fraktur", transform: (t) => withFrame(applyMap(t, frakturMap), "\u2654", "\u2654") },
    { name: "Rose Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2619", "\u2619") },
    { name: "Ornate Ring", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u25C7", "\u25C7"), fontFamily: "'Times New Roman', serif" },
    { name: "Regal Double", transform: (t) => withFrame(applyMap(t, doubleStruckMap), "\u2720", "\u2720") },
    { name: "Filigree Bold", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2767\u2619", "\u2619\u2767") },
    { name: "Mrs Saint Delafield", transform: (t) => t, fontFamily: "'Mrs Saint Delafield', cursive" },
    { name: "Cherish", transform: (t) => t, fontFamily: "'Cherish', cursive" },
  ],
};

// ── 8. Minimal Fancy Texts (10) ───────────────────────────────────────────

const minimalFancyTexts: FancyFontCategory = {
  name: "Minimal Fancy Texts",
  styles: [
    { name: "Small Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Superscript", transform: (t) => applyMap(t, superscriptMap) },
    { name: "Subscript", transform: (t) => applyMap(t, subscriptMap) },
    { name: "Dotted Caps", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u0307"]) },
    { name: "Subtle Underline", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u0332"]) },
    { name: "Light Italic", transform: (t) => applyMap(t, italicMap) },
    { name: "Thin Script", transform: (t) => applyMap(t, scriptMap) },
    { name: "Airy Superscript", transform: (t) => withFrame(applyMap(t, superscriptMap), "\u00B7", "\u00B7") },
    { name: "Clean Mono", transform: (t) => applyMap(t, monospaceMap) },
    { name: "Delicate Ring", transform: (t) => withCombining(applyMap(t, superscriptMap), ["\u030A"]) },
    { name: "Inspiration", transform: (t) => t, fontFamily: "'Inspiration', cursive" },
  ],
};

// ── 9. Mirror & Reverse Fonts (10) ────────────────────────────────────────

const mirrorReverse: FancyFontCategory = {
  name: "Mirror & Reverse Fonts",
  styles: [
    { name: "Upside Down", transform: (t) => reverseUpsideDown(t) },
    { name: "Mirror Text", transform: (t) => mirrorOnly(t) },
    { name: "Flipped Script", transform: (t) => reverseUpsideDown(applyMap(t, scriptMap)) },
    { name: "Reversed Bold", transform: (t) => mirrorOnly(applyMap(t, boldMap)) },
    { name: "Inverted Italic", transform: (t) => reverseUpsideDown(applyMap(t, italicMap)) },
    { name: "Backwards Mono", transform: (t) => mirrorOnly(applyMap(t, monospaceMap)) },
    { name: "Upside Fraktur", transform: (t) => reverseUpsideDown(applyMap(t, frakturMap)) },
    { name: "Flip + Strike", transform: (t) => withCombining(reverseUpsideDown(t), ["\u0336"]) },
    { name: "Mirror Framed", transform: (t) => withFrame(mirrorOnly(t), "\u27EA", "\u27EB") },
    { name: "Chaos Flip", transform: (t) => zalgo(reverseUpsideDown(t), 1, 0, 80) },
  ],
};

// ── 10. Curve & Flow Styles (10) ──────────────────────────────────────────

const curveFlowStyles: FancyFontCategory = {
  name: "Curve & Flow Styles",
  styles: [
    { name: "Flowing Script", transform: (t) => applyMap(t, scriptMap) },
    { name: "Smooth Bold Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Wavy Tilde", transform: (t) => withFrame(applyMap(t, scriptMap), "~", "~"), fontFamily: "'Georgia', serif" },
    { name: "Breeze Italic", transform: (t) => withFrame(applyMap(t, italicMap), "\u2248", "\u2248"), fontFamily: "'Georgia', serif" },
    { name: "Swoosh Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u223F", "\u223F") },
    { name: "River Flow", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2307", "\u2307") },
    { name: "Spiral Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u25E6", "\u25E6"), fontFamily: "'Georgia', serif" },
    { name: "Gentle Wave", transform: (t) => withFrame(applyMap(t, italicMap), "\u2E3E", "\u2E3E") },
    { name: "Silk Thread", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2500", "\u2500"), fontFamily: "'Georgia', serif" },
    { name: "Cloud Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2601\uFE0E", "\u2601\uFE0E") },
    { name: "Imperial Script", transform: (t) => t, fontFamily: "'Imperial Script', cursive" },
    { name: "Lavishly Yours", transform: (t) => t, fontFamily: "'Lavishly Yours', cursive" },
    { name: "Engagement", transform: (t) => t, fontFamily: "'Engagement', cursive" },
  ],
};

// ── 11. Decorative Dot & Marks (10) ───────────────────────────────────────

const decorativeDotMarks: FancyFontCategory = {
  name: "Decorative Dot & Marks",
  styles: [
    { name: "Circle Letters", transform: (t) => applyMap(t, circleMap) },
    { name: "Parenthesized", transform: (t) => applyMap(t, parenthesizedMap) },
    { name: "Dot Above", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Dot Below", transform: (t) => withCombining(t, ["\u0323"]) },
    { name: "Double Dot", transform: (t) => withCombining(t, ["\u0308"]) },
    { name: "Ring Above", transform: (t) => withCombining(t, ["\u030A"]) },
    { name: "Braille Dot Frame", transform: (t) => withFrame(applyMap(t, circleMap), "\u2847\u2801", "\u2801\u2847") },
    { name: "Sparkle Dots", transform: (t) => withFrame(withCombining(t, ["\u0307", "\u0323"]), "\u2728", "\u2728") },
    { name: "Star Dot Pattern", transform: (t) => withFrame(withCombining(t, ["\u030A", "\u0324"]), "\u2729", "\u2729") },
  ],
};

// ── 12. Artistic Fonts (10) ───────────────────────────────────────────────

const artisticFonts: FancyFontCategory = {
  name: "Artistic Fonts",
  styles: [
    { name: "Lightning Energy", transform: (t) => withFrame(t, "\u26A1", "\u26A1") },
    { name: "Fire Bold", transform: (t) => withFrame(applyMap(t, boldMap), "\uD83D\uDD25", "\uD83D\uDD25") },
    { name: "Speed Lines", transform: (t) => withFrame(t, "\u5F61\u5F61\u5F61", "") },
    { name: "Diamond Luxe", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uD83D\uDC8E", "\uD83D\uDC8E") },
    { name: "Crown Royal", transform: (t) => withFrame(applyMap(t, boldMap), "\uD83D\uDC51", "") },
    { name: "Galaxy Sparkle", transform: (t) => withFrame(applyMap(t, scriptMap), "\u2728\u2B50", "\u2B50\u2728") },
    { name: "Neon Glow", transform: (t) => t, fontFamily: "'Unica One', cursive" },
    { name: "Pixel Sword", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2694\uFE0F\uD83D\uDD25", "\uD83D\uDD25\u2694\uFE0F") },
    { name: "Ice Crystal", transform: (t) => withFrame(applyMap(t, doubleStruckMap), "\u2744\uFE0F", "\u2744\uFE0F") },
    { name: "Thunder Script", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u26A1\uD83D\uDD25\u26A1", "\u26A1\uD83D\uDD25\u26A1") },
    { name: "Limelight", transform: (t) => t, fontFamily: "'Limelight', cursive" },
    { name: "UnifrakturMaguntia", transform: (t) => t, fontFamily: "'UnifrakturMaguntia', cursive" },
    { name: "Story Script", transform: (t) => t, fontFamily: "'Story Script', cursive" },
    { name: "Bitcount Grid Double", transform: (t) => t, fontFamily: "'Bitcount Grid Double', cursive" },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const fancyFontCategories: FancyFontCategory[] = [
  boldArtisticStyles,
  fancyLineEffects,
  monospaceTypewriter,
  symbolEnhanced,
  dynamicTextStyles,
  blockFrameFonts,
  ornateBeautiful,
  minimalFancyTexts,
  artisticFonts,
  curveFlowStyles,
  decorativeDotMarks,
  mirrorReverse,
];
