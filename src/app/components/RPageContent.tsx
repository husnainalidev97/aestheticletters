"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "person"
  | "chevronRight"
  | "edit"
  | "contentCopy"
  | "check"
  | "translate"
  | "expandMore"
  | "textFields"
  | "construction"
  | "arrowForward"
  | "adsClick"
  | "info";

function RIcon({ name, className }: { name: IconName; className?: string }) {
  const icons: Record<IconName, ReactNode> = {
    person: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    chevronRight: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
    edit: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
    contentCopy: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
    translate: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </svg>
    ),
    expandMore: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10l5 5 5-5" />
      </svg>
    ),
    textFields: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 4v3h5.5v12h3V7H19V4H5z" />
      </svg>
    ),
    construction: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.59 10.11l4.93-4.93a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-4.93 4.93 4.75 4.75zM4.93 20.07a2.99 2.99 0 0 0 4.24 0l7.78-7.78-4.24-4.24-7.78 7.78a2.99 2.99 0 0 0 0 4.24z" />
      </svg>
    ),
    arrowForward: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
      </svg>
    ),
    adsClick: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 19l4-1.5 1.5 4.5L15 20l6-15-15 6 1.5 4.5L5 19z" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7h.01M11 11h2v6h-2z" />
      </svg>
    ),
  };
  return (
    <span className={`inline-flex items-center justify-center ${className || ""}`} aria-hidden="true">
      {icons[name]}
    </span>
  );
}

const STYLE_CARDS = [
  { label: "Bold", text: "𝐑 𝐫" },
  { label: "Italic", text: "𝘙 𝘳" },
  { label: "Bold Italic", text: "𝑹 𝒓" },
  { label: "Script", text: "ℛ 𝓇" },
  { label: "Bold Script", text: "𝓡 𝓻" },
  { label: "Fraktur", text: "ℜ 𝔯" },
  { label: "Bold Fraktur", text: "𝕽 𝖗" },
  { label: "Double-Struck", text: "ℝ 𝕣" },
  { label: "Sans-Serif", text: "𝖱 𝗋" },
  { label: "Sans Bold", text: "𝗥 𝗿" },
  { label: "Sans Italic", text: "𝘙 𝘳" },
  { label: "Sans Bold Italic", text: "𝙍 𝙧" },
  { label: "Monospace", text: "𝚁 𝚛" },
  { label: "Circled", text: "Ⓡ ⓡ" },
  { label: "Fullwidth", text: "Ｒ ｒ" },
  { label: "Small Caps", text: "ʀ" },
];

const OTHER_ALPHABETS = [
  { label: "Cyrillic (Upper)", char: "Я" },
  { label: "Cyrillic (Lower)", char: "я" },
  { label: "Armenian", char: "Ռ" },
  { label: "Thai", char: "ภ" },
  { label: "Cherokee", char: "Ꭱ" },
  { label: "Chinese", char: "尺" },
  { label: "Aboriginal", char: "尺" },
];

const FAQS = [
  {
    question: "Does styled R text work in usernames?",
    answer:
      "Most platforms only allow plain letters and numbers in usernames, but styled R text works in bios, captions, and display names.",
  },
  {
    question: "Are these real fonts?",
    answer:
      "No, these are Unicode characters that look like different font styles. They work as regular text, not as installed fonts.",
  },
  {
    question: "Why do some R styles look different from others?",
    answer: "A few styles come from an older part of Unicode, so they look more distinct than the rest.",
  },
  {
    question: "Can I style the lowercase r too?",
    answer: "Yes, every style on this page includes both the uppercase R and lowercase r.",
  },
];

const TAGS = ["Instagram", "Discord", "Gaming", "Logos", "Captions"];

