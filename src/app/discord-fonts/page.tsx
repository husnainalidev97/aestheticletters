import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Discord Fonts - Aesthetic Letters" },
  description:
    "Looking for discord fonts? Explore all our font generators and find the perfect text style for any platform.",
  alternates: {
    canonical: "https://www.aestheticletters.com/discord-fonts",
  },
};

export default function DiscordFontsPage() {
  return (
    <>
      <TopNavBar activePage="discord-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Discord Fonts", href: "/discord-fonts" },
          ]}
        />

        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-4 md:mb-6">
            Discord Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-8 text-sm md:text-lg">
            This page has been moved. Explore all our font generators to find
            the perfect text style for Discord and every other platform.
          </p>
          <Link
            href="/all-tools"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-full font-headline font-bold hover:opacity-90 transition-opacity"
          >
            Explore All Tools
          </Link>
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
