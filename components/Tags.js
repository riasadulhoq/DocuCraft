import Link from "next/link";

export default function Tags({ tag }) {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
    >
      {tag}
    </Link>
  );
}
