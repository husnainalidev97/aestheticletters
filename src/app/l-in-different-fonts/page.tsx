import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import LPageContent from "../components/LPageContent";

const pageTitle = "L in Different Fonts: 22 Unicode Styles - (Free to Copy)";
const pageDescription =
  "Get the letter L in different fonts through 22 verified Unicode styles, alongside real L letters from Greek, Cyrillic, and Coptic scripts. Free to copy, no signup ever.";
const canonicalUrl = "https://www.aestheticletters.com/l-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-09-07T08:00:00+00:00";

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
    tags: ["L fonts", "Unicode L", "letter L", "aesthetic L", "copy paste L"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-l-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "L in different fonts: bold, script, gothic, outline, and brush letter L styles in purple on a lavender background from Aesthetic Letters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-l-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "L in different fonts: bold, script, gothic, outline, and brush letter L styles in purple on a lavender background from Aesthetic Letters",
      },
    ],
  },
};

const faqs = [
  {
    question: "Does styled L text work in usernames?",
    answer:
      "Username fields almost always reject it, since those fields typically only accept plain letters and numbers. Bios, captions, and display names are a different story, and generally display styled text with no problem.",
  },
  {
    question: "What are letter L fonts?",
    answer:
      "Nothing gets installed when you pick a style here. Each one is simply a distinct character that already exists inside Unicode, sitting there ready to copy at any time.",
  },
  {
    question: "Where does the letter L actually come from?",
    answer:
      "L descends through a documented chain: Phoenician Lamed, then Greek Lambda, then Etruscan, then the Latin form used today. That kind of complete paper trail is rare among Latin letters.",
  },
  {
    question: "What's a fancy L font style?",
    answer:
      "Script and Bold Fraktur tend to stand out the most among the 22 options here. Both come from genuine Unicode mathematical alphabets, not from a decorative trick built for font tools.",
  },
  {
    question: "What's a cool font for L?",
    answer:
      "Bold Fraktur and Double Struck carry the heaviest visual presence, which suits gaming tags and display names well. Testing a few directly inside your actual bio beats guessing from a preview.",
  },
  {
    question: "Is the letter \u0141 the same as a styled L?",
    answer:
      "No. \u0141 functions as an actual letter in Polish and a handful of other languages, not a stylistic variant. It sits in a completely separate part of Unicode from the 22 mathematical styles featured here.",
  },
  {
    question: "Are there different L fonts for uppercase and lowercase?",
    answer:
      "Almost every card pairs a capital with its matching lowercase from the same Unicode family. Squared and Negative Squared L are the two exceptions, since Unicode never defined lowercase versions for either.",
  },
  {
    question: "Is it free to use these L fonts?",
    answer:
      "Nothing on this page requires payment, an account, or a hidden subscription. Personal posts, business branding, and everything in between can use these styles without restriction.",
  },
  {
    question: "What's the difference between styled L and regular L?",
    answer:
      "The plain L your keyboard types sits at U+004C, its own separate Unicode address. Every styled version here is a fully distinct character in its own right, not a visual filter placed over the original.",
  },
  {
    question: "How do I create my own styled L?",
    answer:
      "This l font generator works only with characters Unicode has already defined, so a custom letterform isn't possible here. Design software such as Photoshop or Canva handles that kind of original lettering instead.",
  },
  {
    question: "What are the limitations of using styled L?",
    answer:
      "Rendering depends on the device and app involved, so a less common character can show up as an empty box on older setups. The parenthesized capital and lowercase L even live in two separate blocks, so one might display while the other fails. Switching styles or updating the app usually solves it.",
  },
];

export default function LInDifferentFontsPage() {
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
    name: "L in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-l-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-l-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "L in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "L in Different Fonts", item: { "@id": canonicalUrl, "name": "L in Different Fonts" } },
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
      <TopNavBar activePage="l-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "L in Different Fonts", href: "/l-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            L in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            Every style below is a genuine Unicode character for the letter L, not a font file or a plugin. Type your text once, then tap any of the 22 styles to copy that exact capital and lowercase pair.
          </p>
        </section>

        <LPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
