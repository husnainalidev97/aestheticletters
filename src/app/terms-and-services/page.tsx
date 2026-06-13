import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const pageTitle = "Terms and Services";
const pageDescription =
  "The simple rules that guide your use of Aesthetic Letters. Please review before using our font generator.";
const canonicalUrl = "https://www.aestheticletters.com/terms-and-services";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: { index: false, follow: true },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.jpg"],
  },
};

export default function TermsAndServicesPage() {
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
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Terms and Services",
            item: canonicalUrl,
          },
        ],
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
      <main id="main-content" className="pt-[5.5rem] min-h-screen">
        {/* Hero Header */}
        <header className="py-24 px-6 md:px-[150px] bg-surface-container-low">
          <div className="max-w-4xl">
            <h1 className="font-headline text-5xl font-bold text-on-surface mb-6 tracking-tight">
              Terms and Services
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed opacity-80">
              A few simple rules that keep Aesthetic Letters open, safe, and
              inspiring for everyone who uses it.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-primary uppercase tracking-widest">
              <span>Effective Date: April 21, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span>Last Updated: April 21, 2026</span>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="px-6 md:px-[150px] py-12 flex flex-col md:flex-row gap-20">
          {/* Sidebar Navigation (Sticky) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-4">
              <h2 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6">
                Navigation
              </h2>
              <nav className="flex flex-col gap-3">
                <a
                  className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
                  href="#introduction"
                >
                  1. Introduction
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#use-of-services"
                >
                  2. Use of Our Services
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#availability"
                >
                  3. Website Availability
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#intellectual-property"
                >
                  4. Intellectual Property
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#third-party"
                >
                  5. Third-Party Links &amp; Ads
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#limitations"
                >
                  6. Limitation of Liability
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#changes"
                >
                  7. Changes to Terms
                </a>
              </nav>
            </div>
          </aside>

          {/* Legal Copy */}
          <article className="flex-grow max-w-3xl font-body text-on-surface leading-[1.8] space-y-16 pb-24">
            <section id="introduction">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Aesthetic Letters. By using our website (
                <span className="font-bold text-primary">
                  aestheticletters.com
                </span>
                ), you agree to follow these simple rules. If you do not agree
                with any of these terms, please feel free not to use our tool.
              </p>
            </section>

            <section id="use-of-services">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                2. Use of Our Services
              </h2>
              <p className="mb-4">
                Our website is a creative tool designed to help you generate
                stylish fonts and text.
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4 items-start">
                  <span
                    className="material-symbols-outlined text-primary mt-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span>
                    <strong>Free to Use:</strong> You can use our fonts for
                    your social media, personal projects, or creative work for
                    free.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span
                    className="material-symbols-outlined text-primary mt-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span>
                    <strong>No Misuse:</strong> You agree not to use our
                    generated text for any illegal purpose or to spread hate
                    speech and harassment.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span
                    className="material-symbols-outlined text-primary mt-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span>
                    <strong>Ownership:</strong> While the font styles are
                    generated using Unicode characters, the original text you
                    type remains yours.
                  </span>
                </li>
              </ul>
            </section>

            <section id="availability">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                3. Website Availability
              </h2>
              <p className="mb-4">
                We aim to keep Aesthetic Letters running smoothly 24/7.
                However, sometimes the site might be down for maintenance or
                technical updates. We are not responsible if the website is
                temporarily unavailable.
              </p>
            </section>

            <section id="intellectual-property">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                The design, layout, logo, and custom tools on this website
                belong to Aesthetic Letters. You may not copy the
                website&apos;s code or design without our permission.
              </p>
            </section>

            <section id="third-party">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                5. Third-Party Links &amp; Ads
              </h2>
              <p className="mb-4">
                Our website contains ads (like Google AdSense) and links to
                other sites. We do not control these third-party websites, so
                we are not responsible for their content or privacy practices.
                Please check their terms separately.
              </p>
            </section>

            <section id="limitations">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                6. Limitation of Liability
              </h2>
              <p className="mb-4">
                We provide this tool &ldquo;as is.&rdquo; We do not guarantee
                that the fonts will look the same on every device or app.
                Aesthetic Letters will not be liable for any issues or damages
                that happen while using our website.
              </p>
            </section>

            <section id="changes">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                7. Changes to Terms
              </h2>
              <p className="mb-4">
                We may update these terms from time to time to keep up with
                new features. We recommend checking this page occasionally to
                stay informed.
              </p>
            </section>

            <section className="pt-12 border-t border-outline-variant/20" id="contact">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions regarding these Terms, you can reach
                us at:
              </p>
              <a
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline group"
                href="mailto:support@aestheticletters.com"
              >
                support@aestheticletters.com
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
