"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";

const CLARITY_ID = "wnvsu8cqo6";
const AD_CLIENT = "ca-pub-5520146667836147";
const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

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
  const { consent, requiresConsent, adsEnabled } = useConsent();
  const lastConsentRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;

    const analyticsGranted = !requiresConsent || !!consent?.analytics;
    const adsGranted = adsEnabled && (!requiresConsent || !!consent?.ads);
    const marker = `${analyticsGranted}:${adsGranted}:${consent ? JSON.stringify(consent) : ""}`;
    if (marker === lastConsentRef.current) return;
    lastConsentRef.current = marker;

    gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: adsGranted ? "granted" : "denied",
      ad_user_data: adsGranted ? "granted" : "denied",
      ad_personalization: adsGranted ? "granted" : "denied",
    });
  }, [consent, requiresConsent, adsEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Load Clarity when no consent is required, or when the user grants analytics.
    if (requiresConsent && !consent?.analytics) return;
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const adsAllowed = adsEnabled && (!requiresConsent || !!consent?.ads);

    if (!adsAllowed) {
      // Try to stop future ad requests when the user has revoked or rejected ads.
      if (window.adsbygoogle) {
        try {
          window.adsbygoogle.pauseAdRequests = 1;
        } catch {
          // AdSense may lock this property; ignore the write failure.
        }
      }
      return;
    }

    // Always initialize the adsbygoogle queue before the script loads so that
    // any manual ad units rendered before the async script finishes can queue
    // their push() calls and be processed once adsbygoogle.js is ready.
    window.adsbygoogle = window.adsbygoogle || [];
    try {
      window.adsbygoogle.pauseAdRequests = 0;
    } catch {
      // Ignore if AdSense has made the property setter-only.
    }

    if (document.getElementById("adsense-script")) {
      // Script already present; just process any queued ad units.
      try {
        window.adsbygoogle.push({});
      } catch {
        // Ignore AdSense not being available yet.
      }
      return;
    }

    // For consent-required regions the script is not in <head>; load it
    // dynamically now that the user has granted ads.
    const script = document.createElement("script");
    script.id = "adsense-script";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = ADSENSE_SRC;
    script.onload = () => {
      try {
        (window.adsbygoogle || []).push({});
      } catch {
        // Ignore AdSense not being available yet.
      }
    };
    document.head.appendChild(script);
  }, [consent, requiresConsent, adsEnabled]);

  return null;
}
