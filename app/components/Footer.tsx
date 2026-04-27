"use client";
import Link from "next/link";

export default function Footer() {
  return (
     <div>

      {/* 🔥 CURVE (PASTE HERE - footer er upore) */}
      

    
     <footer className="bg-[#0F172A] text-white px-6 py-10">

      <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-4 gap-8">

        {/* LOGO + INFO */}
        <div>
         {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-bold text-black-900">
            eShop
          </h1>
        </div>
          <p className="mt-3 text-sm text-gray-400">
            Time Square Empire, WRTeam, Mirzapar Highway, Bhuj, Kutch, Gujarat - 370001
          </p>
           <p className="mt-3 text-sm text-gray-400">
           Copyright @ 2026 eShop - ecommerce. All rights reserved,
          </p>
<div className="flex gap-5 mt-5 text-gray-300 text-lg">

  <a href="https://twitter.com" target="_blank" className="hover:text-white">
    <i className="fab fa-twitter"></i>
  </a>

  <a href="https://facebook.com" target="_blank" className="hover:text-white">
    <i className="fab fa-facebook-f"></i>
  </a>

  <a href="https://instagram.com" target="_blank" className="hover:text-white">
    <i className="fab fa-instagram"></i>
  </a>

  <a href="https://youtube.com" target="_blank" className="hover:text-white">
    <i className="fab fa-youtube"></i>
  </a>

</div>
          


        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3">Call Us</h2>
          <a href="tel:1234567890" className="block">1234567890</a>

          <h2 className="font-semibold mt-5 mb-3">Mail Us</h2>
          <a href="mailto:eshop@gmail.com">eshop@gmail.com</a>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h2 className="font-semibold mb-3">Useful Links</h2>

          <ul className="space-y-2">
            <li><Link href="/seller-register">Become a Seller</Link></li>
            <li><Link href="/affiliate-register">Become a Affiliate User</Link></li>
            <li><Link href="/return-policy">Return Policy</Link></li>
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/products-end">Products</Link></li>
            <li><Link href="/terms-&conditions">Terms & Condition</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="font-semibold mb-3">About Us</h2>
          <p className="text-sm text-gray-400">
            eShop is a multipurpose Ecommerce Platform best suitable for all kinds of sectors like Electronics,
            Fashion, Groceries and vegetables, gift articles and more ..
          </p>
        </div>
      </div>

      <p className="text-center text-sm pb-5">
        © 2026 eShop - ecommerce. All rights reserved.
      </p>
    </footer>
    </div>
  );
}