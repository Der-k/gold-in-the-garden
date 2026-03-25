"use client";

import { FormEvent, useEffect, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  loading?: boolean;
  initialValue?: string;
};

export function AISearchBar({
  onSearch,
  loading = false,
  initialValue = "",
}: Props) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-neutral-200 bg-white/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur sm:rounded-[30px]"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex min-h-14 flex-1 items-center rounded-[18px] border border-neutral-200 bg-neutral-50 px-4 transition focus-within:border-neutral-400 focus-within:bg-white sm:min-h-16 sm:rounded-[22px]">
          <div className="mr-3 shrink-0 text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
              <circle cx="11" cy="11" r="6.5" />
            </svg>
          </div>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Try: jazz night in Nairobi under 2000"
            className="h-14 w-full border-0 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 sm:h-16 sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-[18px] bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:h-16 sm:rounded-[22px] sm:px-7"
        >
          {loading ? "Searching..." : "Explore"}
        </button>
      </div>
    </form>
  );
}