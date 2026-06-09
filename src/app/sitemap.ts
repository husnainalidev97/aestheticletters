import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aestheticletters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /* Tool pages — updated with Text History, Platform Preview, Download as Image */
  const toolsModified = new Date("2026-06-08T00:00:00Z");
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
      lastModified: toolsModified,
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
      lastModified: toolsModified,
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
      lastModified: toolsModified,
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
      lastModified: toolsModified,
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
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: infoModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-services`,
      lastModified: infoModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: infoModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
