import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Product) => void; // ✅ FIXED
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
};

export const useCart = create<CartStore>((set) => ({
  cart: [],

  // ✅ ADD TO CART
  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((i) => i.id === item.id);

      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, qty: i.qty + 1 }
              : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    }),

  // ✅ REMOVE
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),

  // ✅ UPDATE QTY
  updateQty: (id, qty) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id
          ? { ...i, qty: qty <= 1 ? 1 : qty }
          : i
      ),
    })),
}));