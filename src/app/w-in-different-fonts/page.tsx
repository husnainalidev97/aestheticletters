import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import WPageContent from "../components/WPageContent";

const pageTitle = "W in Different Fonts: 22 Unicode Styles - (Free to Copy)";
const pageDescription =
  "Get the letter W in different fonts through 22 verified Unicode styles, alongside real W letters from Cyrillic and Coptic scripts. Free to copy, no signup ever.";
const canonicalUrl = "https://www.aestheticletters.com/w-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-18T08:00:00+00:00";
const pageModifiedDate = new Date();

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
    modifiedTime: pageModifiedDate.toISOString(),
    authors: ["Aesthetic Letters"],
    section: "Alphabet Fonts",
    tags: ["W fonts", "Unicode W", "letter W", "aesthetic W", "copy paste W"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-w-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "W in Different Fonts: decorative W letterforms in lavender and purple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-w-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "W in Different Fonts: decorative W letterforms in lavender and purple",
      },
    ],
  },
};

const faqs = [
  {
    question: "Does styled W text work in usernames?",
    answer:
      "Most platforms lock the username field to plain letters and digits, so a styled W usually gets rejected or silently stripped there. Bio fields and display names accept it without any trouble.",
  },
  {
    question: "What are letter W fonts?",
    answer:
      "Despite the name, no actual font gets installed or downloaded. Each version is a separate character already built into the Unicode standard, ready to copy the moment you find one you like.",
  },
  {
    question: "Why is W called \"double-U\" if it looks like a double-V?",
    answer:
      "The printed shape traces back to two V letters merged together, yet English speakers kept calling it double U. Early scribes often wrote the doubled sound using two U shapes instead, and that spoken habit outlived the written change.",
  },
  {
    question: "What's a cool font for W?",
    answer:
      "Opinions vary, but script, double struck, and the gothic fraktur style tend to draw the most attention. Try pasting two or three into your actual bio before committing to one.",
  },
  {
    question: "Can I find a fancy W in different fonts style for free?",
    answer:
      "Yes, every single style on this page, all 22 of them, costs nothing. No account, download, or hidden fee sits behind any of them.",
  },
  {
    question: "What W font style works best for bios and usernames?",
    answer:
      "Lighter styles like bold, italic, or small capital tend to stay readable in short bio text. Gaming handles and larger display text can handle heavier looks like gothic without becoming hard to read.",
  },
  {
    question: "Are there different W fonts for uppercase and lowercase?",
    answer:
      "Every card already shows a matched pair from the same Unicode family, one uppercase and one lowercase. Copying the card grabs both letters together in one motion.",
  },
  {
    question: "Is it free to use these W fonts?",
    answer:
      "Completely free, with no payment or signup involved at any step. That covers personal use, social posts, and commercial projects alike.",
  },
  {
    question: "What is the difference between styled W and regular W?",
    answer:
      "The plain keyboard W lives at its own address, U+0057, separate from every styled version shown here. Each styled variant is a distinct character in its own right, not a visual effect layered over the original.",
  },
  {
    question: "How do I create my own styled W?",
    answer:
      "This w font generator cannot build a custom letterform, since Unicode characters come fixed rather than adjustable. Graphic software like Photoshop or Canva handles that kind of custom lettering instead.",
  },
  {
    question: "What are the limitations of using styled W?",
    answer:
      "Support varies by device and app, so an unusual Unicode character can render as an empty box or a question mark on some setups. Updating the app or trying a different style typically clears the problem.",
  },
];

export default function WInDifferentFontsPage() {
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
    dateModified: pageModifiedDate.toISOString(),
  };

  const ogImageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${canonicalUrl}#primaryimage`,
    name: "W in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-w-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-w-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "W in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "W in Different Fonts", item: { "@id": canonicalUrl, "name": "W in Different Fonts" } },
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
      <TopNavBar activePage="w-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "W in Different Fonts", href: "/w-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            W in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This tool turns the letter W in different fonts into 22 genuine Unicode styles, each paired with a lowercase match. Type once, browse the grid, and tap a card to copy it.
          </p>
        </section>

        <WPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
