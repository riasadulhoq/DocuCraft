import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="h-6 w-auto"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
}
