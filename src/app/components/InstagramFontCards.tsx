"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { copyToClipboard } from "../lib/clipboard";
import {
  renderVariation,
  type FontVariation,
  type SpacingMode,
} from "../lib/fontEngine";

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
      { label: "Textured Bold", gen: (T) => v("bold", "acute-dot-below")(T) },
      { label: "Glacier Italic", gen: (T) => v("italic", "circumflex-cedilla")(T) },
      { label: "Glitter Sans", gen: (T) => v("sans-bold", "diaeresis-ring-below")(T) },
      { label: "Ember Serif", gen: (T) => v("bold-italic", ["\u030C", "\u0323"])(T) },
      { label: "Neon Layer", gen: (T) => v("sans-bold-italic", ["\u030B", "\u0331"])(T) },
      { label: "Vintage Grave", gen: (T) => v("bold-italic", ["\u0300", "\u0330"])(T) },
      { label: "Crown Accent", gen: (T) => v("bold", ["\u0302", "\u0328"])(T) },
      { label: "Angle Caption", gen: (T) => v("bold-italic", null, "double-angle")(T) },
      { label: "Cross Frame", gen: (T) => v("bold-script", null, "cross-frame")(T) },
      { label: "Engrave Italic", gen: (T) => v("bold-italic", "tilde-dot-below")(T) },
    ],
  },
  /* ═══ 3. Minimal Instagram Fonts ═══ */
  {
    name: "Minimal Instagram Fonts",
    description: "Hair & thin spaces for maximum editorial elegance",
    styles: [
      { label: "Whisper", gen: (T) => v("superscript", null, null, "hair")(T) },
      { label: "Silk Italic", gen: (T) => v("italic", null, null, "thin")(T) },
      { label: "Cloud Script", gen: (T) => v("script", null, null, "hair")(T) },
      { label: "Drift Bold Italic", gen: (T) => v("bold-italic", null, null, "thin")(T) },
      { label: "Mist Sans Bold", gen: (T) => v("sans-bold", null, null, "hair")(T) },
      { label: "Zen Caps", gen: (T) => v("small-caps", null, null, "thin")(T) },
      { label: "Pearl Mono", gen: (T) => v("monospace", null, null, "hair")(T) },
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
      { label: "Ink Drop", gen: (T) => v("script", ["\u0307", "\u0323"])(T) },
      { label: "Quill Tip", gen: (T) => v("bold-script", ["\u0302", "\u0327"])(T) },
      { label: "Calligraphy Arc", gen: (T) => v("script", ["\u0306", "\u0325"])(T) },
      { label: "Flourish Pen", gen: (T) => v("bold-script", ["\u0303", "\u0331"])(T) },
      { label: "Feather Stroke", gen: (T) => v("script", ["\u030C", "\u0323"])(T) },
      { label: "Wax Seal", gen: (T) => v("bold-script", ["\u030F", "\u0330"])(T) },
      { label: "Vintage Nib", gen: (T) => v("script", ["\u0304", "\u0328"])(T) },
      { label: "Nile Script", gen: (T) => v("bold-script", ["\u0303"], "hieroglyph")(T) },
      { label: "Velvet Stroke", gen: (T) => v("script", ["\u0311", "\u0325"])(T) },
      { label: "Sparkle Script", gen: (T) => v("script", null, "sparkle")(T) },
    ],
  },
  /* ═══ 5. Adorable Instagram Fonts ═══ */
  {
    name: "Adorable Instagram Fonts",
    description: "Playful patterns with bouncy combining effects",
    styles: [
      { label: "Bubbly Dots", gen: (T) => v("bold", "diaeresis", { prefix: "⊹", suffix: "⊹" })(T) },
      { label: "Bouncy Ring", gen: (T) => v("bold", ["\u030A", "\u032E"])(T) },
      { label: "Confetti Mix", gen: (T) => v("sans-bold", ["\u0307", "\u030A"])(T) },
      { label: "Sprinkle Dot", gen: (T) => v("bold-script", ["\u0307", "\u0326"])(T) },
      { label: "Candy Thin", gen: (T) => v("small-caps", "dot-above", null, "thin")(T) },
      { label: "Giggly Wave", gen: (T) => v("italic", ["\u0303", "\u0325"])(T) },
      { label: "Star Bounce", gen: (T) => v("bold-script", null, "star-outline")(T) },
      { label: "Wave Dash", gen: (T) => v("small-caps", null, "wave-dash")(T) },
      { label: "Dizzy Swap", gen: (T) => v("bold", ["\u0307", "\u030A"])(T) },
      { label: "Poppy Caps", gen: (T) => v("small-caps", ["\u0307", "\u0330"])(T) },
    ],
  },
  /* ═══ 6. Decorative Instagram Fonts ═══ */
  {
    name: "Decorative Instagram Fonts",
    description: "Triple-stacked ornamental combining effects",
    styles: [
      { label: "Triple Crown", gen: (T) => v("bold", "circumflex-dot-below-macron-below")(T) },
      { label: "Double Box", gen: (T) => v("bold", null, "double-box")(T) },
      { label: "Florette Bold", gen: (T) => v("bold", "dot-above", "florette")(T) },
      { label: "Gilded Fraktur", gen: (T) => v("fraktur", ["\u030B", "\u0330"])(T) },
      { label: "Mosaic Pattern", gen: (T) => v("bold", ["\u0302", "\u0323", "\u0325"])(T) },
      { label: "Stained Glass", gen: (T) => v("double-struck", ["\u0302", "\u0326"])(T) },
      { label: "Filigree Script", gen: (T) => v("script", ["\u0304", "\u032E"])(T) },
      { label: "Baroque Bold", gen: (T) => v("bold-fraktur", ["\u0300", "\u0324"])(T) },
      { label: "Isis Ornament", gen: (T) => v("script", "macron", "hieroglyph")(T) },
      { label: "Strikethrough Aesthetic", gen: (T) => v("plain", "strikethrough")(T) },
    ],
  },
  /* ═══ 7. Gothic Instagram Fonts ═══ */
  {
    name: "Gothic Instagram Fonts",
    description: "Dark combining effects with layered diacritical marks",
    styles: [
      { label: "Shadow Fraktur", gen: (T) => v("fraktur", ["\u0300", "\u0331"])(T) },
      { label: "Pyramid Fraktur", gen: (T) => v("fraktur", null, "hieroglyph")(T) },
      { label: "Cursed Text", gen: (T) => v("fraktur", ["\u030F", "\u0330"])(T) },
      { label: "Abyssal Dark", gen: (T) => v("bold-fraktur", ["\u030C", "\u0323"])(T) },
      { label: "Phantom Type", gen: (T) => v("fraktur", ["\u0311", "\u0325"])(T) },
      { label: "Wraith Bold", gen: (T) => v("bold-fraktur", ["\u0306", "\u0324"])(T) },
      { label: "Dark Ritual", gen: (T) => v("fraktur", ["\u0301", "\u0327", "\u0334"])(T) },
      { label: "Gothic Fraktur", gen: (T) => v("bold-fraktur")(T) },
      { label: "Void Fraktur", gen: (T) => v("fraktur", ["\u0303", "\u032E", "\u0335"])(T) },
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
      { label: "Impact Layer", gen: (T) => v("fullwidth", ["\u030B", "\u0323"])(T) },
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
      { label: "Executive", gen: (T) => v("sans", "dot-below")(T) },
      { label: "Boardroom", gen: (T) => v("sans-bold", "macron")(T) },
      { label: "Corporate", gen: (T) => v("monospace", ["\u0304", "\u0323"])(T) },
      { label: "Analyst", gen: (T) => v("sans-italic", "ogonek")(T) },
      { label: "Director", gen: (T) => v("bold", "macron-below")(T) },
      { label: "Presenter", gen: (T) => v("sans-bold-italic", "ring-below")(T) },
      { label: "Consultant", gen: (T) => v("double-struck", "dot-below")(T) },
      { label: "Strategist", gen: (T) => v("italic", ["\u0323", "\u0331"])(T) },
      { label: "Lotus Business", gen: (T) => v("double-struck", null, "hieroglyph")(T) },
      { label: "Pencil Business", gen: (T) => v("sans-bold", null, "pencil")(T) },
    ],
  },
  /* ═══ 11. Instagram Username Fonts ═══ */
  {
    name: "Instagram Username Fonts",
    description: "Elegant identity styles with layered diacritics",
    styles: [
      { label: "Signature Wave", gen: (T) => v("sans-italic", ["\u0301", "\u0330"])(T) },
      { label: "Monogram Style", gen: (T) => v("bold", ["\u030B", "\u0325"])(T) },
      { label: "Initial Sans", gen: (T) => v("sans-bold", ["\u030C", "\u0331"])(T) },
      { label: "Personal Serif", gen: (T) => v("italic", ["\u0302", "\u0323"])(T) },
      { label: "Identity Bold", gen: (T) => v("bold-italic", ["\u030A", "\u0328"])(T) },
      { label: "Name Plate", gen: (T) => v("sans", ["\u0304", "\u0327"])(T) },
      { label: "Tag Elegant", gen: (T) => v("monospace", ["\u0306", "\u0330"])(T) },
      { label: "Handle Script", gen: (T) => v("script", ["\u0300", "\u0325"])(T) },
      { label: "Pipe Username", gen: (T) => v("bold-italic", null, "double-pipe")(T) },
      { label: "Lenticular User", gen: (T) => v("monospace", null, "lenticular")(T) },
    ],
  },
  /* ═══ 12. Instagram Fonts for Girls ═══ */
  {
    name: "Instagram Fonts for Girls",
    description: "Floral & heart decorations with Dingbat styling",
    styles: [
      { label: "Blossom Script", gen: (T) => v("script", "dot-above", "blossom")(T) },
      { label: "Heart Italic", gen: (T) => v("italic", "ring-above", "heart-outline")(T) },
      { label: "Petal Sans", gen: (T) => v("sans", "breve", "florette")(T) },
      { label: "Rose Bold", gen: (T) => v("bold-script", "tilde", "flower")(T) },
      { label: "Coquette Ribbon", gen: (T) => v("plain", null, "coquette")(T) },
      { label: "Tulip Script", gen: (T) => v("script", ["\u0307", "\u0323"], "dingbat-flower")(T) },
      { label: "Lavender Thin", gen: (T) => v("italic", null, "sparkle", "thin")(T) },
      { label: "Petal Italic", gen: (T) => v("italic", "ring-above", "flower")(T) },
      { label: "Heart Dingbat", gen: (T) => v("bold-script", null, "heart-excl")(T) },
      { label: "Ribbon Sans", gen: (T) => v("sans", "tilde", "heart-arrow")(T) },
    ],
  },
];

