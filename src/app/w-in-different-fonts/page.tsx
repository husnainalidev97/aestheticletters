import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const pageTitle = "W in Different Fonts";
const pageDescription = "See the letter W in different fonts. Free, no signup needed.";
const canonicalUrl = "https://www.aestheticletters.com/w-in-different-fonts";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
};

export default function WInDifferentFontsPage() {
  return (
    <>
      <TopNavBar activePage="w-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "W in Different Fonts", href: "/w-in-different-fonts" },
          ]}
        />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
