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
  const { consent } = useConsent();
  const lastConsentRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;

    const serialized = consent ? JSON.stringify(consent) : null;
    if (serialized === lastConsentRef.current) return;
    lastConsentRef.current = serialized;

    if (consent?.analytics) {
      gtag("consent", "update", { analytics_storage: "granted" });
    } else {
      gtag("consent", "update", { analytics_storage: "denied" });
    }

    if (consent?.ads) {
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    } else {
      gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, [consent]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!consent?.analytics) return;
    if (document.getElementById("clarity-script")) return;

    scheduleIdle(() => {
      if (document.getElementById("clarity-script")) return;
      const script = document.createElement("script");
      script.id = "clarity-script";
      script.async = true;
      script.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`;
      document.head.appendChild(script);
    });
  }, [consent]);

  return null;
}
