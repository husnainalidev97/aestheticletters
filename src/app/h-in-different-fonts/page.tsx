import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import HPageContent from "../components/HPageContent";

const pageTitle = "H in Different Fonts: 22 Unicode Styles - (Free to Copy)";
const pageDescription =
  "Get the letter H in different fonts through 22 verified Unicode styles, plus real H letters borrowed from Cyrillic and Greek alphabets. Free, no signup ever.";
const canonicalUrl = "https://www.aestheticletters.com/h-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-24T08:00:00+00:00";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
    publishedTime: pageDate,
    modifiedTime: pageDate,
    authors: ["Aesthetic Letters"],
    section: "Alphabet Fonts",
    tags: ["H fonts", "Unicode H", "letter H", "aesthetic H", "copy paste H"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-h-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "H in Different Fonts preview showing the letter H in multiple Unicode styles on a lavender background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-h-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "H in Different Fonts preview showing the letter H in multiple Unicode styles on a lavender background",
      },
    ],
  },
};

const faqs = [
  {
    question: "Does styled H text work in usernames?",
    answer:
      "Username fields almost never accept it. Platforms build these fields around plain alphanumeric input for account safety, so styled characters get filtered out before saving. Display names and bios follow a much looser rule set and accept these styles freely.",
  },
  {
    question: "What are letter H fonts?",
    answer:
      "The term describes copy-paste characters, not installable fonts. Nothing downloads to a device or gets added to a font menu anywhere. Each option already exists inside Unicode, so pasting it simply displays a character that was always available.",
  },
  {
    question: "Why do some people pronounce H as \"haitch\"?",
    answer:
      "Most English speakers say aitch, but parts of Ireland and Australia add the H sound itself, saying haitch instead. Both forms are accepted today, though aitch remains the more common choice worldwide.",
  },
  {
    question: "What's a cool font for H?",
    answer:
      "Preference plays a large role here, though heavier styles like gothic fraktur or double struck tend to stand out fastest in a crowded feed. Pasting a candidate directly into the target bio is the fastest way to judge fit.",
  },
  {
    question: "Is there a cost to use fancy H fonts on this page?",
    answer:
      "All 22 styles carry no cost, no login wall, and no watermark. Nothing on this page sits behind a paywall or a trial period, now or later.",
  },
  {
    question: "Which H style looks best in a short bio or username?",
    answer:
      "Short bio text reads best in lighter styles such as bold or small capital, since heavy strokes can blur at small sizes. Longer display names and gaming tags have more visual room, so denser styles like gothic stay legible there.",
  },
  {
    question: "Does each H style include both uppercase and lowercase letters?",
    answer:
      "Yes, and the grid above keeps both cases linked together by design. Selecting any card copies the matched uppercase and lowercase pair from that same Unicode family in one motion.",
  },
  {
    question: "Do these H fonts cost anything to use?",
    answer:
      "No payment, subscription, or account creation stands between a visitor and any style on this page. Personal projects, business branding, and social content all fall under the same free use.",
  },
  {
    question: "How is a styled H different from a plain keyboard H?",
    answer:
      "Regular H sits at Unicode address U+0048 and nowhere else. Every styled version occupies its own separate address instead, so each one counts as a distinct character rather than an effect applied to the original.",
  },
  {
    question: "Can I design a custom H style of my own?",
    answer:
      "Custom letterforms fall outside what Unicode characters can do, since each one is fixed rather than editable. Building an original H shape from scratch calls for design software such as Illustrator or Canva instead of a text generator.",
  },
  {
    question: "What are the limitations of using styled H?",
    answer:
      "Device and app support varies, so a less common character can appear as a blank box on certain setups. Switching to an updated app version or trying a more widely supported style usually clears the display problem.",
  },
];

export default function HInDifferentFontsPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: "en",
    isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
    author: { "@id": "https://www.aestheticletters.com/#organization" },
    publisher: { "@id": "https://www.aestheticletters.com/#organization" },
    primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
    datePublished: pageDate,
    dateModified: pageDate,
  };

  const ogImageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${canonicalUrl}#primaryimage`,
    name: "H in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-h-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-h-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "H in Different Fonts Generator",
    description: pageDescription,
    url: canonicalUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "requires HTML5 support",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.aestheticletters.com/", "name": "Home" } },
      { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: { "@id": hubUrl, "name": "Alphabet Fonts" } },
      { "@type": "ListItem", position: 3, name: "H in Different Fonts", item: { "@id": canonicalUrl, "name": "H in Different Fonts" } },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    inLanguage: "en",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const safeStringify = (obj: object) => JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(ogImageJsonLd) }}
      />
      <TopNavBar activePage="h-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "H in Different Fonts", href: "/h-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            H in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This h font generator changes the letter H in different fonts into 22 verified Unicode styles, every one paired with a matching lowercase letter, ready to tap and copy now.
          </p>
        </section>

        <HPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
