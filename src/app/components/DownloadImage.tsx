"use client";

import { useState, useRef, useCallback } from "react";

interface DownloadImageProps {
  text: string;
  styleName: string;
  onClose: () => void;
}

const BACKGROUNDS = [
  { id: "white", label: "White", color: "#ffffff", textColor: "#1a1a1a" },
  { id: "black", label: "Black", color: "#1a1a1a", textColor: "#ffffff" },
  { id: "cream", label: "Cream", color: "#faf6f1", textColor: "#2d2a26" },
  { id: "lavender", label: "Lavender", color: "#f0e6ff", textColor: "#3d1a6e" },
  { id: "mint", label: "Mint", color: "#e8fdf5", textColor: "#1a4d3e" },
  { id: "blush", label: "Blush", color: "#fff0f3", textColor: "#6b1d30" },
  { id: "gradient-purple", label: "Purple", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", textColor: "#ffffff" },
  { id: "gradient-sunset", label: "Sunset", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", textColor: "#ffffff" },
  { id: "gradient-ocean", label: "Ocean", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", textColor: "#ffffff" },
];

const SIZES = [
  { id: "square", label: "1:1", width: 1080, height: 1080 },
  { id: "story", label: "9:16", width: 1080, height: 1920 },
  { id: "wide", label: "16:9", width: 1920, height: 1080 },
];

function parseGradient(str: string): { type: "solid"; color: string } | { type: "gradient"; stops: { offset: number; color: string }[]; angle: number } {
  if (!str.startsWith("linear-gradient")) {
    return { type: "solid", color: str };
  }
  const match = str.match(/(\d+)deg,\s*(.+)/);
  if (!match) return { type: "solid", color: "#ffffff" };
  const angle = parseInt(match[1], 10);
  const stopsStr = match[2];
  const stops = stopsStr.split(/,(?![^(]*\))/).map((s) => {
    const parts = s.trim().split(/\s+/);
    const color = parts[0];
    const offset = parts[1] ? parseInt(parts[1], 10) / 100 : 0;
    return { offset, color };
  });
  return { type: "gradient", stops, angle };
}

export default function DownloadImage({ text, styleName, onClose }: DownloadImageProps) {
  const [bgIndex, setBgIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [watermark, setWatermark] = useState(true);
  const [isRendering, setIsRendering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const bg = BACKGROUNDS[bgIndex];
  const size = SIZES[sizeIndex];

  const renderAndDownload = useCallback(() => {
    setIsRendering(true);
    requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) { setIsRendering(false); return; }

      canvas.width = size.width;
      canvas.height = size.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) { setIsRendering(false); return; }

      // Background
      const parsed = parseGradient(bg.color);
      if (parsed.type === "solid") {
        ctx.fillStyle = parsed.color;
        ctx.fillRect(0, 0, size.width, size.height);
      } else {
        const rad = (parsed.angle - 90) * Math.PI / 180;
        const x0 = size.width / 2 - Math.cos(rad) * size.width / 2;
        const y0 = size.height / 2 - Math.sin(rad) * size.height / 2;
        const x1 = size.width / 2 + Math.cos(rad) * size.width / 2;
        const y1 = size.height / 2 + Math.sin(rad) * size.height / 2;
        const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        parsed.stops.forEach((s) => gradient.addColorStop(s.offset, s.color));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size.width, size.height);
      }

      // Text
      const fontSize = Math.min(size.width * 0.07, 80);
      ctx.fillStyle = bg.textColor;
      ctx.font = `${fontSize}px "Segoe UI Symbol", "Apple Color Emoji", "Noto Sans Symbols 2", "Noto Sans", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Word-wrap text
      const maxWidth = size.width * 0.8;
      const words = text.split("");
      const lines: string[] = [];
      let currentLine = "";

      for (const char of words) {
        const testLine = currentLine + char;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine.length > 0) {
          lines.push(currentLine);
          currentLine = char;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      const lineHeight = fontSize * 1.4;
      const totalHeight = lines.length * lineHeight;
      const startY = (size.height - totalHeight) / 2 + lineHeight / 2;

      lines.forEach((line, i) => {
        ctx.fillText(line, size.width / 2, startY + i * lineHeight);
      });

      // Style name label
      const labelSize = Math.max(14, size.width * 0.018);
      ctx.font = `600 ${labelSize}px -apple-system, "Segoe UI", sans-serif`;
      ctx.fillStyle = bg.textColor + "80";
      ctx.fillText(styleName, size.width / 2, startY - lineHeight * 0.8 - labelSize);

      // Watermark
      if (watermark) {
        const wmSize = Math.max(12, size.width * 0.014);
        ctx.font = `500 ${wmSize}px -apple-system, "Segoe UI", sans-serif`;
        ctx.fillStyle = bg.textColor + "40";
        ctx.fillText("aestheticletters.com", size.width / 2, size.height - wmSize * 2.5);
      }

      // Download
      canvas.toBlob((blob) => {
        if (!blob) { setIsRendering(false); return; }
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${styleName.toLowerCase().replace(/\s+/g, "-")}-aesthetic-text.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsRendering(false);
      }, "image/png");
    });
  }, [bg, size, text, styleName, watermark]);

  // Preview background style
  const previewBg = bg.color.startsWith("linear-gradient")
    ? { background: bg.color }
    : { backgroundColor: bg.color };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl animate-card-fade-in overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface-container-lowest flex items-center justify-between px-5 py-4 border-b border-outline-variant/10 z-10">
          <h3 className="font-headline font-bold text-on-surface text-base">
            Download as Image
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Live Preview */}
          <div
            className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center border border-outline-variant/10"
            style={previewBg}
          >
            <div className="text-center px-6">
              <p className="text-[0.6rem] font-medium mb-2" style={{ color: bg.textColor + "80" }}>
                {styleName}
              </p>
              <p
                className="text-lg sm:text-xl break-all leading-relaxed"
                style={{ color: bg.textColor, fontFamily: "'Segoe UI Symbol', 'Apple Color Emoji', 'Noto Sans Symbols 2', sans-serif" }}
              >
                {text}
              </p>
              {watermark && (
                <p className="text-[0.5rem] mt-4" style={{ color: bg.textColor + "40" }}>
                  aestheticletters.com
                </p>
              )}
            </div>
          </div>

          {/* Background Options */}
          <div>
            <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
              Background
            </label>
            <div className="flex flex-wrap gap-2">
              {BACKGROUNDS.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setBgIndex(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    bgIndex === i ? "border-primary scale-110" : "border-outline-variant/20 hover:scale-105"
                  }`}
                  style={
                    b.color.startsWith("linear-gradient")
                      ? { background: b.color }
                      : { backgroundColor: b.color }
                  }
                  aria-label={b.label}
                  title={b.label}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div>
            <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
              Aspect Ratio
            </label>
            <div className="flex gap-2">
              {SIZES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSizeIndex(i)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                    sizeIndex === i
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Watermark Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest">
              Watermark
            </span>
            <button
              onClick={() => setWatermark((prev) => !prev)}
              className={`relative w-10 h-5 rounded-full transition-colors ${
                watermark ? "bg-primary" : "bg-outline-variant/40"
              }`}
              role="switch"
              aria-checked={watermark}
              aria-label="Toggle watermark"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                  watermark ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Download Button */}
          <button
            onClick={renderAndDownload}
            disabled={isRendering}
            className="w-full py-3.5 rounded-xl font-headline font-bold text-sm text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #7c4daf 0%, #a94d73 100%)" }}
          >
            {isRendering ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Rendering...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PNG
              </>
            )}
          </button>
        </div>

        {/* Hidden canvas for rendering */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
