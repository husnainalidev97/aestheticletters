"use client";

import { useEffect, useState } from "react";

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

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
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 88 + 16; // top nav (5.5rem) + small buffer
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav
      className="sticky top-[5.5rem] z-40 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10"
      aria-label="On this page"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
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
