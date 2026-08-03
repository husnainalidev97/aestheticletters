"use client";

import { useEffect, useRef, useState, Suspense, lazy } from "react";
import type { ShowcaseCard } from "./ShowcaseGrid";

const ShowcaseGrid = lazy(() => import("./ShowcaseGrid"));

export default function ShowcaseGridLazy({ cards }: { cards: ShowcaseCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="max-w-6xl mx-auto h-96 rounded-2xl bg-surface-container-low animate-pulse" />
          }
        >
          <ShowcaseGrid cards={cards} />
        </Suspense>
      ) : (
        <div className="max-w-6xl mx-auto h-96 rounded-2xl bg-surface-container-low animate-pulse" />
      )}
    </div>
  );
}
