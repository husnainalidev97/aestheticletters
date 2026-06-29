import type { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import BoldFontGenerator from "../components/BoldFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "" },
  description: "",
  alternates: {
    canonical: "https://www.aestheticletters.com/discord-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/discord-fonts",
    title: "",
    description: "",
    images: [{ url: "", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: [""],
  },
};

const faqs = [
  {
    question: "",
    answer: "",
  },
];

const discordStyles = [
  {
    name: "",
    description: "",
  },
];

export default function DiscordFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/discord-fonts#software",
        name: "Discord Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/discord-fonts",
        image: "",
        description: "",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/discord-fonts#webpage",
        url: "https://www.aestheticletters.com/discord-fonts",
        name: "",
        description: "",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "",
        dateModified: "",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/discord-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/discord-fonts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/discord-fonts#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
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
            name: "Discord Fonts",
            item: "https://www.aestheticletters.com/discord-fonts",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "",
    description: "",
    image: "",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "",
        text: "",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "",
        text: "",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "",
        text: "",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Discord Fonts", href: "/discord-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            {/* Discord Fonts page title here */}
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            {/* Discord Fonts page description here */}
          </p>
        </section>

        {/* Interactive Font Generator */}
        <BoldFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Section 1 */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 1 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 1 content */}
                </p>
              </article>

              {/* Section 2 */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 2 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 2 content */}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Subsection heading */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Subsection content */}
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 3 - How To */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* How to section heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {/* How to section intro */}
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "",
                      description: "",
                    },
                    {
                      step: 2,
                      title: "",
                      description: "",
                    },
                    {
                      step: 3,
                      title: "",
                      description: "",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-headline text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 4 */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 4 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 4 content */}
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 4 content continued */}
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {/* Section 4 content continued */}
                </p>
              </article>

              {/* Section 5 - Where it works */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 5 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 5 intro */}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Platform 1 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Platform 1 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Platform 2 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Platform 2 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Platform 3 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Platform 3 content */}
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 6 - Limitations */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 6 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 6 intro */}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Limitation 1 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Limitation 1 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Limitation 2 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Limitation 2 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Limitation 3 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Limitation 3 content */}
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 7 - Styles Explained */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 7 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {/* Section 7 intro */}
                </p>
                <div className="space-y-8">
                  {discordStyles.map((style) => (
                    <div key={style.name}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {style.name}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {style.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 8 - Troubleshooting */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {/* Section 8 heading */}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  {/* Section 8 intro */}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Troubleshooting 1 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Troubleshooting 1 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Troubleshooting 2 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Troubleshooting 2 content */}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {/* Troubleshooting 3 */}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {/* Troubleshooting 3 content */}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Security Feature */}
              <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
                <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  Client-Side Security
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  We prioritize your privacy. All transformations happen 100% in
                  your browser. We never store or track the text you type.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Explore More Tools */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            {/* Explore more tools description */}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Similar Font Styles */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Similar Font Styles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing handwritten text" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83C\uDD70\uFE0F", desc: "Classic serif letters" },
                  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "\uD83D\uDD24", desc: "Clean modern text" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  >
                    <span className="text-2xl mb-2">{tool.icon}</span>
                    <span className="font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {tool.label}
                    </span>
                    <span className="text-on-surface-variant text-xs mt-1 leading-snug">
                      {tool.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Popular Tools */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Popular Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Facebook Font Generator", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Number Font Generator", href: "/number-font-generator", icon: "\uD83D\uDD22", desc: "Stylish number fonts" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  >
                    <span className="text-2xl mb-2">{tool.icon}</span>
                    <span className="font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {tool.label}
                    </span>
                    <span className="text-on-surface-variant text-xs mt-1 leading-snug">
                      {tool.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24">
          <h2 className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center">
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
