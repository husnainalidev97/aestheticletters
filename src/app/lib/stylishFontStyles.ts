// ---------------------------------------------------------------------------
// Stylish Font Style Definitions — EXCLUSIVE to /stylish-fonts page
// 10 categories — all Unicode-based
// ---------------------------------------------------------------------------

export interface StylishFontStyle {
  name: string;
  transform: (text: string) => string;
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

function applyCharMap(text: string, map: Record<string, string>): string {
  return [...text].map((c) => map[c] ?? map[c.toLowerCase()] ?? c).join("");
}

// ── Character Maps ────────────────────────────────────────────────────────

const parenthesizedMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  parenthesizedMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x249C + i);
  parenthesizedMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x249C + i);
}

const brailleMap: Record<string, string> = {
  a: "\u2801", b: "\u2803", c: "\u2809", d: "\u2819", e: "\u2811",
  f: "\u280B", g: "\u281B", h: "\u2813", i: "\u280A", j: "\u281A",
  k: "\u2805", l: "\u2807", m: "\u280D", n: "\u281D", o: "\u2815",
  p: "\u280F", q: "\u281F", r: "\u2817", s: "\u280E", t: "\u281E",
  u: "\u2825", v: "\u2827", w: "\u283A", x: "\u282D", y: "\u283D", z: "\u2835",
};

const currencyMap: Record<string, string> = {
  a: "\u20B3", b: "\u20BF", c: "\u20B5", d: "\u0110", e: "\u0246",
  f: "\u20A3", g: "\u20B2", h: "\u0126", i: "\u0197", j: "\u0248",
  k: "\u20AD", l: "\u0141", m: "\u20A5", n: "\u20A6", o: "\u00D8",
  p: "\u20B1", q: "Q", r: "\u20B6", s: "\u20B4", t: "\u20AE",
  u: "\u0244", v: "V", w: "\u20A9", x: "\u04BE", y: "\u024E", z: "\u2C6B",
};

// ── 1: Parenthesized Text — Unicode enclosed letters ──────────────────────

const parenthesizedText: StylishFontCategory = {
  name: "Parenthesized Text",
  styles: [
    { name: "Parenthesized", transform: (t) => applyCharMap(t, parenthesizedMap) },
    { name: "Paren + Stars", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u2729", "\u2729") },
    { name: "Paren + Hearts", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u2661", "\u2661") },
    { name: "Paren Sparkle", transform: (t) => intersperse(applyCharMap(t, parenthesizedMap), "\u2728") },
    { name: "Paren Dots", transform: (t) => intersperse(applyCharMap(t, parenthesizedMap), "\u00B7") },
    { name: "Paren Diamond", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u25C6", "\u25C6") },
    { name: "Paren Brackets", transform: (t) => `\u3010${applyCharMap(t, parenthesizedMap)}\u3011` },
    { name: "Paren Arrow", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u27A4", "\u27A4") },
    { name: "Paren Wave", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u223C\u223C", "\u223C\u223C") },
    { name: "Paren Crown", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\uD83D\uDC51", "\uD83D\uDC51") },
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

// ── 3: Musical & Card Suits — Unicode decorative transforms ───────────────

const musicalCardSuits: StylishFontCategory = {
  name: "Musical & Card Suits",
  styles: [
    { name: "Musical Wrap", transform: (t) => withFrame(t, "\u266A\u266B", "\u266B\u266A") },
    { name: "Note Chain", transform: (t) => intersperse(t, "\u266A") },
    { name: "Double Notes", transform: (t) => withFrame(t, "\u266B\u266C", "\u266C\u266B") },
    { name: "Melody Flow", transform: (t) => withFrame(intersperse(t, "\u266D"), "\u266A", "\u266A") },
    { name: "Spade Wrap", transform: (t) => withFrame(t, "\u2660", "\u2660") },
    { name: "Club Frame", transform: (t) => withFrame(t, "\u2663", "\u2663") },
    { name: "Heart Suit", transform: (t) => withFrame(t, "\u2665", "\u2665") },
    { name: "Diamond Suit", transform: (t) => withFrame(t, "\u2666", "\u2666") },
    { name: "Full Deck", transform: (t) => withFrame(t, "\u2660\u2663\u2665\u2666", "\u2666\u2665\u2663\u2660") },
    { name: "Card Scatter", transform: (t) => intersperse(t, "\u2660\u2665") },
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

// ── 5: Chess & Games — Unicode game piece transforms ──────────────────────

const chessGames: StylishFontCategory = {
  name: "Chess & Games",
  styles: [
    { name: "King Guard", transform: (t) => withFrame(t, "\u265A", "\u265A") },
    { name: "Queen Crown", transform: (t) => withFrame(t, "\u265B", "\u265B") },
    { name: "Rook Tower", transform: (t) => withFrame(t, "\u265C", "\u265C") },
    { name: "Knight Steed", transform: (t) => withFrame(t, "\u265E", "\u265E") },
    { name: "Bishop Cross", transform: (t) => withFrame(t, "\u265D", "\u265D") },
    { name: "Pawn March", transform: (t) => intersperse(t, "\u265F") },
    { name: "Chess Board", transform: (t) => withFrame(t, "\u265A\u265B\u265C", "\u265C\u265B\u265A") },
    { name: "Dice Roll", transform: (t) => withFrame(t, "\u2680\u2681\u2682", "\u2683\u2684\u2685") },
    { name: "Dice Dots", transform: (t) => intersperse(t, "\u2680") },
    { name: "Game Pieces", transform: (t) => withFrame(t, "\u265A\u2680\u265E", "\u265E\u2680\u265A") },
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

// ── 7: Currency & Braille — Unicode alphabet transforms ───────────────────

const currencyBraille: StylishFontCategory = {
  name: "Currency & Braille",
  styles: [
    { name: "Currency Style", transform: (t) => applyCharMap(t, currencyMap) },
    { name: "Currency + Frame", transform: (t) => withFrame(applyCharMap(t, currencyMap), "\u20AC", "\u20AC") },
    { name: "Currency Sparkle", transform: (t) => intersperse(applyCharMap(t, currencyMap), "\u2728") },
    { name: "Money Flow", transform: (t) => withFrame(applyCharMap(t, currencyMap), "\u20B0\u20B0", "\u20B0\u20B0") },
    { name: "Braille Code", transform: (t) => applyCharMap(t, brailleMap) },
    { name: "Braille + Stars", transform: (t) => withFrame(applyCharMap(t, brailleMap), "\u2605", "\u2605") },
    { name: "Braille Dots", transform: (t) => intersperse(applyCharMap(t, brailleMap), "\u2022") },
    { name: "Braille Frame", transform: (t) => withFrame(applyCharMap(t, brailleMap), "\u2800\u28FF", "\u28FF\u2800") },
    { name: "Braille Diamond", transform: (t) => withFrame(applyCharMap(t, brailleMap), "\u25C6", "\u25C6") },
    { name: "Crypto Chain", transform: (t) => withFrame(applyCharMap(t, currencyMap), "\u20BF\u26D3", "\u26D3\u20BF") },
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
  parenthesizedText,
  diamondGlazed,
  musicalCardSuits,
  starlightSparkle,
  chessGames,
  underlinedFlow,
  currencyBraille,
  wavyMotion,
  industrialBlock,
  symbolicFrames,
];
