// ---------------------------------------------------------------------------
// Modular Font Engine — Central library for generating Unicode text styles
// Compose: Base Alphabet → Texture Mark → Spacing → Decorator Pair
// Designed for reuse across 18+ pages by swapping theme/decorator lists.
// ---------------------------------------------------------------------------

// ── Types ──────────────────────────────────────────────────────────────────

/** A contiguous Unicode alphabet range (e.g. Mathematical Bold) */
export interface BaseAlphabet {
  id: string;
  name: string;
  upper: number;
  lower: number;
  exceptions?: Record<string, string>;
}

/** A character-map alphabet (e.g. Small Caps, Superscript) */
export interface MapAlphabet {
  id: string;
  name: string;
  charMap: Record<string, string>;
}

/** Combining diacritical marks applied above/below each letter */
export interface TextureMark {
  id: string;
  name: string;
  marks: string[]; // combining code-points joined onto each letter
}

/** Prefix/suffix symbol pair with theme tags for page filtering */
export interface Decorator {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  themes: string[]; // e.g. ["aesthetic","soft","heart","gothic","gaming"]
}

/** Spacing mode inserted between graphemes */
export type SpacingMode = "none" | "hair" | "thin";

/** A single fully-described font variation */
export interface FontVariation {
  label: string;
  baseId: string;
  textureId?: string | null;
  marks?: string[] | null;       // direct combining marks (alternative to textureId)
  decoratorId?: string | null;
  decoratorPair?: { prefix: string; suffix: string } | null; // direct pair (alternative to decoratorId)
  spacing?: SpacingMode;
}

/** Result of generating text for a variation */
export interface GeneratedStyle {
  label: string;
  text: string;
}

// ── Base Alphabets Registry ────────────────────────────────────────────────

const SCRIPT_EXC: Record<string, string> = {
  B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211B", e: "\u212F", g: "\u210A", o: "\u2134",
};
const FRAKTUR_EXC: Record<string, string> = {
  C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
};
const DBL_STRUCK_EXC: Record<string, string> = {
  C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119", Q: "\u211A",
  R: "\u211D", Z: "\u2124",
};
const ITALIC_EXC: Record<string, string> = { h: "\u210E" };

export const BASE_ALPHABETS: BaseAlphabet[] = [
  { id: "bold", name: "Bold", upper: 0x1D400, lower: 0x1D41A },
  { id: "italic", name: "Italic", upper: 0x1D434, lower: 0x1D44E, exceptions: ITALIC_EXC },
  { id: "bold-italic", name: "Bold Italic", upper: 0x1D468, lower: 0x1D482 },
  { id: "script", name: "Script", upper: 0x1D49C, lower: 0x1D4B6, exceptions: SCRIPT_EXC },
  { id: "bold-script", name: "Bold Script", upper: 0x1D4D0, lower: 0x1D4EA },
  { id: "fraktur", name: "Fraktur", upper: 0x1D504, lower: 0x1D51E, exceptions: FRAKTUR_EXC },
  { id: "bold-fraktur", name: "Bold Fraktur", upper: 0x1D56C, lower: 0x1D586 },
  { id: "double-struck", name: "Double-Struck", upper: 0x1D538, lower: 0x1D552, exceptions: DBL_STRUCK_EXC },
  { id: "sans", name: "Sans-Serif", upper: 0x1D5A0, lower: 0x1D5BA },
  { id: "sans-bold", name: "Sans Bold", upper: 0x1D5D4, lower: 0x1D5EE },
  { id: "sans-italic", name: "Sans Italic", upper: 0x1D608, lower: 0x1D622 },
  { id: "sans-bold-italic", name: "Sans Bold Italic", upper: 0x1D63C, lower: 0x1D656 },
  { id: "monospace", name: "Monospace", upper: 0x1D670, lower: 0x1D68A },
  { id: "squared", name: "Squared", upper: 0x1F130, lower: 0x1F130 },
];

