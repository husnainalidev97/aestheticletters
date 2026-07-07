"use client";

import dynamic from "next/dynamic";

function FontCardsSkeleton() {
  return (
    <>
      {/* Generator skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          <div className="h-[56px] md:h-[120px] bg-surface-container-low rounded-xl animate-pulse" />
          <div className="h-12 bg-surface-container-low rounded-2xl animate-pulse" />
          <div className="flex justify-center gap-2 flex-wrap">
            {["Instagram Bio Fonts", "Instagram Caption Fonts", "Instagram Fonts for Girls"].map(
              (label) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-full bg-surface-container-low text-xs text-transparent animate-pulse"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
      {/* Cards skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-xl bg-surface-container-lowest p-6 md:p-8">
              <div className="h-6 w-48 bg-surface-container-high rounded animate-pulse mb-6" />
              <div className="space-y-3">
                {[0, 1, 2].map((j) => (
                  <div key={j} className="h-[100px] bg-surface rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const InstagramFontCards = dynamic(
  () => import("./InstagramFontCards"),
  {
    ssr: false,
    loading: () => <FontCardsSkeleton />,
  },
);

export default InstagramFontCards;
