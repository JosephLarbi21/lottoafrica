"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  Dice5,
  Ticket,
  User,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

/* DROPDOWN (DESKTOP ONLY) */
function Dropdown({
  name,
  items,
  openMenu,
  setOpenMenu,
  timeoutRef,
}: {
  name: string;
  items: string[];
  openMenu: string | null;
  setOpenMenu: (val: string | null) => void;
  timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
}) {
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <div
      className="relative flex-1 text-center hidden md:block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-yellow-300">
        {name} <ChevronDown size={14} />
      </div>

      {openMenu === name && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white text-black rounded-xl shadow-xl py-2 z-50">
          {items.map((item, i) => (
            <div
              key={i}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full font-sans">

      {/* 🔵 TOP BAR */}
      <div className="bg-[#0a2a66] text-white px-4 md:px-10 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 md:gap-3 text-lg font-semibold">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 flex items-center justify-center">
            ₵
          </div>
          LottoAfrica
        </div>

        {/* DESKTOP CENTER */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
            <Dice5 size={18} />
            Casino
          </div>

          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
            <Ticket size={18} />
            Scratchcards
          </div>

          <Link
            href="/play"
            className="bg-yellow-400 text-[#0a2a66] px-5 py-1.5 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <Dice5 size={18} />
            Play
          </Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex gap-4 text-sm items-center">
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
            <Globe size={16} />
            English
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
            <User size={16} />
            Sign In
          </div>

          <Link href="/signup">
            <button className="bg-yellow-400 text-[#0a2a66] px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 🔷 BOTTOM BAR (DESKTOP ONLY) */}
      <div className="hidden md:flex bg-[#2f5fb3] text-white px-4 py-2 text-sm font-medium">

        <Dropdown
          name="Results"
          items={["Latest Prize Breakdown", "EuroDreams Results"]}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          timeoutRef={timeoutRef}
        />

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          Check Tickets
        </div>

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          App
        </div>

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          News
        </div>

        <Dropdown
          name="Information"
          items={["How to Play", "FAQs"]}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          timeoutRef={timeoutRef}
        />

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          Statistics
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a2a66] text-white px-4 py-6 space-y-4">

          <div className="flex items-center gap-2">
            <Dice5 size={18} /> Casino
          </div>

          <div className="flex items-center gap-2">
            <Ticket size={18} /> Scratchcards
          </div>

          <Link href="/play">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-center font-semibold">
              Play
            </div>
          </Link>

          <div className="border-t border-white/20 pt-4 space-y-3">

            <div>Results</div>
            <div>Check Tickets</div>
            <div>News</div>
            <div>Information</div>

          </div>

          <div className="border-t border-white/20 pt-4 space-y-3">

            <div className="flex items-center gap-2">
              <User size={16} /> Sign In
            </div>

            <Link href="/signup">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-center font-semibold">
                Sign Up
              </div>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}