const SC_MAP: Record<string, string> = {
  A: "\u1D00", B: "\u0299", C: "\u1D04", D: "\u1D05", E: "\u1D07",
  F: "\u0493", G: "\u0262", H: "\u029C", I: "\u026A", J: "\u1D0A",
  K: "\u1D0B", L: "\u029F", M: "\u1D0D", N: "\u0274", O: "\u1D0F",
  P: "\u1D18", Q: "\u01EB", R: "\u0280", S: "\u0455", T: "\u1D1B",
  U: "\u1D1C", V: "\u1D20", W: "\u1D21", X: "x", Y: "\u028F", Z: "\u1D22",
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07",
  f: "\u0493", g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A",
  k: "\u1D0B", l: "\u029F", m: "\u1D0D", n: "\u0274", o: "\u1D0F",
  p: "\u1D18", q: "\u01EB", r: "\u0280", s: "\u0455", t: "\u1D1B",
  u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x", y: "\u028F", z: "\u1D22",
};

const SUP_MAP: Record<string, string> = {
  A: "\u1D2C", B: "\u1D2E", C: "\u1D9C", D: "\u1D30", E: "\u1D31",
  G: "\u1D33", H: "\u1D34", I: "\u1D35", J: "\u1D36", K: "\u1D37",
  L: "\u1D38", M: "\u1D39", N: "\u1D3A", O: "\u1D3C", P: "\u1D3E",
  R: "\u1D3F", T: "\u1D40", U: "\u1D41", V: "\u2C7D", W: "\u1D42",
  a: "\u1D43", b: "\u1D47", c: "\u1D9C", d: "\u1D48", e: "\u1D49",
  f: "\u1DA0", g: "\u1D4D", h: "\u02B0", i: "\u2071", j: "\u02B2",
  k: "\u1D4F", l: "\u02E1", m: "\u1D50", n: "\u207F", o: "\u1D52",
  p: "\u1D56", r: "\u02B3", s: "\u02E2", t: "\u1D57", u: "\u1D58",
  v: "\u1D5B", w: "\u02B7", x: "\u02E3", y: "\u02B8", z: "\u1DBB",
};

export const MAP_ALPHABETS: MapAlphabet[] = [
  { id: "small-caps", name: "Small Caps", charMap: SC_MAP },
  { id: "superscript", name: "Superscript", charMap: SUP_MAP },
];

// ── Texture Marks Registry ─────────────────────────────────────────────────

export const TEXTURE_MARKS: TextureMark[] = [
  { id: "dot-above", name: "Dot Above", marks: ["\u0307"] },
  { id: "ring-above", name: "Ring Above", marks: ["\u030A"] },
  { id: "macron", name: "Macron", marks: ["\u0304"] },
  { id: "breve", name: "Breve", marks: ["\u0306"] },
  { id: "tilde", name: "Tilde", marks: ["\u0303"] },
  { id: "circumflex", name: "Circumflex", marks: ["\u0302"] },
  { id: "acute", name: "Acute", marks: ["\u0301"] },
  { id: "grave", name: "Grave", marks: ["\u0300"] },
  { id: "diaeresis", name: "Diaeresis", marks: ["\u0308"] },
  { id: "caron", name: "Caron", marks: ["\u030C"] },
  { id: "dot-below", name: "Dot Below", marks: ["\u0323"] },
  { id: "ring-below", name: "Ring Below", marks: ["\u0325"] },
  { id: "cedilla", name: "Cedilla", marks: ["\u0327"] },
  { id: "ogonek", name: "Ogonek", marks: ["\u0328"] },
  { id: "macron-below", name: "Macron Below", marks: ["\u0331"] },
  { id: "line-below", name: "Line Below", marks: ["\u0332"] },
  { id: "strikethrough", name: "Strikethrough", marks: ["\u0336"] },
  { id: "short-stroke", name: "Short Stroke", marks: ["\u0335"] },
  // Multi-mark textures (layered)
  { id: "acute-dot-below", name: "Acute + Dot Below", marks: ["\u0301", "\u0323"] },
  { id: "circumflex-cedilla", name: "Circumflex + Cedilla", marks: ["\u0302", "\u0327"] },
  { id: "diaeresis-ring-below", name: "Diaeresis + Ring Below", marks: ["\u0308", "\u0325"] },
  { id: "tilde-dot-below", name: "Tilde + Dot Below", marks: ["\u0303", "\u0323"] },
  { id: "ring-above-macron-below", name: "Ring + Macron Below", marks: ["\u030A", "\u0331"] },
  { id: "circumflex-dot-below-macron-below", name: "Triple Crown", marks: ["\u0302", "\u0323", "\u0331"] },
];

