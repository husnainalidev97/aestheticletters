"use client";

import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "aesthetic-text-history";
const MAX_ENTRIES = 15;

export interface HistoryEntry {
  text: string;
  timestamp: number;
}

const listeners = new Set<() => void>();
let cache: HistoryEntry[] | null = null;

function getSnapshot(): HistoryEntry[] {
  if (cache === null) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cache = raw ? JSON.parse(raw) : [];
    } catch {
      cache = [];
    }
  }
  return cache!;
}

function getServerSnapshot(): HistoryEntry[] {
  return [];
}

function persist(next: HistoryEntry[]) {
  cache = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // quota exceeded — silently ignore
  }
  listeners.forEach((cb) => cb());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

export function useTextHistory() {
  const history = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addEntry = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || trimmed.length < 2) return;
    const prev = getSnapshot();
    // Deduplicate — remove existing entry with same text
    const filtered = prev.filter((e) => e.text !== trimmed);
    const next = [{ text: trimmed, timestamp: Date.now() }, ...filtered].slice(0, MAX_ENTRIES);
    persist(next);
  }, []);

  const removeEntry = useCallback((timestamp: number) => {
    persist(getSnapshot().filter((e) => e.timestamp !== timestamp));
  }, []);

  const clearHistory = useCallback(() => {
    persist([]);
  }, []);

  return { history, addEntry, removeEntry, clearHistory };
}
