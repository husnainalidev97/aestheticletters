"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
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
  requiresConsent: boolean;
  adsEnabled: boolean;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

const STORAGE_KEY = "al-cookie-consent";
const CONSENT_COOKIE = "al-cookie-consent";

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

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)"
    )
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string, maxAgeDays = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + maxAgeDays * 24 * 60 * 60 * 1000).toUTCString();
  const secure = location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax${secure}`;
}

export function ConsentProvider({
  children,
  serverConsent,
  serverRequiresConsent,
  serverAdsEnabled,
}: {
  children: ReactNode;
  serverConsent?: Consent | null;
  serverRequiresConsent?: boolean;
  serverAdsEnabled?: boolean;
}) {
  const requiresConsent = serverRequiresConsent ?? true;
  const adsEnabled = serverAdsEnabled ?? true;
  const [consent, setConsentState] = useState<Consent | null>(
    serverConsent ?? null
  );

  useEffect(() => {
    if (consent !== null) return;
    const cookie = getCookie(CONSENT_COOKIE);
    if (cookie) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsentState(parse(cookie));
      return;
    }
    try {
      const local = window.localStorage.getItem(STORAGE_KEY);
      if (local) {
        setConsentState(parse(local));
      }
    } catch {
      // ignore storage errors
    }
  }, [consent]);

  const setConsent = useCallback((value: Consent) => {
    setConsentState(value);
    const raw = value ? JSON.stringify(value) : "";
    try {
      if (value) {
        window.localStorage.setItem(STORAGE_KEY, raw);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore storage errors
    }
    if (value) {
      setCookie(CONSENT_COOKIE, raw);
    } else {
      setCookie(CONSENT_COOKIE, "", -1);
    }
  }, []);

  const value = useMemo(
    () => ({ consent, setConsent, requiresConsent, adsEnabled }),
    [consent, setConsent, requiresConsent, adsEnabled]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}
