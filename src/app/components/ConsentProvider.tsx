"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  useCallback,
  type ReactNode,
} from "react";

export interface Consent {
  analytics: boolean;
  ads: boolean;
  functional: boolean;
}

interface ConsentContextValue {
  consent: Consent | null;
  setConsent: (consent: Consent) => void;
  version: number;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

const STORAGE_KEY = "al-cookie-consent";

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "analytics" in parsed &&
      "ads" in parsed
    ) {
      return {
        analytics: Boolean(parsed.analytics),
        ads: Boolean(parsed.ads),
        functional: Boolean(parsed.functional ?? true),
      };
    }
  } catch {
    // ignore corrupt storage
  }
  return null;
}

function getSnapshot() {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  return null;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState(0);
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const consent = useMemo(() => parse(raw), [raw]);

  const setConsent = useCallback((value: Consent) => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      }
    } catch {
      // ignore storage errors
    }
    setVersion((v) => v + 1);
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, setConsent, version }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}
