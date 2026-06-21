import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aestheticletters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /* Tool pages — default last-modified for pages not individually updated */
  const toolsModified = new Date("2026-06-21T00:00:00Z");
  /* Stylish fonts — major overhaul: Unicode styles, schema, SVG icons, OG image */
  const stylishFontsModified = new Date("2026-06-21T00:00:00Z");
  /* Info & legal pages — not modified in this update cycle */
  const infoModified = new Date("2026-04-19T00:00:00Z");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/fancy-fonts`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cursive-fonts`,
      lastModified: new Date("2026-06-21T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/instagram-fonts`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/stylish-fonts`,
      lastModified: stylishFontsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cute-fonts`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/halloween-fonts`,
      lastModified: new Date("2026-06-21T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/facebook-fonts`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/serif-fonts`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sans-serif-fonts`,
      lastModified: new Date("2026-06-21T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/all-tools`,
      lastModified: toolsModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: infoModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: infoModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },

  ];
}