// ── Decorator Pairs Registry ───────────────────────────────────────────────

export const DECORATORS: Decorator[] = [
  // Aesthetic / Soft
  { id: "sparkle", name: "Sparkle", prefix: "✧", suffix: "✧", themes: ["aesthetic", "soft"] },
  { id: "star-4", name: "Four Star", prefix: "✦", suffix: "✦", themes: ["aesthetic"] },
  { id: "diamond", name: "Diamond", prefix: "◇", suffix: "◇", themes: ["aesthetic", "soft"] },
  { id: "lozenge", name: "Lozenge", prefix: "◈", suffix: "◈", themes: ["aesthetic"] },
  { id: "white-star", name: "White Star", prefix: "☆", suffix: "☆", themes: ["aesthetic", "soft"] },
  { id: "snowflake", name: "Snowflake", prefix: "❄", suffix: "❄", themes: ["aesthetic", "soft"] },
  { id: "cloud", name: "Cloud", prefix: "☁", suffix: "☁", themes: ["aesthetic", "soft"] },
  // Heart
  { id: "heart-outline", name: "Heart Outline", prefix: "♡", suffix: "♡", themes: ["heart", "soft", "girls"] },
  { id: "heart-solid", name: "Heart Solid", prefix: "♥", suffix: "♥", themes: ["heart", "girls"] },
  { id: "heart-excl", name: "Heart Excl", prefix: "❣", suffix: "❣", themes: ["heart", "girls"] },
  { id: "heart-arrow", name: "Heart Arrow", prefix: "❥", suffix: "❥", themes: ["heart", "girls"] },
  { id: "double-heart", name: "Double Heart", prefix: "♡♥", suffix: "♥♡", themes: ["heart", "girls"] },
  // Floral / Girls
  { id: "blossom", name: "Blossom", prefix: "🌸", suffix: "🌸", themes: ["girls", "soft", "aesthetic"] },
  { id: "florette", name: "Florette", prefix: "❀", suffix: "❀", themes: ["girls", "aesthetic"] },
  { id: "flower", name: "Flower", prefix: "✿", suffix: "✿", themes: ["girls", "soft"] },
  { id: "daisy", name: "Daisy", prefix: "❁", suffix: "❁", themes: ["girls"] },
  { id: "floral-heart", name: "Floral Heart", prefix: "❦", suffix: "❦", themes: ["girls", "heart"] },
  { id: "dingbat-flower", name: "Dingbat Flower", prefix: "⸙", suffix: "⸙", themes: ["girls", "aesthetic"] },
  // Ancient / Mystical
  { id: "hieroglyph", name: "Hieroglyph", prefix: "𓆩", suffix: "𓆪", themes: ["ancient", "gothic", "aesthetic"] },
  { id: "ankh", name: "Ankh Frame", prefix: "☥", suffix: "☥", themes: ["ancient", "gothic"] },
  // East-Asian
  { id: "corner-bracket", name: "Corner Bracket", prefix: "『", suffix: "』", themes: ["aesthetic", "minimal", "east-asian"] },
  { id: "white-corner", name: "White Corner", prefix: "「", suffix: "」", themes: ["minimal", "east-asian"] },
  { id: "lenticular", name: "Lenticular", prefix: "【", suffix: "】", themes: ["bold", "east-asian"] },
  { id: "angle-bracket", name: "Angle Bracket", prefix: "〈", suffix: "〉", themes: ["minimal", "east-asian"] },
  { id: "double-angle", name: "Double Angle", prefix: "《", suffix: "》", themes: ["bold", "east-asian"] },
  { id: "tortoise", name: "Tortoise Shell", prefix: "〔", suffix: "〕", themes: ["east-asian"] },
  { id: "wave-dash", name: "Wave Dash", prefix: "〰", suffix: "〰", themes: ["aesthetic", "east-asian"] },
  // Box Drawing
  { id: "light-box", name: "Light Box", prefix: "┌──", suffix: "──┐", themes: ["minimal", "framed"] },
  { id: "heavy-box", name: "Heavy Box", prefix: "┏━━", suffix: "━━┓", themes: ["bold", "framed", "gothic"] },
  { id: "double-box", name: "Double Box", prefix: "╔══", suffix: "══╗", themes: ["bold", "framed"] },
  { id: "round-box", name: "Round Box", prefix: "╭──", suffix: "──╮", themes: ["soft", "minimal", "framed"] },
  { id: "pipe", name: "Pipe", prefix: "│", suffix: "│", themes: ["minimal", "framed"] },
  { id: "double-pipe", name: "Double Pipe", prefix: "║", suffix: "║", themes: ["bold", "framed"] },
  { id: "heavy-pipe", name: "Heavy Pipe", prefix: "┃", suffix: "┃", themes: ["bold", "framed"] },
  { id: "cross-frame", name: "Cross Frame", prefix: "┼─", suffix: "─┼", themes: ["framed"] },
  // Dingbats / Stars
  { id: "star-outline", name: "Star Outline", prefix: "✩", suffix: "✩", themes: ["aesthetic", "girls"] },
  { id: "sparkle-emoji", name: "Sparkle Emoji", prefix: "✨", suffix: "✨", themes: ["aesthetic", "girls", "soft"] },
  { id: "sunflower", name: "Sunflower", prefix: "✻", suffix: "✻", themes: ["girls", "aesthetic"] },
  { id: "pencil", name: "Pencil", prefix: "✎", suffix: "✎", themes: ["minimal", "business"] },
  // Bold / Gaming / Tattoo
  { id: "skull", name: "Skull", prefix: "☠", suffix: "☠", themes: ["gothic", "gaming"] },
  { id: "crossed-swords", name: "Crossed Swords", prefix: "⚔", suffix: "⚔", themes: ["gaming", "gothic"] },
  { id: "fire", name: "Fire", prefix: "🔥", suffix: "🔥", themes: ["gaming", "bold"] },
  { id: "lightning", name: "Lightning", prefix: "⚡", suffix: "⚡", themes: ["gaming", "bold"] },
  { id: "crown", name: "Crown", prefix: "👑", suffix: "👑", themes: ["gaming", "bold"] },
  // Coquette / Soft
  { id: "coquette", name: "Coquette Ribbon", prefix: "\u09E8\u09CE", suffix: "\u09E8\u09CE", themes: ["girls", "soft", "aesthetic"] },
  // None (no decoration)
  { id: "none", name: "None", prefix: "", suffix: "", themes: ["all"] },
];

