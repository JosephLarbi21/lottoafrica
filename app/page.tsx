import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LotteryCards from "@/components/LotteryCards";

export const metadata: Metadata = {
  title: "Home | Lotto Africa",
  description:
    "Play and win big with Lotto Africa. Join the excitement and chase the millions.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <LotteryCards />
    </>
  );
}
