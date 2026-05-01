import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const pageTitle = "Disclaimer | Aesthetic Letters";
const pageDescription =
  "Important information about the nature and limits of the tools and content provided by Aesthetic Letters.";
const canonicalUrl = "https://www.aestheticletters.com/disclaimer";

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
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.jpg"],
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem] min-h-screen">
        {/* Hero Header */}
        <header className="py-24 px-6 md:px-[150px] bg-surface-container-low">
          <div className="max-w-4xl">
            <h1 className="font-headline text-5xl font-bold text-on-surface mb-6 tracking-tight">
              Disclaimer
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed opacity-80">
              A friendly reminder about what Aesthetic Letters is, what it is
              not, and the limits of the tools and content we provide.
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
              <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-outline mb-6">
                Navigation
              </h3>
              <nav className="flex flex-col gap-3">
                <a
                  className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
                  href="#general"
                >
                  1. General Information
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#character-support"
                >
                  2. Character Support
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#external-links"
                >
                  3. External Links &amp; Ads
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#use-at-own-risk"
                >
                  4. Use at Your Own Risk
                </a>
                <a
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                  href="#updates"
                >
                  5. Updates
                </a>
              </nav>
            </div>
          </aside>

          {/* Legal Copy */}
          <article className="flex-grow max-w-3xl font-body text-on-surface leading-[1.8] space-y-16 pb-24">
            <section id="general">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                1. General Information
              </h2>
              <p className="mb-4">
                The tools and stylish fonts provided on Aesthetic Letters (
                <span className="font-bold text-primary">
                  aestheticletters.com
                </span>
                ) are for entertainment and creative purposes only. While we
                want your text to look cool, we do not provide any legal or
                professional advice.
              </p>
            </section>

            <section id="character-support">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                2. Character Support (No Guarantees)
              </h2>
              <p className="mb-4">
                Our tool uses special Unicode characters to create fancy
                styles.
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
                    <strong>Visibility:</strong> Please note that some older
                    devices, apps, or browsers might not support these
                    characters and may show &ldquo;boxes&rdquo; or
                    &ldquo;question marks&rdquo; instead of the styled text.
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
                    <strong>Platform Rules:</strong> We are not responsible if
                    a social media platform (like Instagram, Facebook, or X)
                    decides to hide or limit text that uses these special
                    symbols.
                  </span>
                </li>
              </ul>
            </section>

            <section id="external-links">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                3. External Links &amp; Ads
              </h2>
              <p className="mb-4">
                Our website may contain links to other websites or display
                advertisements (such as Google AdSense). We do not own or
                control these third-party sites. If you click on an ad or a
                link, you are subject to that site&apos;s own rules. We are
                not responsible for what happens on those external websites.
              </p>
            </section>

            <section id="use-at-own-risk">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                4. Use at Your Own Risk
              </h2>
              <p className="mb-4">
                Everything on this website is provided &ldquo;as is&rdquo;
                without any guarantees. Aesthetic Letters will not be held
                responsible for any technical issues, data loss, or
                misunderstandings that occur while using our font generator.
              </p>
            </section>

            <section id="updates">
              <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                5. Updates
              </h2>
              <p className="mb-4">
                We may update this Disclaimer from time to time. By continuing
                to use the site, you agree to the latest version of this
                page.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