// ── Core Transform Functions ───────────────────────────────────────────────

/** Convert text using a contiguous Unicode range base alphabet */
function applyBase(text: string, base: BaseAlphabet): string {
  const exc = base.exceptions || {};
  return [...text]
    .map((ch) => {
      if (exc[ch]) return exc[ch];
      const c = ch.charCodeAt(0);
      if (c >= 65 && c <= 90) return String.fromCodePoint(base.upper + (c - 65));
      if (c >= 97 && c <= 122) return String.fromCodePoint(base.lower + (c - 97));
      return ch;
    })
    .join("");
}

/** Convert text using a character map alphabet */
function applyMapBase(text: string, mapAlpha: MapAlphabet): string {
  return [...text].map((c) => mapAlpha.charMap[c] ?? c).join("");
}

/** Check if a character is any kind of whitespace (including fullwidth ideographic space) */
function isSpace(ch: string): boolean {
  return ch === " " || ch === "\u3000";
}

/** Apply combining diacritical marks to each non-space character */
function applyTexture(text: string, texture: TextureMark): string {
  const suffix = texture.marks.join("");
  return [...text].map((ch) => (isSpace(ch) ? ch : ch + suffix)).join("");
}

/** Check if a code point is a combining character (Unicode Mn/Mc categories) */
function isCombining(cp: number): boolean {
  return (
    (cp >= 0x0300 && cp <= 0x036F) ||  // Combining Diacritical Marks
    (cp >= 0x1AB0 && cp <= 0x1AFF) ||  // Combining Diacritical Marks Extended
    (cp >= 0x1DC0 && cp <= 0x1DFF) ||  // Combining Diacritical Marks Supplement
    (cp >= 0x20D0 && cp <= 0x20FF) ||  // Combining Diacritical Marks for Symbols
    (cp >= 0xFE20 && cp <= 0xFE2F)     // Combining Half Marks
  );
}

