import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const pageTitle = "Alphabet Fonts — A–Z Directory";
const pageDescription =
  "Browse every letter of the alphabet in different Unicode font styles. Copy and paste A–Z in bold, script, fraktur, double-struck, and more.";
const canonicalUrl = "https://www.aestheticletters.com/alphabet-fonts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-image.webp"],
  },
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LIVE_LETTERS = new Set(["R"]);

function ArrowOutwardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19L19 5M19 5H12M19 5V12" />
    </svg>
  );
}

export default function AlphabetFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-08-13T08:00:00+00:00",
        dateModified: "2026-08-13T08:00:00+00:00",
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aestheticletters.com/" },
          { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: canonicalUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: "Alphabet Fonts Directory",
        description: "A directory of every letter from A to Z in different Unicode font styles.",
        numberOfItems: LETTERS.length,
        itemListElement: LETTERS.map((letter, index) => {
          const live = LIVE_LETTERS.has(letter);
          return {
            "@type": "ListItem",
            position: index + 1,
            name: `${letter} in Different Fonts`,
            url: live
              ? `https://www.aestheticletters.com/${letter.toLowerCase()}-in-different-fonts`
              : canonicalUrl,
          };
        }),
      },
    ],
  };

  const cardBase =
    "group relative block bg-surface-container-low p-5 rounded-xl shadow-sm transition-all duration-300 ease-out";
  const cardHover =
    "hover:shadow-xl hover:bg-surface-container transform hover:-translate-y-1";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopNavBar activePage="alphabet-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="relative px-4 lg:px-6 pt-8 pb-4 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-background mb-2 tracking-tight">
                Alphabet Fonts
              </h1>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Every letter A to Z is available in many Unicode font styles.{" "}
                <span className="text-primary/80 font-medium">Click a letter</span>{" "}
                to open its full style collection.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 mb-2">
              <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant bg-surface-container-high px-3 py-1 rounded-full">
                A-Z Directory
              </span>
            </div>
          </div>
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </section>

        {/* Alphabet Grid */}
        <section className="px-4 lg:px-6 py-8 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LETTERS.map((letter) => {
              const live = LIVE_LETTERS.has(letter);
              const href = `/${letter.toLowerCase()}-in-different-fonts`;
              const content = (
                <>
                  <div className="flex flex-col h-full gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline text-lg shadow-inner">
                      {letter}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">
                        {letter} in Different Fonts
                      </h3>
                      <p className="font-body text-sm text-on-surface-variant">
                        Every style for the letter {letter}
                      </p>
                    </div>
                  </div>
                  {live && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowOutwardIcon className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </>
              );

              return live ? (
                <Link
                  key={letter}
                  href={href}
                  className={`${cardBase} ${cardHover}`}
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={letter}
                  role="link"
                  aria-disabled="true"
                  className={`${cardBase} opacity-70 cursor-not-allowed`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Visual Accent Section */}
        <section className="w-full py-8 px-4 lg:px-6 max-w-[1200px] mx-auto overflow-hidden">
          <div className="bg-surface-container-lowest rounded-[24px] p-8 relative">
            <div className="grid md:grid-cols-2 items-center gap-8 relative z-10">
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-primary block mb-4">
                  Unicode Technology
                </span>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4">
                  Beyond the Standard Character Set
                </h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                  Our collection leverages Unicode character mapping to provide
                  hundreds of aesthetic variations for every single letter of the
                  alphabet.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-surface-variant/30 rounded-lg text-on-surface font-body text-sm">
                    𝔊𝔬𝔱𝔥𝔦𝔠
                  </div>
                  <div className="px-4 py-2 bg-surface-variant/30 rounded-lg text-on-surface font-body text-sm">
                    𝓑𝓮𝓵𝓵𝓪
                  </div>
                  <div className="px-4 py-2 bg-surface-variant/30 rounded-lg text-on-surface font-body text-sm">
                    𝔻𝕠𝕦𝕓𝕝𝕖
                  </div>
                </div>
              </div>
              <div className="h-48 md:h-64 flex items-center justify-center bg-surface-container rounded-xl overflow-hidden shadow-inner group">
                <div className="relative flex gap-4 animate-pulse">
                  <span className="text-6xl font-headline text-primary opacity-20 group-hover:opacity-50 transition-opacity">
                    Aa
                  </span>
                  <span className="text-6xl font-headline text-on-surface opacity-10 group-hover:opacity-30 transition-opacity">
                    Bb
                  </span>
                  <span className="text-6xl font-headline text-primary opacity-20 group-hover:opacity-50 transition-opacity">
                    Cc
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          </div>
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
