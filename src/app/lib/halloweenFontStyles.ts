// ---------------------------------------------------------------------------
// Halloween Font Style Definitions — EXCLUSIVE to /halloween-fonts page
// 10 categories: 3 Google Font + 7 Unicode-based  (90+ styles total)
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

/** Mathematical Bold Fraktur — U+1D56C range (gothic blackletter) */
function boldFrakturMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D56C + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D586 + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Fraktur — U+1D504 range */
function frakturMap(text: string): string {
  const map: Record<string, string> = {
    A: "\uD835\uDD04", B: "\uD835\uDD05", C: "\u212D", D: "\uD835\uDD07",
    E: "\uD835\uDD08", F: "\uD835\uDD09", G: "\uD835\uDD0A", H: "\u210C",
    I: "\u2111", J: "\uD835\uDD0D", K: "\uD835\uDD0E", L: "\uD835\uDD0F",
    M: "\uD835\uDD10", N: "\uD835\uDD11", O: "\uD835\uDD12", P: "\uD835\uDD13",
    Q: "\uD835\uDD14", R: "\u211C", S: "\uD835\uDD16", T: "\uD835\uDD17",
    U: "\uD835\uDD18", V: "\uD835\uDD19", W: "\uD835\uDD1A", X: "\uD835\uDD1B",
    Y: "\uD835\uDD1C", Z: "\u2128",
    a: "\uD835\uDD1E", b: "\uD835\uDD1F", c: "\uD835\uDD20", d: "\uD835\uDD21",
    e: "\uD835\uDD22", f: "\uD835\uDD23", g: "\uD835\uDD24", h: "\uD835\uDD25",
    i: "\uD835\uDD26", j: "\uD835\uDD27", k: "\uD835\uDD28", l: "\uD835\uDD29",
    m: "\uD835\uDD2A", n: "\uD835\uDD2B", o: "\uD835\uDD2C", p: "\uD835\uDD2D",
    q: "\uD835\uDD2E", r: "\uD835\uDD2F", s: "\uD835\uDD30", t: "\uD835\uDD31",
    u: "\uD835\uDD32", v: "\uD835\uDD33", w: "\uD835\uDD34", x: "\uD835\uDD35",
    y: "\uD835\uDD36", z: "\uD835\uDD37",
  };
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Mathematical Bold Script — U+1D4D0 range */
function boldScriptMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1D4D0 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1D4EA + i);
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Small Caps mapping */
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

/** Double-Struck mapping */
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

/** Fullwidth mapping */
function fullwidthMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(0xFF21 + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(0xFF41 + i);
  }
  map[" "] = "\u3000";
  return [...text].map((c) => map[c] ?? c).join("");
}

/** Negative squared capitals */
function negSquaredMap(text: string): string {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    const cp = String.fromCodePoint(0x1F170 + i);
    map[String.fromCharCode(65 + i)] = cp;
    map[String.fromCharCode(97 + i)] = cp;
  }
  return [...text].map((c) => map[c] ?? c).join("");
}

// Combining marks for Zalgo / glitch effects
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

