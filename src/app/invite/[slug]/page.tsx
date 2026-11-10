"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { initialInvitationData } from "@/data/defaultInvitation";
import { WishMessage } from "@/types/invitation";
import { OpeningCover } from "@/components/invitation/OpeningCover";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { HeroSection } from "@/components/invitation/HeroSection";
import { CoupleSection } from "@/components/invitation/CoupleSection";
import { EventSchedule } from "@/components/invitation/EventSchedule";
import { LoveStory } from "@/components/invitation/LoveStory";
import { GallerySection } from "@/components/invitation/GallerySection";
import { DigitalEnvelope } from "@/components/invitation/DigitalEnvelope";
import { RsvpForm } from "@/components/invitation/RsvpForm";
import { GuestWishes } from "@/components/invitation/GuestWishes";
import { BottomNav } from "@/components/invitation/BottomNav";
import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export default function InvitationPage() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get("to") || "Bapak / Ibu / Saudara/i";

  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState<WishMessage[]>(initialInvitationData.wishes);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  const handleAddWish = (newWish: WishMessage) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-[#fdfbf7] text-[#2d2621]">
      {/* Opening Envelope Cover */}
      <OpeningCover
        data={initialInvitationData}
        guestName={guestNameParam}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Floating Music Controller */}
      <MusicPlayer
        musicUrl={initialInvitationData.musicUrl}
        autoPlayTrigger={isOpen}
      />

      {/* Main Content (Revealed after opening) */}
      <main className="relative pb-24">
        <HeroSection data={initialInvitationData} />
        <CoupleSection data={initialInvitationData} />
        <EventSchedule data={initialInvitationData} />
        <LoveStory stories={initialInvitationData.story} />
        <GallerySection gallery={initialInvitationData.gallery} />
        <DigitalEnvelope
          bankAccounts={initialInvitationData.bankAccounts}
          physicalGift={initialInvitationData.physicalGift}
        />
        <RsvpForm onAddWish={handleAddWish} guestName={guestNameParam} />
        <GuestWishes wishes={wishes} />

        {/* Elegant Footer & Watermark */}
        <footer className="mt-16 pt-12 pb-16 text-center border-t border-[#decbb1]/40 px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#ba9567]">
            <Heart className="w-4 h-4 fill-[#ba9567]" />
            <span className="font-serif text-lg tracking-wider text-[#4a3b32]">
              {initialInvitationData.groom.name} &amp; {initialInvitationData.bride.name}
            </span>
            <Heart className="w-4 h-4 fill-[#ba9567]" />
          </div>
          <p className="text-xs text-[#866342]">
            Terima kasih atas doa dan kehadiran Anda di hari bahagia kami.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] bg-[#f5f0e8] hover:bg-[#ebd9b8] text-[#5a4331] transition shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ba9567]" />
              <span>Dibuat dengan <strong>SCIVING</strong> • Buat Undanganmu</span>
            </Link>
          </div>
        </footer>

        {/* Floating Bottom Navigation */}
        {isOpen && <BottomNav />}
      </main>
    </div>
  );
}

