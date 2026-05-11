import { fontCategories } from "./fontStyles";
import { fancyFontCategories } from "./fancyFontStyles";
import { stylishFontCategories } from "./stylishFontStyles";
import { cuteFontCategories } from "./cuteFontStyles";
import { cursiveUnicodeStyles } from "../cursive-fonts/cursiveUnicodeStyles";

// Instagram font cards are in a "use client" component and cannot be imported
// at static build time. Count is derived from 12 categories × ~10 styles each.
const INSTAGRAM_FONT_STYLE_COUNT = 121;

/**
 * Dynamically counts every font style registered across all data files.
 * Keeps the displayed number in sync whenever new styles are added.
 */
export function getTotalFontStyleCount(): number {
  const homeCount = fontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const fancyCount = fancyFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const stylishCount = stylishFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const cuteCount = cuteFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const cursiveCount = Object.values(cursiveUnicodeStyles).reduce(
    (sum, styles) => sum + styles.length,
    0,
  );
  return homeCount + fancyCount + stylishCount + cuteCount + cursiveCount + INSTAGRAM_FONT_STYLE_COUNT;
}
