// ---------------------------------------------------------------------------
// Serif Font Style Definitions — EXCLUSIVE to /serif-fonts page
// 8 Google Font categories × 34 serif fonts total
// ---------------------------------------------------------------------------

import type { FontCategory } from "./fontStyles";

export const serifFontCategories: FontCategory[] = [
  {
    name: "Transitional",
    styles: [
      { name: "Lora", transform: (t) => t, fontFamily: "'Lora', serif" },
      { name: "Libre Baskerville", transform: (t) => t, fontFamily: "'Libre Baskerville', serif" },
      { name: "Merriweather", transform: (t) => t, fontFamily: "'Merriweather', serif" },
      { name: "Source Serif 4", transform: (t) => t, fontFamily: "'Source Serif 4', serif" },
      { name: "Crimson Pro", transform: (t) => t, fontFamily: "'Crimson Pro', serif" },
    ],
  },
  {
    name: "Old Style",
    styles: [
      { name: "EB Garamond", transform: (t) => t, fontFamily: "'EB Garamond', serif" },
      { name: "Cormorant Garamond", transform: (t) => t, fontFamily: "'Cormorant Garamond', serif" },
      { name: "Cardo", transform: (t) => t, fontFamily: "'Cardo', serif" },
      { name: "Fraunces", transform: (t) => t, fontFamily: "'Fraunces', serif" },
      { name: "Spectral", transform: (t) => t, fontFamily: "'Spectral', serif" },
    ],
  },
  {
    name: "Slab",
    styles: [
      { name: "Roboto Slab", transform: (t) => t, fontFamily: "'Roboto Slab', serif" },
      { name: "Bitter", transform: (t) => t, fontFamily: "'Bitter', serif" },
      { name: "Zilla Slab", transform: (t) => t, fontFamily: "'Zilla Slab', serif" },
      { name: "Crete Round", transform: (t) => t, fontFamily: "'Crete Round', serif" },
      { name: "Josefin Slab", transform: (t) => t, fontFamily: "'Josefin Slab', serif" },
    ],
  },
  {
    name: "Modern",
    styles: [
      { name: "Old Standard TT", transform: (t) => t, fontFamily: "'Old Standard TT', serif" },
      { name: "GFS Didot", transform: (t) => t, fontFamily: "'GFS Didot', serif" },
      { name: "Oranienbaum", transform: (t) => t, fontFamily: "'Oranienbaum', serif" },
      { name: "Italiana", transform: (t) => t, fontFamily: "'Italiana', serif" },
    ],
  },
  {
    name: "Humanist",
    styles: [
      { name: "Faustina", transform: (t) => t, fontFamily: "'Faustina', serif" },
      { name: "Noto Serif", transform: (t) => t, fontFamily: "'Noto Serif', serif" },
      { name: "Gentium Plus", transform: (t) => t, fontFamily: "'Gentium Plus', serif" },
      { name: "Tinos", transform: (t) => t, fontFamily: "'Tinos', serif" },
    ],
  },
  {
    name: "Scotch",
    styles: [
      { name: "Bodoni Moda", transform: (t) => t, fontFamily: "'Bodoni Moda', serif" },
      { name: "DM Serif Display", transform: (t) => t, fontFamily: "'DM Serif Display', serif" },
      { name: "DM Serif Text", transform: (t) => t, fontFamily: "'DM Serif Text', serif" },
    ],
  },
  {
    name: "Didone",
    styles: [
      { name: "Playfair Display", transform: (t) => t, fontFamily: "'Playfair Display', serif" },
      { name: "Cormorant", transform: (t) => t, fontFamily: "'Cormorant', serif" },
      { name: "Gloock", transform: (t) => t, fontFamily: "'Gloock', serif" },
      { name: "Yeseva One", transform: (t) => t, fontFamily: "'Yeseva One', serif" },
    ],
  },
  {
    name: "Fatface",
    styles: [
      { name: "Abril Fatface", transform: (t) => t, fontFamily: "'Abril Fatface', serif" },
      { name: "Rozha One", transform: (t) => t, fontFamily: "'Rozha One', serif" },
      { name: "Righteous", transform: (t) => t, fontFamily: "'Righteous', serif" },
      { name: "Ultra", transform: (t) => t, fontFamily: "'Ultra', serif" },
    ],
  },
];
