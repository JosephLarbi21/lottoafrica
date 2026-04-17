"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  User,
  Phone,
  Mail,
} from "lucide-react";
import LoginModal from "@/components/LoginModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    "Lotteries",
    "Casino",
    "Scratchcards",
    "Raffles",
    "Promotions",
    "Results",
    "Magazine",
    "Support",
  ];

  const dropdownItems: Record<string, string[]> = {
    Magazine: ["News", "Strategies", "Winners"],
    Support: ["Help Center", "FAQs", "Contact"],
  };

  return (
    <>
      {/* 🟢 TOP INFO BAR */}
      <div className="w-full bg-blue-900 text-white text-[10px] sm:text-xs md:text-sm px-3 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* LEFT */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-center md:text-left">
          <span className="font-semibold">Need help?</span>

          <div className="flex items-center gap-1">
            <Phone size={12} />
            <span>0266087946</span>
          </div>

          <span className="hidden sm:inline">|</span>

          <span>0266087966</span>

          <span className="hidden sm:inline">|</span>

          <div className="flex items-center gap-1">
            <Mail size={12} />
            <span className="truncate">info@lottoafrica.com</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 font-bold text-[9px]">
            18+
          </div>
          <span className="text-[10px] md:text-sm">Play responsibly</span>
        </div>
      </div>

      {/* 🔵 MAIN NAV */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-gray-100 to-white px-3 md:px-6 py-3">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-md px-4 md:px-6 py-2 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-sm md:text-lg cursor-pointer">
            <span className="text-red-500 text-xl md:text-2xl">●</span>
            <span className="text-gray-900">
              <span className="text-gray-500 text-[10px] md:text-xs mr-1">
                Lotto
              </span>
              Africa
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <div
                key={item}
                className="relative group flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-blue-600 transition">
                  {item}
                </span>

                {dropdownItems[item] && <ChevronDown size={14} />}

                {/* GOLD UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

                {/* DROPDOWN */}
                {dropdownItems[item] && activeDropdown === item && (
                  <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl py-2 w-44 border z-50">
                    {dropdownItems[item].map((sub) => (
                      <div
                        key={sub}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* LOGIN */}
            <button
              onClick={() => setOpenLogin(true)}
              className="flex items-center gap-1 md:gap-2 bg-gray-100 text-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition hover:bg-yellow-400 hover:text-black"
            >
              <User size={14} />
              <span className="hidden sm:inline">Login</span>
            </button>

            {/* LANGUAGE */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-yellow-400 cursor-pointer transition">
              <Globe size={16} />
            </div>

            {/* MOBILE MENU */}
            <button
              className="md:hidden ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileOpen && (
          <div className="mt-3 w-full bg-white rounded-2xl shadow-lg p-5 space-y-4 md:hidden">

            {navItems.map((item) => (
              <div key={item}>
                <div className="font-medium text-gray-800">{item}</div>

                {dropdownItems[item] && (
                  <div className="ml-3 mt-2 text-sm text-gray-500 space-y-1">
                    {dropdownItems[item].map((sub) => (
                      <div key={sub}>{sub}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                setOpenLogin(true);
                setMobileOpen(false);
              }}
              className="w-full bg-yellow-400 py-2.5 rounded-full font-semibold"
            >
              Log in / Sign up
            </button>
          </div>
        )}
      </div>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}