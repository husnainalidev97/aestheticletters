"use client";

import { useState, type ReactNode } from "react";
import FontResultCard from "./FontResultCard";
import CopyButton from "./CopyButton";
import { getLetterStyles } from "../lib/alphabetFontStyles";

interface AlphabetLetterGeneratorProps {
  letter: string;
  defaultText?: string;
  hideInputHeader?: boolean;
  hideStyleGrid?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
}

interface AlphabetLetterStyleGridProps {
  letter: string;
  text?: string;
  defaultText?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

export function AlphabetLetterStyleGrid({
  letter,
  text: controlledText,
  defaultText,
  children,
  className = "",
  id,
}: AlphabetLetterStyleGridProps) {
  const styles = getLetterStyles(letter);
  const upperLetter = letter.toUpperCase();
  const lowerLetter = upperLetter.toLowerCase();

  const text = controlledText ?? defaultText ?? upperLetter;
  const isSingleLetter =
    text.length === 1 && text.toLowerCase() === lowerLetter;

  const previewForStyle = (transform: (t: string) => string): string => {
    if (isSingleLetter) {
      return `${transform(upperLetter)} ${transform(lowerLetter)}`;
    }
    return transform(text);
  };

  return (
    <div id={id} className={`scroll-mt-[9rem] ${className}`}>
      <h3 className="font-headline text-2xl md:text-4xl font-bold mb-6 text-center">
        {upperLetter} in Every Font Style
      </h3>
      {children}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {styles.map((style) => (
          <FontResultCard
            key={style.name}
            label={style.name}
            text={previewForStyle(style.transform)}
            fontSize={22}
          />
        ))}
      </div>
    </div>
  );
}

export default function AlphabetLetterGenerator({
  letter,
  defaultText,
  hideInputHeader,
  hideStyleGrid,
  value,
  onChange,
  children,
}: AlphabetLetterGeneratorProps) {
  const upperLetter = letter.toUpperCase();
  const [internalText, setInternalText] = useState(defaultText ?? upperLetter);
  const text = value !== undefined ? value : internalText;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalText(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6">
      {/* Generator input */}
      <div className="text-center mb-6 md:mb-8">
        {!hideInputHeader && (
          <>
            <h2 className="font-headline text-xl md:text-3xl font-bold text-on-background mb-2">
              Type a letter or word
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-xl mx-auto mb-5">
              The cards below update live. Keep it to one letter to see both the uppercase and lowercase forms side by side.
            </p>
          </>
        )}

        <div className="relative w-full max-w-3xl mx-auto">
          <textarea
            className="w-full min-h-[56px] md:min-h-[120px] pl-4 md:pl-6 pr-16 md:pr-20 py-4 md:py-8 text-base md:text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm outline-none placeholder:text-on-surface-variant/50"
            placeholder="Type or paste your text here..."
            aria-label={`Enter text to transform into ${upperLetter} font styles`}
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2">
            <CopyButton text={text} />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-on-surface-variant font-body tabular-nums">
          <span className="font-semibold text-sm">Tt</span>
          Character Count: <span className="font-semibold">{text.length}</span>
        </div>
      </div>

      {/* Style grid */}
      {!hideStyleGrid && (
        <AlphabetLetterStyleGrid
          letter={letter}
          text={text}
          className="max-w-[1440px] mx-auto"
        >
          {children}
        </AlphabetLetterStyleGrid>
      )}
    </section>
  );
}
