// ---------------------------------------------------------------------------
// Cute Font Style Definitions — EXCLUSIVE to /cute-fonts page
// 10 categories
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

function withFrame(text: string, pre: string, suf: string): string {
  return `${pre} ${text} ${suf}`;
}

function withCombining(text: string, combining: string[]): string {
  const suffix = combining.join("");
  return [...text].map((c) => (c === " " || c === "\u3000" ? c : c + suffix)).join("");
}

function intersperse(text: string, char: string): string {
  return [...text].map((c) => (c === " " ? c : c + char)).join("");
}

/** Mathematical Bold Script — U+1D4D0 range, best browser/font support */
function boldScriptMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D4D0 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D4EA + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

function doubleStruckMap(text: string): string {
  const map: Record<string, string> = {
    A: "\uD835\uDD38", B: "\uD835\uDD39", C: "\u2102", D: "\uD835\uDD3B",
    E: "\uD835\uDD3C", F: "\uD835\uDD3D", G: "\uD835\uDD3E", H: "\u210D",
    I: "\uD835\uDD40", J: "\uD835\uDD41", K: "\uD835\uDD42", L: "\uD835\uDD43",
    M: "\uD835\uDD44", N: "\u2115", O: "\uD835\uDD46", P: "\u2119",
    Q: "\u211A", R: "\u211D", S: "\uD835\uDD4A", T: "\uD835\uDD4B",
    U: "\uD835\uDD4C", V: "\uD835\uDD4D", W: "\uD835\uDD4E", X: "\uD835\uDD4F",
    Y: "\uD835\uDD50", Z: "\u2124",
    a: "\uD835\uDD52", b: "\uD835\uDD53", c: "\uD835\uDD54", d: "\uD835\uDD55",
    e: "\uD835\uDD56", f: "\uD835\uDD57", g: "\uD835\uDD58", h: "\uD835\uDD59",
    i: "\uD835\uDD5A", j: "\uD835\uDD5B", k: "\uD835\uDD5C", l: "\uD835\uDD5D",
    m: "\uD835\uDD5E", n: "\uD835\uDD5F", o: "\uD835\uDD60", p: "\uD835\uDD61",
    q: "\uD835\uDD62", r: "\uD835\uDD63", s: "\uD835\uDD64", t: "\uD835\uDD65",
    u: "\uD835\uDD66", v: "\uD835\uDD67", w: "\uD835\uDD68", x: "\uD835\uDD69",
    y: "\uD835\uDD6A", z: "\uD835\uDD6B",
  };
  return [...text].map((c) => map[c] ?? c).join("");
}

function smallCapsMap(text: string): string {
  const map: Record<string, string> = {
    a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07",
    f: "\uA730", g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A",
    k: "\u1D0B", l: "\u029F", m: "\u1D0D", n: "\u0274", o: "\u1D0F",
    p: "\u1D18", q: "\u01EB", r: "\u0280", s: "\u0455", t: "\u1D1B",
    u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x", y: "\u028F", z: "\u1D22",
  };
  return [...text].map((c) => map[c.toLowerCase()] ?? c).join("");
}

function bubbleMap(text: string): string {
  return [...text].map((c) => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + code - 97);
    if (code >= 48 && code <= 57) return c === "0" ? "\u24EA" : String.fromCodePoint(0x2460 + code - 49);
    return c;
  }).join("");
}

/** Mathematical Italic — U+1D434 range */
function italicMap(text: string): string {
  const exc: Record<string, string> = { h: "\u210E" };
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D434 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D44E + i);
  }
  return [...text].map((c) => exc[c] ?? map[c] ?? c).join("");
}

/** Mathematical Bold Italic — U+1D468 range */
function boldItalicMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D468 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D482 + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Script (light) — U+1D49C range */
function scriptMap(text: string): string {
  const exc: Record<string, string> = {
    B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B", I: "\u2110",
    L: "\u2112", M: "\u2133", R: "\u211B", e: "\u212F", g: "\u210A", o: "\u2134",
  };
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D49C + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D4B6 + i);
  }
  return [...text].map((c) => exc[c] ?? map[c] ?? c).join("");
}

