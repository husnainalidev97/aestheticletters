import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import TPageContent from "../components/TPageContent";

const pageTitle = "T in Different Fonts: 22 Free Unicode Styles to Copy";
const pageDescription =
  "See the letter T in different fonts, with 22 verified Unicode styles plus real T letters from other alphabets like Cyrillic and Greek. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/t-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-09-13T08:30:00+00:00";
const ogImageUrl = "https://www.aestheticletters.com/og-t-in-different-fonts.webp";
const ogImageAlt =
  "T in Different Fonts: letter T in bold, script, fraktur, double-struck, and monospace Unicode styles on a purple Aesthetic Letters banner";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  robots: { index: false, follow: true },
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
    tags: ["T fonts", "Unicode T", "letter T", "aesthetic T", "copy paste T"],
    images: [{ url: ogImageUrl, width: 1200, height: 640, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, width: 1200, height: 640, alt: ogImageAlt }],
  },
};

const faqs = [
  {
    question: "What is Unicode?",
    answer:
      "Unicode assigns a unique number to every character used across world languages and symbol sets, letters included. Each styled T on this page carries its own such number, called a code point, which is why it displays the same way on any modern device.",
  },
  {
    question: "What are letter T fonts?",
    answer:
      "Letter T fonts are ready-made Unicode characters shaped like T, not typefaces you install on a device. Every version already lives inside the Unicode standard, so a simple copy and paste finishes the job.",
  },
  {
    question: "Does styled T text work in usernames?",
    answer:
      "Most platforms filter usernames down to plain letters and numbers, so styled T usually gets rejected there. Bios, captions, and profile names carry it without any issue.",
  },
  {
    question: "Why do T font styles stay consistent instead of showing exceptions?",
    answer:
      "Certain letters fall back on an older Unicode block for some styles, leaving visible gaps behind. T sidesteps that entirely, so every style above renders exactly as intended.",
  },
  {
    question: "What's a cool font style for T?",
    answer:
      "Script, double struck, and Fraktur styles carry the most visual personality among the set above. Each one changes the mood of a name or bio in a different way.",
  },
  {
    question: "What are the most popular T font styles?",
    answer:
      "No public ranking tracks exact popularity across every style. Bold, script, and small capital tend to appear most often in bios and captions, based on common patterns across similar generator tools.",
  },
  {
    question: "How do I test different T styles?",
    answer:
      "Paste a style directly into the app or platform where it will appear, since fonts can render differently across devices. Checking two or three styles this way, right inside Instagram or Discord, catches any rendering issues before committing to one.",
  },
  {
    question: "Can I find a fancy T in different fonts styles for free?",
    answer:
      "All 22 styles on this page are free to copy and use right away. No signup, download, or subscription stands between you and any of them.",
  },
  {
    question: "Which T style fits bios and usernames best?",
    answer:
      "Lighter styles such as bold, italic, or small capital tend to stay readable in short bios. Heavier options like Fraktur or double struck work better in gaming names and larger display text.",
  },
  {
    question: "Are there different T letter fonts for uppercase and lowercase?",
    answer:
      "Every card above already includes both cases, matched from the same Unicode family. One copy grabs the uppercase and lowercase version together.",
  },
  {
    question: "Do these T fonts cost anything to use?",
    answer:
      "Commercial projects, client work, and personal social posts can all use these styles without asking permission first. Nothing on this page carries a license fee or usage restriction.",
  },
  {
    question: "How do I use styled T in graphic design?",
    answer:
      "Copy a style above, then paste it into a design tool such as Canva or Photoshop as a text layer. T's simple cross shape also makes it a strong candidate for standalone logo marks, beyond just styled text.",
  },
  {
    question: "What is \"T with stroke\"?",
    answer:
      "T with stroke (Ŧ and ŧ) is a separate, real Latin Extended letter used in languages like Northern Sámi. It stands apart from the 22 styles above since it counts as its own distinct letter, not a decorative T variant.",
  },
  {
    question: "How does styled T differ from a regular T?",
    answer:
      "The plain T on your keyboard sits at U+0054, its own separate code point. Every styled version above carries a different code point entirely, so none of them function as a font applied over that original letter.",
  },
  {
    question: "Does styled T come with any drawbacks?",
    answer:
      "Some devices and apps struggle to render every Unicode character correctly. Without the right font installed, styled T might appear as a hollow box or stray question mark on screen. Switching to a different style or updating the app usually clears it up.",
  },
];

export default function TInDifferentFontsPage() {
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
    name: "T in Different Fonts OG banner",
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
    name: "T in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "T in Different Fonts", item: { "@id": canonicalUrl, "name": "T in Different Fonts" } },
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
      <TopNavBar activePage="t-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "T in Different Fonts", href: "/t-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            T in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            Explore t in different fonts with 22 verified Unicode styles, real T letters borrowed from Cyrillic and Greek alphabets, and free symbols to copy and paste anywhere.
          </p>
        </section>

        <TPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
