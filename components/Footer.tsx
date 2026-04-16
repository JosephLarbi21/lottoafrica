"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-gray-300 px-4 md:px-6 pt-14 md:pt-16 pb-8">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="text-white font-semibold text-lg">
              LottoAfrica
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            LottoAfrica transforms lottery into a strategic and exciting
            experience. Our mission is to build a global lottery ecosystem
            driven by innovation and opportunity.
          </p>

          {/* SOCIAL */}
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-3">
              Join Our Community
            </h4>

            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer hover:scale-110 shadow hover:shadow-yellow-400/30"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {["Home", "Blog", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer transition duration-200 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>

          <ul className="space-y-3 text-sm">
            {["Lotteries", "Results", "FAQs"].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer transition duration-200 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-sm text-gray-400">

            <div className="flex items-start gap-2">
              <MdLocationOn className="mt-1 text-yellow-400" />
              <p>Gulf House, Gulf Street, Accra, Ghana</p>
            </div>

            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400" />
              <p>(+233) 247294683</p>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-yellow-400" />
              <p>support@lottoafrica.online</p>
            </div>

          </div>
        </div>
      </div>

      {/* PAYMENT */}
      <div className="max-w-7xl mx-auto mt-14 md:mt-16">
        <h4 className="text-white font-semibold mb-4 text-center">
          Payment Gateway MTN MoMoPay
        </h4>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-80">
          <img src="/pay1.png" alt="pay1" className="h-8 md:h-10" />
          <img src="/pay2.png" alt="pay2" className="h-8 md:h-10" />
          <img src="/pay3.png" alt="pay3" className="h-8 md:h-10" />
          <img src="/pay4.png" alt="pay4" className="h-8 md:h-10" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">

        <p className="text-center md:text-left">
          © 2026 LottoAfrica. All Rights Reserved.
        </p>

        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <span className="hover:text-yellow-400 cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-yellow-400 cursor-pointer transition">
            Terms of Service
          </span>
          <span className="hover:text-yellow-400 cursor-pointer transition">
            Game Policy
          </span>
        </div>

      </div>
    </footer>
  );
}