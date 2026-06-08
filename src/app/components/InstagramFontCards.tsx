"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { copyToClipboard } from "../lib/clipboard";
import {
  renderVariation,
  type FontVariation,
  type SpacingMode,
} from "../lib/fontEngine";
import { useFavorites } from "../lib/useFavorites";
import FavoritesSection from "./FavoritesSection";
import ShareButtons from "./ShareButtons";
import CategoryJumpLinks from "./CategoryJumpLinks";

// ── Shorthand builder for engine-driven styles ─────────────────────────────

/** Build a generator function from a FontVariation descriptor */
function v(
  baseId: string,
  textureOrMarks: string | string[] | null = null,
  decoratorOrPair: string | { prefix: string; suffix: string } | null = null,
  spacing: SpacingMode = "none",
): (text: string) => string {
  const variation: FontVariation = {
    label: "",
    baseId,
    textureId: typeof textureOrMarks === "string" ? textureOrMarks : null,
    marks: Array.isArray(textureOrMarks) ? textureOrMarks : null,
    decoratorId: typeof decoratorOrPair === "string" ? decoratorOrPair : null,
    decoratorPair: typeof decoratorOrPair === "object" && decoratorOrPair !== null && "prefix" in decoratorOrPair ? decoratorOrPair : null,
    spacing,
  };
  return (text: string) => renderVariation(text, variation);
}

// ── Card definitions using the modular font engine ─────────────────────────

interface CardDef {
  name: string;
  description: string;
  styles: { label: string; gen: (T: string) => string }[];
}

