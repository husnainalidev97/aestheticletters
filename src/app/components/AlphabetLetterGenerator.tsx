"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import CompactStyleCard from "./CompactStyleCard";
import FontResultCard from "./FontResultCard";
import type { FontCategory } from "../lib/fontStyles";
import { fontCategories } from "../lib/fontStyles";
import { letterRStyles } from "../lib/alphabetFontStyles";

interface AlphabetLetterGeneratorProps {
  letter: string;
  defaultText?: string;
  hideInputHeader?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 40;
const MAX_SIZE_MOBILE = 30;
const DEFAULT_SIZE = 24;
const STEP = 2;
const MAX_SYMBOL_STYLES = 25;

type SymbolStyle = {
  name: string;
  text: string;
  category: string;
  key?: string;
};

function getStylesForText(
  text: string,
  categories: FontCategory[],
): SymbolStyle[] {
  const results: { name: string; text: string; category: string }[] = [];
  const seen = new Set<string>();

  for (const category of categories) {
    if (category.condition && !category.condition(text)) continue;

    category.styles.forEach((style, index) => {
      let converted = style.transform(text);

      if (category.symbols && category.symbols.length > 0) {
        const offset = category.symbolOffset ?? 0;
        const sym = category.symbols[((index + offset) * 37) % category.symbols.length];
        converted = `${sym} ${converted} ${sym}`;
      }

      // Skip styles that did not actually change the letter and have no decoration.
      if (converted === text && !category.symbols) return;
      // Skip duplicate outputs (keep the first style name that produces them).
      if (seen.has(converted)) return;
      seen.add(converted);

      results.push({
        name: style.name,
        text: converted,
        category: category.name,
      });
    });
  }

  return results;
}

export default function AlphabetLetterGenerator({
  letter,
  defaultText,
  hideInputHeader,
  value,
  onChange,
}: AlphabetLetterGeneratorProps) {
  const upperLetter = letter.toUpperCase();
  const lowerLetter = upperLetter.toLowerCase();
  const [internalText, setInternalText] = useState(defaultText ?? upperLetter);
  const text = value !== undefined ? value : internalText;

  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [maxSize, setMaxSize] = useState(MAX_SIZE_DESKTOP);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalText(newValue);
    }
    onChange?.(newValue);
  };

  const fallbackCopy = (copyText: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = copyText;
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
      // silent
    }
    document.body.removeChild(textarea);
  };

  const handleSymbolGridCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const btn = target.closest("button[data-text]") as HTMLButtonElement | null;
    if (!btn) return;
    const copyText = btn.getAttribute("data-text") ?? "";
    if (!copyText) return;

    const onSuccess = () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      setCopiedKey(copyText);
      copyTimerRef.current = setTimeout(() => setCopiedKey(null), 1500);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(copyText).then(onSuccess).catch(() => {
        fallbackCopy(copyText);
        onSuccess();
      });
    } else {
      fallbackCopy(copyText);
      onSuccess();
    }
  };

  const decreaseSize = () => {
    setFontSize((prev) => Math.max(MIN_SIZE, prev - STEP));
  };

  const increaseSize = () => {
    setFontSize((prev) => Math.min(maxSize, prev + STEP));
  };

  const upperText = text.toUpperCase();
  const lowerText = text.toLowerCase();

  const standardStyles = useMemo(
    () =>
      letterRStyles.map((style) => ({
        name: style.name,
        text: `${style.transform(upperText)} ${style.transform(lowerText)}`,
      })),
    [upperText, lowerText],
  );

  const [visibleStandardCount, setVisibleStandardCount] = useState(4);

  useEffect(() => {
    if (visibleStandardCount >= standardStyles.length) return;
    const nextCount = Math.min(visibleStandardCount + 4, standardStyles.length);
    let id: number | undefined;
    const cancel = () => {
      if (id !== undefined) {
        if ("cancelIdleCallback" in globalThis) globalThis.cancelIdleCallback(id);
        else globalThis.clearTimeout(id);
      }
    };
    if ("requestIdleCallback" in globalThis) {
      id = globalThis.requestIdleCallback(() => setVisibleStandardCount(nextCount), { timeout: 200 });
    } else {
      id = globalThis.setTimeout(() => setVisibleStandardCount(nextCount), 200) as unknown as number;
    }
    return cancel;
  }, [visibleStandardCount, standardStyles.length]);

  const [capitalVisible, setCapitalVisible] = useState(false);
  const [smallVisible, setSmallVisible] = useState(false);
  const capitalRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      let cancelled = false;
      const id = setTimeout(() => {
        if (!cancelled) {
          setCapitalVisible(true);
          setSmallVisible(true);
        }
      }, 0);
      return () => {
        cancelled = true;
        clearTimeout(id);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === capitalRef.current) setCapitalVisible(true);
          if (entry.target === smallRef.current) setSmallVisible(true);
        });
      },
      { rootMargin: "100px", threshold: 0 },
    );
    if (capitalRef.current) observer.observe(capitalRef.current);
    if (smallRef.current) observer.observe(smallRef.current);
    return () => observer.disconnect();
  }, []);

  const symbolStyles = useMemo(
    () => ({
      capital: capitalVisible
        ? getStylesForText(upperText, fontCategories).slice(0, MAX_SYMBOL_STYLES)
        : [],
      small: smallVisible
        ? getStylesForText(lowerText, fontCategories).slice(0, MAX_SYMBOL_STYLES)
        : [],
    }),
    [upperText, lowerText, capitalVisible, smallVisible],
  );

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6">
      {!hideInputHeader && (
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-headline text-xl md:text-3xl font-bold text-on-background mb-2">
            Type a letter or word
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-xl mx-auto mb-5">
            The cards below update live. Keep it to one letter to see both the
            uppercase and lowercase forms side by side.
          </p>
        </div>
      )}

      <div className="relative w-full max-w-3xl mx-auto space-y-5">
        <div className="relative">
          <svg
            className="absolute left-4 md:left-8 top-4 md:top-8 w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/60 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
          <textarea
            className="w-full min-h-[56px] md:min-h-[120px] pl-11 md:pl-16 pr-4 md:pr-8 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
            placeholder="Type or paste your text here..."
            aria-label={`Enter text to transform into ${upperLetter} font styles`}
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        {/* Character Counter + Font Size Slider */}
        <div className="rounded-2xl bg-surface-container-low p-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`flex items-center gap-1.5 text-xs font-body tabular-nums ${
                text.length > 150 ? "text-error" : "text-on-surface-variant"
              }`}
            >
              <span className="font-semibold text-sm">Tt</span>
              Character Count:{" "}
              <span className="font-semibold">{text.length}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-on-surface-variant font-body font-medium hidden sm:inline">
              Size
            </span>
            <button
              onClick={decreaseSize}
              className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all select-none"
              aria-label="Decrease font size"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <span className="text-xs text-on-surface-variant font-body tabular-nums w-10 text-right">
              {fontSize}px
            </span>
          </div>
        </div>
      </div>

      {/* Standard Unicode Styles — uppercase + lowercase together */}
      <div className="mt-10">
        <h2 className="font-headline text-xl md:text-2xl font-bold text-center text-on-background mb-6">
          Standard {upperLetter} Fonts
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {standardStyles.slice(0, visibleStandardCount).map((style) => (
            <FontResultCard
              key={`standard-${style.name}`}
              label={style.name}
              text={style.text}
              fontSize={fontSize}
              stacked
            />
          ))}
        </div>
      </div>

      {/* Ad Slot */}
      <div className="my-10 px-4 md:px-0">
        <div className="w-full h-[150px] bg-surface-container-low flex items-center justify-center rounded-xl overflow-hidden border border-outline-variant/10">
          <div className="text-center">
            <span className="text-label text-on-surface-variant uppercase tracking-widest text-[10px] block mb-2">
              Advertisement
            </span>
            <div className="w-32 h-6 bg-surface-container-highest animate-pulse rounded" />
          </div>
        </div>
      </div>

      {/* Capital Letter Symbol Styles */}
      <div ref={capitalRef}>
        <h2 className="font-headline text-xl md:text-2xl font-bold text-center text-on-background mb-6">
          Capital Letter &apos;{upperLetter}&apos; with Symbols
        </h2>
        {symbolStyles.capital.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3" onClick={handleSymbolGridCopy}>
            {symbolStyles.capital.map((style) => (
              <CompactStyleCard
                key={`capital-${style.category}-${style.name}`}
                label={`${style.category} – ${style.name}`}
                text={style.text}
                fontSize={fontSize}
                copied={copiedKey === style.text}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-[240px] rounded-xl bg-surface-container-low/30" aria-hidden="true" />
        )}
      </div>

      {/* Ad Slot */}
      <div className="my-10 px-4 md:px-0">
        <div className="w-full h-[150px] bg-surface-container-low flex items-center justify-center rounded-xl overflow-hidden border border-outline-variant/10">
          <div className="text-center">
            <span className="text-label text-on-surface-variant uppercase tracking-widest text-[10px] block mb-2">
              Advertisement
            </span>
            <div className="w-32 h-6 bg-surface-container-highest animate-pulse rounded" />
          </div>
        </div>
      </div>

      {/* Small Letter Symbol Styles */}
      <div ref={smallRef}>
        <h2 className="font-headline text-xl md:text-2xl font-bold text-center text-on-background mb-6">
          Small Letter &apos;{lowerLetter}&apos; with Symbols
        </h2>
        {symbolStyles.small.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3" onClick={handleSymbolGridCopy}>
            {symbolStyles.small.map((style) => (
              <CompactStyleCard
                key={`small-${style.category}-${style.name}`}
                label={`${style.category} – ${style.name}`}
                text={style.text}
                fontSize={fontSize}
                copied={copiedKey === style.text}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-[240px] rounded-xl bg-surface-container-low/30" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
