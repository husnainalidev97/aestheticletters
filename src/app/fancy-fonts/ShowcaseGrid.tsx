"use client";

import { useState, useCallback, useRef, useEffect, lazy, Suspense } from "react";
import ShareButtons from "../components/ShareButtons";

const PlatformPreview = lazy(() => import("../components/PlatformPreview"));
const DownloadImage = lazy(() => import("../components/DownloadImage"));

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
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<{ text: string; styleName: string } | null>(null);

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
    <>
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
                <button
                  type="button"
                  onClick={() => setPreviewText(card.preview)}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
                  aria-label="Preview on platform"
                  title="Preview on platform"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                </button>
                <button
                  type="button"
                  onClick={() => setDownloadInfo({ text: card.preview, styleName: card.name })}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
                  aria-label="Download as image"
                  title="Download as image"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </button>
                <ShareButtons text={card.preview} />
                <button
                  type="button"
                  onClick={() => handleCopy(card.preview, index)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${
                    isCopied
                      ? "bg-[#15803d] text-white"
                      : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                  }`}
                  aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                >
                  {isCopied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  )}
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

    {/* Platform Preview Modal */}
    {previewText && (
      <Suspense fallback={null}>
        <PlatformPreview text={previewText} onClose={() => setPreviewText(null)} />
      </Suspense>
    )}
    {/* Download as Image Modal */}
    {downloadInfo && (
      <Suspense fallback={null}>
        <DownloadImage text={downloadInfo.text} styleName={downloadInfo.styleName} onClose={() => setDownloadInfo(null)} />
      </Suspense>
    )}
    </>
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
