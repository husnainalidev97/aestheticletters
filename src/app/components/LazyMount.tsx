"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function getInitialInView() {
  if (typeof window === "undefined") return false;
  return !("IntersectionObserver" in window);
}

export default function LazyMount({
  children,
  className,
  rootMargin = "200px",
  triggerOnce = true,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(getInitialInView);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              if (triggerOnce) observer.disconnect();
            } else if (!triggerOnce) {
              setInView(false);
            }
          });
        },
        { rootMargin, threshold: 0 },
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
    return undefined;
  }, [rootMargin, triggerOnce, inView]);

  if (!inView) {
    return <div ref={ref} className={className} aria-hidden="true" />;
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
