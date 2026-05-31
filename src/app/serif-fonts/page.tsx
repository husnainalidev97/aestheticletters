import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Sidebar from "../components/Sidebar";
import SerifFontsClient from "./SerifFontsClientLazy";

export const metadata: Metadata = {
  title: { absolute: "Serif Fonts - Copy & Paste Elegant Text Styles" },
  description:
    "Generate elegant serif font styles you can copy and paste anywhere. Free serif text generator for Instagram, Facebook, and more.",
  alternates: {
    canonical: "https://www.aestheticletters.com/serif-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/serif-fonts",
    title: "Serif Fonts - Copy & Paste Elegant Text Styles",
    description:
      "Generate elegant serif font styles you can copy and paste anywhere. Free serif text generator for Instagram, Facebook, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serif Fonts - Copy & Paste Elegant Text Styles",
    description:
      "Generate elegant serif font styles you can copy and paste anywhere. Free serif text generator for Instagram, Facebook, and more.",
    images: ["/og-image.jpg"],
  },
};

const faqs = [
  {
    question: "What are serif fonts?",
    answer:
      "Serif fonts are typefaces that have small decorative strokes (called serifs) at the ends of their letterforms. They are associated with elegance, tradition, and readability in printed text.",
  },
  {
    question: "Can I copy and paste serif fonts?",
    answer:
      "Yes. This generator converts your text into Unicode characters that look like serif styles. You can copy and paste them into any platform that supports Unicode text.",
  },
  {
    question: "Where can I use these serif font styles?",
    answer:
      "You can use them on Instagram bios, Facebook posts, Twitter, WhatsApp, Discord, and any other platform that supports standard text input.",
  },
  {
    question: "Are these serif fonts free?",
    answer:
      "Completely free. No account, no subscription, no limit on how many times you generate and copy text.",
  },
];

export default function SerifFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/serif-fonts#webpage",
        url: "https://www.aestheticletters.com/serif-fonts",
        name: "Serif Fonts — Copy & Paste Elegant Text Styles",
        headline: "Serif Fonts - Copy & Paste Elegant Text Styles",
        description:
          "Generate elegant serif font styles you can copy and paste anywhere. Free serif text generator for Instagram, Facebook, and more.",
        inLanguage: "en-US",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/serif-fonts#breadcrumb",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/serif-fonts#software",
        name: "Serif Fonts Generator",
        url: "https://www.aestheticletters.com/serif-fonts",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        browserRequirements: "Requires HTML5 support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/serif-fonts#breadcrumb",
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
            name: "Serif Fonts",
            item: "https://www.aestheticletters.com/serif-fonts",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aestheticletters.com/serif-fonts#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
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
            Serif Fonts — Copy &amp; Paste Elegant Text Styles
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            {/* Placeholder — will be replaced with user-provided content */}
            Generate beautiful serif font styles and copy paste them anywhere. Free, fast, and works on every platform.
          </p>
        </section>

        {/* Interactive Generator */}
        <SerifFontsClient />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content — placeholder for user-provided content */}
            <div className="lg:col-span-8 flex flex-col gap-16">

              {/* Section 1 placeholder */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Serif Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Content will be provided by the user */}
                  Serif fonts are typefaces characterized by small decorative lines or strokes attached to the ends of larger strokes in letters. They convey tradition, elegance, and authority.
                </p>
              </article>

              {/* Section 2 placeholder */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use This Serif Font Generator?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Content will be provided by the user */}
                  Type your text in the input box above. Browse through the serif font styles, pick the one you like, and click Copy. Then paste it anywhere you want.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Type your word, sentence, or caption in the input box",
                    "Browse through serif font styles and pick yours",
                    "Hit Copy; then paste anywhere you like",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </section>

        {/* Explore More Fonts */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Explore More Fonts
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl editorial-shadow p-6 md:p-8">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4 list-none p-0 m-0">
              {[
                { label: "Aesthetic Fonts", href: "/" },
                { label: "Fancy Fonts", href: "/fancy-fonts" },
                { label: "Instagram Fonts", href: "/instagram-fonts" },
                { label: "Cursive Fonts", href: "/cursive-fonts" },
                { label: "Stylish Fonts", href: "/stylish-fonts" },
                { label: "Cute Fonts", href: "/cute-fonts" },
                { label: "Facebook Fonts", href: "/facebook-fonts" },
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

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
