"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Monoton&family=Akronim&family=Syne+Tactile&family=Tac+One&family=Single+Day&family=Trade+Winds&family=Ole&family=Mountains+of+Christmas&family=Joti+One&family=Rubik+Glitch&family=Rubik+Burned&family=Rubik+Spray+Paint&family=Creepster&family=Eater&family=Metal+Mania&family=Vampiro+One&family=Kablammo&family=Rubik+Bubbles&family=Rubik+Puddles&family=Rubik+Wet+Paint&family=Moo+Lah+Lah&family=Birthstone+Bounce&family=Qwitcher+Grypen&family=Ingrid+Darling&family=Princess+Sofia&family=Twinkle+Star&family=Condiment&family=Oregano&family=Bonbon&family=Codystar&family=Rubik+Microbe&family=Rubik+Storm&family=Metamorphous&family=Chokokutai&family=Henny+Penny&family=Jolly+Lodger&family=Shizuru&family=Cossette+Titre&display=swap";

export default function StylishGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-stylish-fonts="all"]')) return;

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

    let link: HTMLLinkElement | null = null;
    const load = () => {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS_URL;
      link.dataset.stylishFonts = "all";
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
