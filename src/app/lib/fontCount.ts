import { fontCategories } from "./fontStyles";
import { fancyFontCategories } from "./fancyFontStyles";
import { cursiveUnicodeStyles } from "../cursive-fonts/cursiveUnicodeStyles";

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
  const cursiveCount = Object.values(cursiveUnicodeStyles).reduce(
    (sum, styles) => sum + styles.length,
    0,
  );
  return homeCount + fancyCount + cursiveCount;
}