/** Insert spacing between grapheme clusters (preserves combining marks) */
function applySpacing(text: string, mode: SpacingMode): string {
  if (mode === "none") return text;
  const spacer = mode === "hair" ? "\u200A" : "\u2009";
  const codePoints = [...text];
  // Group code points into grapheme clusters: base char + any following combiners
  const clusters: string[] = [];
  for (const cp of codePoints) {
    const code = cp.codePointAt(0) ?? 0;
    if (isCombining(code) && clusters.length > 0) {
      clusters[clusters.length - 1] += cp;
    } else {
      clusters.push(cp);
    }
  }
  return clusters
    .map((cl, i) =>
      !isSpace(cl) && i < clusters.length - 1 && !isSpace(clusters[i + 1])
        ? cl + spacer
        : cl,
    )
    .join("");
}

/** Wrap text in a decorator pair */
function applyDecorator(text: string, decorator: Decorator): string {
  if (!decorator.prefix && !decorator.suffix) return text;
  return `${decorator.prefix} ${text} ${decorator.suffix}`;
}

/** Convert text to Fullwidth Latin */
function applyFullwidth(text: string): string {
  return [...text]
    .map((ch) => {
      const c = ch.charCodeAt(0);
      if (c >= 33 && c <= 126) return String.fromCodePoint(c + 0xFEE0);
      if (c === 32) return "\u3000";
      return ch;
    })
    .join("");
}

// ── Lookup helpers ─────────────────────────────────────────────────────────

const baseMap = new Map(BASE_ALPHABETS.map((b) => [b.id, b]));
const mapBaseMap = new Map(MAP_ALPHABETS.map((m) => [m.id, m]));
const textureMap = new Map(TEXTURE_MARKS.map((t) => [t.id, t]));
const decoratorMap = new Map(DECORATORS.map((d) => [d.id, d]));

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Generate styled text from a single FontVariation descriptor.
 * Pipeline: Base → Texture → Spacing → Decorator
 */
export function renderVariation(text: string, v: FontVariation): string {
  // Step 1: Apply base alphabet
  let result: string;
  if (v.baseId === "plain") {
    result = text;
  } else if (v.baseId === "fullwidth") {
    result = applyFullwidth(text);
  } else if (mapBaseMap.has(v.baseId)) {
    result = applyMapBase(text, mapBaseMap.get(v.baseId)!);
  } else {
    const base = baseMap.get(v.baseId);
    result = base ? applyBase(text, base) : text;
  }

  // Step 2: Apply texture marks (registry lookup OR direct marks)
  if (v.marks && v.marks.length > 0) {
    const suffix = v.marks.join("");
    result = [...result].map((ch) => (isSpace(ch) ? ch : ch + suffix)).join("");
  } else if (v.textureId) {
    const texture = textureMap.get(v.textureId);
    if (texture) result = applyTexture(result, texture);
  }

  // Step 3: Apply spacing
  result = applySpacing(result, v.spacing ?? "none");

  // Step 4: Wrap in decorator (registry lookup OR direct pair)
  if (v.decoratorPair) {
    result = `${v.decoratorPair.prefix} ${result} ${v.decoratorPair.suffix}`;
  } else if (v.decoratorId) {
    const decorator = decoratorMap.get(v.decoratorId);
    if (decorator) result = applyDecorator(result, decorator);
  }

  return result;
}

/**
 * Get all decorators matching any of the given theme tags.
 * Pass "all" in themes to include the bare (no-decoration) option.
 */
export function getDecoratorsForThemes(themes: string[]): Decorator[] {
  return DECORATORS.filter(
    (d) => d.themes.some((t) => themes.includes(t)) || d.themes.includes("all"),
  );
}

/**
 * Build a curated set of FontVariation descriptors for a given page theme.
 * Returns at least `minCount` unique variations by combining bases,
 * textures, and theme-matched decorators.
 */
