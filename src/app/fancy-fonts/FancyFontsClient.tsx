"use client";

import { useState, useCallback, useRef, useEffect, lazy, Suspense } from "react";
import FontCategoryCard from "../components/FontCategoryCard";
import { fancyFontCategories } from "../lib/fancyFontStyles";
import type { FontCategory } from "../lib/fontStyles";
import { useFavorites } from "../lib/useFavorites";
import { useTextHistory } from "../lib/useTextHistory";
import FavoritesSection from "../components/FavoritesSection";
import CategoryJumpLinks, { slugify } from "../components/CategoryJumpLinks";
import TextHistory from "../components/TextHistory";

const PlatformPreview = lazy(() => import("../components/PlatformPreview"));
const DownloadImage = lazy(() => import("../components/DownloadImage"));

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const DEFAULT_TEXT = "";

/** Priority 1 — rendered on first paint. */
const INITIAL_COUNT = 2;

const FANCY_EMOJIS: Record<string, string> = {
  "Bold Artistic Styles": "💪",
  "Fancy Line Effects": "✨",
  "Monospace & Typewriter": "⌨️",
  "Symbol\u2011Enhanced Fonts": "🔮",
  "Dynamic Text Styles": "🚀",
  "Block & Frame Fonts": "🟦",
  "Ornate & Beautiful Fonts": "👑",
  "Minimal Fancy Texts": "🧘",
  "Mirror & Reverse Fonts": "🪞",
  "Curve & Flow Styles": "🌊",
  "Decorative Dot & Marks": "🎨",
  "Artistic Fonts": "🎭",
};

const fancyCategoryLinks = (fancyFontCategories as unknown as { name: string }[]).map((cat) => ({
  label: cat.name,
  emoji: FANCY_EMOJIS[cat.name] || "✦",
  id: `cat-${slugify(cat.name)}`,
}));

export default function FancyFontsClient() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [showAll, setShowAll] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const { addEntry } = useTextHistory();
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<{ text: string; styleName: string } | null>(null);
  const historyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeText = inputText.trim() || "Fancy Fonts";

  const visibleCategories = (showAll
    ? fancyFontCategories
    : fancyFontCategories.slice(0, INITIAL_COUNT)) as unknown as FontCategory[];

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
    if (inputText.trim().length >= 2) {
      historyTimerRef.current = setTimeout(() => addEntry(inputText), 1500);
    }
    return () => { if (historyTimerRef.current) clearTimeout(historyTimerRef.current); };
  }, [inputText, addEntry]);

  useEffect(() => {
    return () => {
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      if (historyTimerRef.current) clearTimeout(historyTimerRef.current);
    };
  }, []);

  const handleExploreMore = useCallback(() => {
    setIsLoadingMore(true);
    if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
    loadMoreTimerRef.current = setTimeout(() => {
      setShowAll(true);
      setIsLoadingMore(false);
    }, 300);
  }, []);

  const handleCopy = useCallback((text: string, id: string) => {
    const onSuccess = () => {
      setCopiedId(id);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try { document.execCommand("copy"); } catch { /* silent */ }
        document.body.removeChild(textarea);
        onSuccess();
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try { document.execCommand("copy"); } catch { /* silent */ }
      document.body.removeChild(textarea);
      onSuccess();
    }
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
          <div className="relative">
            <svg className="absolute left-4 md:left-8 top-4 md:top-8 w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <textarea
              id="fancy-fonts-input"
              aria-label="Enter text to transform into fancy fonts"
              className="w-full min-h-[56px] md:min-h-[120px] pl-11 md:pl-16 pr-4 md:pr-8 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
              placeholder="Type or paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          {/* Character Counter + Font Size Slider */}
          <div className="rounded-2xl bg-surface-container-low p-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${inputText.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
                <span className="font-semibold text-sm">Tt</span>
                Character Count:{" "}
                <span className="font-semibold">{inputText.length}</span>
              </span>
              <TextHistory onSelect={(t) => setInputText(t)} />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseSize}
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                aria-label="Decrease font size"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <input
                type="range"
                min={MIN_SIZE}
                max={maxSize}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                aria-label="Adjust font preview size"
                className="font-size-slider flex-1 sm:w-40 md:w-48 h-1.5 appearance-none rounded-full bg-outline-variant/40 cursor-pointer"
              />
              <button
                onClick={increaseSize}
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                aria-label="Increase font size"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <span className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right">
                {fontSize}px
              </span>
            </div>
          </div>
          <CategoryJumpLinks
            categories={fancyCategoryLinks}
            onExpandAll={() => setShowAll(true)}
          />
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Font Category Cards — Same layout as Home Page */}
      <section
        id="fancy-font-results"
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <div key={category.name} id={`cat-${slugify(category.name)}`} className="animate-card-fade-in scroll-mt-28">
              <FontCategoryCard
                category={category}
                text={activeText}
                fontSize={fontSize}
                copiedId={copiedId}
                onCopy={handleCopy}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onPreview={(t) => setPreviewText(t)}
                onDownload={(t, name) => setDownloadInfo({ text: t, styleName: name })}
                initialVisibleStyles={4}
              />
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleExploreMore}
              disabled={isLoadingMore}
              className="px-8 py-4 border-2 border-primary/20 text-primary font-headline font-bold rounded-xl hover:bg-primary/5 transition-colors tracking-tight flex items-center gap-2 disabled:opacity-70"
            >
              <span aria-live="polite">
                {isLoadingMore ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Loading...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Explore More Styles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                )}
              </span>
            </button>
          </div>
        )}
      </section>

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
