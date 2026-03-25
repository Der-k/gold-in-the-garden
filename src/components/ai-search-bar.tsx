"use client";

import { FormEvent, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  loading?: boolean;
  initialValue?: string;
};

export function AISearchBar({ onSearch, loading = false, initialValue = "" }: Props) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Describe the event you want to find..."
          className="h-14 flex-1 rounded-2xl border border-neutral-200 px-4 text-base outline-none focus:border-neutral-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-2xl bg-black px-6 text-white disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}