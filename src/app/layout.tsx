import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aestheticletters.com"),
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
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* FOUC prevention — apply dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}}catch(e){}})();`,
          }}
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
        {children}
      </body>
    </html>
  );
}
