import { NextRequest, NextResponse } from "next/server";
import { sampleEvents } from "@/lib/sample-events";
import { extractReplyAndFiltersWithGroq } from "@/lib/ai-filter-parser";

type EventItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  genre?: string;
  city: string;
  venue: string;
  startDate: string;
  time: string;
  price: number;
   image?: string;
  isFree: boolean;
  tags: string[];
};

type Filters = {
  city?: string | null;
  category?: string | null;
  genre?: string | null;
  priceMax?: number | null;
  isFree?: boolean | null;
  matchedTags?: string[];
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function tokenize(text: string) {
  return normalize(text)
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function buildMatchReason(event: EventItem, filters: Filters) {
  const reasons: string[] = [];

  if (filters.city && event.city === filters.city) reasons.push(`in ${event.city}`);
  if (filters.category && event.category === filters.category) reasons.push(`${event.category.toLowerCase()} category`);
  if (filters.genre && event.genre === filters.genre) reasons.push(`${event.genre.toLowerCase()} genre`);
  if (filters.isFree && event.isFree) reasons.push("free entry");
  if (typeof filters.priceMax === "number" && event.price <= filters.priceMax) reasons.push("within your budget");

  const matchedTags =
    filters.matchedTags?.filter((tag) =>
      event.tags.some((eventTag) => normalize(eventTag) === normalize(tag))
    ) || [];

  if (matchedTags.length > 0) {
    reasons.push(`matches ${matchedTags.slice(0, 2).join(", ")}`);
  }

  return reasons.length > 0
    ? `Recommended because it matches ${reasons.join(", ")}.`
    : "Recommended based on your search terms.";
}

function scoreAndFilterEvents(query: string, filters: Filters, events: EventItem[]) {
  const queryWords = tokenize(query);

  const scored = events
    .filter((event) => {
      if (filters.isFree === true && !event.isFree) return false;
      if (typeof filters.priceMax === "number" && event.price > filters.priceMax) return false;

      // Keep city strict if user explicitly asked for a city
      if (filters.city && event.city !== filters.city) return false;

      return true;
    })
    .map((event) => {
      let score = 0;

      const haystack =
        `${event.title} ${event.description} ${event.category} ${event.genre || ""} ${event.city} ${event.venue} ${(event.tags || []).join(" ")}`.toLowerCase();

      for (const word of queryWords) {
        if (haystack.includes(word)) score += 1;
      }

      const cityMatch = !!(filters.city && event.city === filters.city);
      const categoryMatch = !!(filters.category && event.category === filters.category);
      const genreMatch = !!(filters.genre && event.genre === filters.genre);

      if (cityMatch) score += 3;
      if (categoryMatch) score += 6;
      if (genreMatch) score += 5;
      if (filters.isFree && event.isFree) score += 2;

      const matchedTagCount =
        filters.matchedTags?.filter((tag) =>
          event.tags.some((eventTag) => normalize(eventTag) === normalize(tag))
        ).length || 0;

      score += matchedTagCount * 3;

      // Strong bonus for matching multiple important filters together
      if (cityMatch && categoryMatch) score += 8;
      if (cityMatch && genreMatch) score += 6;
      if (categoryMatch && genreMatch) score += 6;
      if (cityMatch && categoryMatch && genreMatch) score += 10;

      return {
        ...event,
        score,
        matchReason: buildMatchReason(event, filters),
      };
    })
    .sort((a, b) => b.score - a.score);

  // Make threshold stricter when user gave a category/genre
  let minimumScore = 1;

  if (filters.category && filters.city) minimumScore = 8;
  else if (filters.category || filters.genre) minimumScore = 5;
  else if (filters.city) minimumScore = 2;

  const relevantResults = scored.filter((event) => event.score >= minimumScore);

  return relevantResults.slice(0, 12);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body?.query;

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "A valid query is required." }, { status: 400 });
    }

    const ai = await extractReplyAndFiltersWithGroq(query, sampleEvents);
    const results = scoreAndFilterEvents(query, ai.filters, sampleEvents);

    return NextResponse.json({
      query,
      reply: ai.reply,
      filters: ai.filters,
      results,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to process search." }, { status: 500 });
  }
}