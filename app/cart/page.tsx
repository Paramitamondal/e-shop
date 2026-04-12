"use client";

import { useCart } from "../store/cart";

export default function CartPage() {
  const items = useCart((state) => state.cart || []);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const clearCart = useCart((state) => state.clearCart);

  const total = items.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-6">🛒 My Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-3 rounded"
              >
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-bold">
              Total: ₹{total}
            </h2>

            <button
              onClick={clearCart}
              className="mt-3 bg-black text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}