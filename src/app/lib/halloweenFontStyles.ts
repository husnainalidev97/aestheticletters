// ---------------------------------------------------------------------------
// Halloween Font Style Definitions — EXCLUSIVE to /halloween-fonts page
// 10 categories · Google Fonts (shown first) + unique Unicode styles
// Each base alphabet appears in ONE card only; icon-decorated styles added
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

// ── Icon / Symbol Helpers ──────────────────────────────────────────────────

/** Wrap transformed text with a prefix and suffix icon. */
function decorate(text: string, icon: string): string {
  return `${icon} ${text} ${icon}`;
}

/** Place a separator icon between each word; falls back to prefix/suffix for single words. */
function decorateWords(text: string, icon: string): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return `${icon} ${text} ${icon}`;
  return words.join(` ${icon} `);
}

// ── Character Maps (each used in ONE card only) ────────────────────────────

// Card 8 — Moonlight Cursive
const MATH_SCRIPT = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

// Card 4 — Pumpkin Hollow
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

// Card 9 — Dark Ritual
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

// ── 1: Graveyard Gothic ──────────────────────────────────────────────────

const graveyardGothic: FontCategory = {
  name: "Graveyard Gothic",
  styles: [
    // Google Fonts
    { name: "Mystery Quest", transform: (t) => t, fontFamily: "'Mystery Quest', cursive" },
    { name: "Grenze Gotisch", transform: (t) => t, fontFamily: "'Grenze Gotisch', serif" },
    { name: "Ruslan Display", transform: (t) => t, fontFamily: "'Ruslan Display', cursive" },
    { name: "New Rocker", transform: (t) => t, fontFamily: "'New Rocker', cursive" },
    { name: "Road Rage", transform: (t) => t, fontFamily: "'Road Rage', cursive" },
    // Unicode
    { name: "Cursed Graveyard", transform: (t) => withCombining(t, ["\u0334", "\u0325"]) },
    { name: "Graveyard Zalgo", transform: (t) => zalgo(t, 3, 3, 17) },
    { name: "⚰ Tombstone Text ⚰", transform: (t) => decorate(withCombining(t, ["\u032A", "\u0329"]), "\u26B0") },
    { name: "✞ Cemetery Gothic ✞", transform: (t) => decorate(t, "\u271E") },
    { name: "☠ Bone Yard ☠", transform: (t) => decorateWords(t, "\u2620") },
  ],
};

// ── 2: Blood Drip  (base: none — pure combining + icons) ─────────────────

const bloodDrip: FontCategory = {
  name: "Blood Drip",
  styles: [
    // Google Fonts
    { name: "Eater", transform: (t) => t, fontFamily: "'Eater', cursive" },
    { name: "Rubik Wet Paint", transform: (t) => t, fontFamily: "'Rubik Wet Paint', cursive" },
    { name: "Nosifer", transform: (t) => t, fontFamily: "'Nosifer', cursive" },
    { name: "Rubik Puddles", transform: (t) => t, fontFamily: "'Rubik Puddles', cursive" },
    // Unicode — blood-drip combining stacks
    { name: "Blood Drip Light", transform: (t) => withCombining(t, ["\u0322", "\u0323"]) },
    { name: "Gore Overflow", transform: (t) => zalgo(t, 0, 7, 5) },
    { name: "Zalgo Full Chaos", transform: (t) => zalgo(t, 5, 5, 11) },
    { name: "\uD83E\uDE78 Blood Rain \uD83E\uDE78", transform: (t) => decorate(withCombining(t, ["\u0336", "\u0323"]), "\uD83E\uDE78") },
  ],
};

// ── 3: Cursed Script ─────────────────────────────────────────────────────

const cursedScript: FontCategory = {
  name: "Cursed Script",
  styles: [
    // Google Fonts
    { name: "Rubik Distressed", transform: (t) => t, fontFamily: "'Rubik Distressed', cursive" },
    { name: "Rubik Beastly", transform: (t) => t, fontFamily: "'Rubik Beastly', cursive" },
    { name: "Stick", transform: (t) => t, fontFamily: "'Stick', sans-serif" },
    // Unicode — Zalgo corruption levels + cursed styles
    { name: "Possessed Cursed", transform: (t) => withCombining(t, ["\u0336", "\u0329", "\u0323"]) },
    { name: "Zalgo Light", transform: (t) => zalgo(t, 2, 0, 0) },
    { name: "Zalgo Heavy", transform: (t) => zalgo(t, 7, 7, 7) },
    { name: "Zalgo God", transform: (t) => zalgo(t, 11, 11, 13) },
    { name: "Void Curse", transform: (t) => withCombining(t, ["\u0338", "\u0336"]) },
    { name: "\uD83D\uDC80 Curse Mark \uD83D\uDC80", transform: (t) => decorate(withCombining(t, ["\u033D"]), "\uD83D\uDC80") },
  ],
};

