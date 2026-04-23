"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  Search,
  X,
  ChevronDown,
  Eye,
  EyeOff,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../store/cart";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const [authType, setAuthType] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [lang, setLang] = useState("EN");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cart = useCart((state) => state.cart);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const changeLang = (l: string) => {
    setLang(l);
    localStorage.setItem("lang", l);

    window.location.reload();
    setOpenLang(false);
  };

  const handleAuth = async () => {
    try {
      const endpoint =
        authType === "login" ? "/api/auth/login" : "/api/auth/register";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(
          authType === "login"
            ? "Login Success"
            : "Account Created Successfully"
        );

        setOpenAuth(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2 text-xs bg-red-50 text-gray-600">
        <div className="flex items-center gap-5 text-lg">
          <FaApple className="text-gray-700" />
          <FaGooglePlay className="text-green-600" />
        </div>

        <div className="flex items-center gap-4">
          
          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-1 font-medium text-red-500"
            >
              {lang}
              <ChevronDown size={14} />
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-28 z-50">
                <div
                  onClick={() => changeLang("EN")}
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer text-gray-700"
                >
                  English
                </div>

                <div
                  onClick={() => changeLang("BN")}
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer text-gray-700"
                >
                  Bengali
                </div>

                <div
                  onClick={() => changeLang("HI")}
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer text-gray-700"
                >
                  Hindi
                </div>
              </div>
            )}
          </div>

          {/* SIGN IN */}
          <span
            onClick={() => setOpenAuth(true)}
            className="text-red-500 hover:text-red-600 hover:underline cursor-pointer font-medium"
          >
            Sign In / Sign Up
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">eShop</h1>
        </div>

        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/sellers" className="hover:text-red-500">Sellers</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
          <Link href="/faqs" className="hover:text-red-500">FAQs</Link>
          <Link href="/blogs" className="hover:text-red-500">Blogs</Link>
        </div>

        <div className="flex items-center gap-5 text-gray-600">
          <Search className="cursor-pointer hover:text-red-500" />

          <ShoppingCart className="cursor-pointer hover:text-red-500" />

          <Menu
            className="cursor-pointer hover:text-red-500 md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenMenu(false)}
          />

          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <X onClick={() => setOpenMenu(false)} />
            </div>

            <div className="flex flex-col gap-5 text-gray-700 font-medium">
              <Link href="/">Home</Link>
              <Link href="/sellers">Sellers</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
          </div>
        </div>
      )}

      {/* AUTH MODAL */}
      {openAuth && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[420px] p-8 rounded-2xl shadow-2xl relative">
            <X
              onClick={() => setOpenAuth(false)}
              className="absolute right-4 top-4 cursor-pointer text-gray-500"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {authType === "login" ? "Welcome Back" : "Create Account"}
            </h2>

            {authType === "signup" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg mb-3 font-medium text-gray-700"
              />
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg mb-3 font-medium text-gray-700"
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg font-medium text-gray-700"
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            >
              {authType === "login" ? "Sign In" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}