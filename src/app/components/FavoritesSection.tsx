"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { FavoriteItem } from "../lib/useFavorites";

interface FavoritesSectionProps {
  favorites: FavoriteItem[];
  onRemove: (id: string) => void;
}

export default function FavoritesSection({ favorites, onRemove }: FavoritesSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback((text: string, id: string) => {
    const onSuccess = () => {
      setCopiedId(id);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedId(null), 2000);
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
      onSuccess();
    }
  }, []);

  if (favorites.length === 0 && !isOpen) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[150px] mb-8">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-headline font-bold text-primary hover:opacity-80 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
        My Favorites ({favorites.length})
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}><polyline points="6 9 12 15 18 9" /></svg>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-2">
          {favorites.length === 0 ? (
            <p className="text-sm text-on-surface-variant font-body py-4">
              No favorites yet. Tap the heart icon on any style to save it here.
            </p>
          ) : (
            favorites.map((fav) => {
              const isCopied = copiedId === fav.id;
              return (
                <div
                  key={fav.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 transition-colors duration-300"
                >
                  <div className="flex flex-col gap-1 min-w-0 flex-1 mr-4">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">
                      {fav.categoryName} &middot; {fav.styleName}
                    </span>
                    <div
                      className="font-body text-on-surface dark-preview-text text-sm break-all overflow-hidden"
                      style={fav.fontFamily ? { fontFamily: fav.fontFamily } : undefined}
                    >
                      {fav.text}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => handleCopy(fav.text, fav.id)}
                      className={`w-9 flex flex-col items-center justify-center rounded-full transition-all ${
                        isCopied
                          ? "bg-[#15803d] text-white"
                          : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                      }`}
                      aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                    >
                      {isCopied ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                      )}
                      <span className="text-[0.55rem] leading-none mt-0.5">{isCopied ? "Done" : "Copy"}</span>
                    </button>
                    <button
                      onClick={() => onRemove(fav.id)}
                      className="w-9 flex flex-col items-center justify-center rounded-full text-on-surface-variant hover:text-[#ef4444] hover:bg-error-container transition-all"
                      aria-label="Remove from favorites"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      <span className="text-[0.55rem] leading-none mt-0.5">Remove</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
