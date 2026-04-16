"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Trash2 } from "lucide-react";

type Ticket = {
  main: number[];
  stars: number[];
};

export default function Hero() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [jackpot, setJackpot] = useState(0);
  const [time, setTime] = useState(0);

  const generateNumbers = (): Ticket => {
    const main = new Set<number>();
    const stars = new Set<number>();

    while (main.size < 5) {
      main.add(Math.floor(Math.random() * 50) + 1);
    }

    while (stars.size < 2) {
      stars.add(Math.floor(Math.random() * 12) + 1);
    }

    return {
      main: Array.from(main).sort((a, b) => a - b),
      stars: Array.from(stars),
    };
  };

  useEffect(() => {
    setTickets([generateNumbers()]);
  }, []);

  const quickPick = (index: number) => {
    const updated = [...tickets];
    updated[index] = generateNumbers();
    setTickets(updated);
  };

  const deleteLine = (index: number) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };

  const addLine = () => {
    setTickets([...tickets, generateNumbers()]);
  };

  // Jackpot animation
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

  // Countdown
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
    const d = Math.floor(time / (1000 * 60 * 60 * 24));
    const h = Math.floor((time / (1000 * 60 * 60)) % 24);
    const m = Math.floor((time / (1000 * 60)) % 60);
    const s = Math.floor((time / 1000) % 60);

    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <div className="px-4 md:px-6 py-6 md:py-10 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">

        {/* LEFT */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a2a66] mb-4">
            LottoAfrica
          </h1>

          <p className="text-gray-600 text-sm mb-6">
            LottoAfrica is a lottery played across Africa with massive jackpots.
          </p>

          <h3 className="text-[#0a2a66] font-semibold mb-4 text-sm md:text-base">
            Tuesday's Result - 14<sup>th</sup> April 2026
          </h3>

          {/* RESULT BALLS */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
            {[1, 2, 4, 28, 44].map((n) => (
              <div
                key={n}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#0a2a66] text-white rounded-full flex items-center justify-center font-bold"
              >
                {n}
              </div>
            ))}

            {[5, 12].map((n) => (
              <div
                key={n}
                className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold"
              >
                {n}
              </div>
            ))}
          </div>

          <p className="text-sm mb-4">
            Millionaire Maker: <strong>TWGW 38925</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#0a2a66] text-white px-5 py-2 rounded-full">
              Draw Details ▶
            </button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
              All Results ▶
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 relative text-white overflow-hidden">
          <img
            src="/banner.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0a2a66]/70"></div>

          <div className="relative z-10 p-6 md:p-10">
            <p className="text-sm mb-1">
              Friday's estimated LottoAfrica jackpot:
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <motion.h1
                className="text-3xl md:text-5xl font-extrabold text-yellow-400"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                GHS {jackpot.toLocaleString()}
              </motion.h1>

              <span className="text-xs md:text-sm font-bold">
                IT'S A <span className="text-yellow-400">10x</span>
                <br />
                ROLLOVER!
              </span>
            </div>

            <p className="text-xs mb-4">
              Choose five numbers (1-50) and two Lucky Stars (1-12)
            </p>

            {/* TICKETS */}
            {tickets.map((ticket, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-2 mb-3"
              >
                {ticket.main.map((n) => (
                  <div
                    key={n}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white text-black rounded flex items-center justify-center"
                  >
                    {n}
                  </div>
                ))}

                {ticket.stars.map((n) => (
                  <div
                    key={n}
                    className="w-9 h-9 md:w-10 md:h-10 bg-yellow-400 text-black rounded flex items-center justify-center"
                  >
                    {n}
                  </div>
                ))}

                {/* ACTION BUTTONS */}
                <div className="flex gap-2 ml-1 md:ml-2">
                  <button
                    onClick={() => quickPick(i)}
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#0a2a66] text-white hover:bg-yellow-400 hover:text-black transition"
                  >
                    <Wand2 size={14} />
                  </button>

                  <button
                    onClick={() => deleteLine(i)}
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#0a2a66] text-white hover:bg-red-500 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}

            <button
              onClick={addLine}
              className="text-sm underline mb-4 hover:text-yellow-300 transition"
            >
              + Add Line
            </button>

            <div className="text-right mb-4">
              <p className="text-xs">Time remaining:</p>
              <p className="font-bold text-sm md:text-base">
                {formatTime()}
              </p>
            </div>

            <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:scale-[1.02] transition">
              BUY TICKETS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}