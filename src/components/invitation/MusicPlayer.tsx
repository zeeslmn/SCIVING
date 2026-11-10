"use client";

import React, { useEffect, useRef, useState } from "react";
import { Disc3, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  musicUrl: string;
  autoPlayTrigger: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  musicUrl,
  autoPlayTrigger,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was blocked by browser policy until interaction
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="fixed top-5 right-5 z-40">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
        className="flex items-center gap-2 p-2.5 sm:px-3 sm:py-2 rounded-full glass-card border border-[#ba9567]/50 shadow-lg text-[#5a4331] hover:text-[#ba9567] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <div className={`relative ${isPlaying ? "animate-spin [animation-duration:5s]" : ""}`}>
          <Disc3 className="w-5 h-5 text-[#ba9567]" />
        </div>
        <span className="hidden sm:inline text-xs font-medium tracking-wide">
          {isPlaying ? "Musik Aktif" : "Putar Musik"}
        </span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#ba9567]" />
        ) : (
          <VolumeX className="w-4 h-4 text-stone-400" />
        )}
      </button>
    </div>
  );
};

