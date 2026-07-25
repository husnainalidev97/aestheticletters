import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import { getTotalFontStyleCount } from "./lib/fontCount";

export const metadata: Metadata = {
  title: "Page Not Found | Aesthetic Letters",
  description:
    "The page you're looking for doesn't exist. Head back to Aesthetic Letters to browse our font generators.",
  robots: { index: false, follow: false },
};

const totalFontStyles = getTotalFontStyleCount();

const quickLinks = [
  {
    href: "/",
    label: "Aesthetic Fonts",
    description: `${totalFontStyles}+ copy-paste stylish fonts for every platform.`,
    icon: "auto_awesome",
  },
  {
    href: "/all-tools",
    label: "All Tools",
    description: "Browse the full collection of font generators.",
    icon: "apps",
  },
  {
    href: "/instagram-fonts",
    label: "Instagram Fonts",
    description: "Stylish scripts built for bios, captions, and stories.",
    icon: "camera",
  },
  {
    href: "/cursive-fonts",
    label: "Cursive Fonts",
    description: "Flowing handwritten and signature-style scripts.",
    icon: "draw",
  },
  {
    href: "/fancy-fonts",
    label: "Fancy Fonts",
    description: "Decorative Unicode letter sets for a bold finish.",
    icon: "brush",
  },
];

export default function NotFound() {
  return (
    <>
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem]">
        <section className="max-w-4xl mx-auto px-6 md:px-[150px] py-24 md:py-32 text-center">
          <span className="font-label text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary">
            404 · Page not found
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mt-6 mb-6 text-on-surface">
            This page drifted{" "}
            <em className="text-editorial-gradient not-italic">off-script</em>.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
            The link you followed may be broken, or the page may have been
            removed. Try one of the tools below, or head back to the homepage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold tracking-wide hover:opacity-90 transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="material-symbols-outlined text-lg">home</span>
              Back to home
            </Link>
            <Link
              href="/all-tools"
              className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl font-label font-bold tracking-wide hover:bg-surface-container-highest transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="material-symbols-outlined text-lg">apps</span>
              Browse all tools
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-[150px] pb-24">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-8 text-center">
            Popular destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-2 p-6 bg-surface-container-lowest rounded-xl hover:bg-surface-container-high transition-all shadow-[0px_20px_40px_rgba(28,27,27,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">
                  {item.label}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
