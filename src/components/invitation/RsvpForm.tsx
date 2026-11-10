"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Send, Users } from "lucide-react";
import { WishMessage } from "@/types/invitation";

interface RsvpFormProps {
  onAddWish: (wish: WishMessage) => void;
  guestName?: string;
}

export const RsvpForm: React.FC<RsvpFormProps> = ({ onAddWish, guestName }) => {
  const [name, setName] = useState(guestName || "");
  const [relationship, setRelationship] = useState("Sahabat / Teman");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | "ragu">("hadir");
  const [pax, setPax] = useState("1");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#ba9567", "#ecd8b5", "#a63232", "#ffffff"],
      });
    } catch {
      // fallback if canvas-confetti is not loaded
    }

    const newWish: WishMessage = {
      id: "wish-" + Date.now(),
      name: name.trim(),
      relationship,
      attendance,
      message: message.trim(),
      createdAt: "Baru saja",
    };

    onAddWish(newWish);
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-20 px-4 max-w-xl mx-auto text-center">
      <div className="space-y-3 mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          KONFIRMASI KEHADIRAN
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          RSVP &amp; Doa Restu
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto">
          Mohon konfirmasikan kehadiran Anda untuk membantu kami menyiapkan jamuan terbaik:
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#ba9567]/35 shadow-lg text-left">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-3 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-[#ba9567] mx-auto" />
            <h3 className="font-serif text-xl font-semibold text-[#3b2e25]">
              Terima Kasih Banyak!
            </h3>
            <p className="text-xs sm:text-sm text-[#735e51] leading-relaxed">
              Konfirmasi kehadiran dan doa tulus Anda telah kami terima dengan penuh rasa syukur.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setMessage("");
              }}
              className="mt-4 text-xs text-[#ba9567] underline hover:text-[#866342]"
            >
              Kirim ucapan atau pesan lainnya
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#5a4331] mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-4 py-2.5 rounded-xl border border-[#decbb1] bg-white/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5a4331] mb-1">
                Hubungan / Kerabat
              </label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#decbb1] bg-white/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
              >
                <option value="Sahabat / Teman">Sahabat / Teman</option>
                <option value="Keluarga Mempelai Pria">Keluarga Mempelai Pria</option>
                <option value="Keluarga Mempelai Wanita">Keluarga Mempelai Wanita</option>
                <option value="Rekan Kerja / Kantor">Rekan Kerja / Kantor</option>
                <option value="Tamu Undangan">Tamu Undangan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5a4331] mb-1">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "hadir", label: "Akan Hadir" },
                  { value: "ragu", label: "Masih Ragu" },
                  { value: "tidak_hadir", label: "Berhalangan" },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setAttendance(item.value as any)}
                    className={`py-2 px-2 text-xs rounded-xl font-medium transition border ${
                      attendance === item.value
                        ? "bg-[#ba9567] text-[#251e19] border-[#ba9567] shadow-sm font-semibold"
                        : "bg-white/60 text-[#735e51] border-[#decbb1] hover:bg-[#ba9567]/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {attendance === "hadir" && (
              <div>
                <label className="block text-xs font-medium text-[#5a4331] mb-1">
                  Jumlah Tamu Hadir
                </label>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ba9567]" />
                  <select
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#decbb1] bg-white/70 text-xs focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#5a4331] mb-1">
                Doa &amp; Ucapan Selamat
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa tulus Anda untuk kedua mempelai..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#decbb1] bg-white/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#ba9567] to-[#ba9567] text-[#251e19] text-xs sm:text-sm font-semibold hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Konfirmasi &amp; Ucapan</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

