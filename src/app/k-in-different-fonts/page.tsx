import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import KPageContent from "../components/KPageContent";

const pageTitle = "K in Different Fonts: 22 Free Unicode Styles to Copy";
const pageDescription =
  "See the letter K in different fonts, with 22 verified Unicode styles plus real K letters from other alphabets like Cyrillic and Greek. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/k-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-15T06:56:00+00:00";

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
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 640 }],
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
    question: "Does styled K text work in usernames?",
    answer:
      "Usernames on most platforms strip anything beyond plain letters and numbers, so styled K rarely survives there. Bios, captions, and display names accept it without trouble.",
  },
  {
    question: "What are letter K fonts?",
    answer:
      "The term describes individual Unicode characters shaped like K, not installable typefaces. Each one already exists inside the Unicode standard, so copying and pasting is the only step involved.",
  },
  {
    question: "Why do K font styles stay consistent instead of showing exceptions?",
    answer:
      "A handful of letters lose certain styles to an older Unicode block, creating visible gaps. K never lost that ground, so its full style set stays intact everywhere.",
  },
  {
    question: "What's a cool font for K?",
    answer:
      "Script, double struck, and gothic tend to stand out the most among the styles above. Testing two or three side by side against your actual bio or name usually settles it fastest.",
  },
  {
    question: "Can I find a fancy K in different fonts style for free?",
    answer:
      "Every style shown here, all 22 of them, costs nothing to copy or paste. Nothing requires a signup, a download, or a subscription.",
  },
  {
    question: "What K font style works best for bios and usernames?",
    answer:
      "Short bios read better in lighter styles such as bold, italic, or small capital. Gaming names and display text can carry heavier styles like gothic or double struck without losing readability.",
  },
  {
    question: "Are there different K fonts for uppercase and lowercase?",
    answer:
      "Each card on this page already pairs the uppercase K with its lowercase match from the same Unicode family. A single copy covers both cases at once.",
  },
  {
    question: "Is it free to use these K fonts?",
    answer:
      "Every style here is free, with no signup or payment required. Personal projects, social posts, and commercial work can all use them without restriction.",
  },
  {
    question: "What is the difference between styled K and regular K?",
    answer:
      "Every styled K carries its own dedicated code point in the Unicode standard. The plain keyboard K sits separately, at U+004B. Nothing here works like a font layered over the original letter, since each version stands as its own character.",
  },
  {
    question: "How do I create my own styled K?",
    answer:
      "This page will not generate a custom style, since Unicode characters are fixed rather than editable. Software such as Photoshop or Canva handles fully custom letterforms instead.",
  },
  {
    question: "What are the limitations of using styled K?",
    answer:
      "Not every device or app renders every Unicode character correctly. A missing font can turn styled K into a box or a question mark. Switching styles or updating the app usually resolves it.",
  },
];

export default function KInDifferentFontsPage() {
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
    name: "K in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "K in Different Fonts" },
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
      <TopNavBar activePage="k-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "K in Different Fonts", href: "/k-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            K in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This k font generator pairs 22 Unicode versions of K with five real K matches from other alphabets. Cyrillic and Greek are among them. Everything below copies as plain text in one click.
          </p>
        </section>

        <KPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
