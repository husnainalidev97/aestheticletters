import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import ContactEmailCard from "./ContactEmailCard";

const pageTitle = "Contact Us";
const pageDescription =
  "Have a suggestion for a new font style, spotted a bug, or want to collaborate? Email us at hello@aestheticletters.com.";
const canonicalUrl = "https://www.aestheticletters.com/contact";

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

export default function ContactPage() {
  return (
    <>
      <TopNavBar />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="max-w-[640px] mx-auto">
          <header className="mb-12">
            <span className="block text-xs font-label font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Get in touch
            </span>
            <h1 className="font-headline font-bold text-4xl md:text-5xl text-on-surface mb-4">
              Contact Us
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Have a suggestion for a new font style, found a bug, or want to
              partner with us? We&apos;d love to hear from you.
            </p>
          </header>

          <ContactEmailCard />

          <p className="mt-10 text-sm text-on-surface-variant text-center">
            We reply to every message, usually within a few business days.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
