"use client";

import { useState, useMemo, useCallback, useRef, useEffect, lazy, Suspense } from "react";
import { copyToClipboard } from "../lib/clipboard";
import { useFavorites } from "../lib/useFavorites";
import { useTextHistory } from "../lib/useTextHistory";
import { v, type CardDef } from "../lib/instagramCardBuilder";
import FavoritesSection from "./FavoritesSection";
import CategoryJumpLinks from "./CategoryJumpLinks";
import TextHistory from "./TextHistory";

const PlatformPreview = lazy(() => import("./PlatformPreview"));
const DownloadImage = lazy(() => import("./DownloadImage"));
const ShareButtons = lazy(() => import("./ShareButtons"));

// Initial card definitions — loaded eagerly (first 3 categories for above-fold)
const initialCardDefs: CardDef[] = [
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
];

// Total count across initial + deferred (used for UI labels)
const TOTAL_CATEGORY_COUNT = 12;

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

/* ── Generate card data from input text ── */

function generateCards(input: string, defs: CardDef[]) {
  const T = input || "Alice Wander";
  return defs.map((card) => ({
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

export default function InstagramFontCards() {
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyCount, setCopyCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [allCardDefs, setAllCardDefs] = useState<CardDef[]>(initialCardDefs);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cards = useMemo(
    () => generateCards(input, allCardDefs),
    [input, allCardDefs],
  );

  const igCategoryLinks = useMemo(
    () => allCardDefs.map((card) => ({
      label: card.name,
      emoji: IG_EMOJIS[card.name] || "\u2726",
      id: `cat-${slugify(card.name)}`,
    })),
    [allCardDefs],
  );

  const loadAllDefs = useCallback(async () => {
    if (allLoaded) return;
    const { default: deferred } = await import("../lib/instagramCardDefsDeferred");
    setAllCardDefs([...initialCardDefs, ...deferred]);
    setAllLoaded(true);
  }, [allLoaded]);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const { addEntry } = useTextHistory();
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<{ text: string; styleName: string } | null>(null);
  const historyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    if (historyTimerRef.current) clearTimeout(historyTimerRef.current);
    if (input.trim().length >= 2) {
      historyTimerRef.current = setTimeout(() => addEntry(input), 1500);
    }
    return () => { if (historyTimerRef.current) clearTimeout(historyTimerRef.current); };
  }, [input, addEntry]);

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (historyTimerRef.current) clearTimeout(historyTimerRef.current);
    };
  }, []);

  // Expand all cards when triggered by TrendingFonts scroll-to-style
  useEffect(() => {
    const handler = () => { loadAllDefs(); };
    window.addEventListener("ig-expand-cards", handler);
    return () => window.removeEventListener("ig-expand-cards", handler);
  }, [loadAllDefs]);

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
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
        <div className="relative w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          {/* Input */}
          <div className="relative">
            <svg className="absolute left-4 md:left-8 top-4 md:top-8 w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <textarea
              aria-label="Enter text to transform into Instagram fonts"
              className="w-full min-h-[56px] md:min-h-[120px] pl-11 md:pl-16 pr-4 md:pr-8 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
              placeholder="Type or paste your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          {/* Character Counter + Font Size Slider */}
          <div className="rounded-2xl bg-surface-container-low p-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${input.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
                <span className="font-semibold text-sm">Tt</span>
                Character Count:{" "}
                <span className="font-semibold">{input.length}</span>
              </span>
              <TextHistory onSelect={(t) => setInput(t)} />
            </div>
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
            onExpandAll={loadAllDefs}
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
          {cards.map((card) => {
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
                          className="flex flex-col p-4 gap-3 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                          style={{ contentVisibility: "auto", containIntrinsicSize: "auto 120px" }}
                        >
                          <div className="flex flex-col gap-1 min-w-0">
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
                          <div className="flex items-center gap-2 flex-wrap relative z-10">
                            <button
                              onClick={() => setPreviewText(style.text)}
                              className="flex flex-col items-center justify-center w-10 rounded-full transition-all text-on-surface-variant hover:text-primary"
                              aria-label="Preview on platform"
                              title="Preview on platform"
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                              <span className="text-[0.55rem] leading-none mt-0.5">Preview</span>
                            </button>
                            <button
                              onClick={() => setDownloadInfo({ text: style.text, styleName: style.label })}
                              className="flex flex-col items-center justify-center w-10 rounded-full transition-all text-on-surface-variant hover:text-primary"
                              aria-label="Download as image"
                              title="Download as image"
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                              <span className="text-[0.55rem] leading-none mt-0.5">Image</span>
                            </button>
                            <Suspense fallback={
                              <div className="w-10 flex flex-col items-center justify-center rounded-full text-on-surface-variant/60">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                                <span className="text-[0.55rem] leading-none mt-0.5">Share</span>
                              </div>
                            }>
                              <ShareButtons text={style.text} />
                            </Suspense>
                            <button
                              onClick={() => toggleFavorite({ id: styleId, styleName: style.label, categoryName: card.name, text: style.text })}
                              className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                                isFavorite(styleId)
                                  ? "text-[#ef4444]"
                                  : "text-on-surface-variant hover:text-[#ef4444]"
                              }`}
                              aria-label={isFavorite(styleId) ? "Saved — remove from favorites" : "Save to favorites"}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(styleId) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                              <span className="text-[0.55rem] leading-none mt-0.5">{isFavorite(styleId) ? "Saved" : "Save"}</span>
                            </button>
                            <button
                              onClick={() => handleCopy(style.text, styleId)}
                              className={`flex-shrink-0 w-10 h-10 rounded-full font-bold transition-all duration-200 flex flex-col items-center justify-center ${
                                isCopied
                                  ? "bg-[#15803d] text-white scale-110"
                                  : "text-on-surface-variant hover:bg-primary hover:text-on-primary active:scale-95"
                              }`}
                              aria-label={isCopied ? "Done — copied" : "Copy to clipboard"}
                            >
                              {isCopied ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                              ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
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
        {!allLoaded && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadAllDefs}
              className="px-8 py-4 border-2 border-primary/20 text-primary font-headline font-bold rounded-xl hover:bg-primary/5 transition-colors tracking-tight flex items-center gap-2"
            >
              Load All {TOTAL_CATEGORY_COUNT - initialCardDefs.length} Remaining Styles
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* Copied Toast */}
      {copiedId && (
        <div
          key={copyCount}
          role="status"
          aria-live="polite"
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-full editorial-shadow animate-slide-up flex items-center gap-4 font-headline font-bold text-sm tracking-tight"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
          Style Copied to Clipboard
        </div>
      )}

      {previewText && (
        <Suspense fallback={null}>
          <PlatformPreview text={previewText} onClose={() => setPreviewText(null)} />
        </Suspense>
      )}
      {downloadInfo && (
        <Suspense fallback={null}>
          <DownloadImage text={downloadInfo.text} styleName={downloadInfo.styleName} onClose={() => setDownloadInfo(null)} />
        </Suspense>
      )}
    </>
  );
}
