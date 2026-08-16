"use client";

import ShowcaseGrid from "./ShowcaseGrid";
import type { ShowcaseCard } from "./ShowcaseGrid";

export default function ShowcaseGridLazy({ cards }: { cards: ShowcaseCard[] }) {
  return <ShowcaseGrid cards={cards} />;
}
