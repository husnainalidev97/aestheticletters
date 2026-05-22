"use client";

import { useEffect } from "react";

/** Fonts for the first 3 visible categories (above the fold). */
const CRITICAL_FONTS = [
  "Playwrite+Ireland",
  "Caveat",
  "Shadows+Into+Light",
  "Indie+Flower",
  "Patrick+Hand",
  "Handlee",
  "Kalam",
  "Amatic+SC",
  "Gloria+Hallelujah",
  "Reenie+Beanie",
  "Sriracha",
  "Ms+Madi",
  "Italianno",
  "Nothing+You+Could+Do",
  "Cedarville+Cursive",
  "Sue+Ellen+Francisco",
  "Mr+De+Haviland",
  "Mr+Dafoe",
];

/** Fonts for categories 4-8 (loaded on "Explore More" or after delay). */
const DEFERRED_FONTS = [
  "Permanent+Marker",
  "Caveat+Brush",
  "Nanum+Brush+Script",
  "Lacquer",
  "Vibur",
  "Sedgwick+Ave+Display",
  "Playwrite+Peru",
  "Playwrite+VN+Guides",
  "Homemade+Apple",
  "Leckerli+One",
  "Bubblegum+Sans",
  "Mansalva",
  "Meddon",
  "Oooh+Baby",
  "Merienda",
  "Rock+Salt",
  "Rancho",
  "Knewave",
  "Montez",
  "Shadows+Into+Light+Two",
  "Nanum+Pen+Script",
  "Ma+Shan+Zheng",
  "Mali",
  "Covered+By+Your+Grace",
  "Give+You+Glory",
  "Solitreo",
];

function buildUrl(families: string[]): string {
  return (
    "https://fonts.googleapis.com/css2?" +
    families.map((f) => `family=${f}`).join("&") +
    "&display=swap"
  );
}

/**
 * Loads cursive Google Fonts in two batches:
 * 1. Critical batch (18 fonts for first 3 categories) — loaded on idle.
 * 2. Deferred batch (26 fonts for remaining categories) — loaded when
 *    the user clicks "Explore More" or after a 4s timeout, whichever
 *    comes first.
 */
export default function CursiveGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-cursive-fonts="critical"]')) return;

    let criticalLink: HTMLLinkElement | null = null;
    let deferredLink: HTMLLinkElement | null = null;

    const loadCritical = () => {
      criticalLink = document.createElement("link");
      criticalLink.rel = "stylesheet";
      criticalLink.href = buildUrl(CRITICAL_FONTS);
      criticalLink.dataset.cursiveFonts = "critical";
      document.head.appendChild(criticalLink);
    };

    const loadDeferred = () => {
      if (document.querySelector('link[data-cursive-fonts="deferred"]')) return;
      deferredLink = document.createElement("link");
      deferredLink.rel = "stylesheet";
      deferredLink.href = buildUrl(DEFERRED_FONTS);
      deferredLink.dataset.cursiveFonts = "deferred";
      document.head.appendChild(deferredLink);
    };

    const win = window as typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout?: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof win.requestIdleCallback === "function") {
      idleHandle = win.requestIdleCallback(loadCritical, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(loadCritical, 200);
    }

    let deferredTimeout: number | null = null;
    const onExploreMore = () => {
      loadDeferred();
      if (deferredTimeout !== null) window.clearTimeout(deferredTimeout);
    };
    window.addEventListener("cursive-explore-more", onExploreMore);
    deferredTimeout = window.setTimeout(loadDeferred, 4000);

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (deferredTimeout !== null) window.clearTimeout(deferredTimeout);
      window.removeEventListener("cursive-explore-more", onExploreMore);
      if (criticalLink && criticalLink.parentNode) criticalLink.parentNode.removeChild(criticalLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
    };
  }, []);

  return null;
}
