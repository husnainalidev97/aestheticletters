import type { Metadata } from "next";
import Link from "next/link";
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-04-19T08:00:00+00:00",
        dateModified: "2026-04-21T00:00:00+00:00",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.aestheticletters.com/",
          },
        ],
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

        {/* Explore More Fonts */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Explore More Fonts
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl editorial-shadow p-6 md:p-8">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4 list-none p-0 m-0">
              {[
                { label: "Fancy Fonts", href: "/fancy-fonts" },
                { label: "Instagram Fonts", href: "/instagram-fonts" },
                { label: "Cursive Fonts", href: "/cursive-fonts" },
                { label: "Stylish Fonts", href: "/stylish-fonts" },
                { label: "Cute Fonts", href: "/cute-fonts" },
              ].map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-surface-container-low font-body font-medium text-sm md:text-base text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
