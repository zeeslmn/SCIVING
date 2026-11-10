"use client";

import React from "react";
import { MailOpen, Heart } from "lucide-react";
import { InvitationData } from "@/types/invitation";

interface OpeningCoverProps {
  data: InvitationData;
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({
  data,
  guestName,
  isOpen,
  onOpen,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#251e19] text-[#fbf8f4] transition-all duration-1000 ease-in-out ${
        isOpen
          ? "opacity-0 pointer-events-none -translate-y-full scale-105"
          : "opacity-100 translate-y-0 scale-100"
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(24, 18, 14, 0.78), rgba(24, 18, 14, 0.88)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md px-6 py-12 text-center flex flex-col items-center justify-between min-h-screen sm:min-h-[640px] sm:justify-center">
        {/* Top Header */}
        <div className="space-y-3 pt-6 sm:pt-0">
          <p className="tracking-[0.35em] text-xs uppercase text-[#decbb1] font-light">
            THE WEDDING OF
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#faf6ee] font-medium tracking-wide">
            {data.groom.name} &amp; {data.bride.name}
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-10 bg-[#decbb1]/40"></span>
            <Heart className="w-3.5 h-3.5 text-[#ba9567] fill-[#ba9567]" />
            <span className="h-[1px] w-10 bg-[#decbb1]/40"></span>
          </div>
        </div>

        {/* Center / Guest Greeting */}
        <div className="my-8 w-full">
          <div className="relative mx-auto p-6 rounded-2xl glass-card-dark border border-[#ba9567]/30 shadow-2xl max-w-xs backdrop-blur-md">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ba9567] text-[#251e19] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
              Undangan Khusus
            </div>
            
            <p className="text-xs text-[#decbb1]/80 mt-2 font-light">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#f5f0e8] mt-2 capitalize break-words">
              {guestName || "Tamu Undangan"}
            </h2>
            <p className="text-[11px] text-[#decbb1]/60 mt-1 italic">
              di Tempat
            </p>
          </div>
        </div>

        {/* Bottom / Open Invitation Button */}
        <div className="pb-8 sm:pb-0 space-y-4">
          <p className="text-xs text-[#decbb1]/80 max-w-xs font-light leading-relaxed">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di momen bahagia kami.
          </p>
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ba9567] via-[#cfad80] to-[#ba9567] text-[#251e19] font-medium text-sm tracking-wide shadow-lg hover:shadow-[#ba9567]/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