// ── 4: Pumpkin Hollow  (base: SUPERSCRIPT) ────────────────────────────────

const pumpkinHollow: FontCategory = {
  name: "Pumpkin Hollow",
  styles: [
    // Google Fonts
    { name: "Creepster", transform: (t) => t, fontFamily: "'Creepster', cursive" },
    { name: "Emilys Candy", transform: (t) => t, fontFamily: "'Emilys Candy', cursive" },
    { name: "Henny Penny", transform: (t) => t, fontFamily: "'Henny Penny', cursive" },
    { name: "Jolly Lodger", transform: (t) => t, fontFamily: "'Jolly Lodger', cursive" },
    { name: "Irish Grover", transform: (t) => t, fontFamily: "'Irish Grover', cursive" },
    // Unicode — festive-spooky transforms
    { name: "Superscript Tiny", transform: (t) => superscript(t) },
    { name: "\uD83C\uDF83 Pumpkin Glow \uD83C\uDF83", transform: (t) => decorate(withCombining(t, ["\u030A", "\u0307"]), "\uD83C\uDF83") },
    { name: "\uD83C\uDF6C Candy Drip \uD83C\uDF6C", transform: (t) => decorate(withCombining(t, ["\u0307", "\u0306"]), "\uD83C\uDF6C") },
    { name: "\uD83C\uDF83 Pumpkin Spell \uD83C\uDF83", transform: (t) => decorate(withCombining(t, ["\u0303"]), "\uD83C\uDF83") },
  ],
};

// ── 5: Ghost Whisper ─────────────────────────────────────────────────────

const ghostWhisper: FontCategory = {
  name: "Ghost Whisper",
  styles: [
    // Google Fonts
    { name: "Flavors", transform: (t) => t, fontFamily: "'Flavors', cursive" },
    { name: "Are You Serious", transform: (t) => t, fontFamily: "'Are You Serious', cursive" },
    { name: "Shadows Into Light", transform: (t) => t, fontFamily: "'Shadows Into Light', cursive" },
    // Unicode — ghostly ethereal transforms
    { name: "Whisper Fade", transform: (t) => withCombining(t, ["\u0334", "\u0304"]) },
    { name: "Spirit Zalgo", transform: (t) => zalgo(t, 2, 1, 29) },
    { name: "\uD83D\uDC7B Ghost Float \uD83D\uDC7B", transform: (t) => decorate(withCombining(t, ["\u0305", "\u0303"]), "\uD83D\uDC7B") },
    { name: "\uD83D\uDD6F Candlelight \uD83D\uDD6F", transform: (t) => decorate(withCombining(t, ["\u0301", "\u030A"]), "\uD83D\uDD6F") },
    { name: "\u263D Phantom Moon \u263D", transform: (t) => decorate(withCombining(t, ["\u0306", "\u0305"]), "\u263D") },
  ],
};

// ── 6: Witch Spell ──────────────────────────────────────────────────────

const witchSpell: FontCategory = {
  name: "Witch Spell",
  styles: [
    // Google Fonts
    { name: "Rubik Gemstones", transform: (t) => t, fontFamily: "'Rubik Gemstones', cursive" },
    { name: "Ceviche One", transform: (t) => t, fontFamily: "'Ceviche One', cursive" },
    { name: "Tillana", transform: (t) => t, fontFamily: "'Tillana', cursive" },
    { name: "Bahiana", transform: (t) => t, fontFamily: "'Bahiana', cursive" },
    // Unicode — magical spell transforms
    { name: "Star Occult", transform: (t) => withCombining(t, ["\u20F0"]) },
    { name: "Potion Zalgo", transform: (t) => zalgo(t, 2, 2, 31) },
    { name: "\uD83D\uDD2E Crystal Spell \uD83D\uDD2E", transform: (t) => decorate(withCombining(t, ["\u0302", "\u0307"]), "\uD83D\uDD2E") },
    { name: "\u26A1 Lightning Hex \u26A1", transform: (t) => decorateWords(withCombining(t, ["\u0308"]), "\u26A1") },
  ],
};

// ── 7: Skull Gothic ─────────────────────────────────────────────────────

