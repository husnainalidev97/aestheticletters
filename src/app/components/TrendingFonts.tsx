"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { copyToClipboard } from "../lib/clipboard";

interface TrendingFont {
  rank: string;
  label: string;
  text: string;
  best: string;
  styleSlug: string; // matches id="style-{slug}" in InstagramFontCards
}

const TRENDING_FONTS: TrendingFont[] = [
  {
    rank: "1",
    label: "The Ethereal Wing",
    text: "\u{13429} Alice \u{1342A}",
    best: "Best for: Creative bios and highlighting your name.",
    styleSlug: "ethereal-wing",
  },
  {
    rank: "2",
    label: "The Coquette Ribbon",
    text: "\u09E8\u09CE Alice \u09E8\u09CE",
    best: "Best for: Fashion, lifestyle, and \u201Csoft aesthetic\u201D profiles.",
    styleSlug: "coquette-ribbon",
  },
  {
    rank: "3",
    label: "Modern Sans Spaced",
    text: "A\u200Al\u200Ai\u200Ac\u200Ae",
    best: "Best for: Professional, clean, and high-end brand captions.",
    styleSlug: "modern-sans-spaced",
  },
  {
    rank: "4",
    label: "The Glow Up (Stacked)",
    text: "A\u030Al\u030Ai\u030Ac\u030Ae\u030A",
    best: "Best for: Highlighting specific keywords or \u201CNew Post\u201D alerts.",
    styleSlug: "glow-up",
  },
  {
    rank: "5",
    label: "Gothic Fraktur",
    text: "\uD835\uDD6C\uD835\uDD91\uD835\uDD8E\uD835\uDD88\uD835\uDD8A",
    best: "Best for: Edgy, streetwear, and tattoo-art styles.",
    styleSlug: "gothic-fraktur",
  },
  {
    rank: "6",
    label: "Double-Struck Luxury",
    text: "\uD835\uDD38\uD835\uDD5D\uD835\uDD5A\uD835\uDD54\uD835\uDD56",
    best: "Best for: Quotes and daily inspirations.",
    styleSlug: "double-struck-luxury",
  },
  {
    rank: "7",
    label: "Japanese Corner Brackets",
    text: "\u300E Alice \u300F",
    best: "Best for: Framing important links or announcements in bios.",
    styleSlug: "corner-brackets",
  },
  {
    rank: "8",
    label: "The Ink-Box",
    text: "\uD83C\uDD30\uD83C\uDD3B\uD83C\uDD38\uD83C\uDD32\uD83C\uDD34",
    best: "Best for: Creating a \u201Cstamped\u201D or retro look in captions.",
    styleSlug: "ink-box",
  },
  {
    rank: "9",
    label: "Strikethrough Aesthetic",
    text: "A\u0336l\u0336i\u0336c\u0336e\u0336",
    best: "Best for: Sarcastic comments or \u201CBefore & After\u201D captions.",
    styleSlug: "strikethrough-aesthetic",
  },
  {
    rank: "10",
    label: "Sparkle Script",
    text: "\u2727 \uD835\uDC9C\uD835\uDCC1\uD835\uDCBE\uD835\uDCB8\u212F \u2727",
    best: "Best for: Adding a magical or dreamy touch to your bio.",
    styleSlug: "sparkle-script",
  },
];

export default function TrendingFonts() {
  const [copiedRank, setCopiedRank] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback((text: string, rank: string) => {
    copyToClipboard(text, () => {
      setCopiedRank(rank);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedRank(null), 2000);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const scrollAndHighlight = useCallback((el: HTMLElement) => {
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    // Remove any existing animation, then add highlight
    el.classList.remove("animate-style-highlight");
    // Force reflow so re-adding the class restarts the animation
    void el.offsetWidth;
    el.classList.add("animate-style-highlight");

    // Clean up after animation
    const cleanup = () => {
      el.classList.remove("animate-style-highlight");
      el.removeEventListener("animationend", cleanup);
    };
    el.addEventListener("animationend", cleanup);
  }, []);

  const handleScrollToStyle = useCallback((slug: string) => {
    const el = document.getElementById(`style-${slug}`);
    if (el) {
      scrollAndHighlight(el);
      return;
    }

    // Style not visible yet — expand all cards first, then retry
    window.dispatchEvent(new CustomEvent("ig-expand-cards"));
    requestAnimationFrame(() => {
      setTimeout(() => {
        const retryEl = document.getElementById(`style-${slug}`);
        if (retryEl) scrollAndHighlight(retryEl);
      }, 100);
    });
  }, [scrollAndHighlight]);

  return (
    <article>
      <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
        Top 10 Trending Instagram Fonts
      </h2>
      <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
        Here are some popular fonts for instagram you can copy:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TRENDING_FONTS.map((font) => {
          const isCopied = copiedRank === font.rank;

          return (
            <div
              key={font.rank}
              className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex justify-between items-center cursor-pointer hover:border-primary/30 transition-all w-full text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleScrollToStyle(font.styleSlug);
                }
              }}
              onClick={() => handleScrollToStyle(font.styleSlug)}
              title="Click to find this style in the generator"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant font-bold">
                  {font.rank}. {font.label}
                </span>
                <div className="text-xl font-body py-2">
                  {font.text}
                </div>
                <span className="text-xs text-on-surface-variant">
                  {font.best}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(font.text, font.rank);
                  }}
                  className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                    isCopied
                      ? "bg-[#15803d] text-white"
                      : "bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary"
                  }`}
                  aria-label={isCopied ? "Copied to clipboard" : "Copy to clipboard"}
                >
                  {isCopied ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScrollToStyle(font.styleSlug);
                  }}
                  className="text-[0.6rem] text-primary hover:underline font-bold uppercase tracking-wider px-1 py-1.5 min-h-[24px]"
                >
                  Find in Generator
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
