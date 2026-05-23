"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface SymbolCategory {
  name: string;
  symbols: string[];
}

const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    name: "Border & Frame Symbols",
    symbols: [
      "✦", "✧", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "★", "☆", "⋆",
      "·", "°", "˚", "˙", "∘", "◦",
      "▲", "△", "▴", "▵", "◆", "◇", "◈", "◉", "●", "○", "◎",
      "═", "║", "╔", "╗", "╚", "╝", "╠", "╣", "╦", "╩", "╬",
      "꧁", "꧂", "༄", "༅", "༒", "༺", "༻", "❮", "❯", "❰", "❱",
      "《", "》", "〈", "〉", "⟨", "⟩", "「", "」", "『", "』",
    ],
  },
  {
    name: "Bullet & List Symbols",
    symbols: [
      "→", "➜", "➤", "➥", "➦", "➧", "➨", "►", "▶", "❯", "❱", "➔", "➝", "➞",
      "●", "○", "◦", "▪", "▫", "■", "□", "▸", "▹", "‣",
      "✓", "✔", "✗", "✘", "☑", "☒",
      "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿",
      "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩",
    ],
  },
  {
    name: "Star & Sparkle Symbols",
    symbols: [
      "★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰",
      "✨", "💫", "⭐", "🌟", "🌠",
      "❋", "✢", "✣", "✤", "✥", "✱", "✲", "✳", "✴", "✵", "✶", "✷", "✸", "✹", "✺",
      "⁂", "※", "⊹", "⋆",
    ],
  },
  {
    name: "Heart & Emotion Symbols",
    symbols: [
      "♥", "♡", "❤", "❥", "❣", "❦", "❧",
      "💙", "💚", "💛", "🧡", "💜", "🖤", "🤍", "🤎",
      "☮", "☯", "☺", "☻", "ツ", "ヅ", "ᵔᴥᵔ",
      "✌", "👍", "🙏",
    ],
  },
  {
    name: "Arrow & Direction Symbols",
    symbols: [
      "→", "←", "↑", "↓", "↗", "↘", "↙", "↖", "↔", "↕",
      "➡", "⬅", "⬆", "⬇", "➚", "➘", "➙", "➛",
      "⇒", "⇐", "⇑", "⇓", "⇔", "⇕", "⇗", "⇘",
      "▶", "◀", "▲", "▼", "▷", "◁", "△", "▽",
      "»", "«", "›", "‹",
    ],
  },
];

export default function FacebookSymbolsCard() {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback((symbol: string) => {
    const onSuccess = () => {
      setCopiedSymbol(symbol);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedSymbol(null), 1000);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(symbol).then(onSuccess).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = symbol;
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
      textarea.value = symbol;
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
  }, []);

  return (
    <div className="rounded-xl bg-surface-container-lowest editorial-shadow p-6 md:p-8 transition-colors duration-300">
      <strong className="block font-headline text-xl font-bold mb-6 text-on-background">
        FB Symbols
      </strong>
      <div className="space-y-6">
        {SYMBOL_CATEGORIES.map((cat) => (
          <div key={cat.name}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block w-fit text-on-surface-variant bg-surface-container-high mb-3">
              {cat.name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.symbols.map((symbol, idx) => (
                <button
                  key={`${symbol}-${idx}`}
                  onClick={() => handleCopy(symbol)}
                  className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-xl transition-all active:scale-95 select-none ${
                    copiedSymbol === symbol
                      ? "bg-[#22c55e] text-white"
                      : "bg-surface hover:bg-surface-container-high text-on-surface"
                  }`}
                  aria-label={`Copy ${symbol}`}
                  title={copiedSymbol === symbol ? "Copied!" : `Copy ${symbol}`}
                >
                  {symbol}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
