"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";

const CLARITY_ID = "wnvsu8cqo6";

function scheduleIdle(fn: () => void) {
  if (typeof window === "undefined") {
    fn();
    return;
  }
  const w = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
  };
  if (w.requestIdleCallback) {
    w.requestIdleCallback(fn, { timeout: 2000 });
  } else {
    setTimeout(fn, 1);
  }
}

export default function ConsentAwareScripts() {
  const { consent, requiresConsent } = useConsent();
  const lastConsentRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;

    const serialized = consent ? JSON.stringify(consent) : null;
    const nextMarker = requiresConsent ? serialized : "granted";
    if (nextMarker === lastConsentRef.current) return;
    lastConsentRef.current = nextMarker;

    if (!requiresConsent) {
      // Outside the EEA/UK/CH the site can run Google tags without a banner.
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
      return;
    }

    gtag("consent", "update", {
      analytics_storage: consent?.analytics ? "granted" : "denied",
      ad_storage: consent?.ads ? "granted" : "denied",
      ad_user_data: consent?.ads ? "granted" : "denied",
      ad_personalization: consent?.ads ? "granted" : "denied",
    });
  }, [consent, requiresConsent]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only load Clarity when the user explicitly grants analytics.
    if (!requiresConsent || !consent?.analytics) return;
    if (document.getElementById("clarity-script")) return;

    scheduleIdle(() => {
      if (document.getElementById("clarity-script")) return;
      const script = document.createElement("script");
      script.id = "clarity-script";
      script.async = true;
      script.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`;
      document.head.appendChild(script);
    });
  }, [consent, requiresConsent]);

  return null;
}
