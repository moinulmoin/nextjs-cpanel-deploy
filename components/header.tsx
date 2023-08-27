import Link from "next/link";

export default function Header() {
  return (
    <header className=" border ">
      <nav className="py-6 max-w-xl container text-center ">
        <Link href="/" className="text-2xl  font-bold">
          NCD
        </Link>
      </nav>
    </header>
  );
}
