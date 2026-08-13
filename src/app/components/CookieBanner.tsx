"use client";

import { useState } from "react";
import { useConsent } from "./ConsentProvider";

export default function CookieBanner() {
  const { consent, setConsent, requiresConsent } = useConsent();
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [ads, setAds] = useState(true);

  const acceptAll = () => {
    setConsent({ analytics: true, ads: true, functional: true });
    setExpanded(false);
  };

  const rejectOptional = () => {
    setConsent({ analytics: false, ads: false, functional: true });
    setExpanded(false);
  };

  const savePreferences = () => {
    setConsent({ analytics, ads, functional: true });
    setExpanded(false);
  };

  const openManage = () => {
    setAnalytics(consent?.analytics ?? true);
    setAds(consent?.ads ?? true);
    setExpanded(true);
  };

  const closeManage = () => {
    setExpanded(false);
  };

  if (expanded) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie preferences"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50"
      >
        <div className="w-full max-w-md rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-2xl">
          <h2 className="font-headline text-xl font-bold text-on-surface mb-2">
            Manage cookie preferences
          </h2>
          <p className="text-sm text-on-surface-variant mb-6">
            You can choose which cookies you are comfortable with. Essential
            cookies are always active to keep the site working.
          </p>

          <div className="space-y-4 mb-6">
            <label className="flex items-start justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div>
                <span className="block font-semibold text-on-surface">
                  Analytics
                </span>
                <span className="text-sm text-on-surface-variant">
                  Helps us understand how visitors use the site.
                </span>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-5 w-5 accent-primary"
              />
            </label>

            <label className="flex items-start justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div>
                <span className="block font-semibold text-on-surface">
                  Personalized advertising
                </span>
                <span className="text-sm text-on-surface-variant">
                  Used by Google AdSense and similar partners to show relevant
                  ads.
                </span>
              </div>
              <input
                type="checkbox"
                checked={ads}
                onChange={(e) => setAds(e.target.checked)}
                className="mt-1 h-5 w-5 accent-primary"
              />
            </label>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <button
              onClick={closeManage}
              className="flex-1 px-4 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant font-medium hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={savePreferences}
              className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-on-primary font-medium hover:bg-primary/90 transition-colors"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!requiresConsent || consent !== null) return null;

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-outline-variant p-2 shadow-lg"
    >
      <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-on-surface-variant text-center">
          We use cookies for analytics and ads.
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptAll}
            className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Accept all
          </button>
          <button
            onClick={rejectOptional}
            className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface-variant font-medium hover:bg-surface-container transition-colors whitespace-nowrap"
          >
            Reject
          </button>
          <button
            onClick={openManage}
            className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface font-medium hover:bg-surface-container transition-colors whitespace-nowrap"
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