/* ── Slug helper for stable DOM ids ── */

function slugify(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

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
  const [generateFlash, setGenerateFlash] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cards = useMemo(() => generateCards(input), [input]);

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
      if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
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

  const handleGenerate = () => {
    setGenerateFlash(true);
    if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    generateTimerRef.current = setTimeout(() => setGenerateFlash(false), 1500);

    const el = document.getElementById("ig-font-results");
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY - 88;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 900;
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const t = Math.min(elapsed / duration, 1);
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        window.scrollTo(0, startY + distance * ease);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };

  const decreaseSize = () => {
    setFontSize((prev) => Math.max(MIN_SIZE, prev - STEP));
  };

  const increaseSize = () => {
    setFontSize((prev) => Math.min(maxSize, prev + STEP));
  };

  return (
    <>
      {/* Generator Block: Input + Button + Slider */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-16 text-center">
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          {/* Input with Generate button */}
          <div className="relative">
            <textarea
              className="w-full min-h-[120px] p-8 pr-36 text-xl font-body bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              className={`absolute right-4 bottom-4 px-6 py-2.5 font-body font-semibold text-sm rounded-lg active:scale-95 shadow-sm text-white flex items-center gap-1.5 transition-all duration-300 ${generateFlash ? "bg-[#22c55e]" : "bg-primary"}`}
            >
              {generateFlash && (
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              )}
              {generateFlash ? "Generated!" : "Generate"}
            </button>
          </div>
          {/* Font Size Slider */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={decreaseSize}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
              aria-label="Decrease font size"
            >
              <span className="material-symbols-outlined text-base">
                remove
              </span>
            </button>
            <input
              type="range"
              min={MIN_SIZE}
              max={maxSize}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="font-size-slider w-40 md:w-48 h-1.5 appearance-none rounded-full bg-outline-variant/40 cursor-pointer"
            />
            <button
              onClick={increaseSize}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
              aria-label="Increase font size"
            >
              <span className="material-symbols-outlined text-base">
                add
              </span>
            </button>
            <span className="text-xs text-outline font-body tabular-nums w-10 text-right">
              {fontSize}px
            </span>
          </div>
        </div>
      </section>

      {/* Font Category Cards */}
      <section
        id="ig-font-results"
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
        style={{ "--ig-font-size": `${fontSize}px` } as React.CSSProperties}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, visibleCount).map((card) => {
            return (
              <div key={card.name} className="animate-card-fade-in">
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
                          className="flex justify-between items-center p-4 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                        >
                          <div className="flex flex-col gap-1 min-w-0 flex-1 mr-4">
                            <span
                              className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-primary bg-primary-fixed"
                              aria-label={`${card.name} – ${style.label} font style`}
                            >
                              {style.label}
                            </span>
                            <div
                              aria-hidden="true"
                              className="font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark:text-on-surface-variant"
                              style={{ fontSize: "var(--ig-font-size)" }}
                            >
                              {style.text}
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopy(style.text, styleId)}
                            className={`flex-shrink-0 py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                              isCopied
                                ? "bg-[#22c55e] text-white"
                                : "border border-outline-variant/30 hover:bg-primary hover:text-on-primary hover:border-transparent"
                            }`}
                          >
                            <span className="material-symbols-outlined text-sm">
                              {isCopied ? "check" : "content_copy"}
                            </span>
                            <span className="hidden sm:inline">
                              {isCopied ? "Copied!" : "Copy"}
                            </span>
                          </button>
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
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
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
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          Style Copied to Clipboard
        </div>
      )}
    </>
  );
}
