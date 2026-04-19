"use client";

import { useState } from "react";
import { useCart } from "../store/cart";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, addToCart } = useCart();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal > 2000 ? 0 : 100;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(Math.round(subtotal * 0.1));
    }
  };

  const total = subtotal + gst + shipping - discount;

  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 499,
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 999,
      image: "/product2.jpg",
    },
  ];

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen text-gray-900 font-medium">

      <p className="font-semibold mb-4">
        Home &gt; Cart
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Shopping Cart
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-5 border-b"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <p className="font-bold">
                    {item.name}
                  </p>

                  <p className="font-semibold">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* qty */}
              <div className="flex items-center border rounded-lg px-3 py-1 gap-4">

                <button
                  onClick={() =>
                    updateQty(item.id, item.qty - 1)
                  }
                  className="font-bold text-lg"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {item.qty}
                </span>

                <button
                  onClick={() =>
                    updateQty(item.id, item.qty + 1)
                  }
                  className="font-bold text-lg"
                >
                  +
                </button>

              </div>

              <div className="flex items-center gap-4">
                <p className="font-bold">
                  ₹{item.price * item.qty}
                </p>

                <Trash2
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl p-6 shadow-sm h-fit border">

          <h2 className="text-xl font-bold mb-5">
            Cart Total
          </h2>

          {/* coupon */}
          <div className="flex gap-2 mb-5">
            <input
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border-2 border-gray-200 px-3 py-2 rounded-lg w-full 
              font-semibold 
              focus:border-red-400 hover:border-red-400 outline-none"
            />

            <button
              onClick={applyCoupon}
              className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-lg font-semibold"
            >
              Apply
            </button>
          </div>

          <div className="flex justify-between py-2 font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between py-2 font-semibold">
            <span>GST (18%)</span>
            <span>₹{gst}</span>
          </div>

          <div className="flex justify-between py-2 font-semibold">
            <span>Delivery Charge</span>
            <span>
              {shipping === 0 ? "Free" : `₹${shipping}`}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between py-2 font-semibold text-green-600">
              <span>Discount</span>
              <span>- ₹{discount}</span>
            </div>
          )}

          <div className="border-t my-4"></div>

          <div className="flex justify-between py-2 text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold">
            Go To Checkout
          </button>

        </div>
      </div>

      {/* ADD MORE */}
      <div className="mt-10">

        <h2 className="text-xl font-bold mb-4">
          Add More Products
        </h2>

        <div className="bg-white rounded-xl p-5 shadow-sm">

          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between py-4 border-b last:border-none"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div>
                  <p className="font-bold">{p.name}</p>
                  <p className="font-semibold">₹{p.price}</p>
                </div>
              </div>

              <button
                onClick={() => addToCart(p)}
                className="border border-red-400 text-red-500 px-5 py-1.5 rounded-full hover:bg-red-50 font-semibold"
              >
                Add
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}