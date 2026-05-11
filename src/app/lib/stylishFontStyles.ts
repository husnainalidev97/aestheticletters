// ---------------------------------------------------------------------------
// Stylish Font Style Definitions — EXCLUSIVE to /stylish-fonts page
// 10 categories: 5 Google Font + 5 Unicode-based
// ---------------------------------------------------------------------------

export interface StylishFontStyle {
  name: string;
  transform: (text: string) => string;
  fontFamily?: string;
}

export interface StylishFontCategory {
  name: string;
  styles: StylishFontStyle[];
}

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

// ── 1: Urban Vogue — Google Fonts ─────────────────────────────────────────

const urbanVogue: StylishFontCategory = {
  name: "Urban Vogue",
  styles: [
    { name: "Monoton", transform: (t) => t, fontFamily: "'Monoton', display" },
    { name: "Cossette Titre", transform: (t) => t, fontFamily: "'Cossette Titre', serif" },
    { name: "Akronim", transform: (t) => t, fontFamily: "'Akronim', display" },
    { name: "Syne Tactile", transform: (t) => t, fontFamily: "'Syne Tactile', display" },
    { name: "Tac One", transform: (t) => t, fontFamily: "'Tac One', sans-serif" },
    { name: "Single Day", transform: (t) => t, fontFamily: "'Single Day', display" },
    { name: "Trade Winds", transform: (t) => t, fontFamily: "'Trade Winds', display" },
    { name: "Ole", transform: (t) => t, fontFamily: "'Ole', cursive" },
    { name: "Mountains of Christmas", transform: (t) => t, fontFamily: "'Mountains of Christmas', display" },
    { name: "Joti One", transform: (t) => t, fontFamily: "'Joti One', display" },
  ],
};

// ── 2: Diamond Glazed — Unicode diamond transforms ────────────────────────

const diamondGlazed: StylishFontCategory = {
  name: "Diamond Glazed",
  styles: [
    { name: "Diamond Wrap", transform: (t) => withFrame(t, "\u2666", "\u2666") },
    { name: "Diamond Chain", transform: (t) => intersperse(t, "\u2666") },
    { name: "Hollow Diamond", transform: (t) => withFrame(t, "\u2662", "\u2662") },
    { name: "Gem Dots", transform: (t) => intersperse(t, "\u2B25") },
    { name: "Crystal Frame", transform: (t) => withFrame(t, "\u2B25\u2666\u2B25", "\u2B25\u2666\u2B25") },
    { name: "Diamond Shower", transform: (t) => withFrame(intersperse(t, "\u2662"), "\u2666\u2666", "\u2666\u2666") },
    { name: "Lozenge Flow", transform: (t) => intersperse(t, "\u25C6") },
    { name: "Diamond Halo", transform: (t) => withFrame(t, "\u2662\u2666\u2662", "\u2662\u2666\u2662") },
    { name: "Sparkling Gem", transform: (t) => withFrame(intersperse(t, "\u2727"), "\u2666", "\u2666") },
    { name: "Diamond Cascade", transform: (t) => withFrame(t, "\u25C7\u25C6\u25C7", "\u25C7\u25C6\u25C7") },
  ],
};

// ── 3: Cool Fonts — Google Fonts ──────────────────────────────────────────

const coolFonts: StylishFontCategory = {
  name: "Cool Fonts",
  styles: [
    { name: "Rubik Glitch", transform: (t) => t, fontFamily: "'Rubik Glitch', system-ui" },
    { name: "Rubik Burned", transform: (t) => t, fontFamily: "'Rubik Burned', system-ui" },
    { name: "Rubik Spray Paint", transform: (t) => t, fontFamily: "'Rubik Spray Paint', system-ui" },
    { name: "Creepster", transform: (t) => t, fontFamily: "'Creepster', display" },
    { name: "Eater", transform: (t) => t, fontFamily: "'Eater', display" },
    { name: "Metal Mania", transform: (t) => t, fontFamily: "'Metal Mania', display" },
    { name: "Vampiro One", transform: (t) => t, fontFamily: "'Vampiro One', display" },
    { name: "Kablammo", transform: (t) => t, fontFamily: "'Kablammo', display" },
    { name: "Rubik Bubbles", transform: (t) => t, fontFamily: "'Rubik Bubbles', system-ui" },
    { name: "Rubik Puddles", transform: (t) => t, fontFamily: "'Rubik Puddles', system-ui" },
    { name: "Rubik Wet Paint", transform: (t) => t, fontFamily: "'Rubik Wet Paint', system-ui" },
    { name: "Moo Lah Lah", transform: (t) => t, fontFamily: "'Moo Lah Lah', display" },
  ],
};

