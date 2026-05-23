import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Sidebar from "../components/Sidebar";
import FacebookFontsClient from "./FacebookFontsClientLazy";

export const metadata: Metadata = {
  title: { absolute: "Facebook Fonts - Copy & Paste" },
  description:
    "Generate stylish Facebook fonts and copy-paste them instantly. Transform your text for Facebook bios, posts, and comments.",
  alternates: {
    canonical: "https://www.aestheticletters.com/facebook-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/facebook-fonts",
    title: "Facebook Fonts - Copy & Paste",
    description:
      "Generate stylish Facebook fonts and copy-paste them instantly. Transform your text for Facebook bios, posts, and comments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Fonts - Copy & Paste",
    description:
      "Generate stylish Facebook fonts and copy-paste them instantly. Transform your text for Facebook bios, posts, and comments.",
  },
};

const faqs: { question: string; answer: string }[] = [];

export default function FacebookFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/facebook-fonts#webpage",
        url: "https://www.aestheticletters.com/facebook-fonts",
        name: "Facebook Fonts - Copy & Paste",
        description:
          "Generate stylish Facebook fonts and copy-paste them instantly. Transform your text for Facebook bios, posts, and comments.",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#software",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/facebook-fonts#software",
        name: "Facebook Fonts Generator",
        url: "https://www.aestheticletters.com/facebook-fonts",
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home Page",
            item: "https://www.aestheticletters.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Tools",
            item: "https://www.aestheticletters.com/all-tools",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Facebook Fonts",
            item: "https://www.aestheticletters.com/facebook-fonts",
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": "https://www.aestheticletters.com/facebook-fonts#faq",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer.replace(/\n\n/g, " "),
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem]">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
          <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight leading-tight text-on-background mb-6">
            Facebook Fonts: Copy &amp; Paste Stylish Text
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            {/* Content to be provided */}
          </p>
        </section>

        {/* Interactive Generator */}
        <FacebookFontsClient />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Content articles to be provided */}
            </div>

            {/* Sidebar */}
            <Sidebar
              showBanner={false}
              showTips={false}
            />
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
            <h2 className="font-headline text-4xl font-bold mb-16 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </section>
        )}
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
