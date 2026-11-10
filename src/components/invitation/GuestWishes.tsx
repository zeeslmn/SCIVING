import React from "react";
import { MessageSquareHeart, CheckCircle, Clock } from "lucide-react";
import { WishMessage } from "@/types/invitation";

interface GuestWishesProps {
  wishes: WishMessage[];
}

export const GuestWishes: React.FC<GuestWishesProps> = ({ wishes }) => {
  return (
    <section id="wishes" className="py-12 px-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#decbb1]/60">
        <div className="flex items-center gap-2">
          <MessageSquareHeart className="w-5 h-5 text-[#ba9567]" />
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#3b2e25]">
            Ucapan &amp; Doa ({wishes.length})
          </h3>
        </div>
        <span className="text-xs text-[#866342]">Terbaru</span>
      </div>

      <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-1">
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="p-4 rounded-2xl glass-card border border-[#decbb1]/50 shadow-xs space-y-2 transition hover:border-[#ba9567]/50"
          >
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#3b2e25]">{wish.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f5f0e8] text-[#866342]">
                  {wish.relationship}
                </span>
              </div>
              <span className="text-[10px] text-stone-400 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {wish.createdAt}
              </span>
            </div>

            <p className="text-xs text-[#5a4331] leading-relaxed">
              {wish.message}
            </p>

            <div className="pt-1">
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md ${
                  wish.attendance === "hadir"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : wish.attendance === "ragu"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                <CheckCircle className="w-2.5 h-2.5" />
                {wish.attendance === "hadir"
                  ? "Hadir"
                  : wish.attendance === "ragu"
                  ? "Ragu-ragu"
                  : "Berhalangan"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