// ── 4: Starlight Sparkle — Unicode star/sparkle transforms ────────────────

const starlightSparkle: StylishFontCategory = {
  name: "Starlight Sparkle",
  styles: [
    { name: "Star Wrap", transform: (t) => withFrame(t, "\u2728", "\u2728") },
    { name: "Star Chain", transform: (t) => intersperse(t, "\u2605") },
    { name: "Hollow Stars", transform: (t) => intersperse(t, "\u2606") },
    { name: "Sparkle Burst", transform: (t) => withFrame(t, "\u2728\u2B50\u2728", "\u2728\u2B50\u2728") },
    { name: "Twinkle Flow", transform: (t) => intersperse(t, "\u2726") },
    { name: "Celestial Frame", transform: (t) => withFrame(t, "\u2726\u2727\u2726", "\u2726\u2727\u2726") },
    { name: "Stardust", transform: (t) => withFrame(intersperse(t, "\u2727"), "\u2728", "\u2728") },
    { name: "Shimmering", transform: (t) => withFrame(t, "\u269D\u2728", "\u2728\u269D") },
    { name: "Nova Glow", transform: (t) => withFrame(intersperse(t, "\u2605"), "\u2B50", "\u2B50") },
    { name: "Galaxy Dust", transform: (t) => withFrame(t, "\u2605\u2606\u2605\u2606", "\u2606\u2605\u2606\u2605") },
  ],
};

// ── 5: Signature Glow — Google Fonts ──────────────────────────────────────

const signatureGlow: StylishFontCategory = {
  name: "Signature Glow",
  styles: [
    { name: "Birthstone Bounce", transform: (t) => t, fontFamily: "'Birthstone Bounce', cursive" },
    { name: "Qwitcher Grypen", transform: (t) => t, fontFamily: "'Qwitcher Grypen', cursive" },
    { name: "Ingrid Darling", transform: (t) => t, fontFamily: "'Ingrid Darling', cursive" },
    { name: "Princess Sofia", transform: (t) => t, fontFamily: "'Princess Sofia', cursive" },
    { name: "Twinkle Star", transform: (t) => t, fontFamily: "'Twinkle Star', cursive" },
    { name: "Condiment", transform: (t) => t, fontFamily: "'Condiment', cursive" },
    { name: "Oregano", transform: (t) => t, fontFamily: "'Oregano', cursive" },
    { name: "Bonbon", transform: (t) => t, fontFamily: "'Bonbon', cursive" },
  ],
};

// ── 6: Underlined Flow — Unicode underline transforms ─────────────────────

