"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  MessageSquareHeart,
  Share2,
  Plus,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Search,
  Filter,
  Send,
  Trash2,
  Calendar,
  Eye,
} from "lucide-react";
import { GuestItem } from "@/types/invitation";

const initialGuests: GuestItem[] = [
  { id: "g-1", name: "Bpk. Bambang Sutrisno & Keluarga", phone: "6281234567801", category: "VIP", status: "Terkonfirmasi" },
  { id: "g-2", name: "Anissa Putri & Partner", phone: "6281234567802", category: "Teman", status: "Terkirim" },
  { id: "g-3", name: "Dimas Anggara", phone: "6281234567803", category: "Teman", status: "Terkonfirmasi" },
  { id: "g-4", name: "Keluarga Besar Gunawan", phone: "6281234567804", category: "Keluarga", status: "Terkonfirmasi" },
  { id: "g-5", name: "Rizky Ramadhan", phone: "6281234567805", category: "Rekan Kerja", status: "Belum Dikirim" },
];

export default function DashboardPage() {
  const [guests, setGuests] = useState<GuestItem[]>(initialGuests);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New guest modal state
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCategory, setNewCategory] = useState<GuestItem["category"]>("Teman");
  const [showAddModal, setShowAddModal] = useState(false);

  const invitationSlug = "raditya-dan-sekar";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";

  const getInviteUrl = (guestName: string) => {
    return `${baseUrl}/invite/${invitationSlug}?to=${encodeURIComponent(guestName)}`;
  };

  const getWhatsAppShareUrl = (guest: GuestItem) => {
    const inviteUrl = getInviteUrl(guest.name);
    const message = `Halo ${guest.name},

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk menghadiri acara pernikahan kami:

*The Wedding of Raditya & Sekar*
📅 Minggu, 20 Desember 2026

Untuk info detail acara, waktu, serta lokasi, silakan kunjungi tautan undangan digital Anda di bawah ini:
${inviteUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.

Terima kasih.
Salam hangat,
*Raditya & Sekar*`;

    const cleanPhone = guest.phone ? guest.phone.replace(/[^0-9]/g, "") : "";
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleCopyLink = (guest: GuestItem) => {
    const url = getInviteUrl(guest.name);
    navigator.clipboard.writeText(url);
    setCopiedId(guest.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newGuest: GuestItem = {
      id: "g-" + Date.now(),
      name: newName.trim(),
      phone: newPhone.trim(),
      category: newCategory,
      status: "Belum Dikirim",
    };

    setGuests([newGuest, ...guests]);
    setNewName("");
    setNewPhone("");
    setShowAddModal(false);
  };

  const handleDeleteGuest = (id: string) => {
    setGuests(guests.filter((g) => g.id !== id));
  };

  const filteredGuests = guests.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || g.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#2d2621]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#decbb1]/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-serif text-xl font-bold tracking-wide text-[#3b2e25]">
            SCIVING<span className="text-[#ba9567]">.</span>
          </Link>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#ba9567]/15 text-[#866342] text-xs font-medium">
            Studio Pengantin
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/invite/${invitationSlug}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ba9567]/60 text-xs font-medium text-[#5a4331] hover:bg-[#ba9567]/10 transition shadow-xs"
          >
            <Eye className="w-3.5 h-3.5 text-[#ba9567]" />
            <span>Lihat Undangan</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-[#ba9567] text-[#251e19] flex items-center justify-center font-serif font-bold text-xs shadow-sm">
            RS
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Banner Welcome */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#382d25] via-[#4d3e33] to-[#382d25] text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#decbb1] font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#ba9567]" />
              Undangan Aktif
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium">
              Raditya Pratama &amp; Sekar Ayu
            </h1>
            <p className="text-xs text-[#decbb1]/80 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#ba9567]" />
              Minggu, 20 Desember 2026 • 248 Hari Lagi
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ba9567] text-[#251e19] text-xs font-semibold hover:bg-[#cfad80] transition shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Tamu</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#decbb1]/60 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span className="text-xs font-medium text-stone-600">Total Tamu</span>
              <Users className="w-4 h-4 text-[#ba9567]" />
            </div>
            <p className="text-2xl font-serif font-bold text-[#3b2e25]">{guests.length}</p>
            <p className="text-[11px] text-stone-500">Tercatat di sistem</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#decbb1]/60 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span className="text-xs font-medium text-stone-600">Konfirmasi Hadir</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-serif font-bold text-emerald-700">
              {guests.filter((g) => g.status === "Terkonfirmasi").length}
            </p>
            <p className="text-[11px] text-emerald-600">Siap hadir di hari H</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#decbb1]/60 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span className="text-xs font-medium text-stone-600">Ucapan Masuk</span>
              <MessageSquareHeart className="w-4 h-4 text-[#ba9567]" />
            </div>
            <p className="text-2xl font-serif font-bold text-[#3b2e25]">24</p>
            <p className="text-[11px] text-stone-500">Doa restu dari tamu</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#decbb1]/60 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span className="text-xs font-medium text-stone-600">Undangan Disebar</span>
              <Share2 className="w-4 h-4 text-sky-600" />
            </div>
            <p className="text-2xl font-serif font-bold text-sky-700">
              {guests.filter((g) => g.status !== "Belum Dikirim").length}
            </p>
            <p className="text-[11px] text-stone-500">Link terkirim</p>
          </div>
        </div>

        {/* Guest Management Table */}
        <div className="bg-white rounded-3xl border border-[#decbb1]/70 shadow-xs overflow-hidden">
          {/* Header & Controls */}
          <div className="p-5 sm:p-6 border-b border-[#decbb1]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3b2e25]">
                Daftar Tamu &amp; Broadcast WhatsApp
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Kirim undangan personal dengan nama tamu langsung tertera di cover
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama tamu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
                />
              </div>

              {/* Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
              >
                <option value="Semua">Semua Kategori</option>
                <option value="VIP">VIP</option>
                <option value="Keluarga">Keluarga</option>
                <option value="Teman">Teman</option>
                <option value="Rekan Kerja">Rekan Kerja</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#faf8f5] text-stone-500 uppercase tracking-wider text-[10px] border-b border-[#decbb1]/40">
                <tr>
                  <th className="px-6 py-3.5">Nama Tamu</th>
                  <th className="px-4 py-3.5">Kategori</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Aksi &amp; WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredGuests.map((guest) => (
                  <tr key={guest.id} className="hover:bg-stone-50/70 transition">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-stone-800 text-sm">{guest.name}</p>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        {guest.phone || "Nomor WA belum dicatat"}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#f5f0e8] text-[#866342]">
                        {guest.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                          guest.status === "Terkonfirmasi"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : guest.status === "Terkirim"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {guest.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Copy Link */}
                        <button
                          onClick={() => handleCopyLink(guest)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 transition"
                          title="Salin Link Personal"
                        >
                          {copiedId === guest.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-[10px] text-emerald-600 font-medium">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px]">Salin Link</span>
                            </>
                          )}
                        </button>

                        {/* WhatsApp Send */}
                        <a
                          href={getWhatsAppShareUrl(guest)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition shadow-xs"
                          title="Kirim via WhatsApp"
                        >
                          <Send className="w-3 h-3" />
                          <span>Kirim WA</span>
                        </a>

                        {/* Delete */}
                        <button
                          onClick={() => handleDeleteGuest(guest.id)}
                          className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Add Guest */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-serif text-lg font-bold text-stone-800">
                Tambah Tamu Baru
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-600 text-lg leading-none"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddGuest} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Nama Tamu / Pasangan / Keluarga
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Gunawan &amp; Partner"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Nomor WhatsApp (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 08123456789 atau 628123456789"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Kategori Tamu
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ba9567]"
                >
                  <option value="VIP">VIP</option>
                  <option value="Keluarga">Keluarga</option>
                  <option value="Teman">Teman</option>
                  <option value="Rekan Kerja">Rekan Kerja</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2 rounded-xl border border-stone-200 text-xs font-medium text-stone-600 hover:bg-stone-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-[#ba9567] text-[#251e19] text-xs font-semibold hover:bg-[#cfad80] transition"
                >
                  Simpan Tamu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

