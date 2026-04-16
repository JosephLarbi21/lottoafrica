"use client";

import { useState } from "react";

export default function PlayPage() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const numbers = Array.from({ length: 49 }, (_, i) => i + 1);

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else {
      if (selectedNumbers.length < 6) {
        setSelectedNumbers([...selectedNumbers, num]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Pick 6 Numbers</h1>

      <div className="grid grid-cols-7 gap-3 max-w-md">
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            className={`p-3 rounded-full text-center font-bold 
              ${
                selectedNumbers.includes(num)
                  ? "bg-green-500 text-black"
                  : "bg-gray-800"
              }`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl">Selected:</h2>
        <p>{selectedNumbers.join(", ") || "None"}</p>
      </div>
      <button
        onClick={() => {
          if (selectedNumbers.length === 6) {
            const existing = JSON.parse(
              localStorage.getItem("tickets") || "[]",
            );

            const newTicket = {
              numbers: selectedNumbers,
              date: new Date().toISOString(),
            };

            localStorage.setItem(
              "tickets",
              JSON.stringify([...existing, newTicket]),
            );

            alert("Ticket placed successfully 🎉");
            setSelectedNumbers([]);
          } else {
            alert("Please select 6 numbers");
          }
        }}
        className="mt-6 bg-green-500 text-black px-6 py-3 rounded font-bold"
      >
        Place Bet
      </button>
    </div>
  );
}
