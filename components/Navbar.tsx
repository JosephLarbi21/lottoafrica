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

import { translations } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

/* 🌍 FLAGS MAP */
const flags: Record<string, string> = {
  English: "🇬🇧",
  Français: "🇫🇷",
  Deutsch: "🇩🇪",
  Español: "🇪🇸",
  Italiano: "🇮🇹",
  Português: "🇵🇹",
  العربية: "🇸🇦",
  中文: "🇨🇳",
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { language, setLanguage } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const t = translations[language as keyof typeof translations];

  return (
    <div className="w-full font-sans">

      {/* TOP */}
      <div className="bg-[#0a2a66] text-white px-10 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3 text-lg font-semibold">
          <div className="w-9 h-9 border-2 rounded-full flex items-center justify-center">
            ₵
          </div>
          LottoAfrica
        </div>

        {/* CENTER */}
        <div className="flex gap-8 text-sm items-center">
          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
            <Dice5 size={18} /> {t.casino}
          </div>

          <div className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
            <Ticket size={18} /> {t.scratch}
          </div>

          <Link
            href="/play"
            className="bg-yellow-400 px-5 py-1.5 rounded-full text-black flex items-center gap-2 hover:scale-105 transition"
          >
            <Dice5 size={18} /> {t.play}
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 items-center">

          {/* 🌍 LANGUAGE WITH FLAGS */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition">
              <Globe size={16} />
              <span>{flags[language]}</span>
              <span>{language}</span>
              <ChevronDown size={14} />
            </div>

            {langOpen && (
              <div
                className="absolute right-0 mt-3 w-56 bg-white text-black rounded-xl shadow-xl py-2 z-50"
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45"></div>

                {Object.keys(translations).map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition ${
                      language === lang
                        ? "font-semibold text-blue-600"
                        : ""
                    }`}
                  >
                    <span className="text-lg">{flags[lang]}</span>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SIGN IN */}
          <div className="flex items-center gap-1 hover:text-yellow-300 cursor-pointer transition">
            <User size={16} />
            {t.signIn}
          </div>

          {/* SIGN UP */}
          <Link href="/signup">
            <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition">
              {t.signUp}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}