import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import JPageContent from "../components/JPageContent";

const pageTitle = "J in Different Fonts: 22 Unicode Styles - (Free to Copy)";
const pageDescription =
  "Get the letter J in different fonts through 22 verified Unicode styles, plus real letters borrowed from Greek and Cyrillic scripts. Free to copy.";
const canonicalUrl = "https://www.aestheticletters.com/j-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-24T08:00:00+00:00";

const faqs = [
  {
    question: "Does styled J text work in usernames?",
    answer:
      "Most platforms lock the username field to plain letters and digits, so a styled J usually gets rejected or silently stripped there. Bio fields and display names accept it without any trouble.",
  },
  {
    question: "What are letter J fonts?",
    answer:
      "Despite the name, no actual font gets installed or downloaded. Each version is a separate character already built into the Unicode standard, ready to copy the moment you find one you like.",
  },
  {
    question: "Why does J have a hook shape instead of a straight line?",
    answer:
      "The hook traces back to a swash tail medieval scribes added to a final I in Roman numerals. That decorative flourish slowly became its own letter, formalized by Trissino in 1524.",
  },
  {
    question: "What's a cool font for J?",
    answer:
      "Opinions vary, but script, double struck, and the gothic fraktur style tend to draw the most attention. Try pasting two or three into your actual bio before committing to one.",
  },
  {
    question: "What J font styles are most popular for social media?",
    answer:
      "Bold, script, and fraktur consistently top usage across bios, gaming tags, and Discord names. Simpler styles like small capital or fullwidth work better for longer captions where readability still matters.",
  },
  {
    question: "Does browsing the fancy J styles here cost anything?",
    answer:
      "The information on this page is not behind a paywall. All 22 styles stay open to browse, tap, and copy without an account or a download.",
  },
  {
    question: "Which J style reads clearest in a short bio or username?",
    answer:
      "Lighter styles like bold, italic, or small capital tend to stay readable in short bio text. Gaming handles and larger display text can handle heavier looks like gothic without becoming hard to read.",
  },
  {
    question: "Does each style include a matching lowercase j?",
    answer:
      "Every card already shows a matched pair from the same Unicode family, one uppercase and one lowercase. Copying the card grabs both letters together in one motion.",
  },
  {
    question: "Can these J styles go into commercial projects without paying a license fee?",
    answer:
      "Personal posts, client work, and commercial designs all fall under the same free terms. No signup or license fee applies at any stage.",
  },
  {
    question: "How is a styled J different from the plain J on a keyboard?",
    answer:
      "The plain keyboard J lives at its own address, U+004A, separate from every styled version shown here. Each styled variant is a distinct character in its own right, not a visual effect layered over the original.",
  },
  {
    question: "What's the process for copying one of these J styles?",
    answer:
      "Tap any styled card above and the character copies to your clipboard right away. Paste it directly into a bio, caption, username field, or chat app of your choice.",
  },
  {
    question: "Where might a styled J fail to display correctly?",
    answer:
      "Support varies by device and app, so an unusual Unicode character can render as an empty box or a question mark on some setups. Updating the app or trying a different style typically clears the problem.",
  },
];

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
    tags: ["J fonts", "Unicode J", "letter J", "aesthetic J", "copy paste J"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-j-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "J in Different Fonts: decorative J letterforms in lavender and purple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-j-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "J in Different Fonts: decorative J letterforms in lavender and purple",
      },
    ],
  },
};

export default function JInDifferentFontsPage() {
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
    name: "J in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-j-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-j-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "J in Different Fonts Generator",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.aestheticletters.com/", "name": "Home" } },
      { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: { "@id": hubUrl, "name": "Alphabet Fonts" } },
      { "@type": "ListItem", position: 3, name: "J in Different Fonts", item: { "@id": canonicalUrl, "name": "J in Different Fonts" } },
    ],
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
        dangerouslySetInnerHTML={{ __html: safeStringify(ogImageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(faqJsonLd) }}
      />
      <TopNavBar activePage="j-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "J in Different Fonts", href: "/j-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            J in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This j font generator turns the letter J in different fonts into 22 genuine Unicode styles, each paired with a lowercase match. Type once, browse the grid, and tap a card to copy it.
          </p>
        </section>

        <JPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