const skullGothic: FontCategory = {
  name: "Skull Gothic",
  styles: [
    // Google Fonts
    { name: "Butcherman", transform: (t) => t, fontFamily: "'Butcherman', cursive" },
    { name: "Asset", transform: (t) => t, fontFamily: "'Asset', cursive" },
    { name: "Rubik Burned", transform: (t) => t, fontFamily: "'Rubik Burned', cursive" },
    { name: "Bangers", transform: (t) => t, fontFamily: "'Bangers', cursive" },
    // Unicode — skull/bone themed transforms
    { name: "Skull Bones", transform: (t) => withCombining(t, ["\u033D", "\u0329", "\u0333"]) },
    { name: "\u2620 Skull & Bones \u2620", transform: (t) => decorate(withCombining(t, ["\u0334", "\u0323"]), "\u2620") },
    { name: "\uD83D\uDDE1 Death Strike \uD83D\uDDE1", transform: (t) => decorate(withCombining(t, ["\u0336", "\u032A"]), "\uD83D\uDDE1") },
    { name: "\u2694 War Gothic \u2694", transform: (t) => decorate(withCombining(t, ["\u0333", "\u033D"]), "\u2694") },
  ],
};

// ── 8: Moonlight Cursive  (base: MATH_SCRIPT) ────────────────────────────

const moonlightCursive: FontCategory = {
  name: "Moonlight Cursive",
  styles: [
    // Google Fonts
    { name: "Meddon", transform: (t) => t, fontFamily: "'Meddon', cursive" },
    { name: "Purple Purse", transform: (t) => t, fontFamily: "'Purple Purse', cursive" },
    // Unicode — dark cursive/script transforms
    { name: "Moonlight Script", transform: (t) => apply(t, MATH_SCRIPT) },
    { name: "\uD83C\uDF19 Moonbeam \uD83C\uDF19", transform: (t) => decorate(withCombining(t, ["\u0304", "\u030A"]), "\uD83C\uDF19") },
    { name: "\uD83E\uDD87 Night Flight \uD83E\uDD87", transform: (t) => decorate(withCombining(t, ["\u0303", "\u0305"]), "\uD83E\uDD87") },
    { name: "\uD83D\uDD78 Spider Silk \uD83D\uDD78", transform: (t) => decorateWords(withCombining(t, ["\u0302"]), "\uD83D\uDD78") },
    { name: "\uD83C\uDF11 Eclipse \uD83C\uDF11", transform: (t) => decorate(withCombining(t, ["\u0306", "\u0304"]), "\uD83C\uDF11") },
  ],
};

// ── 9: Dark Ritual  (base: FUTHARK) ──────────────────────────────────────

const darkRitual: FontCategory = {
  name: "Dark Ritual",
  styles: [
    // Google Fonts
    { name: "Kablammo", transform: (t) => t, fontFamily: "'Kablammo', cursive" },
    { name: "Trade Winds", transform: (t) => t, fontFamily: "'Trade Winds', cursive" },
    { name: "Underdog", transform: (t) => t, fontFamily: "'Underdog', cursive" },
    { name: "Sancreek", transform: (t) => t, fontFamily: "'Sancreek', cursive" },
    { name: "Manufacturing Consent", transform: (t) => t, fontFamily: "'Manufacturing Consent', cursive" },
    // Unicode — ancient/occult transforms
    { name: "Elder Futhark Runes", transform: (t) => apply(t, FUTHARK) },
    { name: "\u2671 Ritual Cross \u2671", transform: (t) => decorate(withCombining(t, ["\u0316", "\u0317", "\u0323"]), "\u2671") },
    { name: "\u2625 Ankh Seal \u2625", transform: (t) => decorate(withCombining(t, ["\u0302", "\u0329", "\u032A"]), "\u2625") },
    { name: "\u26E7 Pentagram \u26E7", transform: (t) => decorateWords(t, "\u26E7") },
  ],
};

// ── 10: Bat Wing  (base: none — combining + icons) ──────────────────────

const batWing: FontCategory = {
  name: "Bat Wing",
  styles: [
    // Google Fonts
    { name: "Barriecito", transform: (t) => t, fontFamily: "'Barriecito', cursive" },
    { name: "Barrio", transform: (t) => t, fontFamily: "'Barrio', cursive" },
    { name: "Asimovian", transform: (t) => t, fontFamily: "'Asimovian', cursive" },
    // Unicode — vampire/bat themed transforms
    { name: "Bat Screech Zalgo", transform: (t) => zalgo(t, 3, 3, 53) },
    { name: "Fang Strike", transform: (t) => withCombining(t, ["\u030D", "\u0338"]) },
    { name: "\uD83E\uDD87 Bat Wing \uD83E\uDD87", transform: (t) => decorate(withCombining(t, ["\u030D", "\u0323"]), "\uD83E\uDD87") },
    { name: "\uD83D\uDC3A Wolf Howl \uD83D\uDC3A", transform: (t) => decorateWords(withCombining(t, ["\u0303"]), "\uD83D\uDC3A") },
    { name: "\u26B0 Coffin Rest \u26B0", transform: (t) => decorate(withCombining(t, ["\u0336", "\u0333"]), "\u26B0") },
    { name: "\u2694 Blade Cross \u2694", transform: (t) => decorate(withCombining(t, ["\u0338", "\u032A"]), "\u2694") },
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
