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
  const iconSize = size === "sm" ? "text-sm" : "";

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

  return (
    <button
      className={`${sizeClass} rounded-full flex items-center justify-center transition-all ${
        copied
          ? "bg-[#22c55e] text-white"
          : "bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary"
      }`}
      onClick={handleCopy}
    >
      <span className={`material-symbols-outlined ${iconSize}`}>
        {copied ? "check" : "content_copy"}
      </span>
    </button>
  );
}
