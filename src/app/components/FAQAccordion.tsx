"use client";

import { type ReactNode, useState } from "react";

interface FAQ {
  question: string;
  answer: string | ReactNode;
}

export default function FAQAccordion({
  faqs,
  defaultOpenIndex = 0,
}: {
  faqs: FAQ[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const headingId = `faq-heading-${index}`;

        return (
          <div
            key={faq.question}
            className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10"
          >
            <button
              id={headingId}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex justify-between items-center p-8 text-left hover:bg-surface-container-high transition-all"
            >
              <span className="font-headline font-bold text-lg">
                {faq.question}
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed space-y-4">
                  {typeof faq.answer === "string" ? (
                    faq.answer.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
