"use client";

import { useEffect } from "react";

/** Fonts for the first visible categories / showcase (loaded on idle). */
const INITIAL_FONTS = [
  "Monoton",
  "Akronim",
  "Syne+Tactile",
  "Tac+One",
  "Single+Day",
  "Trade+Winds",
  "Ole",
  "Mountains+of+Christmas",
  "Joti+One",
  "Rubik+Glitch",
  "Rubik+Burned",
  "Rubik+Spray+Paint",
  "Creepster",
  "Eater",
  "Metal+Mania",
  "Vampiro+One",
  "Kablammo",
  "Rubik+Bubbles",
  "Rubik+Puddles",
];

/** Remaining fonts (loaded on "Explore More" or after delay). */
const DEFERRED_FONTS = [
  "Rubik+Wet+Paint",
  "Moo+Lah+Lah",
  "Birthstone+Bounce",
  "Qwitcher+Grypen",
  "Ingrid+Darling",
  "Princess+Sofia",
  "Twinkle+Star",
  "Condiment",
  "Oregano",
  "Bonbon",
  "Codystar",
  "Rubik+Microbe",
  "Rubik+Storm",
  "Metamorphous",
  "Chokokutai",
  "Henny+Penny",
  "Jolly+Lodger",
  "Shizuru",
  "Cossette+Titre",
];

function buildUrl(families: string[]): string {
  return (
    "https://fonts.googleapis.com/css2?" +
    families.map((f) => `family=${f}`).join("&") +
    "&display=swap"
  );
}

export default function StylishGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-stylish-fonts="initial"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.stylishFonts = "preconnect";
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
      initialLink.dataset.stylishFonts = "initial";
      document.head.appendChild(initialLink);
    };

    const loadDeferred = () => {
      if (document.querySelector('link[data-stylish-fonts="deferred"]')) return;
      deferredLink = document.createElement("link");
      deferredLink.rel = "stylesheet";
      deferredLink.href = buildUrl(DEFERRED_FONTS);
      deferredLink.dataset.stylishFonts = "deferred";
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
    window.addEventListener("stylish-explore-more", onExploreMore);
    deferredTimeout = window.setTimeout(loadDeferred, 4000);

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (deferredTimeout !== null) window.clearTimeout(deferredTimeout);
      window.removeEventListener("stylish-explore-more", onExploreMore);
      if (initialLink && initialLink.parentNode) initialLink.parentNode.removeChild(initialLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}
