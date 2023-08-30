import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Link href="/hovercards" className=" bg-red-500 p-10 rounded">
        Go to hover
      </Link>
    </div>
  );
}
