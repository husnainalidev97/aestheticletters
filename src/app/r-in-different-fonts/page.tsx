import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import RPageContent from "../components/RPageContent";

const pageTitle = "R in Different Fonts: Dozens of Unicode Styles to Copy";
const pageDescription =
  "See the letter R in different fonts, with decorative Unicode styles, symbols, emojis, and real R letters from other alphabets like Cyrillic and Thai. Free, no signup needed.";
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
    answer: "Yes. The first grid shows both uppercase R and lowercase r together. After the ad slot there are dedicated grids for capital R with symbols and small r with symbols.",
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
        dateModified: new Date().toISOString(),
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
      <TopNavBar activePage="r-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "R in Different Fonts", href: "/r-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            R in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            See the letter R in different fonts, with decorative Unicode styles, symbols, and how R looks in other alphabets like Cyrillic, Thai, and Cherokee. Copy any style instantly.
          </p>
        </section>

        <RPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
