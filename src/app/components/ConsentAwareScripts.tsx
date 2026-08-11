"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "./ConsentProvider";

const GA_ID = "G-6QLR77B1GL";
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

  return (
    <>
      {/* Always load Google Analytics with Consent Mode default denied.
          The default `analytics_storage: denied` is set in layout.tsx so no
          cookies are used until the visitor opts in; we get cookieless,
          modeled traffic data instead of losing all visibility. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>

      {consent?.analytics && (
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}
