"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";

interface FontResultCardProps {
  label: string;
  text: string;
  span2?: boolean;
  featured?: boolean;
  fontSize?: number;
}

/** Detect if text contains wide Unicode characters (fullwidth, block, squared, negative squared) */
function hasWideChars(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // Fullwidth Latin (FF01-FF60), Fullwidth digits/symbols
    if (code >= 0xff01 && code <= 0xff60) return true;
    // Enclosed Alphanumeric Supplement: squared/neg-squared letters (1F130-1F19A)
    // These are surrogate pairs, check high surrogate + low surrogate
    if (code >= 0xd800 && code <= 0xdbff && i + 1 < str.length) {
      const low = str.charCodeAt(i + 1);
      const cp = (code - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
      // Enclosed Alphanumeric Supplement (U+1F100–U+1F1FF)
      if (cp >= 0x1f100 && cp <= 0x1f1ff) return true;
      // Enclosed Alphanumerics (U+2460–U+24FF) won't be surrogates, but block chars in
      // Enclosed Ideographic Supplement (U+1F200–U+1F2FF) could be
      if (cp >= 0x1f200 && cp <= 0x1f2ff) return true;
    }
    // CJK Compatibility (3300-33FF), Enclosed CJK (3200-32FF)
    if (code >= 0x3200 && code <= 0x33ff) return true;
    // Box Drawing (2500-257F), Block Elements (2580-259F)
    if (code >= 0x2500 && code <= 0x259f) return true;
  }
  return false;
}

export default function FontResultCard({
  label,
  text,
  span2 = false,
  featured = false,
  fontSize,
}: FontResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(() => {
    const onSuccess = () => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try { document.execCommand("copy"); } catch { /* silent */ }
        document.body.removeChild(textarea);
        onSuccess();
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try { document.execCommand("copy"); } catch { /* silent */ }
      document.body.removeChild(textarea);
      onSuccess();
    }
  }, [text]);

  // Smart font scaling: reduce size by 20% for wide Unicode characters
  const isWide = useMemo(() => hasWideChars(text), [text]);
  const baseSize = fontSize ?? (featured ? 24 : 20);
  const effectiveSize = isWide ? Math.round(baseSize * 0.8) : baseSize;

  // Derive all styles from React state — no imperative DOM manipulation
  const cardBg = "#fcfcfd";
  const cardBorderColor = cardHovered ? "#6366f1" : "#e5e7eb";
  const cardShadow = cardHovered
    ? "0 10px 30px rgba(0,0,0,0.08)"
    : "0 1px 3px rgba(0,0,0,0.02)";
  const cardTransform = cardHovered ? "translateY(-5px)" : "translateY(0)";

  let btnBg: string;
  let btnColor: string;
  let btnTransform: string;
  if (copied) {
    btnBg = "#22c55e";
    btnColor = "#ffffff";
    btnTransform = "scale(1.1)";
  } else if (btnHovered) {
    btnBg = "#ede9fe";
    btnColor = "#6366f1";
    btnTransform = "scale(1.1)";
  } else {
    btnBg = "#f5f3ff";
    btnColor = "#6b7280";
    btnTransform = "scale(1)";
  }

  return (
    <div
      className={`${span2 ? "md:col-span-2" : ""} group relative flex justify-between items-center cursor-pointer h-full`}
      style={{
        padding: "24px",
        backgroundColor: cardBg,
        border: `1px solid ${cardBorderColor}`,
        borderRadius: "12px",
        boxShadow: cardShadow,
        transform: cardTransform,
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      onClick={handleCopy}
    >
      <div className="flex flex-col gap-2 min-w-0 flex-1 mr-4">
        {/* Style name label — turns purple on card hover */}
        <span
          className="font-bold text-[#6b7280] group-hover:text-[#6366f1] transition-colors duration-300 ease-in-out"
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        {/* Unicode preview text — single line, ellipsis overflow */}
        <div
          className="font-body overflow-hidden transition-[font-size] duration-200 ease-out"
          style={{
            fontSize: `${effectiveSize}px`,
            lineHeight: "1.6",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            minHeight: "2em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="overflow-hidden text-ellipsis">{text}</span>
        </div>
      </div>

      {/* Copy button */}
      <div className="relative shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className="flex items-center justify-center"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: btnBg,
            color: btnColor,
            transform: btnTransform,
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            {copied ? "check" : "content_copy"}
          </span>
        </button>
        {/* "Copied!" tooltip */}
        <span
          className="pointer-events-none absolute -top-8 left-1/2 whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold text-white"
          style={{
            transform: "translateX(-50%)",
            backgroundColor: "#22c55e",
            opacity: copied ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          Copied!
        </span>
      </div>
    </div>
  );
}
