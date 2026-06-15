// ---------------------------------------------------------------------------
// Stylish Font Style Definitions — EXCLUSIVE to /stylish-fonts page
// 10 categories — all Unicode-based, with diverse transform patterns
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

/** Alternate between two transforms on even/odd characters */
function alternate(text: string, evenFn: (c: string) => string, oddFn: (c: string) => string): string {
  let idx = 0;
  return [...text].map((c) => {
    if (c === " " || c === "\u3000") return c;
    return (idx++ % 2 === 0) ? evenFn(c) : oddFn(c);
  }).join("");
}

/** Progressive decoration — each character gets increasingly more marks */
function progressive(text: string, mark: string, max: number): string {
  let idx = 0;
  return [...text].map((c) => {
    if (c === " ") return c;
    const count = Math.min(idx++ % max + 1, max);
    return c + mark.repeat(count);
  }).join("");
}

/** Cycle through a list of symbols between each character */
function cycleSeparator(text: string, symbols: string[]): string {
  let idx = 0;
  return [...text].map((c) => {
    if (c === " ") return c;
    return c + symbols[idx++ % symbols.length];
  }).join("");
}

/** Reverse the text string */
function reverse(text: string): string {
  return [...text].reverse().join("");
}

/** Mirror text: original + separator + reversed */
function mirror(text: string, sep: string): string {
  return text + sep + reverse(text);
}

