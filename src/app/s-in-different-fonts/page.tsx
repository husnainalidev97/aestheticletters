import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import SPageContent from "../components/SPageContent";

const pageTitle = "S in Different Fonts: 37 Free Unicode Styles to Copy";
const pageDescription =
  "See the letter S in different fonts, with 37 verified Unicode styles plus real S letters from other alphabets like Cyrillic and Greek. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/s-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";
const pageDate = "2026-08-19T08:00:00+00:00";
const ogImageUrl = "https://www.aestheticletters.com/og-s-in-different-fonts.webp";

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
    tags: ["S fonts", "Unicode S", "letter S", "aesthetic S", "copy paste S"],
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 640,
        alt: "S in Different Fonts: decorative S letterforms in lavender and purple",
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
        alt: "S in Different Fonts: decorative S letterforms in lavender and purple",
      },
    ],
  },
};

const faqs = [
  {
    question: "Does styled S text work in usernames?",
    answer:
      "Platforms like Instagram and TikTok generally block styled characters from usernames, keeping that field limited to plain letters and digits. Bios, captions, and comments are far more permissive and usually display styled S without issue.",
  },
  {
    question: "What are letter S fonts?",
    answer:
      "Despite the name, nothing here is an installable font file. Each version is its own Unicode character, already built into most devices, so a simple copy and paste is all that is needed.",
  },
  {
    question: "Why does S never show gaps the way some other letters do?",
    answer:
      "Certain letters, like C and H, lost their dedicated slot in some mathematical alphabets and now borrow a substitute symbol from an older block. S kept its full set intact, so nothing here needs a workaround.",
  },
  {
    question: "What's a good S font for tattoos or initials?",
    answer:
      "Bold Script and Double-Struck styles read especially well at tattoo scale, since their thicker strokes hold up under skin and ink. Sketching the design on paper first is still worth doing before committing to anything permanent.",
  },
  {
    question: "Is there a cost to use any of these fancy S styles?",
    answer:
      "All 37 styles on this page are free to copy, with no account, download, or hidden fee attached at any point.",
  },
  {
    question: "Which style suits a short bio or display name best?",
    answer:
      "Small Capital and Sans-Serif styles keep short bios easy to scan. Heavier options such as Fraktur or Double-Struck suit longer display names better, where extra visual weight does not hurt readability.",
  },
  {
    question: "Does every style include both a capital and lowercase S?",
    answer:
      "Nearly every card on this page displays the uppercase and lowercase version together, taken from the same Unicode set. A handful of enclosed styles, like Squared, exist only as a capital letter, with no matching lowercase version.",
  },
  {
    question: "Do any of these styles require payment or a license?",
    answer:
      "There is no cost attached to any style on this page, and no license or credit is required. Personal use, business branding, and everything in between are all covered.",
  },
  {
    question: "How is a styled S different from the plain keyboard S?",
    answer:
      "A plain keyboard S sits at Unicode point U+0053, a single fixed character. Every styled version above lives at its own separate code point, so nothing here works as a visual overlay on the original.",
  },
  {
    question: "What's the difference between an S font style and an S with diacritics like Š or Ş?",
    answer:
      "A style, like bold or script, only changes how S looks without changing its meaning. A diacritic version such as Š or Ş is a completely different letter, tied to real spelling rules in a specific language.",
  },
  {
    question: "Can this page generate a brand new, custom S style?",
    answer:
      "Unicode characters are fixed, so this page cannot output a custom design. Graphic tools such as Canva or Photoshop are the better route for building an original letterform from scratch.",
  },
  {
    question: "What might go wrong when using styled S somewhere?",
    answer:
      "Older devices and some apps may not render every character in this set, showing a blank box or a question mark instead. Updating the app or trying a different style usually clears up the issue.",
  },
];

export default function SInDifferentFontsPage() {
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
    name: "S in Different Fonts OG banner",
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
    name: "S in Different Fonts Generator",
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
      { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.aestheticletters.com/", name: "Home" } },
      { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: { "@id": hubUrl, name: "Alphabet Fonts" } },
      { "@type": "ListItem", position: 3, name: "S in Different Fonts", item: { "@id": canonicalUrl, name: "S in Different Fonts" } },
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
      <TopNavBar activePage="s-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "S in Different Fonts", href: "/s-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            S in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            Explore the letter S in different fonts with 37 verified Unicode styles, plus real S letters from other alphabets like Cyrillic and Greek. Free to copy, no signup needed.
          </p>
        </section>

        <SPageContent faqs={faqs} />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