function zalgo(text: string, above: number, below: number, seed = 0): string {
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

// ── 1: Graveyard Gothic — Unicode transforms (Fraktur / blackletter) ──────

const graveyardGothic: FontCategory = {
  name: "Graveyard Gothic",
  styles: [
    { name: "Crypt Keeper", transform: (t) => boldFrakturMap(t) },
    { name: "Tombstone Script", transform: (t) => frakturMap(t) },
    { name: "Gothic Gate", transform: (t) => withFrame(boldFrakturMap(t), "\u2620", "\u2620") },
    { name: "Dark Cathedral", transform: (t) => withFrame(frakturMap(t), "\u269B", "\u269B") },
    { name: "Haunted Chapel", transform: (t) => intersperse(boldFrakturMap(t), "\u2022") },
    { name: "Midnight Raven", transform: (t) => withFrame(boldFrakturMap(t), "\u2666", "\u2666") },
    { name: "Cemetery Stone", transform: (t) => withFrame(frakturMap(t), "\u2694", "\u2694") },
    { name: "Iron Cross", transform: (t) => intersperse(boldFrakturMap(t), "\u2720") },
    { name: "Obsidian Script", transform: (t) => withFrame(boldFrakturMap(t), "\u25C6", "\u25C6") },
    { name: "Raven Wing", transform: (t) => withFrame(frakturMap(t), "\u2767", "\u2767") },
  ],
};

// ── 2: Skull Gothic — Unicode transforms (bold angular) ───────────────────

const skullGothic: FontCategory = {
  name: "Skull Gothic",
  styles: [
    { name: "Skull Frame", transform: (t) => withFrame(negSquaredMap(t), "\u2620", "\u2620") },
    { name: "Bone Letters", transform: (t) => withFrame(fullwidthMap(t), "\u2620", "\u2620") },
    { name: "Death Mark", transform: (t) => intersperse(negSquaredMap(t), "\u2620") },
    { name: "Dark Squared", transform: (t) => negSquaredMap(t) },
    { name: "Skull Dots", transform: (t) => intersperse(fullwidthMap(t), "\u2620") },
    { name: "Crossed Bones", transform: (t) => withFrame(negSquaredMap(t), "\u2694\u2620", "\u2620\u2694") },
    { name: "Phantom Block", transform: (t) => withFrame(fullwidthMap(t), "\u25AE", "\u25AE") },
    { name: "Reaper Mark", transform: (t) => withFrame(negSquaredMap(t), "\u2638", "\u2638") },
    { name: "Bone Cage", transform: (t) => withFrame(fullwidthMap(t), "\u2588\u2620", "\u2620\u2588") },
    { name: "Grim Serif", transform: (t) => intersperse(fullwidthMap(t), "\u25AA") },
  ],
};

// ── 3: Dark Ritual — Unicode transforms (cinematic / occult) ──────────────

const darkRitual: FontCategory = {
  name: "Dark Ritual",
  styles: [
    { name: "Occult Script", transform: (t) => withFrame(boldScriptMap(t), "\u2625", "\u2625") },
    { name: "Pentagram Wrap", transform: (t) => withFrame(boldScriptMap(t), "\u26E4", "\u26E4") },
    { name: "Dark Moon", transform: (t) => withFrame(boldFrakturMap(t), "\u263D", "\u263E") },
    { name: "Ritual Fire", transform: (t) => withCombining(boldFrakturMap(t), ["\u0307", "\u0308"]) },
    { name: "Shadow Curse", transform: (t) => withFrame(frakturMap(t), "\u2666\u2605", "\u2605\u2666") },
    { name: "Eldritch Glow", transform: (t) => intersperse(boldScriptMap(t), "\u2605") },
    { name: "Necronomicon", transform: (t) => withFrame(boldFrakturMap(t), "\u2720\u2720", "\u2720\u2720") },
    { name: "Witch Circle", transform: (t) => withFrame(boldScriptMap(t), "\u25CB\u2605", "\u2605\u25CB") },
    { name: "Voodoo Script", transform: (t) => withCombining(boldScriptMap(t), ["\u0300", "\u0316"]) },
    { name: "Dark Omen", transform: (t) => withFrame(frakturMap(t), "\u2623", "\u2623") },
  ],
};

// ── 4: Blood Drip — Google Fonts (Nosifer + horror typefaces) ─────────────

const bloodDrip: FontCategory = {
  name: "Blood Drip",
  styles: [
    { name: "Nosifer", transform: (t) => t, fontFamily: "'Nosifer', display" },
    { name: "Butcherman", transform: (t) => t, fontFamily: "'Butcherman', display" },
    { name: "Creepster", transform: (t) => t, fontFamily: "'Creepster', display" },
    { name: "Eater", transform: (t) => t, fontFamily: "'Eater', display" },
    { name: "Jolly Lodger", transform: (t) => t, fontFamily: "'Jolly Lodger', display" },
    { name: "Bungee Shade", transform: (t) => t, fontFamily: "'Bungee Shade', display" },
    { name: "Lacquer", transform: (t) => t, fontFamily: "'Lacquer', display" },
    { name: "Fruktur", transform: (t) => t, fontFamily: "'Fruktur', display" },
    { name: "Metal Mania", transform: (t) => t, fontFamily: "'Metal Mania', display" },
    { name: "Ewert", transform: (t) => t, fontFamily: "'Ewert', display" },
  ],
};

// ── 5: Bat Wing — Unicode transforms (thin, sharp lettering) ──────────────

const batWing: FontCategory = {
  name: "Bat Wing",
  styles: [
    { name: "Bat Frame", transform: (t) => withFrame(frakturMap(t), "\uD83E\uDD87", "\uD83E\uDD87") },
    { name: "Night Flight", transform: (t) => intersperse(frakturMap(t), "\u2734") },
    { name: "Vampire Script", transform: (t) => withFrame(boldScriptMap(t), "\uD83E\uDD87", "\uD83E\uDD87") },
    { name: "Dark Wing", transform: (t) => withFrame(boldFrakturMap(t), "\u2744", "\u2744") },
    { name: "Twilight Fang", transform: (t) => withCombining(frakturMap(t), ["\u0302"]) },
    { name: "Shadow Bat", transform: (t) => withFrame(frakturMap(t), "\u25C0\u25C0", "\u25B6\u25B6") },
    { name: "Nocturnal", transform: (t) => intersperse(boldFrakturMap(t), "\u263D") },
    { name: "Bat Signal", transform: (t) => withFrame(boldFrakturMap(t), "\u2736\uD83E\uDD87", "\uD83E\uDD87\u2736") },
    { name: "Fang Script", transform: (t) => withCombining(boldScriptMap(t), ["\u030C"]) },
    { name: "Eclipse Wing", transform: (t) => withFrame(frakturMap(t), "\u25CF\u263D", "\u263E\u25CF") },
  ],
};

// ── 6: Cursed Script — Unicode transforms (elegant cursive, unsettling) ───

const cursedScript: FontCategory = {
  name: "Cursed Script",
  styles: [
    { name: "Hex Cursive", transform: (t) => withCombining(boldScriptMap(t), ["\u0336"]) },
    { name: "Witch Ink", transform: (t) => withFrame(boldScriptMap(t), "\u2625", "\u2625") },
    { name: "Phantom Quill", transform: (t) => withCombining(boldScriptMap(t), ["\u0333"]) },
    { name: "Spirit Writing", transform: (t) => withFrame(boldScriptMap(t), "\uD83D\uDC7B", "\uD83D\uDC7B") },
    { name: "Dark Whisper", transform: (t) => intersperse(boldScriptMap(t), "\u2027") },
    { name: "Enchanted Ink", transform: (t) => withFrame(boldScriptMap(t), "\u2728\u2625", "\u2625\u2728") },
    { name: "Cursed Flourish", transform: (t) => withCombining(boldScriptMap(t), ["\u0303"]) },
    { name: "Shadow Quill", transform: (t) => withFrame(boldScriptMap(t), "\u2591", "\u2591") },
    { name: "Wicked Script", transform: (t) => intersperse(boldScriptMap(t), "\u2620") },
    { name: "Haunted Pen", transform: (t) => withFrame(boldScriptMap(t), "\u2623\u2620", "\u2620\u2623") },
  ],
};

// ── 7: Witch Spell — Google Fonts (fantasy/mystical typefaces) ────────────

const witchSpell: FontCategory = {
  name: "Witch Spell",
  styles: [
    { name: "UnifrakturMaguntia", transform: (t) => t, fontFamily: "'UnifrakturMaguntia', display" },
    { name: "MedievalSharp", transform: (t) => t, fontFamily: "'MedievalSharp', display" },
    { name: "Henny Penny", transform: (t) => t, fontFamily: "'Henny Penny', display" },
    { name: "Flavors", transform: (t) => t, fontFamily: "'Flavors', display" },
    { name: "Griffy", transform: (t) => t, fontFamily: "'Griffy', display" },
    { name: "Eater", transform: (t) => t, fontFamily: "'Eater', display" },
    { name: "Emblema One", transform: (t) => t, fontFamily: "'Emblema One', display" },
    { name: "Spirax", transform: (t) => t, fontFamily: "'Spirax', display" },
    { name: "Warnes", transform: (t) => t, fontFamily: "'Warnes', display" },
    { name: "Pirata One", transform: (t) => t, fontFamily: "'Pirata One', display" },
  ],
};

// ── 8: Pumpkin Hollow — Unicode transforms (festive, playful) ─────────────

const pumpkinHollow: FontCategory = {
  name: "Pumpkin Hollow",
  styles: [
    { name: "Jack-o-Lantern", transform: (t) => withFrame(smallCapsMap(t), "\uD83C\uDF83", "\uD83C\uDF83") },
    { name: "Pumpkin Glow", transform: (t) => intersperse(smallCapsMap(t), "\uD83C\uDF83") },
    { name: "Harvest Script", transform: (t) => withFrame(boldScriptMap(t), "\uD83C\uDF42", "\uD83C\uDF42") },
    { name: "Candy Corn", transform: (t) => withFrame(smallCapsMap(t), "\uD83C\uDF6C", "\uD83C\uDF6C") },
    { name: "Trick or Treat", transform: (t) => withFrame(doubleStruckMap(t), "\uD83C\uDF83\uD83D\uDC7B", "\uD83D\uDC7B\uD83C\uDF83") },
    { name: "Autumn Leaf", transform: (t) => intersperse(boldScriptMap(t), "\uD83C\uDF41") },
    { name: "Festive Fright", transform: (t) => withFrame(smallCapsMap(t), "\uD83D\uDC7B\uD83C\uDF83", "\uD83C\uDF83\uD83D\uDC7B") },
    { name: "Spooky Sweet", transform: (t) => withFrame(doubleStruckMap(t), "\uD83C\uDF6C\u2728", "\u2728\uD83C\uDF6C") },
    { name: "Pumpkin Patch", transform: (t) => withFrame(smallCapsMap(t), "\uD83C\uDF42\uD83C\uDF83\uD83C\uDF42", "\uD83C\uDF42\uD83C\uDF83\uD83C\uDF42") },
    { name: "October Moon", transform: (t) => withFrame(boldScriptMap(t), "\uD83C\uDF19\uD83C\uDF83", "\uD83C\uDF83\uD83C\uDF19") },
  ],
};

// ── 9: Ghost Whisper — Unicode transforms (soft, faded, floating) ─────────

const ghostWhisper: FontCategory = {
  name: "Ghost Whisper",
  styles: [
    { name: "Spirit Float", transform: (t) => withFrame(doubleStruckMap(t), "\uD83D\uDC7B", "\uD83D\uDC7B") },
    { name: "Ethereal Mist", transform: (t) => intersperse(doubleStruckMap(t), "\u2027") },
    { name: "Phantom Glow", transform: (t) => withFrame(doubleStruckMap(t), "\u2591\u2592", "\u2592\u2591") },
    { name: "Ghost Chain", transform: (t) => intersperse(doubleStruckMap(t), "\uD83D\uDC7B") },
    { name: "Whisper Light", transform: (t) => withFrame(boldScriptMap(t), "\u2727", "\u2727") },
    { name: "Pale Spirit", transform: (t) => withCombining(doubleStruckMap(t), ["\u0307"]) },
    { name: "Foggy Script", transform: (t) => withFrame(doubleStruckMap(t), "\u2588\u2591", "\u2591\u2588") },
    { name: "Spectral", transform: (t) => intersperse(boldScriptMap(t), "\u00B7") },
    { name: "Ghastly Wrap", transform: (t) => withFrame(doubleStruckMap(t), "\u2623\uD83D\uDC7B", "\uD83D\uDC7B\u2623") },
    { name: "Soul Whisper", transform: (t) => withFrame(boldScriptMap(t), "\u2604", "\u2604") },
  ],
};

// ── 10: Glitch Decay — Unicode transforms (corrupted digital horror) ──────

const glitchDecay: FontCategory = {
  name: "Glitch Decay",
  styles: [
    { name: "Light Glitch", transform: (t) => zalgo(t, 1, 1, 0) },
    { name: "Creeping Static", transform: (t) => zalgo(t, 2, 1, 3) },
    { name: "Corrupted Feed", transform: (t) => zalgo(t, 2, 2, 7) },
    { name: "Digital Decay", transform: (t) => zalgo(t, 3, 2, 13) },
    { name: "Matrix Break", transform: (t) => zalgo(t, 3, 3, 17) },
    { name: "Void Static", transform: (t) => zalgo(t, 1, 2, 23) },
    { name: "Signal Lost", transform: (t) => zalgo(t, 2, 3, 29) },
    { name: "Horror Glitch", transform: (t) => zalgo(t, 4, 3, 31) },
    { name: "Haunted Screen", transform: (t) => zalgo(t, 3, 1, 37) },
    { name: "Corrupted Matrix", transform: (t) => withFrame(zalgo(t, 2, 2, 41), "\u2588", "\u2588") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const halloweenFontCategories: FontCategory[] = [
  graveyardGothic,
  skullGothic,
  darkRitual,
  bloodDrip,
  batWing,
  cursedScript,
  witchSpell,
  pumpkinHollow,
  ghostWhisper,
  glitchDecay,
];
