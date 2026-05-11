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
  onToggleFavorite?: (item: { id: string; styleName: string; categoryName: string; text: string }) => void;
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
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 self-end sm:self-center">
                <ShareButtons text={converted} />
                {onToggleFavorite && (
                  <button
                    onClick={() => onToggleFavorite({ id: styleId, styleName: style.name, categoryName: category.name, text: converted })}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                      isFavorite?.(styleId)
                        ? "text-[#ef4444]"
                        : isDark
                          ? "text-on-surface-variant/60 hover:text-[#ef4444]"
                          : "text-on-surface-variant hover:text-[#ef4444]"
                    }`}
                    aria-label={isFavorite?.(styleId) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: isFavorite?.(styleId) ? "'FILL' 1" : "'FILL' 0" }}>
                      favorite
                    </span>
                  </button>
                )}
                <button
                  onClick={() => onCopy(converted, styleId)}
                  className={`flex-shrink-0 w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center ${
                    isCopied
                      ? "bg-[#22c55e] text-white"
                      : isDark
                        ? "text-primary hover:bg-primary hover:text-on-primary"
                        : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                  }`}
                  aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                >
                  <span className="material-symbols-outlined text-lg">
                    {isCopied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {isDark && (
        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-primary">
          <span className="material-symbols-outlined text-[8rem]">
            auto_awesome
          </span>
        </div>
      )}
    </div>
  );
}
