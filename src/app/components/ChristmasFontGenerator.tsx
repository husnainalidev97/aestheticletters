"use client";

import FontGenerator from "./FontGenerator";
import { christmasFontCategories } from "../lib/christmasFontStyles";

interface ChristmasFontGeneratorProps {
  totalFontStyles: number;
}

export default function ChristmasFontGenerator({ totalFontStyles }: ChristmasFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={christmasFontCategories}
      defaultText="Merry Christmas"
    />
  );
}
