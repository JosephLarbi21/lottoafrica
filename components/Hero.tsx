"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState(0);

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
    const h = Math.floor((time / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");

    return { h, m, s };
  };

  const { h, m, s } = formatTime();

  return (
    <section className="relative w-full h-[90vh] overflow-hidden rounded-3xl">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/lotto-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">

        {/* 🔥 TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-[0.08em] leading-tight mb-10">
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(255,215,0,0.35)]">
            CHASE THE MILLIONS.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-xs md:text-sm text-gray-300 tracking-[0.3em] mb-4">
          NEXT DRAW IN:
        </p>

        {/* ⏱ COUNTDOWN */}
        <div className="flex gap-10 text-3xl md:text-5xl font-semibold mb-10">
          <div className="flex flex-col items-center">
            <span>{h}</span>
            <span className="text-[10px] text-gray-400 mt-2 tracking-widest">HRS</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{m}</span>
            <span className="text-[10px] text-gray-400 mt-2 tracking-widest">MINS</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{s}</span>
            <span className="text-[10px] text-gray-400 mt-2 tracking-widest">SECS</span>
          </div>
        </div>

        {/* 🟡 LOGO TEXT */}
        <div className="mb-10 text-yellow-400 font-bold text-lg tracking-[0.25em]">
          MEGA MILLIONS
        </div>

        {/* 🚀 CTA BUTTON */}
        <button className="px-10 py-4 cursor-pointer rounded-full font-semibold text-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:scale-105 transition transform shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          ENTER NOW
        </button>

      </div>
    </section>
  );
}