"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Ticket = {
  main: number[];
  stars: number[];
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [jackpot, setJackpot] = useState(0);
  const [time, setTime] = useState(0);
  const [ticket, setTicket] = useState<Ticket>({
    main: [],
    stars: [],
  });

  /* 🎯 SLIDES */
  const slides = [
    {
      type: "jackpot",
      title: "Massive Jackpot is Live",
      subtitle: "Your chance to win big starts now",
      image: "/banner.jpg",
      cta: "Play Now",
    },
    {
      type: "quickpick",
      title: "Instant Lucky Numbers",
      subtitle: "Let the system pick winning numbers for you",
      image: "/banner.jpg",
      cta: "Generate Numbers",
    },
    {
      type: "results",
      title: "Latest Winning Results",
      subtitle: "Check if you’re the next millionaire",
      image: "/banner.jpg",
      cta: "View Results",
    },
  ];

  const current = slides[index];

  /* 🔄 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* 💰 JACKPOT ANIMATION */
  useEffect(() => {
    let start = 0;
    const end = 132000000;

    const interval = setInterval(() => {
      start += 1000000;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setJackpot(start);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  /* ⏱ COUNTDOWN */
  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 48);

    const interval = setInterval(() => {
      const diff = target.getTime() - new Date().getTime();
      setTime(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const h = Math.floor((time / (1000 * 60 * 60)) % 24);
    const m = Math.floor((time / (1000 * 60)) % 60);
    const s = Math.floor((time / 1000) % 60);
    return `${h}h ${m}m ${s}s`;
  };

  /* 🎲 QUICK PICK */
  const generateNumbers = () => {
    const main = new Set<number>();
    const stars = new Set<number>();

    while (main.size < 5) {
      main.add(Math.floor(Math.random() * 50) + 1);
    }

    while (stars.size < 2) {
      stars.add(Math.floor(Math.random() * 12) + 1);
    }

    setTicket({
      main: Array.from(main).sort((a, b) => a - b),
      stars: Array.from(stars),
    });
  };

  useEffect(() => {
    generateNumbers();
  }, [index]);

  return (
    <div className="w-full px-4 md:px-6 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto relative h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* BACKGROUND */}
            <img src={current.image} className="w-full h-full object-cover" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a66]/90 via-[#0a2a66]/70 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white max-w-xl">

              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                {current.title}
              </h1>

              <p className="text-sm md:text-lg text-gray-200 mb-6">
                {current.subtitle}
              </p>

              {/* 🔥 DYNAMIC CONTENT */}
              {current.type === "jackpot" && (
                <>
                  <div className="text-yellow-400 text-4xl font-bold mb-2">
                    GHS {jackpot.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                      10X Rollover
                    </span>

                    <span className="text-sm">
                      Ends in: {formatTime()}
                    </span>
                  </div>
                </>
              )}

              {current.type === "quickpick" && (
                <div className="flex gap-2 mb-4 flex-wrap">
                  {ticket.main.map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 bg-white text-black rounded flex items-center justify-center font-bold"
                    >
                      {n}
                    </div>
                  ))}

                  {ticket.stars.map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 bg-yellow-400 text-black rounded flex items-center justify-center font-bold"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              )}

              {current.type === "results" && (
                <div className="flex gap-2 mb-4">
                  {[1, 2, 4, 28, 44].map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold"
                    >
                      {n}
                    </div>
                  ))}

                  {[5, 12].map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold w-fit hover:bg-yellow-500 transition">
                {current.cta}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}