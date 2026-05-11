import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aestheticletters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/fancy-fonts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cursive-fonts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/instagram-fonts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/stylish-fonts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/all-tools`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-services`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