export default function RPageContent() {
  const [input, setInput] = useState("R");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState(false);

  const char = (input.charAt(0) || "R").toUpperCase();

  const boldPreview = char === "R" ? "𝐑" : char;
  const italicPreview = char === "R" ? "𝘙" : char;

  useEffect(() => {
    if (!copiedId) return;
    const timer = setTimeout(() => setCopiedId(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedId]);

  async function copy(text: string, id: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch {
      // silently ignore
    }
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-14 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-center justify-between px-4">
        <div className="w-8" />
        <h2 className="font-headline text-lg md:text-xl font-semibold text-on-surface tracking-tight text-center flex-1">
          Aesthetic Letters
        </h2>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
          <RIcon name="person" className="w-[18px] h-[18px]" />
        </div>
      </header>

      <main id="main-content" className="pt-14">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="py-2">
            <p className="font-label text-xs text-on-surface-variant/60 flex items-center gap-1">
              Home <RIcon name="chevronRight" className="w-3.5 h-3.5" />
              Alphabet Fonts <RIcon name="chevronRight" className="w-3.5 h-3.5" />
              R in Different Fonts
            </p>
          </nav>

          {/* Header & Intro */}
          <section className="mb-8">
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-2">
              R in Different Fonts
            </h1>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Transform the letter &apos;R&apos; into various aesthetic styles. These Unicode
              characters work across social media, gaming profiles, and messaging apps
              without needing special font files.
            </p>
          </section>

          {/* Live Generator */}
          <section className="mb-8">
            <div className="bg-surface-container rounded-xl p-4 ring-1 ring-primary/10">
              <div className="relative mb-4">
                <input
                  type="text"
                  maxLength={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, 1))}
                  placeholder="R"
                  className="w-full bg-surface-container-lowest text-on-surface font-headline text-2xl border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-30"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                  <RIcon name="edit" className="w-5 h-5 text-on-surface-variant" />
                </div>
              </div>
              <div className="space-y-2">
                {/* Bold live result */}
                <div className="flex items-center justify-between bg-surface-container-high p-2 rounded-lg group active:bg-primary/5 transition-colors">
                  <span className="font-headline text-2xl text-primary tracking-widest pl-2">
                    {boldPreview}
                  </span>
                  <button
                    type="button"
                    onClick={() => copy(boldPreview, "live-bold")}
                    className={`font-label text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      copiedId === "live-bold"
                        ? "bg-tertiary text-on-tertiary"
                        : "bg-primary text-on-primary"
                    }`}
                  >
                    <RIcon
                      name={copiedId === "live-bold" ? "check" : "contentCopy"}
                      className="w-[18px] h-[18px]"
                    />
                    {copiedId === "live-bold" ? "Copied" : "Copy"}
                  </button>
                </div>
                {/* Italic live result */}
                <div className="flex items-center justify-between bg-surface-container-high p-2 rounded-lg group active:bg-primary/5 transition-colors">
                  <span className="font-headline text-2xl text-primary tracking-widest pl-2">
                    {italicPreview}
                  </span>
                  <button
                    type="button"
                    onClick={() => copy(italicPreview, "live-italic")}
                    className={`font-label text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      copiedId === "live-italic"
                        ? "bg-tertiary text-on-tertiary"
                        : "bg-primary text-on-primary"
                    }`}
                  >
                    <RIcon
                      name={copiedId === "live-italic" ? "check" : "contentCopy"}
                      className="w-[18px] h-[18px]"
                    />
                    {copiedId === "live-italic" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Font Style Showcase */}
          <section className="mb-8">
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-4">
              R in Every Font Style
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {STYLE_CARDS.map((style) => {
                const isCopied = copiedId === style.label;
                return (
                  <div
                    key={style.label}
                    className="bg-surface-container-low p-2 rounded-xl flex flex-col items-center text-center gap-2"
                  >
                    <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">
                      {style.label}
                    </span>
                    <span className="font-headline text-2xl py-2 text-on-surface">
                      {style.text}
                    </span>
                    <button
                      type="button"
                      onClick={() => copy(style.text, style.label)}
                      className={`w-full py-2 rounded-lg transition-all ${
                        isCopied
                          ? "bg-surface-container-highest text-tertiary"
                          : "bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary"
                      }`}
                    >
                      <RIcon
                        name={isCopied ? "check" : "contentCopy"}
                        className="w-[18px] h-[18px] mx-auto"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Explainer */}
          <section className="mb-8">
            <div className="bg-surface-container-highest rounded-xl p-4 overflow-hidden relative">
              <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
                <RIcon name="info" className="w-20 h-20 text-on-surface" />
              </div>
              <h3 className="font-headline text-2xl font-semibold text-on-surface mb-2 relative z-10">
                Why Some R Styles Look Different
              </h3>
              <p className="font-body text-base text-on-surface-variant relative z-10">
                Script, Fraktur, and Double-Struck R come from an older part of Unicode,
                called the Letterlike Symbols block. Their expected spot in the newer
                Mathematical Alphanumeric block was left empty, so these three styles use
                the older characters instead.
              </p>
            </div>
          </section>

          {/* R in Other Alphabets */}
          <section className="mb-8">
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-2">
              R in Other Alphabets
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-4">
              These are real letters from other alphabets that happen to look like R. They
              are not font styles of R.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {OTHER_ALPHABETS.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-low p-2 rounded-xl flex justify-between items-center px-4"
                >
                  <div className="flex flex-col">
                    <span className="font-label text-xs text-on-surface-variant">
                      {item.label}
                    </span>
                    <span className="font-headline text-2xl text-primary">{item.char}</span>
                  </div>
                  <RIcon name="translate" className="w-5 h-5 text-on-surface-variant/30" />
                </div>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="mb-8 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label text-sm"
              >
                {tag}
              </span>
            ))}
          </section>

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {FAQS.map((faq) => (
                <details key={faq.question} className="bg-surface-container p-4 rounded-xl group">
                  <summary className="list-none flex justify-between items-center font-label text-sm text-on-surface cursor-pointer">
                    {faq.question}
                    <RIcon name="expandMore" className="w-5 h-5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-2 font-body text-base text-on-surface-variant">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Ad Placement */}
          <section className="mb-8">
            <div className="w-full h-32 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex flex-col items-center justify-center gap-1 opacity-50">
              <span className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">
                Advertisement
              </span>
              <div className="w-full h-px bg-outline-variant/10" />
              <RIcon name="adsClick" className="w-6 h-6 text-on-surface-variant" />
            </div>
          </section>

          {/* Explore More */}
          <section className="mb-8">
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-4">
              Explore More
            </h2>
            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-3 text-on-primary-container bg-primary-container/20 p-4 rounded-xl group"
              >
                <RIcon name="textFields" className="w-5 h-5" />
                <span className="font-label text-sm">Similar Font Styles</span>
                <RIcon name="arrowForward" className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 text-on-primary-container bg-primary-container/20 p-4 rounded-xl group"
              >
                <RIcon name="construction" className="w-5 h-5" />
                <span className="font-label text-sm">Popular Text Tools</span>
                <RIcon name="arrowForward" className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 px-4 py-8 border-t border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RIcon name="textFields" className="w-5 h-5 text-primary" />
              <span className="font-headline text-lg text-on-surface tracking-tight">
                Aesthetic Letters
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="font-label text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                About
              </Link>
              <Link href="/privacy-policy" className="font-label text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="font-label text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <p className="font-label text-xs text-on-surface-variant/50 text-center">
            © 2024 Aesthetic Letters. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Toast */}
      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 bg-surface-bright text-on-surface px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transition-all z-[100] ${
          toast
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <RIcon name="check" className="w-5 h-5 text-primary" />
        <span className="font-label text-sm">Copied to clipboard!</span>
      </div>
    </>
  );
}
