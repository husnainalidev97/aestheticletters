// ---------------------------------------------------------------------------
// Unicode Cursive / Handwritten / Script Transforms for the Cursive Fonts page
// All styles are pure Unicode — no Google Fonts dependency
// ---------------------------------------------------------------------------

export interface UnicodeStyle {
  name: string;
  transform: (text: string) => string;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

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
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

function withWordFlourish(text: string, start: string, end: string): string {
  const words = text.split(" ");
  return words.map((w) => (w.length === 0 ? w : `${start}${w}${end}`)).join(" ");
}

function withFrame(text: string, left: string, right: string): string {
  return `${left} ${text} ${right}`;
}

// ── Character Maps ──────────────────────────────────────────────────────────

const scriptMap = buildMap(0x1d49c, 0x1d4b6, {
  B: "\u212C", E: "\u2130", F: "\u2131",
  H: "\u210B", I: "\u2110", L: "\u2112",
  M: "\u2133", R: "\u211B",
  e: "\u212F", g: "\u210A", o: "\u2134",
});

const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);
const italicMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });
const boldItalicMap = buildMap(0x1d468, 0x1d482);
const boldMap = buildMap(0x1d400, 0x1d41a);
const sansSerifItalicMap = buildMap(0x1d608, 0x1d622);
const sansSerifBoldMap = buildMap(0x1d5d4, 0x1d5ee);
const sansSerifBoldItalicMap = buildMap(0x1d63c, 0x1d656);
const doubleStruckMap = buildMap(0x1d538, 0x1d552, {
  C: "\u2102", H: "\u210D", N: "\u2115",
  P: "\u2119", Q: "\u211A", R: "\u211D", Z: "\u2124",
});

// ── Decorative Symbols ──────────────────────────────────────────────────────

const FLORAL_HEART = "\u2766";
const ROTATED_FLORAL = "\u2767";
const FOUR_STAR = "\u2726";
const FLOWER_PUNCT = "\u2055";
const HEART = "\u2661";
const STAR = "\u22C6";
const DIAMOND = "\u25C7";
const SPARKLE = "\u2727";
const BULLET_FLOWER = "\u2740";
const JP_LEFT = "\u300E";
const JP_RIGHT = "\u300F";

// ── Transforms per category ─────────────────────────────────────────────────

export const cursiveCategories = [
  "Handwriting Cursive",
  "Playful Script",
  "Elegant Cursive",
  "Brush & Marker",
  "School & Guides",
  "Chunky Fun",
  "Retro Vintage",
  "Cultural Brush",
] as const;

