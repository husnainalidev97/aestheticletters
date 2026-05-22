"use client";

import { useEffect } from "react";

/** First 4 cards: Graveyard Gothic, Blood Drip, Cursed Script, Pumpkin Hollow */
const CRITICAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  "family=Mystery+Quest&family=Grenze+Gotisch&family=Ruslan+Display&family=New+Rocker&family=Road+Rage" +
  "&family=Eater&family=Rubik+Wet+Paint&family=Nosifer&family=Rubik+Puddles" +
  "&family=Rubik+Distressed&family=Rubik+Beastly&family=Stick" +
  "&family=Creepster&family=Emilys+Candy&family=Henny+Penny&family=Jolly+Lodger&family=Irish+Grover" +
  "&display=swap";

/** Remaining 6 cards: Ghost Whisper, Witch Spell, Skull Gothic, Moonlight Cursive, Dark Ritual, Bat Wing */
const DEFERRED_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  "family=Flavors&family=Are+You+Serious&family=Shadows+Into+Light" +
  "&family=Rubik+Gemstones&family=Ceviche+One&family=Tillana&family=Bahiana" +
  "&family=Butcherman&family=Asset&family=Rubik+Burned&family=Bangers" +
  "&family=Meddon&family=Purple+Purse" +
  "&family=Kablammo&family=Trade+Winds&family=Underdog&family=Sancreek&family=Manufacturing+Consent" +
  "&family=Barriecito&family=Barrio&family=Asimovian" +
  "&display=swap";

function injectLink(href: string, tag: string): HTMLLinkElement {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.halloweenFonts = tag;
  document.head.appendChild(link);
  return link;
}

export default function HalloweenGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-halloween-fonts="critical"]')) return;

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

    const criticalLink = injectLink(CRITICAL_FONTS_URL, "critical");

    let deferredLink: HTMLLinkElement | null = null;

    const win = window as typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout?: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const loadDeferred = () => {
      if (document.querySelector('link[data-halloween-fonts="deferred"]')) return;
      deferredLink = injectLink(DEFERRED_FONTS_URL, "deferred");
    };

    if (typeof win.requestIdleCallback === "function") {
      idleHandle = win.requestIdleCallback(loadDeferred, { timeout: 3000 });
    } else {
      timeoutHandle = window.setTimeout(loadDeferred, 1000);
    }

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (criticalLink.parentNode) criticalLink.parentNode.removeChild(criticalLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}
