"use client";

import { useEffect } from "react";

/** Fonts needed for the first 4 visible categories (initial paint). */
const INITIAL_FONTS = [
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
  "Permanent+Marker",
  "Caveat+Brush",
  "Nanum+Brush+Script",
  "Lacquer",
  "Vibur",
  "Sedgwick+Ave+Display",
];

/** Fonts for categories 5-8 (loaded on "Explore More" or after delay). */
const DEFERRED_FONTS = [
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
 * 1. Initial batch (24 fonts for first 4 categories) — loaded on idle.
 * 2. Deferred batch (20 fonts for remaining categories) — loaded when
 *    the user clicks "Explore More" or after a 4s timeout, whichever
 *    comes first. This prevents the massive style-recalc storm that
 *    was tanking desktop TBT.
 */
export default function CursiveGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-cursive-fonts="initial"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.cursiveFonts = "preconnect";
      document.head.appendChild(el);
      preconnects.push(el);
    };
    addPreconnect("https://fonts.googleapis.com");
    addPreconnect("https://fonts.gstatic.com", "anonymous");

    let initialLink: HTMLLinkElement | null = null;
    let deferredLink: HTMLLinkElement | null = null;

    const loadInitial = () => {
      initialLink = document.createElement("link");
      initialLink.rel = "stylesheet";
      initialLink.href = buildUrl(INITIAL_FONTS);
      initialLink.dataset.cursiveFonts = "initial";
      document.head.appendChild(initialLink);
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

    // Load initial batch on idle
    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof win.requestIdleCallback === "function") {
      idleHandle = win.requestIdleCallback(loadInitial, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(loadInitial, 200);
    }

    // Load deferred batch on "Explore More" click or after 4s
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
      if (initialLink && initialLink.parentNode) initialLink.parentNode.removeChild(initialLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}
