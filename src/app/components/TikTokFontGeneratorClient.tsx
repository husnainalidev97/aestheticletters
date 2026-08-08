"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const TikTokFontGenerator = lazy(() => import("./TikTokFontGenerator"));

function Skeleton() {
  return (
    <div className="min-h-[600px] md:min-h-[900px]">
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
          <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
          <div className="h-[40px] rounded-xl bg-surface-container-low animate-pulse" />
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[280px] rounded-xl bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  );
}

interface TikTokFontGeneratorClientProps {
  totalFontStyles: number;
}

export default function TikTokFontGeneratorClient({ totalFontStyles }: TikTokFontGeneratorClientProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: number | undefined;
    if ("requestIdleCallback" in window) {
      id = window.requestIdleCallback(() => setReady(true), { timeout: 1200 });
      return () => {
        if (id !== undefined) window.cancelIdleCallback(id);
      };
    }
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <Skeleton />;

  return (
    <Suspense fallback={<Skeleton />}>
      <TikTokFontGenerator totalFontStyles={totalFontStyles} />
    </Suspense>
  );
}
