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

// ── 2: Sweetheart Lettering ────────────────────────────────────────────

const sweetheartLettering: FontCategory = {
  name: "Sweetheart Lettering",
  styles: [
    { name: "Butterfly Kids", transform: (t) => t },
    { name: "Ruge Boogie", transform: (t) => t },
    { name: "Puppies Play", transform: (t) => t },
    { name: "Devonshire", transform: (t) => t },
    { name: "Fruktur", transform: (t) => t },
    { name: "Petit Formal Script", transform: (t) => t },
    { name: "Babylonica", transform: (t) => t },
    { name: "Dr Sugiyama", transform: (t) => t },
    { name: "Festive", transform: (t) => t },
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

// ── 4: Lollipop Swirls ────────────────────────────────────────────────

const lollipopSwirls: FontCategory = {
  name: "Lollipop Swirls",
  styles: [
    { name: "DynaPuff", transform: (t) => t },
    { name: "Molle", transform: (t) => t },
    { name: "Chango", transform: (t) => t },
    { name: "Spicy Rice", transform: (t) => t },
    { name: "Life Savers", transform: (t) => t },
    { name: "Ribeye Marrow", transform: (t) => t },
    { name: "Combo", transform: (t) => t },
    { name: "Fascinate Inline", transform: (t) => t },
    { name: "Crafty Girls", transform: (t) => t },
    { name: "Padyakke Expanded One", transform: (t) => t },
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
    { name: "Sweet Whisper", transform: (t) => intersperse(boldScriptMap(t), "\u2661") },
    { name: "Soft Kiss", transform: (t) => withFrame(boldScriptMap(t), "\u2764\uFE0F", "\u2764\uFE0F") },
    { name: "Valentine", transform: (t) => intersperse(boldScriptMap(t), "\u2763") },
  ],
};

// ── 6: Pixie Dust ─────────────────────────────────────────────────────

const pixieDust: FontCategory = {
  name: "Pixie Dust",
  styles: [
    { name: "Snowburst One", transform: (t) => t },
    { name: "Raleway Dots", transform: (t) => t },
    { name: "Freckle Face", transform: (t) => t },
    { name: "Elsie Swash Caps", transform: (t) => t },
    { name: "Spirax", transform: (t) => t },
    { name: "Plaster", transform: (t) => t },
    { name: "Monofett", transform: (t) => t },
    { name: "Warnes", transform: (t) => t },
    { name: "Splash", transform: (t) => t },
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
    { name: "Lotus Frame", transform: (t) => withFrame(t, "\u2740\u2741", "\u2741\u2740") },
  ],
};

// ── 8: Bouncy Blossoms ────────────────────────────────────────────────

const bouncyBlossoms: FontCategory = {
  name: "Bouncy Blossoms",
  styles: [
    { name: "Fruktur", transform: (t) => t },
    { name: "Faster One", transform: (t) => t },
    { name: "Sancreek", transform: (t) => t },
    { name: "Bigelow Rules", transform: (t) => t },
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
