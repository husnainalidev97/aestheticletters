"use client";

import FontGenerator from "./FontGenerator";
import { twitterFontCategories, calculateXWeight } from "../lib/twitterFontStyles";

interface TwitterFontGeneratorProps {
  totalFontStyles: number;
}

export default function TwitterFontGenerator({ totalFontStyles }: TwitterFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={twitterFontCategories}
      defaultText="Twitter Fonts"
      charWeightFn={calculateXWeight}
      charWeightMax={280}
      charWeightLabel="X Weight"
    />
  );
}
