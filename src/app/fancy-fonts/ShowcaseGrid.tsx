"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ShareButtons from "../components/ShareButtons";

interface ShowcaseCard {
  name: string;
  pill: string;
  preview: string;
  description: string;
  tags: string[];
}

export default function ShowcaseGrid({ cards }: { cards: ShowcaseCard[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback((text: string, index: number) => {
    const onSuccess = () => {
      setCopiedIndex(index);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedIndex(null), 2000);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        fallbackCopy(text);
        onSuccess();
      });
    } else {
      fallbackCopy(text);
      onSuccess();
    }
  }, []);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      style={{ gap: "10px" }}
    >
      {cards.map((card, index) => {
        const isCopied = copiedIndex === index;

        return (
          <div
            key={card.name}
            className="text-left bg-surface-container-lowest p-6 hover:bg-surface-container-high border border-outline-variant/20 hover:border-outline-variant rounded-xl transition-all duration-300 group"
          >
            {/* Category Pill */}
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-high rounded-full mb-4">
              {card.pill}
            </span>
            {/* Preview Text */}
            <div
              aria-hidden="true"
              className="text-2xl font-body mb-3 text-on-surface dark-preview-text leading-relaxed break-all"
            >
              {card.preview}
            </div>
            {/* Style Name + Actions */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-headline font-bold text-sm text-on-background">
                {card.name}
              </h3>
              <div className="flex items-center gap-1">
                <ShareButtons text={card.preview} />
                <button
                  type="button"
                  onClick={() => handleCopy(card.preview, index)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${
                    isCopied
                      ? "bg-[#22c55e] text-white"
                      : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                  }`}
                  aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                >
                  <span className="material-symbols-outlined text-base">
                    {isCopied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>
            {/* Description */}
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              {card.description}
            </p>
            {/* Recommended Use Tags */}
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-high text-on-surface-variant"
                  style={{
                    fontSize: "10px",
                    borderRadius: "3px",
                    padding: "2px 8px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
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
}
