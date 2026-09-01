import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import GPageContent from "../components/GPageContent";

const pageTitle = "G in Different Fonts: 22 Free Unicode Styles to Copy";
const pageDescription =
  "Explore G in different fonts across 22 verified Unicode styles. Copy bold, script, gothic, and fancy G letters free for bios, gaming tags, and Discord profiles.";
const canonicalUrl = "https://www.aestheticletters.com/g-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-09-01T08:00:00+00:00";

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
    tags: ["G fonts", "Unicode G", "letter G", "aesthetic G", "copy paste G"],
    images: [
      {
        url: "https://www.aestheticletters.com/og-g-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "G in Different Fonts: decorative G letterforms in lavender and purple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "https://www.aestheticletters.com/og-g-in-different-fonts.webp",
        width: 1200,
        height: 640,
        alt: "G in Different Fonts: decorative G letterforms in lavender and purple",
      },
    ],
  },
};

const faqs = [
  {
    question: "Will a styled G display correctly inside a username?",
    answer:
      "Username fields on most platforms only accept plain letters and numbers, blocking styled characters like this one. Bio fields and display names accept it without trouble.",
  },
  {
    question: "What are letter G fonts?",
    answer:
      "Despite the name, no actual font file gets installed or downloaded anywhere. Each version is a separate character already built into the Unicode standard, ready to copy right away.",
  },
  {
    question: "Why was the letter G invented?",
    answer:
      "Early Latin used one letter, C, for two different sounds, creating constant confusion. A teacher named Spurius Carvilius Ruga is credited with adding a small stroke to C around 230 BCE.",
  },
  {
    question: "What's a cool font for G?",
    answer:
      "Opinions vary from person to person, but Gothic Fraktur, Double-Struck, and Bold Script tend to draw the most attention. Try pasting two or three options into your actual bio before settling on one.",
  },
  {
    question: "Can I find a fancy capital G in different fonts for free?",
    answer:
      "Yes, every style shown on this page, all 22 of them, costs nothing at all. No account, download, or hidden fee sits behind any single one.",
  },
  {
    question: "What G font style works best for bios and usernames?",
    answer:
      "Lighter styles like Bold, Italic, or Small Capital tend to stay readable inside short bio text. Gaming handles and larger display names can handle heavier looks like Gothic Fraktur without losing clarity.",
  },
  {
    question: "Where can I find a fancy G letter to copy?",
    answer:
      "Every card above already shows a copy ready styled G, both uppercase and lowercase together. One tap on any card sends that style straight to your clipboard.",
  },
  {
    question: "Are there different G fonts for uppercase and lowercase?",
    answer:
      "Nearly every card on this page shows a matched pair from the same Unicode family, one uppercase and one lowercase. A small number of styles use the exact same character for both cases, since Unicode never built a separate version.",
  },
  {
    question: "Do these G fonts cost anything to use?",
    answer:
      "Completely free, with no payment or signup required at any step. That covers personal projects, social posts, and commercial work equally.",
  },
  {
    question: "How does a styled G differ from the regular keyboard version?",
    answer:
      "The plain keyboard G sits at its own fixed address, U+0047, separate from every styled version shown on this page. Each styled variant counts as a distinct character, not a visual effect layered over the original letter.",
  },
  {
    question: "Where does styled G text tend to fall short?",
    answer:
      "Support still varies by device and app, so an unusual character can display as an empty box. Updating the app or switching to a different style typically clears the problem quickly.",
  },
];

export default function GInDifferentFontsPage() {
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
    name: "G in Different Fonts OG banner",
    description: pageDescription,
    url: "https://www.aestheticletters.com/og-g-in-different-fonts.webp",
    contentUrl: "https://www.aestheticletters.com/og-g-in-different-fonts.webp",
    width: 1200,
    height: 640,
    inLanguage: "en",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#softwareapp`,
    name: "G in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "G in Different Fonts", item: { "@id": canonicalUrl, "name": "G in Different Fonts" } },
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
      <TopNavBar activePage="g-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "G in Different Fonts", href: "/g-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            G in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            This free generator turns the letter G in different fonts, offering 22 verified Unicode styles ready to copy straight into any bio, username, or Discord profile today.
          </p>
        </section>

        <GPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
