"use client";

import { useEffect, useRef, useState } from "react";

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateScrollHints = () => {
    const el = containerRef.current;
    if (!el) return;
    const threshold = 16;
    setShowLeft(el.scrollLeft > threshold);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - threshold);
  };

  useEffect(() => {
    if (typeof window === "undefined" || !sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      // active section is the one whose top is just below the sticky header + nav
      { rootMargin: "-132px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Keep the active pill visible inside the scroll container
  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const btn = document.getElementById(`nav-${activeId}`);
    const container = containerRef.current;
    if (!btn) return;

    const containerWidth = container.clientWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.clientWidth;
    const targetLeft = btnLeft - containerWidth / 2 + btnWidth / 2;

    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeId]);

  useEffect(() => {
    updateScrollHints();
  }, []);

  const handleScroll = () => {
    updateScrollHints();
  };

  const scrollBy = (amount: number) => {
    containerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el || !navRef.current) return;

    const navBottom = navRef.current.getBoundingClientRect().bottom;
    const y = el.getBoundingClientRect().top + window.scrollY - navBottom - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-[5.5rem] z-40 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10"
      aria-label="On this page"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-3 relative">
        {/* Left fade + scroll button */}
        <div
          className={`pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10 md:hidden transition-opacity duration-300 ${
            showLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        {showLeft && (
          <button
            onClick={() => scrollBy(-150)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface shadow-sm hover:bg-surface-container"
            aria-label="Scroll navigation left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}

        {/* Right fade + scroll button */}
        <div
          className={`pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10 md:hidden transition-opacity duration-300 ${
            showRight ? "opacity-100" : "opacity-0"
          }`}
        />
        {showRight && (
          <button
            onClick={() => scrollBy(150)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface shadow-sm hover:bg-surface-container"
            aria-label="Scroll navigation right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        )}

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide"
        >
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                id={`nav-${section.id}`}
                onClick={() => handleClick(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
