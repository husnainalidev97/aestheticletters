import { FontCategory } from "../lib/fontStyles";

interface FontCategoryCardProps {
  category: FontCategory;
  text: string;
  fontSize: number;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  isDark?: boolean;
}

export default function FontCategoryCard({
  category,
  text,
  fontSize,
  copiedId,
  onCopy,
  isDark = false,
}: FontCategoryCardProps) {
  const title = category.name;

  return (
    <div
      className={
        isDark
          ? "rounded-xl p-6 md:p-8 overflow-hidden relative editorial-shadow"
          : "rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8"
      }
      style={
        isDark
          ? { background: "linear-gradient(135deg, #F8F9FA 0%, #E6E6FA 100%)" }
          : undefined
      }
    >
      <strong
        className={`block font-headline text-xl font-bold mb-6 ${
          isDark ? "text-[#1c1b1b]" : "text-on-background"
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
              className={`flex justify-between items-center p-4 rounded-xl transition-all group ${
                isDark
                  ? "bg-white/50 hover:bg-white/70"
                  : "bg-surface hover:bg-surface-container-high"
              }`}
            >
              <div className="flex flex-col gap-1 min-w-0 flex-1 mr-4">
                <span
                  className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit ${
                    isDark
                      ? "text-[#1c1b1b] bg-white/60"
                      : "text-primary bg-primary-fixed"
                  }`}
                  aria-label={`${category.name} – ${style.name} font style`}
                >
                  {style.name}
                </span>
                <div
                  aria-hidden="true"
                  className={`font-body break-all leading-relaxed overflow-hidden transition-[font-size] duration-200 ease-out ${
                    isDark ? "text-[#1c1b1b]" : "text-on-surface"
                  }`}
                  style={{ fontSize: `${fontSize}px`, ...(style.fontFamily ? { fontFamily: style.fontFamily } : {}) }}
                >
                  {converted}
                </div>
              </div>
              <button
                onClick={() => onCopy(converted, styleId)}
                className={`flex-shrink-0 min-h-12 py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                  isCopied
                    ? "bg-[#22c55e] text-white"
                    : isDark
                      ? "border border-[#451ebb]/30 text-[#451ebb] hover:bg-primary hover:text-white hover:border-transparent"
                      : "border border-outline-variant/30 hover:bg-primary hover:text-white hover:border-transparent"
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {isCopied ? "check" : "content_copy"}
                </span>
                <span className="hidden sm:inline">
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </button>
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
