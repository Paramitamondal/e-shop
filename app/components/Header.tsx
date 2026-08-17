"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  Search,
  X,
  ChevronDown,
  GitCompare,
  Eye,
  EyeOff,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../store/cart";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  // ---- AUTH এর জন্য state ----
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  // ---- SEARCH ----
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef<HTMLDivElement>(null);

  const [lang, setLang] = useState("EN");

  const cart = useCart((state) => state.cart);

  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);

    const savedUser = localStorage.getItem("userName");
    if (savedUser) setLoggedInUser(savedUser);
  }, []);

  useEffect(() => {
    function handleClick(e: any) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpenSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLang = (l: string) => {
    setLang(l);
    localStorage.setItem("lang", l);
    setOpenLang(false);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // ---- SEARCH SUBMIT ----
  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setOpenSearch(false);
      setSearchQuery("");
    }
  };

  // ---- COMPARE ----
  const goToCompare = () => {
    router.push("/compare");
  };

  // ---- AUTH ফাংশনগুলো ----
  const resetAuthForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAuthError("");
    setShowPassword(false);
  };

  const handleAuthSubmit = async () => {
    setAuthError("");

    if (!email || !password || (authMode === "signup" && !name)) {
      setAuthError("সব ফিল্ড দিতে হবে");
      return;
    }

    setAuthLoading(true);

    try {
      const url = authMode === "signup" ? "/api/register" : "/api/login";
      const body =
        authMode === "signup"
          ? { name, email, password }
          : { email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!data.success) {
        setAuthError(data.message || "কিছু ভুল হয়েছে");
        setAuthLoading(false);
        return;
      }

      if (authMode === "signup") {
        setAuthMode("signin");
        resetAuthForm();
        setAuthError("অ্যাকাউন্ট তৈরি হয়েছে, এখন লগইন করো");
      } else {
        setLoggedInUser(data.user.name);
        localStorage.setItem("userName", data.user.name);
        resetAuthForm();
        setOpenAuth(false);
      }
    } catch (err) {
      setAuthError("সার্ভারে সমস্যা হয়েছে, আবার চেষ্টা করো");
    }

    setAuthLoading(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("userName");
  };

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

          {/* SIGN IN / USER */}
          {loggedInUser ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">
                {loggedInUser}
              </span>
              <span
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500 cursor-pointer font-medium hover:underline"
              >
                Logout
              </span>
            </div>
          ) : (
            <span
              onClick={() => {
                setAuthMode("signin");
                resetAuthForm();
                setOpenAuth(true);
              }}
              className="text-red-400 hover:text-red-500 cursor-pointer font-medium hover:underline"
            >
              Sign In / Sign Up
            </span>
          )}

        </div>
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-4 py-3">

        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            eShop
          </h1>
        </div>

        <div className="hidden md:flex gap-6 font-medium text-gray-900">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/sellers" className="hover:text-red-500">Sellers</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
          <Link href="/faqs" className="hover:text-red-500">FAQs</Link>
          <Link href="/blogs" className="hover:text-red-500">Blogs</Link>
        </div>

        <div className="flex items-center gap-5 text-gray-900">

          <Search
            className="cursor-pointer hover:text-red-500"
            onClick={() => setOpenSearch(true)}
          />

          <GitCompare
            className="cursor-pointer hover:text-red-500"
            onClick={goToCompare}
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

      {/* FULL WIDTH SEARCH */}
      {openSearch && (
        <div ref={searchRef} className="px-4 pb-4">
          <input
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
            placeholder="Search products... (Enter চাপো)"
            className="w-full border-2 border-gray-200 px-5 py-3 rounded-full
            hover:border-red-400 focus:border-red-500 outline-none
            text-gray-900 font-semibold placeholder:text-gray-500"
          />
        </div>
      )}

      {/* SIGN IN / SIGN UP MODAL */}
      {openAuth && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-xl shadow-2xl overflow-hidden">

            {/* HEADER WITH TABS */}
            <div className="relative bg-gradient-to-r from-red-500 to-red-400 px-6 pt-6 pb-0">
              <X
                onClick={() => setOpenAuth(false)}
                className="absolute right-4 top-4 cursor-pointer text-white"
              />

              <h2 className="font-bold text-2xl text-white mb-4">
                {authMode === "signin" ? "Welcome Back" : "Create Account"}
              </h2>

              <div className="flex gap-6">
                <button
                  onClick={() => {
                    setAuthMode("signin");
                    resetAuthForm();
                  }}
                  className={`pb-3 font-semibold text-sm transition ${
                    authMode === "signin"
                      ? "text-white border-b-2 border-white"
                      : "text-red-100 border-b-2 border-transparent"
                  }`}
                >
                  Sign In
                </button>

                <button
                  onClick={() => {
                    setAuthMode("signup");
                    resetAuthForm();
                  }}
                  className={`pb-3 font-semibold text-sm transition ${
                    authMode === "signup"
                      ? "text-white border-b-2 border-white"
                      : "text-red-100 border-b-2 border-transparent"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* FORM */}
            <div className="p-6">

              {authMode === "signup" && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-3 py-2.5 rounded-lg mb-3 
                  text-gray-900 font-semibold placeholder:text-gray-500 focus:border-red-400 outline-none"
                />
              )}

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-300 px-3 py-2.5 rounded-lg mb-3 
                text-gray-900 font-semibold placeholder:text-gray-500 focus:border-red-400 outline-none"
              />

              <div className="relative mb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border border-gray-300 px-3 py-2.5 rounded-lg pr-10
                  text-gray-900 font-semibold placeholder:text-gray-500 focus:border-red-400 outline-none"
                />

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              {authMode === "signin" && (
                <div className="text-right mb-3">
                  <span className="text-xs text-red-500 hover:underline cursor-pointer font-medium">
                    Forgot Password?
                  </span>
                </div>
              )}

              {authError && (
                <p className="text-red-500 text-sm mb-3">{authError}</p>
              )}

              <button
                onClick={handleAuthSubmit}
                disabled={authLoading}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg font-semibold disabled:opacity-60 transition"
              >
                {authLoading
                  ? "Please wait..."
                  : authMode === "signin"
                  ? "Sign In"
                  : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                {authMode === "signin" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <span
                      onClick={() => {
                        setAuthMode("signup");
                        resetAuthForm();
                      }}
                      className="text-red-500 font-semibold cursor-pointer hover:underline"
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setAuthMode("signin");
                        resetAuthForm();
                      }}
                      className="text-red-500 font-semibold cursor-pointer hover:underline"
                    >
                      Sign In
                    </span>
                  </>
                )}
              </p>
            </div>

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
            <Link href="/">Home</Link>
            <Link href="/sellers">Sellers</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {openCart && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-xl p-4 z-50">

          <div className="flex justify-between">
            <h2 className="font-bold text-gray-900">Shopping Cart</h2>
            <X onClick={() => setOpenCart(false)} />
          </div>

          <div className="mt-4 space-y-4 overflow-y-auto h-[60vh]">

            {cart.length === 0 && (
              <p className="text-gray-500 text-sm">
                Your cart is empty
              </p>
            )}

            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-3">

                <img
                  src={item.image}
                  className="w-14 h-14 object-contain border rounded"
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-red-500 font-bold text-sm">
                    ₹{item.price}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <div className="mt-4 border-t pt-4">

            <div className="flex justify-between font-bold text-gray-900 mb-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => router.push("/cart")}
              className="w-full bg-red-500 text-white py-2 rounded font-semibold mb-2"
            >
              View Cart
            </button>

            <button
              onClick={() => setOpenCart(false)}
              className="w-full border py-2 rounded font-semibold"
            >
              Return To Shop
            </button>

          </div>

        </div>
      )}

    </header>
  );
}