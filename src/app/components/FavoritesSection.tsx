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
        <span
          className="material-symbols-outlined text-lg"
          style={{ fontVariationSettings: "'FILL' 1", color: "#ef4444" }}
        >
          favorite
        </span>
        My Favorites ({favorites.length})
        <span className="material-symbols-outlined text-sm">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
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
                          ? "bg-[#22c55e] text-white"
                          : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                      }`}
                      aria-label={isCopied ? "Copied" : "Copy to clipboard"}
                    >
                      <span className="material-symbols-outlined text-base">
                        {isCopied ? "check" : "content_copy"}
                      </span>
                      <span className="text-[0.55rem] leading-none mt-0.5">{isCopied ? "Done" : "Copy"}</span>
                    </button>
                    <button
                      onClick={() => onRemove(fav.id)}
                      className="w-9 flex flex-col items-center justify-center rounded-full text-on-surface-variant hover:text-[#ef4444] hover:bg-error-container transition-all"
                      aria-label="Remove from favorites"
                    >
                      <span className="material-symbols-outlined text-base">
                        delete
                      </span>
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
