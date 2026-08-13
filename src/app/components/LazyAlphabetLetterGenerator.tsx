"use client";

import dynamic from "next/dynamic";

function LoadingSkeleton() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-8 md:py-12">
      <div className="w-full max-w-3xl mx-auto space-y-5">
        <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
        <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-surface-container-low animate-pulse" />
        ))}
      </div>
    </div>
  );
}

const AlphabetLetterGenerator = dynamic(() => import("./AlphabetLetterGenerator"), {
  loading: LoadingSkeleton,
  ssr: false,
});

interface LazyAlphabetLetterGeneratorProps {
  letter: string;
  defaultText?: string;
  hideInputHeader?: boolean;
}

export default function LazyAlphabetLetterGenerator(props: LazyAlphabetLetterGeneratorProps) {
  return <AlphabetLetterGenerator {...props} />;
}
