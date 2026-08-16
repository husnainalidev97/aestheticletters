"use client";

import FontGenerator from "./FontGenerator";
import { preppyFontCategories } from "../lib/preppyFontStyles";

interface PreppyFontGeneratorProps {
  totalFontStyles: number;
}

export default function PreppyFontGenerator({ totalFontStyles }: PreppyFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={preppyFontCategories}
      defaultText="Preppy Fonts"
    />
  );
}
