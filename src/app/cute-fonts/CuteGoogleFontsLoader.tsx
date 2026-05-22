"use client";

import { useEffect } from "react";

/** Fonts for the first visible categories / showcase (loaded on idle). */
const INITIAL_FONTS = [
  "Butterfly+Kids",
  "Ruge+Boogie",
  "Puppies+Play",
  "Devonshire",
  "Fruktur",
  "Petit+Formal+Script",
  "Babylonica",
  "Dr+Sugiyama",
  "Festive",
  "DynaPuff",
  "Molle:ital@1",
  "Chango",
  "Spicy+Rice",
  "Life+Savers",
  "Ribeye+Marrow",
  "Combo",
];

/** Remaining fonts (loaded on "Explore More" or after delay). */
const DEFERRED_FONTS = [
  "Fascinate+Inline",
  "Crafty+Girls",
  "Padyakke+Expanded+One",
  "Snowburst+One",
  "Raleway+Dots",
  "Freckle+Face",
  "Elsie+Swash+Caps",
  "Spirax",
  "Plaster",
  "Monofett",
  "Warnes",
  "Splash",
  "Faster+One",
  "Sancreek",
  "Bigelow+Rules",
];

function buildUrl(families: string[]): string {
  return (
    "https://fonts.googleapis.com/css2?" +
    families.map((f) => `family=${f}`).join("&") +
    "&display=swap"
  );
}

export default function CuteGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-cute-fonts="initial"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.cuteFonts = "preconnect";
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
      initialLink.dataset.cuteFonts = "initial";
      document.head.appendChild(initialLink);
    };

    const loadDeferred = () => {
      if (document.querySelector('link[data-cute-fonts="deferred"]')) return;
      deferredLink = document.createElement("link");
      deferredLink.rel = "stylesheet";
      deferredLink.href = buildUrl(DEFERRED_FONTS);
      deferredLink.dataset.cuteFonts = "deferred";
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
      idleHandle = win.requestIdleCallback(loadInitial, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(loadInitial, 200);
    }

    // Load deferred batch on "Explore More" or after 4s
    let deferredTimeout: number | null = null;
    const onExploreMore = () => {
      loadDeferred();
      if (deferredTimeout !== null) window.clearTimeout(deferredTimeout);
    };
    window.addEventListener("cute-explore-more", onExploreMore);
    deferredTimeout = window.setTimeout(loadDeferred, 4000);

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (deferredTimeout !== null) window.clearTimeout(deferredTimeout);
      window.removeEventListener("cute-explore-more", onExploreMore);
      if (initialLink && initialLink.parentNode) initialLink.parentNode.removeChild(initialLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}
