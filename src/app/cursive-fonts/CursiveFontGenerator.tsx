"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { cursiveUnicodeStyles } from "./cursiveUnicodeStyles";
import { useFavorites } from "../lib/useFavorites";
import FavoritesSection from "../components/FavoritesSection";
import ShareButtons from "../components/ShareButtons";

/* ── Font data types ─────────────────────────────────────────────────── */

interface FontEntry {
  name: string;
  family: string;
}

interface FontCard {
  category: string;
  pill: string;
  fonts: FontEntry[];
}

/* ── Constants ───────────────────────────────────────────────────────── */

const RESULTS_ID = "cursive-font-results";
const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;
const INITIAL_COUNT = 4;

/* ── Component ───────────────────────────────────────────────────────── */

export default function CursiveFontGenerator({
  fontCards,
}: {
  fontCards: FontCard[];
}) {
  const [text, setText] = useState("Cursive Fonts");
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyCount, setCopyCount] = useState(0);
  const [generateFlash, setGenerateFlash] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();

  const visibleCards = showAll
    ? fontCards
    : fontCards.slice(0, INITIAL_COUNT);

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

  /* Clean up pending timers on unmount */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
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

  const displayText = text || "Cursive Fonts";

  const handleGenerate = () => {
    setGenerateFlash(true);
    if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    generateTimerRef.current = setTimeout(
      () => setGenerateFlash(false),
      1500,
    );
    const el = document.getElementById(RESULTS_ID);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleExploreMore = () => {
    setIsLoadingMore(true);
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
      {/* Hero Section with Input */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
        <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight text-on-background mb-6">
          Cursive Fonts - Handwritten Text Generator
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
          Creating handwritten or cursive text takes time and effort. Use this
          tool to generate cursive fonts instantly and get a clean handwritten
          look in seconds.
        </p>

        {/* Generator Block: Input + Button + Size Controls */}
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          {/* Input with Generate button */}
          <div className="relative">
            <textarea
              className="w-full min-h-[120px] p-8 pr-36 text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              aria-label="Enter text to convert into cursive fonts"
              maxLength={500}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              aria-label="Generate cursive fonts from your text"
              className="absolute right-4 bottom-4 px-6 py-2.5 font-body font-semibold text-sm rounded-lg active:scale-95 shadow-sm text-white flex items-center gap-1.5"
              style={{
                backgroundColor: generateFlash ? "#22c55e" : "#451ebb",
                transition:
                  "background-color 300ms ease, transform 100ms ease",
              }}
            >
              {generateFlash && (
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              )}
              {generateFlash ? "Generated!" : "Generate"}
            </button>
          </div>

          {/* Character Counter + Font Size Slider */}
          <div className="flex items-center justify-between px-1">
            <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${text.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
              <span className="font-semibold text-sm">Tt</span>
              Character Count:{" "}
              <span className="font-semibold">{text.length}</span>
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
              aria-label="Font size"
              className="font-size-slider w-40 md:w-48 h-1.5 appearance-none rounded-full bg-outline-variant/40 cursor-pointer"
            />
            <button
              onClick={increaseSize}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
              aria-label="Increase font size"
            >
              <span className="material-symbols-outlined text-base">add</span>
            </button>
            <span
              aria-live="polite"
              className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right"
            >
              {fontSize}px
            </span>
            </div>
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <FavoritesSection favorites={favorites} onRemove={removeFavorite} />

      {/* Ad Slot — hidden, kept in code */}
      <section className="hidden my-14 px-4 md:px-[150px]">
        <div className="w-full h-[150px] bg-surface-container-low items-center justify-center rounded-xl overflow-hidden border-none">
          <div className="bg-surface p-4 rounded-lg text-center shadow-sm">
            <span className="text-label text-outline uppercase tracking-widest text-[10px] block mb-2">
              Sponsored Placement
            </span>
            <div className="w-32 h-6 bg-surface-container-highest animate-pulse rounded" />
          </div>
        </div>
      </section>

      {/* Font Category Cards — Progressive loading */}
      <section
        id={RESULTS_ID}
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCards.map((card) => (
            <div key={card.category} className="animate-card-fade-in">
              <div className="rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300">
                <strong className="block font-headline text-xl font-bold mb-6 text-on-background">
                  {card.category}
                </strong>
                <div className="space-y-3">
                  {/* Google Font entries */}
                  {card.fonts.map((font) => {
                    const styleId = `${card.category}-${font.name}`;
                    const isCopied = copiedId === styleId;

                    return (
                      <div
                        key={font.name}
                        className="flex justify-between items-center p-4 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                      >
                        <div className="flex flex-col gap-1 min-w-0 flex-1 mr-4">
                          <span
                            className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-primary bg-primary-fixed"
                            aria-label={`${card.category} – ${font.name} font style`}
                          >
                            {font.name}
                          </span>
                          <div
                            aria-hidden="true"
                            className="font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark-preview-text"
                            style={{
                              fontSize: `${fontSize}px`,
                              fontFamily: `'${font.family}', cursive`,
                            }}
                          >
                            {displayText}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <ShareButtons text={displayText} />
                          <button
                            onClick={() => toggleFavorite({ id: styleId, styleName: font.name, categoryName: card.category, text: displayText })}
                            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                              isFavorite(styleId)
                                ? "text-[#ef4444]"
                                : "text-outline hover:text-[#ef4444]"
                            }`}
                            aria-label={isFavorite(styleId) ? "Remove from favorites" : "Add to favorites"}
                          >
                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: isFavorite(styleId) ? "'FILL' 1" : "'FILL' 0" }}>
                              favorite
                            </span>
                          </button>
                          <button
                            onClick={() => handleCopy(font.name, styleId)}
                            aria-label={
                              isCopied
                                ? `Copied ${font.name} font name`
                                : `Copy ${font.name} ${card.category} font name`
                            }
                            className={`flex-shrink-0 w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center ${
                              isCopied
                                ? "bg-[#22c55e] text-white"
                                : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                            }`}
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-lg">
                              {isCopied ? "check" : "content_copy"}
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Unicode transform entries */}
                  {(cursiveUnicodeStyles[card.category] ?? []).map(
                    (style) => {
                      const uStyleId = `${card.category}-unicode-${style.name}`;
                      const isUCopied = copiedId === uStyleId;
                      const transformed = style.transform(displayText);

                      return (
                        <div
                          key={style.name}
                          className="flex justify-between items-center p-4 rounded-xl transition-all group bg-surface hover:bg-surface-container-high"
                        >
                          <div className="flex flex-col gap-1 min-w-0 flex-1 mr-4">
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-primary bg-primary-fixed">
                              {style.name}
                            </span>
                            <div
                              aria-hidden="true"
                              className="font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark-preview-text"
                              style={{ fontSize: `${fontSize}px` }}
                            >
                              {transformed}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <ShareButtons text={transformed} />
                            <button
                              onClick={() => toggleFavorite({ id: uStyleId, styleName: style.name, categoryName: card.category, text: transformed })}
                              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                                isFavorite(uStyleId)
                                  ? "text-[#ef4444]"
                                  : "text-outline hover:text-[#ef4444]"
                              }`}
                              aria-label={isFavorite(uStyleId) ? "Remove from favorites" : "Add to favorites"}
                            >
                              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: isFavorite(uStyleId) ? "'FILL' 1" : "'FILL' 0" }}>
                                favorite
                              </span>
                            </button>
                            <button
                              onClick={() =>
                                handleCopy(transformed, uStyleId)
                              }
                              aria-label={
                                isUCopied
                                  ? `Copied ${style.name} cursive text`
                                  : `Copy ${style.name} cursive text to clipboard`
                              }
                              className={`flex-shrink-0 w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center ${
                                isUCopied
                                  ? "bg-[#22c55e] text-white"
                                  : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                              }`}
                            >
                              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                                {isUCopied ? "check" : "content_copy"}
                              </span>
                            </button>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button — loads remaining categories */}
        {!showAll && fontCards.length > INITIAL_COUNT && (
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
          role="status"
          aria-live="polite"
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-full editorial-shadow animate-slide-up flex items-center gap-4 font-headline font-bold text-sm tracking-tight"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          {copiedId?.includes("-unicode-")
            ? "Text Copied to Clipboard"
            : "Font Name Copied to Clipboard"}
        </div>
      )}
    </>
  );
}
