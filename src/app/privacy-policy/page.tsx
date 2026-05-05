import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Transparency is the foundation of our gallery. Learn how we handle your data with care.";
const canonicalUrl = "https://www.aestheticletters.com/privacy-policy";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem] min-h-screen">
        {/* Hero Header */}
        <header className="py-24 px-6 md:px-[150px] bg-surface-container-low">
          <div className="max-w-4xl">
            <h1 className="font-headline text-5xl font-bold text-on-surface mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed opacity-80">
              Transparency is the foundation of our gallery. Learn how we handle
              your data with the same care we give to every pixel and character.
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
              <h2 className="font-headline text-xs font-bold uppercase tracking-widest text-outline mb-6">
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
                  href="#data-collection"
                >
                  2. Data Collection
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#cookies"
                >
                  3. Cookie Usage
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#advertising"
                >
                  4. Third-Party Advertising
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#your-rights"
                >
                  5. Your Privacy Rights
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
                Welcome to Aesthetic Letters. We respect your privacy and are
                committed to protecting it through our compliance with this
                policy. This policy describes the types of information we may
                collect from you or that you may provide when you visit the
                website{" "}
                <span className="font-bold text-primary">
                  aestheticletters.com
                </span>{" "}
                and our practices for collecting, using, maintaining, protecting,
                and disclosing that information.
              </p>
              <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-primary mt-8">
                <p className="italic text-on-surface-variant">
                  &ldquo;Our goal is to provide a creative playground where your
                  privacy is never the cost of admission.&rdquo;
                </p>
              </div>
            </section>

            <section id="data-collection">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                2. Data Collection
              </h2>
              <p className="mb-4">
                We collect several types of information from and about users of
                our Website, including:
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
                    <strong>Usage Data:</strong> We may collect information about
                    how you interact with our website, such as the specific fonts
                    generated and tools utilized.
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
                    <strong>Device Information:</strong> Information about your
                    computer and internet connection, including your IP address,
                    operating system, and browser type.
                  </span>
                </li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                3. Cookie Usage
              </h2>
              <p className="mb-6">
                As you navigate through and interact with our Website, we may use
                automatic data collection technologies to collect certain
                information about your equipment, browsing actions, and patterns.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_20px_40px_rgba(28,27,27,0.06)]">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">
                    cookie
                  </span>
                  <h3 className="font-bold mb-2">Essential Cookies</h3>
                  <p className="text-sm text-on-surface-variant">
                    Necessary for the website to function, such as maintaining
                    your session preferences.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_20px_40px_rgba(28,27,27,0.06)]">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">
                    analytics
                  </span>
                  <h3 className="font-bold mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-on-surface-variant">
                    Help us understand how visitors interact with the site by
                    collecting and reporting information anonymously.
                  </p>
                </div>
              </div>
            </section>

            <section id="advertising">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                4. Third-Party Advertising
              </h2>
              <p className="mb-4">
                We use Google AdSense and other third-party advertising companies
                to serve ads when you visit our website. These companies may use
                information about your visits to this and other websites in order
                to provide advertisements about goods and services of interest to
                you.
              </p>
              <p className="mb-4">
                Google uses the DART cookie to serve ads based on user visits.
                Users can opt out by visiting the Google Ad and Content Network
                Privacy Policy at{" "}
                <a
                  className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-4 transition-colors"
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/technologies/ads
                </a>
                .
              </p>
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                <h3 className="font-headline font-bold text-primary mb-3">
                  Notice for California Residents
                </h3>
                <p className="text-sm">
                  Under the CCPA, you have the right to opt-out of the
                  &ldquo;sale&rdquo; of your personal information. We do not sell
                  personal information in the traditional sense, but our use of
                  advertising cookies may be considered a &ldquo;sale&rdquo;
                  under certain interpretations.
                </p>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                5. Your Privacy Rights
              </h2>
              <p className="mb-8">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <div className="space-y-4">
                <details className="group bg-surface-container-low rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container-high transition-colors">
                    <span className="font-bold">Access and Portability</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline-variant/20">
                    You have the right to request a copy of the personal
                    information we hold about you and to receive it in a
                    structured, commonly used, and machine-readable format.
                  </div>
                </details>
                <details className="group bg-surface-container-low rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container-high transition-colors">
                    <span className="font-bold">Correction and Deletion</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline-variant/20">
                    You have the right to request that we correct any inaccurate
                    personal information and, in certain circumstances, that we
                    delete your personal information.
                  </div>
                </details>
                <details className="group bg-surface-container-low rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container-high transition-colors">
                    <span className="font-bold">Withdrawal of Consent</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline-variant/20">
                    If we are processing your personal information based on your
                    consent, you have the right to withdraw that consent at any
                    time.
                  </div>
                </details>
              </div>
            </section>

            <section className="pt-12 border-t border-outline-variant/20" id="contact">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                Contact Information
              </h2>
              <p className="mb-6">
                To ask questions or comment about this privacy policy and our
                privacy practices, contact us at:
              </p>
              <a
                className="inline-flex items-center gap-2 font-bold text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-4 transition-colors group"
                href="mailto:privacy@aestheticletters.com"
              >
                privacy@aestheticletters.com
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