export const cursiveUnicodeStyles: Record<string, UnicodeStyle[]> = {

  "Handwriting Cursive": [
    {
      name: "Cursive Script",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), "\u2053", "\u2053"),
    },
    {
      name: "Connected Baseline",
      transform: (t) => withWordFlourish(applyMap(t, boldScriptMap), "\u00B7", "\u00B7"),
    },
    {
      name: "Smooth Overline",
      transform: (t) => withCombining(t, ["\u0304"]),
    },
    {
      name: "Flourished Handwriting",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), FLORAL_HEART, ROTATED_FLORAL),
    },
    {
      name: "Soft Cursive",
      transform: (t) => withFrame(applyMap(t, scriptMap), "\u00AB", "\u00BB"),
    },
    {
      name: "Dotted Writing",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), "\u2022", "\u2022"),
    },
  ],

  "Playful Script": [
    {
      name: "Bouncy Italic",
      transform: (t) => applyMap(t, sansSerifItalicMap),
    },
    {
      name: "Sparkle Script",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifItalicMap), FOUR_STAR, FOUR_STAR),
    },
    {
      name: "Star Bounce",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), STAR, STAR),
    },
    {
      name: "Bubbly Cursive",
      transform: (t) => withFrame(applyMap(t, boldScriptMap), JP_LEFT, JP_RIGHT),
    },
    {
      name: "Playful Waves",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifItalicMap), "\u2248", "\u2248"),
    },
    {
      name: "Candy Script",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), BULLET_FLOWER, BULLET_FLOWER),
    },
  ],

  "Elegant Cursive": [
    {
      name: "Calligraphy",
      transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2014", "\u2014"),
    },
    {
      name: "Royal Script",
      transform: (t) => withFrame(applyMap(t, boldScriptMap), "\uA9C1", "\uA9C2"),
    },
    {
      name: "Flourished Calligraphy",
      transform: (t) => withWordFlourish(applyMap(t, boldScriptMap), FLORAL_HEART, ROTATED_FLORAL),
    },
    {
      name: "Diamond Elegance",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), DIAMOND, DIAMOND),
    },
    {
      name: "Regal Cursive",
      transform: (t) => withFrame(applyMap(t, boldItalicMap), SPARKLE, SPARKLE),
    },
    {
      name: "Gilded Script",
      transform: (t) => withWordFlourish(applyMap(t, boldScriptMap), FOUR_STAR, FOUR_STAR),
    },
  ],

  "Brush & Marker": [
    {
      name: "Brush Stroke",
      transform: (t) => withWordFlourish(applyMap(t, boldItalicMap), "\u00BB", "\u00AB"),
    },
    {
      name: "Heavy Brush",
      transform: (t) => applyMap(t, sansSerifBoldItalicMap),
    },
    {
      name: "Brush Underline",
      transform: (t) => withFrame(applyMap(t, sansSerifBoldItalicMap), "\u25B8", "\u25C2"),
    },
    {
      name: "Marker Bold",
      transform: (t) => withWordFlourish(applyMap(t, boldMap), FOUR_STAR, FOUR_STAR),
    },
    {
      name: "Paint Splash",
      transform: (t) => withWordFlourish(applyMap(t, boldItalicMap), BULLET_FLOWER, BULLET_FLOWER),
    },
    {
      name: "Ink Flow",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifBoldItalicMap), "~", "~"),
    },
  ],

  "School & Guides": [
    {
      name: "Dotted Guide",
      transform: (t) => withCombining(t, ["\u0307", "\u0332"]),
    },
    {
      name: "Double Baseline",
      transform: (t) => withCombining(t, ["\u0333"]),
    },
    {
      name: "Practice Cursive",
      transform: (t) => withWordFlourish(applyMap(t, italicMap), "\u2013", "\u2013"),
    },
    {
      name: "Worksheet Style",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), "\u25CB", "\u25CB"),
    },
    {
      name: "Guideline Writing",
      transform: (t) => withWordFlourish(applyMap(t, boldScriptMap), "\u2502", "\u2502"),
    },
    {
      name: "Ruled Script",
      transform: (t) => withWordFlourish(applyMap(t, italicMap), "\u2502", "\u2502"),
    },
  ],

  "Chunky Fun": [
    {
      name: "Bold Block",
      transform: (t) => applyMap(t, sansSerifBoldMap),
    },
    {
      name: "Chunky Lined",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifBoldMap), "\u2500", "\u2500"),
    },
    {
      name: "Fun Double-Struck",
      transform: (t) => withWordFlourish(applyMap(t, doubleStruckMap), FLOWER_PUNCT, FLOWER_PUNCT),
    },
    {
      name: "Block Star",
      transform: (t) => withWordFlourish(applyMap(t, boldMap), STAR, STAR),
    },
    {
      name: "Heavy Accent",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifBoldMap), "\u2605", "\u2605"),
    },
    {
      name: "Chunky Hearts",
      transform: (t) => withWordFlourish(applyMap(t, doubleStruckMap), HEART, HEART),
    },
  ],

  "Retro Vintage": [
    {
      name: "Classic Italic",
      transform: (t) => applyMap(t, italicMap),
    },
    {
      name: "Vintage Flourish",
      transform: (t) => withWordFlourish(applyMap(t, italicMap), ROTATED_FLORAL, ROTATED_FLORAL),
    },
    {
      name: "Old Script",
      transform: (t) => withWordFlourish(applyMap(t, scriptMap), ROTATED_FLORAL, ROTATED_FLORAL),
    },
    {
      name: "Signature Line",
      transform: (t) => withWordFlourish(applyMap(t, italicMap), "~", "~"),
    },
    {
      name: "Retro Stars",
      transform: (t) => withWordFlourish(applyMap(t, italicMap), SPARKLE, SPARKLE),
    },
    {
      name: "Antique Cursive",
      transform: (t) => withFrame(applyMap(t, scriptMap), "\u2605", "\u2605"),
    },
  ],

  "Cultural Brush": [
    {
      name: "Flowing Brush",
      transform: (t) => withWordFlourish(applyMap(t, sansSerifBoldItalicMap), "\u2022", "\u2022"),
    },
    {
      name: "Horn Script",
      transform: (t) => withCombining(t, ["\u031B"]),
    },
    {
      name: "Eastern Script",
      transform: (t) => withFrame(applyMap(t, scriptMap), JP_LEFT, JP_RIGHT),
    },
    {
      name: "Tibetan Flow",
      transform: (t) => withFrame(applyMap(t, scriptMap), "\u0F3C", "\u0F3D"),
    },
    {
      name: "Ink Calligraphy",
      transform: (t) => withWordFlourish(applyMap(t, boldItalicMap), "\u2606", "\u2606"),
    },
    {
      name: "Global Pen",
      transform: (t) => withFrame(applyMap(t, sansSerifItalicMap), "\u25CF", "\u25CF"),
    },
  ],
};
