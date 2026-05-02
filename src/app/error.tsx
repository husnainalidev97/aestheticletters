"use client";

import Link from "next/link";

export default function Error({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background"
    >
      <span className="material-symbols-outlined text-6xl text-error mb-6">
        error
      </span>
      <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-4">
        Something went wrong
      </h1>
      <p className="text-on-surface-variant text-lg max-w-md mb-8 leading-relaxed">
        An unexpected error occurred. Please try again or head back to the
        homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => unstable_retry()}
          className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold tracking-wide hover:opacity-90 transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="material-symbols-outlined text-lg">refresh</span>
          Try again
        </button>
        <Link
          href="/"
          className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl font-label font-bold tracking-wide hover:bg-surface-container-highest transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="material-symbols-outlined text-lg">home</span>
          Back to home
        </Link>
      </div>
    </main>
  );
}