export function buildVariationsForTheme(
  themes: string[],
  minCount: number = 30,
): FontVariation[] {
  const decorators = getDecoratorsForThemes(themes).filter((d) => d.id !== "none");
  const variations: FontVariation[] = [];
  const seen = new Set<string>();

  const spacingModes: SpacingMode[] = ["none", "hair", "thin"];

  // Priority 1: Each base × theme decorator (no texture)
  for (const base of BASE_ALPHABETS) {
    for (const dec of decorators) {
      if (variations.length >= minCount) break;
      const key = `${base.id}|none|${dec.id}|none`;
      if (seen.has(key)) continue;
      seen.add(key);
      variations.push({
        label: `${dec.name} ${base.name}`,
        baseId: base.id,
        textureId: null,
        decoratorId: dec.id,
        spacing: "none",
      });
    }
    if (variations.length >= minCount) break;
  }

  // Priority 2: Base × texture (no decorator)
  if (variations.length < minCount) {
    for (const base of BASE_ALPHABETS) {
      for (const tex of TEXTURE_MARKS.slice(0, 12)) {
        if (variations.length >= minCount) break;
        const key = `${base.id}|${tex.id}|none|none`;
        if (seen.has(key)) continue;
        seen.add(key);
        variations.push({
          label: `${tex.name} ${base.name}`,
          baseId: base.id,
          textureId: tex.id,
          decoratorId: null,
          spacing: "none",
        });
      }
      if (variations.length >= minCount) break;
    }
  }

  // Priority 3: Base × texture × decorator
  if (variations.length < minCount) {
    for (const base of BASE_ALPHABETS) {
      for (const tex of TEXTURE_MARKS.slice(0, 6)) {
        for (const dec of decorators.slice(0, 6)) {
          if (variations.length >= minCount) break;
          const key = `${base.id}|${tex.id}|${dec.id}|none`;
          if (seen.has(key)) continue;
          seen.add(key);
          variations.push({
            label: `${dec.name} ${tex.name} ${base.name}`,
            baseId: base.id,
            textureId: tex.id,
            decoratorId: dec.id,
            spacing: "none",
          });
        }
        if (variations.length >= minCount) break;
      }
      if (variations.length >= minCount) break;
    }
  }

  // Priority 4: Map alphabets × spacing × decorator
  if (variations.length < minCount) {
    for (const mapBase of MAP_ALPHABETS) {
      for (const sp of spacingModes) {
        for (const dec of decorators.slice(0, 4)) {
          if (variations.length >= minCount) break;
          const key = `${mapBase.id}|none|${dec.id}|${sp}`;
          if (seen.has(key)) continue;
          seen.add(key);
          variations.push({
            label: `${dec.name} ${sp !== "none" ? sp + " " : ""}${mapBase.name}`,
            baseId: mapBase.id,
            textureId: null,
            decoratorId: dec.id,
            spacing: sp,
          });
        }
      }
    }
  }

  return variations.slice(0, Math.max(minCount, variations.length));
}

/**
 * Generate styled text for all variations in a set.
 * This is the main entry point for page components.
 */
export function generateStyles(
  text: string,
  variations: FontVariation[],
): GeneratedStyle[] {
  return variations.map((v) => ({
    label: v.label,
    text: renderVariation(text, v),
  }));
}

// ── Pre-built Page Themes ──────────────────────────────────────────────────

/** Theme configuration for a specific page */
export interface PageTheme {
  id: string;
  name: string;
  themes: string[];
  cardName: string;
  cardDescription: string;
}

export const PAGE_THEMES: Record<string, PageTheme> = {
  instagram: {
    id: "instagram",
    name: "Instagram Fonts",
    themes: ["aesthetic", "soft", "heart", "girls", "minimal"],
    cardName: "Instagram Style Fonts",
    cardDescription: "Curated aesthetic styles for Instagram",
  },
  gaming: {
    id: "gaming",
    name: "Gaming Fonts",
    themes: ["gaming", "bold", "gothic"],
    cardName: "Gaming Style Fonts",
    cardDescription: "Bold aggressive styles for gaming profiles",
  },
  tattoo: {
    id: "tattoo",
    name: "Tattoo Fonts",
    themes: ["gothic", "ancient", "bold"],
    cardName: "Tattoo Style Fonts",
    cardDescription: "Dark and dramatic styles for tattoo designs",
  },
  cute: {
    id: "cute",
    name: "Cute Fonts",
    themes: ["girls", "soft", "heart", "aesthetic"],
    cardName: "Cute Style Fonts",
    cardDescription: "Adorable styles with hearts and flowers",
  },
  business: {
    id: "business",
    name: "Business Fonts",
    themes: ["minimal", "business"],
    cardName: "Business Style Fonts",
    cardDescription: "Clean professional styles for brands",
  },
};
