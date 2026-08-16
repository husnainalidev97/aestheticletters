"use client";

import { memo, useMemo, lazy, Suspense } from "react";
import type { FontCategory } from "../lib/fontStyles";

const ShareButtons = lazy(() => import("./ShareButtons"));

interface FontCategoryCardProps {
  category: FontCategory;
  text: string;
  fontSize: number;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  isDark?: boolean;
  isFavorite?: (id: string) => boolean;
  onToggleFavorite?: (item: { id: string; styleName: string; categoryName: string; text: string; fontFamily?: string }) => void;
  onPreview?: (text: string) => void;
  onDownload?: (text: string, styleName: string) => void;
  onScalePreview?: (text: string) => void;
  /** When set, wraps each style's output symmetrically with this symbol. */
  wrapSymbol?: string | null;
  initialVisibleStyles?: number;
}

function FontCategoryCard({
  category,
  text,
  fontSize,
  copiedId,
  onCopy,
  isDark = false,
  isFavorite,
  onToggleFavorite,
  onPreview,
  onDownload,
  onScalePreview,
  wrapSymbol,
}: FontCategoryCardProps) {
  const title = category.name;

  const transformedStyles = useMemo(() => {
    const wrap = (s: string) =>
      wrapSymbol ? `${wrapSymbol} ${s} ${wrapSymbol}` : s;
    return category.styles.map((style, index) => {
      let converted = wrap(style.transform(text));
      let display = wrap((style.displayTransform ?? style.transform)(text));
      if (category.symbols) {
        const offset = category.symbolOffset ?? 0;
        const sym =
          category.symbols[
            ((index + offset) * 37) % category.symbols.length
          ];
        converted = `${sym} ${converted} ${sym}`;
        display = `${sym} ${display} ${sym}`;
      }
      return {
        style,
        converted,
        display,
        styleId: `${category.name}-${style.name}`,
      };
    });
  }, [category, text, wrapSymbol]);

  const visibleStyles = transformedStyles;

  return (
    <div
      className={
        isDark
          ? "rounded-xl p-6 md:p-8 overflow-hidden relative editorial-shadow dark-accent-card transition-colors duration-300"
          : "rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300"
      }
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <strong
          className={`block font-headline text-xl font-bold ${
            isDark ? "text-on-background dark:text-on-background" : "text-on-background"
          }`}
        >
          {title}
        </strong>
        {category.maxLength !== undefined && (
          <span
            className={`text-xs font-body tabular-nums ${
              text.length > category.maxLength ? "text-error" : "text-on-surface-variant"
            }`}
          >
            {category.maxLengthLabel ?? title}: {text.length} / {category.maxLength}
          </span>
        )}
      </div>
      <div className="space-y-3">
        {visibleStyles.map(({ style, converted, display, styleId }) => {
          const isCopied = copiedId === styleId;
          const snippet = text.length > 30 ? `${text.slice(0, 30)}...` : text;
          const copyLabel = isCopied ? "Done — copied" : `Copy "${snippet}" as ${style.name}`;

          return (
            <div
              key={style.name}
              className={`flex flex-col p-4 gap-3 rounded-xl group ${
                isDark
                  ? "bg-surface-container-lowest/50 hover:bg-surface-container-lowest/70"
                  : "bg-surface hover:bg-surface-container-high"
              }`}
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-on-surface-variant bg-surface-container-high"
                  aria-label={`${category.name} – ${style.name} font style`}
                >
                  {style.name}
                </span>
                <div
                  aria-hidden="true"
                  className="font-body break-all leading-relaxed overflow-hidden text-on-surface dark-preview-text"
                  style={{ fontSize: `${fontSize}px`, fontFamily: style.fontFamily || "var(--font-noto-math), var(--font-noto-symbols), var(--font-noto-symbols-2), 'Noto Sans', sans-serif", textDecoration: style.textDecoration }}
                >
                  {display}
                </div>
                {style.fontFamily && (
                  <div
                    aria-hidden="true"
                    className="text-on-surface-variant/50 tracking-wide mt-1"
                    style={{ fontSize: "11px", fontFamily: style.fontFamily }}
                  >
                    Aa Bb Gg Rr Ss 0123
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap relative z-10">
                {onPreview && (
                  <button
                    onClick={() => onPreview(converted)}
                    className="flex flex-col items-center justify-center w-9 h-9 rounded-full text-on-surface-variant/60 hover:text-primary transition-all"
                    aria-label="Preview on platform"
                    title="Preview on platform"
                  >
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }} aria-hidden="true">smartphone</span>
                    <span className="text-[0.55rem] leading-none mt-0.5">Preview</span>
                  </button>
                )}
                {onScalePreview && (
                  <button
                    onClick={() => onScalePreview(converted)}
                    className="flex flex-col items-center justify-center w-9 h-9 rounded-full text-on-surface-variant/60 hover:text-primary transition-all"
                    aria-label="Preview at scale"
                    title="Preview at scale"
                  >
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }} aria-hidden="true">open_in_full</span>
                    <span className="text-[0.55rem] leading-none mt-0.5">Scale</span>
                  </button>
                )}
                {onDownload && (
                  <button
                    onClick={() => onDownload(converted, style.name)}
                    className="flex flex-col items-center justify-center w-9 h-9 rounded-full text-on-surface-variant/60 hover:text-primary transition-all"
                    aria-label="Download as image"
                    title="Download as image"
                  >
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }} aria-hidden="true">download</span>
                    <span className="text-[0.55rem] leading-none mt-0.5">Image</span>
                  </button>
                )}
                <Suspense fallback={
                  <div className="w-9 h-9 flex flex-col items-center justify-center rounded-full text-on-surface-variant/60">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }} aria-hidden="true">share</span>
                    <span className="text-[0.55rem] leading-none mt-0.5">Share</span>
                  </div>
                }>
                  <ShareButtons text={converted} />
                </Suspense>
                {onToggleFavorite && (
                  <button
                    onClick={() => onToggleFavorite({ id: styleId, styleName: style.name, categoryName: category.name, text: converted, fontFamily: style.fontFamily })}
                    className={`flex flex-col items-center justify-center w-9 h-9 rounded-full transition-all ${
                      isFavorite?.(styleId)
                        ? "text-[#ef4444]"
                        : "text-on-surface-variant/60 hover:text-[#ef4444]"
                    }`}
                    aria-label={isFavorite?.(styleId) ? "Saved — remove from favorites" : "Save to favorites"}
                  >
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: isFavorite?.(styleId) ? "'FILL' 1, 'wght' 300" : "'FILL' 0, 'wght' 300" }} aria-hidden="true">favorite</span>
                    <span className="text-[0.55rem] leading-none mt-0.5">{isFavorite?.(styleId) ? "Saved" : "Save"}</span>
                  </button>
                )}
                <button
                  onClick={() => onCopy(converted, styleId)}
                  className={`flex-shrink-0 w-9 h-9 rounded-full font-bold transition-all duration-200 flex flex-col items-center justify-center ${
                    isCopied
                      ? "bg-[#15803d] text-white scale-110"
                      : "text-on-surface-variant/60 hover:bg-primary hover:text-on-primary active:scale-95"
                  }`}
                  aria-label={copyLabel}
                  title={copyLabel}
                >
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }} aria-hidden="true">{isCopied ? "check" : "content_copy"}</span>
                  <span className="text-[0.55rem] leading-none mt-0.5">{isCopied ? "Done" : "Copy"}</span>
                </button>
              </div>
            </div>
          );
        })}

      </div>
      {isDark && (
        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-primary pointer-events-none">
          <svg width="128" height="128" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" /></svg>
        </div>
      )}
    </div>
  );
}

export default memo(FontCategoryCard);
