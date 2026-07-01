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
// Each card uses a UNIQUE decorator set — no repeated symbols across cards.

// Card 1: Feed Stopper — Bold Sans (loud, attention-grabbing decorators)
const feedStopper: FontCategory = {
  name: "Feed Stopper",
  styles: [
    { name: "Feed Stopper", transform: (t) => applyMaps(t, boldSansMap, boldSansDigitMap) },
    { name: "Feed Stopper Voltage", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u26A1") },
    { name: "Feed Stopper Play", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u25B6 ", " \u25C0") },
    { name: "Feed Stopper Star", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2605") },
    { name: "Feed Stopper Diamond", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u25C6") },
    { name: "Feed Stopper Lenticular", transform: (t) => wrapChars(applyMaps(t, boldSansMap, boldSansDigitMap), "\u3010", "\u3011") },
    { name: "Feed Stopper Block", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u25A0") },
    { name: "Feed Stopper Ornament", transform: (t) => withSeparator(applyMaps(t, boldSansMap, boldSansDigitMap), "\u2756") },
    { name: "Feed Stopper Bar", transform: (t) => withFrame(applyMaps(t, boldSansMap, boldSansDigitMap), "\u25AC ", " \u25AC") },
  ],
};

// Card 2: Bio Caps — Small Caps (clean, minimal bio-friendly separators)
const bioCaps: FontCategory = {
  name: "Bio Caps",
  styles: [
    { name: "Bio Caps", transform: (t) => applyMap(t, smallCapsMap) },
    { name: "Bio Caps Dot", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u00B7") },
    { name: "Bio Caps Stem", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2502") },
    { name: "Bio Caps Tiny", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u25AA") },
    { name: "Bio Caps Dash", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2014") },
    { name: "Bio Caps Four Star", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2726") },
    { name: "Bio Caps Triangle", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u25B9") },
    { name: "Bio Caps Ring", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u25E6") },
    { name: "Bio Caps Hyphen", transform: (t) => withSeparator(applyMap(t, smallCapsMap), "\u2219") },
  ],
};

// Card 3: Chirp Break — Bold Serif (editorial, strong contrast decorators)
const chirpBreak: FontCategory = {
  name: "Chirp Break",
  styles: [
    { name: "Chirp Break", transform: (t) => applyMaps(t, boldSerifMap, boldSerifDigitMap) },
    { name: "Chirp Break Fisheye", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u25C9") },
    { name: "Chirp Break Up", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u25B2") },
    { name: "Chirp Break Hex Star", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2736") },
    { name: "Chirp Break Angle", transform: (t) => wrapChars(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2329", "\u232A") },
    { name: "Chirp Break Pointer", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u25BA") },
    { name: "Chirp Break Nested", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u25C8") },
    { name: "Chirp Break Heavy Line", transform: (t) => withFrame(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u2501\u2501 ", " \u2501\u2501") },
    { name: "Chirp Break Chevron", transform: (t) => withSeparator(applyMaps(t, boldSerifMap, boldSerifDigitMap), "\u276F") },
  ],
};

// Card 4: Quote Tweet Serif — Italic Serif (literary, quotation-themed decorators)
const quoteTweetSerif: FontCategory = {
  name: "Quote Tweet Serif",
  styles: [
    { name: "Quote Tweet Serif", transform: (t) => applyMap(t, italicSerifMap) },
    { name: "Quote Tweet Serif Quoted", transform: (t) => withFrame(applyMap(t, italicSerifMap), "\u275D ", " \u275E") },
    { name: "Quote Tweet Serif Tilde", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u223C") },
    { name: "Quote Tweet Serif Floral", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u2767") },
    { name: "Quote Tweet Serif Corner", transform: (t) => wrapChars(applyMap(t, italicSerifMap), "\u300C", "\u300D") },
    { name: "Quote Tweet Serif Single", transform: (t) => withFrame(applyMap(t, italicSerifMap), "\u275B ", " \u275C") },
    { name: "Quote Tweet Serif Teardrop", transform: (t) => withSeparator(applyMap(t, italicSerifMap), "\u273D") },
    { name: "Quote Tweet Serif Heart", transform: (t) => withFrame(applyMap(t, italicSerifMap), "\u2661 ", " \u2661") },
    { name: "Quote Tweet Serif Leaf", transform: (t) => withFrame(applyMap(t, italicSerifMap), "\u2619 ", " \u2619") },
  ],
};

// Card 5: Thread Marker — Negative Circled (structural, navigation decorators)
const threadMarker: FontCategory = {
  name: "Thread Marker",
  styles: [
    { name: "Thread Marker", transform: (t) => applyMaps(t, negCircledMap, negCircledDigitMap) },
    { name: "Thread Marker Arrow", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u279C ", "") },
    { name: "Thread Marker Wedge", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u25B8") },
    { name: "Thread Marker Hook", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u21B3 ", "") },
    { name: "Thread Marker Branch", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u251C\u2500 ", "") },
    { name: "Thread Marker Line", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2500\u2500\u2500 ", " \u2500\u2500\u2500") },
    { name: "Thread Marker Pipe", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2503 ", "") },
    { name: "Thread Marker Index", transform: (t) => withFrame(applyMaps(t, negCircledMap, negCircledDigitMap), "\u261B ", "") },
    { name: "Thread Marker Dash", transform: (t) => withSeparator(applyMaps(t, negCircledMap, negCircledDigitMap), "\u2508") },
  ],
};

// Card 6: Display Name Edge — Bold Fraktur (gothic, dark aesthetic decorators)
const displayNameEdge: FontCategory = {
  name: "Display Name Edge",
  styles: [
    { name: "Display Name Edge", transform: (t) => applyMap(t, boldFrakturMap) },
    { name: "Display Name Edge Dagger", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2020") },
    { name: "Display Name Edge Cross", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2629 ", " \u2629") },
    { name: "Display Name Edge Swords", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2694 ", " \u2694") },
    { name: "Display Name Edge Crown", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u265B ", " \u265B") },
    { name: "Display Name Edge Moon", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u263D ", " \u263E") },
    { name: "Display Name Edge Maltese", transform: (t) => withSeparator(applyMap(t, boldFrakturMap), "\u2720") },
    { name: "Display Name Edge Double Dag", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u2021 ", " \u2021") },
    { name: "Display Name Edge Fleur", transform: (t) => withFrame(applyMap(t, boldFrakturMap), "\u269C ", " \u269C") },
  ],
};

// Card 7: Hot Take Bold — Bold Italic (fiery, impactful decorators)
const hotTakeBold: FontCategory = {
  name: "Hot Take Bold",
  styles: [
    { name: "Hot Take Bold", transform: (t) => applyMap(t, boldItalicMap) },
    { name: "Hot Take Bold Burst", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2738") },
    { name: "Hot Take Bold Slant", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2197") },
    { name: "Hot Take Bold Square", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u25FC") },
    { name: "Hot Take Bold Angle", transform: (t) => wrapChars(applyMap(t, boldItalicMap), "\u27EA", "\u27EB") },
    { name: "Hot Take Bold Open Star", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u2606") },
    { name: "Hot Take Bold Asterisk", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u273A") },
    { name: "Hot Take Bold Fifth", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u258D") },
    { name: "Hot Take Bold Ref", transform: (t) => withSeparator(applyMap(t, boldItalicMap), "\u203B") },
  ],
};

// Card 8: Pinned Post Script — Bold Script (warm, floral, personal decorators)
const pinnedPostScript: FontCategory = {
  name: "Pinned Post Script",
  styles: [
    { name: "Pinned Post Script", transform: (t) => applyMap(t, boldScriptMap) },
    { name: "Pinned Post Script Bloom", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2740") },
    { name: "Pinned Post Script Petal", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u273F ", " \u273F") },
    { name: "Pinned Post Script Note", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u266A") },
    { name: "Pinned Post Script Ivy", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2766 ", " \u2766") },
    { name: "Pinned Post Script Kiss", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u2765") },
    { name: "Pinned Post Script Rosette", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u273E") },
    { name: "Pinned Post Script Clover", transform: (t) => withFrame(applyMap(t, boldScriptMap), "\u2618 ", " \u2618") },
    { name: "Pinned Post Script Snowflake", transform: (t) => withSeparator(applyMap(t, boldScriptMap), "\u274B") },
  ],
};

// Card 9: Retweet Highlight — Combining marks (inherently unique per style)
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

// Card 10: Reply Guy Mono — Monospace (terminal-themed, tech decorators)
const replyGuyMono: FontCategory = {
  name: "Reply Guy Mono",
  styles: [
    { name: "Reply Guy Mono", transform: (t) => applyMaps(t, monospaceMap, monospaceDigitMap) },
    { name: "Reply Guy Mono Terminal", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), ">_ ", "") },
    { name: "Reply Guy Mono Bracket", transform: (t) => wrapChars(applyMaps(t, monospaceMap, monospaceDigitMap), "[", "]") },
    { name: "Reply Guy Mono Hash", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "# ", "") },
    { name: "Reply Guy Mono Slash", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "// ", "") },
    { name: "Reply Guy Mono Block", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2593\u2592\u2591 ", " \u2591\u2592\u2593") },
    { name: "Reply Guy Mono Cursor", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "\u2588 ", " \u2588") },
    { name: "Reply Guy Mono Tilde", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "~ ", " ~") },
    { name: "Reply Guy Mono Dollar", transform: (t) => withFrame(applyMaps(t, monospaceMap, monospaceDigitMap), "$ ", "") },
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
