"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, X, ChevronDown } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../store/cart";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const [lang, setLang] = useState("EN");

  const cart = useCart((state) => state.cart);

  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const changeLang = (l: string) => {
    setLang(l);
    localStorage.setItem("lang", l);
    setOpenLang(false);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2 text-xs bg-red-50 text-gray-800">
        <div className="flex items-center gap-5 text-lg">
          <FaApple className="text-gray-900" />
          <FaGooglePlay className="text-green-600" />
        </div>

        <div className="flex items-center gap-4">

          {/* LANGUAGE */}
          <div className="relative">
            <div
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-1 cursor-pointer font-medium hover:text-red-500"
            >
              {lang}
              <ChevronDown size={14} />
            </div>

            {openLang && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-20">
                <div
                  onClick={() => changeLang("EN")}
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer font-semibold text-gray-900"
                >
                  EN
                </div>
                <div
                  onClick={() => changeLang("BN")}
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer font-semibold text-gray-900"
                >
                  BN
                </div>
              </div>
            )}
          </div>

          <span
            onClick={() => setOpenAuth(true)}
            className="text-red-400 hover:text-red-500 transition cursor-pointer font-medium"
          >
            Sign In / Sign Up
          </span>

        </div>
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            eShop
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-gray-900">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/sellers" className="hover:text-red-500">Sellers</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
          <Link href="/faqs" className="hover:text-red-500">FAQs</Link>
          <Link href="/blogs" className="hover:text-red-500">Blogs</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-900">

          <Search
            className="cursor-pointer hover:text-red-500"
            onClick={() => setOpenSearch(!openSearch)}
          />

          <div className="relative">
            <ShoppingCart
              className="cursor-pointer hover:text-red-500"
              onClick={() => setOpenCart(true)}
            />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <Menu
            className="cursor-pointer hover:text-red-500 md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* SEARCH */}
      {openSearch && (
        <div className="px-4 pb-3">
          <input
            placeholder="Search products..."
            className="w-full border-2 border-gray-200 px-5 py-3 rounded-full
            hover:border-red-400 focus:border-red-500 outline-none
            text-gray-900 font-semibold placeholder:text-gray-500"
          />
        </div>
      )}

      {/* SIGN IN MODAL */}
      {openAuth && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow-lg">

            <div className="flex justify-between mb-4">
              <h2 className="font-bold text-xl text-gray-900">
                Sign In
              </h2>

              <X
                onClick={() => setOpenAuth(false)}
                className="cursor-pointer text-gray-700"
              />
            </div>

            <input
              placeholder="Email"
              className="w-full border border-gray-300 px-3 py-2 rounded mb-3 
              text-gray-900 font-semibold placeholder:text-gray-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-3 py-2 rounded mb-4 
              text-gray-900 font-semibold placeholder:text-gray-500"
            />

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold">
              Sign In
            </button>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-xl p-4 z-50 md:hidden">

          <div className="flex justify-between mb-4">
            <h2 className="text-red-500 font-bold text-xl">
              eShop
            </h2>

            <X
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-4 font-semibold text-gray-900">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/sellers" className="hover:text-red-500">Sellers</Link>
            <Link href="/contact" className="hover:text-red-500">Contact</Link>
            <Link href="/faqs" className="hover:text-red-500">FAQs</Link>
            <Link href="/blogs" className="hover:text-red-500">Blogs</Link>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {openCart && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-xl p-4 z-50">
          <div className="flex justify-between">
            <h2 className="font-bold text-gray-900">My Cart</h2>
            <X onClick={() => setOpenCart(false)} />
          </div>

          <div className="mt-4 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border p-3 rounded">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="font-semibold text-gray-900">₹{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() => router.push("/cart")}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded font-semibold"
          >
            View Cart
          </button>
        </div>
      )}

    </header>
  );
} 