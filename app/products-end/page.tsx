"use client";

export default function Products() {

  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 79999,
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 59999,
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    },
    {
      id: 3,
      name: "Laptop",
      price: 49999,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      id: 4,
      name: "Headphones",
      price: 1999,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 2999,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 3999,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-6">

      <h1 className="text-2xl font-bold mb-6 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-3"
            />

            <h2 className="font-semibold">{item.name}</h2>

            <p className="text-red-500 font-bold mb-2">
              ₹{item.price}
            </p>

            <button className="w-full bg-red-500 text-white py-1 rounded hover:bg-red-600">
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}