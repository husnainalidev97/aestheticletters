"use client";

import dynamic from "next/dynamic";

function StyleCardSkeleton() {
  return (
    <div className="rounded-xl bg-surface-container-lowest p-6 md:p-8 space-y-3">
      <div className="h-5 w-40 rounded bg-surface-container-low animate-pulse" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col p-4 gap-3 rounded-xl bg-surface">
          <div className="h-3 w-24 rounded-full bg-surface-container-high animate-pulse" />
          <div className="h-5 w-full rounded bg-surface-container-low animate-pulse" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="w-10 h-8 rounded-full bg-surface-container-low animate-pulse" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const CursiveFontGenerator = dynamic(() => import("./CursiveFontGenerator"), {
  loading: () => (
    <>
      {/* Generator input skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
          <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
          <div className="h-[48px] rounded-xl bg-surface-container-low animate-pulse" />
        </div>
      </section>
      {/* Category cards skeleton — reserves space to prevent CLS */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StyleCardSkeleton />
          <StyleCardSkeleton />
          <StyleCardSkeleton />
        </div>
      </section>
    </>
  ),
});

export default CursiveFontGenerator;
