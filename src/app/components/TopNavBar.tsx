"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ActivePage =
  | "home"
  | "all-tools"
  | "about"
  | "instagram-fonts"
  | "cursive-fonts"
  | "fancy-fonts";

interface TopNavBarProps {
  activePage?: ActivePage;
}

const navLinks = [
  { label: "Home", page: "home", href: "/" },
  { label: "All Tools", page: "all-tools", href: "/all-tools" },
  { label: "About", page: "about", href: "/about" },
] as const;

export default function TopNavBar({ activePage }: TopNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = (page: string) =>
    page === activePage
      ? "text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      : "text-zinc-600 hover:text-zinc-900 hover:opacity-80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm";

  const mobileLinkClass = (page: string) =>
    page === activePage
      ? "block w-full px-6 py-4 text-lg font-headline font-bold text-primary bg-primary-fixed/60 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      : "block w-full px-6 py-4 text-lg font-headline font-medium text-zinc-700 hover:bg-surface-container-low rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

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
      <nav className="fixed top-0 left-0 w-full h-[5.5rem] z-50 bg-[#fcf9f8]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(28,27,27,0.06)] flex justify-between items-center px-4 md:px-[150px]">
        <Link
          href="/"
          className="font-headline text-2xl font-bold text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
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
        </div>
        <button
          type="button"
          className="md:hidden p-3 -m-1 text-primary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
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
          className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        {/* Panel */}
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute top-[5.5rem] right-0 left-0 bg-[#fcf9f8] shadow-lg transition-transform duration-300 ${
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
            <span className="px-6 pt-2 text-xs font-label uppercase tracking-[0.2em] text-outline">
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
          </nav>
        </div>
      </div>
    </>
  );
}
