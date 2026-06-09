import { FontCategory } from "../lib/fontStyles";
import ShareButtons from "./ShareButtons";

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
}

export default function FontCategoryCard({
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
}: FontCategoryCardProps) {
  const title = category.name;

  return (
    <div
      className={
        isDark
          ? "rounded-xl p-6 md:p-8 overflow-hidden relative editorial-shadow dark-accent-card transition-colors duration-300"
          : "rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300"
      }
    >
      <strong
        className={`block font-headline text-xl font-bold mb-6 ${
          isDark ? "text-on-background dark:text-on-background" : "text-on-background"
        }`}
      >
        {title}
      </strong>
      <div className="space-y-3">
        {category.styles.map((style) => {
          const converted = style.transform(text);
          const styleId = `${category.name}-${style.name}`;
          const isCopied = copiedId === styleId;

          return (
            <div
              key={style.name}
              className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 gap-3 sm:gap-0 rounded-xl transition-all group ${
                isDark
                  ? "bg-surface-container-lowest/50 hover:bg-surface-container-lowest/70"
                  : "bg-surface hover:bg-surface-container-high"
              }`}
            >
              <div className="flex flex-col gap-1 min-w-0 flex-1 sm:mr-4">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-on-surface-variant bg-surface-container-high"
                  aria-label={`${category.name} – ${style.name} font style`}
                >
                  {style.name}
                </span>
                <div
                  aria-hidden="true"
                  className="font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out text-on-surface dark-preview-text"
                  style={{ fontSize: `${fontSize}px`, fontFamily: style.fontFamily || "'Segoe UI Symbol', 'Apple Color Emoji', 'Noto Sans Symbols 2', 'Noto Sans Symbols', 'Noto Sans', sans-serif" }}
                >
                  {converted}
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
              <div className="flex items-center gap-1 flex-shrink-0 self-end sm:self-center relative z-10">
                {onPreview && (
                  <button
                    onClick={() => onPreview(converted)}
                    className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                      isDark
                        ? "text-on-surface-variant/60 hover:text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    aria-label="Preview on platform"
                    title="Preview on platform"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                    <span className="text-[0.55rem] leading-none mt-0.5">Preview</span>
                  </button>
                )}
                {onDownload && (
                  <button
                    onClick={() => onDownload(converted, style.name)}
                    className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                      isDark
                        ? "text-on-surface-variant/60 hover:text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    aria-label="Download as image"
                    title="Download as image"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    <span className="text-[0.55rem] leading-none mt-0.5">Image</span>
                  </button>
                )}
                <ShareButtons text={converted} />
                {onToggleFavorite && (
                  <button
                    onClick={() => onToggleFavorite({ id: styleId, styleName: style.name, categoryName: category.name, text: converted, fontFamily: style.fontFamily })}
                    className={`flex flex-col items-center justify-center w-10 rounded-full transition-all ${
                      isFavorite?.(styleId)
                        ? "text-[#ef4444]"
                        : isDark
                          ? "text-on-surface-variant/60 hover:text-[#ef4444]"
                          : "text-on-surface-variant hover:text-[#ef4444]"
                    }`}
                    aria-label={isFavorite?.(styleId) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite?.(styleId) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    <span className="text-[0.55rem] leading-none mt-0.5">{isFavorite?.(styleId) ? "Saved" : "Save"}</span>
                  </button>
                )}
                <button
                  onClick={() => onCopy(converted, styleId)}
                  className={`flex-shrink-0 w-10 h-10 rounded-full font-bold transition-all duration-200 flex flex-col items-center justify-center ${
                    isCopied
                      ? "bg-[#22c55e] text-white scale-110"
                      : isDark
                        ? "text-primary hover:bg-primary hover:text-on-primary active:scale-95"
                        : "text-on-surface-variant hover:bg-primary hover:text-on-primary active:scale-95"
                  }`}
                  aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                >
                  {isCopied ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  )}
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
