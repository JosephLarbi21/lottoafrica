"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  Dice5,
  Ticket,
  User,
  Globe,
  ChevronDown,
} from "lucide-react";

/* ✅ DROPDOWN */
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
      className="relative flex-1 text-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-yellow-300 transition">
        {name} <ChevronDown size={14} />
      </div>

      {openMenu === name && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white text-black rounded-xl shadow-xl py-2 z-50">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>

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

/* MAIN NAVBAR */
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="w-full font-sans">

      {/* 🔵 TOP BAR */}
      <div className="bg-[#0a2a66] text-white px-10 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3 text-lg font-semibold cursor-pointer">
          <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center">
            ₵
          </div>
          LottoAfrica
        </div>

        {/* CENTER */}
        <div className="flex gap-8 text-sm items-center">

          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition">
            <Dice5 size={18} />
            Casino
          </div>

          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition">
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
        <div className="flex gap-4 text-sm items-center">

          {/* LANGUAGE */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300 transition">
            <Globe size={16} />
            English
            <ChevronDown size={14} />
          </div>

          {/* SIGN IN */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300 transition">
            <User size={16} />
            Sign In
          </div>

          {/* SIGN UP BUTTON 🔥 */}
          <Link href="/signup">
            <button className="bg-yellow-400 text-[#0a2a66] px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* 🔷 BOTTOM BAR */}
      <div className="bg-[#2f5fb3] text-white px-4 py-2 flex text-sm font-medium">

        <Dropdown
          name="Results"
          items={[
            "Latest Prize Breakdown",
            "UK Millionaire Maker",
            "EuroMillions HotPicks",
            "EuroDreams Results",
            "Eurojackpot Results",
            "Free Lottery Results",
          ]}
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
          items={[
            "How to Play",
            "Rules",
            "Odds",
            "FAQs",
            "Associated Games",
            "Superdraws",
            "Subscriptions",
            "Good Causes",
            "Scams",
            "Contact Us",
          ]}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          timeoutRef={timeoutRef}
        />

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          Statistics
        </div>

        <Dropdown
          name="Prizes"
          items={[
            "How to Claim",
            "Biggest Winners",
            "Prize Winner Statistics",
            "Unclaimed Prizes",
          ]}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          timeoutRef={timeoutRef}
        />

        <Dropdown
          name="Other Lotteries"
          items={[
            "Eurojackpot",
            "EuroDreams",
            "Free Lottery",
            "Irish Lotto",
            "UK Lotto",
            "Thunderball",
            "Pick 3",
            "Vikinglotto",
            "French Loto",
            "German Lotto",
            "Italian SuperEnalotto",
            "Spanish El Gordo de Navidad",
            "Spanish El Niño",
          ]}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          timeoutRef={timeoutRef}
        />

        <div className="flex-1 text-center hover:text-yellow-300 cursor-pointer">
          Number Generator
        </div>
      </div>
    </div>
  );
}