/** Mathematical Sans-Serif — U+1D5A0 range */
function sansMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D5A0 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D5BA + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Sans-Serif Bold — U+1D5D4 range */
function sansBoldMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D5D4 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D5EE + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Sans-Serif Italic — U+1D608 range */
function sansItalicMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D608 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D622 + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Fraktur — U+1D504 range */
function frakturMap(text: string): string {
  const exc: Record<string, string> = {
    C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
  };
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D504 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D51E + i);
  }
  return [...text].map((c) => exc[c] ?? map[c] ?? c).join("");
}

/** Fullwidth Latin — U+FF21/U+FF41 range */
function fullwidthMap(text: string): string {
  return [...text].map((c) => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0xFF21 + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0xFF41 + code - 97);
    if (code >= 48 && code <= 57) return String.fromCodePoint(0xFF10 + code - 48);
    if (code === 32) return "\u3000";
    return c;
  }).join("");
}

/** Mathematical Monospace — U+1D670 range */
function monospaceMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D670 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D68A + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Parenthesized Latin — U+249C range (lowercase only) */
function parenthesizedMap(text: string): string {
  return [...text].map((c) => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x249C + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x249C + code - 97);
    return c;
  }).join("");
}

/** Superscript Latin */
function superscriptMap(text: string): string {
  const map: Record<string, string> = {
    A: "\u1D2C", B: "\u1D2E", C: "\u1D9C", D: "\u1D30", E: "\u1D31",
    F: "\u1DA0", G: "\u1D33", H: "\u1D34", I: "\u1D35", J: "\u1D36",
    K: "\u1D37", L: "\u1D38", M: "\u1D39", N: "\u1D3A", O: "\u1D3C",
    P: "\u1D3E", R: "\u1D3F", T: "\u1D40", U: "\u1D41", V: "\u2C7D",
    W: "\u1D42",
    a: "\u1D43", b: "\u1D47", c: "\u1D9C", d: "\u1D48", e: "\u1D49",
    f: "\u1DA0", g: "\u1D4D", h: "\u02B0", i: "\u2071", j: "\u02B2",
    k: "\u1D4F", l: "\u02E1", m: "\u1D50", n: "\u207F", o: "\u1D52",
    p: "\u1D56", r: "\u02B3", s: "\u02E2", t: "\u1D57", u: "\u1D58",
    v: "\u1D5B", w: "\u02B7", x: "\u02E3", y: "\u02B8", z: "\u1DBB",
  };
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Upside-Down / Flipped text */
function upsideDownMap(text: string): string {
  const map: Record<string, string> = {
    a: "\u0250", b: "q", c: "\u0254", d: "p", e: "\u01DD",
    f: "\u025F", g: "\u0253", h: "\u0265", i: "\u0131", j: "\u027E",
    k: "\u029E", l: "l", m: "\u026F", n: "u", o: "o",
    p: "d", q: "b", r: "\u0279", s: "s", t: "\u0287",
    u: "n", v: "\u028C", w: "\u028D", x: "x", y: "\u028E", z: "z",
    A: "\u2200", B: "\u1012", C: "\u0186", D: "\u15E1", E: "\u018E",
    F: "\u2132", G: "\u2141", H: "H", I: "I", J: "\u017F",
    K: "\u22CA", L: "\u2142", M: "W", N: "N", O: "O",
    P: "\u0500", Q: "\u038C", R: "\u1D1A", S: "S", T: "\u22A5",
    U: "\u2229", V: "\u039B", W: "M", X: "X", Y: "\u2144", Z: "Z",
    "1": "\u21C2", "2": "\u218A", "3": "\u218B", "4": "\u07C8",
    "5": "\u03DB", "6": "9", "7": "\u3125", "8": "8", "9": "6", "0": "0",
    ".": "\u02D9", ",": "\u02BB", "?": "\u00BF", "!": "\u00A1",
    "'": ",", "\"": "\u201E",
  };
  return [...text].reverse().map((c) => map[c] ?? c).join("");
}

// ── 1: Pretty Fonts — Unicode transforms ──────────────────────────────────

const prettyFonts: FontCategory = {
  name: "Pretty Fonts",
  styles: [
    { name: "Script Elegance", transform: (t) => boldScriptMap(t) },
    { name: "Sparkle Script", transform: (t) => withFrame(boldScriptMap(t), "\u2727", "\u2727") },
    { name: "Delicate Glow", transform: (t) => intersperse(boldScriptMap(t), "\u2022") },
    { name: "Pearl Accent", transform: (t) => withFrame(boldScriptMap(t), "\u2740", "\u2740") },
    { name: "Soft Flourish", transform: (t) => withFrame(boldScriptMap(t), "\u2767", "\u2767") },
    { name: "Rose Script", transform: (t) => withFrame(boldScriptMap(t), "\u273F", "\u273F") },
    { name: "Diamond Script", transform: (t) => intersperse(boldScriptMap(t), "\u2666") },
    { name: "Fine Line", transform: (t) => intersperse(boldScriptMap(t), "\u2500") },
    { name: "Whisper Dots", transform: (t) => intersperse(boldScriptMap(t), "\u00B7") },
    { name: "Velvet Wrap", transform: (t) => withFrame(boldScriptMap(t), "\u2765", "\u2765") },
  ],
};

// ── 2: Sweetheart Lettering — Italic & Script based ───────────────────

const sweetheartLettering: FontCategory = {
  name: "Sweetheart Lettering",
  styles: [
    { name: "Italic Sweetheart", transform: (t) => italicMap(t) },
    { name: "Italic Heart Glow", transform: (t) => withFrame(italicMap(t), "\u2661", "\u2661") },
    { name: "Italic Sparkle", transform: (t) => intersperse(italicMap(t), "\u2727") },
    { name: "Script Whisper", transform: (t) => scriptMap(t) },
    { name: "Script Blossom", transform: (t) => withFrame(scriptMap(t), "\uD83C\uDF38", "\uD83C\uDF38") },
    { name: "Italic Ribbon", transform: (t) => withFrame(italicMap(t), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Italic Butterfly", transform: (t) => withFrame(italicMap(t), "\uD83E\uDD8B", "\uD83E\uDD8B") },
    { name: "Script Diary", transform: (t) => withCombining(scriptMap(t), ["\u0308"]) },
    { name: "Italic Moonlight", transform: (t) => withFrame(italicMap(t), "\u263D", "\u263E") },
  ],
};

// ── 3: Glittering Stars — Unicode transforms ──────────────────────────────

const glitteringStars: FontCategory = {
  name: "Glittering Stars",
  styles: [
    { name: "Star Dust", transform: (t) => intersperse(smallCapsMap(t), "\u2726") },
    { name: "Twinkle Caps", transform: (t) => withFrame(smallCapsMap(t), "\u2728", "\u2728") },
    { name: "Celestial Glow", transform: (t) => intersperse(doubleStruckMap(t), "\u2727") },
    { name: "Shimmer Wrap", transform: (t) => withFrame(doubleStruckMap(t), "\u2605", "\u2605") },
    { name: "Comet Trail", transform: (t) => withFrame(smallCapsMap(t), "\u2604", "\u2604") },
    { name: "Starfall", transform: (t) => intersperse(smallCapsMap(t), "\u2734") },
    { name: "Galaxy Dust", transform: (t) => withFrame(doubleStruckMap(t), "\u2726\u2727", "\u2727\u2726") },
    { name: "Night Sparkle", transform: (t) => withFrame(smallCapsMap(t), "\u2736\u2737", "\u2737\u2736") },
    { name: "Stellar Script", transform: (t) => intersperse(boldScriptMap(t), "\u2606") },
    { name: "Moonbeam", transform: (t) => withFrame(boldScriptMap(t), "\u263D", "\u263E") },
  ],
};

// ── 4: Lollipop Swirls — Sans, Fullwidth & Parenthesized based ────────

const lollipopSwirls: FontCategory = {
  name: "Lollipop Swirls",
  styles: [
    { name: "Sans Bubblegum", transform: (t) => sansMap(t) },
    { name: "Sans Candy", transform: (t) => withFrame(sansMap(t), "\uD83C\uDF6C", "\uD83C\uDF6C") },
    { name: "Sans Lollipop", transform: (t) => intersperse(sansMap(t), "\uD83C\uDF6D") },
    { name: "Fullwidth Dream", transform: (t) => fullwidthMap(t) },
    { name: "Fullwidth Sparkle", transform: (t) => withFrame(fullwidthMap(t), "\u22B9", "\u22B9") },
    { name: "Parenthesized Play", transform: (t) => parenthesizedMap(t) },
    { name: "Sans Bold Sweet", transform: (t) => sansBoldMap(t) },
    { name: "Sans Bold Candy", transform: (t) => withFrame(sansBoldMap(t), "\uD83C\uDF69", "\uD83C\uDF69") },
    { name: "Sans Italic Fun", transform: (t) => sansItalicMap(t) },
    { name: "Sans Italic Bow", transform: (t) => withFrame(sansItalicMap(t), "\uD83C\uDF80", "\uD83C\uDF80") },
  ],
};

// ── 5: Love Notes — Unicode transforms ────────────────────────────────────

const loveNotes: FontCategory = {
  name: "Love Notes",
  styles: [
    { name: "Heart Wrap", transform: (t) => withFrame(boldScriptMap(t), "\u2661", "\u2661") },
    { name: "Love Script", transform: (t) => intersperse(boldScriptMap(t), "\u2665") },
    { name: "Cupid Arrow", transform: (t) => withFrame(boldScriptMap(t), "\u2763", "\u2763") },
    { name: "Rose Heart", transform: (t) => withFrame(boldScriptMap(t), "\u2766", "\u2766") },
    { name: "Heart Dots", transform: (t) => intersperse(boldScriptMap(t), "\u2661") },
    { name: "Georgian Love", transform: (t) => withFrame(boldScriptMap(t), "\u10E6", "\u10E6") },
    { name: "Floral Heart", transform: (t) => withFrame(boldScriptMap(t), "\u2765\u2661", "\u2661\u2765") },
    { name: "Sweet Whisper", transform: (t) => withFrame(boldScriptMap(t), "\u2661\u2727", "\u2727\u2661") },
    { name: "Soft Kiss", transform: (t) => withFrame(boldScriptMap(t), "\u2764\uFE0F", "\u2764\uFE0F") },
    { name: "Valentine", transform: (t) => intersperse(boldScriptMap(t), "\u2763") },
  ],
};

// ── 6: Pixie Dust — Superscript, Bold Italic & Fraktur based ─────────

const pixieDust: FontCategory = {
  name: "Pixie Dust",
  styles: [
    { name: "Tiny Whisper", transform: (t) => superscriptMap(t) },
    { name: "Tiny Fairy", transform: (t) => withFrame(superscriptMap(t), "\uD83E\uDDDA", "\uD83E\uDDDA") },
    { name: "Tiny Sparkle", transform: (t) => intersperse(superscriptMap(t), "\u22B9") },
    { name: "Bold Italic Magic", transform: (t) => boldItalicMap(t) },
    { name: "Bold Italic Wand", transform: (t) => withFrame(boldItalicMap(t), "\u2726", "\u2726") },
    { name: "Fraktur Enchant", transform: (t) => frakturMap(t) },
    { name: "Fraktur Fairy", transform: (t) => intersperse(frakturMap(t), "\u2727") },
    { name: "Dotted Dream", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Wavy Spell", transform: (t) => withCombining(t, ["\u0303"]) },
  ],
};

// ── 7: Ornate Borders — Unicode transforms ────────────────────────────────

const ornateBorders: FontCategory = {
  name: "Ornate Borders",
  styles: [
    { name: "Tibetan Scroll", transform: (t) => withFrame(t, "\u0F3C", "\u0F3D") },
    { name: "Ornate Wings", transform: (t) => withFrame(t, "\u2E28", "\u2E29") },
    { name: "Vine Curl", transform: (t) => withFrame(t, "\u2767\u2740", "\u2740\u2767") },
    { name: "Floral Gate", transform: (t) => withFrame(t, "\u2740\u2741", "\u2741\u2740") },
    { name: "Star Frame", transform: (t) => withFrame(t, "\u2726\u2727\u2726", "\u2726\u2727\u2726") },
    { name: "Heart Wings", transform: (t) => withFrame(t, "\u2661\u00AB", "\u00BB\u2661") },
    { name: "Arrow Frame", transform: (t) => withFrame(t, "\u27A4\u27A4", "\u27A4\u27A4") },
    { name: "Crown Border", transform: (t) => withFrame(t, "\u2654", "\u2654") },
    { name: "Diamond Gate", transform: (t) => withFrame(t, "\u2666\u2662", "\u2662\u2666") },
    { name: "Lotus Frame", transform: (t) => withFrame(t, "\u2740\u273F\u2741", "\u2741\u273F\u2740") },
  ],
};

// ── 8: Bouncy Blossoms — Monospace & Upside-Down based ────────────────

const bouncyBlossoms: FontCategory = {
  name: "Bouncy Blossoms",
  styles: [
    { name: "Mono Garden", transform: (t) => withFrame(monospaceMap(t), "\uD83C\uDF3B", "\uD83C\uDF3B") },
    { name: "Mono Petal", transform: (t) => intersperse(monospaceMap(t), "\uD83C\uDF38") },
    { name: "Upside Down Bloom", transform: (t) => upsideDownMap(t) },
    { name: "Bouncy Breve", transform: (t) => withCombining(t, ["\u0306"]) },
  ],
};

// ── 9: Petal & Bloom — Unicode transforms ─────────────────────────────────

const petalAndBloom: FontCategory = {
  name: "Petal & Bloom",
  styles: [
    { name: "Garden Wrap", transform: (t) => withFrame(t, "\u273F", "\u273F") },
    { name: "Flower Chain", transform: (t) => intersperse(t, "\u2740") },
    { name: "Bloom Frame", transform: (t) => withFrame(t, "\u2740\u273F", "\u273F\u2740") },
    { name: "Petal Script", transform: (t) => withFrame(boldScriptMap(t), "\u2741", "\u2741") },
    { name: "Daisy Ring", transform: (t) => intersperse(boldScriptMap(t), "\u273F") },
    { name: "Rose Garden", transform: (t) => withFrame(t, "\u2743\u2740", "\u2740\u2743") },
    { name: "Spring Dots", transform: (t) => intersperse(t, "\u2022\u273F") },
    { name: "Leaf Accent", transform: (t) => withFrame(boldScriptMap(t), "\u2618", "\u2618") },
    { name: "Blossom Glow", transform: (t) => withFrame(doubleStruckMap(t), "\u273F", "\u273F") },
    { name: "Floral Vine", transform: (t) => withFrame(t, "\u2740\u2741\u273F", "\u273F\u2741\u2740") },
  ],
};

// ── 10: Sweet Ribbons — Unicode transforms ────────────────────────────────

const sweetRibbons: FontCategory = {
  name: "Sweet Ribbons",
  styles: [
    { name: "Bow Wrap", transform: (t) => withFrame(bubbleMap(t), "\uD83C\uDF80", "\uD83C\uDF80") },
    { name: "Ribbon Wave", transform: (t) => intersperse(bubbleMap(t), "\u3030") },
    { name: "Gift Box", transform: (t) => withFrame(bubbleMap(t), "\uD83C\uDF81", "\uD83C\uDF81") },
    { name: "Wavy Ribbon", transform: (t) => withFrame(t, "\u3030\uD83C\uDF80", "\uD83C\uDF80\u3030") },
    { name: "Bubble Bow", transform: (t) => intersperse(bubbleMap(t), "\uD83C\uDF80") },
    { name: "Soft Ribbon", transform: (t) => withFrame(bubbleMap(t), "\u2248\u2248", "\u2248\u2248") },
    { name: "Sweet Frame", transform: (t) => withFrame(bubbleMap(t), "\u2E28\u2E28", "\u2E29\u2E29") },
    { name: "Candy Wrap", transform: (t) => withFrame(bubbleMap(t), "\uD83C\uDF6C", "\uD83C\uDF6C") },
    { name: "Ribbon Curl", transform: (t) => intersperse(bubbleMap(t), "\u223C") },
    { name: "Pretty Package", transform: (t) => withFrame(bubbleMap(t), "\u2741\uD83C\uDF80\u2741", "\u2741\uD83C\uDF80\u2741") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const cuteFontCategories: FontCategory[] = [
  prettyFonts,
  sweetheartLettering,
  glitteringStars,
  lollipopSwirls,
  loveNotes,
  pixieDust,
  ornateBorders,
  bouncyBlossoms,
  petalAndBloom,
  sweetRibbons,
];
