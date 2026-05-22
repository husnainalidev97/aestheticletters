// ---------------------------------------------------------------------------
// Halloween Font Style Definitions — EXCLUSIVE to /halloween-fonts page
// 10 categories with Google Fonts (shown first) + Halloween-themed Unicode styles
// Plain alphabets replaced with combined transforms (base alphabet + spooky marks)
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

/** Apply a character map then layer combining marks on every letter. */
function applyWithMarks(
  text: string,
  map: Record<string, string>,
  marks: string[],
): string {
  return withCombining(apply(text, map), marks);
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

/** Apply a character map then add Zalgo marks. */
function applyWithZalgo(
  text: string,
  map: Record<string, string>,
  above: number,
  below: number,
  seed: number,
): string {
  return zalgo(apply(text, map), above, below, seed);
}

// ── Character Maps ─────────────────────────────────────────────────────────

const FRAKTUR = buildMap(0x1d504, 0x1d51e, {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
});

const BOLD_FRAKTUR = buildMap(0x1d56c, 0x1d586);

const BOLD_SERIF = buildMap(0x1d400, 0x1d41a);

const MATH_ITALIC = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

const MATH_SCRIPT = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B",
  I: "\u2110", L: "\u2112", M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

const BOLD_SCRIPT = buildMap(0x1d4d0, 0x1d4ea);

// ── Specialized Transform Functions ────────────────────────────────────────

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
    // Unicode styles — Fraktur base + spooky combining marks
    { name: "Cursed Fraktur", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0334"]) },
    { name: "Tombstone Carving", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0329", "\u032A"]) },
    { name: "Graveyard Zalgo", transform: (t) => zalgo(t, 3, 3, 17) },
    { name: "Death Mark Gothic", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u033D", "\u0323"]) },
    { name: "Decayed Blackletter", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0336"]) },
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
    // Unicode styles — blood-drip combining stacks
    { name: "Blood Drip Light", transform: (t) => withCombining(t, ["\u0322", "\u0323"]) },
    { name: "Blood Drip Medium", transform: (t) => withCombining(t, ["\u0324", "\u0325", "\u0326"]) },
    { name: "Blood Drip Heavy", transform: (t) => withCombining(t, ["\u0329", "\u032A", "\u032B"]) },
    { name: "Gore Overflow", transform: (t) => zalgo(t, 0, 7, 5) },
    { name: "Zalgo Full Chaos", transform: (t) => zalgo(t, 5, 5, 11) },
    // Blood-themed combined transforms
    { name: "Blood Fraktur", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0323", "\u0325", "\u0329"]) },
    { name: "Gore Slash", transform: (t) => withCombining(t, ["\u0338", "\u0329", "\u0323"]) },
    { name: "Crimson Flood", transform: (t) => zalgo(t, 1, 9, 21) },
    { name: "Blood Script", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0323", "\u0326", "\u0325"]) },
    { name: "Wound Strike", transform: (t) => withCombining(t, ["\u0336", "\u0333", "\u0323"]) },
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
    // Unicode styles — Zalgo corruption levels
    { name: "Zalgo Light", transform: (t) => zalgo(t, 2, 0, 0) },
    { name: "Zalgo Medium", transform: (t) => zalgo(t, 3, 2, 3) },
    { name: "Zalgo Heavy", transform: (t) => zalgo(t, 7, 7, 7) },
    { name: "Zalgo God", transform: (t) => zalgo(t, 11, 11, 13) },
    { name: "X Mark Cursed", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Circle Void", transform: (t) => withCombining(t, ["\u20DD"]) },
    // Cursed combined transforms
    { name: "Cursed Gothic", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0334", "\u033D"]) },
    { name: "Demon Script", transform: (t) => applyWithZalgo(t, BOLD_SCRIPT, 2, 2, 19) },
    { name: "Possessed Serif", transform: (t) => applyWithMarks(t, BOLD_SERIF, ["\u0336", "\u0329"]) },
    { name: "Hex Gothic", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0338", "\u0323"]) },
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
    // Unicode styles — festive-spooky transforms
    { name: "Superscript Tiny", transform: (t) => superscript(t) },
    { name: "Dot Above Sparkle", transform: (t) => withCombining(t, ["\u0307"]) },
    { name: "Jack O' Lantern", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u030A", "\u0307"]) },
    { name: "Pumpkin Zalgo", transform: (t) => zalgo(t, 1, 1, 23) },
    { name: "Candy Script", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0307"]) },
    { name: "Trick or Treat", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0306"]) },
    { name: "Haunted Candy", transform: (t) => applyWithMarks(t, MATH_SCRIPT, ["\u0303", "\u030A"]) },
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
    // Unicode styles — ghostly ethereal transforms
    { name: "Acute Accent Ghost", transform: (t) => withCombining(t, ["\u0301"]) },
    { name: "Overline Ghost", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Superscript Wisp", transform: (t) => superscript(t) },
    { name: "Ghost Fraktur", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0303", "\u030A"]) },
    { name: "Phantom Script", transform: (t) => applyWithMarks(t, MATH_SCRIPT, ["\u0305", "\u0303"]) },
    { name: "Spirit Zalgo", transform: (t) => zalgo(t, 2, 1, 29) },
    { name: "Whisper Fade", transform: (t) => applyWithMarks(t, MATH_ITALIC, ["\u0334", "\u0304"]) },
    { name: "Haunted Echo", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u030A", "\u0307"]) },
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
    // Unicode styles — magical spell transforms
    { name: "Witch Script", transform: (t) => apply(t, MATH_SCRIPT) },
    { name: "Bold Witch Script", transform: (t) => apply(t, BOLD_SCRIPT) },
    { name: "Star Occult", transform: (t) => withCombining(t, ["\u20F0"]) },
    { name: "Enchanted Fraktur", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0302", "\u20F0"]) },
    { name: "Potion Brew", transform: (t) => applyWithZalgo(t, BOLD_SCRIPT, 2, 2, 31) },
    { name: "Spellbound", transform: (t) => applyWithMarks(t, MATH_SCRIPT, ["\u0334", "\u0307"]) },
    { name: "Hex Rune", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u033D", "\u032A"]) },
    { name: "Dark Magic", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u030A", "\u0329"]) },
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
    // Unicode styles — skull/bone themed transforms
    { name: "X Bone Overlay", transform: (t) => withCombining(t, ["\u033D"]) },
    { name: "Vertical Strike", transform: (t) => withCombining(t, ["\u0329"]) },
    { name: "Double Below Decay", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Skull Fraktur", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u033D", "\u0329"]) },
    { name: "Bone Carving", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u032A", "\u0333"]) },
    { name: "Zombie Serif", transform: (t) => applyWithMarks(t, BOLD_SERIF, ["\u0334", "\u0336"]) },
    { name: "Death Zalgo", transform: (t) => zalgo(t, 4, 4, 37) },
    { name: "Skull Decay", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0334", "\u0323"]) },
  ],
};

// ── 8: Moonlight Cursive ──────────────────────────────────────────────────

const moonlightCursive: FontCategory = {
  name: "Moonlight Cursive",
  styles: [
    // Google Fonts
    { name: "Meddon", transform: (t) => t, fontFamily: "'Meddon', cursive" },
    { name: "Purple Purse", transform: (t) => t, fontFamily: "'Purple Purse', cursive" },
    // Unicode styles — dark cursive/script transforms
    { name: "Moonlight Script", transform: (t) => apply(t, MATH_SCRIPT) },
    { name: "Bold Moon Script", transform: (t) => apply(t, BOLD_SCRIPT) },
    { name: "Vampire Script", transform: (t) => applyWithMarks(t, MATH_SCRIPT, ["\u030D", "\u0323"]) },
    { name: "Dark Cursive", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0334"]) },
    { name: "Midnight Zalgo", transform: (t) => zalgo(t, 2, 2, 41) },
    { name: "Moonlit Fraktur", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0305", "\u030A"]) },
    { name: "Blood Moon Script", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0323", "\u0325", "\u0326"]) },
    { name: "Haunted Cursive", transform: (t) => applyWithMarks(t, MATH_SCRIPT, ["\u033D", "\u0303"]) },
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
    // Unicode styles — ancient/occult transforms
    { name: "Elder Futhark Runes", transform: (t) => apply(t, FUTHARK) },
    { name: "Blood Ritual Fraktur", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0323", "\u0329", "\u0325"]) },
    { name: "Forbidden Text", transform: (t) => applyWithZalgo(t, FRAKTUR, 3, 3, 43) },
    { name: "Occult Inscription", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u033D", "\u0334"]) },
    { name: "Dark Rune", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u0329", "\u032A", "\u0323"]) },
    { name: "Ritual Zalgo", transform: (t) => zalgo(t, 5, 5, 47) },
    { name: "Sacrificial Script", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0338", "\u0333"]) },
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
    // Unicode styles — vampire/bat themed transforms
    { name: "Vampire Fraktur", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u030D", "\u0323"]) },
    { name: "Bat Screech Zalgo", transform: (t) => zalgo(t, 3, 3, 53) },
    { name: "Nosferatu Script", transform: (t) => applyWithMarks(t, BOLD_SCRIPT, ["\u0334", "\u030D"]) },
    { name: "Coffin Text", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0336", "\u0333"]) },
    { name: "Fang Strike", transform: (t) => applyWithMarks(t, FRAKTUR, ["\u033D", "\u0338"]) },
    { name: "Blood Fang Gothic", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u0323", "\u0325", "\u0329"]) },
    { name: "Crypt Carving", transform: (t) => applyWithMarks(t, BOLD_FRAKTUR, ["\u032A", "\u033D"]) },
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
