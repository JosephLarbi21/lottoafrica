"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Coins } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // Show scroll button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WhatsApp action
  const handleRequestUnits = () => {
    window.open("https://wa.me/233247294683", "_blank");
  };

  return (
    <>
      {/* 💰 REQUEST BUTTON */}
      <div className="fixed right-6 bottom-32 z-50">
        <button
          onClick={handleRequestUnits}
          className="bg-blue-600 hover:bg-blue-700 text-white w-28 h-28 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 transition duration-300 hover:scale-105 animate-bounce"
        >
          <Coins size={24} />
          <span className="text-xs font-bold text-center leading-tight">
            REQUEST FOR
            <br />
            ONLY UNITS
          </span>
        </button>
      </div>

      {/* ⬆️ SCROLL TO TOP */}
      {showTop && (
        <div className="fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-md shadow-lg flex items-center justify-center transition duration-300 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </>
  );
}
