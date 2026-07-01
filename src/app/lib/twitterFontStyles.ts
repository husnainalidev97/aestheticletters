// ---------------------------------------------------------------------------
// Twitter Font Generator — 10 Category Cards for X (Twitter) use cases
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

// ── Helpers ────────────────────────────────────────────────────────────────

/** Build a letter map from contiguous Unicode offsets with optional overrides. */
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

/** Build a digit map (0-9) from a contiguous Unicode block. */
function buildDigitMap(startCodePoint: number): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 10; i++) {
    map[String(i)] = String.fromCodePoint(startCodePoint + i);
  }
  return map;
}

/** Replace each character using a map; unmapped characters pass through. */
function applyMap(text: string, charMap: Record<string, string>): string {
  return [...text].map((c) => charMap[c] ?? c).join("");
}

/** Apply multiple maps (merged) to text. */
function applyMaps(text: string, ...maps: Record<string, string>[]): string {
  const merged: Record<string, string> = {};
  for (const m of maps) Object.assign(merged, m);
  return applyMap(text, merged);
}

/** Wrap each non-space character with prefix and suffix. */
function wrapChars(text: string, prefix: string, suffix: string): string {
  return [...text].map((c) => (c === " " ? c : prefix + c + suffix)).join("");
}

/** Append a separator symbol after each non-space character. */
function withSeparator(text: string, sep: string): string {
  return [...text].map((c) => (c === " " ? c : c + sep)).join("");
}

/** Append combining mark(s) to each non-space character. */
function withCombining(text: string, marks: string[]): string {
  const suffix = marks.join("");
  return [...text].map((c) => (c === " " ? c : c + suffix)).join("");
}

/** Wrap entire text with a prefix and suffix string. */
function withFrame(text: string, prefix: string, suffix: string): string {
  return prefix + text + suffix;
}

// ── Character Maps ────────────────────────────────────────────────────────

// Bold Serif: U+1D400–U+1D419 (upper), U+1D41A–U+1D433 (lower)
const boldSerifMap = buildMap(0x1d400, 0x1d41a);
const boldSerifDigitMap = buildDigitMap(0x1d7ce);

// Bold Sans: U+1D5D4–U+1D5ED (upper), U+1D5EE–U+1D607 (lower)
const boldSansMap = buildMap(0x1d5d4, 0x1d5ee);
const boldSansDigitMap = buildDigitMap(0x1d7ec);

// Bold Italic: U+1D468–U+1D481 (upper), U+1D482–U+1D49B (lower)
const boldItalicMap = buildMap(0x1d468, 0x1d482);

// Italic Serif: U+1D434–U+1D44D (upper), U+1D44E–U+1D467 (lower)
const italicSerifMap = buildMap(0x1d434, 0x1d44e, { h: "\u210E" });

// Bold Script: U+1D4D0–U+1D4E9 (upper), U+1D4EA–U+1D503 (lower)
const boldScriptMap = buildMap(0x1d4d0, 0x1d4ea);

// Bold Fraktur: U+1D56C–U+1D585 (upper), U+1D586–U+1D59F (lower)
const boldFrakturMap = buildMap(0x1d56c, 0x1d586);

// Monospace: U+1D670–U+1D689 (upper), U+1D68A–U+1D6A3 (lower)
const monospaceMap = buildMap(0x1d670, 0x1d68a);
const monospaceDigitMap = buildDigitMap(0x1d7f6);

// Small Caps
const smallCapsMap: Record<string, string> = {
  A: "\u1D00", B: "\u0299", C: "\u1D04", D: "\u1D05", E: "\u1D07", F: "\uA730",
  G: "\u0262", H: "\u029C", I: "\u026A", J: "\u1D0A", K: "\u1D0B", L: "\u029F",
  M: "\u1D0D", N: "\u0274", O: "\u1D0F", P: "\u1D18", Q: "Q", R: "\u0280",
  S: "\uA731", T: "\u1D1B", U: "\u1D1C", V: "\u1D20", W: "\u1D21", X: "x",
  Y: "\u028F", Z: "\u1D22",
  a: "\u1D00", b: "\u0299", c: "\u1D04", d: "\u1D05", e: "\u1D07", f: "\uA730",
  g: "\u0262", h: "\u029C", i: "\u026A", j: "\u1D0A", k: "\u1D0B", l: "\u029F",
  m: "\u1D0D", n: "\u0274", o: "\u1D0F", p: "\u1D18", q: "q", r: "\u0280",
  s: "\uA731", t: "\u1D1B", u: "\u1D1C", v: "\u1D20", w: "\u1D21", x: "x",
  y: "\u028F", z: "\u1D22",
};

// Negative Circled: U+1F150–U+1F169 (uppercase only)
const negCircledMap: Record<string, string> = {};
for (let i = 0; i < 26; i++) {
  negCircledMap[String.fromCharCode(65 + i)] = String.fromCodePoint(0x1f150 + i);
  negCircledMap[String.fromCharCode(97 + i)] = String.fromCodePoint(0x1f150 + i);
}
const negCircledDigitMap: Record<string, string> = {
  "0": "\u24EA",
  "1": "\u2776",
  "2": "\u2777",
  "3": "\u2778",
  "4": "\u2779",
  "5": "\u277A",
  "6": "\u277B",
  "7": "\u277C",
  "8": "\u277D",
  "9": "\u277E",
};

