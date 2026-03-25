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
  image?: string;
  isFree: boolean;
  tags: string[];
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
        <div className="mb-8 flex flex-wrap gap-2">
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
        <div className="rounded-[30px] border border-neutral-200 bg-white p-10 text-center text-sm text-neutral-500">
          Searching for the best matches...
        </div>
      ) : null}

      {!loading && results.length === 0 ? (
        <div className="rounded-[30px] border border-neutral-200 bg-white p-10">
          <div className="mb-4 h-1 w-12 rounded-full bg-yellow-400" />
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
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
         {results.map((event) => (
  <Link key={event.id} href={`/events/${event.id}`}>
    <article
      className="group relative overflow-hidden rounded-[34px]"
    >
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
    style={{
      backgroundImage: `url(${event.image || "/images/events/default.jpg"})`,
    }}
  />

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/25" />

  {/* Content */}
  <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6">
    {/* Top badges */}
    <div className="flex items-center justify-between gap-3">
      <span className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-sm">
        {event.category}
      </span>

      <span className="rounded-full bg-black/55 px-3 py-1 text-xs text-white backdrop-blur-sm">
        {event.isFree ? "Free" : `KSh ${event.price}`}
      </span>
    </div>

    {/* Main text block */}
    <div className="max-w-[85%] rounded-[26px] bg-neutral-950/72 p-5 text-white backdrop-blur-md">
  <h2 className="text-3xl font-black leading-[0.95] tracking-tight">
    {event.title}
  </h2>

  <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/85">
    {event.description}
  </p>
</div>

    {/* Bottom info block */}
    <div className="max-w-fit rounded-[20px] bg-white/88 px-4 py-3 text-xs uppercase tracking-[0.16em] text-neutral-800 backdrop-blur-md shadow-sm">
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