/** Wrap each individual character with given symbols */
function wrapEach(text: string, pre: string, suf: string): string {
  return [...text].map((c) => (c === " " ? c : pre + c + suf)).join("");
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

const runicMap: Record<string, string> = {
  a: "\u16A8", b: "\u16D2", c: "\u16B2", d: "\u16DE", e: "\u16D6",
  f: "\u16A0", g: "\u16B7", h: "\u16BA", i: "\u16C1", j: "\u16C3",
  k: "\u16B4", l: "\u16DA", m: "\u16D7", n: "\u16BE", o: "\u16A9",
  p: "\u16C8", q: "\u16B3", r: "\u16B1", s: "\u16CB", t: "\u16CF",
  u: "\u16A2", v: "\u16E0", w: "\u16B9", x: "\u16EA", y: "\u16A5", z: "\u16C9",
};

const smallCapsMap: Record<string, string> = {
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07",
  f: "\uA730", g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A",
  k: "\u1D0B", l: "\u029F", m: "\u1D0D", n: "\u0274", o: "\u1D0F",
  p: "\u1D18", q: "\u01EB", r: "\u0280", s: "\u0455", t: "\u1D1B",
  u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x", y: "\u028F", z: "\u1D22",
};

// ── 1: Parenthesized Text — character map + diverse combos ────────────────

const parenthesizedText: StylishFontCategory = {
  name: "Parenthesized Text",
  styles: [
    { name: "Paren Letters", transform: (t) => applyCharMap(t, parenthesizedMap) },
    { name: "Paren Reversed", transform: (t) => reverse(applyCharMap(t, parenthesizedMap)) },
    { name: "Paren Mirror", transform: (t) => mirror(applyCharMap(t, parenthesizedMap), " \u2022 ") },
    { name: "Paren Alternate", transform: (t) => alternate(t, (c) => parenthesizedMap[c.toLowerCase()] ?? c, (c) => c) },
    { name: "Paren Progressive", transform: (t) => progressive(applyCharMap(t, parenthesizedMap), "\u2727", 3) },
    { name: "Paren Cycle", transform: (t) => cycleSeparator(applyCharMap(t, parenthesizedMap), ["\u2022", "\u25E6", "\u2023"]) },
    { name: "Paren Boxed", transform: (t) => wrapEach(applyCharMap(t, parenthesizedMap), "[", "]") },
    { name: "Paren + Stars", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\u2729", "\u2729") },
    { name: "Paren Dashes", transform: (t) => cycleSeparator(applyCharMap(t, parenthesizedMap), ["\u2013", "\u2014"]) },
    { name: "Paren Crown", transform: (t) => withFrame(applyCharMap(t, parenthesizedMap), "\uD83D\uDC51", "\uD83D\uDC51") },
  ],
};

// ── 2: Diamond Glazed — alternating and progressive patterns ──────────────

const diamondGlazed: StylishFontCategory = {
  name: "Diamond Glazed",
  styles: [
    { name: "Diamond Alternate", transform: (t) => alternate(t, (c) => c + "\u2666", (c) => c + "\u2662") },
    { name: "Diamond Progressive", transform: (t) => progressive(t, "\u2666", 4) },
    { name: "Diamond Cycle", transform: (t) => cycleSeparator(t, ["\u2666", "\u2662", "\u25C6", "\u25C7"]) },
    { name: "Diamond Each", transform: (t) => wrapEach(t, "\u2662", "\u2662") },
    { name: "Diamond Mirror", transform: (t) => mirror(t, " \u2666\u2662\u2666 ") },
    { name: "Diamond Reversed", transform: (t) => withFrame(reverse(t), "\u25C6\u25C7", "\u25C7\u25C6") },
    { name: "Diamond Underline", transform: (t) => withCombining(t, ["\u0324", "\u0332"]) },
    { name: "Gem Shower", transform: (t) => withFrame(intersperse(t, "\u2662"), "\u2666\u2666", "\u2666\u2666") },
    { name: "Crystal Frame", transform: (t) => withFrame(t, "\u2B25\u2666\u2B25", "\u2B25\u2666\u2B25") },
    { name: "Diamond Cascade", transform: (t) => withFrame(cycleSeparator(t, ["\u25C7", "\u25C6"]), "\u2666", "\u2666") },
  ],
};

// ── 3: Musical & Card Suits — rhythm-based transforms ─────────────────────

const musicalCardSuits: StylishFontCategory = {
  name: "Musical & Card Suits",
  styles: [
    { name: "Melody Cycle", transform: (t) => cycleSeparator(t, ["\u266A", "\u266B", "\u266C", "\u266D"]) },
    { name: "Card Alternate", transform: (t) => alternate(t, (c) => c + "\u2660", (c) => c + "\u2665") },
    { name: "Suite Cycle", transform: (t) => cycleSeparator(t, ["\u2660", "\u2663", "\u2665", "\u2666"]) },
    { name: "Note Wrap Each", transform: (t) => wrapEach(t, "\u266A", "\u266A") },
    { name: "Music Mirror", transform: (t) => mirror(t, " \u266B\u266C\u266B ") },
    { name: "Spade Progressive", transform: (t) => progressive(t, "\u2660", 3) },
    { name: "Card Reversed", transform: (t) => withFrame(reverse(t), "\u2660\u2663", "\u2665\u2666") },
    { name: "Full Deck", transform: (t) => withFrame(t, "\u2660\u2663\u2665\u2666", "\u2666\u2665\u2663\u2660") },
    { name: "Rhythm Dots", transform: (t) => withCombining(t, ["\u0307", "\u0323"]) },
    { name: "Treble Frame", transform: (t) => withFrame(cycleSeparator(t, ["\u266A", "\u266B"]), "\uD83C\uDFB5", "\uD83C\uDFB5") },
  ],
};

// ── 4: Starlight Sparkle — layered and progressive sparkle ────────────────

const starlightSparkle: StylishFontCategory = {
  name: "Starlight Sparkle",
  styles: [
    { name: "Sparkle Progressive", transform: (t) => progressive(t, "\u2728", 3) },
    { name: "Star Alternate", transform: (t) => alternate(t, (c) => c + "\u2605", (c) => c + "\u2606") },
    { name: "Starry Cycle", transform: (t) => cycleSeparator(t, ["\u2605", "\u2606", "\u2726", "\u2727", "\u2728"]) },
    { name: "Twinkle Each", transform: (t) => wrapEach(t, "\u2727", "\u2727") },
    { name: "Star Mirror", transform: (t) => mirror(t, " \u2605\u2606\u2605 ") },
    { name: "Celestial Frame", transform: (t) => withFrame(t, "\u2726\u2727\u2726", "\u2726\u2727\u2726") },
    { name: "Stardust Layer", transform: (t) => withCombining(t, ["\u0308", "\u030A"]) },
    { name: "Nova Glow", transform: (t) => withFrame(alternate(t, (c) => c + "\u2605", (c) => c), "\u2B50", "\u2B50") },
    { name: "Cosmic Trail", transform: (t) => withFrame(intersperse(t, "\u2606"), "\u2605\u2605", "\u2605\u2605") },
    { name: "Shimmering", transform: (t) => withFrame(withCombining(t, ["\u0489"]), "\u269D\u2728", "\u2728\u269D") },
  ],
};

// ── 5: Chess & Games — strategic pattern transforms ───────────────────────

const chessGames: StylishFontCategory = {
  name: "Chess & Games",
  styles: [
    { name: "Chess Cycle", transform: (t) => cycleSeparator(t, ["\u265A", "\u265B", "\u265C", "\u265D", "\u265E", "\u265F"]) },
    { name: "Piece Alternate", transform: (t) => alternate(t, (c) => c + "\u265A", (c) => c + "\u265F") },
    { name: "Dice Progressive", transform: (t) => cycleSeparator(t, ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]) },
    { name: "Knight Mirror", transform: (t) => mirror(t, " \u265E\u265E ") },
    { name: "King Boxed", transform: (t) => wrapEach(t, "\u265A", "\u265A") },
    { name: "Queen Reversed", transform: (t) => withFrame(reverse(t), "\u265B\u265B", "\u265B\u265B") },
    { name: "Pawn March", transform: (t) => withFrame(intersperse(t, "\u265F"), "\u265A", "\u265A") },
    { name: "Castle Wall", transform: (t) => withFrame(t, "\u265C\u265C\u265C", "\u265C\u265C\u265C") },
    { name: "Game Shield", transform: (t) => wrapEach(t, "\u2694", "\u2694") },
    { name: "Checkmate", transform: (t) => withFrame(cycleSeparator(t, ["\u265A", "\u265F"]), "\u2654", "\u2654") },
  ],
};

// ── 6: Underlined Flow — multi-layer combining marks ──────────────────────

const underlinedFlow: StylishFontCategory = {
  name: "Underlined Flow",
  styles: [
    { name: "Single Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Heavy Underbar", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Dotted Below", transform: (t) => withCombining(t, ["\u0324"]) },
    { name: "Line + Dot Below", transform: (t) => withCombining(t, ["\u0331", "\u0323"]) },
    { name: "Squiggle Below", transform: (t) => withCombining(t, ["\u0330"]) },
    { name: "Ring Below", transform: (t) => withCombining(t, ["\u0325"]) },
    { name: "Bridge Below", transform: (t) => withCombining(t, ["\u032A"]) },
    { name: "Cedilla Flow", transform: (t) => withCombining(t, ["\u0327"]) },
    { name: "Triple Stack", transform: (t) => withCombining(t, ["\u0332", "\u0324", "\u0330"]) },
    { name: "Progressive Under", transform: (t) => progressive(t, "\u0332", 3) },
  ],
};

// ── 7: Currency & Braille — alphabet replacement combos ───────────────────

const currencyBraille: StylishFontCategory = {
  name: "Currency & Braille",
  styles: [
    { name: "Money Letters", transform: (t) => applyCharMap(t, currencyMap) },
    { name: "Currency Reversed", transform: (t) => reverse(applyCharMap(t, currencyMap)) },
    { name: "Currency Mirror", transform: (t) => mirror(applyCharMap(t, currencyMap), " \u20AC ") },
    { name: "Money Boxed", transform: (t) => wrapEach(applyCharMap(t, currencyMap), "\u00AB", "\u00BB") },
    { name: "Crypto Alternate", transform: (t) => alternate(t, (c) => currencyMap[c.toLowerCase()] ?? c, (c) => c.toUpperCase()) },
    { name: "Braille Code", transform: (t) => applyCharMap(t, brailleMap) },
    { name: "Braille Reversed", transform: (t) => reverse(applyCharMap(t, brailleMap)) },
    { name: "Braille Mirror", transform: (t) => mirror(applyCharMap(t, brailleMap), " \u28FF ") },
    { name: "Braille + Dots", transform: (t) => cycleSeparator(applyCharMap(t, brailleMap), ["\u2022", "\u25E6"]) },
    { name: "Braille Border", transform: (t) => withFrame(applyCharMap(t, brailleMap), "\u2800\u28FF\u2847", "\u2847\u28FF\u2800") },
  ],
};

// ── 8: Wavy Motion — combining mark layers & patterns ─────────────────────

const wavyMotion: StylishFontCategory = {
  name: "Wavy Motion",
  styles: [
    { name: "Tilde Through", transform: (t) => withCombining(t, ["\u0334"]) },
    { name: "Tilde Above", transform: (t) => withCombining(t, ["\u0303"]) },
    { name: "Double Wave", transform: (t) => withCombining(t, ["\u0303", "\u0330"]) },
    { name: "Wave Progressive", transform: (t) => progressive(t, "\u0303", 3) },
    { name: "Wavy Undercurl", transform: (t) => withCombining(t, ["\u0330", "\u0303"]) },
    { name: "Ripple Cycle", transform: (t) => cycleSeparator(t, ["\u223C", "\u2248", "\u223F"]) },
    { name: "Ocean Mirror", transform: (t) => mirror(withCombining(t, ["\u0334"]), " \u2248 ") },
    { name: "Sine Flow", transform: (t) => withFrame(t, "\u223F\u223F", "\u223F\u223F") },
    { name: "Caron Wave", transform: (t) => withCombining(t, ["\u030C"]) },
    { name: "Breve Bounce", transform: (t) => withCombining(t, ["\u0306"]) },
  ],
};

// ── 9: Runic & Ancient — character replacement + patterns ─────────────────

const runicAncient: StylishFontCategory = {
  name: "Runic & Ancient",
  styles: [
    { name: "Elder Runes", transform: (t) => applyCharMap(t, runicMap) },
    { name: "Rune Reversed", transform: (t) => reverse(applyCharMap(t, runicMap)) },
    { name: "Rune Mirror", transform: (t) => mirror(applyCharMap(t, runicMap), " \u16C7 ") },
    { name: "Rune Alternate", transform: (t) => alternate(t, (c) => runicMap[c.toLowerCase()] ?? c, (c) => c) },
    { name: "Rune Progressive", transform: (t) => progressive(applyCharMap(t, runicMap), "\u16EB", 2) },
    { name: "Rune Boxed", transform: (t) => wrapEach(applyCharMap(t, runicMap), "\u16C7", "\u16C7") },
    { name: "Ancient Caps", transform: (t) => applyCharMap(t, smallCapsMap) },
    { name: "Caps Reversed", transform: (t) => reverse(applyCharMap(t, smallCapsMap)) },
    { name: "Caps Mirror", transform: (t) => mirror(applyCharMap(t, smallCapsMap), " \u2022 ") },
    { name: "Caps + Underline", transform: (t) => withCombining(applyCharMap(t, smallCapsMap), ["\u0332"]) },
  ],
};

// ── 10: Box & Block Art — structural frame transforms ─────────────────────

const boxBlockArt: StylishFontCategory = {
  name: "Box & Block Art",
  styles: [
    { name: "Lenticular Frame", transform: (t) => `\u3010${t}\u3011` },
    { name: "Tortoise Shell", transform: (t) => `\u3014${t}\u3015` },
    { name: "Double Angle", transform: (t) => `\u300A${t}\u300B` },
    { name: "White Corner", transform: (t) => `\u300E${t}\u300F` },
    { name: "Block Each", transform: (t) => wrapEach(t, "\u2588", "\u2588") },
    { name: "Shade Alternate", transform: (t) => alternate(t, (c) => "\u2591" + c, (c) => "\u2593" + c) },
    { name: "Column Frame", transform: (t) => `\u2551 ${t} \u2551` },
    { name: "Box Mirror", transform: (t) => mirror(t, " \u2503 ") },
    { name: "Block Reversed", transform: (t) => `\u2590${reverse(t)}\u258C` },
    { name: "Brick Wall", transform: (t) => cycleSeparator(t, ["\u2596", "\u2597", "\u2598", "\u259D"]) },
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
  runicAncient,
  boxBlockArt,
];
