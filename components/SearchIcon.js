import Image from "next/image";

export default function SearchIcon() {
  return (
    <Image
      src="/search.svg"
      alt="Search"
      className="h-5 w-5"
      width={20}
      height={20}
    />
  );
}
