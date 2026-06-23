import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import FontGenerator from "../components/FontGeneratorLazy";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: "Number Font Generator - Copy & Paste Stylish Numbers",
  description:
    "Generate stylish number fonts with our free Number Font Generator. Copy and paste fancy numbers for Instagram, Facebook, WhatsApp, and more.",
  alternates: {
    canonical: "https://www.aestheticletters.com/number-font-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/number-font-generator",
    title: "Number Font Generator - Copy & Paste Stylish Numbers",
    description:
      "Generate stylish number fonts with our free Number Font Generator. Copy and paste fancy numbers for Instagram, Facebook, WhatsApp, and more.",
    images: [{ url: "https://www.aestheticletters.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Font Generator - Copy & Paste Stylish Numbers",
    description:
      "Generate stylish number fonts with our free Number Font Generator. Copy and paste fancy numbers for Instagram, Facebook, WhatsApp, and more.",
    images: ["https://www.aestheticletters.com/og-image.jpg"],
  },
};

export default function NumberFontGenerator() {
  const totalFontStyles = getTotalFontStyleCount();

  return (
    <>
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <FontGenerator totalFontStyles={totalFontStyles} />

        {/* Content sections will be added here */}

      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
