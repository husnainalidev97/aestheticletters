import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import BPageContent from "../components/BPageContent";

const pageTitle = "B in Different Fonts: 29 Free Unicode Copy Paste Styles";
const pageDescription =
  "Get B in different fonts across 29 hand verified Unicode styles. Copy and paste bold, script, cursive, and symbol letter B free, right in your browser.";
const canonicalUrl = "https://www.aestheticletters.com/b-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-20T08:00:00+00:00";
const ogImageUrl = "https://www.aestheticletters.com/og-b-in-different-fonts.webp";

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
    tags: ["B fonts", "Unicode B", "letter B", "aesthetic B", "copy paste B"],
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 640,
        alt: "B in Different Fonts: 29 Unicode B styles ready to copy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 640,
        alt: "B in Different Fonts: 29 Unicode B styles ready to copy",
      },
    ],
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "Does styled B text work in usernames?",
    answer:
      "Rarely. Username fields almost always limit input to plain letters and digits, blocking or auto stripping anything styled. Bios and display names carry no such restriction.",
  },
  {
    question: "What are letter B fonts?",
    answer:
      "The name is a bit misleading, since nothing gets installed on your device anywhere. Every option here is a Unicode character that already exists, just waiting to be copied.",
  },
  {
    question: "What's a fancy letter B I can use for my bio?",
    answer:
      "Circled, double struck, and script styles usually stand out best in short bio text. Testing two or three directly in your bio beats guessing which one reads best.",
  },
  {
    question: "What are some cool letters for B?",
    answer:
      "Bold and Fraktur both carry a strong, attention grabbing look, while small capital stays subtle enough for longer stretches of text. Pick based on how much attention that spot deserves.",
  },
  {
    question: "Are B in different fonts styles available at no cost?",
    answer:
      "All 29 styles here cost nothing to use. There is no signup, no download, and no hidden catch anywhere on the page.",
  },
  {
    question: "What B font style works best for bios and usernames?",
    answer:
      "Bio text favors lighter options like bold, italic, or small capital, since they stay easy to read at small sizes. Gaming tags can carry heavier styles like Fraktur without losing clarity.",
  },
  {
    question: "Are there different B letter styles for uppercase and lowercase?",
    answer:
      "Every card already pairs both cases from the same Unicode family, so nothing separate needs finding. One tap copies the uppercase and lowercase together.",
  },
  {
    question: "Is it free to use these B fonts?",
    answer:
      "No cost applies anywhere on this page, whether the use is personal, social, or commercial. Nothing here requires payment or account creation.",
  },
  {
    question: "What is the difference between styled B and regular B?",
    answer:
      "The keyboard B sits at U+0042, its own fixed Unicode address. Every styled version here is a fully separate character, not a font effect layered on top.",
  },
  {
    question: "Does styled B come with any drawbacks?",
    answer:
      "This b font generator cannot build a brand new letterform, since Unicode characters stay fixed rather than customizable. Design software like Canva or Photoshop handles that kind of original lettering work.",
  },
  {
    question: "Styled B has limitations, what are they?",
    answer:
      "Display quality depends on the device and app in use, and a rarer character can occasionally appear as an empty box. Picking a different style or updating the app tends to clear that up.",
  },
];

export default function BInDifferentFontsPage() {
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
    name: "B in Different Fonts OG banner",
    description: pageDescription,
    url: ogImageUrl,
    contentUrl: ogImageUrl,
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "B in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "B in Different Fonts", item: { "@id": canonicalUrl, "name": "B in Different Fonts" } },
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
      <TopNavBar activePage="b-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "B in Different Fonts", href: "/b-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            B in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            Browse B in different fonts and copy real Unicode styles instantly. No font downloads, no signup, and no cost, just paste your styled letter anywhere online today.
          </p>
        </section>

        <BPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
