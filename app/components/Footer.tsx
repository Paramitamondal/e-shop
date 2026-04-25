"use client";

import { ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20">

      {/* CURVE */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 200" className="w-full h-24">
          <path
            d="M0,120 C480,200 960,0 1440,80 L1440,200 L0,200 Z"
            fill="#3f4b5f"
          />
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#3f4b5f] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-red-300 mb-4">
              eShop
            </h2>

            <p className="text-sm text-gray-300 leading-6">
              Time Square Empire, WRTeam, Mirzapar Highway,
              Bhuj, Kutch, Gujarat - 370001
            </p>

            

            <div className="flex gap-4 mt-4 text-gray-300">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold mb-4">Call Us</h3>
            <p className="text-gray-300">1234567890</p>

            <h3 className="font-bold mt-4">Mail Us</h3>
            <p className="text-gray-300">eshop@gmail.com</p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-bold mb-4">Useful Links</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Become a Seller</p>
              <p>Return Policy</p>
              <p>Shipping Policy</p>
              <p>Products</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              eShop is a multipurpose Ecommerce Platform best suitable
              for Electronics, Fashion, Groceries and more.
            </p>
          </div>

        </div>
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#3f4b5f] p-3 rounded-full text-white shadow-lg"
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  );
}