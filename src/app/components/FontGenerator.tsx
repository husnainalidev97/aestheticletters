"use client";

import { useState, useCallback, useRef, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { fontCategories, type FontCategory } from "../lib/fontStyles";
import type { WrapSymbol } from "../lib/bigTextFontStyles";
import FontCategoryCard from "./FontCategoryCard";
import FavoritesSection from "./FavoritesSection";
import { useFavorites } from "../lib/useFavorites";
import { useTextHistory } from "../lib/useTextHistory";
import CategoryJumpLinks, { slugify } from "./CategoryJumpLinks";
import TextHistory from "./TextHistory";

const PlatformPreview = lazy(() => import("./PlatformPreview"));
const DownloadImage = lazy(() => import("./DownloadImage"));
const ScalePreview = lazy(() => import("./ScalePreview"));

const RESULTS_ID = "font-results";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;

/** Priority 1 — rendered on first paint. */
const INITIAL_COUNT = 3;

/** Categories that receive the dark card treatment. */
const DARK_CATEGORIES = new Set(["Dark Aesthetic", "Glitch"]);

const CATEGORY_EMOJIS: Record<string, string> = {
  "Cottagecore": "🌿",
  "Y2K": "💿",
  "Soft Aesthetic": "🌸",
  "Dark Aesthetic": "🖤",
  "Gothic": "⚔️",
  "Layered": "✨",
  "Text Decorators": "🎨",
  "Kawaii": "💕",
  "Glitch": "👾",
  "Vaporwave": "🌊",
};

const homeCategoryLinks = fontCategories.map((cat) => ({
  label: cat.name,
  emoji: CATEGORY_EMOJIS[cat.name] || "✦",
  id: `cat-${slugify(cat.name)}`,
}));

interface FontGeneratorProps {
  totalFontStyles: number;
  hideHeader?: boolean;
  hideExploreButton?: boolean;
  categories?: FontCategory[];
  defaultText?: string;
  /** Optional function to calculate platform-specific weighted char count. */
  charWeightFn?: (text: string) => number;
  /** Max weighted chars for the platform (e.g. 280 for tweets). */
  charWeightMax?: number;
  /** Label for the weighted counter (e.g. "X Weight"). */
  charWeightLabel?: string;
  /** Enable the "Preview at scale" modal (banner/thumbnail/story frames). */
  enableScalePreview?: boolean;
  /** Optional symbol wrappers — renders a picker that symmetrically wraps output. */
  wrapSymbols?: WrapSymbol[];
}

export default function FontGenerator({ totalFontStyles, hideHeader, hideExploreButton, categories: customCategories, defaultText = "Aesthetic Fonts", charWeightFn, charWeightMax, charWeightLabel, enableScalePreview, wrapSymbols }: FontGeneratorProps) {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyCount, setCopyCount] = useState(0);

  const [showAll, setShowAll] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const { addEntry } = useTextHistory();

  // Modal states for Preview & Download
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<{ text: string; styleName: string } | null>(null);
  const [scalePreviewText, setScalePreviewText] = useState<string | null>(null);

  // Selected symbol wrapper (null = off)
  const [wrapSymbol, setWrapSymbol] = useState<string | null>(null);

  // Debounce ref for text history
  const historyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allCategories = customCategories || fontCategories;
  const filteredCategories = allCategories.filter(
    (cat) => !cat.condition || cat.condition(text),
  );
  const visibleCategories = showAll
    ? filteredCategories
    : filteredCategories.slice(0, INITIAL_COUNT);

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

  // Save text to history (debounced 1.5s after last keystroke)
  useEffect(() => {
    if (historyTimerRef.current) clearTimeout(historyTimerRef.current);
    if (text.trim().length >= 2) {
      historyTimerRef.current = setTimeout(() => addEntry(text), 1500);
    }
    return () => { if (historyTimerRef.current) clearTimeout(historyTimerRef.current); };
  }, [text, addEntry]);

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
      if (historyTimerRef.current) clearTimeout(historyTimerRef.current);
    };
  }, []);

  const fallbackCopy = useCallback((value: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
    } catch {
      // silent fail — UI still shows copied feedback
    }
    document.body.removeChild(textarea);
  }, []);

  const handleCopy = useCallback((converted: string, id: string) => {
    const onSuccess = () => {
      setCopiedId(id);
      setCopyCount((c) => c + 1);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedId(null), 2000);
    };

    // Try modern Clipboard API first
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(converted).then(onSuccess).catch(() => {
        // Fallback for insecure contexts or permission denied
        fallbackCopy(converted);
        onSuccess();
      });
    } else {
      // Fallback for older browsers / insecure contexts
      fallbackCopy(converted);
      onSuccess();
    }
  }, [fallbackCopy]);

  const displayText = text || defaultText;

  const handlePreview = useCallback((t: string) => setPreviewText(t), []);
  const handleDownload = useCallback((t: string, name: string) => setDownloadInfo({ text: t, styleName: name }), []);
  const handleScalePreview = useCallback((t: string) => setScalePreviewText(t), []);

  const handleExploreMore = () => {
    setIsLoadingMore(true);
    if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
    loadMoreTimerRef.current = setTimeout(() => {
      setShowAll(true);
      setIsLoadingMore(false);
    }, 300);
  };

  const decreaseSize = () => {
    setFontSize((prev) => Math.max(MIN_SIZE, prev - STEP));
  };

  const increaseSize = () => {
    setFontSize((prev) => Math.min(maxSize, prev + STEP));
  };

  return (
    <>
      {/* Compact header + generator tool — tool-first layout */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
        {!hideHeader && (
          <>
            <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight text-on-background mb-2 md:mb-3">
              Aesthetic Fonts Copy and Paste
            </h1>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 text-sm md:text-lg">
              Give your words a fresh and modern look with over 120 aesthetic
              fonts, perfect for quotes, creative posts, and visual storytelling.
            </p>
          </>
        )}
        {/* Generator Block: Input + Slider */}
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          <div className="relative">
            <svg className="absolute left-4 md:left-8 top-4 md:top-8 w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <textarea
              className="w-full min-h-[56px] md:min-h-[120px] pl-11 md:pl-16 pr-4 md:pr-8 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
              placeholder="Type or paste your text here..."
              aria-label="Enter text to transform into aesthetic font styles"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {/* Character Counter + Font Size Slider */}
          <div className="rounded-2xl bg-surface-container-low p-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${text.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
                <span className="font-semibold text-sm">Tt</span>
                Character Count:{" "}
                <span className="font-semibold">{text.length}</span>
              </span>
              {charWeightFn && (
                <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${charWeightMax && charWeightFn(text) > charWeightMax ? "text-error" : "text-on-surface-variant"}`}>
                  <span className="font-semibold text-sm">𝕏</span>
                  {charWeightLabel || "Weight"}:{" "}
                  <span className="font-semibold">{charWeightFn(text)}</span>
                  {charWeightMax && <span>/ {charWeightMax}</span>}
                </span>
              )}
              <TextHistory onSelect={(t) => setText(t)} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant font-body font-medium hidden sm:inline">Size</span>
              <button
                onClick={decreaseSize}
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                aria-label="Decrease font size"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /></svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <span className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right">
                {fontSize}px
              </span>
            </div>
          </div>
          <CategoryJumpLinks
            categories={customCategories ? filteredCategories.map((cat) => ({
              label: cat.name,
              emoji: CATEGORY_EMOJIS[cat.name] || "\u2726",
              id: `cat-${slugify(cat.name)}`,
            })) : homeCategoryLinks}
            onExpandAll={() => setShowAll(true)}
          />
        </div>
      </section>

      {/* Ad Slot — hidden pre-launch, toggle by removing 'hidden' class */}
      <section className="hidden my-14 px-4 md:px-[150px]">
        <div className="w-full h-[150px] bg-surface-container-low items-center justify-center rounded-xl overflow-hidden border-none">
          <div className="bg-surface p-4 rounded-lg text-center shadow-sm">
            <span className="text-label text-on-surface-variant uppercase tracking-widest text-[10px] block mb-2">
              Sponsored Placement
            </span>
            <div className="w-32 h-6 bg-surface-container-highest animate-pulse rounded" />
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Font Category Cards — Progressive 3+7 loading */}
      <section
        id={RESULTS_ID}
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
      >
        {/* Dynamic Font Counter Badge */}
        {!hideExploreButton && (
          <div className="flex justify-end mb-5">
            <Link
              href="/all-tools"
              title="Browse all aesthetic font generators and text styling tools — explore every style in one place"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline text-sm font-bold tracking-tight text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0px_8px_24px_rgba(155,89,182,0.3)] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #7c4daf 0%, #a94d73 100%)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-12" aria-hidden="true"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" /></svg>
              Explore {totalFontStyles} Font Styles
            </Link>
          </div>
        )}

        {wrapSymbols && wrapSymbols.length > 0 && (
          <div className="mb-6 rounded-2xl bg-surface-container-low p-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-headline text-sm font-bold tracking-tight text-on-background">
                Wrap with a symbol
              </span>
              {wrapSymbol && (
                <button
                  onClick={() => setWrapSymbol(null)}
                  className="text-xs font-body text-primary hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {wrapSymbols.map(({ label, symbol }) => {
                const active = wrapSymbol === symbol;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setWrapSymbol(active ? null : symbol)}
                    title={`Wrap with ${label}`}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-body transition-all ${
                      active
                        ? "bg-primary text-on-primary"
                        : "bg-surface hover:bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    <span aria-hidden="true" className="text-base leading-none">{symbol}</span>
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category, index) => (
            <div
              key={category.name}
              id={`cat-${slugify(category.name)}`}
              className="animate-card-fade-in scroll-mt-28"
              style={index >= 2 ? { contentVisibility: "auto", containIntrinsicSize: "auto 600px" } : undefined}
            >
              <FontCategoryCard
                category={category}
                text={displayText}
                fontSize={fontSize}
                copiedId={copiedId}
                onCopy={handleCopy}
                isDark={DARK_CATEGORIES.has(category.name)}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onPreview={handlePreview}
                onDownload={handleDownload}
                onScalePreview={enableScalePreview ? handleScalePreview : undefined}
                wrapSymbol={wrapSymbol}
              />
            </div>
          ))}
        </div>

        {/* Explore More Button — loads remaining deferred categories */}
        {!showAll && filteredCategories.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleExploreMore}
              disabled={isLoadingMore}
              className="px-8 py-4 border-2 border-primary/20 text-primary font-headline font-bold rounded-xl hover:bg-primary/5 transition-colors tracking-tight flex items-center gap-2 disabled:opacity-70"
            >
              {isLoadingMore ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  Loading...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Show {filteredCategories.length - INITIAL_COUNT} More Categories
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              )}
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
          Style Copied to Clipboard
        </div>
      )}

      {/* Platform Preview Modal — code-split */}
      {previewText && (
        <Suspense fallback={null}>
          <PlatformPreview text={previewText} onClose={() => setPreviewText(null)} />
        </Suspense>
      )}

      {/* Download as Image Modal — code-split */}
      {downloadInfo && (
        <Suspense fallback={null}>
          <DownloadImage
            text={downloadInfo.text}
            styleName={downloadInfo.styleName}
            onClose={() => setDownloadInfo(null)}
          />
        </Suspense>
      )}

      {/* Preview at Scale Modal — code-split */}
      {scalePreviewText !== null && (
        <Suspense fallback={null}>
          <ScalePreview text={scalePreviewText} onClose={() => setScalePreviewText(null)} />
        </Suspense>
      )}
    </>
  );
}
