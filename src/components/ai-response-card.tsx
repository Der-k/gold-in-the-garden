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

type Props = {
  reply: string | null;
  filters: SearchFilters | null;
  resultCount: number;
};

export function AIResponseCard({ reply, filters, resultCount }: Props) {
  if (!reply) return null;

  const chips: string[] = [];

  if (filters?.city) chips.push(filters.city);
  if (filters?.category) chips.push(filters.category);
  if (filters?.genre) chips.push(filters.genre);
  if (typeof filters?.priceMax === "number") chips.push(`Under KSh ${filters.priceMax}`);
  if (filters?.isFree) chips.push("Free");
  if (filters?.matchedTags?.length) chips.push(...filters.matchedTags.slice(0, 2));

  return (
    <div className="rounded-[22px] border border-neutral-200 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:rounded-[28px] sm:p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
        AI Insight
      </p>

      <p className="mt-3 text-base font-semibold leading-7 text-neutral-900 sm:text-lg md:text-xl">
        {reply}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          {resultCount} result{resultCount === 1 ? "" : "s"}
        </span>

        {chips.slice(0, 4).map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}