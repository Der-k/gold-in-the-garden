import Link from "next/link";

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
  isFree: boolean;
  tags: string[];
  image?: string;
  matchReason?: string;
};

type Props = {
  filters: SearchFilters | null;
  results: EventItem[];
  loading: boolean;
};

function formatFilterChips(filters: SearchFilters | null) {
  if (!filters) return [];

  const chips: string[] = [];

  if (filters.city) chips.push(filters.city);
  if (filters.category) chips.push(filters.category);
  if (filters.genre) chips.push(filters.genre);
  if (filters.dateRange) chips.push(filters.dateRange);
  if (typeof filters.priceMax === "number") chips.push(`Under KSh ${filters.priceMax}`);
  if (filters.vibe) chips.push(filters.vibe);
  if (filters.audience) chips.push(filters.audience);
  if (filters.isFree) chips.push("Free");
  if (filters.matchedTags?.length) chips.push(...filters.matchedTags.slice(0, 3));

  return chips;
}

export function AISearchResults({ filters, results, loading }: Props) {
  const chips = formatFilterChips(filters);

  return (
    <section>
      {chips.length > 0 ? (
        <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-600"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-[24px] border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500 sm:rounded-[30px] sm:p-10">
          Searching for the best matches...
        </div>
      ) : null}

      {!loading && results.length === 0 ? (
        <div className="rounded-[24px] border border-neutral-200 bg-white p-8 sm:rounded-[30px] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
            No Matches
          </p>
          <h3 className="mt-3 text-2xl font-bold text-neutral-950">
            No events found for this search.
          </h3>
          <p className="mt-3 text-sm text-neutral-500">
            Try something broader like “music”, “networking”, or “free events”.
          </p>
        </div>
      ) : null}

      {!loading && results.length > 0 ? (
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <article className="group relative overflow-hidden rounded-[24px] border border-neutral-200 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] sm:rounded-[34px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${event.image || "/images/events/default.jpg"})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="relative flex min-h-[300px] flex-col justify-between p-4 sm:min-h-[360px] sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-sm">
                      {event.category}
                    </span>

                    <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                      {event.isFree ? "Free" : `KSh ${event.price}`}
                    </span>
                  </div>

                  <div className="max-w-[92%] rounded-[22px] bg-neutral-950/80 p-4 text-white backdrop-blur-md sm:max-w-[85%] sm:rounded-[26px] sm:p-5">
                    <h2 className="text-2xl font-black leading-[0.95] tracking-tight sm:text-3xl">
                      {event.title}
                    </h2>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/85">
                      {event.description}
                    </p>
                  </div>

                  <div className="max-w-fit rounded-[18px] bg-white/92 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-neutral-800 backdrop-blur-md shadow-sm sm:rounded-[20px] sm:text-xs">
                    <p>{event.city}</p>
                    <p className="mt-1">{event.venue}</p>
                    <p className="mt-1">
                      {event.startDate} · {event.time}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}