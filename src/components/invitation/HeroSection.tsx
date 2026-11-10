"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Clock, Heart } from "lucide-react";
import { InvitationData } from "@/types/invitation";

interface HeroSectionProps {
  data: InvitationData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const targetDate = data.events[0]?.date || "2026-12-20";
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center filter brightness-[0.92]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(253, 251, 247, 0.4), rgba(253, 251, 247, 0.95)), url('${data.gallery[0]?.url}')`,
        }}
      />

      <div className="max-w-xl mx-auto space-y-8 animate-fade-in">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ba9567]/40 bg-[#fdf8f6]/80 text-[#835345] text-xs uppercase tracking-[0.25em] font-medium shadow-sm">
          <span>The Wedding Celebration</span>
        </div>

        {/* Big names */}
        <div className="space-y-3">
          <h1 className="font-serif text-4xl sm:text-6xl text-[#4a3b32] font-normal tracking-wide">
            {data.groom.name}
          </h1>
          <div className="font-script text-3xl sm:text-4xl text-[#ba9567]">
            &amp;
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#4a3b32] font-normal tracking-wide">
            {data.bride.name}
          </h2>
        </div>

        {/* Date display */}
        <div className="flex items-center justify-center gap-3 text-sm tracking-widest uppercase text-[#735e51] font-light">
          <span>Minggu</span>
          <span>•</span>
          <span className="font-medium text-[#4a3b32]">20 Desember 2026</span>
          <span>•</span>
          <span>Jakarta</span>
        </div>

        {/* Countdown Box */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-sm mx-auto pt-4">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-3 sm:p-4 text-center border border-[#ba9567]/30 shadow-md"
            >
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#5a4331]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-[#866342] uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        {data.quote && (
          <div className="mt-8 p-6 rounded-2xl glass-card max-w-md mx-auto text-center border border-[#ba9567]/25 shadow-sm">
            <Heart className="w-4 h-4 mx-auto mb-3 text-[#ba9567] fill-[#ba9567]/20" />
            <p className="text-xs sm:text-sm text-[#5a4331] italic leading-relaxed font-serif">
              &ldquo;{data.quote.verse}&rdquo;
            </p>
            <p className="text-[11px] text-[#866342] mt-2 font-medium tracking-wide">
              — {data.quote.source}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

