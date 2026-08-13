"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { letterRStyles, otherAlphabetsR } from "../lib/alphabetFontStyles";

type IconName =
  | "edit"
  | "contentCopy"
  | "check"
  | "expandMore"
  | "textFields"
  | "construction"
  | "arrowForward"
  | "adsClick"
  | "info";

function RIcon({ name, className }: { name: IconName; className?: string }) {
  const icons: Record<IconName, ReactNode> = {
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

const styleCards = letterRStyles.map((style) => {
  const upper = style.transform("R");
  const lower = style.transform("r");
  const text = upper === lower ? upper : `${upper} ${lower}`;
  const label = style.name === "Sans" ? "Sans-Serif" : style.name;
  return { label, text };
});

const otherAlphabetCards = otherAlphabetsR.flatMap((entry) => {
  if (entry.script === "Cyrillic") {
    return [
      { label: "Cyrillic (Upper)", char: entry.upper },
      { label: "Cyrillic (Lower)", char: entry.lower ?? entry.upper },
    ];
  }
  return [{ label: entry.label, char: entry.upper }];
});

const FAQS = [
  {
    question: "Does styled R text work in usernames?",
    answer:
      "Most platforms only allow plain letters and numbers in usernames, but styled R text works in bios, captions, and display names.",
  },
  {
    question: "Are these real fonts?",
    answer:
      "Not in the traditional sense. Each style here is a separate Unicode character with its own code point, not a typeface applied to normal letters. Because of this, the text pastes and displays as plain characters everywhere, with nothing to install.",
  },
  {
    question: "Why do some R styles look different from others?",
    answer: "A few styles come from an older part of Unicode, so they look more distinct than the rest.",
  },
  {
    question: "Can I style the lowercase r too?",
    answer: "Yes, every style on this page includes both the uppercase R and lowercase r.",
  },
  {
    question: "Why do some styled R characters show as boxes or question marks?",
    answer:
      "Some devices and apps do not support every Unicode character. When that happens, a styled R may show as a box or a question mark instead of the correct symbol. Try a different style from the list, or update the app or browser to fix this.",
  },
  {
    question: "Is it free to use these R fonts?",
    answer:
      "Yes, every R style on this page is completely free. No signup or payment is needed. Copy and paste any style for personal projects, social media, or commercial use.",
  },
  {
    question: "Can I create my own font style for R?",
    answer:
      "Not directly on this page. Unicode styles are fixed characters, not something anyone can design freely. Graphic design tools such as Photoshop or Canva allow fully custom letterforms instead.",
  },
];

const TAGS = ["Instagram", "Discord", "Gaming", "Logos", "Captions"];

export default function RPageContent() {
  const [input, setInput] = useState("R");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState(false);

  const char = input.charAt(0) || "R";

  const boldPreview = letterRStyles[0].transform(char);
  const italicPreview = letterRStyles[1].transform(char);

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
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header & Intro */}
      <section className="mb-8">
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-2">
          R in Different Fonts
        </h1>
        <p className="font-body text-base text-on-surface-variant leading-relaxed">
          See the letter R in different fonts, with 16 verified Unicode styles and how R
          looks in other alphabets like Cyrillic, Thai, and Cherokee. Copy any style
          instantly.
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
        <h2 className="font-headline text-2xl font-semibold text-on-surface mb-2">
          R in Every Font Style
        </h2>
        <p className="font-body text-base text-on-surface-variant mb-4 leading-relaxed">
          This page shows R in different fonts across sixteen verified Unicode styles.
          Each card displays the uppercase R and lowercase r together. Each style comes
          with its own copy button beside it. One click sends the text to the clipboard,
          ready to drop straight into a caption, bio, or username field.
        </p>
        <p className="font-body text-base text-on-surface-variant mb-4 leading-relaxed">
          These sixteen styles cover every widely supported Unicode variant for R. No
          additional verified styles currently exist beyond this set.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {styleCards.map((style) => {
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
            Why Do Some R Styles Look Different?
          </h3>
          <p className="font-body text-base text-on-surface-variant mb-2 relative z-10 leading-relaxed">
            Script, Fraktur, and Double-Struck R come from an older part of Unicode,
            called the Letterlike Symbols block. Their expected spot in the newer
            Mathematical Alphanumeric block was left empty, so these three styles use
            the older characters instead.
          </p>
          <p className="font-body text-base text-on-surface-variant relative z-10 leading-relaxed">
            Only these three styles carry this exception. The other thirteen styles,
            including the popular Bold style, follow the newer Unicode block without any
            gap.{" "}
            <Link href="/bold-font-generator" className="text-primary hover:underline">
              The Bold Font Generator
            </Link>{" "}
            turns full words into that same bold weight instantly.
          </p>
        </div>
      </section>

      {/* R in Other Alphabets */}
      <section className="mb-8">
        <h2 className="font-headline text-2xl font-semibold text-on-surface mb-2">
          R in Other Alphabets
        </h2>
        <p className="font-body text-base text-on-surface-variant mb-2 leading-relaxed">
          These are real letters from other alphabets that happen to look like R. They
          are not font styles of R.
        </p>
        <p className="font-body text-base text-on-surface-variant mb-2 leading-relaxed">
          Each character below belongs to its own writing system, such as Cyrillic,
          Thai, or Cherokee. They carry real meaning in their language and are not
          simply decorative fonts made from the Latin R.
        </p>
        <p className="font-body text-base text-on-surface-variant mb-4 leading-relaxed">
          The letter R traces back to the Phoenician letter resh, which meant head.
          Ancient Greeks adapted it into rho, then Etruscan and Roman scribes reshaped
          it into the capital R used today. This same shape later influenced letters
          in Cyrillic and other alphabets.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {otherAlphabetCards.map((item) => {
            const isCopied = copiedId === `other-${item.label}`;
            return (
              <div
                key={item.label}
                className="bg-surface-container-low p-2 rounded-xl flex items-center gap-3 px-4"
              >
                <button
                  type="button"
                  aria-label={`Copy ${item.char}`}
                  onClick={() => copy(item.char, `other-${item.label}`)}
                  className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isCopied
                      ? "bg-tertiary text-on-tertiary"
                      : "bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary"
                  }`}
                >
                  <RIcon name={isCopied ? "check" : "contentCopy"} className="w-[18px] h-[18px]" />
                </button>
                <div className="flex flex-col min-w-0">
                  <span className="font-label text-xs text-on-surface-variant">
                    {item.label}
                  </span>
                  <span className="font-headline text-2xl text-primary">{item.char}</span>
                </div>
              </div>
            );
          })}
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

      {/* Use case block */}
      <section className="mb-8">
        <h2 className="font-headline text-2xl font-semibold text-on-surface mb-2">
          Where People Use Styled R?
        </h2>
        <p className="font-body text-base text-on-surface-variant leading-relaxed">
          Styled R text works well in Instagram bios, Discord names, gaming profiles,
          and logo designs. A quick comparison across styles usually reveals the best
          match for a caption or display name.
        </p>
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
              <p className="mt-2 font-body text-base text-on-surface-variant leading-relaxed">{faq.answer}</p>
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
            href="/bold-font-generator"
            className="flex items-center gap-3 text-on-primary-container bg-primary-container/20 p-4 rounded-xl group"
          >
            <RIcon name="textFields" className="w-5 h-5" />
            <span className="font-label text-sm">Similar Font Styles</span>
            <RIcon name="arrowForward" className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/all-tools"
            className="flex items-center gap-3 text-on-primary-container bg-primary-container/20 p-4 rounded-xl group"
          >
            <RIcon name="construction" className="w-5 h-5" />
            <span className="font-label text-sm">Popular Text Tools</span>
            <RIcon name="arrowForward" className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

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
    </div>
  );
}
