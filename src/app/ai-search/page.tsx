"use client";

import { useRef, useState } from "react";
import { AISearchBar } from "@/components/ai-search-bar";
import { AISearchResults } from "@/components/ai-search-results";
import { AIResponseCard } from "@/components/ai-response-card";


type SearchFilters = {
  city?: string | null;
  category?: string | null;
  genre?: string | null;
  dateRange?: string | null;
  priceMax?: number | null;
  vibe?: string | null;
  audience?: string | null;
  isFree?: boolean | null;
  matchedTags?: string[];
};

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
  matchReason?: string;
};

const examplePrompts = [
  "Tech events in Nairobi this weekend",
  "Free networking events",
  "Live music under 2000",
  "Family friendly outdoor events",
];

export default function AISearchPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const [results, setResults] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState<string | null>(null);
  const resultsRef = useRef<HTMLElement | null>(null);

async function handleSearch(searchText: string) {
  setQuery(searchText);
  setLoading(true);
  setError(null);

  try {
    const res = await fetch("/api/ai-event-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: searchText }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Search failed");
    }

    setReply(data.reply || null);
    setFilters(data.filters || null);
    setResults(data.results || []);

    if ((data.results || []).length > 0) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 1800);
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : "Something went wrong");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-neutral-950">
     <section className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-[#f5f3ee] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 lg:py-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  AI Event Discovery
                </p>
                <p className="text-xs text-neutral-400">Curated by intent</p>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Gold in the Garden
              </p>
              

              <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                FIND YOUR
                <br />
                <span className="text-yellow-400">NEXT</span>
                <br />
                MOMENT.
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500 md:mt-6 md:text-base">
                Describe the vibe, budget, location, or type of event you want,
                and let AI surface the strongest matches.
              </p>
            </div>

            <div className="mt-8 max-w-3xl md:mt-10">
              <AISearchBar
                onSearch={handleSearch}
                loading={loading}
                initialValue={query}
              />
            </div>

            <div className="mt-5 flex max-w-3xl flex-wrap gap-2 sm:gap-3">
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  onClick={() => handleSearch(example)}
                  className="rounded-full border border-neutral-300 bg-white px-3 py-2 text-[11px] text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50 sm:text-xs"
                >
                  {example}
                </button>
              ))}
            </div>

            {error ? (
              <div className="mt-6 max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <div className="mt-4 max-w-3xl">
              <AIResponseCard
                reply={reply}
                filters={filters}
                resultCount={results.length}
              />
            </div>
          </div>
        </div>

       <section ref={resultsRef} className="mt-10 scroll-mt-24 sm:mt-12">
  <div className="overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:rounded-[32px]">
    <div className="border-b border-neutral-200 px-4 py-5 sm:px-6 sm:py-6 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Current Search
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
            Top Matches
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
            Curated results based on your prompt, filters, and AI interpretation.
          </p>
        </div>

        <div className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
          {loading
            ? "Searching..."
            : results.length > 0
              ? `${results.length} event${results.length === 1 ? "" : "s"} found`
              : "No results yet"}
        </div>
      </div>
    </div>

    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8">
      <AISearchResults
        filters={filters}
        results={results}
        loading={loading}
      />
    </div>
  </div>
</section>
      </section>
    </main>
  );
}