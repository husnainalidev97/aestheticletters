import type { Metadata } from "next";
import Image from "next/image";
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
  title: { absolute: pageTitle },
  description: pageDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "https://www.aestheticletters.com/og-alphabet-fonts.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-alphabet-fonts.webp"],
  },
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LIVE_LETTERS = new Set(["B", "R", "K", "E", "W", "S", "H", "J"]);

function ArrowForwardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function AlphabetFontsPage() {
  const pageDate = "2026-08-13T08:00:00+00:00";

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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aestheticletters.com/" },
      { "@type": "ListItem", position: 2, name: "Alphabet Fonts" },
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
        dangerouslySetInnerHTML={{ __html: safeStringify(breadcrumbJsonLd) }}
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
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Alphabet <span className="text-primary italic">Fonts</span>
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-sm md:text-lg">
            Every letter A to Z is available in many Unicode font styles. Click a
            letter to open its full style collection.
          </p>
        </section>

        {/* Alphabet Grid */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-8">
          <h2 className="sr-only">A–Z Letter Directory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LETTERS.filter((letter) => LIVE_LETTERS.has(letter)).map((letter) => {
              const href = `/${letter.toLowerCase()}-in-different-fonts`;
              const title = `${letter} in Different Fonts`;
              const sub = `Every style for the letter ${letter}`;

              return (
                <Link
                  key={letter}
                  href={href}
                  className="group flex flex-col justify-between p-8 bg-surface-container-lowest rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high min-h-[220px] ring-2 ring-primary"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline text-lg mb-6">
                      {letter}
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-snug">
                      {sub}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Open Tool{" "}
                    <ArrowForwardIcon className="ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="text-center text-on-surface-variant mt-8">
            More letters are on the way.
          </p>
        </section>

        {/* Visual Accent Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-8">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 relative overflow-hidden">
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
              <div className="relative h-48 md:h-64 bg-surface-container rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/alphabet-fonts/alphabet-fonts-visual.png"
                  alt="Decorative preview of styled Aa, Bb, and Cc characters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
