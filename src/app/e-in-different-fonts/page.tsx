import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import EPageContent from "../components/EPageContent";

const pageTitle = "E in Different Fonts: 23 Free Unicode Styles to Copy";
const pageDescription =
  "See the letter E in different fonts, with 23 verified Unicode styles plus real E letters from other alphabets like Cyrillic and Greek. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/e-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-17T06:00:00+00:00";

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
    tags: ["e fonts", "Unicode e", "letter e", "aesthetic e", "copy paste e"],
    images: [{ url: "https://www.aestheticletters.com/og-e-in-different-fonts.webp", width: 1200, height: 640, alt: "E in Different Fonts preview showing the letter E in multiple Unicode styles on a lavender background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-e-in-different-fonts.webp"],
  },
};

const faqs = [
  {
    question: "Does styled E text work in usernames?",
    answer:
      "Platform username fields are the exact spot for styled text. Most strip E down to plain characters automatically. Switch to a bio, caption, or display name field, and styled E pastes through cleanly.",
  },
  {
    question: "What are letter E fonts?",
    answer:
      "Nothing here installs like a real font. Each styled E is a standalone Unicode character, already built into the standard, so displaying it takes nothing more than copy and paste.",
  },
  {
    question: "Why does E's Script style come from a different Unicode block?",
    answer:
      "Script E predates the newer Mathematical Alphanumeric block, since mathematicians used it for limits and sets decades earlier. Unicode pointed to that existing character instead of duplicating it, leaving Script E inside Letterlike Symbols.",
  },
  {
    question: "What's a cool font for E?",
    answer:
      "Testing your actual name or bio against two or three styles usually beats picking from a description alone. Script, Gothic, and Double Struck tend to draw the most attention among readers.",
  },
  {
    question: "Can I find a fancy E in different fonts style for free?",
    answer:
      "No signup, download, or subscription sits behind any style on this page. All 23 versions, extended characters included, copy at zero cost.",
  },
  {
    question: "What E font style works best for bios and usernames?",
    answer:
      "Heavier styles like Gothic or Double Struck suit gaming names and display text, where visual weight reads as intentional. Bios read cleaner with lighter styles, such as Bold, Italic, or Small Capital.",
  },
  {
    question: "Do all E fonts pair uppercase and lowercase?",
    answer:
      "Three exceptions break the usual pairing. Squared and Negative squared render as capitals only, and the Euler's number symbol renders as lowercase only. Every other style pairs both cases from the same Unicode family.",
  },
  {
    question: "Is it free to use these E fonts?",
    answer:
      "No payment, account, or restriction applies to any style on this page. Personal, social, and commercial use are all covered under the same free terms.",
  },
  {
    question: "What is the difference between styled E and regular E?",
    answer:
      "A plain keyboard E sits at a single fixed address, U+0045. Every styled version above claims its own separate code point instead, so none of them work as a font layered over that original letter.",
  },
  {
    question: "How do I create my own styled E?",
    answer:
      "Custom letterforms need design software such as Photoshop or Canva, not this page. Unicode characters are fixed by definition, so nothing here builds a style that does not already exist in the standard.",
  },
  {
    question: "What are the limitations of using styled E?",
    answer:
      "Rendering support varies by device and app, not by the character itself. A missing font can show styled E as a blank box or a question mark instead. An app update or a style switch usually clears it up.",
  },
];

export default function EInDifferentFontsPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: "en",
    isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
    datePublished: pageDate,
    dateModified: pageDate,
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "E in Different Fonts Generator",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aestheticletters.com/" },
      { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: hubUrl },
      { "@type": "ListItem", position: 3, name: "E in Different Fonts" },
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
      <TopNavBar activePage="e-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "E in Different Fonts", href: "/e-in-different-fonts" },
          ]}
        />

        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            E in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This e font generator pairs 23 Unicode versions of E with five real E matches from other alphabets. Cyrillic and Greek are among them. Everything below copies as plain text in one click.
          </p>
        </section>

        <EPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
