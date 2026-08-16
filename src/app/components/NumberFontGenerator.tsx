"use client";

import FontGenerator from "./FontGenerator";
import { numberFontCategories } from "../lib/numberFontStyles";

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
