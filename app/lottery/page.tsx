import LotteryCards from "@/components/LotteryCards";

export default function LotteryPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10">Lottery Tickets</h1>

        <LotteryCards />
      </div>
    </div>
  );
}
