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

  const badgeClasses = isDark
    ? "text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary bg-primary-fixed/60 px-3 py-1 rounded-full mb-6 inline-block"
    : "text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary bg-primary-fixed px-3 py-1 rounded-full mb-6 inline-block";

  const textClasses = `${
    isLarge ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
  } font-light tracking-tight text-on-surface dark-preview-text leading-snug break-all overflow-hidden transition-[font-size] duration-200 ease-out`;

  const buttonClasses = isCopied
    ? "relative z-10 mt-8 w-full py-4 bg-[#22c55e] text-white border-transparent rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
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
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <span className="material-symbols-outlined text-[6rem]">
            auto_awesome
          </span>
        </div>
      )}
      <button onClick={onCopy} className={buttonClasses}>
        <span className="material-symbols-outlined text-sm">
          {isCopied ? "check" : "content_copy"}
        </span>
        {isCopied ? "Copied!" : "Copy Style"}
      </button>
    </div>
  );
}
