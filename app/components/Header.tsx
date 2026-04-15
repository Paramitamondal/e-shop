"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  Search,
  X,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">

      {/* 🔝 TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2 text-xs bg-black text-white">
        <div className="flex items-center gap-5 text-lg">
          <FaApple />
          <FaGooglePlay />
        </div>

        <div className="flex items-center gap-4 relative">

          {/* 🌐 Language */}
          <div className="relative">
            <span
              onClick={() => setLangOpen(!langOpen)}
              className="cursor-pointer font-medium"
            >
              {lang}
            </span>

            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 shadow-lg rounded border">
                {["EN", "HI", "BN"].map((l) => (
                  <div
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 🔐 Auth */}
          <span
            className="text-red-400 cursor-pointer hover:underline"
            onClick={() => setOpenAuth(true)}
          >
            Sign In / Sign Up
          </span>
        </div>
      </div>

      {/* 🧭 NAVBAR */}
      <div className="flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-bold text-gray-900">eShop</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/sellers" className="hover:text-red-500 transition">Sellers</Link>
          <Link href="/contact" className="hover:text-red-500 transition">Contact Us</Link>
          <Link href="/faqs" className="hover:text-red-500 transition">FAQs</Link>
          <Link href="/blogs" className="hover:text-red-500 transition">Blogs</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-800">

          <Search
            className="cursor-pointer text-gray-800 hover:text-red-500 hover:scale-110 transition"
            onClick={() => setOpenSearch(!openSearch)}
          />

          <ShoppingCart
            className="cursor-pointer text-gray-800 hover:text-red-500 hover:scale-110 transition"
            onClick={() => setOpenCart(true)}
          />

          {/* ☰ Menu */}
          <Menu
            className="cursor-pointer text-gray-800 hover:text-red-500 hover:scale-110 transition"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* 🔍 Search */}
      {openSearch && (
        <div className="px-4 pb-3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      )}

      {/* 🛒 CART */}
      {openCart && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-xl p-4 z-50 text-gray-800">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">My Cart</h2>
            <X onClick={() => setOpenCart(false)} className="cursor-pointer" />
          </div>

          <p className="mt-4 text-gray-500">Your cart is empty</p>

          <div className="mt-6 flex flex-col gap-3">
            <button className="border py-2 rounded hover:bg-gray-100">
              Return to Shop
            </button>
            <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600">
              View Cart
            </button>
          </div>
        </div>
      )}

      {/* 📱 MENU DRAWER */}
      {openMenu && (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-xl p-4 z-50 text-gray-800">

          <div className="flex justify-between mb-4">
            <h2 className="text-red-500 font-bold text-xl">eShop</h2>
            <X onClick={() => setOpenMenu(false)} className="cursor-pointer" />
          </div>

          <div className="flex flex-col">
            <Link href="/" className="py-3 border-b hover:text-red-500">Home</Link>
            <Link href="/sellers" className="py-3 border-b hover:text-red-500">Sellers</Link>
            <Link href="/contact" className="py-3 border-b hover:text-red-500">Contact Us</Link>
            <Link href="/faqs" className="py-3 border-b hover:text-red-500">FAQs</Link>
            <Link href="/blogs" className="py-3 border-b hover:text-red-500">Blogs</Link>
          </div>
        </div>
      )}

      {/* 🔐 AUTH MODAL */}
      {openAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-80 text-gray-800">

            <h2 className="text-lg font-semibold mb-3">
              Welcome Back
            </h2>

            <input
              placeholder="Email or Mobile"
              className="w-full border p-2 mb-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-3"
            />

            <div className="flex justify-between">
              <button onClick={() => setOpenAuth(false)}>
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Sign In
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}