// ── 10 Category Cards ─────────────────────────────────────────────────────

// Card 1: Feed Stopper — Bold Sans-Serif (research #1: best readability in feeds)
const feedStopper: FontCategory = {
  name: "Feed Stopper",
  styles: [
    { name: "Feed Stopper", transform: (t) => applyMaps(t, boldSansMap, boldSansDigitMap) },
    { name: "Feed Stopper Boxed", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "[", "]") },
    { name: "Feed Stopper Bullet", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2022") },
    { name: "Feed Stopper Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2727") },
    { name: "Feed Stopper Arrow", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2192") },
    { name: "Feed Stopper Angle", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "\u00AB", "\u00BB") },
    { name: "Feed Stopper Lenticular", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "\u3010", "\u3011") },
    { name: "Feed Stopper Lightning", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u26A1") },
    { name: "Feed Stopper Pipe", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "|", "|") },
  ],
};

// Card 2: Bio Caps — Small Caps for the 160-char bio field
const bioCaps: FontCategory = {
  name: "Bio Caps",
  styles: [
    { name: "Bio Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Bio Caps Dotted", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u0307"]) },
    { name: "Bio Caps Underline", transform: (t) => withCombining(applyMap(t, smallCapsMap), ["\u0332"]) },
    { name: "Bio Caps Sparkle", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2727") },
    { name: "Bio Caps Angle", transform: (t) => wrapChars(applyMap(t, smallCapsMap), "\u00AB", "\u00BB") },
    { name: "Bio Caps Star", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u2729 ", " \u2729") },
    { name: "Bio Caps Bullet", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2022") },
    { name: "Bio Caps Lenticular", transform: (t) => wrapChars(applyMap(t, smallCapsMap), "\u3010", "\u3011") },
    { name: "Bio Caps Flower", transform: (t) => withFrame(applyMap(t, smallCapsMap), "\u273F ", " \u273F") },
  ],
};

// Card 3: Chirp Break — Bold Serif to contrast with X's sans-serif Chirp typeface
const chirpBreak: FontCategory = {
  name: "Chirp Break",
  styles: [
    { name: "Chirp Break", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Chirp Break Boxed", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "[", "]") },
    { name: "Chirp Break Bullet", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2022") },
    { name: "Chirp Break Sparkle", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2727") },
    { name: "Chirp Break Arrow", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2192") },
    { name: "Chirp Break Angle", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u00AB", "\u00BB") },
    { name: "Chirp Break Lenticular", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u3010", "\u3011") },
    { name: "Chirp Break Lightning", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u26A1") },
    { name: "Chirp Break Pipe", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "|", "|") },
  ],
};

// Card 4: Quote Tweet Serif — Italic Serif for quote tweet commentary
const quoteTweetSerif: FontCategory = {
  name: "Quote Tweet Serif",
  styles: [
    { name: "Quote Tweet Serif", transform: (t) => applyMap(t, italicSerifMap) },
    { name: "Quote Tweet Serif Boxed", transform: (t) => wrapChars(applyMap(t, italicSerifMap), "[", "]") },
    { name: "Quote Tweet Serif Bullet", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u2022") },
    { name: "Quote Tweet Serif Sparkle", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u2727") },
    { name: "Quote Tweet Serif Arrow", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u2192") },
    { name: "Quote Tweet Serif Angle", transform: (t) => wrapChars(applyMap(t, italicSerifMap), "\u00AB", "\u00BB") },
    { name: "Quote Tweet Serif Wave", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u223C") },
    { name: "Quote Tweet Serif Lenticular", transform: (t) => wrapChars(applyMap(t, italicSerifMap), "\u3010", "\u3011") },
    { name: "Quote Tweet Serif Pipe", transform: (t) => wrapChars(applyMap(t, italicSerifMap), "|", "|") },
  ],
};

// Card 5: Thread Marker — Negative Circled for thread numbering
const threadMarker: FontCategory = {
  name: "Thread Marker",
  styles: [
    { name: "Thread Marker", transform: (t) => applyMaps(t, negCircledMap, negCircledDigitMap) },
    { name: "Thread Marker Boxed", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "[", "]") },
    { name: "Thread Marker Bullet", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2022") },
    { name: "Thread Marker Lightning", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u26A1") },
    { name: "Thread Marker Arrow", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2192") },
    { name: "Thread Marker Angle", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "\u00AB", "\u00BB") },
    { name: "Thread Marker Sparkle", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2727") },
    { name: "Thread Marker Lenticular", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "\u3010", "\u3011") },
    { name: "Thread Marker Pipe", transform: (t) => wrapChars(applyMaps(t, negCircledMap, negCircledDigitMap), "|", "|") },
  ],
};

// Card 6: Display Name Edge — Bold Fraktur for the 50-char display name
const displayNameEdge: FontCategory = {
  name: "Display Name Edge",
  styles: [
    { name: "Display Name Edge", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Display Name Edge Dagger", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u2020", "\u2020") },
    { name: "Display Name Edge Boxed", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "[", "]") },
    { name: "Display Name Edge Bullet", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2022") },
    { name: "Display Name Edge Arrow", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2192") },
    { name: "Display Name Edge Sparkle", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2727") },
    { name: "Display Name Edge Angle", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u00AB", "\u00BB") },
    { name: "Display Name Edge Lenticular", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "\u3010", "\u3011") },
    { name: "Display Name Edge Pipe", transform: (t) => wrapChars(applyMap(t, boldFrakturMap), "|", "|") },
  ],
};

// Card 7: Hot Take Bold — Bold Italic for opinion-driven tweets
const hotTakeBold: FontCategory = {
  name: "Hot Take Bold",
  styles: [
    { name: "Hot Take Bold", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Hot Take Bold Boxed", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "[", "]") },
    { name: "Hot Take Bold Bullet", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2022") },
    { name: "Hot Take Bold Sparkle", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2727") },
    { name: "Hot Take Bold Arrow", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2192") },
    { name: "Hot Take Bold Angle", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "\u00AB", "\u00BB") },
    { name: "Hot Take Bold Lenticular", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "\u3010", "\u3011") },
    { name: "Hot Take Bold Lightning", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u26A1") },
    { name: "Hot Take Bold Pipe", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "|", "|") },
  ],
};

// Card 8: Pinned Post Script — Bold Script (cursive) for pinned tweets
const pinnedPostScript: FontCategory = {
  name: "Pinned Post Script",
  styles: [
    { name: "Pinned Post Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Pinned Post Script Boxed", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "[", "]") },
    { name: "Pinned Post Script Bullet", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2022") },
    { name: "Pinned Post Script Wave", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u223C") },
    { name: "Pinned Post Script Arrow", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2192") },
    { name: "Pinned Post Script Sparkle", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2727") },
    { name: "Pinned Post Script Angle", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u00AB", "\u00BB") },
    { name: "Pinned Post Script Lenticular", transform: (t) => wrapChars(applyMap(t, boldScriptMap), "\u3010", "\u3011") },
    { name: "Pinned Post Script Lightning", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u26A1") },
  ],
};

// Card 9: Retweet Highlight — Strikethrough & underline for commentary
const retweetHighlight: FontCategory = {
  name: "Retweet Highlight",
  styles: [
    { name: "Retweet Strikethrough", transform: (t) => withCombining(t, ["\u0336"]) },
    { name: "Retweet Underline", transform: (t) => withCombining(t, ["\u0332"]) },
    { name: "Retweet Double Underline", transform: (t) => withCombining(t, ["\u0333"]) },
    { name: "Retweet Overline", transform: (t) => withCombining(t, ["\u0305"]) },
    { name: "Retweet Slash", transform: (t) => withCombining(t, ["\u0337"]) },
    { name: "Retweet Crosshatch", transform: (t) => withCombining(t, ["\u0336", "\u0305"]) },
    { name: "Retweet Bold Underline", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0332"]) },
    { name: "Retweet Bold Strike", transform: (t) => withCombining(applyMaps(t, boldSerifMap, boldSerifDigitMap), ["\u0336"]) },
    { name: "Retweet Italic Underline", transform: (t) => withCombining(applyMap(t, italicSerifMap), ["\u0332"]) },
  ],
};

// Card 10: Reply Guy Mono — Monospace for casual replies
const replyGuyMono: FontCategory = {
  name: "Reply Guy Mono",
  styles: [
    { name: "Reply Guy Mono", transform: (t) => applyMaps(t, monospaceMap, monospaceDigitMap) },
    { name: "Reply Guy Mono Terminal", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), ">_ ", "") },
    { name: "Reply Guy Mono Bracket", transform: (t) => wrapChars(applyMaps(t, monospaceMap, monospaceDigitMap), "[", "]") },
    { name: "Reply Guy Mono Corner", transform: (t) => wrapChars(applyMaps(t, monospaceMap, monospaceDigitMap), "\u300C", "\u300D") },
    { name: "Reply Guy Mono Pipe", transform: (t) => wrapChars(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2502", "\u2502") },
    { name: "Reply Guy Mono Block", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2593\u2592\u2591 ", " \u2591\u2592\u2593") },
    { name: "Reply Guy Mono Arrow", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2570\u2508\u27A4 ", "") },
    { name: "Reply Guy Mono Sparkle", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2726") },
    { name: "Reply Guy Mono Dot", transform: (t) => withSeparator(applyMaps(t, monospaceMap, monospaceDigitMap), "\u30FB") },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────

export const twitterFontCategories: FontCategory[] = [
  feedStopper,
  bioCaps,
  chirpBreak,
  quoteTweetSerif,
  threadMarker,
  displayNameEdge,
  hotTakeBold,
  pinnedPostScript,
  retweetHighlight,
  replyGuyMono,
];
