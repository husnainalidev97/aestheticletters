import type { Metadata } from "next";
import TopNavBar from "./components/TopNavBar";
import FontGenerator from "./components/FontGenerator";
import SEOSection from "./components/SEOSection";
import FAQSection, { homeFaqs } from "./components/FAQSection";
import Footer from "./components/Footer";
import { getTotalFontStyleCount } from "./lib/fontCount";

export const metadata: Metadata = {
  title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
  description:
    "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
  alternates: {
    canonical: "https://www.aestheticletters.com/",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/",
    title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Aesthetic Letters Generator",
        operatingSystem: "Windows, macOS, Android, iOS",
        applicationCategory: "MultimediaApplication",
        url: "https://www.aestheticletters.com",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/#webpage",
        url: "https://www.aestheticletters.com",
        name: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
        description:
          "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
        inLanguage: "en",
        datePublished: "2026-04-19T08:00:00+00:00",
        dateModified: "2026-04-21T00:00:00+00:00",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const totalFontStyles = getTotalFontStyleCount();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <FontGenerator totalFontStyles={totalFontStyles} />
        <SEOSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
