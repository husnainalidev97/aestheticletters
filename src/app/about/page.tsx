import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const pageTitle = "About Us";
const pageDescription =
  "Learn about Aesthetic Letters — a small team passionate about design, accessibility, and the power of Unicode.";
const canonicalUrl = "https://www.aestheticletters.com/about";

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

export default function AboutPage() {
  return (
    <>
      <TopNavBar activePage="about" />
      <main id="main-content" className="pt-[5.5rem]">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-[150px] max-w-7xl mx-auto flex flex-col items-start gap-8">
          <span className="text-primary font-headline uppercase tracking-[0.2em] text-sm font-bold">
            The Story of Aesthetic Letters
          </span>
          <h1 className="font-headline text-5xl md:text-7xl leading-tight text-on-surface max-w-4xl">
            Giving Your Words a{" "}
            <em className="text-editorial-gradient not-italic">New Identity</em>.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Aesthetic Letters emerged from a simple observation: digital text
            should be as expressive as the people typing it. We&apos;ve crafted
            a seamless environment where your creative ideas meet technical
            simplicity, all powered by our custom Unicode engine.
          </p>
        </section>

        {/* Core Values (Bento Grid) */}
        <section className="py-24 px-6 md:px-[150px] bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Speed */}
              <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500 shadow-sm hover:shadow-xl">
                <div>
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      bolt
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl mb-4">
                    Zero-Lag Generation
                  </h2>
                  <p className="text-on-surface-variant text-lg max-w-md">
                    Experience immediate results with our high-performance
                    engine. We&apos;ve optimized every line of code to ensure
                    your creative flow remains smooth and uninterrupted by any
                    technical delays.
                  </p>
                </div>
              </div>
              {/* Card 2: Simplicity */}
              <div className="bg-primary p-12 rounded-xl text-on-primary flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-14 h-14 rounded-full bg-on-primary/20 flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-on-primary text-3xl">
                      code
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl mb-4 text-on-primary">
                    Intuitive by Nature
                  </h2>
                  <p className="text-on-primary text-lg opacity-90">
                    We believe in tools that work without instructions. Our
                    interface is designed to be accessible and straightforward,
                    removing all the unnecessary clutter so you can focus
                    purely on your content.
                  </p>
                </div>
              </div>
              {/* Card 3: Privacy */}
              <div className="md:col-span-3 bg-surface-container-lowest p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 shadow-sm">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      security
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl mb-4">
                    Data Integrity
                  </h2>
                  <p className="text-on-surface-variant text-lg mb-6">
                    Privacy isn&apos;t just a nice-to-have; it&apos;s a
                    fundamental part of what we do. By processing everything
                    directly in your local browser, we ensure that your private
                    text never touches a server and never leaves your control.
                  </p>
                </div>
                <div
                  aria-label="privacy first"
                  role="img"
                  className="relative flex-1 w-full h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-primary-fixed via-surface-container-highest to-primary-fixed"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="absolute w-[min(420px,95%)] aspect-square rounded-full border border-primary/15" />
                    <div className="absolute w-[min(300px,70%)] aspect-square rounded-full border border-primary/25" />
                    <div className="absolute w-[min(200px,50%)] aspect-square rounded-full border border-primary/30 bg-primary-fixed/50 backdrop-blur-sm" />
                  </div>
                  <div className="relative h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl shadow-primary/30 ring-8 ring-primary-fixed/50">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                      >
                        encrypted
                      </span>
                    </div>
                    <div className="font-headline text-2xl md:text-3xl font-bold text-primary">
                      Privacy First
                    </div>
                    <div className="font-label text-[10px] md:text-xs font-bold uppercase tracking-[0.28em] text-on-surface-variant">
                      End-to-End &middot; Client-Side Only
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section (Timeline Style) */}
        <section className="py-24 px-6 md:px-[150px] max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl mb-16 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-outline-variant/30 -z-10" />
            {[
              {
                icon: "lightbulb",
                title: "The Inspiration",
                text: "We noticed that most text tools were either too slow or too cluttered, so we set out to build something better.",
              },
              {
                icon: "code",
                title: "Technical Milestone",
                text: "Our team developed a client-side processing system that handles thousands of symbols without compromising on speed.",
              },
              {
                icon: "rocket_launch",
                title: "The Rollout",
                text: "Aesthetic Letters was introduced to the world, offering a clean alternative for creators who value both style and performance.",
              },
              {
                icon: "public",
                title: "Looking Ahead",
                text: "We continue to refine our toolset, adding more sophisticated styles while maintaining our commitment to a fast, ad-free environment.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-4 py-8 md:py-0"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg ring-8 ring-background">
                  <span className="material-symbols-outlined">
                    {step.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-xl mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional CTA */}
        <section className="py-24 px-6 md:px-[150px] max-w-7xl mx-auto bg-surface-container-high rounded-3xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-headline text-4xl leading-tight">
                Start your creative journey now.
              </h2>
              <p className="text-on-surface-variant text-lg">
                Join a growing community of digital creators who use Aesthetic
                Letters to redefine their online presence with unique,
                professional-grade text styles.
              </p>
              <div className="pt-4">
                <Link
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label font-bold tracking-wide hover:opacity-90 transition-all scale-95 active:scale-90 inline-flex items-center gap-3"
                  href="/"
                >
                  Let&rsquo;s Create{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div
                aria-label="story visuals"
                role="img"
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-fixed via-surface-container-highest to-primary-fixed/60"
              >
                <svg
                  aria-hidden
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 340"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="storyStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#451ebb" />
                      <stop offset="100%" stopColor="#cabeff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M -50 270 C 120 180, 240 340, 420 180 S 700 120, 650 40"
                    fill="none"
                    stroke="url(#storyStroke)"
                    strokeWidth="2.5"
                    opacity="0.55"
                  />
                  <path
                    d="M -20 310 C 150 240, 260 360, 440 200 S 660 140, 620 80"
                    fill="none"
                    stroke="url(#storyStroke)"
                    strokeWidth="1.25"
                    opacity="0.35"
                  />
                  <circle cx="540" cy="70" r="4" fill="#451ebb" opacity="0.6" />
                  <circle cx="80" cy="260" r="3" fill="#451ebb" opacity="0.4" />
                  <circle cx="320" cy="40" r="2" fill="#451ebb" opacity="0.5" />
                </svg>
                <span
                  aria-hidden
                  className="absolute top-5 left-6 font-headline text-3xl text-primary/25 select-none"
                >
                  Aa
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-5 right-8 font-headline text-2xl italic text-primary/25 select-none"
                >
                  {"𝓐𝓪"}
                </span>
                <div className="relative h-full flex flex-col items-center justify-center gap-3 px-8 text-center">
                  <span className="font-label text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    Visual Storytelling
                  </span>
                  <div
                    className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold italic text-editorial-gradient leading-none"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Storytelling
                  </div>
                  <div className="w-16 h-px bg-primary/40" />
                  <span className="font-body text-sm text-on-surface-variant italic">
                    Design is intelligence made visible.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buffer Space */}
        <div className="h-12 md:h-24" />
      </main>
      <Footer />
    </>
  );
}
