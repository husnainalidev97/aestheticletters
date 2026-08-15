"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface Grid1Row {
  num: number;
  style: string;
  capital: string | null;
  small: string | null;
}

interface Grid23Row {
  num: number;
  category: string;
  result: string;
}

const grid1: Grid1Row[] = [
  { num: 1, style: "Bold", capital: "𝐊", small: "𝐤" },
  { num: 2, style: "Italic", capital: "𝐾", small: "𝑘" },
  { num: 3, style: "Bold Italic", capital: "𝑲", small: "𝒌" },
  { num: 4, style: "Script", capital: "𝒦", small: "𝓀" },
  { num: 5, style: "Bold Script", capital: "𝓚", small: "𝓴" },
  { num: 6, style: "Fraktur", capital: "𝔎", small: "𝔨" },
  { num: 7, style: "Double-Struck", capital: "𝕂", small: "𝕜" },
  { num: 8, style: "Bold Fraktur (Gothic)", capital: "𝕶", small: "𝖐" },
  { num: 9, style: "Sans-Serif", capital: "𝖪", small: "𝗄" },
  { num: 10, style: "Sans Bold", capital: "𝗞", small: "𝗸" },
  { num: 11, style: "Sans Italic", capital: "𝘒", small: "𝘬" },
  { num: 12, style: "Sans Bold Italic", capital: "𝙆", small: "𝙠" },
  { num: 13, style: "Monospace", capital: "𝙺", small: "𝚔" },
  { num: 14, style: "Fullwidth", capital: "Ｋ", small: "ｋ" },
  { num: 15, style: "Small Capital", capital: "ᴋ", small: "ᴋ" },
  { num: 16, style: "Superscript/Modifier", capital: "ᴷ", small: "ᵏ" },
  { num: 17, style: "Hook K", capital: "Ƙ", small: "ƙ" },
  { num: 18, style: "K With Cedilla", capital: "Ķ", small: "ķ" },
  { num: 19, style: "Circled", capital: "Ⓚ", small: "ⓚ" },
  { num: 20, style: "Squared", capital: "🄺", small: null },
  { num: 21, style: "Negative Squared", capital: "🅺", small: null },
  { num: 22, style: "Parenthesized", capital: null, small: "⒦" },
];

const grid2: Grid23Row[] = [
  { num: 1, category: "Black Star", result: "★K★" },
  { num: 2, category: "White Star", result: "☆K☆" },
  { num: 3, category: "Sparkles", result: "✨K✨" },
  { num: 4, category: "Heavy Heart", result: "❤K❤" },
  { num: 5, category: "Sparkling Heart", result: "💖K💖" },
  { num: 6, category: "Cherry Blossom", result: "🌸K🌸" },
  { num: 7, category: "Snowflake", result: "❄K❄" },
  { num: 8, category: "Fire", result: "🔥K🔥" },
  { num: 9, category: "High Voltage", result: "⚡K⚡" },
  { num: 10, category: "Gem Stone", result: "💎K💎" },
  { num: 11, category: "Crown", result: "👑K👑" },
  { num: 12, category: "Butterfly", result: "🦋K🦋" },
  { num: 13, category: "White Corner Brackets", result: "『K』" },
  { num: 14, category: "Black Lenticular Brackets", result: "【K】" },
  { num: 15, category: "Double Angle Quotes", result: "«K»" },
  { num: 16, category: "Bullet", result: "•K•" },
];

const grid3: Grid23Row[] = [
  { num: 1, category: "White Four-Pointed Star", result: "✧k✧" },
  { num: 2, category: "Eight-Pointed Star", result: "✴k✴" },
  { num: 3, category: "Dizzy Symbol", result: "💫k💫" },
  { num: 4, category: "Two Hearts", result: "💕k💕" },
  { num: 5, category: "White Heart Suit", result: "♡k♡" },
  { num: 6, category: "Musical Note", result: "🎵k🎵" },
  { num: 7, category: "Skull", result: "💀k💀" },
  { num: 8, category: "Middle Dot", result: "·k·" },
  { num: 9, category: "Degree Sign", result: "°k°" },
  { num: 10, category: "Rightwards/Leftwards Arrow", result: "→k←" },
  { num: 11, category: "Mathematical Angle Brackets", result: "⟨k⟩" },
  { num: 12, category: "Corner Brackets", result: "「k」" },
  { num: 13, category: "White Lenticular Brackets", result: "〖k〗" },
];

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
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
    // silent
  }
  document.body.removeChild(textarea);
}

function CopyCell({ text, children, className = "" }: { text: string; children: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(() => {
    const onSuccess = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 1500);
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

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group inline-flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2 text-on-surface transition-colors hover:bg-primary/5 ${className}`}
      aria-label={`Copy ${text}`}
    >
      <span className="font-body text-lg">{children}</span>
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 ${
          copied ? "bg-[#15803d] text-white" : "bg-surface-container text-on-surface-variant opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      >
        {copied ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        )}
      </span>
    </button>
  );
}

function EmptyCell({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-full px-3 py-2 text-on-surface-variant/60">
      {children}
    </span>
  );
}

export default function KStyleGrids() {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="font-headline text-xl md:text-2xl font-bold mb-4">Grid 1 — Standard Unicode Styles</h3>
        <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                <th className="px-4 py-3 font-headline font-bold text-on-surface w-12">#</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface">Style</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface text-center">Capital K</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface text-center">Small k</th>
              </tr>
            </thead>
            <tbody>
              {grid1.map((row) => (
                <tr key={row.num} className="border-b border-outline-variant/10 last:border-0">
                  <td className="px-4 py-3 text-on-surface-variant font-mono">{row.num}</td>
                  <td className="px-4 py-3 text-on-surface font-medium">{row.style}</td>
                  <td className="px-4 py-3 text-center">
                    {row.capital ? <CopyCell text={row.capital}>{row.capital}</CopyCell> : <EmptyCell>—</EmptyCell>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.small ? <CopyCell text={row.small}>{row.small}</CopyCell> : <EmptyCell>—</EmptyCell>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-headline text-xl md:text-2xl font-bold mb-4">Grid 2 — Capital K + Symbols</h3>
        <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                <th className="px-4 py-3 font-headline font-bold text-on-surface w-12">#</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface">Category</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface text-center">Styled Result</th>
              </tr>
            </thead>
            <tbody>
              {grid2.map((row) => (
                <tr key={row.num} className="border-b border-outline-variant/10 last:border-0">
                  <td className="px-4 py-3 text-on-surface-variant font-mono">{row.num}</td>
                  <td className="px-4 py-3 text-on-surface font-medium">{row.category}</td>
                  <td className="px-4 py-3 text-center">
                    <CopyCell text={row.result}>{row.result}</CopyCell>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-headline text-xl md:text-2xl font-bold mb-4">Grid 3 — Small k + Symbols</h3>
        <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                <th className="px-4 py-3 font-headline font-bold text-on-surface w-12">#</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface">Category</th>
                <th className="px-4 py-3 font-headline font-bold text-on-surface text-center">Styled Result</th>
              </tr>
            </thead>
            <tbody>
              {grid3.map((row) => (
                <tr key={row.num} className="border-b border-outline-variant/10 last:border-0">
                  <td className="px-4 py-3 text-on-surface-variant font-mono">{row.num}</td>
                  <td className="px-4 py-3 text-on-surface font-medium">{row.category}</td>
                  <td className="px-4 py-3 text-center">
                    <CopyCell text={row.result}>{row.result}</CopyCell>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
