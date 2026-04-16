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
    <footer className="bg-[#0b0f1a] text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT - ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
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

            <div className="flex gap-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition cursor-pointer">
                <FaLinkedinIn />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Lotteries</li>
            <li className="hover:text-yellow-400 cursor-pointer">Results</li>
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <p>Gulf House, Gulf Street, Accra, Ghana</p>
            </div>

            <div className="flex items-center gap-2">
              <MdPhone />
              <p>(+233) 247294683</p>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail />
              <p>support@lottoafrica.online</p>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT */}
      <div className="max-w-7xl mx-auto mt-16">
        <h4 className="text-white font-semibold mb-4 text-center">
          Payment Gateway MTN MoMoPay
        </h4>

        <div className="flex justify-center gap-6 flex-wrap">
          <img src="/pay1.png" alt="pay1" className="h-10" />
          <img src="/pay2.png" alt="pay2" className="h-10" />
          <img src="/pay3.png" alt="pay3" className="h-10" />
          <img src="/pay4.png" alt="pay4" className="h-10" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>© 2026 LottoAfrica. All Rights Reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-yellow-400 cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-yellow-400 cursor-pointer">
            Game Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
