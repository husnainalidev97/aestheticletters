"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface ScalePreviewProps {
  text: string;
  onClose: () => void;
}

type RatioId = "square" | "banner" | "story";

const RATIOS: { id: RatioId; label: string; hint: string; vw: number; vh: number }[] = [
  { id: "banner", label: "Banner", hint: "16:9", vw: 1600, vh: 900 },
  { id: "square", label: "Thumbnail", hint: "1:1", vw: 1200, vh: 1200 },
  { id: "story", label: "Story", hint: "9:16", vw: 1080, vh: 1920 },
];

const BACKGROUNDS: { id: string; label: string; css: string; text: string; sub: string }[] = [
  { id: "white", label: "White", css: "#ffffff", text: "#111111", sub: "#11111199" },
  { id: "black", label: "Black", css: "#111111", text: "#ffffff", sub: "#ffffff99" },
  { id: "purple", label: "Purple", css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", text: "#ffffff", sub: "#ffffffcc" },
];

// Emoji/symbol-capable stack so wide + decorated Unicode measures and renders correctly.
const FONT_STACK =
  '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", "Noto Sans Symbols 2", "Noto Sans Symbols", "Noto Sans", sans-serif';

const LINE_HEIGHT = 1.25;
const WIDTH_FILL = 0.9;
const HEIGHT_FILL = 0.82;
const BASE_SIZE = 100; // arbitrary measuring size in SVG user units

/** Greedy word-wrap using a measure() callback that returns text width in SVG units. */
function wrapText(text: string, maxWidth: number, measure: (s: string) => number): string[] {
  const paragraphs = text.split("\n");
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.split(" ").filter((w) => w.length > 0);
    if (words.length === 0) {
      lines.push("");
      continue;
    }
    let current = "";
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (measure(candidate) <= maxWidth || current === "") {
        // A single word wider than the line still goes on its own line (SVG will scale it down).
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
  }
  return lines.length > 0 ? lines : [""];
}

export default function ScalePreview({ text, onClose }: ScalePreviewProps) {
  const [ratioId, setRatioId] = useState<RatioId>("banner");
  const [bgId, setBgId] = useState("white");
  const [copied, setCopied] = useState(false);

  const measureRef = useRef<SVGTextElement>(null);
  const [lines, setLines] = useState<string[]>([text || " "]);
  const [fontSize, setFontSize] = useState(BASE_SIZE);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ratio = RATIOS.find((r) => r.id === ratioId) ?? RATIOS[0];
  const bg = BACKGROUNDS.find((b) => b.id === bgId) ?? BACKGROUNDS[0];

  // Fit-to-frame: wrap the text at a reference size, then scale it so the whole
  // block fills the frame width and height without overflow. Keeps text as real
  // selectable SVG <text> — no canvas, no rasterization.
  useLayoutEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const measure = (s: string) => {
      node.textContent = s.length > 0 ? s : " ";
      return node.getComputedTextLength();
    };

    const maxWidth = ratio.vw * WIDTH_FILL;
    const wrapped = wrapText(text || " ", maxWidth, measure);

    let widest = 0;
    for (const line of wrapped) widest = Math.max(widest, measure(line));
    if (widest === 0) widest = 1;

    const blockHeight = wrapped.length * BASE_SIZE * LINE_HEIGHT;
    const scale = Math.min(
      maxWidth / widest,
      (ratio.vh * HEIGHT_FILL) / blockHeight,
    );

    setLines(wrapped);
    setFontSize(BASE_SIZE * scale);
  }, [text, ratio.vw, ratio.vh]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    };
  }, []);

  const handleCopy = useCallback(() => {
    const onSuccess = () => {
      setCopied(true);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        fallbackCopy(text);
        onSuccess();
      });
    } else {
      fallbackCopy(text);
      onSuccess();
    }
  }, [text]);

  const lineHeightUnits = fontSize * LINE_HEIGHT;
  const totalHeight = lines.length * lineHeightUnits;
  const firstBaseline = (ratio.vh - totalHeight) / 2 + lineHeightUnits * 0.72;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl animate-card-fade-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/10">
          <h3 className="font-headline font-bold text-on-surface text-base">Preview at Scale</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
            aria-label="Close preview"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Ratio tabs */}
        <div className="flex border-b border-outline-variant/10 overflow-x-auto scrollbar-hide">
          {RATIOS.map((r) => (
            <button
              key={r.id}
              onClick={() => setRatioId(r.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium transition-all whitespace-nowrap border-b-2 ${
                ratioId === r.id
                  ? "border-primary text-primary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {r.label}
              <span className="text-[0.65rem] opacity-60">{r.hint}</span>
            </button>
          ))}
        </div>

        {/* Preview frame */}
        <div className="p-5">
          <div className="flex justify-center">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-outline-variant/20 shadow-inner"
              style={{
                aspectRatio: `${ratio.vw} / ${ratio.vh}`,
                maxHeight: "52vh",
                maxWidth: ratio.id === "story" ? "min(100%, 40vh * 9 / 16)" : "100%",
                background: bg.css,
              }}
            >
              <svg
                viewBox={`0 0 ${ratio.vw} ${ratio.vh}`}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`Large preview of ${text}`}
              >
                {/* Hidden node used only to measure text width at BASE_SIZE. */}
                <text
                  ref={measureRef}
                  x={0}
                  y={-1000}
                  fontSize={BASE_SIZE}
                  fontFamily={FONT_STACK}
                  visibility="hidden"
                />
                <text
                  x={ratio.vw / 2}
                  textAnchor="middle"
                  fontSize={fontSize}
                  fontFamily={FONT_STACK}
                  fill={bg.text}
                >
                  {lines.map((line, i) => (
                    <tspan key={i} x={ratio.vw / 2} y={firstBaseline + i * lineHeightUnits}>
                      {line}
                    </tspan>
                  ))}
                </text>
                <text
                  x={ratio.vw / 2}
                  y={ratio.vh - Math.max(24, ratio.vw * 0.02)}
                  textAnchor="middle"
                  fontSize={Math.max(18, ratio.vw * 0.016)}
                  fontFamily="-apple-system, 'Segoe UI', sans-serif"
                  fontWeight={500}
                  fill={bg.sub}
                >
                  aestheticletters.com
                </text>
              </svg>
            </div>
          </div>

          {/* Background presets + copy */}
          <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant font-body">Background</span>
              {BACKGROUNDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBgId(b.id)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${
                    bgId === b.id ? "border-primary scale-110" : "border-outline-variant/30"
                  }`}
                  style={{ background: b.css }}
                  aria-label={`${b.label} background`}
                  title={b.label}
                />
              ))}
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-headline font-bold transition-all ${
                copied ? "bg-[#15803d] text-white" : "bg-primary text-on-primary hover:opacity-90 active:scale-95"
              }`}
            >
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              )}
              {copied ? "Copied" : "Copy Text"}
            </button>
          </div>
          <p className="text-[0.6rem] text-on-surface-variant/50 text-center mt-3">
            Text stays real Unicode — copy and paste it anywhere. Frame is a size guide only.
          </p>
        </div>
      </div>
    </div>
  );
}

function fallbackCopy(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
  } catch {
    /* silent */
  }
  document.body.removeChild(textarea);
}
