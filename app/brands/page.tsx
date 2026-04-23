import Link from "next/link";

export default function BrandsPage() {
  const brands = [
    { name: "Nike", img: "/nike.png" },
    { name: "Adidas", img: "/adidas.png" },
    { name: "Puma", img: "/puma.png" },
    { name: "Apple", img: "/apple.png" },
    { name: "Samsung", img: "/samsung.png" },
    { name: "Sony", img: "/sony.png" },
    { name: "HP", img: "/hp.png" },
    { name: "Dell", img: "/dell.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          All Brands
        </h1>

        <Link
          href="/"
          className="text-red-500 font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:border-red-400 transition"
          >

            {/* LOGO */}
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* NAME */}
            <p className="text-sm font-medium text-gray-700 text-center">
              {brand.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}