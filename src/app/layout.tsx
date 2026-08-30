import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Noto_Sans_Math, Noto_Sans_Symbols, Noto_Sans_Symbols_2 } from "next/font/google";
import "./globals.css";
import { ConsentProvider } from "./components/ConsentProvider";
import CookieBanner from "./components/CookieBanner";
import ConsentAwareScripts from "./components/ConsentAwareScripts";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const notoMath = Noto_Sans_Math({
  variable: "--font-noto-math",
  subsets: ["math"],
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const notoSymbols = Noto_Sans_Symbols({
  variable: "--font-noto-symbols",
  subsets: ["symbols"],
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const notoSymbols2 = Noto_Sans_Symbols_2({
  variable: "--font-noto-symbols-2",
  subsets: ["symbols"],
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aestheticletters.com"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  title: {
    default: "Aesthetic Letters | Free Aesthetic Font Generator",
    template: "%s | Aesthetic Letters",
  },
  description:
    "The high-performance specimen for digital expression. Curate your social identity with unicode elegance.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#451ebb",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aestheticletters.com/#organization",
      name: "Aesthetic Letters",
      alternateName: "The Digital Curator",
      url: "https://www.aestheticletters.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aestheticletters.com/icon.png",
        width: 192,
        height: 192,
      },
      description:
        "High-performance, privacy-first Unicode font generator for social media creators.",
      email: "hello@aestheticletters.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aestheticletters.com/#website",
      url: "https://www.aestheticletters.com",
      name: "Aesthetic Letters",
      inLanguage: "en",
      publisher: { "@id": "https://www.aestheticletters.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${notoMath.variable} ${notoSymbols.variable} ${notoSymbols2.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to third-party origins for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        {/* Consent default — deny optional cookies until the user consents */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag("consent","default",{ad_storage:"denied",analytics_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});`,
          }}
        />
        {/* Pre-hide the cookie banner for returning users before first paint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `.cookie-consent-given #cookie-banner{display:none!important}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=document.cookie.match(/(?:^|; )al-cookie-consent=([^;]*)/);var g=document.cookie.match(/(?:^|; )al-geo-consent-required=([^;]*)/);var l=localStorage.getItem("al-cookie-consent");if((c&&c[1])||(g&&decodeURIComponent(g[1])==="0")||l){document.documentElement.classList.add("cookie-consent-given")}}catch(e){}})();`,
          }}
        />
        {/* FOUC prevention — apply dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}}catch(e){}})();`,
          }}
        />
        {/* Google AdSense verification. The client-side loader runs after
            hydration through ConsentAwareScripts on monetized pages. */}
        <meta
          name="google-adsense-account"
          content="ca-pub-5520146667836147"
        />
      </head>
      <body className="bg-background text-on-background font-body transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-md focus:font-headline focus:font-bold"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <ConsentProvider>
          <CookieBanner />
          <ConsentAwareScripts />
        </ConsentProvider>
        {children}
        {/* Google Analytics — loaded with defer at the end of the body so it
            does not block the initial render, while the consent default above
            ensures Consent Mode is respected from the first dataLayer push. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-6QLR77B1GL"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `gtag('js',new Date());gtag('config','G-6QLR77B1GL');`,
          }}
        />
      </body>
    </html>
  );
}
