"use client";

import { useState, useCallback, useRef, useEffect, lazy, Suspense } from "react";
import { cursiveUnicodeStyles, cursiveCategories } from "./cursiveUnicodeStyles";
import { useFavorites } from "../lib/useFavorites";
import { useTextHistory } from "../lib/useTextHistory";
import FavoritesSection from "../components/FavoritesSection";
import ShareButtons from "../components/ShareButtons";
import CategoryJumpLinks, { slugify } from "../components/CategoryJumpLinks";
import TextHistory from "../components/TextHistory";

const PlatformPreview = lazy(() => import("../components/PlatformPreview"));
const DownloadImage = lazy(() => import("../components/DownloadImage"));

/* ── Constants ───────────────────────────────────────────────────────── */

const RESULTS_ID = "cursive-font-results";
const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const INITIAL_COUNT = 3;

const CURSIVE_EMOJIS: Record<string, string> = {
  "Handwriting Cursive": "\u270d\ufe0f",
  "Playful Script": "\ud83c\udfad",
  "Elegant Cursive": "\ud83d\udc51",
  "Brush & Marker": "\ud83d\udd8c\ufe0f",
  "School & Guides": "\ud83d\udcdd",
  "Chunky Fun": "\ud83d\udcaa",
  "Retro Vintage": "\ud83c\udfb6",
  "Cultural Brush": "\ud83c\udf0f",
};

/* ── Component ───────────────────────────────────────────────────────── */

export default function CursiveFontGenerator() {
  const [inputText, setInputText] = useState("");
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
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<{ text: string; styleName: string } | null>(null);
  const historyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const categories = cursiveCategories as unknown as string[];
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, INITIAL_COUNT);

  const activeText = inputText.trim() || "Cursive Fonts";

  /* Cap max font size on mobile */
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

  /* Clean up pending timers on unmount */
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
      /* silent */
    }
    document.body.removeChild(textarea);
  }, []);

  const handleCopy = useCallback(
    (value: string, id: string) => {
      const onSuccess = () => {
        setCopiedId(id);
        setCopyCount((c) => c + 1);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopiedId(null), 2000);
      };

      if (
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        navigator.clipboard
          .writeText(value)
          .then(onSuccess)
          .catch(() => {
            fallbackCopy(value);
            onSuccess();
          });
      } else {
        fallbackCopy(value);
        onSuccess();
      }
    },
    [fallbackCopy],
  );

  const handleExploreMore = () => {
    setIsLoadingMore(true);
    window.dispatchEvent(new Event("cursive-explore-more"));
    if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
    loadMoreTimerRef.current = setTimeout(() => {
      setShowAll(true);
      setIsLoadingMore(false);
    }, 300);
  };

  const decreaseSize = () =>
    setFontSize((prev) => Math.max(MIN_SIZE, prev - STEP));
  const increaseSize = () =>
    setFontSize((prev) => Math.min(maxSize, prev + STEP));

  return (
    <>
      {/* Generator Block: Input + Size Controls */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
        <div className="relative w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          {/* Input with pencil icon */}
          <div className="relative">
            <svg className="absolute left-4 md:left-8 top-4 md:top-8 w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <textarea
              className="w-full min-h-[56px] md:min-h-[120px] pl-11 md:pl-16 pr-4 md:pr-8 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
              placeholder="Type or Paste your text here..."
              aria-label="Enter text to convert into cursive fonts"
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
              <span
                aria-live="polite"
                className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right"
              >
                {fontSize}px
              </span>
            </div>
          </div>
          <CategoryJumpLinks
            categories={categories.map((cat) => ({
              label: cat,
              emoji: CURSIVE_EMOJIS[cat] || "\u2726",
              id: `cat-${slugify(cat)}`,
            }))}
            onExpandAll={() => setShowAll(true)}
          />
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Ad Slot — hidden, kept in code */}
      <section className="hidden my-14 px-4 md:px-[150px]">
        <div className="w-full h-[150px] bg-surface-container-low items-center justify-center rounded-xl overflow-hidden border-none">
          <div className="bg-surface p-4 rounded-lg text-center shadow-sm">
            <span className="text-label text-on-surface-variant uppercase tracking-widest text-[10px] block mb-2">
              Advertisements
            </span>
            <div className="w-32 h-6 bg-surface-container-highest animate-pulse rounded" />
          </div>
        </div>
      </section>

      {/* Unicode Style Category Cards — Progressive loading */}
      <section
        id={RESULTS_ID}
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <div
              key={category}
              id={`cat-${slugify(category)}`}
              className="animate-card-fade-in scroll-mt-28"
              style={{ contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}
            >
              <div className="rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300">
                <strong className="block font-headline text-xl font-bold mb-6 text-on-background">
                  {category}
                </strong>
                <div className="space-y-3">
                  {(cursiveUnicodeStyles[category] ?? []).map((style) => {
                    const styleId = `${category}-${style.name}`;
                    const isCopied = copiedId === styleId;
                    const transformed = style.transform(activeText);

                    return (
                      <div
                        key={style.name}
                        className="flex flex-col p-4 gap-3 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                      >
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-on-surface-variant bg-surface-container-high">
                            {style.name}
                          </span>
                          <div
                            aria-hidden="true"
                            className="font-body break-all overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark-preview-text min-h-[1.5em]"
                            style={{ fontSize: `${fontSize}px`, lineHeight: 1.5 }}
                          >
                            {transformed}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap relative z-10">
                          <button
                            onClick={() => setPreviewText(transformed)}
                            className="flex flex-col items-center justify-center w-10 rounded-full transition-all text-on-surface-variant hover:text-primary"
                            aria-label="Preview on platform"
                            title="Preview on platform"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            <span className="text-[0.6rem] font-medium leading-none mt-0.5">Preview</span>
                          </button>
                          <button
                            onClick={() => setDownloadInfo({ text: transformed, styleName: style.name })}
                            className="flex flex-col items-center justify-center w-10 rounded-full transition-all text-on-surface-variant hover:text-primary"
                            aria-label="Download as image"
                            title="Download as image"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            <span className="text-[0.6rem] font-medium leading-none mt-0.5">Image</span>
                          </button>
                          <ShareButtons text={transformed} />
                          <button
                            onClick={() => toggleFavorite({ id: styleId, styleName: style.name, categoryName: category, text: transformed })}
                            className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                              isFavorite(styleId)
                                ? "text-[#dc2626]"
                                : "text-on-surface-variant hover:text-[#dc2626]"
                            }`}
                            aria-label={isFavorite(styleId) ? "Saved to favorites" : "Save to favorites"}
                          >
                            {isFavorite(styleId) ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            )}
                            <span className="text-[0.6rem] font-medium leading-none mt-0.5">{isFavorite(styleId) ? "Saved" : "Save"}</span>
                          </button>
                          <button
                            onClick={() => handleCopy(transformed, styleId)}
                            aria-label={
                              isCopied
                                ? `Copied ${style.name} cursive text`
                                : `Copy ${style.name} cursive text to clipboard`
                            }
                            className={`flex-shrink-0 w-10 rounded-full font-bold transition-all flex flex-col items-center justify-center ${
                              isCopied
                                ? "bg-[#15803d] text-white"
                                : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                            }`}
                          >
                            {isCopied ? (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            )}
                            <span className="text-[0.6rem] font-medium leading-none mt-0.5">{isCopied ? "Done" : "Copy"}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button — loads remaining categories */}
        {!showAll && categories.length > INITIAL_COUNT && (
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          Text Copied to Clipboard
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
