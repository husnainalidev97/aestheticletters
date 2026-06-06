"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import FontCategoryCard from "../components/FontCategoryCard";
import { cuteFontCategories } from "../lib/cuteFontStyles";
import type { FontCategory } from "../lib/fontStyles";
import { useFavorites } from "../lib/useFavorites";
import FavoritesSection from "../components/FavoritesSection";
import CuteGoogleFontsLoader from "./CuteGoogleFontsLoader";
import CategoryJumpLinks, { slugify } from "../components/CategoryJumpLinks";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const DEFAULT_TEXT = "Cute Fonts";

/** Priority 1 — rendered on first paint. */
const INITIAL_COUNT = 4;

/** Categories that receive the dark card treatment. */
const DARK_CATEGORIES = new Set(["Ornate Borders", "Glittering Stars"]);

const CUTE_EMOJIS: Record<string, string> = {
  "Pretty Fonts": "🌸",
  "Sweetheart Lettering": "💕",
  "Glittering Stars": "✨",
  "Lollipop Swirls": "🍭",
  "Love Notes": "💌",
  "Pixie Dust": "🧚",
  "Ornate Borders": "🎨",
  "Bouncy Blossoms": "🌻",
  "Petal & Bloom": "🌺",
  "Sweet Ribbons": "🎀",
};

const cuteCategoryLinks = (cuteFontCategories as unknown as { name: string }[]).map((cat) => ({
  label: cat.name,
  emoji: CUTE_EMOJIS[cat.name] || "✦",
  id: `cat-${slugify(cat.name)}`,
}));

export default function CuteFontsClient() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [showAll, setShowAll] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyCount, setCopyCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();

  const activeText = inputText.trim() || DEFAULT_TEXT;

  const visibleCategories: FontCategory[] = showAll
    ? cuteFontCategories
    : cuteFontCategories.slice(0, INITIAL_COUNT);

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
    return () => {
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleExploreMore = useCallback(() => {
    setIsLoadingMore(true);
    window.dispatchEvent(new Event("cute-explore-more"));
    if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
    loadMoreTimerRef.current = setTimeout(() => {
      setShowAll(true);
      setIsLoadingMore(false);
    }, 300);
  }, []);

  const handleCopy = useCallback((text: string, id: string) => {
    const onSuccess = () => {
      setCopiedId(id);
      setCopyCount((c) => c + 1);
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
      <CuteGoogleFontsLoader />
      {/* Input Row — compact, no Generate button */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-3 md:pb-8">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              aria-label="Enter text to transform into cute fonts"
              className="flex-1 h-12 md:h-14 px-4 md:px-6 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={() => setShowSettings((v) => !v)}
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-all"
              aria-label="Toggle font size settings"
              aria-expanded={showSettings}
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>

          {/* Collapsible settings panel */}
          {showSettings && (
            <div className="mt-2 rounded-xl bg-surface-container-low p-3 flex items-center justify-between gap-3 animate-card-fade-in">
              <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${inputText.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
                <span className="font-semibold text-sm">Tt</span>
                <span className="font-semibold">{inputText.length}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseSize}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                  aria-label="Decrease font size"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <input
                  type="range"
                  min={MIN_SIZE}
                  max={maxSize}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  aria-label="Adjust font preview size"
                  className="font-size-slider w-24 sm:w-32 md:w-40 h-1.5 appearance-none rounded-full bg-outline-variant/40 cursor-pointer"
                />
                <button
                  onClick={increaseSize}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
                  aria-label="Increase font size"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
                <span className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right">
                  {fontSize}px
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Font Category Cards — immediately below input */}
      <section
        id="cute-font-results"
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
                isDark={DARK_CATEGORIES.has(category.name)}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>

        {/* Category Jump Links — below first batch of results */}
        {!showAll && (
          <div className="mt-8">
            <CategoryJumpLinks
              categories={cuteCategoryLinks}
              onExpandAll={() => setShowAll(true)}
            />
          </div>
        )}

        {!showAll && (
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
                  Explore More Styles
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
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
