"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import SearchIcon from "./SearchIcon";
import SearchResults from "./SearchResults";

export default function Search({ docs }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("Search term:", searchTerm);
  const [searchResults, setSearchResults] = useState([]);
  // console.log("Search results:", searchResults);
  const [debouncedSearchResults] = useDebounce(searchResults, 1000);
  console.log("Debounced Search results:", debouncedSearchResults);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matched = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(matched);
  };

  const clearSearchTerm = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setSearchTerm("");
  };

  return (
    <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
      >
        <SearchIcon />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
          placeholder="Search..."
          className="flex-1 focus:border-none focus:outline-none"
        />
        <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      {searchTerm && searchTerm.trim().length > 0 && (
        <SearchResults
          searchTerm={searchTerm}
          results={debouncedSearchResults}
          clearSearchTerm={clearSearchTerm}
        />
      )}
    </div>
  );
}
