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
      className="w-full max-w-[360px] h-[460px] rounded-xl flex flex-col items-center justify-between py-8 px-6 text-white transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
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
            className="w-16 h-16 rounded-full bg-white p-2 shadow-md"
          />
        </div>

        <h3 className="text-sm font-semibold mb-2">{title}</h3>

        <h2 className="text-2xl font-extrabold tracking-wide">
          {amount} Only UNITS
        </h2>
      </div>

      {/* COUNTDOWN */}
      <div className="text-center">
        <p className="text-sm mb-4">Draw closes in</p>

        <div className="flex justify-center items-center gap-2">
          {[
            { label: "Days", value: t.d },
            { label: "Hours", value: t.h },
            { label: "Mins", value: t.m },
            { label: "Secs", value: t.s },
          ].map((item, i) => (
            <div key={i} className="text-center flex items-center gap-2">
              <div>
                <p className="text-xs mb-1">{item.label}</p>
                <div className="bg-white text-black px-3 py-2 rounded-md font-bold">
                  {item.value}
                </div>
              </div>

              {i !== 3 && <span className="font-bold">:</span>}
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
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
      title: "Euro Jackpot",
      amount: "225.00M",
      image: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
    },
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="px-6 py-16 bg-gray-100">
      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="text-xs text-blue-600 tracking-widest mb-2">
          LOTTERY TICKET
        </p>

        <h2 className="text-3xl font-bold text-black">
          Book Official Lottery Tickets Online
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {visibleCards.map((card, i) => (
          <LotteryCard key={i} {...card} />
        ))}
      </div>

      {/* VIEW ALL (ONLY ON HOMEPAGE) */}
      {!showAll && (
        <div className="flex justify-center mt-10">
          <Link href="/lottery">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              VIEW ALL
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
