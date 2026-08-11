"use client";

import { useEffect } from "react";
import { useConsent } from "./ConsentProvider";

const CLARITY_ID = "wnvsu8cqo6";

export default function ConsentAwareScripts() {
  const { consent } = useConsent();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;

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

    const script = document.createElement("script");
    script.id = "clarity-script";
    script.async = true;
    script.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`;
    document.head.appendChild(script);
  }, [consent]);

  return null;
}
