"use client";

import Image from "next/image";
import { useState } from "react";

const brandNames = [
"Nike","Adidas","Puma","Reebok","Under Armour","New Balance","Fila","Asics",
"Apple","Samsung","Sony","LG","Panasonic","Philips","Xiaomi","OnePlus",
"Oppo","Vivo","Realme","Huawei","Honor","Motorola","Nokia","Google",
"HP","Dell","Lenovo","Asus","Acer","MSI","Microsoft","Intel",
"AMD","Nvidia","Canon","Nikon","GoPro","Fujifilm","Kodak","BenQ",
"Boat","JBL","Noise","Skullcandy","Beats","Sennheiser","Bose","Marshall",
"Casio","Fossil","Titan","Rolex","Timex","Seiko","Citizen","Daniel Wellington",
"Zara","H&M","Uniqlo","Levis","Gap","Forever21","Mango","Gucci",
"Prada","Louis Vuitton","Chanel","Dior","Versace","Burberry","Armani","Balenciaga",
"Nike Kids","Adidas Kids","Puma Kids","Mothercare","Carter's","OshKosh","Chicco","Babyhug",
"Tata","Reliance","Godrej","Voltas","Blue Star","Haier","Whirlpool","Bosch",
"Amazon","Flipkart","eBay","Alibaba","Meesho","Myntra","Ajio","Snapdeal",
"Paytm","PhonePe","Google Pay","Amazon Pay","PayPal","Stripe","Razorpay","Square",
"Netflix","Spotify","YouTube","Disney","Hotstar","Sony Liv","Zee5","Prime Video",
"Uber","Ola","Airbnb","Booking","Expedia","MakeMyTrip","Goibibo","Agoda",
"Twitter","Facebook","Instagram","LinkedIn","Snapchat","Pinterest","Reddit","Tumblr",
"Toyota","Honda","Hyundai","Kia","BMW","Audi","Mercedes","Tesla",
"Hero","Bajaj","TVS","Royal Enfield","Yamaha","Suzuki","Kawasaki","Ducati",
"Colgate","Pepsi","CocaCola","Nestle","Amul","Britannia","Cadbury","Parle"
];

const allBrands = brandNames.map((name) => ({
  name,
  logo: "/adidas.png",
}));

export default function BrandsPage() {
  const [page, setPage] = useState(1);

  const perPage = 16;
  const totalPages = Math.ceil(allBrands.length / perPage);

  const start = (page - 1) * perPage;
  const brands = allBrands.slice(start, start + perPage);

  return (
    <div className="bg-white min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Brands
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">

          {brands.map((b, i) => (
            <div key={i} className="text-center">

              <div className="bg-white border rounded-md overflow-hidden aspect-square hover:shadow-sm transition">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {b.name}
              </p>

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-8">
          <div className="flex border rounded-lg overflow-hidden flex-wrap">

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1.5 border-r text-sm font-semibold
                ${
                  page === i + 1
                    ? "bg-red-50 text-red-500"
                    : "bg-white text-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(totalPages)}
              className="px-3 py-1.5 font-semibold"
            >
              Last
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}