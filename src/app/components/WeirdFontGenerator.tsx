"use client";

import FontGenerator from "./FontGenerator";
import { weirdFontCategories } from "../lib/weirdFontStyles";

interface WeirdFontGeneratorProps {
  totalFontStyles: number;
}

export default function WeirdFontGenerator({ totalFontStyles }: WeirdFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={weirdFontCategories}
      defaultText="Weird Fonts"
    />
  );
}
