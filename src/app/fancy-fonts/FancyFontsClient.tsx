"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import FontCategoryCard from "../components/FontCategoryCard";
import { fancyFontCategories } from "../lib/fancyFontStyles";
import type { FontCategory } from "../lib/fontStyles";
import { useFavorites } from "../lib/useFavorites";
import FavoritesSection from "../components/FavoritesSection";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const DEFAULT_TEXT = "Fancy Fonts";

/** Priority 1 — rendered on first paint. */
const INITIAL_COUNT = 4;

export default function FancyFontsClient() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [showAll, setShowAll] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [generateFlash, setGenerateFlash] = useState(false);
  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();

  // The text to transform — use default when input is empty
  const activeText = inputText.trim() || DEFAULT_TEXT;

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

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    };
  }, []);

  const handleCurate = useCallback(() => {
    setGenerateFlash(true);
    if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    generateTimerRef.current = setTimeout(() => setGenerateFlash(false), 1500);

    const el = document.getElementById("fancy-font-results");
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
      {/* Generator Block: Input + Button + Slider */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-16">
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          {/* Input with Curate button */}
          <div className="relative">
            <textarea
              aria-label="Enter text to transform into fancy fonts"
              className="w-full min-h-[120px] p-8 pr-36 text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={handleCurate}
              className={`absolute right-4 bottom-4 px-6 py-2.5 font-body font-semibold text-sm rounded-lg active:scale-95 shadow-sm text-white flex items-center gap-1.5 transition-all duration-300 ${generateFlash ? "bg-[#22c55e]" : "bg-primary"}`}
            >
              {generateFlash && (
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              )}
              {generateFlash ? "Generated!" : "Generate"}
            </button>
          </div>
          {/* Character Counter + Font Size Slider */}
          <div className="flex items-center justify-between px-1">
            <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${inputText.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
              <span className="font-semibold text-sm">Tt</span>
              Character Count:{" "}
              <span className="font-semibold">{inputText.length}</span>
            </span>
            <div className="flex items-center gap-3">
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
              aria-label="Adjust font preview size"
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
            <div key={category.name} className="animate-card-fade-in">
              <FontCategoryCard
                category={category}
                text={activeText}
                fontSize={fontSize}
                copiedId={copiedId}
                onCopy={handleCopy}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
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
    </>
  );
}