const cardDefs: CardDef[] = [
  /* ═══ 1. Instagram Bio Fonts ═══ */
  {
    name: "Instagram Bio Fonts",
    description: "Premium editorial spacing for standout profiles",
    styles: [
      { label: "Thin Space Sans", gen: (T) => v("sans", null, null, "thin")(T) },
      { label: "Hair Space Caps", gen: (T) => v("small-caps", null, null, "hair")(T) },
      { label: "Editorial Mono", gen: (T) => v("monospace", null, null, "thin")(T) },
      { label: "Modern Sans Spaced", gen: (T) => v("plain", null, null, "hair")(T) },
      { label: "Ethereal Wing", gen: (T) => v("plain", null, "hieroglyph")(T) },
      { label: "Thin Script", gen: (T) => v("bold-script", null, null, "thin")(T) },
      { label: "Light Box", gen: (T) => v("sans", null, "light-box")(T) },
      { label: "Hair Italic", gen: (T) => v("sans-italic", null, null, "hair")(T) },
      { label: "Corner Brackets", gen: (T) => v("plain", null, "corner-bracket")(T) },
      { label: "Pharaoh Bio", gen: (T) => v("bold-script", null, "hieroglyph")(T) },
    ],
  },
  /* ═══ 2. Instagram Caption Fonts ═══ */
  {
    name: "Instagram Caption Fonts",
    description: "Multi-layered combining for textured impact",
    styles: [
      { label: "Textured Bold", gen: (T) => v("bold", null, { prefix: "◈", suffix: "◈" })(T) },
      { label: "Glacier Italic", gen: (T) => v("italic", null, { prefix: "❄", suffix: "❄" })(T) },
      { label: "Glitter Sans", gen: (T) => v("sans-bold", null, { prefix: "✧", suffix: "✧" })(T) },
      { label: "Ember Serif", gen: (T) => v("bold-italic", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Neon Layer", gen: (T) => v("sans-bold-italic", null, { prefix: "✦", suffix: "✦" })(T) },
      { label: "Vintage Grave", gen: (T) => v("bold-italic", null, { prefix: "❧", suffix: "❧" })(T) },
      { label: "Crown Accent", gen: (T) => v("bold", null, { prefix: "♔", suffix: "♔" })(T) },
      { label: "Angle Caption", gen: (T) => v("bold-italic", null, "double-angle")(T) },
      { label: "Cross Frame", gen: (T) => v("bold-script", null, "cross-frame")(T) },
      { label: "Engrave Italic", gen: (T) => v("bold-italic", null, { prefix: "▪", suffix: "▪" })(T) },
    ],
  },
  /* ═══ 3. Instagram Fonts for Girls ═══ */
  {
    name: "Instagram Fonts for Girls",
    description: "Floral & heart decorations with Dingbat styling",
    styles: [
      { label: "Blossom Script", gen: (T) => v("script", null, "blossom")(T) },
      { label: "Heart Italic", gen: (T) => v("italic", null, "heart-outline")(T) },
      { label: "Petal Sans", gen: (T) => v("sans", null, "florette")(T) },
      { label: "Rose Bold", gen: (T) => v("bold-script", null, "flower")(T) },
      { label: "Coquette Ribbon", gen: (T) => v("plain", null, "coquette")(T) },
      { label: "Tulip Script", gen: (T) => v("script", null, "dingbat-flower")(T) },
      { label: "Lavender Thin", gen: (T) => v("italic", null, "sparkle", "thin")(T) },
      { label: "Petal Italic", gen: (T) => v("italic", null, "flower")(T) },
      { label: "Heart Dingbat", gen: (T) => v("bold-script", null, "heart-excl")(T) },
      { label: "Ribbon Sans", gen: (T) => v("sans", null, "heart-arrow")(T) },
    ],
  },
  /* ═══ 4. Minimal Instagram Fonts ═══ */
  {
    name: "Minimal Instagram Fonts",
    description: "Hair & thin spaces for maximum editorial elegance",
    styles: [
      { label: "Whisper", gen: (T) => v("superscript", null, null, "hair")(T) },
      { label: "Silk Italic", gen: (T) => v("italic", null, null, "thin")(T) },
      { label: "Cloud Script", gen: (T) => v("script", null, null, "hair")(T) },
      { label: "Mist Sans Bold", gen: (T) => v("sans-bold", null, null, "hair")(T) },
      { label: "Zen Caps", gen: (T) => v("small-caps", null, null, "thin")(T) },
      { label: "Double-Struck Luxury", gen: (T) => v("double-struck")(T) },
      { label: "Round Minimal", gen: (T) => v("italic", null, "round-box")(T) },
      { label: "White Corner", gen: (T) => v("sans-italic", null, "white-corner")(T) },
    ],
  },
  /* ═══ 4. Instagram Script Fonts ═══ */
  {
    name: "Instagram Script Fonts",
    description: "Calligraphic layering with combining marks",
    styles: [
      { label: "Ink Drop", gen: (T) => v("script", null, { prefix: "•", suffix: "•" })(T) },
      { label: "Quill Tip", gen: (T) => v("bold-script", null, "pencil")(T) },
      { label: "Calligraphy Arc", gen: (T) => v("script", null, { prefix: "⌜", suffix: "⌝" })(T) },
      { label: "Flourish Pen", gen: (T) => v("bold-script", null, { prefix: "❦", suffix: "❦" })(T) },
      { label: "Feather Stroke", gen: (T) => v("script", null, { prefix: "─", suffix: "─" })(T) },
      { label: "Wax Seal", gen: (T) => v("bold-script", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Vintage Nib", gen: (T) => v("script", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Velvet Stroke", gen: (T) => v("script", null, { prefix: "~", suffix: "~" })(T) },
      { label: "Sparkle Script", gen: (T) => v("script", null, "sparkle")(T) },
    ],
  },
  /* ═══ 5. Adorable Instagram Fonts ═══ */
  {
    name: "Adorable Instagram Fonts",
    description: "Playful patterns with bouncy combining effects",
    styles: [
      { label: "Bubbly Dots", gen: (T) => v("bold", null, { prefix: "⊹", suffix: "⊹" })(T) },
      { label: "Bouncy Ring", gen: (T) => v("bold", null, { prefix: "○", suffix: "○" })(T) },
      { label: "Confetti Mix", gen: (T) => v("sans-bold", null, { prefix: "✶", suffix: "✶" })(T) },
      { label: "Sprinkle Dot", gen: (T) => v("bold-script", null, { prefix: "·", suffix: "·" })(T) },
      { label: "Candy Thin", gen: (T) => v("small-caps", "dot-above", null, "thin")(T) },
      { label: "Giggly Wave", gen: (T) => v("italic", null, { prefix: "〰", suffix: "〰" })(T) },
      { label: "Star Bounce", gen: (T) => v("bold-script", null, "star-outline")(T) },
      { label: "Wave Dash", gen: (T) => v("small-caps", null, "wave-dash")(T) },
      { label: "Dizzy Swap", gen: (T) => v("bold", null, { prefix: "✧", suffix: "✧" })(T) },
      { label: "Poppy Caps", gen: (T) => v("small-caps", ["\u0307", "\u0330"])(T) },
    ],
  },
  /* ═══ 6. Decorative Instagram Fonts ═══ */
  {
    name: "Decorative Instagram Fonts",
    description: "Triple-stacked ornamental combining effects",
    styles: [
      { label: "Triple Crown", gen: (T) => v("bold", null, { prefix: "♛", suffix: "♛" })(T) },
      { label: "Double Box", gen: (T) => v("bold", null, "double-box")(T) },
      { label: "Florette Bold", gen: (T) => v("bold", null, "florette")(T) },
      { label: "Gilded Fraktur", gen: (T) => v("fraktur", null, { prefix: "✦", suffix: "✦" })(T) },
      { label: "Mosaic Pattern", gen: (T) => v("bold", null, { prefix: "▣", suffix: "▣" })(T) },
      { label: "Stained Glass", gen: (T) => v("double-struck", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Filigree Script", gen: (T) => v("script", null, { prefix: "❀", suffix: "❀" })(T) },
      { label: "Baroque Bold", gen: (T) => v("bold-fraktur", null, { prefix: "❧", suffix: "❧" })(T) },
      { label: "Isis Ornament", gen: (T) => v("script", null, "hieroglyph")(T) },
      { label: "Strikethrough Aesthetic", gen: (T) => v("plain", "strikethrough")(T) },
    ],
  },
  /* ═══ 7. Gothic Instagram Fonts ═══ */
  {
    name: "Gothic Instagram Fonts",
    description: "Dark combining effects with layered diacritical marks",
    styles: [
      { label: "Shadow Fraktur", gen: (T) => v("fraktur", null, { prefix: "▪", suffix: "▪" })(T) },
      { label: "Pyramid Fraktur", gen: (T) => v("fraktur", null, "hieroglyph")(T) },
      { label: "Cursed Text", gen: (T) => v("fraktur", null, { prefix: "†", suffix: "†" })(T) },
      { label: "Abyssal Dark", gen: (T) => v("bold-fraktur", null, { prefix: "▓", suffix: "▓" })(T) },
      { label: "Phantom Type", gen: (T) => v("fraktur", null, { prefix: "░", suffix: "░" })(T) },
      { label: "Wraith Bold", gen: (T) => v("bold-fraktur", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Dark Ritual", gen: (T) => v("fraktur", null, { prefix: "☠", suffix: "☠" })(T) },
      { label: "Gothic Fraktur", gen: (T) => v("bold-fraktur")(T) },
      { label: "Void Fraktur", gen: (T) => v("fraktur", null, { prefix: "■", suffix: "■" })(T) },
      { label: "Heavy Gothic", gen: (T) => v("bold-fraktur", null, "heavy-box")(T) },
    ],
  },
  /* ═══ 8. High-Impact Instagram Fonts ═══ */
  {
    name: "High-Impact Instagram Fonts",
    description: "Fullwidth characters with box drawing frames",
    styles: [
      { label: "Block Frame", gen: (T) => v("fullwidth", null, { prefix: "┏━", suffix: "━┓" })(T) },
      { label: "Heavy Border", gen: (T) => v("fullwidth", null, { prefix: "╔═", suffix: "═╗" })(T) },
      { label: "Pipeline", gen: (T) => v("fullwidth", null, "double-pipe")(T) },
      { label: "Neon Box", gen: (T) => v("fullwidth", null, { prefix: "╠═", suffix: "═╣" })(T) },
      { label: "Steel Grid", gen: (T) => v("fullwidth", null, "heavy-pipe")(T) },
      { label: "Corner Frame", gen: (T) => v("fullwidth", null, "light-box")(T) },
      { label: "Tortoise Impact", gen: (T) => v("fullwidth", null, "tortoise")(T) },
      { label: "Impact Layer", gen: (T) => v("fullwidth", null, { prefix: "▐", suffix: "▌" })(T) },
      { label: "Ink Box", gen: (T) => v("squared")(T) },
      { label: "Scarab Impact", gen: (T) => v("fullwidth", null, "hieroglyph")(T) },
    ],
  },
  /* ═══ 9. Instagram Fonts for Name ═══ */
  {
    name: "Instagram Fonts for Name",
    description: "Short punchy styles with layered character marks",
    styles: [
      { label: "Inverted Stamp", gen: (T) => v("plain", ["\u0311", "\u032A"])(T) },
      { label: "Name Ring", gen: (T) => v("plain", "ring-above-macron-below")(T) },
      { label: "Tag Accent", gen: (T) => v("plain", ["\u0301", "\u0328"])(T) },
      { label: "Handle Dot", gen: (T) => v("plain", ["\u0307", "\u0327"])(T) },
      { label: "Profile Breve", gen: (T) => v("plain", ["\u0306", "\u0323"])(T) },
      { label: "ID Caron", gen: (T) => v("plain", ["\u030C", "\u0330"])(T) },
      { label: "Alias Wave", gen: (T) => v("plain", ["\u0303", "\u032D"])(T) },
      { label: "Snowflake Name", gen: (T) => v("sans", null, "snowflake")(T) },
      { label: "Glow Up", gen: (T) => v("plain", "ring-above")(T) },
      { label: "Bracket Name", gen: (T) => v("sans-bold", null, "lenticular")(T) },
    ],
  },
  /* ═══ 10. Instagram Fonts for Business ═══ */
  {
    name: "Instagram Fonts for Business",
    description: "Subtle professional textures with clean marks",
    styles: [
      { label: "Executive", gen: (T) => v("sans", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Boardroom", gen: (T) => v("sans-bold", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Corporate", gen: (T) => v("monospace", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Analyst", gen: (T) => v("sans-italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Director", gen: (T) => v("bold", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Presenter", gen: (T) => v("sans-bold-italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Consultant", gen: (T) => v("double-struck", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Strategist", gen: (T) => v("italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Lotus Business", gen: (T) => v("double-struck", null, "hieroglyph")(T) },
      { label: "Pencil Business", gen: (T) => v("sans-bold", null, "pencil")(T) },
    ],
  },
  /* ═══ 11. Instagram Username Fonts ═══ */
  {
    name: "Instagram Username Fonts",
    description: "Elegant identity styles with layered diacritics",
    styles: [
      { label: "Signature Wave", gen: (T) => v("sans-italic", null, { prefix: "~", suffix: "~" })(T) },
      { label: "Monogram Style", gen: (T) => v("bold", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Initial Sans", gen: (T) => v("sans-bold", null, { prefix: "▪", suffix: "▪" })(T) },
      { label: "Personal Serif", gen: (T) => v("italic", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Identity Bold", gen: (T) => v("bold-italic", null, { prefix: "■", suffix: "■" })(T) },
      { label: "Name Plate", gen: (T) => v("sans", null, { prefix: "│", suffix: "│" })(T) },
      { label: "Tag Elegant", gen: (T) => v("monospace", null, { prefix: "▸", suffix: "◂" })(T) },
      { label: "Handle Script", gen: (T) => v("script", null, { prefix: "✧", suffix: "✧" })(T) },
      { label: "Pipe Username", gen: (T) => v("bold-italic", null, "double-pipe")(T) },
      { label: "Lenticular User", gen: (T) => v("monospace", null, "lenticular")(T) },
    ],
  },
];

/* ── Slug helper for stable DOM ids ── */

function slugify(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const IG_EMOJIS: Record<string, string> = {
  "Instagram Bio Fonts": "\ud83d\udcdd",
  "Instagram Caption Fonts": "\ud83d\udcf8",
  "Minimal Instagram Fonts": "\ud83e\uddd8",
  "Instagram Script Fonts": "\u270d\ufe0f",
  "Adorable Instagram Fonts": "\ud83d\udc95",
  "Decorative Instagram Fonts": "\u2728",
  "Gothic Instagram Fonts": "\u2694\ufe0f",
  "High-Impact Instagram Fonts": "\ud83d\udd25",
  "Instagram Fonts for Name": "\ud83c\udff7\ufe0f",
  "Instagram Fonts for Business": "\ud83d\udcbc",
  "Instagram Username Fonts": "\ud83d\udc64",
  "Instagram Fonts for Girls": "\ud83c\udf38",
};

const igCategoryLinks = cardDefs.map((card) => ({
  label: card.name,
  emoji: IG_EMOJIS[card.name] || "\u2726",
  id: `cat-${slugify(card.name)}`,
}));

/* ── Generate all card data from input text ── */

function generateCards(input: string) {
  const T = input || "Alice Wander";
  return cardDefs.map((card) => ({
    name: card.name,
    description: card.description,
    styles: card.styles.map((s) => ({
      label: s.label,
      text: s.gen(T),
    })),
  }));
}

/* ── Component ── */

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const INITIAL_VISIBLE_CARDS = 4;

export default function InstagramFontCards() {
  const [input, setInput] = useState("Alice Wander");
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyCount, setCopyCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cards = useMemo(() => generateCards(input), [input]);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();

  // Cap max font size on mobile screens
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const newMax = e.matches ? MAX_SIZE_MOBILE : MAX_SIZE_DESKTOP;
      setMaxSize(newMax);
      setFontSize((prev) => Math.min(prev, newMax));
    };
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Expand all cards when triggered by TrendingFonts scroll-to-style
  useEffect(() => {
    const handler = () => setVisibleCount(cards.length);
    window.addEventListener("ig-expand-cards", handler);
    return () => window.removeEventListener("ig-expand-cards", handler);
  }, [cards.length]);

  const handleCopy = useCallback((converted: string, id: string) => {
    copyToClipboard(converted, () => {
      setCopiedId(id);
      setCopyCount((c) => c + 1);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const decreaseSize = () => {
    setFontSize((prev) => Math.max(MIN_SIZE, prev - STEP));
  };

  const increaseSize = () => {
    setFontSize((prev) => Math.min(maxSize, prev + STEP));
  };

  return (
    <>
      {/* Generator Block: Input + Slider */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-16 text-center">
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          {/* Input */}
          <div className="relative">
            <textarea
              className="w-full min-h-[120px] p-8 text-xl font-body bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          {/* Character Counter + Font Size Slider */}
          <div className="rounded-2xl bg-surface-container-low p-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300">
            <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${input.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
              <span className="font-semibold text-sm">Tt</span>
              Character Count:{" "}
              <span className="font-semibold">{input.length}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseSize}
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                aria-label="Decrease font size"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <input
                type="range"
                min={MIN_SIZE}
                max={maxSize}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                aria-label="Font size"
                className="font-size-slider flex-1 sm:w-40 md:w-48 h-1.5 appearance-none rounded-full bg-outline-variant/40 cursor-pointer"
              />
              <button
                onClick={increaseSize}
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                aria-label="Increase font size"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <span className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right">
                {fontSize}px
              </span>
            </div>
          </div>
          <CategoryJumpLinks
            categories={igCategoryLinks}
            onExpandAll={() => setVisibleCount(cards.length)}
          />
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Font Category Cards */}
      <section
        id="ig-font-results"
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
        style={{ "--ig-font-size": `${fontSize}px` } as React.CSSProperties}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, visibleCount).map((card) => {
            return (
              <div key={card.name} id={`cat-${slugify(card.name)}`} className="animate-card-fade-in scroll-mt-28">
                <div className="rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300">
                  <strong className="block font-headline text-xl font-bold mb-6 text-on-background">
                    {card.name}
                  </strong>
                  <div className="space-y-3">
                    {card.styles.map((style, idx) => {
                      const styleId = `${card.name}-${style.label}`;
                      const isCopied = copiedId === styleId;

                      return (
                        <div
                          key={idx}
                          id={`style-${slugify(style.label)}`}
                          className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 gap-3 sm:gap-0 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                        >
                          <div className="flex flex-col gap-1 min-w-0 flex-1 sm:mr-4">
                            <span
                              className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-on-surface-variant bg-surface-container-high"
                              aria-label={`${card.name} – ${style.label} font style`}
                            >
                              {style.label}
                            </span>
                            <div
                              aria-hidden="true"
                              className="font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark-preview-text"
                              style={{ fontSize: "var(--ig-font-size)" }}
                            >
                              {style.text}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 self-end sm:self-center">
                            <ShareButtons text={style.text} />
                            <button
                              onClick={() => toggleFavorite({ id: styleId, styleName: style.label, categoryName: card.name, text: style.text })}
                              className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                                isFavorite(styleId)
                                  ? "text-[#ef4444]"
                                  : "text-on-surface-variant hover:text-[#ef4444]"
                              }`}
                              aria-label={isFavorite(styleId) ? "Remove from favorites" : "Add to favorites"}
                            >
                              {isFavorite(styleId) ? (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                              ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                              )}
                              <span className="text-[0.55rem] leading-none mt-0.5">{isFavorite(styleId) ? "Saved" : "Save"}</span>
                            </button>
                            <button
                              onClick={() => handleCopy(style.text, styleId)}
                              className={`flex-shrink-0 w-10 rounded-full font-bold transition-all flex flex-col items-center justify-center ${
                                isCopied
                                  ? "bg-[#22c55e] text-white"
                                  : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                              }`}
                              aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                            >
                              {isCopied ? (
                                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12" /></svg>
                              ) : (
                                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                              )}
                              <span className="text-[0.55rem] leading-none mt-0.5">{isCopied ? "Done" : "Copy"}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {visibleCount < cards.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount(cards.length)}
              className="px-8 py-4 border-2 border-primary/20 text-primary font-headline font-bold rounded-xl hover:bg-primary/5 transition-colors tracking-tight flex items-center gap-2"
            >
              Load All {cards.length - visibleCount} Remaining Styles
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* Copied Toast */}
      {copiedId && (
        <div
          key={copyCount}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-full editorial-shadow animate-slide-up flex items-center gap-4 font-headline font-bold text-sm tracking-tight"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
          Style Copied to Clipboard
        </div>
      )}
    </>
  );
}
