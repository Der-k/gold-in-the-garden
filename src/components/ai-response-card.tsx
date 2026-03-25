type SearchFilters = {
  city?: string | null;
  category?: string | null;
  genre?: string | null;
  dateRange?: string | null;
  priceMax?: number | null;
  vibe?: string | null;
  audience?: string | null;
  isFree?: boolean | null;
};

type Props = {
  reply: string | null;
  filters: any;
  resultCount: number;
};

export function AIResponseCard({ reply, filters, resultCount }: Props) {
  if (!reply) return null;

  return (
    <div className="mt-4 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      
      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
        AI Insight
      </p>

      {/* Main response */}
      <p className="mt-3 text-lg font-semibold leading-7 text-neutral-900 md:text-xl">
        {reply}
      </p>

      {/* Meta row */}
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
        
        <span className="rounded-full bg-neutral-100 px-3 py-1">
          {resultCount} result{resultCount === 1 ? "" : "s"}
        </span>

        {filters?.city && (
          <span className="rounded-full bg-neutral-100 px-3 py-1">
            {filters.city}
          </span>
        )}

        {filters?.category && (
          <span className="rounded-full bg-neutral-100 px-3 py-1">
            {filters.category}
          </span>
        )}
      </div>
    </div>
  );
}