import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import MPageContent from "../components/MPageContent";

const pageTitle = "M in Different Fonts: 22 Free Unicode Styles to Copy";
const pageDescription =
  "Generate M in different fonts instantly with our free Unicode tool. Copy and paste 22 verified font styles for Instagram bios, usernames, and captions.";
const canonicalUrl = "https://www.aestheticletters.com/m-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-09-09T08:00:00+00:00";

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
    tags: ["M fonts", "Unicode M", "letter M", "aesthetic M", "copy paste M"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-m-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "M in Different Fonts: decorative M letterforms in lavender and purple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-m-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "M in Different Fonts: decorative M letterforms in lavender and purple",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is the difference between bold M and italic M styles?",
    answer:
      "Bold M styles use thicker strokes to add visual weight, useful for headings or text that needs to stand out. Italic M styles slant the letter to the right, giving it a softer, more stylish feel for captions or bios.",
  },
  {
    question: "Are there any limitations to using this M font generator?",
    answer:
      "Some heavily decorated styles rely on newer Unicode blocks that older phones or apps may not display correctly. If a style shows up as a box or question mark, the device simply lacks support for that character range. That is a device limitation, not a flaw in the tool itself.",
  },
  {
    question: "How does the M font generator actually work?",
    answer:
      "The tool does not create a new font in the traditional sense. It swaps the plain letter M for a different Unicode character that already looks styled, then lets you copy that character as plain text anywhere.",
  },
  {
    question: "How many font styles does M have on this page?",
    answer:
      "This page includes 22 verified Unicode styles for the letter M, from bold and italic to double struck and fraktur. Every style comes from a real code point, checked through direct Python lookup rather than guesswork.",
  },
  {
    question: "Does it cost anything to use this M font generator?",
    answer:
      "Yes, the generator is completely free, with no signup, download, or hidden limit on how many times you use it.",
  },
  {
    question: "What is M font copy paste used for?",
    answer:
      "Copy paste M fonts let you style a single letter for bios, usernames, or captions without needing any design software. Just pick a style above, tap it, and paste the result wherever text is accepted.",
  },
  {
    question: "What is a good M font style for social media?",
    answer:
      "Bold and sans serif styles tend to work best for social media, since they stay easy to read on any screen. Fraktur and script styles look great for decorative bios but can render as boxes on older devices.",
  },
  {
    question: "Why does Script capital M look different from the lowercase version?",
    answer:
      "Script capital M sits at a different code point than its lowercase partner, a known gap in the Unicode Mathematical block. The capital version was placed years earlier inside the Letterlike Symbols block instead.",
  },
  {
    question: "Where does the letter M come from?",
    answer:
      "M started as an Egyptian symbol for water before Phoenician scribes shaped it into the letter Mem. Greek Mu and Etruscan writing later reshaped it into the M used in English today.",
  },
  {
    question: "Does the M font generator save or store my text?",
    answer:
      "No, everything happens locally on your own device, and none of your typed text gets transmitted anywhere. The tool has no server component that stores, logs, or shares what you type.",
  },
  {
    question: "Will fancy M styles paste correctly into an Instagram bio or caption?",
    answer:
      "Yes, most fancy M styles paste cleanly into Instagram bios, captions, and comments without any extra steps. A few heavily decorated styles may not render on older phones or certain browsers.",
  },
  {
    question: "What is the Unicode name for the letter M?",
    answer:
      "The plain capital M is officially named Latin Capital Letter M inside the Unicode standard. Each styled version above carries its own separate formal name and code point.",
  },
  {
    question: "Which alphabets share a letter similar to M?",
    answer:
      "Cyrillic, Greek, and Coptic all carry a letter closely related to Latin M, tracing back to the same Phoenician root. Cyrillic Em looks almost identical, while Greek Mu and Coptic Mi share the sound and shape more loosely.",
  },
];

export default function MInDifferentFontsPage() {
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
    name: "M in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-m-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-m-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "M in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "M in Different Fonts", item: { "@id": canonicalUrl, "name": "M in Different Fonts" } },
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
      <TopNavBar activePage="m-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "M in Different Fonts", href: "/m-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            M in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            The letter M turns into 22 different fonts below, from bold and italic to fraktur and double struck, all ready to copy and paste wherever Unicode text is supported.
          </p>
        </section>

        <MPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
