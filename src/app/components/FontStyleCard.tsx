interface FontStyleCardProps {
  styleName: string;
  categoryName: string;
  convertedText: string;
  fontSize: number;
  isCopied: boolean;
  onCopy: () => void;
  variant?: "normal" | "large" | "dark";
}

export default function FontStyleCard({
  styleName,
  categoryName,
  convertedText,
  fontSize,
  isCopied,
  onCopy,
  variant = "normal",
}: FontStyleCardProps) {
  const isLarge = variant === "large";
  const isDark = variant === "dark";

  const cardClasses = isLarge
    ? "group p-6 md:p-10 rounded-xl bg-surface-container-lowest editorial-shadow flex flex-col justify-between min-h-[250px] md:min-h-[300px] transition-all duration-300 hover:scale-[1.01]"
    : isDark
      ? "p-8 rounded-xl dark-accent-card flex flex-col justify-between overflow-hidden relative min-h-[250px] transition-colors duration-300"
      : "p-8 rounded-xl bg-surface-container-lowest editorial-shadow flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-low min-h-[250px]";

  const badgeClasses = "text-[0.65rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full mb-6 inline-block";

  const textClasses = `${
    isLarge ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
  } font-light tracking-tight text-on-surface dark-preview-text leading-snug break-all overflow-hidden transition-[font-size] duration-200 ease-out`;

  const buttonClasses = isCopied
    ? "relative z-10 mt-8 w-full py-4 bg-[#15803d] text-white border-transparent rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
    : isDark
      ? "relative z-10 mt-8 w-full py-4 border border-outline-variant/30 hover:bg-primary hover:text-on-primary hover:border-transparent rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
      : "relative z-10 mt-8 w-full py-4 border border-outline-variant/30 hover:bg-primary hover:text-on-primary hover:border-transparent rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2";

  return (
    <div className={cardClasses}>
      <div className="relative z-10">
        <span
          className={badgeClasses}
          aria-label={`${categoryName} – ${styleName} font style`}
        >
          {styleName}
        </span>
        <div className={textClasses} style={{ fontSize: `${fontSize}px` }}>
          {convertedText}
        </div>
      </div>
      {isDark && (
        <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
          <svg width="96" height="96" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" /></svg>
        </div>
      )}
      <button onClick={onCopy} className={buttonClasses}>
        {isCopied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        )}
        <span className="sr-only">{isCopied ? "Copied!" : "Copy Style"}</span>
      </button>
    </div>
  );
}
