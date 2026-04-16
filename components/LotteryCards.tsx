"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  amount: string;
  image: string;
};

const LotteryCard = ({ title, amount, image }: CardProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 48);

    const interval = setInterval(() => {
      const diff = target.getTime() - new Date().getTime();
      setTime(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = () => {
    const d = Math.floor(time / (1000 * 60 * 60 * 24));
    const h = Math.floor((time / (1000 * 60 * 60)) % 24);
    const m = Math.floor((time / (1000 * 60)) % 60);
    const s = Math.floor((time / 1000) % 60);

    return {
      d: String(d).padStart(2, "0"),
      h: String(h).padStart(2, "0"),
      m: String(m).padStart(2, "0"),
      s: String(s).padStart(2, "0"),
    };
  };

  const t = format();

  return (
    <div
      className="w-full sm:max-w-[320px] md:max-w-[340px] h-auto md:h-[460px] rounded-2xl flex flex-col items-center justify-between py-6 md:py-8 px-5 md:px-6 text-white transition duration-300 hover:scale-[1.04] hover:shadow-2xl backdrop-blur-md"
      style={{
        background:
          "radial-gradient(circle at center, #4c84e0 0%, #2f6fd6 40%, #1e5ac8 100%)",
      }}
    >
      {/* TOP */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-2 shadow-lg"
          />
        </div>

        <h3 className="text-sm font-semibold mb-2">{title}</h3>

        <h2 className="text-xl md:text-2xl font-extrabold tracking-wide">
          {amount} Only UNITS
        </h2>
      </div>

      {/* COUNTDOWN */}
      <div className="text-center w-full">
        <p className="text-xs md:text-sm mb-3 md:mb-4">
          Draw closes in
        </p>

        <div className="flex justify-center flex-wrap gap-2 md:gap-3">
          {[
            { label: "Days", value: t.d },
            { label: "Hours", value: t.h },
            { label: "Mins", value: t.m },
            { label: "Secs", value: t.s },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] md:text-xs mb-1">
                {item.label}
              </p>
              <div className="bg-white text-black px-2 md:px-3 py-1.5 md:py-2 rounded-md font-bold text-sm md:text-base shadow">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition duration-300 hover:scale-105 shadow-md">
        PURCHASE NOW
      </button>
    </div>
  );
};

export default function LotteryCards({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const cards = [
    {
      title: "Golden Star",
      amount: "25.00K",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Supper 06",
      amount: "20.00M",
      image: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
    },
    {
      title: "Sika Pa",
      amount: "3.50M",
      image: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    },
    {
      title: "African Golden Ball",
      amount: "1.50M",
      image: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
    },
    {
      title: "Mega Jackpot",
      amount: "225.00M",
      image: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
    },
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="px-4 md:px-6 py-12 md:py-16 bg-gray-100">
      {/* HEADER */}
      <div className="text-center mb-10 md:mb-12">
        <p className="text-xs text-blue-600 tracking-widest mb-2">
          LOTTERY TICKET
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Book Official Lottery Tickets Online
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
        {visibleCards.map((card, i) => (
          <LotteryCard key={i} {...card} />
        ))}
      </div>

      {/* VIEW ALL */}
      {!showAll && (
        <div className="flex justify-center mt-10">
          <Link href="/lottery">
            <button className="bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-md">
              VIEW ALL
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}