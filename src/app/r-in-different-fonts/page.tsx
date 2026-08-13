import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RPageContent from "../components/RPageContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pageTitle = "R in Different Fonts: 16 Free Unicode Styles to Copy";
const pageDescription =
  "See the letter R in different fonts, with 16 verified Unicode styles plus real R letters from other alphabets like Cyrillic and Thai. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/r-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-image.webp"],
  },
};

const designTheme = {
  "--color-background": "#0a0a0a",
  "--color-surface": "#061422",
  "--color-surface-bright": "#2d3a49",
  "--color-surface-dim": "#061422",
  "--color-surface-variant": "#293644",
  "--color-surface-container": "#13212e",
  "--color-surface-container-low": "#0f1d2a",
  "--color-surface-container-lowest": "#020f1c",
  "--color-surface-container-high": "#1e2b39",
  "--color-surface-container-highest": "#293644",
  "--color-on-background": "#d6e4f7",
  "--color-on-surface": "#d6e4f7",
  "--color-on-surface-variant": "#ccc3d2",
  "--color-outline": "#958e9c",
  "--color-outline-variant": "#4a4551",
  "--color-primary": "#d4bbff",
  "--color-on-primary": "#3e1975",
  "--color-primary-container": "#b794f4",
  "--color-on-primary-container": "#492680",
  "--color-primary-fixed": "#ebdcff",
  "--color-primary-fixed-dim": "#d4bbff",
  "--color-on-primary-fixed": "#270058",
  "--color-on-primary-fixed-variant": "#55338d",
  "--color-secondary": "#c8c6c5",
  "--color-on-secondary": "#303030",
  "--color-secondary-container": "#474746",
  "--color-on-secondary-container": "#b7b5b4",
  "--color-secondary-fixed": "#e5e2e1",
  "--color-secondary-fixed-dim": "#c8c6c5",
  "--color-on-secondary-fixed": "#1b1c1c",
  "--color-on-secondary-fixed-variant": "#474746",
  "--color-tertiary": "#d0cb4c",
  "--color-on-tertiary": "#333200",
  "--color-tertiary-container": "#aeaa2d",
  "--color-on-tertiary-container": "#3f3d00",
  "--color-tertiary-fixed": "#ece865",
  "--color-tertiary-fixed-dim": "#d0cb4c",
  "--color-on-tertiary-fixed": "#1e1d00",
  "--color-on-tertiary-fixed-variant": "#4b4900",
  "--color-error": "#ffb4ab",
  "--color-on-error": "#690005",
  "--color-error-container": "#93000a",
  "--color-on-error-container": "#ffdad6",
  "--color-inverse-surface": "#d6e4f7",
  "--color-inverse-on-surface": "#243240",
  "--color-inverse-primary": "#6d4ca6",
  "--color-surface-tint": "#d4bbff",
  "--font-headline": "var(--font-inter), 'Inter', sans-serif",
  "--font-body": "var(--font-inter), 'Inter', sans-serif",
  "--font-label": "var(--font-inter), 'Inter', sans-serif",
} as React.CSSProperties;

const faqs = [
  {
    question: "Does styled R text work in usernames?",
    answer:
      "Most platforms only allow plain letters and numbers in usernames, but styled R text works in bios, captions, and display names.",
  },
  {
    question: "Are these real fonts?",
    answer:
      "Not in the traditional sense. Each style here is a separate Unicode character with its own code point, not a typeface applied to normal letters. Because of this, the text pastes and displays as plain characters everywhere, with nothing to install.",
  },
  {
    question: "Why do some R styles look different from others?",
    answer: "A few styles come from an older part of Unicode, so they look more distinct than the rest.",
  },
  {
    question: "Can I style the lowercase r too?",
    answer: "Yes, every style on this page includes both the uppercase R and lowercase r.",
  },
  {
    question: "Why do some styled R characters show as boxes or question marks?",
    answer:
      "Some devices and apps do not support every Unicode character. When that happens, a styled R may show as a box or a question mark instead of the correct symbol. Try a different style from the list, or update the app or browser to fix this.",
  },
  {
    question: "Is it free to use these R fonts?",
    answer:
      "Yes, every R style on this page is completely free. No signup or payment is needed. Copy and paste any style for personal projects, social media, or commercial use.",
  },
  {
    question: "Can I create my own font style for R?",
    answer:
      "Not directly on this page. Unicode styles are fixed characters, not something anyone can design freely. Graphic design tools such as Photoshop or Canva allow fully custom letterforms instead.",
  },
];

export default function RInDifferentFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-08-13T08:00:00+00:00",
        dateModified: "2026-08-13T08:00:00+00:00",
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aestheticletters.com/" },
          { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: hubUrl },
          { "@type": "ListItem", position: 3, name: "R in Different Fonts", item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className={`${inter.variable} dark bg-background text-on-background min-h-screen`}
        style={designTheme}
      >
        <RPageContent />
      </div>
    </>
  );
}
