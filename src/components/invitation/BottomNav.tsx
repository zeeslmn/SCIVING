"use client";

import React, { useState, useEffect } from "react";
import { Home, Users, Calendar, BookOpen, Image as ImageIcon, Send, Gift } from "lucide-react";

export const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "couple", label: "Mempelai", icon: Users },
    { id: "event", label: "Acara", icon: Calendar },
    { id: "story", label: "Kisah", icon: BookOpen },
    { id: "gallery", label: "Galeri", icon: ImageIcon },
    { id: "rsvp", label: "RSVP", icon: Send },
    { id: "gift", label: "Kado", icon: Gift },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-fit">
      <nav
        aria-label="Navigasi Undangan"
        className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full glass-card-dark text-[#decbb1] border border-[#ba9567]/40 shadow-2xl backdrop-blur-lg"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#ba9567] text-[#251e19] font-medium shadow-sm scale-105"
                  : "text-[#decbb1]/80 hover:text-white hover:bg-white/10"
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] hidden sm:block tracking-tighter">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

