"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  "family=Mystery+Quest&family=Grenze+Gotisch&family=Ruslan+Display&family=New+Rocker&family=Road+Rage" +
  "&family=Eater&family=Rubik+Wet+Paint&family=Nosifer&family=Rubik+Puddles" +
  "&family=Rubik+Distressed&family=Rubik+Beastly&family=Stick" +
  "&family=Creepster&family=Emilys+Candy&family=Henny+Penny&family=Jolly+Lodger&family=Irish+Grover" +
  "&family=Flavors&family=Are+You+Serious&family=Shadows+Into+Light" +
  "&family=Rubik+Gemstones&family=Ceviche+One&family=Tillana&family=Bahiana" +
  "&family=Butcherman&family=Asset&family=Rubik+Burned&family=Bangers" +
  "&family=Meddon&family=Purple+Purse" +
  "&family=Kablammo&family=Trade+Winds&family=Underdog&family=Sancreek&family=Manufacturing+Consent" +
  "&family=Barriecito&family=Barrio&family=Asimovian" +
  "&display=swap";

export default function HalloweenGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-halloween-fonts="all"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.halloweenFonts = "preconnect";
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
      link.dataset.halloweenFonts = "all";
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
