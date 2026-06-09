"use client";

import { useState, useRef, useEffect } from "react";
import { useTextHistory } from "../lib/useTextHistory";

interface TextHistoryProps {
  onSelect: (text: string) => void;
}

function formatTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function TextHistory({ onSelect }: TextHistoryProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { history, removeEntry, clearHistory } = useTextHistory();

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
          open
            ? "bg-primary/10 text-primary"
            : "text-on-surface-variant hover:bg-surface-container-high active:scale-95"
        }`}
        aria-label="Text history"
        aria-expanded={open}
        title="Recent texts"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-h-80 overflow-y-auto bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/20 z-50 animate-card-fade-in"
          role="menu"
        >
          <div className="sticky top-0 bg-surface-container-lowest px-4 py-3 border-b border-outline-variant/10 flex items-center justify-between">
            <span className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest">
              Recent Texts
            </span>
            {history.length > 0 && (
              <button
                onClick={() => { clearHistory(); setOpen(false); }}
                className="text-[0.65rem] text-on-surface-variant/60 hover:text-error transition-colors font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <svg className="w-8 h-8 mx-auto text-on-surface-variant/30 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-xs text-on-surface-variant/50 font-body">
                Your recent texts will appear here
              </p>
            </div>
          ) : (
            <ul className="py-1">
              {history.map((entry) => (
                <li
                  key={entry.timestamp}
                  className="group flex items-center gap-2 px-4 py-2.5 hover:bg-surface-container-high transition-colors cursor-pointer"
                  role="menuitem"
                  onClick={() => { onSelect(entry.text); setOpen(false); }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-on-surface font-body truncate">
                      {entry.text}
                    </p>
                    <p className="text-[0.6rem] text-on-surface-variant/50 mt-0.5">
                      {formatTime(entry.timestamp)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeEntry(entry.timestamp); }}
                    className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant/40 hover:text-error hover:bg-error/10 transition-all flex-shrink-0"
                    aria-label="Remove from history"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
