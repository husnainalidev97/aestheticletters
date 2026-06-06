"use client";

import { useState } from "react";

interface ComparisonRow {
  label: string;
  cute: string;
  pretty: string;
  aesthetic: string;
}

interface ComparisonSection {
  title: string;
  rows: ComparisonRow[];
}

interface ComparisonAccordionProps {
  sections: ComparisonSection[];
  headers: string[];
  subHeaders: string[];
}

const COLORS = ["#e91e9c", "#7c4dff", "#00897b"] as const;
const LABELS = ["Cute Fonts", "Pretty Fonts", "Aesthetic Fonts"] as const;

export default function ComparisonAccordion({ sections }: ComparisonAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        const panelId = `cmp-panel-${index}`;
        const headingId = `cmp-heading-${index}`;

        return (
          <div
            key={section.title}
            className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20"
          >
            <button
              id={headingId}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-surface-container-low/50 transition-all"
            >
              <span className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant">
                {section.title}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-on-surface-variant transition-transform duration-300 flex-shrink-0"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-6">
                  {section.rows.map((row) => {
                    const isSpanned = !row.pretty && !row.aesthetic;
                    return (
                      <div key={row.label}>
                        <h4 className="font-headline font-bold text-sm text-on-background mb-3">
                          {row.label}
                        </h4>
                        {isSpanned ? (
                          <p className="text-sm text-on-surface-variant leading-relaxed">
                            {row.cute}
                          </p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {([
                              { text: row.cute, color: COLORS[0], label: LABELS[0] },
                              { text: row.pretty, color: COLORS[1], label: LABELS[1] },
                              { text: row.aesthetic, color: COLORS[2], label: LABELS[2] },
                            ] as const).map((item) => (
                              <div
                                key={item.label}
                                className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/10"
                              >
                                <span
                                  className="text-xs font-bold uppercase tracking-wide block mb-1.5"
                                  style={{ color: item.color }}
                                >
                                  {item.label}
                                </span>
                                <p className="text-sm text-on-surface-variant leading-relaxed">
                                  {item.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
