"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe, ChevronDown, User } from "lucide-react";
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
      <div className="w-full flex justify-center py-4 px-4 bg-gradient-to-b from-gray-100 to-white sticky top-0 z-50">
        {/* 🔥 CURVED NAV */}
        <div className="w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-lg cursor-pointer">
            <span className="text-red-500 text-2xl">●</span>
            <span className="tracking-wide text-gray-900">
              <span className="text-gray-500 text-xs mr-1">Lotto</span>
              Africa
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <div
                key={item}
                className="relative group flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-blue-600 transition">{item}</span>

                {dropdownItems[item] && <ChevronDown size={14} />}

                {/* GOLD UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

                {/* DROPDOWN */}
                {dropdownItems[item] && activeDropdown === item && (
                  <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl py-2 w-44 border">
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

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            {/* LOGIN */}
            <button
              onClick={() => setOpenLogin(true)}
              className="flex items-center gap-2 cursor-pointer bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:bg-yellow-400 hover:text-black hover:scale-105 hover:shadow-md hover:shadow-yellow-300/40"
            >
              <User size={16} />
              Log in / Sign up
            </button>

            {/* LANGUAGE */}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:bg-yellow-400 hover:text-black hover:scale-105 hover:shadow-md hover:shadow-yellow-300/40">
              <Globe size={18} />
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md p-6 md:hidden space-y-4 text-gray-700 z-40">
            {navItems.map((item) => (
              <div key={item}>
                <div className="font-medium">{item}</div>

                {dropdownItems[item] && (
                  <div className="ml-4 mt-2 text-sm text-gray-500 space-y-1">
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
              className="w-full bg-yellow-400 py-2 rounded-full font-semibold"
            >
              Log in / Sign up
            </button>
          </div>
        )}
      </div>

      {/* 🔐 LOGIN MODAL */}
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}
