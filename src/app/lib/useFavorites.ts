"use client";

import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "aesthetic-favorites";

export interface FavoriteItem {
  id: string;
  styleName: string;
  categoryName: string;
  text: string;
  fontFamily?: string;
}

const listeners = new Set<() => void>();
let cache: FavoriteItem[] | null = null;

function getSnapshot(): FavoriteItem[] {
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

function getServerSnapshot(): FavoriteItem[] {
  return [];
}

function persist(next: FavoriteItem[]) {
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

export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites],
  );

  const toggleFavorite = useCallback((item: FavoriteItem) => {
    const prev = getSnapshot();
    const exists = prev.some((f) => f.id === item.id);
    persist(exists ? prev.filter((f) => f.id !== item.id) : [...prev, item]);
  }, []);

  const removeFavorite = useCallback((id: string) => {
    persist(getSnapshot().filter((f) => f.id !== id));
  }, []);

  return { favorites, isFavorite, toggleFavorite, removeFavorite };
}
