import Link from "next/link";

export default function Blogs() {
  return (
    <div className="p-5 text-black-900">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>

      <Link href="/blogs/1">
        <div className="border p-4 mb-3 rounded cursor-pointer">
          Food Junk to Food Jewels
        </div>
      </Link>

      <Link href="/blogs/2">
        <div className="border p-4 rounded cursor-pointer">
          After Match Football Care
        </div>
      </Link>
    </div>
  );
}