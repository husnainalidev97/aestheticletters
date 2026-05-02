"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { fontCategories } from "../lib/fontStyles";
import FontCategoryCard from "./FontCategoryCard";

const RESULTS_ID = "font-results";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 18;
const STEP = 2;

/** Priority 1 — rendered on first paint. */
const INITIAL_COUNT = 4;

/** Categories that receive the dark card treatment. */
const DARK_CATEGORIES = new Set(["Dark Aesthetic", "Glitch"]);

interface FontGeneratorProps {
  totalFontStyles: number;
}

export default function FontGenerator({ totalFontStyles }: FontGeneratorProps) {
  const [text, setText] = useState("Aesthetic Fonts");
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

  const visibleCategories = showAll
    ? fontCategories
    : fontCategories.slice(0, INITIAL_COUNT);

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

  const displayText = text || "Aesthetic Fonts";

  const handleGenerate = () => {
    setGenerateFlash(true);
    if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    generateTimerRef.current = setTimeout(() => setGenerateFlash(false), 1500);

    const el = document.getElementById(RESULTS_ID);
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
      {/* Hero Section with Input */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
        <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight text-on-background mb-6">
          Aesthetic Fonts
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
          Give your words a fresh and modern look with over 120 aesthetic
          fonts, perfect for quotes, creative posts, and visual storytelling.
        </p>
        {/* Generator Block: Input + Button + Slider */}
        <div className="relative w-full max-w-3xl mx-auto space-y-5">
          {/* Input with Generate button */}
          <div className="relative">
            <textarea
              className="w-full min-h-[120px] p-8 pr-36 text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none"
              placeholder="Type or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
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
          {/* Character Counter & Styles Available */}
          <div className="flex items-center justify-between px-1">
            <span className="flex items-center gap-1.5 text-xs font-body text-on-surface-variant">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="font-semibold text-primary">{totalFontStyles}</span>{" "}
              styles available
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${text.length > 150 ? "text-error" : "text-on-surface-variant"}`}>
              <span className="font-semibold text-sm">Tt</span>
              Character Count:{" "}
              <span className="font-semibold">{text.length}</span>
            </span>
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

      {/* Ad Slot — hidden pre-launch, toggle by removing 'hidden' class */}
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

      {/* Font Category Cards — Progressive 3+7 loading */}
      <section
        id={RESULTS_ID}
        className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24 scroll-mt-[5.5rem]"
      >
        {/* Dynamic Font Counter Badge */}
        <div className="flex justify-end mb-5">
          <Link
            href="/all-tools"
            title="Browse all aesthetic font generators and text styling tools — explore every style in one place"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline text-sm font-bold tracking-tight text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0px_8px_24px_rgba(155,89,182,0.3)] active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #9b6dd7 0%, #e888b0 100%)",
            }}
          >
            <span
              className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-12"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            Explore {totalFontStyles}+ Font Styles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <div key={category.name} className="animate-card-fade-in">
              <FontCategoryCard
                category={category}
                text={displayText}
                fontSize={fontSize}
                copiedId={copiedId}
                onCopy={handleCopy}
                isDark={DARK_CATEGORIES.has(category.name)}
              />
            </div>
          ))}
        </div>

        {/* Explore More Button — loads remaining 7 deferred categories */}
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
