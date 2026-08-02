import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aestheticletters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /* Tool pages — default last-modified for pages not individually updated */
  const toolsModified = new Date("2026-06-29T00:00:00Z");
  /* Stylish fonts — major overhaul: Unicode styles, schema, SVG icons, OG image */
  const stylishFontsModified = new Date("2026-06-21T00:00:00Z");
  /* Info & legal pages — not modified in this update cycle */
  const infoModified = new Date("2026-04-19T00:00:00Z");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/aesthetic-font-styles-category-grid-preview.webp`,
        `${SITE_URL}/aesthetic-fonts-platform-mockups.webp`,
        `${SITE_URL}/how-aesthetic-font-generator-works-3-steps.webp`,
        `${SITE_URL}/common-mistakes-when-using-aesthetic-fonts.webp`,
        `${SITE_URL}/aesthetic-font-generator-vs-real-fonts-comparison.webp`,
        `${SITE_URL}/og-image.webp`,
      ],
    },
    {
      url: `${SITE_URL}/fancy-fonts`,
      lastModified: new Date("2026-07-06T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/fancy-fonts-og.webp`,
        `${SITE_URL}/fancy-fonts-tool-features.webp`,
      ],
    },
    {
      url: `${SITE_URL}/cursive-fonts`,
      lastModified: new Date("2026-06-25T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/cursive-fonts-og.webp`,
        `${SITE_URL}/how-to-use-this-cursive-fonts-generator-in-seconds.webp`,
      ],
    },
    {
      url: `${SITE_URL}/instagram-fonts`,
      lastModified: new Date("2026-07-06T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-og.webp`,
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-before-after.webp`,
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-generator-explained.webp`,
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-how-to-use.webp`,
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-styles-comparison.webp`,
        `${SITE_URL}/images/instagram-fonts/instagram-fonts-where-they-work.webp`,
      ],
    },
    {
      url: `${SITE_URL}/stylish-fonts`,
      lastModified: stylishFontsModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/how-to-use-the-stylish-font-maker-step-by-step.webp`,
        `${SITE_URL}/stylish-fonts-generator-explained-with-different-styles-and-show-features-which-are-completely-free.webp`,
      ],
    },
    {
      url: `${SITE_URL}/cute-fonts`,
      lastModified: new Date("2026-07-14T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/usage-cute-fonts.webp`,
        `${SITE_URL}/how-cute-unicode-letters-work-plain-text-to-copy-paste.webp`,
        `${SITE_URL}/what-are-cute-fonts-normal-versus-cute-unicode-styles.webp`,
        `${SITE_URL}/cute-fonts-vs-pretty-fonts-vs-aesthetic-fonts-comparison.webp`,
        `${SITE_URL}/top-10-cute-font-styles-preview-copy-and-paste.webp`,
        `${SITE_URL}/instagram-tiktok-cute-fonts-bio-mockup.webp`,
        `${SITE_URL}/whatsapp-facebook-cute-fonts-chat-mockup.webp`,
        `${SITE_URL}/discord-gaming-cute-fonts-username-mockup.webp`,
        `${SITE_URL}/pinterest-youtube-cute-fonts-mockup.webp`,
      ],
    },
    {
      url: `${SITE_URL}/halloween-fonts`,
      lastModified: new Date("2026-07-06T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/halloween-fonts-generator-75-spooky-gothic-and-creepy-copy-paste-text-styles-with-blood-drip-zalgo-skull-and-cursed-script-effects.webp`,
        `${SITE_URL}/halloween-fonts-generator-featured-image.webp`,
      ],
    },
    {
      url: `${SITE_URL}/facebook-fonts`,
      lastModified: new Date("2026-08-02T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-og.webp`,
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-what-are.webp`,
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-how-to-use.webp`,
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-where-they-work.webp`,
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-styles-comparison.webp`,
        `${SITE_URL}/images/facebook-fonts/facebook-fonts-for-businesses.webp`,
      ],
    },
    {
      url: `${SITE_URL}/serif-fonts`,
      lastModified: new Date("2026-07-07T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/serif-fonts-og.jpg`,
        `${SITE_URL}/serif-fonts-explained-visually.webp`,
      ],
    },
    {
      url: `${SITE_URL}/sans-serif-fonts`,
      lastModified: new Date("2026-07-14T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/sans-serif-fonts-generator-og.webp`,
        `${SITE_URL}/sans-serif-fonts-explained.webp`,
        `${SITE_URL}/what-are-sans-serif-fonts-serif-vs-sans-comparison.webp`,
        `${SITE_URL}/4-types-of-sans-serif-fonts-grotesque-neo-geometric-humanist.webp`,
        `${SITE_URL}/sans-serif-vs-serif-readability-comparison.webp`,
        `${SITE_URL}/top-15-sans-serif-fonts-specimen-preview.webp`,
        `${SITE_URL}/sans-serif-instagram-bio-mockup.webp`,
        `${SITE_URL}/sans-serif-facebook-post-mockup.webp`,
        `${SITE_URL}/sans-serif-x-twitter-profile-mockup.webp`,
        `${SITE_URL}/sans-serif-tiktok-profile-mockup.webp`,
        `${SITE_URL}/sans-serif-discord-username-mockup.webp`,
      ],
    },
    {
      url: `${SITE_URL}/number-font-generator`,
      lastModified: new Date("2026-06-29T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/number-font-generator/number-font-generator-og.webp`,
        `${SITE_URL}/images/number-font-generator/what-is-number-font-generator-before-after.webp`,
        `${SITE_URL}/images/number-font-generator/popular-unicode-number-font-styles-comparison.webp`,
        `${SITE_URL}/images/number-font-generator/lining-vs-oldstyle-number-figures-typography.webp`,
      ],
    },
    {
      url: `${SITE_URL}/bold-font-generator`,
      lastModified: new Date("2026-07-25T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/bold-font-generator/bold-font-generator-og.webp`,
        `${SITE_URL}/images/bold-font-generator/how-to-copy-paste-bold-fonts-three-steps.webp`,
        `${SITE_URL}/images/bold-font-generator/bold-text-works-best-social-media-platforms.webp`,
        `${SITE_URL}/images/bold-font-generator/nine-bold-font-styles-comparison-chart.webp`,
      ],
    },
    {
      url: `${SITE_URL}/big-text-generator`,
      lastModified: new Date("2026-07-17T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/big-text-generator/big-text-generator-og.webp`,
        `${SITE_URL}/images/big-text-generator/big-text-styles-comparison.webp`,
        `${SITE_URL}/images/big-text-generator/big-text-how-to-copy-paste.webp`,
        `${SITE_URL}/images/big-text-generator/big-text-fullwidth-vs-bold.webp`,
        `${SITE_URL}/images/big-text-generator/big-text-where-it-works.webp`,
        `${SITE_URL}/images/big-text-generator/big-text-boxes-fix.webp`,
      ],
    },
    {
      url: `${SITE_URL}/discord-fonts`,
      lastModified: new Date("2026-06-29T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/discord-fonts/discord-fonts-og.webp`,
        `${SITE_URL}/images/discord-fonts/discord-fonts-how-to-use.webp`,
        `${SITE_URL}/images/discord-fonts/discord-fonts-boxes-fix.webp`,
        `${SITE_URL}/images/discord-fonts/discord-fonts-server-styles.webp`,
        `${SITE_URL}/images/discord-fonts/discord-fonts-where-they-work.webp`,
      ],
    },
    {
      url: `${SITE_URL}/preppy-fonts`,
      lastModified: new Date("2026-07-09T11:30:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/preppy-fonts/preppy-fonts-og.webp`,
        `${SITE_URL}/images/preppy-fonts/preppy-font-aesthetics-comparison.webp`,
        `${SITE_URL}/images/preppy-fonts/preppy-instagram-bio-example.webp`,
        `${SITE_URL}/images/preppy-fonts/preppy-bio-formulas.webp`,
        `${SITE_URL}/images/preppy-fonts/preppy-vs-similar-aesthetics.webp`,
      ],
    },
    {
      url: `${SITE_URL}/weird-font-generator`,
      lastModified: new Date("2026-07-13T08:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/weird-font-generator/weird-font-generator-og.webp`,
        `${SITE_URL}/images/weird-font-generator/weird-fonts-how-to-use.webp`,
        `${SITE_URL}/images/weird-font-generator/weird-fonts-before-after.webp`,
        `${SITE_URL}/images/weird-font-generator/weird-fonts-styles-comparison.webp`,
        `${SITE_URL}/images/weird-font-generator/weird-fonts-real-scripts.webp`,
        `${SITE_URL}/images/weird-font-generator/weird-fonts-boxes-fix.webp`,
      ],
    },
    {
      url: `${SITE_URL}/christmas-fonts`,
      lastModified: new Date("2026-07-06T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/christmas-fonts/christmas-fonts-og.webp`,
        `${SITE_URL}/images/christmas-fonts/what-are-christmas-fonts-before-after.webp`,
        `${SITE_URL}/images/christmas-fonts/how-to-use-christmas-text-generator-three-steps.webp`,
        `${SITE_URL}/images/christmas-fonts/five-christmas-font-styles-comparison-chart.webp`,
        `${SITE_URL}/images/christmas-fonts/christmas-fonts-work-social-media-platforms.webp`,
      ],
    },
    {
      url: `${SITE_URL}/twitter-fonts`,
      lastModified: new Date("2026-07-07T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/twitter-fonts/twitter-fonts-og.webp`,
        `${SITE_URL}/images/twitter-fonts/twitter-fonts-how-to-use.webp`,
        `${SITE_URL}/images/twitter-fonts/twitter-fonts-character-cost.webp`,
        `${SITE_URL}/images/twitter-fonts/twitter-fonts-styles-comparison.webp`,
        `${SITE_URL}/images/twitter-fonts/twitter-fonts-where-they-work.webp`,
      ],
    },
    {
      url: `${SITE_URL}/all-tools`,
      lastModified: new Date("2026-07-02T00:00:00Z"),
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
