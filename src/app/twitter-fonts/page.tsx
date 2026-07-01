import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import TwitterFontGenerator from "../components/TwitterFontGenerator";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "Twitter Fonts Generator - Free Twitter Text Styles (Copy & Paste)" },
  description:
    "Use this Twitter fonts generator to turn any text into stylish fonts for Twitter. Copy and paste Twitter fonts into your bio, tweets, and display name for free.",
  alternates: {
    canonical: "https://www.aestheticletters.com/twitter-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/twitter-fonts",
    title: "Twitter Fonts Generator - Free Twitter Text Styles (Copy & Paste)",
    description:
      "Use this Twitter fonts generator to turn any text into stylish fonts for Twitter. Copy and paste Twitter fonts into your bio, tweets, and display name for free.",
    images: [{ url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-og.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Fonts Generator - Free Twitter Text Styles (Copy & Paste)",
    description:
      "Use this Twitter fonts generator to turn any text into stylish fonts for Twitter. Copy and paste Twitter fonts into your bio, tweets, and display name for free.",
    images: ["https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-og.webp"],
  },
};

export default function TwitterFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/twitter-fonts#software",
        name: "Twitter Fonts Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/twitter-fonts",
        description:
          "Turn plain text into stylish Unicode fonts for Twitter instantly. Copy and paste Twitter fonts for your bio, tweets, and display name.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/twitter-fonts#webpage",
        url: "https://www.aestheticletters.com/twitter-fonts",
        name: "Twitter Fonts Generator - Free Twitter Text Styles (Copy & Paste)",
        description:
          "Use this Twitter fonts generator to turn any text into stylish fonts for Twitter. Copy and paste Twitter fonts into your bio, tweets, and display name for free.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-01T08:00:00+00:00",
        dateModified: "2026-07-01T00:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/twitter-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/twitter-fonts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/twitter-fonts#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.aestheticletters.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Tools",
            item: "https://www.aestheticletters.com/all-tools",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Twitter Fonts",
            item: "https://www.aestheticletters.com/twitter-fonts",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Twitter Fonts", href: "/twitter-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Twitter Fonts Generator &mdash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            {/* Content to be provided */}
          </p>
        </section>

        {/* Interactive Font Generator */}
        <TwitterFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section - Content to be provided */}

      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
