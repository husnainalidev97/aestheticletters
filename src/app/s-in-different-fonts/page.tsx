import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import SPageContent from "../components/SPageContent";

const pageTitle = "S in Different Fonts";
const pageDescription = "";
const canonicalUrl = "https://www.aestheticletters.com/s-in-different-fonts";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
};

export default function SInDifferentFontsPage() {
  return (
    <>
      <TopNavBar activePage="s-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "S in Different Fonts", href: "/s-in-different-fonts" },
          ]}
        />
        <SPageContent />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
