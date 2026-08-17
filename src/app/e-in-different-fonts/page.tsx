import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import EPageContent from "../components/EPageContent";

const pageTitle = "e in Different Fonts";
const pageDescription = "e in different fonts";
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
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-image.webp"],
  },
};

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
    name: "e in Different Fonts Generator",
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
      { "@type": "ListItem", position: 3, name: "e in Different Fonts" },
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
            { label: "e in Different Fonts", href: "/e-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            e in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg" />
        </section>

        <EPageContent />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
