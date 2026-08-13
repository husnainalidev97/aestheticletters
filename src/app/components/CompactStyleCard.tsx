"use client";

interface CompactStyleCardProps {
  text: string;
  label: string;
  fontSize?: number;
  copied?: boolean;
  className?: string;
}

export default function CompactStyleCard({
  text,
  label,
  fontSize = 20,
  copied = false,
  className = "",
}: CompactStyleCardProps) {
  return (
    <button
      type="button"
      data-text={text}
      data-label={label}
      title={label}
      className={`group relative flex items-center justify-center aspect-square rounded-xl bg-surface-container-lowest border border-outline-variant/20 p-3 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${className}`}
      aria-label={`Copy ${text}${label ? ` (${label})` : ""}`}
    >
      <span
        className="font-body text-on-surface dark-preview-text break-all text-center leading-tight"
        style={{ fontSize: `${fontSize}px` }}
      >
        {text}
      </span>

      <span
        className={`absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
          copied
            ? "bg-[#15803d] text-white"
            : "bg-surface-container text-on-surface-variant opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        )}
      </span>
    </button>
  );
}
