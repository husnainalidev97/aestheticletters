"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useSyncExternalStore, useRef } from "react";

type ActivePage =
  | "home"
  | "all-tools"
  | "about"
  | "instagram-fonts"
  | "cursive-fonts"
  | "fancy-fonts"
  | "stylish-fonts"
  | "cute-fonts"
  | "halloween-fonts";

interface TopNavBarProps {
  activePage?: ActivePage;
}

const navLinks = [
  { label: "Home", page: "home", href: "/" },
  { label: "All Tools", page: "all-tools", href: "/all-tools" },
  { label: "About", page: "about", href: "/about" },
] as const;

// Theme store backed by the <html> class list + localStorage
const themeListeners = new Set<() => void>();
function subscribeTheme(cb: () => void) {
  themeListeners.add(cb);
  return () => { themeListeners.delete(cb); };
}
function getThemeSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}
function getThemeServerSnapshot(): boolean {
  return false;
}

export default function TopNavBar({ activePage }: TopNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const [showGlow, setShowGlow] = useState(false);
  const glowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start glow animation for new users
  useEffect(() => {
    const seen = localStorage.getItem("theme-toggle-seen");
    if (!seen) {
      setShowGlow(true); // eslint-disable-line react-hooks/set-state-in-effect -- conditional one-time init based on external store
      glowTimerRef.current = setTimeout(() => {
        setShowGlow(false);
        localStorage.setItem("theme-toggle-seen", "1");
      }, 6000);
    }
    return () => {
      if (glowTimerRef.current) clearTimeout(glowTimerRef.current);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    themeListeners.forEach((cb) => cb());
    setShowGlow(false);
    localStorage.setItem("theme-toggle-seen", "1");
    if (glowTimerRef.current) clearTimeout(glowTimerRef.current);
  }, [isDark]);

  const desktopLinkClass = (page: string) =>
    page === activePage
      ? "text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      : "text-on-surface-variant hover:text-on-background hover:opacity-80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm";

  const mobileLinkClass = (page: string) =>
    page === activePage
      ? "block w-full px-6 py-4 text-lg font-headline font-bold text-primary bg-primary-fixed/60 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      : "block w-full px-6 py-4 text-lg font-headline font-medium text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  // Close menu on Escape and when resized to desktop
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const mql = window.matchMedia("(min-width: 768px)");
    const onResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsOpen(false);
    };
    onResize(mql);

    document.addEventListener("keydown", onKey);
    mql.addEventListener("change", onResize);

    // Lock background scroll while drawer is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      mql.removeEventListener("change", onResize);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[5.5rem] z-50 bg-background/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(28,27,27,0.06)] flex justify-between items-center px-4 md:px-[150px] transition-colors duration-300">
        <Link
          href="/"
          className="font-headline text-2xl font-bold text-on-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          Aesthetic Letters
        </Link>
        <div className="hidden md:flex items-center gap-10 font-body font-medium tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              className={desktopLinkClass(link.page)}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex flex-col items-center p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary${showGlow ? " animate-theme-glow" : ""}`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isDark ? "light_mode" : "dark_mode"}
            </span>
            <span className="text-[0.55rem] leading-none mt-0.5">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex flex-col items-center p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary${showGlow ? " animate-theme-glow" : ""}`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isDark ? "light_mode" : "dark_mode"}
            </span>
            <span className="text-[0.55rem] leading-none mt-0.5">{isDark ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center p-3 -m-1 text-primary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
            <span className="text-[0.55rem] leading-none mt-0.5">{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-on-background/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        {/* Panel */}
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute top-[5.5rem] right-0 left-0 bg-background shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                className={mobileLinkClass(link.page)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-outline-variant/30 my-2" />
            <span className="px-6 pt-2 text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">
              Generators
            </span>
            <Link
              href="/instagram-fonts"
              className={mobileLinkClass("instagram-fonts")}
              onClick={() => setIsOpen(false)}
            >
              Instagram Fonts
            </Link>
            <Link
              href="/cursive-fonts"
              className={mobileLinkClass("cursive-fonts")}
              onClick={() => setIsOpen(false)}
            >
              Cursive Fonts
            </Link>
            <Link
              href="/fancy-fonts"
              className={mobileLinkClass("fancy-fonts")}
              onClick={() => setIsOpen(false)}
            >
              Fancy Fonts
            </Link>
            <Link
              href="/stylish-fonts"
              className={mobileLinkClass("stylish-fonts")}
              onClick={() => setIsOpen(false)}
            >
              Stylish Fonts
            </Link>
            <Link
              href="/cute-fonts"
              className={mobileLinkClass("cute-fonts")}
              onClick={() => setIsOpen(false)}
            >
              Cute Fonts
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