const underlinedFlow: StylishFontCategory = {
  name: "Underlined Flow",
  styles: [
    { name: "Single Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Dotted Below", transform: (t) => withCombining(t, ["\u0324"]) },
    { name: "Line Below", transform: (t) => withCombining(t, ["\u0331"]) },
    { name: "Tilde Below", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Ring Below", transform: (t) => withCombining(t, ["\u0325"]) },
    { name: "Bridge Below", transform: (t) => withCombining(t, ["\u032A"]) },
    { name: "Cedilla Flow", transform: (t) => withCombining(t, ["\u0327"]) },
    { name: "Double Dot Line", transform: (t) => withCombining(t, ["\u0324", "\u0332"]) },
    { name: "Underline Ring", transform: (t) => withCombining(t, ["\u0332", "\u0325"]) },
  ],
};

// ── 7: Metro Outline — Google Fonts ───────────────────────────────────────

const metroOutline: StylishFontCategory = {
  name: "Metro Outline",
  styles: [
    { name: "Codystar", transform: (t) => t, fontFamily: "'Codystar', display" },
    { name: "Rubik Microbe", transform: (t) => t, fontFamily: "'Rubik Microbe', system-ui" },
    { name: "Rubik Storm", transform: (t) => t, fontFamily: "'Rubik Storm', system-ui" },
    { name: "Metamorphous", transform: (t) => t, fontFamily: "'Metamorphous', display" },
    { name: "Chokokutai", transform: (t) => t, fontFamily: "'Chokokutai', display" },
    { name: "Henny Penny", transform: (t) => t, fontFamily: "'Henny Penny', display" },
    { name: "Jolly Lodger", transform: (t) => t, fontFamily: "'Jolly Lodger', display" },
    { name: "Shizuru", transform: (t) => t, fontFamily: "'Shizuru', display" },
  ],
};

// ── 8: Wavy Motion — Unicode wavy transforms ─────────────────────────────

const wavyMotion: StylishFontCategory = {
  name: "Wavy Motion",
  styles: [
    { name: "Tilde Overlay", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Tilde Above", transform: (t) => withCombining(t, ["\u0303"]) },
    { name: "Tilde Below", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Double Wave", transform: (t) => withCombining(t, ["\u0303", "\u0330"]) },
    { name: "Wave Wrap", transform: (t) => withFrame(withCombining(t, ["\u0303"]), "\u223C", "\u223C") },
    { name: "Ripple", transform: (t) => intersperse(t, "\u223C") },
    { name: "Ocean Tide", transform: (t) => withFrame(withCombining(t, ["\u0334"]), "\u2248", "\u2248") },
    { name: "Sine Flow", transform: (t) => withFrame(t, "\u223F\u223F", "\u223F\u223F") },
    { name: "Caron Wave", transform: (t) => withCombining(t, ["\u030C"]) },
    { name: "Breve Bounce", transform: (t) => withCombining(t, ["\u0306"]) },
  ],
};

// ── 9: Industrial Block — Unicode block transforms ────────────────────────

const industrialBlock: StylishFontCategory = {
  name: "Industrial Block",
  styles: [
    { name: "Lenticular Frame", transform: (t) => `\u3010${t}\u3011` },
    { name: "Heavy Bracket", transform: (t) => `\u2E28${t}\u2E29` },
    { name: "Tortoise Shell", transform: (t) => `\u3014${t}\u3015` },
    { name: "White Corner", transform: (t) => `\u300E${t}\u300F` },
    { name: "Double Angle", transform: (t) => `\u300A${t}\u300B` },
    { name: "Full Block Frame", transform: (t) => withFrame(t, "\u2588\u2588", "\u2588\u2588") },
    { name: "Math Bracket", transform: (t) => `\u27E6${t}\u27E7` },
    { name: "Half Block", transform: (t) => withFrame(t, "\u2590", "\u258C") },
    { name: "Heavy Arrow", transform: (t) => withFrame(t, "\u2B9E", "\u2B9C") },
    { name: "Box Frame", transform: (t) => `\u25A0 ${t} \u25A0` },
  ],
};

// ── 10: Symbolic Frames — Unicode decorative frame transforms ─────────────

const symbolicFrames: StylishFontCategory = {
  name: "Symbolic Frames",
  styles: [
    { name: "Ornate Scroll", transform: (t) => withFrame(t, "\uA9C1", "\uA9C2") },
    { name: "Egyptian Wings", transform: (t) => withFrame(t, "\uD80C\uDE69", "\uD80C\uDE6A") },
    { name: "Crossed Swords", transform: (t) => withFrame(t, "\u2694\uFE0F", "\u2694\uFE0F") },
    { name: "Anchor Guard", transform: (t) => withFrame(t, "\u2693", "\u2693") },
    { name: "Tibetan Curl", transform: (t) => withFrame(t, "\u0F3A\u0F3C", "\u0F3D\u0F3B") },
    { name: "Star Diamond", transform: (t) => withFrame(t, "\u2726\u2727", "\u2727\u2726") },
    { name: "Floral Guard", transform: (t) => withFrame(t, "\u2740\u2741", "\u2741\u2740") },
    { name: "Arrow Points", transform: (t) => withFrame(t, "\u2B9E\u2B9E", "\u2B9C\u2B9C") },
    { name: "Trident Frame", transform: (t) => withFrame(t, "\uD83D\uDD31", "\uD83D\uDD31") },
    { name: "Lightning Bolt", transform: (t) => withFrame(t, "\u26A1", "\u26A1") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const stylishFontCategories: StylishFontCategory[] = [
  urbanVogue,
  diamondGlazed,
  coolFonts,
  starlightSparkle,
  signatureGlow,
  underlinedFlow,
  metroOutline,
  wavyMotion,
  industrialBlock,
  symbolicFrames,
];
