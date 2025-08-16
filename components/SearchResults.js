import Link from "next/link";

export default function SearchResults({
  searchTerm,
  results,
  closeSearchResults,
}) {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="!text-lg">
        Showing results for {""}
        <span className="mx-2 font-semibold">{searchTerm}:</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((result) => (
          <li key={result.id}>
            <Link
              className="transition-all hover:text-emerald-600"
              href={`/docs/${result.id}`}
              onClick={(e) => closeSearchResults(e)}
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
