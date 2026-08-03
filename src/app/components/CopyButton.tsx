"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { copyToClipboard } from "../lib/clipboard";

export default function CopyButton({
  text,
  size = "md",
}: {
  text: string;
  size?: "sm" | "md";
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sizeClass = size === "sm" ? "h-10 w-10" : "h-12 w-12";

  const handleCopy = useCallback(() => {
    copyToClipboard(text, () => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const iconClass = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      className={`${sizeClass} rounded-full flex items-center justify-center transition-all ${
        copied
          ? "bg-[#15803d] text-white"
          : "bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary"
      }`}
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
    >
      {copied ? (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ) : (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
      )}
    </button>
  );
}
