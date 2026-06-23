"use client";

import dynamic from "next/dynamic";
import { numberFontCategories } from "../lib/numberFontStyles";

const FontGenerator = dynamic(() => import("./FontGenerator"), {
  loading: () => (
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
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[280px] rounded-xl bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  ),
});

interface NumberFontGeneratorProps {
  totalFontStyles: number;
}

export default function NumberFontGenerator({ totalFontStyles }: NumberFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={numberFontCategories}
      defaultText="12345"
    />
  );
}
