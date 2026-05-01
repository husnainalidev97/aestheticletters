"use client";

import { useEffect } from "react";

const FONT_FAMILIES = [
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

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  FONT_FAMILIES.map((f) => `family=${f}`).join("&") +
  "&display=swap";

/**
 * Loads the cursive Google Fonts stylesheet after the browser has
 * finished its initial paint and is idle. This yields the main thread
 * during hydration so LCP isn't delayed by the ~40-family CSS request
 * and the subsequent style recalculation it triggers.
 */
export default function CursiveGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-cursive-fonts="all"]')) return;

    // Warm up the Google Fonts connections in parallel with idle time
    // so the DNS + TCP + TLS handshakes are already done by the time
    // `load()` appends the stylesheet link.
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

    let link: HTMLLinkElement | null = null;
    const load = () => {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS_URL;
      link.dataset.cursiveFonts = "all";
      document.head.appendChild(link);
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
      idleHandle = win.requestIdleCallback(load, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(load, 200);
    }

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (link && link.parentNode) link.parentNode.removeChild(link);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}
